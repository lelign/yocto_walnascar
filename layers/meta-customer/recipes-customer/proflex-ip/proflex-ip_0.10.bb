SECTION = "libs"
PRIORITY = "optional"
PR = "r9"
LICENSE = "CLOSED"

SRC_URI = "file://proflex-ip-${PV}.tar.gz \
           file://proflex-ip.service \
"

# В Walnascar обязательно явно указывать пакет для systemd-сервиса
SYSTEMD_PACKAGES = "${PN}"
SYSTEMD_SERVICE:${PN} = "proflex-ip.service"
SYSTEMD_AUTO_ENABLE:${PN} = "enable"

inherit cmake systemd

S = "${UNPACKDIR}"

do_install:append() {
    # Скрипт берем из папки исходников ${S}
    install -d ${D}${sysconfdir}/init.d
    install -m 0755 ${S}/proflex-ip.sh ${D}${sysconfdir}/init.d/

    # Сервис берем из корня ${UNPACKDIR}
    install -d ${D}${systemd_system_unitdir}
    install -m 0644 ${UNPACKDIR}/proflex-ip.service ${D}${systemd_system_unitdir}/
}

# для remote_update 
# Это заставит BitBake при сборке автоматически дописывать exit 0 в конец системных скриптов
pkg_prerm:append:${PN}() {
    exit 0
}

FILES:${PN} += " \
    ${sysconfdir}/init.d/proflex-ip.sh \
    ${systemd_system_unitdir}/${SYSTEMD_SERVICE:${PN}} \
"
