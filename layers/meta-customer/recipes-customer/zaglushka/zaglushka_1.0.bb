SUMMARY = "A recipe to add a gpio and hwmon in to rootfs on path /"
LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302"

SRC_URI = "file://gpio-${PV}.tar.xz \
            file://hwmon-${PV}.tar.xz \
            "

S = "${WORKDIR}/sources"
UNPACKDIR = "${S}"

do_install() {
    # install -m 0644 ${WORKDIR}/somefile-${PV}.txt ${D}/some_file.txt
    # Create the destination directory in the target rootfs
    #install -d ${D}/gpio
    #install -d ${D}/hwmon
    #install -d ${D}/home/root/gpio
    # Recursively copy contents of the folder
    cp -r ${UNPACKDIR}/gpio ${D}/
    cp -r ${UNPACKDIR}/hwmon ${D}/
    #install -m 0644 ${UNPACKDIR}/gpio/* ${D}/home/root/
    # install -d ${D}/home/root/hwmon
    # 
    #install -m 0644 ${UNPACKDIR}/hwmon/* ${D}/home/root/
}


# Explicitly include the new directory in the package's output files
FILES:${PN} += "/gpio /hwmon"
