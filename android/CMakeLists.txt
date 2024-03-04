cmake_minimum_required(VERSION 3.9.0)
project(Prisma)

set (PACKAGE_NAME "react-native-prisma")
set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 17)
set (BUILD_DIR ${CMAKE_SOURCE_DIR}/build)


add_library(
        ${PACKAGE_NAME}
        SHARED
    ../cpp/react-native-prisma.cpp
    ../cpp/macros.h
    ../cpp/QueryEngineHostObject.cpp
    ../cpp/QueryEngineHostObject.h
    ../cpp/react-native-prisma.h
    ../cpp/ThreadPool.cpp
    ../cpp/ThreadPool.h
    ../cpp/query_engine.h
    cpp-adapter.cpp
)

include_directories(
    ../cpp
)

set_target_properties(
  ${PACKAGE_NAME} PROPERTIES
  CXX_STANDARD 17
  CXX_EXTENSIONS OFF
  POSITION_INDEPENDENT_CODE ON
)

find_package(ReactAndroid REQUIRED CONFIG)
find_package(fbjni REQUIRED CONFIG)

add_library(query_engine STATIC IMPORTED)
set_target_properties(query_engine PROPERTIES IMPORTED_LOCATION ${CMAKE_CURRENT_SOURCE_DIR}/jniLibs/${ANDROID_ABI}/libquery_engine.a)

target_link_libraries(
  ${PACKAGE_NAME}
  # ${CMAKE_CURRENT_SOURCE_DIR}/jniLibs/${ANDROID_ABI}/libquery_engine.a
  query_engine
  fbjni::fbjni
  ReactAndroid::jsi
  ReactAndroid::turbomodulejsijni
  ReactAndroid::react_nativemodule_core
  android
)