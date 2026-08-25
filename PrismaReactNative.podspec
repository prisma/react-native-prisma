require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name = "PrismaReactNative"
  s.version = package["version"]
  s.summary = package["description"]
  s.homepage = package["homepage"]
  s.license = package["license"]
  s.author = package["author"]
  s.source = { git: package["repository"]["url"] }
  s.platforms = { ios: "16.4" }
  s.static_framework = true
  s.dependency "ExpoModulesCore"
  s.source_files = "ios/**/*.{h,m,mm,swift}", "native/include/*.h"
  s.public_header_files = "native/include/*.h"
  s.vendored_frameworks = "native/PrismaQueryCompiler.xcframework"
end
