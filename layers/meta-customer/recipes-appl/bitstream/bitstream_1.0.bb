PR = "r2"

SRC_URI = "file://bitstream-pmpe.tar.bz2"
LICENSE = "CLOSED"
inherit autotools-brokensep

S = "${WORKDIR}/bitstream-pmpe"

do_compile () {
}

do_install () {
       make DESTDIR=${D} PREFIX=/usr install
}

FILES_${PN} = "/usr/include"

