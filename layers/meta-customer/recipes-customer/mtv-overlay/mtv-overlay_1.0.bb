SUMMARY = "mSGDMA Video Overlay Driver for Linux 6.12"
LICENSE = "GPL-2.0-only"
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/GPL-2.0-only;md5=801f80980d171dd6425610833a22dbe6"

# Наследуем системный класс Yocto для автоматической сборки модулей ядра
inherit module

# 1. Анонимная Python-функция ищет самый новый mtv-overlay*.c в папке files/ рецепта
def find_newest_tarball(d):
    import os
    import glob

    # Получаем абсолютный путь к папке files внутри вашего слоя
    files_dir = os.path.join(d.getVar('THISDIR'), 'files')
    
    # Ищем все файлы, соответствующие шаблону mtv-overlay*.c
    search_path = os.path.join(files_dir, 'mtv-overlay*.c')
    files = glob.glob(search_path)
    
    if not files:
        bb.fatal("Ни один mtv-overlay*.c не найден в папке %s" % files_dir)
    
    # Сортируем файлы по времени изменения (mtime) и берем самый свежий
    newest_file = max(files, key=os.path.getmtime)
    
    # Возвращаем только имя файла (например, mtv-overlay-v1.c)
    return os.path.basename(newest_file)

# 2. Присваиваем имя найденного файла в кастомную переменную
NEWEST_MTV_OVERLLAY = "${@find_newest_tarball(d)}"

SRC_URI = " \
    file://mtv-overlay.c \
    file://one-buffer-mtv-overlay.c \
    file://Makefile \
"

PR = "r13"


S = "${WORKDIR}/sources"
UNPACKDIR = "${S}"
KERNEL_MODULE_AUTOLOAD += "mtv-overlay"

# Указываем Yocto, что этот модуль должен автоматически ставиться в образ
# RPROVIDES:${PN} += "kernel-module-mtv-overlay"
export INSTALL_MOD_DIR="kernel/profitt"


# Force re-execution of compile and install tasks every time
do_compile[nostamp] = "1"
do_install[nostamp] = "1"
# for pbx-mtv-5161
RPROVIDES:${PN} += "pbx-mtv-508-modules"
# add one-buffer-mtv-overlay in the same dir as mtv-overlay
RDEPENDS:${PN} += "kernel-module-one-buffer-mtv-overlay"