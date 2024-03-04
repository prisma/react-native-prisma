package com.prisma;

import com.facebook.react.bridge.ReactApplicationContext;

abstract class PrismaSpec extends NativePrismaSpec {
  PrismaSpec(ReactApplicationContext context) {
    super(context);
  }
}
