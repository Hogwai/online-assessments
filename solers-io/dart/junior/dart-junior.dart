String accum(String s) {
  StringBuffer result = StringBuffer();

  for (int i = 0; i < s.length; i++) {
    String currentChar = s[i];
    int repetitionCount = i + 1;

    result.write(currentChar.toUpperCase());

    for (int j = 0; j < repetitionCount - 1; j++) {
      result.write(currentChar.toLowerCase());
    }

    if (i < s.length - 1) {
      result.write("-");
    }
  }

  return result.toString();
}
