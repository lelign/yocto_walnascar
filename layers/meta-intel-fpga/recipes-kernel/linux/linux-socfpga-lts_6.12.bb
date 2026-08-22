LINUX_VERSION = "6.12.33"
LINUX_VERSION_SUFFIX = "-lts"

LIC_FILES_CHKSUM = "file://COPYING;md5=6bc538ed5bd9a7fc9398086aedcd7e46"

SRCREV = "3234b1ed89566a5e8b6c22c68bdfd36347174267"

include linux-socfpga.inc

SRC_URI += "${@bb.utils.contains("IMAGE_TYPE", "gsrd", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pr", "file://0001-dts-arm-enable-FPGA-PR-DTBs-for-Arria10.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "nand", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "qspi", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pcie", "file://0001-socfpga_arria10_socdk-pcie-include-reference-design-.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "sgmii", "file://0001-socfpga_arria10_socdk-sgmii-include-reference-design.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "tse", "file://0001-socfpga_arria10_socdk-tse-include-reference-design-d.patch", "", d)}${@bb.utils.contains("IMAGE_TYPE", "gsrd", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pr", "file://0001-dts-arm-enable-FPGA-PR-DTBs-for-Arria10.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "nand", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "qspi", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pcie", "file://0001-socfpga_arria10_socdk-pcie-include-reference-design-.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "sgmii", "file://0001-socfpga_arria10_socdk-sgmii-include-reference-design.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "tse", "file://0001-socfpga_arria10_socdk-tse-include-reference-design-d.patch", "", d)}${@bb.utils.contains("IMAGE_TYPE", "gsrd", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pr", "file://0001-dts-arm-enable-FPGA-PR-DTBs-for-Arria10.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "nand", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "qspi", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pcie", "file://0001-socfpga_arria10_socdk-pcie-include-reference-design-.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "sgmii", "file://0001-socfpga_arria10_socdk-sgmii-include-reference-design.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "tse", "file://0001-socfpga_arria10_socdk-tse-include-reference-design-d.patch", "", d)}${@bb.utils.contains("IMAGE_TYPE", "gsrd", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pr", "file://0001-dts-arm-enable-FPGA-PR-DTBs-for-Arria10.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "nand", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "qspi", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pcie", "file://0001-socfpga_arria10_socdk-pcie-include-reference-design-.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "sgmii", "file://0001-socfpga_arria10_socdk-sgmii-include-reference-design.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "tse", "file://0001-socfpga_arria10_socdk-tse-include-reference-design-d.patch", "", d)}file://lbdaf.scc \
           file://usb_adapter.scc \
           ${@bb.utils.contains("IMAGE_TYPE", "gsrd", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pr", "file://0001-dts-arm-enable-FPGA-PR-DTBs-for-Arria10.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "nand", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "qspi", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pcie", "file://0001-socfpga_arria10_socdk-pcie-include-reference-design-.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "sgmii", "file://0001-socfpga_arria10_socdk-sgmii-include-reference-design.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "tse", "file://0001-socfpga_arria10_socdk-tse-include-reference-design-d.patch", "", d)}${@bb.utils.contains("IMAGE_TYPE", "gsrd", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pr", "file://0001-dts-arm-enable-FPGA-PR-DTBs-for-Arria10.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "nand", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "qspi", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pcie", "file://0001-socfpga_arria10_socdk-pcie-include-reference-design-.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "sgmii", "file://0001-socfpga_arria10_socdk-sgmii-include-reference-design.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "tse", "file://0001-socfpga_arria10_socdk-tse-include-reference-design-d.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "gsrd", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pr", "file://0001-dts-arm-enable-FPGA-PR-DTBs-for-Arria10.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "nand", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "qspi", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pcie", "file://0001-socfpga_arria10_socdk-pcie-include-reference-design-.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "sgmii", "file://0001-socfpga_arria10_socdk-sgmii-include-reference-design.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "tse", "file://0001-socfpga_arria10_socdk-tse-include-reference-design-d.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "gsrd", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pr", "file://0001-dts-arm-enable-FPGA-PR-DTBs-for-Arria10.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "nand", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "qspi", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pcie", "file://0001-socfpga_arria10_socdk-pcie-include-reference-design-.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "sgmii", "file://0001-socfpga_arria10_socdk-sgmii-include-reference-design.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "tse", "file://0001-socfpga_arria10_socdk-tse-include-reference-design-d.patch", "", d)}${@bb.utils.contains("IMAGE_TYPE", "gsrd", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pr", "file://0001-dts-arm-enable-FPGA-PR-DTBs-for-Arria10.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "nand", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "qspi", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pcie", "file://0001-socfpga_arria10_socdk-pcie-include-reference-design-.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "sgmii", "file://0001-socfpga_arria10_socdk-sgmii-include-reference-design.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "tse", "file://0001-socfpga_arria10_socdk-tse-include-reference-design-d.patch", "", d)}${@bb.utils.contains("IMAGE_TYPE", "gsrd", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pr", "file://0001-dts-arm-enable-FPGA-PR-DTBs-for-Arria10.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "nand", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "qspi", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pcie", "file://0001-socfpga_arria10_socdk-pcie-include-reference-design-.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "sgmii", "file://0001-socfpga_arria10_socdk-sgmii-include-reference-design.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "tse", "file://0001-socfpga_arria10_socdk-tse-include-reference-design-d.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "gsrd", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pr", "file://0001-dts-arm-enable-FPGA-PR-DTBs-for-Arria10.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "nand", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "qspi", "file://0001-socfpga_arria10_socdk-include-reference-design-dtsi.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "pcie", "file://0001-socfpga_arria10_socdk-pcie-include-reference-design-.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "sgmii", "file://0001-socfpga_arria10_socdk-sgmii-include-reference-design.patch", "", d)} \
           ${@bb.utils.contains("IMAGE_TYPE", "tse", "file://0001-socfpga_arria10_socdk-tse-include-reference-design-d.patch", "", d)} \
           "
           
