RDEPENDS_${PN} = "ca-certificates \
	tzdata tzdata-misc tzdata-posix tzdata-right tzdata-africa \
        tzdata-americas tzdata-antarctica tzdata-arctic tzdata-asia \
        tzdata-atlantic tzdata-australia tzdata-europe tzdata-pacific \
	socat net-snmp-server net-snmp-client\
	pbx-mtv-508-modules \
        "

DEPENDS = "qtbase qtwebsockets qtserialport libusb bitstream qtsvg zvbi"
#LICENSE = "CLOSED"
LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302"


INITSCRIPT_NAME = "pbx-mtv-5161.sh"
PACKAGE_ARCH = "${MACHINE}"
SYSTEMD_SERVICE:${PN} = "pbx-mtv-508.service"

# file://${BPN}-${PV}.tar.xz # ign
SRC_URI = "file://${BPN}-${PV}.tar.xz \
           file://qt-qpa.sh \
           file://mb86m21_assp_nsec_enc_h.bin \
           file://mb86m21_assp_nsec_idle.bin \
           file://mb86m21_assp_nsec_ldenc_h.bin \
           file://spirom_writer_usb_c.bin \
           file://snmp-profitt.conf \
           file://event_log_class_description \
           file://pbx-mtv-5161.sh \
           file://pbx-mtv-5161.service \
           file://${INITSCRIPT_NAME} \
           "

INITSCRIPT_PARAMS = "defaults 99"
LICENSE = "CLOSED"

EXTRA_OECMAKE_pnmtv581 += "-DBOARD_REV=1"

PR = "r2"

inherit cmake_qt5 initscript


#do_configure_prepend() # ign
do_configure:prepend() {
        echo \#define VERSION \"${PV}-${PR} \(\" __DATE__ \"\)\" > ${S}/version.h
}

# do_install_append() # ign
# IMAGE_INSTALL:append() 
# ign replased WORKDIR to UNPACKDIR
# cause bitbake -e app | grep sources-unpack
#     [_defaultval] "${WORKDIR}/sources-unpack"
# UNPACKDIR="/home/iru/poky-socfpga/build/tmp/work/arria10-poky-linux-gnueabi/app/4.14.0/sources-unpack"

do_install:append() {
        install -d ${D}${sysconfdir}/init.d
        install -m 0755 ${UNPACKDIR}/${INITSCRIPT_NAME} ${D}${sysconfdir}/init.d
        install -d ${D}${sysconfdir}/profile.d/
        install -m 0755 ${UNPACKDIR}/qt-qpa.sh ${D}${sysconfdir}/profile.d/
        
        install -d ${D}/var
	install -m 0755 ${UNPACKDIR}/mb86m21_assp_nsec_enc_h.bin ${D}/var/
	install -m 0755 ${UNPACKDIR}/mb86m21_assp_nsec_idle.bin ${D}/var/
	install -m 0755 ${UNPACKDIR}/mb86m21_assp_nsec_ldenc_h.bin ${D}/var/
	install -m 0755 ${UNPACKDIR}/spirom_writer_usb_c.bin ${D}/var/
        install -d ${D}/etc
        install -m 0755 ${UNPACKDIR}/snmp-profitt.conf ${D}/etc
        install -m 0644 ${UNPACKDIR}/event_log_class_description ${D}/var

        install -d ${D}${systemd_system_unitdir}
        install -m 0644 ${UNPACKDIR}/pbx-mtv-5161.service ${D}${systemd_system_unitdir}
        install -d ${D}/${systemd_system_unitdir}/multi-user.target.wants
        ln -sf /usr/lib/systemd/system/pbx-mtv-5161.service ${D}/${systemd_system_unitdir}/multi-user.target.wants/pbx-mtv-5161.service
}

pkg_postinst_${PN} () {
        rm -f /etc/xdg/pbx-mtv-508*
}

FILES:${PN} += "${sysconfdir}/init.d/${INITSCRIPT_NAME}"
FILES:${PN} += "${systemd_system_unitdir}/pbx-mtv-5161.service"
FILES:${PN} += "${systemd_system_unitdir}/multi-user.target.wants/pbx-mtv-5161.service"
