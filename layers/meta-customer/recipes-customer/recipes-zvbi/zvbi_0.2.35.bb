SECTION = "libs"

LICENSE = "CLOSED"
LIC_FILES_CHKSUM = "file://COPYING;md5=59530bdf33659b29e73d4adb9f9f6552"

DEPENDS = "libpng"

PR = "r2"

SRC_URI = "https://sourceforge.net/projects/zapping/files/zvbi/${PV}/zvbi-${PV}.tar.bz2"

SRC_URI[md5sum] = "95e53eb208c65ba6667fd4341455fa27"
SRC_URI[sha256sum] = "fc883c34111a487c4a783f91b1b2bb5610d8d8e58dcba80c7ab31e67e4765318"

inherit autotools lib_package pkgconfig gettext
