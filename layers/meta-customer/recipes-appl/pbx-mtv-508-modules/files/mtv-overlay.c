#include <linux/init.h>
#include <linux/module.h>
#include <linux/kernel.h>
#include <asm/mach/arch.h>
#include <asm/mach/map.h>
#include <linux/fs.h>
#include <linux/dma-mapping.h>
#include <linux/delay.h>
#include <linux/slab.h>
#include <linux/interrupt.h>
#include <linux/platform_device.h>
#include <linux/of_irq.h>
#include <linux/of_device.h>
#include <linux/of_address.h>
#include <asm/uaccess.h>
#include <linux/cdev.h>
#include <linux/major.h>

#define DRV_NAME "mtv-overlay"

#define DMATS_CONTROL 0x0000
#define DMATS_DESC 0x0020
#define DMATS_RESPONSE 0x0030

#define DMA_DESC_READ 0x00
#define DMA_DESC_WRITE 0x04
#define DMA_DESC_LEN 0x08
#define DMA_DESC_CONTROL 0x0C

#define DMA_STATUS 0
#define DMA_CONTROL 0x04
// DMA CSC
#define DMA_RESPONSE_FILL 0x0C
#define DMA_IRQ_CLEAR (1<<9)

/*static int __init hello_init(void)
{
    printk(KERN_INFO "Hello: Module loaded!\n");
    return 0;
}

static void __exit hello_exit(void)
{
    printk(KERN_INFO "Hello: Module unloaded!\n");
}

module_init(hello_init);
module_exit(hello_exit);

*/
MODULE_LICENSE("GPL");
MODULE_AUTHOR("Your Name");
MODULE_DESCRIPTION("Simple Hello World Kernel Module");



struct board_info {
        unsigned int mem1_start;
        unsigned int mem1_size;
        int * mem_reg;
        struct platform_device *pdev;
        struct device* mtv_device;
        struct list_head list;
        int index;
        int irq;
        dma_addr_t dma;
	void *virt;
};

struct {
        // chrdev
        struct class *mtv_class;
        int mtv_major;
} board_info_grob;

static LIST_HEAD(dev_list);

static const struct of_device_id mtv_overlay_of_match[] = {
        { .compatible = "pfrt,overlay", },
        {},
};

#define BUFF_SIZE (1024*1024*8)

// chrdev
int mtv_open(struct inode *inode, struct file *filp);
ssize_t mtv_write(struct file *filp, const char __user * buf, size_t count, loff_t *f_pos);
long mtv_ioctl(struct file *filp,
        unsigned int ioctl_num, unsigned long ioctl_param);
struct file_operations mtv_fops = {
        open: mtv_open,
        write: mtv_write,
        unlocked_ioctl: mtv_ioctl
};

static void reg_write(struct board_info * board, unsigned int base, unsigned int addr, unsigned int data)
{
        iowrite32(data, board->mem_reg + (base + addr)/4);
}

static unsigned int reg_read(struct board_info * board, unsigned int base, unsigned int addr)
{
        unsigned int value;
        value = ioread32(board->mem_reg + (base + addr)/4);
        return value;
}

static void dma_post(struct board_info * board)
{
        int video_size = 1920*1080*3;
        reg_write(board, DMATS_DESC, DMA_DESC_READ, board->dma);
        reg_write(board, DMATS_DESC, DMA_DESC_LEN, video_size);
        reg_write(board, DMATS_DESC, DMA_DESC_CONTROL, 0
                |(1<<31) // go
                |(1<<15) // Early Termination IRQ Enable
                |(1<<14) // Transfer Complete IRQ Enable
                |(1<<9) // Generate EOP
                |(1<<8) // Generate SOP
                );
}

static irqreturn_t fpga_isr(int irq, void * data)
{
	struct board_info * board = data;
        reg_write(board, DMATS_CONTROL, DMA_STATUS, DMA_IRQ_CLEAR);
        
        dma_post(board);

        return IRQ_HANDLED;
}

int mtv_overlay_probe(struct platform_device *pdev)
{
        struct board_info * board;
        const struct of_device_id *match;
        struct resource * res;
        int ret;

        board = devm_kzalloc(&pdev->dev, sizeof(struct board_info), GFP_KERNEL);
        platform_set_drvdata(pdev, board);
        board->pdev = pdev;
        board->index = 0;

        match = of_match_device(mtv_overlay_of_match, &pdev->dev);
        if (!match)
                return -EINVAL;
        
        // DMA reg
        res = platform_get_resource(pdev, IORESOURCE_MEM, 0);
        if (res == NULL){
                printk("of_address_to_resource failed\n");
                return -EINVAL;
        }
        board->mem1_start = res->start;
        board->mem1_size = resource_size(res);
        if (!request_mem_region(board->mem1_start, board->mem1_size, DRV_NAME)) {
                pr_err("Failed to request mem region for dma_reg interface\n");
                return -1;
        }
        board->mem_reg = ioremap(res->start, resource_size(res));
        if (!board->mem_reg) {
                pr_err("Failed to map mem_reg address space\n");
        }
        
        board->irq = irq_of_parse_and_map(pdev->dev.of_node, 0);
        
        board->virt = dma_alloc_coherent(&pdev->dev, BUFF_SIZE,
		&board->dma, GFP_KERNEL);
        if(!board->virt){
                printk("Dma allocation failed\n");
                return 1;
        }

        printk("IRQ allocation %d\n", board->irq);
        ret = request_irq(board->irq, fpga_isr, 0, DRV_NAME, board);
        if (ret) {
                printk("IRQ allocation %d failed\n", board->irq);
                return -1;
        }


        board->mtv_device = device_create(board_info_grob.mtv_class, NULL,
                MKDEV(board_info_grob.mtv_major, 0), NULL, DRV_NAME);
        list_add(&board->list, &dev_list);


        // reset
        reg_write(board, DMATS_CONTROL, DMA_CONTROL, 0
                |(1<<1)
                );
        reg_write(board, DMATS_CONTROL, DMA_CONTROL, 0
                |(1<<4) // Global Interrupt Enable Mask
                );
        // A Y CrCb
        int x;
        int y;
        for(y=0; y<1080; y++){
                for(x=0; x<1920; x++){
                        char * ptr = board->virt;
                        ptr[(x+y*1920)*3+0] = 0;
                        ptr[(x+y*1920)*3+1] = 128;
                        ptr[(x+y*1920)*3+2] = 128;
                }
        }
        
        dma_post(board);
        dma_post(board);

        printk("done\n");
        return 0;
}

int mtv_open(struct inode *inode, struct file *filp)
{
        struct board_info * b;
        struct board_info * board;

        int index = iminor(inode);
        list_for_each_entry(b, &dev_list, list) {
                if(b->index==index){
                        filp->private_data = b;
                        board = b;
                }
        }
        return 0;
}

ssize_t mtv_write(struct file *filp, const char __user * buf, size_t count, loff_t *f_pos)
{
        struct board_info * board = filp->private_data;

        int video_size = 1920*1080*3;
        if(count!=video_size)
                return -1;
        copy_from_user(board->virt, buf, count);
        return count;
}

long mtv_ioctl(struct file *filp,
        unsigned int ioctl_num, unsigned long ioctl_param)
{
        return 0;
}

void mtv_overlay_remove(struct platform_device *pdev)
{
        struct board_info * board = platform_get_drvdata(pdev);

        reg_write(board, DMATS_CONTROL, DMA_CONTROL, 0
                |(0<<4) // Global Interrupt Enable Mask
                );

        msleep(100);
        free_irq(board->irq, board);
        dma_free_coherent(&pdev->dev, BUFF_SIZE, board->virt, board->dma);
        // dma memory reg
        iounmap(board->mem_reg);
        release_mem_region(board->mem1_start, board->mem1_size);
        device_destroy(board_info_grob.mtv_class, MKDEV(board_info_grob.mtv_major, board->index));
        //return 0;
}

MODULE_DEVICE_TABLE(of, mtv_overlay_of_match);

static struct platform_driver mtv_overlay_driver = {
        .remove = mtv_overlay_remove,
        .driver = {
                .name   = DRV_NAME,
                .owner  = THIS_MODULE,
                .of_match_table = of_match_ptr(mtv_overlay_of_match),
        },
};

static int mtv_overlay_init(void)
{
        board_info_grob.mtv_class = class_create(DRV_NAME);
        board_info_grob.mtv_major = register_chrdev(0, DRV_NAME, &mtv_fops);

        return platform_driver_probe(&mtv_overlay_driver, mtv_overlay_probe);
}

static void mtv_overlay_exit(void)
{
        platform_driver_unregister(&mtv_overlay_driver);
        device_destroy(board_info_grob.mtv_class, MKDEV(board_info_grob.mtv_major, 0));
        unregister_chrdev(board_info_grob.mtv_major, DRV_NAME);
        class_destroy(board_info_grob.mtv_class);
}

module_init(mtv_overlay_init);
module_exit(mtv_overlay_exit);