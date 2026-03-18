inherit update-rc.d-nostart
SRC_URI += "\ 
        file://${INITSCRIPT_NAME} \
"

# do_install_append() # ign
IMAGE_INSTALL:append() {
        install -d ${D}${sysconfdir}/init.d/
        install -m 0755 ${WORKDIR}/${INITSCRIPT_NAME} ${D}${sysconfdir}/init.d/
}
