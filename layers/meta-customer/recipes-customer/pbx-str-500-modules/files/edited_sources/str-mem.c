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

#include "str-mem-dev.h"

MODULE_LICENSE("GPL");

#define DRV_NAME "str-mem"

#define MAX_REGS (64)

struct board_info {
        unsigned int mem1_start[MAX_REGS];
        int * mem_reg [MAX_REGS];
        struct platform_device *pdev;
        struct device* strmem_device;
        struct list_head list;
        int index;
};

struct {
        // chrdev
        struct class *strmem_class;
        int strmem_major;
} board_info_grob;

static LIST_HEAD(dev_list);

static const struct of_device_id str_mem_of_match[] = {
        { .compatible = "pfrt,str-mem", },
        {},
};

// chrdev
int strmem_open(struct inode *inode, struct file *filp);
ssize_t strmem_read(struct file *filp, char *buf, size_t count, loff_t *f_pos);
long strmem_ioctl(struct file *filp,
        unsigned int ioctl_num, unsigned long ioctl_param);
struct file_operations strmem_fops = {
        open: strmem_open,
        read: strmem_read,
        unlocked_ioctl: strmem_ioctl
};

static void reg_write(struct board_info * board, unsigned int base, unsigned int addr, unsigned int data)
{
        iowrite32(data, board->mem_reg[base] + addr/4);
}

static unsigned int reg_read(struct board_info * board, unsigned int base, unsigned int addr)
{
        unsigned int value;
        value = ioread32(board->mem_reg[base] + addr/4);
        return value;
}

int str_mem_probe(struct platform_device *pdev)
{
        struct board_info * board;
        const struct of_device_id *match;
        struct resource * res;
        int i;

        board = devm_kzalloc(&pdev->dev, sizeof(struct board_info), GFP_KERNEL);
        platform_set_drvdata(pdev, board);
        board->pdev = pdev;
        board->index = 0;

        match = of_match_device(str_mem_of_match, &pdev->dev);
        if (!match)
                return -EINVAL;

        
        for(i=0; i<MAX_REGS; i++){
                res = platform_get_resource(pdev, IORESOURCE_MEM, i);
                board->mem1_start[i] = 0;
                if(!res)
                        continue;
                board->mem1_start[i] = res->start;
                board->mem_reg[i] = devm_ioremap_resource(&pdev->dev, res);
                if (!board->mem_reg[i]) {
                        pr_err("Failed to map mem_reg address space \n");
                }
        }

        board->strmem_device = device_create(board_info_grob.strmem_class, NULL,
                MKDEV(board_info_grob.strmem_major, 0), NULL, DRV_NAME);
        list_add(&board->list, &dev_list);
        return 0;
}

int strmem_open(struct inode *inode, struct file *filp)
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
        return 0;
}

ssize_t strmem_read(struct file *filp, char *buf, size_t count, loff_t *f_pos)
{
        return 0;
}

long strmem_ioctl(struct file *filp,
        unsigned int ioctl_num, unsigned long ioctl_param)
{
        struct board_info * board = filp->private_data;
        strmem_reg_data tmp;
        int ret;

        switch(ioctl_num){
        case STRMEM_IOCTL_REG:
                ret = copy_from_user(&tmp, (unsigned int*) ioctl_param, sizeof(strmem_reg_data));
                if(tmp.block >= MAX_REGS){
                	printk(DRV_NAME " Index %d out of bound\n", tmp.block);
                	break;
                }
                if(board->mem1_start[tmp.block]){
                        if(tmp.rw==STR_REG_READ){
                                tmp.data = reg_read(board, tmp.block, tmp.address);
                                ret = copy_to_user((unsigned int*) ioctl_param, &tmp, sizeof(strmem_reg_data));
                        }else{
                                reg_write(board, tmp.block, tmp.address, tmp.data);
                        }        
                } else {
                        printk(DRV_NAME " Invalid address block\n");
                }
                break;
        }
        return 0;
}

void str_mem_remove(struct platform_device *pdev)
{
        // return 0;
        // ... your cleanup code ...
        // No return statement needed
}

MODULE_DEVICE_TABLE(of, str_mem_of_match);

static struct platform_driver str_mem_driver = {
        .remove = str_mem_remove,
        .driver = {
                .name   = DRV_NAME,
                .owner  = THIS_MODULE,
                .of_match_table = of_match_ptr(str_mem_of_match),
        },
};

static int str_mem_init(void)
{
        //board_info_grob.strmem_class = class_create(THIS_MODULE, DRV_NAME); // ign
        board_info_grob.strmem_class = class_create(DRV_NAME);
        board_info_grob.strmem_major = register_chrdev(0, DRV_NAME, &strmem_fops);

        return platform_driver_probe(&str_mem_driver, str_mem_probe);
}

static void str_mem_exit(void)
{
        platform_driver_unregister(&str_mem_driver);
        device_destroy(board_info_grob.strmem_class, MKDEV(board_info_grob.strmem_major, 0));
        unregister_chrdev(board_info_grob.strmem_major, DRV_NAME);
        class_destroy(board_info_grob.strmem_class);
}

module_init(str_mem_init);
module_exit(str_mem_exit);
