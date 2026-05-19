cmake_minimum_required(VERSION 3.10)

# Имя вашего проекта
project(StrMemReader VERSION 1.0.0 LANGUAGES CXX)

# Требуемый стандарт C++ (для constexpr и типизированных enum нужен минимум C++11)
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# Добавляем флаги компилятора для безопасности и оптимизации (-O2)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Wextra -O2")

# Определение исполняемого файла (замените main.cpp на ваши файлы, если они разделены)
add_executable(read_str_mem main.cpp)

# Пример настройки кросс-компиляции (раскомментируйте и укажите свой путь, если собираете для ARM на ПК)
# set(CMAKE_C_COMPILER /usr/bin/arm-linux-gnueabihf-gcc)
# set(CMAKE_CXX_COMPILER /usr/bin/arm-linux-gnueabihf-g++)
