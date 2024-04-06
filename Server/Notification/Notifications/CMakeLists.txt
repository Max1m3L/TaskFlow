cmake_minimum_required(VERSION 3.27)
project(Notifications)

set(CMAKE_CXX_STANDARD 23)

find_package(CURL REQUIRED)
include_directories(${CURL_INCLUDE_DIR})

add_executable(Notifications main.cpp
        headers/DataBase.h
        headers/Time.h
        headers/Message.h)

target_link_libraries(Notifications ${CURL_LIBRARIES} sqlite3)