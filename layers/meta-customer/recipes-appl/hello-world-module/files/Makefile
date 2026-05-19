obj-m := hello.o

all:
	$(MAKE) -C $(KERNEL_SRC) M=$(PWD) modules

# Эта цель критически важна для Yocto
modules_install:
	$(MAKE) -C $(KERNEL_SRC) M=$(PWD) modules_install

clean:
	$(MAKE) -C $(KERNEL_SRC) M=$(PWD) clean
