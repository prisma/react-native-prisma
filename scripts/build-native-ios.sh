#!/bin/sh
set -eu

root=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
cargo="$HOME/.cargo/bin/cargo"
rustup="$HOME/.cargo/bin/rustup"

"$rustup" target add aarch64-apple-ios aarch64-apple-ios-sim x86_64-apple-ios
"$cargo" build --release --manifest-path "$root/native/query-compiler/Cargo.toml" --target aarch64-apple-ios
"$cargo" build --release --manifest-path "$root/native/query-compiler/Cargo.toml" --target aarch64-apple-ios-sim
"$cargo" build --release --manifest-path "$root/native/query-compiler/Cargo.toml" --target x86_64-apple-ios
mkdir -p "$root/native/query-compiler/target/universal-ios-sim/release"
lipo -create \
  "$root/native/query-compiler/target/aarch64-apple-ios-sim/release/libprisma_query_compiler_native.a" \
  "$root/native/query-compiler/target/x86_64-apple-ios/release/libprisma_query_compiler_native.a" \
  -output "$root/native/query-compiler/target/universal-ios-sim/release/libprisma_query_compiler_native.a"
rm -rf "$root/native/PrismaQueryCompiler.xcframework"
xcodebuild -create-xcframework \
  -library "$root/native/query-compiler/target/aarch64-apple-ios/release/libprisma_query_compiler_native.a" -headers "$root/native/include" \
  -library "$root/native/query-compiler/target/universal-ios-sim/release/libprisma_query_compiler_native.a" -headers "$root/native/include" \
  -output "$root/native/PrismaQueryCompiler.xcframework"
