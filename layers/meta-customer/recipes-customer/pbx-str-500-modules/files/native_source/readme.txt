Компиляция в yocto linux

bitbake -c devshell virtual/kernel
cd XXXX
make -C ${KBUILD_OUTPUT} M=`pwd` modules

где XXXX - путь к папке с модулем

