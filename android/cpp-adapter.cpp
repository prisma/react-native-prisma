#include "react-native-prisma.h"
#include <ReactCommon/CallInvokerHolder.h>
#include <fbjni/fbjni.h>
#include <jni.h>
#include <jsi/jsi.h>
#include <typeinfo>

namespace jni = facebook::jni;
namespace react = facebook::react;
namespace jsi = facebook::jsi;

struct PrismaModule : jni::JavaClass<PrismaModule> {
  static constexpr auto kJavaDescriptor = "Lcom/prisma/PrismaModule;";

  static void registerNatives() {
    javaClassStatic()->registerNatives(
        {makeNativeMethod("installNativeJsi", PrismaModule::installNativeJsi)});
  }

private:
  static void installNativeJsi(
      jni::alias_ref<jni::JObject> thiz, jlong jsiRuntimePtr,
      jni::alias_ref<react::CallInvokerHolder::javaobject> jsCallInvokerHolder,
      jni::alias_ref<jni::JString> docPath,
      jni::alias_ref<jni::JString> migrationsPath) {
    auto jsiRuntime = reinterpret_cast<jsi::Runtime *>(jsiRuntimePtr);
    auto jsCallInvoker = jsCallInvokerHolder->cthis()->getCallInvoker();
    std::string docPathString = docPath->toStdString();
    std::string migrationsPathString = migrationsPath->toStdString();

    prisma::install_cxx(*jsiRuntime, jsCallInvoker, docPathString.c_str(),
                        migrationsPathString.c_str());
  }
};

JNIEXPORT jint JNI_OnLoad(JavaVM *vm, void *) {
  return jni::initialize(vm, [] { PrismaModule::registerNatives(); });
}