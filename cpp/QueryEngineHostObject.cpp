#include "QueryEngineHostObject.h"

namespace prisma {
namespace jsi = facebook::jsi;

QueryEngineHostObject::QueryEngineHostObject(
    std::string id, std::function<void(std::string)> log_callback) {
  this->id = id;
  this->log_callback = log_callback;
}

void QueryEngineHostObject::setEngine(QueryEngine *ptr) { this->engine = ptr; }

} // namespace prisma
