#ifndef PRISMA_H
#define PRISMA_H

#include <ReactCommon/CallInvoker.h>
#include <jsi/jsi.h>

namespace prisma {

namespace jsi = facebook::jsi;
namespace react = facebook::react;

void install_cxx(jsi::Runtime &rt,
                 std::shared_ptr<react::CallInvoker> jsCallInvoker,
                 const char *basePathStr, const char *migrations_path);
void invalidate();
} // namespace prisma

#endif /* PRISMA_H */
