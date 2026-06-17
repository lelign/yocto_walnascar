SUMMARY = "A recipe to add symb link"
LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302"


do_install() {
    # Create the target directory within the package's installation root
    install -d ${D}/usr/lib/fonts/

    # Install your font files into the directory (example)
    # install -m 0644 ${WORKDIR}/myfont.ttf ${D}/usr/lib/fonts/myfont.ttf

    # Create the symbolic link in the package's installation root
    # Target: /usr/lib/fonts (within the final filesystem)
    # Link name: /usr/lib/mylink (within the final filesystem)
    # The 'ln -s' command takes the target first, then the link name.
    ln -sf /usr/lib/fonts/ ${D}/usr/lib/mylink

    # If the link is relative to the target, it should be specified as such
    # Example for a link within the same directory structure:
    # ln -sf fonts ${D}/usr/lib/mylink 
}

# Ensure the parent directory of the link is packaged
FILES:${PN} += " /usr/lib/mylink"
FILES:${PN} += " /usr/lib/fonts/"