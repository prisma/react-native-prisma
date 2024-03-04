#import "Prisma.h"
#import <jsi/jsi.h>
#import <React/RCTBridge+Private.h>
#import <ReactCommon/RCTTurboModule.h>
#import <iostream>

@implementation Prisma

@synthesize bridge=_bridge;

RCT_EXPORT_MODULE()

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(install)
{
    RCTCxxBridge *cxxBridge = (RCTCxxBridge *)_bridge;
    if (cxxBridge == nil) {
        return @false;
    }
    
    auto jsiRuntime = (facebook::jsi::Runtime *)cxxBridge.runtime;
    if (jsiRuntime == nil) {
        return @false;
    }
    auto &runtime = *jsiRuntime;
    auto callInvoker = _bridge.jsCallInvoker;
    
    // get migrations folder
    auto bundleURL = NSBundle.mainBundle.bundleURL;
    auto migrations_path_absolute = [NSString stringWithFormat:@"%@%@", bundleURL.absoluteString, @"migrations"];
    auto migrations_path = [migrations_path_absolute stringByReplacingOccurrencesOfString:@"file://" withString:@""];
   
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSLibraryDirectory, NSUserDomainMask, true);
    NSString *libraryPath = [paths objectAtIndex:0];
    
#if DEBUG
    std::cout << "▲ NSHomeDirectory:\n" << [NSHomeDirectory() UTF8String] << std::endl;
    std::cout << "▲ Library Path:\n" << [libraryPath UTF8String] << std::endl;
    std::cout << "▲ Migrations Path:\n" << [migrations_path UTF8String] << std::endl;
#endif
    
    prisma::install_cxx(runtime, callInvoker, [libraryPath UTF8String], [migrations_path UTF8String]);
    return nil;
}

#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativePrismaSpecJSI>(params);
}
#endif

- (void)invalidate {
        prisma::invalidate();
}

@end
