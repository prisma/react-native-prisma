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
    ../cpp/utils.h
    ../cpp/utils.cpp
    ../engines/android/query_engine.h
    cpp-adapter.cpp
)

include_directories(
    ../cpp
    ../engines/android
)

set_target_properties(
  ${PACKAGE_NAME} PROPERTIES
  CXX_STANDARD 17
  CXX_EXTENSIONS OFF
  POSITION_INDEPENDENT_CODE ON
)

find_package(ReactAndroid REQUIRED CONFIG)
find_package(fbjni REQUIRED CONFIG)

cmake_path(SET QUERY_ENGINE_LIB ${CMAKE_CURRENT_SOURCE_DIR}/../engines/android/jniLibs/${ANDROID_ABI}/libquery_engine.a NORMALIZE)

add_library(query_engine STATIC IMPORTED)
set_target_properties(query_engine PROPERTIES IMPORTED_LOCATION ${QUERY_ENGINE_LIB})

target_link_libraries(
  ${PACKAGE_NAME}
  query_engine
  fbjni::fbjni
  ReactAndroid::jsi
  ReactAndroid::turbomodulejsijni
  ReactAndroid::react_nativemodule_core
  android
)