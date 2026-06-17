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

#include "ts-out-2.h"
#include "ts-out-dev.h"

MODULE_LICENSE("GPL");

#define DRV_NAME "tsout-ng"

#define DMA_TS_SIZE_DEFAULT (1024)
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

#define AGGR_REG 0x0030

//TSOUT CSR
#define TSOUT_REG_MODE (0)

typedef struct{
        char * buff;
        dma_addr_t dma_addr;
        size_t size;
} dma_buffer_t;

struct board_info {
        //dma
        dma_buffer_t dma_data[DMA_TS_SIZE_DEFAULT+1];
        unsigned int dma_data_index;
        unsigned int mem1_start;
        unsigned int mem1_size;
        int * dma_reg;
        // chrdev
        struct platform_device *pdev;
        int index;
        struct list_head list;

        // wait queue
        wait_queue_head_t wq;

        uint32_t packet_aggr;
        uint32_t dma_ts_size;
        uint32_t buf_size;

        int status;
        uint32_t last_ts;

        struct device* tsout_device;
        struct timer_list dma_timer;
};

struct {
        // chrdev
        struct class *tsout_class;
        int tsout_major;
} board_info_grob;

#define SOC_READ_TIMEOUT (HZ/2)

static const struct of_device_id tsout_of_match[] = {
        { .compatible = "pfrt,tsout2", },
        {},
};

// chrdev
ssize_t tsout_write(struct file *filp, const char __user * buf, size_t count, loff_t *f_pos);
int tsout_open(struct inode *inode, struct file *filp);
int tsout_release(struct inode *inode, struct file *filp);
long tsout_ioctl(struct file *file,
        unsigned int ioctl_num, unsigned long ioctl_param);
struct file_operations tsout_fops = {
        unlocked_ioctl: tsout_ioctl,
        write: tsout_write,
        open: tsout_open,
        release: tsout_release
};
static LIST_HEAD(dev_list);

#define MAX_TS (0x7FFFFFF)


/*void dma_timer_callback(unsigned long data)*/ // ign 
void dma_timer_callback(struct timer_list *t)
{
        /*struct board_info *board = (struct board_info *) data;*/ // ign
        struct board_info *board = from_timer(board, t, dma_timer);
        mod_timer(&board->dma_timer, jiffies + msecs_to_jiffies(10));
        wake_up_interruptible(&board->wq);
}

static uint32_t extract_ts(char * block, int size)
{
        uint32_t ret;

        ret = block[3];
        ret |= block[2] << 8;
        ret |= block[1] << 16;
        ret |= (block[0]&0x7f) << 24;

        return ret;
}

static int32_t ts_diff(uint32_t t1, uint32_t t2)
{
        int32_t d;

        d = (int32_t) t1 - (int32_t) t2;
        if(d > MAX_TS/2)
                d -= MAX_TS;
        if(d < -MAX_TS/2)
                d += MAX_TS;
        return d;
}

static void dma_ts_post(struct board_info * board, int index);
static uint32_t buffers_inuse(struct board_info * board);
static uint32_t dma_fill_level(struct board_info * board);

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
        if(reg&(1<<1))
                return 1;
        else
                return 0;
}

ssize_t tsout_write(struct file *filp, const char __user * buf, size_t count, loff_t *f_pos)
{
        struct board_info * board = filp->private_data;
        dma_buffer_t * dma_buffer;
        int wait_status;
        int i;

        if(count > board->buf_size){
                printk(DRV_NAME": Write too large (%d)\n", board->index);
                return 0;
        }

        if((dma_ts_empty(board)) && (board->status==1)){
                printk(DRV_NAME": Dma underflow\n");
                return 0;
        }

        wait_status = wait_event_interruptible_timeout(board->wq,
                        dma_fill_level(board) < board->dma_ts_size,
                SOC_READ_TIMEOUT);
        if(wait_status==0){
                printk(DRV_NAME": Write wait timeout (%d)\n", board->index);
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
        copy_from_user(dma_buffer->buff, buf, count);
        dma_buffer->size = count;

        uint32_t ts = extract_ts(dma_buffer->buff, dma_buffer->size);
        if((ts_diff(ts, board->last_ts) > MAX_TS / 4)||(ts_diff(ts, board->last_ts) < 0)||(ts==board->last_ts))
                printk(DRV_NAME": Timestamp warning %x -> %x\n", board->last_ts, ts);
        board->last_ts = ts;

        dma_sync_single_for_device(&board->pdev->dev,
                dma_buffer->dma_addr,
                dma_buffer->size,
                DMA_TO_DEVICE);
        dma_ts_post(board, board->dma_data_index);
        board->dma_data_index = (board->dma_data_index + 1) % (board->dma_ts_size+1);

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
        if(status)
                ready += 1;

        return ready;
}

static uint32_t dma_fill_level(struct board_info * board)
{
	u32 inuse;

        inuse = reg_read(board, DMATS_CONTROL, DMA_FILL_LEVEL) & 0xFFFF;
        return inuse;
}

void tsout_alloc_dma(struct board_info * board)
{
        int i;
        dma_buffer_t * dma_buffer;

        board->dma_data_index = 0;
        for(i=0; i<board->dma_ts_size+1; i++){
                dma_buffer = &board->dma_data[i];
                dma_buffer->buff = kmalloc(board->buf_size, GFP_KERNEL | GFP_DMA);
                dma_buffer->dma_addr = dma_map_single(&board->pdev->dev, dma_buffer->buff,
                        dma_buffer->size,
                DMA_TO_DEVICE);
                if (!dma_buffer->buff)
                        pr_err("Failed to allocate tx buffer\n");
        }
}

static void dma_ts_post(struct board_info * board, int index)
{
        dma_buffer_t * dma_buffer;

        dma_buffer = &board->dma_data[index];

        // descriptor
        reg_write(board, DMATS_DESC, DMA_DESC_READ, dma_buffer->dma_addr);
        reg_write(board, DMATS_DESC, DMA_DESC_LEN, dma_buffer->size);
        reg_write(board, DMATS_DESC, DMA_DESC_CONTROL, 0
                |(1<<31) // go
                |(1<<9) // Generate EOP
                |(1<<8) // Generate SOP
                );
}

void tsout_free_dma(struct board_info * board)
{
        int i;
        dma_buffer_t * dma_buffer;

        board->dma_data_index = 0;
        for(i=0; i<board->dma_ts_size+1; i++){
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
        // DMA TS
        reg_write(board, DMATS_CONTROL, DMA_CONTROL, 0
                |(1<<1) // Reset Dispatcher
                );
        reg_write(board, DMATS_CONTROL, DMA_CONTROL, 0
                |(1<<4) // Global Interrupt Enable Mask
                );
        // TS stop
        reg_write(board, TSOUT_REG, TSOUT_REG_MODE, 0x00);
        board->status = 0;
        board->last_ts = 0;
        return 0;
}

int tsout_release(struct inode *inode, struct file *filp)
{
        int wait_status;
        struct board_info * board = filp->private_data;
        wait_status = wait_event_interruptible_timeout(board->wq, buffers_inuse(board)==0, SOC_READ_TIMEOUT);
        if(wait_status==0){
                printk(DRV_NAME ": release wait timeout\n");
        }
        // DMA TS
        reg_write(board, DMATS_CONTROL, DMA_CONTROL, 0
                |(0<<4) // Global Interrupt Enable Mask
                );
        reg_write(board, TSOUT_REG, TSOUT_REG_MODE, 0x00);
        return 0;
}

long tsout_ioctl(struct file *filp,
        unsigned int ioctl_num, unsigned long ioctl_param)
{
        struct board_info * board = filp->private_data;
        uint32_t value;
        int ret;

        uint32_t reg_size;
        uint32_t reg_empty;

        switch(ioctl_num){
        case IOCTL_TS_START:
                // TS work
                reg_write(board, TSOUT_REG, TSOUT_REG_MODE, 0x02);
                board->status = 1;
                break;
        case IOCTL_TS_STOP:
                // TS idle
                reg_write(board, TSOUT_REG, TSOUT_REG_MODE, 0x00);
                board->status = 0;
                break;
        case IOCTL_TS_WAIT:
                // TS wait
                reg_write(board, TSOUT_REG, TSOUT_REG_MODE, 0x01);
                break;
        case IOCTL_TS_SET:
                // Packet size
                ret = copy_from_user(&value, (unsigned int*) ioctl_param, sizeof(value));
                reg_size = (value+3)/4 - 1;
                reg_empty = value%4;
                if(reg_empty != 0)
                        reg_empty = 4-reg_empty;
                reg_write(board, AGGR_REG, 0, 
                        (reg_size<<0)
                        |(reg_empty<<16)
                );
                break;
        }
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
        if (of_property_read_u32(pdev->dev.of_node, "dma_ts_size" , &board->dma_ts_size))
		board->dma_ts_size = DMA_TS_SIZE_DEFAULT;
        if (of_property_read_u32(pdev->dev.of_node, "buf_size" , &board->buf_size))
		board->buf_size = BUFF_SIZE;
        sprintf(buf, DRV_NAME"-%d", board->index);
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
        reg_write(board, TSOUT_REG, TSOUT_REG_MODE, 0x00);

        /*setup_timer(&board->dma_timer, dma_timer_callback, (unsigned int)board);*/ // ign
        timer_setup(&board->dma_timer, dma_timer_callback, 0);
        mod_timer(&board->dma_timer, jiffies + msecs_to_jiffies(10));
        return 0;
}

/*int tsout_remove(struct platform_device *pdev)*/ // ign
void tsout_remove(struct platform_device *pdev)
{
        struct board_info * board = platform_get_drvdata(pdev);

        del_timer(&board->dma_timer);
        tsout_free_dma(board);
        device_destroy(board_info_grob.tsout_class, MKDEV(board_info_grob.tsout_major, board->index));

        // dma memory reg
        iounmap(board->dma_reg);
        release_mem_region(board->mem1_start, board->mem1_size);
        //return 0; // ign
}

MODULE_DEVICE_TABLE(of, tsout_of_match);

static struct platform_driver tsout_driver = {
        /*.remove = tsout_remove,*/
        .remove = 0, // ign
        .driver = {
                .name   = DRV_NAME,
                .owner  = THIS_MODULE,
                .of_match_table = of_match_ptr(tsout_of_match),
        },
};

static int tsout_init(void)
{
        /*board_info_grob.tsout_class = class_create(THIS_MODULE, DRV_NAME);*/ // ign
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
