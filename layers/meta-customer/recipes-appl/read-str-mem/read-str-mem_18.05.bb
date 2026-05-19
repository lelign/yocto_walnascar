SUMMARY = "Utility for reading registers via /dev/str-mem device"
DESCRIPTION = "Application that interacts with str-mem kernel driver using ioctl calls."
LICENSE = "MIT"
# Ссылка на файл лицензии. Если файла LICENSE нет, можно указать файл исходного кода
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302"

# Подключаем класс cmake. Yocto автоматически запустит cmake, make и make install
inherit cmake

# Указываем, где лежат исходные файлы. 
# В данном случае они ищутся в локальной папке 'files' рядом с рецептом
SRC_URI = " \
    file://CMakeLists.txt \
    file://main.cpp \
"


PARALLEL_MAKE = ""

# Каталог, в котором распаковываются исходники
S = "${WORKDIR}/sources"
UNPACKDIR = "${S}"

# Если ваш CMakeLists.txt не содержит команды install(), Yocto не сможет скопировать бинарник.
# Эта функция вручную устанавливает скомпилированный файл в файловую систему образа.
do_install() {
    install -d ${D}${bindir}
    install -m 0755 ${B}/read_str_mem ${D}${bindir}/
}

# На всякий случай объявляем, что бинарник идет в стандартный пакет
FILES:${PN} += "${bindir}/read_str_mem"
