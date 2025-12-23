SUMMARY = "A simple 'Hello, World!' application"
DESCRIPTION = "A basic C program that prints 'Hello, World!' to demonstrate Yocto recipes."
LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302"

SRC_URI = "file://hello-world.c"

S = "${WORKDIR}"

do_compile() {
    ${CC} hello-world.c ${LDFLAGS} -o hello-world
}

do_install() {
    install -d ${D}${bindir}
    install -m 0755 hello-world ${D}${bindir}
}
