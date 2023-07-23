BOOL validBraces( NSString* braces ) {
    NSMutableArray *stack = [NSMutableArray array];
    NSArray *openingBraces = @[@"(", @"[", @"{"];
    NSArray *closingBraces = @[@")", @"]", @"}"];
    NSDictionary *bracePairs = @{
                                 @")" : @"(",
                                 @"]" : @"[",
                                 @"}" : @"{"
                                 };

    for (NSUInteger i = 0; i < braces.length; i++) {
        NSString *brace = [braces substringWithRange:NSMakeRange(i, 1)];
        
        if ([openingBraces containsObject:brace]) {
            [stack addObject:brace];
        } else if ([closingBraces containsObject:brace]) {
            if (stack.count == 0 || ![stack.lastObject isEqualToString:bracePairs[brace]]) {
                return NO;
            }
            [stack removeLastObject];
        }
    }

    return stack.count == 0;
}