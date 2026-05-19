#include <iostream>
#include <cstdint>
#include <fcntl.h>
#include <unistd.h>
#include <sys/ioctl.h>
#include <cstdio>
#include <list>

// === Настройки драйвера ядра ===
#define STR_REG_READ        0 
// Определение ioctl-команды (макрос ядра Linux)
#define STRMEM_IOCTL_REG    _IOWR('m', 1, strmem_reg_data)


const char * fname = "/dev/str-mem";
// Структура обмена данными с драйвером /dev/str-mem
struct strmem_reg_data {
    uint32_t block;
    uint32_t address;
    uint32_t data;
    uint32_t rw;
};

// === Объявление класса ReadStrMem ===
class ReadStrMem {
public:
    // Перечисление блоков, соответствующее Device Tree
    enum RegBlock : uint32_t {
        REG_BEGINNING = 0, // Соответствует базе 0xFF200000
        REG_MIDDLE    = 1, // Соответствует базе 0xFF200200
        REG_END       = 2  // Соответствует базе 0xFF2003FF
    };

    ReadStrMem();
    ~ReadStrMem();

    // Инициализация (открытие файла устройства)
    bool initialize();
    
    // Функция чтения регистра from II
    uint32_t reg_read(uint32_t block, uint32_t addr);
    // Функция чтения регистра from VY (Vladimir Yakovlev)
    uint32_t reg_read_vy(uint32_t block, uint32_t addr);

private:
    static constexpr const char* DEVICE_NAME = "/dev/str-mem";
    int m_fd; // Дескриптор файла устройства
};

// === Реализация методов класса ReadStrMem ===
ReadStrMem::ReadStrMem() : m_fd(-1) {}

ReadStrMem::~ReadStrMem() {
    if (m_fd >= 0) {
        close(m_fd);
    }
}

bool ReadStrMem::initialize() {
    // Открываем устройство. Используем O_RDONLY, так как код выполняет только чтение
    m_fd = open(DEVICE_NAME, O_RDONLY);
    if (m_fd < 0) {
        perror("ReadStrMem: Не удалось открыть /dev/str-mem");
        return false;
    }
    return true;
}

uint32_t ReadStrMem::reg_read(uint32_t block, uint32_t addr) {
    if (m_fd < 0) {
        std::cerr << "ReadStrMem: Ошибка. Устройство не инициализировано." << std::endl;
        return 0;
    }

    strmem_reg_data reg_data;
    reg_data.block = block; 
    reg_data.address = addr * 4; // Перевод индекса регистра в байтовое смещение
    reg_data.data = 0;
    reg_data.rw = STR_REG_READ;

    // Системный вызов драйвера ядра
    if (ioctl(m_fd, STRMEM_IOCTL_REG, &reg_data) < 0) {
        perror("ReadStrMem: Ошибка ioctl при чтении регистра");
        return 0;
    }

    return reg_data.data;
}


uint32_t ReadStrMem::reg_read_vy(uint32_t block, uint32_t addr) {
    strmem_reg_data reg_data;
        int ret;
        int fd;

        reg_data.block = block;
        reg_data.address = addr*4;
        reg_data.data = 0;
        reg_data.rw = STR_REG_READ;

        fd = open(fname, O_RDONLY);
        if(fd<0){
                return 0;
        }
        ret = ioctl(fd, STRMEM_IOCTL_REG, &reg_data);
	if(ret<0){
	        printf("ioctl error\n");
	}
        close(fd);
        return reg_data.data;
}

// === Главная функция программы ===
int main() {
    ReadStrMem system_hardware;

    std::cout << "Попытка инициализации оборудования..." << std::endl;
    if (!system_hardware.initialize()) {
        std::cerr << "Критическая ошибка инициализации. Завершение работы." << std::endl;
        return -1;
    }

    std::cout << "Устройство /dev/str-mem успешно открыто." << std::endl << std::endl;


    // Пример 1: Чтение 0-го регистра из начального блока (Физический адрес: 0xFF200000)
    uint32_t reg;

    reg = system_hardware.reg_read(ReadStrMem::REG_BEGINNING, 0);
    std::cout << "[REG_BEGINNING] Регистр 00: 0x" << std::hex << reg 
              << " (DEC: " << std::dec << reg << ")" << std::endl;

    reg = system_hardware.reg_read_vy(ReadStrMem::REG_BEGINNING, 0);
    std::cout << "VY [REG_BEGINNING] Регистр 00: 0x" << std::hex << reg 
              << " (DEC: " << std::dec << reg << ")" << std::endl;

    // Пример 2: Чтение 4-го регистра из начального блока (Физический адрес: 0xFF200000 + 4*4 = 0xFF200010)
    reg = system_hardware.reg_read(ReadStrMem::REG_BEGINNING, 4);
    std::cout << "[REG_BEGINNING] Регистр 04: 0x" << std::hex << reg 
              << " (DEC: " << std::dec << reg << ")" << std::endl;

    reg = system_hardware.reg_read_vy(ReadStrMem::REG_BEGINNING, 4);
    std::cout << "VY [REG_BEGINNING] Регистр 00: 0x" << std::hex << reg 
              << " (DEC: " << std::dec << reg << ")" << std::endl;

    // Пример 3: Чтение 2-го регистра из среднего блока (Физический адрес: 0xFF200200 + 2*4 = 0xFF200208)
    reg = system_hardware.reg_read(ReadStrMem::REG_MIDDLE, 0);
    std::cout << "[REG_MIDDLE]    Регистр 02: 0x" << std::hex << reg 
              << " (DEC: " << std::dec << reg << ")" << std::endl;

    reg = system_hardware.reg_read_vy(ReadStrMem::REG_MIDDLE, 0);
    std::cout << "VY [REG_BEGINNING] Регистр 00: 0x" << std::hex << reg 
              << " (DEC: " << std::dec << reg << ")" << std::endl;

    reg = system_hardware.reg_read(ReadStrMem::REG_MIDDLE, 4);
    std::cout << "[REG_BEGINNING] Регистр 00: 0x" << std::hex << reg 
              << " (DEC: " << std::dec << reg << ")" << std::endl;

    reg = system_hardware.reg_read_vy(ReadStrMem::REG_MIDDLE, 4);
    std::cout << "VY [REG_BEGINNING] Регистр 00: 0x" << std::hex << reg 
              << " (DEC: " << std::dec << reg << ")" << std::endl;

    // Пример 4: Чтение 0-го регистра из финального блока (Физический адрес: 0xFF2003FF)
    reg = system_hardware.reg_read(ReadStrMem::REG_END, 0);
    std::cout << "[REG_END]       Регистр 00: 0x" << std::hex << reg 
              << " (DEC: " << std::dec << reg << ")" << std::endl;

    reg = system_hardware.reg_read_vy(ReadStrMem::REG_END, 0);
    std::cout << "VY [REG_BEGINNING] Регистр 00: 0x" << std::hex << reg 
              << " (DEC: " << std::dec << reg << ")" << std::endl;


    // Пример 5: Чтение 4-го регистра из финального блока (Физический адрес: 0xFF2003FF)
    reg = system_hardware.reg_read(ReadStrMem::REG_END, 4);
    std::cout << "[REG_END]       Регистр 00: 0x" << std::hex << reg 
              << " (DEC: " << std::dec << reg << ")" << std::endl;

    reg = system_hardware.reg_read_vy(ReadStrMem::REG_END, 4);
    std::cout << "VY [REG_BEGINNING] Регистр 00: 0x" << std::hex << reg 
              << " (DEC: " << std::dec << reg << ")" << std::endl;

    return 0;
}
