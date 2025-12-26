SUMMARY = "A small image just capable of allowing a device to boot."

IMAGE_INSTALL = "packagegroup-core-boot ${CORE_IMAGE_EXTRA_INSTALL}"

IMAGE_LINGUAS = " "

LICENSE = "MIT"

inherit core-image

IMAGE_ROOTFS_SIZE ?= "8192"
IMAGE_ROOTFS_EXTRA_SPACE:append = "${@bb.utils.contains("DISTRO_FEATURES", "systemd", " + 4096", "", d)}"
move_my_files() {
    # Create the directory in the final deployment location
    rm -rf ${DEPLOY_DIR_IMAGE}/intel/socfpga
    mkdir -p ${DEPLOY_DIR_IMAGE}/intel/socfpga

    # Example: Copy a file into the new directory
    install -m 0644 ${DEPLOY_DIR_IMAGE}/socfpga_arria10_socdk_sdmmc.dtb ${DEPLOY_DIR_IMAGE}/intel/socfpga
    install -m 0644 ${DEPLOY_DIR_IMAGE}/socfpga_arria10_socdk_qspi.dtb ${DEPLOY_DIR_IMAGE}/intel/socfpga
    install -m 0644 ${DEPLOY_DIR_IMAGE}/socfpga_arria10_socdk_nand.dtb ${DEPLOY_DIR_IMAGE}/intel/socfpga

}

IMAGE_PREPROCESS_COMMAND:append = " move_my_files"

