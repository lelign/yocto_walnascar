#include <linux/init.h>
#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/fs.h>
#include <linux/dma-mapping.h>
#include <linux/delay.h>
#include <linux/slab.h>
#include <linux/interrupt.h>
#include <linux/platform_device.h>
#include <linux/mod_devicetable.h>
#include <linux/of.h>
#include <linux/of_address.h>
#include <linux/of_platform.h>
#include <linux/cdev.h>
#include <linux/major.h>
#include <linux/mm.h>
#include <linux/device.h>
#include <linux/vmalloc.h> 
#include <asm/io.h>
#include <linux/ioctl.h>
#include <linux/mutex.h>
#include <linux/wait.h>

MODULE_LICENSE("GPL");
MODULE_AUTHOR("Altera OpenSource Dev");
MODULE_DESCRIPTION("Monolithic 8MB RGB888 Video Overlay Driver for Arria 10 (Linux 6.12)");

#define DRV_NAME "mtv-overlay"
#define OVERLAY_REG_BASE  0xFF204A00 
#define OVERLAY_REG_SIZE  0x0030
//#define BUFF_SIZE (1024*1024*8)
/* ИСПРАВЛЕНО: Строгий размер Full HD кадра YCrCb для синхронизации с Qt (4 147 200 байт) */
//#define BUFF_SIZE (1920 * 1080 * 2) 
/*[   57.838491] mtv-overlay MMAP DEBUG:
[   57.842047]   -> Qt requested size: 4149248 bytes
[   57.846830]   -> Driver BUFF_SIZE:  4147200 bytes
[   57.851520]   -> Kernel vmalloc ptr: 82b51979
[   57.855942]   -> VMA flags: 0xfb
   Вот она, истинная причина сбоя! Логи отладки показали критическое расхождение в размерах:
   Driver BUFF_SIZE: 4 147 200 байт (это ровно 1920 × 1080 × 2).Qt requested size: 4 149 248 байт.
   Разница составляет ровно 2048 байт (ровно половина страницы памяти PAGE_SIZE, которая на архитектуре 
   ARMv7 равна 4096 байтам).🧩 Почему так произошло?В Linux любой маппинг через mmap в пространстве 
   пользователя обязан быть кратен размеру страницы памяти (PAGE_SIZE = 4096 байт).
   Ваш чистый размер кадра 4 147 200 при делении на 4096 дает 1012.5 страниц.
   Вызов mmap со стороны Qt/C++ (или выделение памяти внутри графического фреймворка) 
   автоматически округлил размер вверх до ближайшей целой страницы, чтобы выровнять участок памяти. 
   Ближайшее число — это 1013 страниц, что равняется строго 4 149 248 байтам.
   Функция remap_vmalloc_range видит, что Qt просит 4149248 байт, а буфер драйвера имеет 
   размер всего 4147200 байт. 
   Ядро понимает, что если оно разрешит маппинг, Qt зайдет за границы буфера драйвера на 2048 байт. 
   Ядро пресекает это и возвращает ошибку.
*/
/* ИСПРАВЛЕНО: Размер увеличен до 4149248 байт (1013 страниц по 4КБ) для выравнивания с Qt */
#define BUFF_SIZE 6221824 //02_07 with 4149248  mtv-overlay: remap_vmalloc_range failed (size mismatch or flags conflict!)

/* Регистры mSGDMA */
#define DMATS_CONTROL 0x0000
#define DMATS_DESC 0x0020
#define DMA_DESC_READ 0x00
#define DMA_DESC_LEN 0x08
#define DMA_DESC_CONTROL 0x0C

#define STRMEM_MAGIC 'm'
#define STRMEM_IOCTL_LOCK_BUFFER    _IO(STRMEM_MAGIC, 10)
#define STRMEM_IOCTL_UNLOCK_BUFFER  _IO(STRMEM_MAGIC, 11)

struct board_info {
        void __iomem *mem_reg;
        struct device *mtv_device;
        dma_addr_t dma;
        void *virt;
        struct cdev cdev;
        dev_t devt;

        int is_locked;                  
        wait_queue_head_t wait_queue;   
        struct mutex lock;              
};

static struct class *mtv_class = NULL;

static int mtv_open(struct inode *inode, struct file *filp);
static ssize_t mtv_write(struct file *filp, const char __user *buf, size_t count, loff_t *f_pos);
static int mtv_mmap(struct file *filp, struct vm_area_struct *vma);
static int mtv_release(struct inode *inode, struct file *filp);
static long mtv_ioctl(struct file *filp, unsigned int ioctl_num, unsigned long ioctl_param);

static const struct file_operations mtv_fops = {
        .owner          = THIS_MODULE,
        .open           = mtv_open,
        .write          = mtv_write,
        .mmap           = mtv_mmap,
        .release        = mtv_release,
        .unlocked_ioctl = mtv_ioctl,
};

static void reg_write(struct board_info *board, unsigned int base, unsigned int addr, unsigned int data)
{
        iowrite32(data, board->mem_reg + (base + addr));
}

static void dma_post(struct board_info *board)
{
        /* ИСПРАВЛЕНО: 1920 * 1080 * 2 байта для YCrCb */
        int video_size = 1920 * 1080 * 2;  /* 4147200 байт */
        
        reg_write(board, DMATS_CONTROL, 0, 0 | (1 << 1)); /* Reset */
        reg_write(board, DMATS_CONTROL, 0, 0);             
        
        reg_write(board, DMATS_DESC, DMA_DESC_READ, (unsigned int)board->dma);
        reg_write(board, DMATS_DESC, DMA_DESC_LEN, video_size);
        reg_write(board, DMATS_DESC, DMA_DESC_CONTROL, 
                  (1 << 31) | (1 << 15) | (1 << 14) | (1 << 9) | (1 << 8));
}

static int mtv_open(struct inode *inode, struct file *filp)
{
        struct board_info *board = container_of(inode->i_cdev, struct board_info, cdev);
        filp->private_data = board;
        return 0;
}

static ssize_t mtv_write(struct file *filp, const char __user *buf, size_t count, loff_t *f_pos)
{
        struct board_info *board = filp->private_data;
        if (!board) return -EFAULT;

        /* Безопасное засыпание потока Qt, если утилита делает дамп */
        if (wait_event_interruptible(board->wait_queue, !board->is_locked)) {
                return -ERESTARTSYS; 
        }

        dma_post(board); 
        return count;
}

static long mtv_ioctl(struct file *filp, unsigned int ioctl_num, unsigned long ioctl_param)
{
        struct board_info *board = filp->private_data;
        if (!board) return -EFAULT;

        switch (ioctl_num) {
        case STRMEM_IOCTL_LOCK_BUFFER:
                mutex_lock(&board->lock);
                board->is_locked = 1;
                mutex_unlock(&board->lock);
                dev_info(board->mtv_device, "Buffer LOCKED. Qt suspended.\n");
                break;

        case STRMEM_IOCTL_UNLOCK_BUFFER:
                mutex_lock(&board->lock);
                board->is_locked = 0;
                mutex_unlock(&board->lock);
                wake_up_interruptible(&board->wait_queue); /* Пробуждение Qt */
                dev_info(board->mtv_device, "Buffer UNLOCKED. Qt resumed.\n");
                break;

        default:
                return -ENOTTY;
        }
        return 0;
}

/*static int mtv_mmap(struct file *filp, struct vm_area_struct *vma)
{
        struct board_info *board = filp->private_data;
        if (!board || !board->virt) return -EFAULT;

        vma->vm_page_prot = pgprot_noncached(vma->vm_page_prot);
        vm_flags_set(vma, VM_SHARED | VM_DONTEXPAND | VM_DONTDUMP);

        if (remap_vmalloc_range(vma, board->virt, 0)) {
                pr_err("mtv-overlay: remap_vmalloc_range failed\n");
                return -EAGAIN;
        }
        return 0;
}
*/


/*вывод расширенной отладочной информации прямо в функцию mtv_mmap вашего драйвера. Это покажет, с какими параметрами приложение Qt приходит в ядро, и какой адрес у vmalloc на самом деле*/
static int mtv_mmap(struct file *filp, struct vm_area_struct *vma)
{
        struct board_info *board = filp->private_data;
        size_t requested_size = vma->vm_end - vma->vm_start;

        if (!board || !board->virt) return -EFAULT;

        // ВЫВОД ВСЕХ АДРЕСОВ И РАЗМЕРОВ В DMESG
        pr_info("mtv-overlay MMAP DEBUG:\n");
        pr_info("  -> Qt requested size: %zu bytes\n", requested_size);
        pr_info("  -> Driver BUFF_SIZE:  %d bytes\n", BUFF_SIZE);
        pr_info("  -> Kernel vmalloc ptr: %p\n", board->virt);
        pr_info("  -> VMA flags: 0x%lx\n", vma->vm_flags);

        vma->vm_page_prot = pgprot_noncached(vma->vm_page_prot);
        vm_flags_set(vma, VM_SHARED | VM_DONTEXPAND | VM_DONTDUMP);

        if (remap_vmalloc_range(vma, board->virt, 0)) {
                pr_err("mtv-overlay: remap_vmalloc_range failed (size mismatch or flags conflict!)\n");
                return -EAGAIN;
        }
        return 0;
}


static int mtv_release(struct inode *inode, struct file *filp)
{
        return 0;
}

static int mtv_overlay_probe(struct platform_device *pdev)
{
        struct board_info *board;
        struct resource *res;
        int ret;

        dev_info(&pdev->dev, "Modern Probe started for Linux 6.12 (8MB RGB888 Mode)\n");

        board = devm_kzalloc(&pdev->dev, sizeof(*board), GFP_KERNEL);
        if (!board) return -ENOMEM;

        platform_set_drvdata(pdev, board);

        /* ИСПРАВЛЕНО: Критически важная инициализация примитивов синхронизации! */
        init_waitqueue_head(&board->wait_queue);
        mutex_init(&board->lock);
        board->is_locked = 0;

        res = platform_get_resource(pdev, IORESOURCE_MEM, 0);
        board->mem_reg = devm_ioremap_resource(&pdev->dev, res);
        if (IS_ERR(board->mem_reg)) return PTR_ERR(board->mem_reg);

        board->virt = vmalloc_user(BUFF_SIZE);
        if (!board->virt) {
                dev_err(&pdev->dev, "vmalloc_user 8MB Memory allocation failed\n");
                return -ENOMEM;
        }
        memset(board->virt, 0, BUFF_SIZE);

        board->dma = vmalloc_to_pfn(board->virt) << PAGE_SHIFT;

        dev_info(&pdev->dev, "==================================================\n");
        dev_info(&pdev->dev, "6.12 MONOLITHIC PHYSICAL ADDRESS: %pad\n", &board->dma);
        dev_info(&pdev->dev, "==================================================\n");

        ret = alloc_chrdev_region(&board->devt, 0, 1, DRV_NAME);
        if (ret < 0) goto err_free_vmalloc;

        cdev_init(&board->cdev, &mtv_fops);
        board->cdev.owner = THIS_MODULE;
        ret = cdev_add(&board->cdev, board->devt, 1);
        if (ret < 0) goto err_unregister;

        /* ИСПРАВЛЕНО: Завершено создание узла */
        board->mtv_device = device_create(mtv_class, &pdev->dev, board->devt, NULL, DRV_NAME);
        if (IS_ERR(board->mtv_device)) {
                ret = PTR_ERR(board->mtv_device);
                goto err_cdev_del;
        }

        dev_info(&pdev->dev, "Modern initialization completed successfully!\n");
        return 0;

err_cdev_del:
        cdev_del(&board->cdev);
err_unregister:
        unregister_chrdev_region(board->devt, 1);
err_free_vmalloc:
        vfree(board->virt);
        return ret;
}

static void mtv_overlay_remove(struct platform_device *pdev)
{
        struct board_info *board = platform_get_drvdata(pdev);
        if (board) {
                if (board->mtv_device)
                        device_destroy(mtv_class, board->devt);
                cdev_del(&board->cdev);
                unregister_chrdev_region(board->devt, 1);
                if (board->virt) vfree(board->virt);
        }
        dev_info(&pdev->dev, "Driver removed successfully\n");
}

static const struct of_device_id mtv_overlay_of_match[] = {
        { .compatible = "pfrt,overlay" },
        { /* sentinel */ }
};
MODULE_DEVICE_TABLE(of, mtv_overlay_of_match);

static struct platform_driver mtv_overlay_driver = {
        .probe  = mtv_overlay_probe,
        .remove = mtv_overlay_remove,
        .driver = {
                .name   = DRV_NAME,
                .owner  = THIS_MODULE,
                .of_match_table = mtv_overlay_of_match,
        },
};

static int __init mtv_overlay_init(void)
{
        int ret;
        mtv_class = class_create(DRV_NAME);
        if (IS_ERR(mtv_class)) return PTR_ERR(mtv_class);

        ret = platform_driver_register(&mtv_overlay_driver);
        if (ret) {
                class_destroy(mtv_class);
                return ret;
        }
        return 0;
}

static void __exit mtv_overlay_exit(void)
{
        platform_driver_unregister(&mtv_overlay_driver);
        if (mtv_class) class_destroy(mtv_class);
}

module_init(mtv_overlay_init);
module_exit(mtv_overlay_exit);
