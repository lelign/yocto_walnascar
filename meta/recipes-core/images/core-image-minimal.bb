SUMMARY = "A small image just capable of allowing a device to boot."

IMAGE_INSTALL = "packagegroup-core-boot ${CORE_IMAGE_EXTRA_INSTALL}"

IMAGE_LINGUAS = " "

LICENSE = "MIT"

inherit core-image

IMAGE_ROOTFS_SIZE ?= "8192"
IMAGE_ROOTFS_EXTRA_SPACE:append = "${@bb.utils.contains("DISTRO_FEATURES", "systemd", " + 4096", "", d)}"
cp_dtb_file() {
    # Create the directory in the deploy/intel/socfpga
    rm -rf ${DEPLOY_DIR_IMAGE}/intel/socfpga
    mkdir -p ${DEPLOY_DIR_IMAGE}/intel/socfpga

    # Copy dtb file into the intel/socfpga
    install -m 0644 ${DEPLOY_DIR_IMAGE}/socfpga_arria10_socdk_sdmmc.dtb ${DEPLOY_DIR_IMAGE}/intel/socfpga
    # commented 2 lines after edited layers/meta-intel-fpga/conf/machine/arria10.conf
    # install -m 0644 ${DEPLOY_DIR_IMAGE}/socfpga_arria10_socdk_qspi.dtb ${DEPLOY_DIR_IMAGE}/intel/socfpga
    # install -m 0644 ${DEPLOY_DIR_IMAGE}/socfpga_arria10_socdk_nand.dtb ${DEPLOY_DIR_IMAGE}/intel/socfpga

}

IMAGE_PREPROCESS_COMMAND:append = " cp_dtb_file"

