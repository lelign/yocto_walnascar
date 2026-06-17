# 1. Функция на Python собирает все исполняемые файлы и считает их общий хэш md5
def get_files_checksum(d):
    import os
    import hashlib
    files_dir = os.path.join(d.getVar('THISDIR'), 'files')
    if not os.path.exists(files_dir):
        return "r0"
    
    # Собираем имена файлов и время их изменения / размер
    hasher = hashlib.md5()
    for f in sorted(os.listdir(files_dir)):
        fpath = os.path.join(files_dir, f)
        if os.path.isfile(fpath):
            # Хэшируем имя файла и его размер, чтобы заметить подмену
            hasher.update(f.encode('utf-8'))
            hasher.update(str(os.path.getsize(fpath)).encode('utf-8'))
            
    return "r1." + hasher.hexdigest()[:8]

# 2. Присваиваем динамический хэш в переменную PR
PR = "${@get_files_checksum(d)}"


# Package summary
SUMMARY = "Рецепт для добавления файлов в домашнюю директорию"
# License, for example MIT
LICENSE = "MIT"
# License checksum file is always required
LIC_FILES_CHKSUM = "file://${COREBASE}/meta/files/common-licenses/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302"


DEPENDS = "qtbase qtwebsockets qtserialport libusb bitstream qtsvg zvbi"                                              
# 1. Явно указываем Yocto искать файлы в подпапке files рядом с рецептом
FILESEXTRAPATHS:prepend := "${THISDIR}/files:"

SRC_URI = "file://dma_test_rw \
           file://mtv_dump_tool \ 
           file://mtv_dump_qt_stop_gradient \
           file://mtv_dump_qt_stop_gradient_v422 \
           file://r_reg_via_dev_mem_II\
           file://read_all_via_dev_mem_II \
           file://rw_via_dev_mem_II \
           file://rw_via_str_mem_3_const \
           file://rw_via_str_mem_74_reg \
           file://mtv_dump_via_flag \
           "
# 1. Добавляем путь к папке files
FILESEXTRAPATHS:prepend := "${THISDIR}/files:"


# 3. ПРАВИЛЬНО: Указываем пустую подпапку, чтобы избежать ошибки поддержки S = WORKDIR
S = "${WORKDIR}/sources"
UNPACKDIR = "${S}"

# 4. Отключаем проверки безопасности QA для готового бинарника
INSANE_SKIP:${PN} = "ldflags already-stripped"


# 2. Описываем процесс установки
do_install() {
    # Создаем директорию /home/root в целевой файловой системе image
    install -d ${D}/home/root
    
    # Копируем файл с правами 0755 (выполнение) или 0644 (только чтение)
    install -m 0755 ${UNPACKDIR}/dma_test_rw ${D}/home/root/
    install -m 0755 ${UNPACKDIR}/mtv_dump_tool ${D}/home/root/
    install -m 0755 ${UNPACKDIR}/mtv_dump_qt_stop_gradient ${D}/home/root/
    install -m 0755 ${UNPACKDIR}/mtv_dump_qt_stop_gradient_v422 ${D}/home/root/
    install -m 0755 ${UNPACKDIR}/r_reg_via_dev_mem_II ${D}/home/root/
    install -m 0755 ${UNPACKDIR}/read_all_via_dev_mem_II ${D}/home/root/
    install -m 0755 ${UNPACKDIR}/rw_via_dev_mem_II ${D}/home/root/
    install -m 0755 ${UNPACKDIR}/rw_via_str_mem_3_const ${D}/home/root/
    install -m 0755 ${UNPACKDIR}/rw_via_str_mem_74_reg ${D}/home/root/
    install -m 0755 ${UNPACKDIR}/mtv_dump_via_flag ${D}/home/root/
}

# 3. Обязательно регистрируем путь, чтобы Yocto упаковал его в rpm/ipk/deb пакет
FILES:${PN} += "/home/root/dma_test_rw"
FILES:${PN} += "/home/root/mtv_dump_tool"
FILES:${PN} += "/home/root/mtv_dump_qt_stop_gradient"
FILES:${PN} += "/home/root/mtv_dump_qt_stop_gradient_v422"
FILES:${PN} += "/home/root/r_reg_via_dev_mem_II"
FILES:${PN} += "/home/root/read_all_via_dev_mem_II"
FILES:${PN} += "/home/root/rw_via_dev_mem_II"
FILES:${PN} += "/home/root/rw_via_str_mem_3_const"
FILES:${PN} += "/home/root/rw_via_str_mem_74_reg"
FILES:${PN} += "/home/root/mtv_dump_via_flag"