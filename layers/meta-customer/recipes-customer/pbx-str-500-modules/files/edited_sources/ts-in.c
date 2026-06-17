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

MODULE_LICENSE("GPL");

#define DRV_NAME "tsin"
#define CHRDEV_NAME DRV_NAME

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

#define BUFF_SIZE (16384)

#define DMA_TS_SIZE (1024)

typedef struct{
        char * buff;
        dma_addr_t dma_addr;
} dma_buffer_t;

struct board_info {
        dma_buffer_t dma_data[DMA_TS_SIZE];
        unsigned int dma_data_index;
        unsigned int mem_start;
        unsigned int mem_size;
        int * lwh2f;
        // chrdev
        int irq;
        int index;
        struct platform_device *pdev;
        struct list_head list;
        struct device* tsin_device;
        int buf_size;
        int queue_index;
        // wait queue
        wait_queue_head_t wq;
};

struct {
        // chrdev
        struct class *tsin_class;
        int tsin_major;
} board_info_grob;

static LIST_HEAD(dev_list);

#define SOC_READ_TIMEOUT (HZ)

#define QUEUE_AGGR (16)

static unsigned int reg_read(struct board_info * board, unsigned int base, unsigned int addr)
{
        unsigned int value;
        value = ioread32(board->lwh2f + (base + addr)/4);
        return value;
}

static void reg_write(struct board_info * board, unsigned int base, unsigned int addr, unsigned int data)
{
        iowrite32(data, board->lwh2f + (base + addr)/4);
}

static const struct of_device_id tsin_of_match[] = {
        { .compatible = "pfrt,tsin", },
        { /* sentinel */ },
};
MODULE_DEVICE_TABLE(of, tsin_of_match);

// chrdev
ssize_t tsin_read(struct file *filp, char *buf, size_t count, loff_t *f_pos);
int tsin_open(struct inode *inode, struct file *filp);
int tsin_release(struct inode *inode, struct file *filp);
long tsin_ioctl(struct file *file,
        unsigned int ioctl_num, unsigned long ioctl_param);
struct file_operations tsin_fops = {
        unlocked_ioctl: tsin_ioctl,
        read: tsin_read,
        open: tsin_open,
        release: tsin_release
};

static void dma_audio_post(struct board_info * board, int index);
static int tsin_fill_level(struct board_info * board);

static irqreturn_t fpga_isr(int irq, void * data)
{
	struct board_info * board = data;
        reg_write(board, DMATS_CONTROL, DMA_STATUS, DMA_IRQ_CLEAR);
        #if 0
        if(reg_read(board, DMATS_CONTROL, DMA_STATUS)&((1<<4)|(1<<1))){
                panic("DMA overflow\n");
        }
        #endif
        wake_up_interruptible(&board->wq);
        return IRQ_HANDLED;
}

void tsout_alloc_dma(struct board_info * board)
{
        int i;
        dma_buffer_t * dma_buffer;

        board->dma_data_index = 0;
        for(i=0; i<DMA_TS_SIZE; i++){
                dma_buffer = &board->dma_data[i];
                dma_buffer->buff = kmalloc(BUFF_SIZE, GFP_KERNEL | GFP_DMA);
                dma_buffer->dma_addr = dma_map_single(&board->pdev->dev, dma_buffer->buff,
                        board->buf_size,
                DMA_FROM_DEVICE);
                if (!dma_buffer->buff)
                        pr_err("Failed to allocate rx buffer\n");
        }
}

static int tsin_fill_level(struct board_info * board)
{
        return reg_read(board, DMATS_CONTROL, DMA_RESPONSE_FILL);
}

ssize_t tsin_read(struct file *filp, char *buf, size_t count, loff_t *f_pos)
{
        struct board_info * board = filp->private_data;
        int wait_status;
        unsigned int recv_size;
        unsigned int recv_error;
        dma_buffer_t * dma_buffer;

        wait_status = wait_event_interruptible_timeout(board->wq,
                tsin_fill_level(board) > 0,
        SOC_READ_TIMEOUT);
        if(wait_status==0){
                return 0;
        }
        if(wait_status==-ERESTARTSYS){
                return 0;
        }       

        dma_buffer = &board->dma_data[board->dma_data_index];
        recv_size = reg_read(board, DMATS_RESPONSE, 0);
        recv_error = reg_read(board, DMATS_RESPONSE, 4);
        dma_sync_single_for_cpu(&board->pdev->dev,
                dma_buffer->dma_addr,
                board->buf_size,
        DMA_FROM_DEVICE);
        if(recv_size > count)
                recv_size = 0;
        copy_to_user(buf, dma_buffer->buff, recv_size);
        dma_sync_single_for_device(&board->pdev->dev,
                dma_buffer->dma_addr,
                board->buf_size,
        DMA_FROM_DEVICE);
        dma_audio_post(board, board->dma_data_index);
        board->dma_data_index = (board->dma_data_index + 1) % DMA_TS_SIZE;
        *f_pos += recv_size;
        return recv_size;
}

int tsin_open(struct inode *inode, struct file *filp)
{
        struct board_info * b;
        struct board_info * board = NULL;
        int ret;
        int i;

        printk("%s\n", __FUNCTION__);
        int index = iminor(inode);
        list_for_each_entry(b, &dev_list, list) {
                if(b->index==index){
                        filp->private_data = b;
                        board = b;
                }
        }
        printk("IRQ allocation %d\n", board->irq);
        ret = request_irq(board->irq, fpga_isr, 0, DRV_NAME, board);
        if (ret) {
                printk("IRQ allocation %d failed\n", board->irq);
                return -1;
        }
        // reset
        reg_write(board, DMATS_CONTROL, DMA_CONTROL, 0
                |(1<<1)
                );
        printk("Interrupt\n");
        // Audio DMA
        reg_write(board, DMATS_CONTROL, DMA_CONTROL, 0
                |(1<<4) // Global Interrupt Enable Mask
                );
        printk("Post\n");
        board->dma_data_index = 0;
        for(i=0; i<DMA_TS_SIZE; i++){
                dma_audio_post(board, board->dma_data_index);
                board->dma_data_index = (board->dma_data_index + 1) % DMA_TS_SIZE;
        }
        return 0;
}

int tsin_release(struct inode *inode, struct file *filp)
{
        struct board_info * board = filp->private_data;

        // DMA TS
        reg_write(board, DMATS_CONTROL, DMA_CONTROL, 0
                |(0<<4) // Global Interrupt Enable Mask
                );
        free_irq(board->irq, board);
        return 0;
}

long tsin_ioctl(struct file *file,
        unsigned int ioctl_num, unsigned long ioctl_param)
{
        printk("%s\n", __FUNCTION__);
        return 0;
}

int tsin_probe(struct platform_device *pdev)
{
        const struct of_device_id *match;
        struct resource * res;
        struct board_info * board;
        char buf[16];

        printk("%s\n", __FUNCTION__);

        board = devm_kzalloc(&pdev->dev, sizeof(struct board_info), GFP_KERNEL);

        match = of_match_device(tsin_of_match, &pdev->dev);
        if (!match)
                return -EINVAL;
        if (of_property_read_u32(pdev->dev.of_node, "index" , &board->index))
                return -1;
        if (of_property_read_u32(pdev->dev.of_node, "buf_size" , &board->buf_size))
                board->buf_size = BUFF_SIZE;
        sprintf(buf, DRV_NAME"%d", board->index);
        board->tsin_device = device_create(board_info_grob.tsin_class, NULL,
                MKDEV(board_info_grob.tsin_major, board->index), NULL, buf);
        list_add(&board->list, &dev_list);


        // DMA reg
        res = platform_get_resource(pdev, IORESOURCE_MEM, 0);
        if (res == NULL){
                printk("of_address_to_resource failed\n");
                return -EINVAL;
        }
        board->mem_start = res->start;
        board->mem_size = resource_size(res);
        if (!request_mem_region(board->mem_start, board->mem_size, DRV_NAME)) {
                pr_err("Failed to request mem region for LWH2F interface\n");
                return -1;
        }
        board->lwh2f = ioremap(res->start, resource_size(res));
        if (!board->lwh2f) {
                pr_err("Failed to map LWH2F address space \n");
        }

        platform_set_drvdata(pdev, board);
        board->pdev = pdev;
        board->irq = irq_of_parse_and_map(pdev->dev.of_node, 0);
        tsout_alloc_dma(board);
        init_waitqueue_head(&board->wq);

        return 0;
}

/*int tsin_remove(struct platform_device *pdev)*/
void tsin_remove(struct platform_device *pdev)
{
        struct board_info * board = platform_get_drvdata(pdev);

        printk("%s\n", __FUNCTION__);

        device_destroy(board_info_grob.tsin_class, MKDEV(board_info_grob.tsin_major, board->index));

        // dma memory reg
        iounmap(board->lwh2f);
        release_mem_region(board->mem_start, board->mem_size);
        // return 0; // ign
}

static struct platform_driver tsin_driver = {
        /*.remove = tsin_remove,*/
        .remove = 0,
        .driver = {
                .name   = DRV_NAME,
                .owner  = THIS_MODULE,
                .of_match_table = of_match_ptr(tsin_of_match),
        },
};

static void dma_audio_post(struct board_info * board, int index)
{
        dma_buffer_t * dma_buffer;
        int irq;

        dma_buffer = &board->dma_data[index];

        board->queue_index = (board->queue_index + 1) % QUEUE_AGGR;
        if(board->queue_index==0)
                irq = 1;
        else
                irq = 0;
        // descriptor
        reg_write(board, DMATS_DESC, DMA_DESC_WRITE, dma_buffer->dma_addr);
        reg_write(board, DMATS_DESC, DMA_DESC_LEN, board->buf_size);
        reg_write(board, DMATS_DESC, DMA_DESC_CONTROL, 0
                |(1<<31) // go
                |(1<<15) // Early Termination IRQ Enable
                |(irq<<14) // Transfer Complete IRQ Enable
                |(1<<12) // End on EOP
                );
}

static int tsin_init(void)
{
        printk("%s\n", __FUNCTION__);
        /*board_info_grob.tsin_class = class_create(THIS_MODULE, DRV_NAME);*/ // ign
        board_info_grob.tsin_class = class_create(DRV_NAME);
        board_info_grob.tsin_major = register_chrdev(0, DRV_NAME, &tsin_fops);
        tsin_remove; // ign
        return platform_driver_probe(&tsin_driver, tsin_probe);
}

static void tsin_exit(void)
{
        printk("%s\n", __FUNCTION__);
        tsin_remove; // ign
        platform_driver_unregister(&tsin_driver);
        unregister_chrdev(board_info_grob.tsin_major, DRV_NAME);
        class_destroy(board_info_grob.tsin_class);
}

module_init(tsin_init);
module_exit(tsin_exit);
