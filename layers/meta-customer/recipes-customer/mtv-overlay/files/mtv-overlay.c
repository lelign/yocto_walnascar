#include <linux/init.h>
#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/fs.h>
#include <linux/delay.h>
#include <linux/slab.h>
#include <linux/platform_device.h>
#include <linux/mod_devicetable.h>
#include <linux/cdev.h>
#include <linux/mm.h>
#include <linux/device.h>
#include <linux/io.h>
#include <linux/ioctl.h>
#include <linux/mutex.h>
#include <linux/wait.h>
#include <linux/of.h>
#include <linux/of_address.h>

MODULE_LICENSE("GPL");
MODULE_AUTHOR("Altera OpenSource Dev");
MODULE_DESCRIPTION("Monolithic DTS Dynamic Overlay Video Driver for Arria 10 (Linux 6.12)");

#define DRV_NAME "mtv-overlay"

/* Регистры mSGDMA */
#define DMATS_CONTROL 0x0000
// #define DMATS_DESC 0x0020
// #define DMA_DESC_READ 0x00
// #define DMA_DESC_LEN 0x08
// #define DMA_DESC_CONTROL 0x0C

#define OVERLAY_MAGIC 'm'
#define OVERLAY_IOCTL_LOCK_BUFFER    _IO(OVERLAY_MAGIC, 10)
#define OVERLAY_IOCTL_UNLOCK_BUFFER  _IO(OVERLAY_MAGIC, 11)
#define OVERLAY_IOCTL_DMA_START      _IO(OVERLAY_MAGIC, 12)
#define OVERLAY_IOCTL_DMA_STOP       _IO(OVERLAY_MAGIC, 13)
/* Новые команды управления буферами */
#define OVERLAY_IOCTL_FLIP_BUFFER    _IOW(OVERLAY_MAGIC, 14, int)

/* Размер одного кадра 1920*1080*3 = 6220800 байт */
#define FRAME_SIZE /*6220800*/6221824

struct board_info {
        void __iomem *mem_reg;
        struct device *mtv_device;
        dma_addr_t dma;               /* Физический адрес региона из DTS */
        size_t mem_size;              /* Размер региона из DTS */
        void __iomem *virt;           /* Виртуальный адрес региона в ядре */
        struct cdev cdev;
        dev_t devt;

        int is_locked;                  
        wait_queue_head_t wait_queue;   
        struct mutex lock;              
};

static struct class *mtv_class = NULL;

static void reg_write(struct board_info *board, unsigned int base, unsigned int addr, unsigned int data)
{
        iowrite32(data, board->mem_reg + (base + addr));
}

/*static void dma_start(struct board_info *board){
        reg_write(board, DMATS_CONTROL, 1, 1 << 0); 
}

static void dma_stop(struct board_info *board){
        reg_write(board, DMATS_CONTROL, 1, 0);
}*/

/* Исправленный и безопасный блок управления mSGDMA */
static void dma_start(struct board_info *board){
        // Пишем 1 в регистр 0xFF200004 (смещение 4)
        reg_write(board, DMATS_CONTROL, 4, 1); 
}

static void dma_stop(struct board_info *board){
        // Пишем 0 в регистр 0xFF200004 (смещение 4), НЕ трогая регистр 0xFF200000!
        reg_write(board, DMATS_CONTROL, 4, 0); 
}

static void dma_init(struct board_info *board){
        reg_write(board, DMATS_CONTROL, 0, (board->dma / 1024));
        dma_start(board);
}

static int mtv_open(struct inode *inode, struct file *filp)
{
        struct board_info *board = container_of(inode->i_cdev, struct board_info, cdev);
        filp->private_data = board;
        pr_info("static int mtv_open\n");
        return 0;
}

/* Вызывается вашим Qt-приложением как триггер кадра (write 1 байта) */
static ssize_t mtv_write(struct file *filp, const char __user *buf, size_t count, loff_t *f_pos)
{
        struct board_info *board = filp->private_data;
        int video_size = (1920 * 1080 * 3) + 1024; 

        // pr_info("mtv_write !!!\n");

        if (!board || !board->virt) return -EFAULT;

        if (wait_event_interruptible(board->wait_queue, !board->is_locked)) {
                return -ERESTARTSYS; 
        }

        // Если вдруг юзерспейс решит передать полноценный кадр через write
        if (count > 1) {
                if (copy_from_user((__force void *)board->virt, buf, (count > video_size) ? video_size : count)) {
                        return -EFAULT;
                }
        }

        // Пинаем DMA на вычитку
        //dma_post(board); 
        return count;
}

// previos at 28_07_16:20
/*static long mtv_ioctl(struct file *filp, unsigned int ioctl_num, unsigned long ioctl_param)
{
        struct board_info *board = filp->private_data;
        if (!board) return -EFAULT;

        switch (ioctl_num) {
        case OVERLAY_IOCTL_LOCK_BUFFER:
                mutex_lock(&board->lock);
                board->is_locked = 1;
                mutex_unlock(&board->lock);
                break;

        case OVERLAY_IOCTL_UNLOCK_BUFFER:
                mutex_lock(&board->lock);
                board->is_locked = 0;
                mutex_unlock(&board->lock);
                wake_up_interruptible(&board->wait_queue);
                break;
        
        case OVERLAY_IOCTL_DMA_START:
                dma_start(board);
                break;
                
        case OVERLAY_IOCTL_DMA_STOP:
                dma_stop(board);
                break;

        default:
                return -ENOTTY;
        }
        pr_info("mtv_ioctl");
        return 0;
}*/

static long mtv_ioctl(struct file *filp, unsigned int ioctl_num, unsigned long ioctl_param)
{
        struct board_info *board = filp->private_data;
        int buffer_idx;
        dma_addr_t new_dma_addr;

        if (!board) return -EFAULT;

        switch (ioctl_num) {
        case OVERLAY_IOCTL_FLIP_BUFFER:
                /* Получаем номер буфера (0 или 1) из user-space */
                if (copy_from_user(&buffer_idx, (int __user *)ioctl_param, sizeof(buffer_idx))) {
                        return -EFAULT;
                }

                /* Рассчитываем физический адрес для mSGDMA */
                if (buffer_idx == 0) {
                        new_dma_addr = board->dma; // Начало региона (Буфер А)
                } else if (buffer_idx == 1) {
                        new_dma_addr = board->dma + FRAME_SIZE; // Смещение на 1 кадр (Буфер Б)
                } else {
                        return -EINVAL;
                }

                /* Мгновенно переключаем базовый адрес чтения mSGDMA (делим на 1024 по спецификации) */
                iowrite32((unsigned int)(new_dma_addr / 1024), board->mem_reg + DMATS_CONTROL);
                break;

        /* Оставляем старые кейсы для совместимости, если они нужны */
        case OVERLAY_IOCTL_LOCK_BUFFER:
                board->is_locked = 1;
                break;
        case OVERLAY_IOCTL_UNLOCK_BUFFER:
                board->is_locked = 0;
                wake_up_interruptible(&board->wait_queue);
                break;

        default:
                return -ENOTTY;
        }
        return 0;
}

/* Синхронизация mmap без процессорного кэширования ARM */
static int mtv_mmap(struct file *filp, struct vm_area_struct *vma)
{
        struct board_info *board = filp->private_data;
        unsigned long size = vma->vm_end - vma->vm_start;

        if (!board || !board->dma) return -EFAULT;
        if (size > board->mem_size) return -EINVAL;

        // Включаем Write-Combining для максимальной скорости заливки графики из Qt
        vma->vm_page_prot = pgprot_writecombine(vma->vm_page_prot);
        vm_flags_set(vma, VM_SHARED | VM_DONTEXPAND | VM_DONTDUMP);

        // Мапим физический кусок памяти в пространство пользователя с нулевого смещения
        if (remap_pfn_range(vma, vma->vm_start, board->dma >> PAGE_SHIFT, size, vma->vm_page_prot)) {
                return -EAGAIN;
        }
        return 0;
}

static int mtv_release(struct inode *inode, struct file *filp)
{
        pr_info("static int mtv_release");
        return 0;
}

static const struct file_operations mtv_fops = {
        .owner          = THIS_MODULE,
        .open           = mtv_open,
        .write          = mtv_write,
        .mmap           = mtv_mmap,
        .release        = mtv_release,
        .unlocked_ioctl = mtv_ioctl,
};

static int mtv_overlay_probe(struct platform_device *pdev)
{
        struct board_info *board;
        struct resource *res;
        struct device_node *mem_node;
        struct resource mem_res;
        int ret;

        //dev_info(&pdev->dev, "v35 DTS Clean Auto-Discovery Probe started\n");

        board = devm_kzalloc(&pdev->dev, sizeof(*board), GFP_KERNEL);
        if (!board) return -ENOMEM;
        platform_set_drvdata(pdev, board);

        init_waitqueue_head(&board->wait_queue);
        mutex_init(&board->lock);
        board->is_locked = 0;

        // 1. Отображаем регистры mSGDMA
        res = platform_get_resource(pdev, IORESOURCE_MEM, 0);
        board->mem_reg = devm_ioremap_resource(&pdev->dev, res);
        if (IS_ERR(board->mem_reg)) return PTR_ERR(board->mem_reg);

        // 2. Ищем no-map узел памяти в Device Tree
        mem_node = of_parse_phandle(pdev->dev.of_node, "memory-region", 0);
        if (!mem_node) {
                dev_err(&pdev->dev, "Missing 'memory-region' property in device tree node!\n");
                return -ENODEV;
        }

        // Извлекаем физические адреса из узла памяти
        ret = of_address_to_resource(mem_node, 0, &mem_res);
        of_node_put(mem_node);
        if (ret) {
                dev_err(&pdev->dev, "Failed to parse reserved memory parameters from DTS\n");
                return ret;
        }

        board->dma = mem_res.start;
        board->mem_size = resource_size(&mem_res);

        // 3. Отображаем физический видеобуфер в ядро
        board->virt = devm_ioremap_wc(&pdev->dev, board->dma, board->mem_size);
        if (!board->virt) {
                dev_err(&pdev->dev, "Failed to ioremap static memory region!\n");
                return -ENOMEM;
        }
        memset_io(board->virt, 0, board->mem_size);

        
        dev_info(&pdev->dev, "v35.4 DTS PHYSICAL BASE ADDRESS: 0x%llx\n", (unsigned long long)board->dma);
        dev_info(&pdev->dev, "v35.4 DTS MEMORY SIZE: %zu bytes\n", board->mem_size);
        dev_info(&pdev->dev, "v35.4 Kernel Virtual Space (virt): %p\n", board->virt);
        dev_info(&pdev->dev, "NEW FLIP IOCTL CODE: FLIP=0x%X\n", (unsigned int)OVERLAY_IOCTL_FLIP_BUFFER);

        // Регистрация символьного устройства
        ret = alloc_chrdev_region(&board->devt, 0, 1, DRV_NAME);
        if (ret < 0) return ret;

        cdev_init(&board->cdev, &mtv_fops);
        board->cdev.owner = THIS_MODULE;
        ret = cdev_add(&board->cdev, board->devt, 1);
        if (ret < 0) goto err_unregister;

        board->mtv_device = device_create(mtv_class, &pdev->dev, board->devt, NULL, DRV_NAME);
        if (IS_ERR(board->mtv_device)) {
                ret = PTR_ERR(board->mtv_device);
                goto err_cdev_del;
        }

        dma_init(board);

        dev_info(&pdev->dev, "Dynamic driver without offsets initialized successfully!\n");
        
        return 0;

err_cdev_del:
        cdev_del(&board->cdev);
err_unregister:
        unregister_chrdev_region(board->devt, 1);
        return ret;
}

static void mtv_overlay_remove(struct platform_device *pdev)
{
        struct board_info *board = platform_get_drvdata(pdev);
        pr_info("static int mtv_overlay_remove");
        dma_stop(board);
        if (board) {
                if (board->mtv_device)
                        device_destroy(mtv_class, board->devt);
                cdev_del(&board->cdev);
                unregister_chrdev_region(board->devt, 1);
        }
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
        //pr_info("static int mtv_overlay_init");
        return 0;
}

static void __exit mtv_overlay_exit(void)
{
        pr_info("static int mtv_overlay_exit");
        platform_driver_unregister(&mtv_overlay_driver);
        if (mtv_class) class_destroy(mtv_class);
}

module_init(mtv_overlay_init);
module_exit(mtv_overlay_exit);
