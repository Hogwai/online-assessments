#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

char* accum(const char* s) {
    int length = strlen(s);
    char* result = (char*)malloc((2 * length) + length + 1);
    int resultIndex = 0;

    for (int i = 0; i < length; i++) {
        char currentChar = s[i];
        int repetitionCount = i + 1;

        result[resultIndex++] = toupper(currentChar);

        for (int j = 0; j < repetitionCount - 1; j++) {
            result[resultIndex++] = tolower(currentChar);
        }

        if (i < length - 1) {
            result[resultIndex++] = '-';
        }
    }

    result[resultIndex] = '\0';
    return result;
}
