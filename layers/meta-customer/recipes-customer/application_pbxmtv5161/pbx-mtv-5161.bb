SUMMARY = "PBX MTV Application"
LICENSE = "CLOSED"

# Переводим зависимости на чистый синтаксис Walnascar и подключаем ТОЛЬКО systemd
inherit cmake_qt5 systemd

RDEPENDS:${PN} = "ca-certificates \
    tzdata tzdata-misc tzdata-posix tzdata-right tzdata-africa \
    tzdata-americas tzdata-antarctica tzdata-arctic tzdata-asia \
    tzdata-atlantic tzdata-australia tzdata-europe tzdata-pacific \
    socat net-snmp-server net-snmp-client \
    pbx-mtv-508-modules \
"

DEPENDS = "qtbase qtwebsockets qtserialport libusb bitstream qtsvg zvbi nlohmann-json"

INITSCRIPT_NAME = "pbx-mtv-5161.sh"
PACKAGE_ARCH = "${MACHINE}"

# Настройки для системного класса systemd
SYSTEMD_PACKAGES = "${PN}"
SYSTEMD_SERVICE:${PN} = "pbx-mtv-5161.service"
SYSTEMD_AUTO_ENABLE:${PN} = "enable"

# 1. Автоматический поиск самого нового архива в папке files/
def find_newest_tarball(d):
    import os
    import glob

    files_dir = os.path.join(d.getVar('THISDIR'), 'files')
    search_path = os.path.join(files_dir, 'pbx-mtv-5161.tar.gz')
    files = glob.glob(search_path)
    
    if not files:
        bb.fatal("Ни один архив pbx-mtv-5161-26.*.tar.gz не найден в папке %s" % files_dir)
    
    newest_file = max(files, key=os.path.getmtime)
    return os.path.basename(newest_file)

NEWEST_TAR = "${@find_newest_tarball(d)}"

SRC_URI = "file://${NEWEST_TAR} \
           file://qt-qpa.sh \ 
           file://snmp-profitt.conf \
           file://event_log_class_description \
           file://pbx-mtv-5161.sh \
           file://pbx-mtv-5161.service \
           file://${INITSCRIPT_NAME} \
           file://OP_47_emulator \
           file://scte_tty_gen \
"
# Принудительно проверяем реальный файл на диске, который нашла Python-функция
do_unpack[file-checksums] += "${THISDIR}/files/${NEWEST_TAR}:True"

# Заставляем BitBake следить за изменением конкретного файла архива
do_unpack[vardeps] += "${@d.getVar('NEWEST_TAR') if os.path.exists(os.path.join(d.getVar('THISDIR'), 'files', d.getVar('NEWEST_TAR'))) else ''}"

INITSCRIPT_PARAMS = "defaults 99"
EXTRA_OECMAKE:append = " -DBOARD_REV=1"

# Поднимаем ревизию для opkg на плате
PR = "r21"

# Для Walnascar исходники всегда ищем в UNPACKDIR
S = "${UNPACKDIR}"

# Запись макроса в заголовочный файл version.h
do_configure:prepend() {
   # Добавляем +3 часа к текущему времени сборки
   BUILD_TIME=$(date -d '+3 hours' +'%m-%d_%H:%M')   
   # Записываем макрос APP_VERSION в файл version.h
   echo "#define APP_VERSION \"${PV}-${PR} (${BUILD_TIME})\"" > ${S}/version.h
}

do_install:append() {
    install -d ${D}${sysconfdir}/init.d
    install -m 0755 ${UNPACKDIR}/${INITSCRIPT_NAME} ${D}${sysconfdir}/init.d
    
    install -d ${D}${sysconfdir}/profile.d/
    install -m 0755 ${UNPACKDIR}/qt-qpa.sh ${D}${sysconfdir}/profile.d/
    
    install -d ${D}/var
    install -d ${D}${sysconfdir}
    install -m 0755 ${UNPACKDIR}/snmp-profitt.conf ${D}${sysconfdir}
    install -m 0644 ${UNPACKDIR}/event_log_class_description ${D}/var

    install -d ${D}${systemd_system_unitdir}
    install -m 0644 ${UNPACKDIR}/pbx-mtv-5161.service ${D}${systemd_system_unitdir}
    
    install -d ${D}/home/root
    install -m 0755 ${UNPACKDIR}/OP_47_emulator ${D}/home/root/
    install -m 0755 ${UNPACKDIR}/scte_tty_gen ${D}/home/root/
}

pkg_postinst:${PN} () {
    rm -f $D${sysconfdir}/xdg/pbx-mtv-508*
}

# для remote_update
# Это заставит BitBake при сборке автоматически дописывать exit 0 в конец системных скриптов
pkg_prerm:append:${PN}() {
    exit 0
}

# Явно расписываем все файлы по пакетам для Walnascar (Защита от QA Issue)
FILES:${PN} += " \
    ${sysconfdir}/init.d/pbx-mtv-5161.sh \
    ${sysconfdir}/profile.d/qt-qpa.sh \
    ${sysconfdir}/snmp-profitt.conf \
    /var/event_log_class_description \
    ${systemd_system_unitdir}/pbx-mtv-5161.service \
    /home/root/OP_47_emulator \
    /home/root/scte_tty_gen \
"
