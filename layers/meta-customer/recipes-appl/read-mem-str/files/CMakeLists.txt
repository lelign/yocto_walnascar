cmake_minimum_required(VERSION 2.8.11)
project(read_mem)

set(CMAKE_CXX_STANDARD 14)
set(CMAKE_INCLUDE_CURRENT_DIR ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} ${CMAKE_CURRENT_SOURCE_DIR}/cmake_modules)

IF(CMAKE_BUILD_TYPE STREQUAL "Debug")
        SET(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -Wall -O3")
        SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -O3")
        add_definitions(-DQT_NO_EXCEPTIONS)
ENDIF(CMAKE_BUILD_TYPE STREQUAL "Debug")

# 0 - PBX-MTV-508
# 1 - PN-MTV-581
set(BOARD_REV "0" CACHE STRING "Board rev")
add_definitions(-DBOARD_REV=${BOARD_REV})

find_package(Qt5 COMPONENTS Widgets REQUIRED)


include_directories(${Qt5Core_INCLUDE_DIRS})


SET (CMAKE_POSITION_INDEPENDENT_CODE ON)
SET (CMAKE_AUTORCC ON)



add_executable(read_mem
        read_mem/read_mem.cpp
)
target_link_libraries(read_mem Qt5::Widgets Qt5::Core)

INSTALL(PROGRAMS ${CMAKE_CURRENT_BINARY_DIR}/read_mem DESTINATION bin)

