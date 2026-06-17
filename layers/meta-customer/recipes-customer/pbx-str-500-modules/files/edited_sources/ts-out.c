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

#include "ts-out.h"

MODULE_LICENSE("GPL");

#define DRV_NAME "tsout"

#define DMA_TS_SIZE_DEFAULT (512)
#define BUFF_SIZE (2048)
#define DMATS_DESC 0x0020
#define DMATS_CONTROL 0x0000
#define TSOUT_REG 0x0080

#define DMA_STATUS 0
#define DMA_FILL_LEVEL 0x8
#define DMA_CONTROL 0x04
// DMA CSC
#define DMA_RESPONSE_FILL 0x0C
#define DMA_IRQ_CLEAR (1<<9)

#define DMA_DESC_READ 0x00
#define DMA_DESC_WRITE 0x04
#define DMA_DESC_LEN 0x08
#define DMA_DESC_CONTROL 0x0C

//TSOUT CSR
#define TSOUT_REG_RESET (0)

typedef struct{
        char * buff;
        dma_addr_t dma_addr;
        size_t size;
} dma_buffer_t;

struct board_info {
        //dma
        dma_buffer_t dma_data[DMA_TS_SIZE_DEFAULT];
        unsigned int dma_data_index;
        unsigned int mem1_start;
        unsigned int mem1_size;
        int * dma_reg;
        int irq;
        // chrdev
        struct platform_device *pdev;
        int index;
        struct list_head list;

        // wait queue
        wait_queue_head_t wq;

        uint32_t packet_aggr;
        uint32_t dma_ts_size;

        struct device* tsout_device;
};

struct {
        // chrdev
        struct class *tsout_class;
        int tsout_major;
} board_info_grob;

#define SOC_READ_TIMEOUT (HZ/10)

static const struct of_device_id tsout_of_match[] = {
        { .compatible = "pfrt,tsout", },
        {},
};

// chrdev
ssize_t tsout_read(struct file *filp, char *buf, size_t count, loff_t *f_pos);
ssize_t tsout_write(struct file *filp, const char __user * buf, size_t count, loff_t *f_pos);
int tsout_open(struct inode *inode, struct file *filp);
int tsout_release(struct inode *inode, struct file *filp);
struct file_operations tsout_fops = {
        read: tsout_read,
        write: tsout_write,
        open: tsout_open,
        release: tsout_release
};
static LIST_HEAD(dev_list);

static void dma_ts_post(struct board_info * board, int index, int irq);
static uint32_t buffers_inuse(struct board_info * board);

static void reg_write(struct board_info * board, unsigned int base, unsigned int addr, unsigned int data)
{
        iowrite32(data, board->dma_reg + (base + addr)/4);
}

static unsigned int reg_read(struct board_info * board, unsigned int base, unsigned int addr)
{
        unsigned int value;
        value = ioread32(board->dma_reg + (base + addr)/4);
        return value;
}

int dma_ts_ready(struct board_info * board)
{
        unsigned int reg;

        reg = reg_read(board, DMATS_CONTROL, DMA_STATUS);
        // Descriptor Buffer Full
        if(reg&(1<<2))
                return 0;
        else
                return 1;
}

int dma_ts_empty(struct board_info * board)
{
        unsigned int reg;

        reg = reg_read(board, DMATS_CONTROL, DMA_STATUS);
        if((reg&(1<<1))&&(~reg&(1<<0)))
                return 1;
        else
                return 0;
}

ssize_t tsout_read(struct file *filp, char *buf, size_t count, loff_t *f_pos)
{
        struct board_info * board = filp->private_data;
        return 0;
}

ssize_t tsout_write(struct file *filp, const char __user * buf, size_t count, loff_t *f_pos)
{
        struct board_info * board = filp->private_data;
        dma_buffer_t * dma_buffer;
        int wait_status;
        int i;
        int irq = 0;
        int packet_size = count / board->packet_aggr;

        for(i=0; i<board->packet_aggr; i++){
                wait_status = wait_event_interruptible_timeout(board->wq,
                        buffers_inuse(board) < board->dma_ts_size,
                SOC_READ_TIMEOUT);
                if(wait_status==0){
                        return 0;
                }
                if(wait_status==-ERESTARTSYS){
                        return 0;
                }  
                dma_buffer = &board->dma_data[board->dma_data_index];
                dma_sync_single_for_cpu(&board->pdev->dev,
                        dma_buffer->dma_addr,
                        dma_buffer->size,
                DMA_TO_DEVICE);
                copy_from_user(dma_buffer->buff, buf+packet_size*i, packet_size);
                dma_buffer->size = packet_size;
                if(i==board->packet_aggr-1)
                        irq = 1;
                dma_sync_single_for_device(&board->pdev->dev,
                        dma_buffer->dma_addr,
                        dma_buffer->size,
                DMA_TO_DEVICE);
                dma_ts_post(board, board->dma_data_index, irq);
                board->dma_data_index = (board->dma_data_index + 1) % board->dma_ts_size;
        }
        return count;
}

static uint32_t buffers_inuse(struct board_info * board)
{
        u32 ready = 0;
	u32 inuse;
	u32 status;

        inuse = reg_read(board, DMATS_CONTROL, DMA_FILL_LEVEL) & 0xFFFF;
        status = reg_read(board, DMATS_CONTROL, DMA_STATUS) & 0x1;
        ready = inuse;
        // if(status)
                ready += 1;

        return ready;
}

static irqreturn_t fpga_ts_isr(int irq, void * data)
{
        struct board_info * board = data;
        uint32_t ready;
        reg_write(board, DMATS_CONTROL, DMA_STATUS, DMA_IRQ_CLEAR);
        #if 0
        if(reg_read(board, DMATS_CONTROL, DMA_STATUS)&(1<<1)){
                printk("status %x\n", reg_read(board, DMATS_CONTROL, DMA_STATUS));
                printk("fill level %x\n", reg_read(board, DMATS_CONTROL, 0x8));
                panic(DRV_NAME " DMA overflow\n");
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
        for(i=0; i<board->dma_ts_size; i++){
                dma_buffer = &board->dma_data[i];
                dma_buffer->buff = kmalloc(BUFF_SIZE, GFP_KERNEL | GFP_DMA);
                dma_buffer->dma_addr = dma_map_single(&board->pdev->dev, dma_buffer->buff,
                        dma_buffer->size,
                DMA_TO_DEVICE);
                if (!dma_buffer->buff)
                        pr_err("Failed to allocate tx buffer\n");
        }
}

static void dma_ts_post(struct board_info * board, int index, int irq)
{
        dma_buffer_t * dma_buffer;

        dma_buffer = &board->dma_data[index];

        // descriptor
        reg_write(board, DMATS_DESC, DMA_DESC_READ, dma_buffer->dma_addr);
        reg_write(board, DMATS_DESC, DMA_DESC_LEN, dma_buffer->size);
        reg_write(board, DMATS_DESC, DMA_DESC_CONTROL, 0
                |(1<<31) // go
                |(1<<15) // Early Termination IRQ Enable
                |(irq<<14) // Transfer Complete IRQ Enable
                |(1<<9) // Generate EOP
                |(1<<8) // Generate SOP
                );
}

void tsout_free_dma(struct board_info * board)
{
        int i;
        dma_buffer_t * dma_buffer;

        board->dma_data_index = 0;
        for(i=0; i<board->dma_ts_size; i++){
                dma_buffer = &board->dma_data[i];
                kfree(dma_buffer->buff);
                dma_buffer->dma_addr = 0;
        }
}

int tsout_open(struct inode *inode, struct file *filp)
{
        struct board_info * b;
        struct board_info * board;
        int ret;

        int index = iminor(inode);
        list_for_each_entry(b, &dev_list, list) {
                if(b->index==index){
                        filp->private_data = b;
                        board = b;
                }
        }
        ret = request_irq(board->irq, fpga_ts_isr, 0, DRV_NAME, board);
        if (ret) {
                printk("IRQ allocation %d failed\n", board->irq);
                return -1;
        }
        // TS reset assert
        reg_write(board, TSOUT_REG, TSOUT_REG_RESET, 0x01);
        // DMA TS
        reg_write(board, DMATS_CONTROL, DMA_CONTROL, 0
                |(1<<1) // Reset Dispatcher
                );
        reg_write(board, DMATS_CONTROL, DMA_CONTROL, 0
                |(1<<4) // Global Interrupt Enable Mask
                );
        // TS reset deassert
        reg_write(board, TSOUT_REG, TSOUT_REG_RESET, 0x00);
        return 0;
}

int tsout_release(struct inode *inode, struct file *filp)
{
        int wait_status;
        struct board_info * board = filp->private_data;
        wait_status = wait_event_interruptible_timeout(board->wq, buffers_inuse(board)==0, SOC_READ_TIMEOUT);
        if(wait_status==0){
                printk(DRV_NAME ": wait timeout\n");
        }
        // TS reset assert
        reg_write(board, TSOUT_REG, TSOUT_REG_RESET, 0x01);
        // DMA TS
        reg_write(board, DMATS_CONTROL, DMA_CONTROL, 0
                |(0<<4) // Global Interrupt Enable Mask
                );
        free_irq(board->irq, board);
        return 0;
}

int tsout_probe(struct platform_device *pdev)
{
        struct board_info * board;
        const struct of_device_id *match;
        struct resource * res;
        int error;
        char buf[16];

        board = devm_kzalloc(&pdev->dev, sizeof(struct board_info), GFP_KERNEL);
        INIT_LIST_HEAD(&board->list);
        platform_set_drvdata(pdev, board);
        board->pdev = pdev;

        init_waitqueue_head(&board->wq);

        match = of_match_device(tsout_of_match, &pdev->dev);
        if (!match)
                return -EINVAL;
        if (of_property_read_u32(pdev->dev.of_node, "index" , &board->index))
		return 0;
        if (of_property_read_u32(pdev->dev.of_node, "aggr" , &board->packet_aggr))
		return 0;
        if (of_property_read_u32(pdev->dev.of_node, "dma_ts_size" , &board->dma_ts_size))
		board->dma_ts_size = DMA_TS_SIZE_DEFAULT;
        sprintf(buf, DRV_NAME"%d", board->index);
        board->tsout_device = device_create(board_info_grob.tsout_class, NULL,
                MKDEV(board_info_grob.tsout_major, board->index), NULL, buf);
        list_add(&board->list, &dev_list);

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
        board->dma_reg = ioremap(res->start, resource_size(res));
        if (!board->dma_reg) {
                pr_err("Failed to map dma_reg address space \n");
        }

        tsout_alloc_dma(board);
        board->irq = irq_of_parse_and_map(pdev->dev.of_node, 0);
        return 0;
}

/*int tsout_remove(struct platform_device *pdev)*/ // ign
void tsout_remove(struct platform_device *pdev)
{
        struct board_info * board = platform_get_drvdata(pdev);

        tsout_free_dma(board);
        device_destroy(board_info_grob.tsout_class, MKDEV(board_info_grob.tsout_major, board->index));

        // dma memory reg
        iounmap(board->dma_reg);
        release_mem_region(board->mem1_start, board->mem1_size);
        // return 0; // ign
}

MODULE_DEVICE_TABLE(of, tsout_of_match);

static struct platform_driver tsout_driver = {
        /*.remove = tsout_remove,*/ // ign
        .remove = 0,
        .driver = {
                .name   = DRV_NAME,
                .owner  = THIS_MODULE,
                .of_match_table = of_match_ptr(tsout_of_match),
        },
};

static int tsout_init(void)
{
        // board_info_grob.tsout_class = class_create(THIS_MODULE, DRV_NAME); // ign
        board_info_grob.tsout_class = class_create(DRV_NAME);
        board_info_grob.tsout_major = register_chrdev(0, DRV_NAME, &tsout_fops);
        tsout_remove; // ign
        return platform_driver_probe(&tsout_driver, tsout_probe);
}

static void tsout_exit(void)
{
        tsout_remove; // ign
        platform_driver_unregister(&tsout_driver);
        unregister_chrdev(board_info_grob.tsout_major, DRV_NAME);
        class_destroy(board_info_grob.tsout_class);
}

module_init(tsout_init);
module_exit(tsout_exit);
