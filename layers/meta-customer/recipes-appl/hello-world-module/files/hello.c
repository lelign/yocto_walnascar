#include <linux/init.h>      // Needed for __init and __exit macros
#include <linux/module.h>    // Needed by all modules
#include <linux/kernel.h>    // Needed for KERN_INFO

// License is required for many kernel functions to work
MODULE_LICENSE("GPL");
MODULE_AUTHOR("Example User");
MODULE_DESCRIPTION("A simple Hello World module");

// Initialization function called when module is loaded
static int __init hello_init(void) {
    printk(KERN_INFO "Hello, world! Initializing module.\n");
    return 0; // Return 0 means successful load
}

// Cleanup function called when module is removed
static void __exit hello_exit(void) {
    printk(KERN_INFO "Goodbye, world! Removing module.\n");
}

module_init(hello_init);
module_exit(hello_exit);
