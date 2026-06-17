FILESEXTRAPATHS:prepend := "${THISDIR}/${PN}:"

SRC_URI += "file://0001-mtv-evrlay-16MB-and-str-mem-74REG.patch"

# Добавляем наш конфигурационный файл в список исходников рецепта
SRC_URI += "file://defconfig"

# Опционально: если ваше ядро использует мета-данные Yocto (yocto-kernel-architecture),
# эта строка гарантирует, что defconfig принудительно заменит стандартную конфигурацию.
KBUILD_DEFCONFIG = ""

