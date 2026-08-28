SECTION = "libs"
PRIORITY = "optional"
PR = "r2"
LICENSE = "CLOSED"

SRC_URI = "file://proflex-ip-${PV}.tar.gz \
           file://proflex-ip.service \
"
#SRC_URI:append:sama5d3 = " file://sama5d3-gpio.diff"

# Настройки для Systemd (автозапуск отключен)
SYSTEMD_SERVICE:${PN} = "proflex-ip.service"
SYSTEMD_AUTO_ENABLE:${PN} = "enable"

inherit cmake systemd

# Путь к CMakeLists.txt внутри распакованного архива
#S = "${UNPACKDIR}/proflex-ip-${PV}"
S = "${UNPACKDIR}"

do_install:append() {
    # Скрипт берем из папки исходников ${S}
    install -d ${D}${sysconfdir}/init.d
    install -m 0755 ${S}/proflex-ip.sh ${D}${sysconfdir}/init.d/

    # Сервис берем из корня ${UNPACKDIR}
    install -d ${D}${systemd_system_unitdir}
    install -m 0644 ${UNPACKDIR}/proflex-ip.service ${D}${systemd_system_unitdir}/
}

FILES:${PN} += " \
    ${sysconfdir}/init.d/proflex-ip.sh \
    ${systemd_system_unitdir}/${SYSTEMD_SERVICE:${PN}} \
"
