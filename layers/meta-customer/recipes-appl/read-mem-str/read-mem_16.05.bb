SUMMARY = "read str-mem using CMake"


DEPENDS = "qtbase "

LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302"


PACKAGE_ARCH = "${MACHINE}"

# file://${BPN}-${PV}.tar.xz # ign
SRC_URI = "file://CMakeLists.txt \
           file://read_mem/read_mem.cpp \
           file://read_mem/read_mem.h \
           file://read_mem/scaler_coeff.h \
           file://read_mem/str-mem-dev.h \      
           "

LICENSE = "CLOSED"


PR = "r2"

inherit cmake_qt5

PARALLEL_MAKE = ""
S = "${WORKDIR}/sources"
UNPACKDIR = "${S}"
