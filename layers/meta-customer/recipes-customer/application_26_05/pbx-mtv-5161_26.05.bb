RDEPENDS_${PN} = "ca-certificates \
	tzdata tzdata-misc tzdata-posix tzdata-right tzdata-africa \
        tzdata-americas tzdata-antarctica tzdata-arctic tzdata-asia \
        tzdata-atlantic tzdata-australia tzdata-europe tzdata-pacific \
	socat net-snmp-server net-snmp-client\
	pbx-mtv-508-modules \
        "

DEPENDS = "qtbase qtwebsockets qtserialport libusb bitstream qtsvg zvbi"
#LICENSE = "CLOSED"
LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302"


INITSCRIPT_NAME = "pbx-mtv-5161.sh"
PACKAGE_ARCH = "${MACHINE}"
SYSTEMD_SERVICE:${PN} = "pbx-mtv-508.service"

# 1. Анонимная Python-функция ищет самый новый tar.gz в папке files/ рецепта
def find_newest_tarball(d):
    import os
    import glob

    # Получаем абсолютный путь к папке files внутри вашего слоя
    files_dir = os.path.join(d.getVar('THISDIR'), 'files')
    
    # Ищем все файлы, соответствующие шаблону my_archive_v*.tar.gz
    search_path = os.path.join(files_dir, 'pbx-mtv-5161-26.*.tar.gz')
    files = glob.glob(search_path)
    
    if not files:
        bb.fatal("Ни один архив pbx-mtv-5161-26.*.tar.gz не найден в папке %s" % files_dir)
    
    # Сортируем файлы по времени изменения (mtime) и берем самый свежий
    newest_file = max(files, key=os.path.getmtime)
    
    # Возвращаем только имя файла (например, my_archive_v3.tar.gz)
    return os.path.basename(newest_file)

# 2. Присваиваем имя найденного архива в кастомную переменную
NEWEST_TAR = "${@find_newest_tarball(d)}"

# file://${BPN}-${PV}.tar.xz # ign
SRC_URI = "file://${NEWEST_TAR} \
           file://qt-qpa.sh \
           file://snmp-profitt.conf \
           file://event_log_class_description \
           file://pbx-mtv-5161.sh \
           file://pbx-mtv-5161.service \
           file://${INITSCRIPT_NAME} \
           "

INITSCRIPT_PARAMS = "defaults 99"
LICENSE = "CLOSED"

EXTRA_OECMAKE_pnmtv581 += "-DBOARD_REV=1"

# PR = "r3" for pbx-mtv-5161-26.013.tar.gz YCrCb version OK
# PR = "r4" mimo...
# PR = "r5" mimo...
# PR = "r6" working but noznicy on screen pbx-mtv-5161-26.015.tar
# PR = "r8" checked via python script for alpha
PR = "r8" 


# 1. Point the source directory to where BitBake actually unpacked the files
S = "${UNPACKDIR}"

inherit cmake_qt5 initscript


#do_configure_prepend() # ign
do_configure:prepend() {
        echo \#define VERSION \"${PV}-${PR} \(\" __DATE__ \"\)\" > ${UNPACKDIR}/version.h
}


do_install:append() {
        install -d ${D}${sysconfdir}/init.d
        install -m 0755 ${UNPACKDIR}/${INITSCRIPT_NAME} ${D}${sysconfdir}/init.d
        install -d ${D}${sysconfdir}/profile.d/
        install -m 0755 ${UNPACKDIR}/qt-qpa.sh ${D}${sysconfdir}/profile.d/
        
        install -d ${D}/var
	install -d ${D}/etc
        install -m 0755 ${UNPACKDIR}/snmp-profitt.conf ${D}/etc
        install -m 0644 ${UNPACKDIR}/event_log_class_description ${D}/var

        install -d ${D}${systemd_system_unitdir}
        install -m 0644 ${UNPACKDIR}/pbx-mtv-5161.service ${D}${systemd_system_unitdir}
        install -d ${D}/${systemd_system_unitdir}/multi-user.target.wants
        ln -sf /usr/lib/systemd/system/pbx-mtv-5161.service ${D}/${systemd_system_unitdir}/multi-user.target.wants/pbx-mtv-5161.service
}

pkg_postinst_${PN} () {
        rm -f /etc/xdg/pbx-mtv-508*
}

FILES:${PN} += "${sysconfdir}/init.d/${INITSCRIPT_NAME}"
FILES:${PN} += "${systemd_system_unitdir}/pbx-mtv-5161.service"
FILES:${PN} += "${systemd_system_unitdir}/multi-user.target.wants/pbx-mtv-5161.service"
