SUMMARY = "A recipe to add symb link"
LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302"


do_install() {    
    install -d ${D}/${systemd_system_unitdir}/multi-user.target.wants

    ln -sf /usr/lib/systemd/system/pbx-mtv-508.service ${D}/${systemd_system_unitdir}/multi-user.target.wants/pbx-mtv-508.service

}

# Ensure the parent directory of the link is packaged

FILES:${PN} += "${systemd_system_unitdir}/multi-user.target.wants/pbx-mtv-508.service"