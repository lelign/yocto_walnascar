inherit module
LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302"

PR = "r1"

#SRC_URI = "file://${BPN}-${PV}.tar.gz \
#           file://0001-renamed_mtv_overlay_remove_int_to_void_and_deleted_T.patch \
#           "

SRC_URI = "file://Makefile \
           file://mtv-overlay.c \
           file://mtv-overlay.h \
           "
           
#PARALLEL_MAKE = ""
S = "${WORKDIR}/sources"
UNPACKDIR = "${S}"

export INSTALL_MOD_DIR="kernel/profitt"

