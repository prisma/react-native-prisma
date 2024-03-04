#ifdef __cplusplus
#import "react-native-prisma.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNPrismaSpec.h"

@interface Prisma : NSObject <NativePrismaSpec>
#else
#import <React/RCTBridgeModule.h>
#import <React/RCTInvalidating.h>

@interface Prisma : NSObject <RCTBridgeModule, RCTInvalidating>
#endif

@end
