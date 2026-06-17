EXTRA_CFLAGS+=	-Wno-declaration-after-statement

MODULES	= str-mem ts-out ts-in ts-out-2

default:	all

obj-m += $(MODULES:%=%.o)

BUILD	= $(MODULES:%=%.ko)

all::	$(BUILD)

clean::
	$(MAKE) -C $(KERNEL_SRC) M=$(PWD) clean

$(MODULES:%=%.ko):	*.c *.h
	$(MAKE) -C $(KERNEL_SRC) ARCH=$(ARCH) \
		SUBDIRS=$(CURDIR)  modules

modules_install:
	$(MAKE) -C $(KERNEL_SRC) M=$(PWD) SUBDIRS=$(CURDIR) modules_install
