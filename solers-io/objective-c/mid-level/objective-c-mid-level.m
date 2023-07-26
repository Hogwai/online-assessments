#import <Foundation/Foundation.h>

NSInteger calculateSimilarity(NSString *str1, NSString *str2) {
    NSInteger count = 0;
    NSInteger maxLength = MIN(str1.length, str2.length);

    for (NSInteger i = 0; i < maxLength; i++) {
        if ([str1 characterAtIndex:i] == [str2 characterAtIndex:i]) {
            count++;
        } else {
            break;
        }
    }

    return count;
}

NSNumber *stringSuffix(NSString *str) {
    NSInteger similarities = 0;

    for (NSInteger i = 0; i < str.length; i++) {
        NSString *suffix = [str substringFromIndex:i];
        NSInteger similarity = calculateSimilarity(str, suffix);
        similarities += similarity;
    }

    return @(similarities);
}