FILESEXTRAPATHS:prepend := "${THISDIR}/${PN}:"

SRC_URI += "file://0001-third-try-join-netconfig-i2c.patch \
            file://0001-mtv-evrlay-16MB-and-str-mem-74REG.patch \   
            file://0001-dts-arm-a10-fix-mdio-phy-polling-flat-version.patch  \
            file://0001-dts-arm-a10-fix-overlay-and-strmem-addresses-to-matc.patch  \
            file://0001-dts-arm-a10-fix-error-in-mtv_overlay-overlay-ff20000.patch  \
            file://0001-dts-arm-a10-fix-vmsgdma_cma_region-no-map.patch \
            file://0001-change-size-vmsgdma_cma_region-reg-0x3f000000-0x005e.patch \
            file://0001-dts-add-kick-reg-for-DMA.patch  \
            file://0001-increased-reg-0x3f000000-0x00BDE000-12443648-0xBDE00.patch \
            file://devtool-fragment.cfg \
            "

# Добавляем наш конфигурационный файл в список исходников рецепта
SRC_URI += "file://defconfig"

# Опционально: если ваше ядро использует мета-данные Yocto (yocto-kernel-architecture),
# эта строка гарантирует, что defconfig принудительно заменит стандартную конфигурацию.
KBUILD_DEFCONFIG = ""

