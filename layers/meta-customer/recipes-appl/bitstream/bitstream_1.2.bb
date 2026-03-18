PR = "r1"

SRC_URI = "file://bitstream-${PV}.tar.bz2"
LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://COPYING;md5=7decd8ef15ab16ed5436851272b61cf7"
inherit autotools-brokensep
do_configure[noexec] = "1"
# CLEANBROKEN = "1"
BBCLASSEXTEND = "nativesdk"

do_compile () {
}

do_install () {
       make DESTDIR=${D}${base_prefix} PREFIX=/usr install
}

FILES_${PN} = "${includedir}"
RDEPENDS_${PN}-dev = ""

