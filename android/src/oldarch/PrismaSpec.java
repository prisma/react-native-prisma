package com.prisma;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Promise;

abstract class PrismaSpec extends ReactContextBaseJavaModule {
  PrismaSpec(ReactApplicationContext context) {
    super(context);
  }

  public abstract void install();
}
