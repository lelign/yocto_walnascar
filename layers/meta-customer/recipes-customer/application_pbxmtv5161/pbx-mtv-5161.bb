SUMMARY = "PBX MTV Application"
LICENSE = "CLOSED"

# Переводим зависимости на правильный синтаксис Walnascar (через двоеточие)
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
SYSTEMD_SERVICE:${PN} = "pbx-mtv-508.service"

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
"
# Принудительно проверяем реальный файл на диске, который нашла Python-функция
do_unpack[file-checksums] += "${THISDIR}/files/${NEWEST_TAR}:True"

# ХАК ДЛЯ WALNASCAR: Заставляем BitBake следить за mtime (временем изменения) 
# самого нового найденного архива. Как только вы обновите его через SDK — кэш сбросится сам!
# do_unpack[vardeps] += "${@os.path.exists(os.path.join(d.getVar('THISDIR'), 'files', d.getVar('NEWEST_TAR'))) ? d.getVar('NEWEST_TAR') : ''}"
# Заставляем BitBake следить за изменением конкретного файла архива
do_unpack[vardeps] += "${@d.getVar('NEWEST_TAR') if os.path.exists(os.path.join(d.getVar('THISDIR'), 'files', d.getVar('NEWEST_TAR'))) else ''}"



INITSCRIPT_PARAMS = "defaults 99"
EXTRA_OECMAKE:append = " -DBOARD_REV=1"

PR = "r13"

# Для Walnascar исходники всегда ищем в UNPACKDIR
S = "${UNPACKDIR}"

inherit cmake_qt5 initscript

do_configure:prepend() {
    # Создаем version.h прямо в директории исходников перед вызовом CMake
    echo "#define VERSION \"${PV}-${PR} (\" __DATE__ \")\"" > ${S}/version.h
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
    
    install -d ${D}${systemd_system_unitdir}/multi-user.target.wants
    ln -sf ${systemd_system_unitdir}/pbx-mtv-5161.service ${D}${systemd_system_unitdir}/multi-user.target.wants/pbx-mtv-5161.service
}

# Исправлен синтаксис пост-инсталляции на современный Yocto
pkg_postinst:${PN} () {
    rm -f $D${sysconfdir}/xdg/pbx-mtv-508*
}

# Исправлен синтаксис маппинга файлов в пакет
FILES:${PN} += "${sysconfdir}/init.d/${INITSCRIPT_NAME}"
FILES:${PN} += "${systemd_system_unitdir}/pbx-mtv-5161.service"
FILES:${PN} += "${systemd_system_unitdir}/multi-user.target.wants/pbx-mtv-5161.service"
