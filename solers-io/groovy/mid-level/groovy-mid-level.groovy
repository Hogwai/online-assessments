class Challenge {
  static int stringSuffix(String s) {
    def similarities = 0

    (0..s.length() - 1).each { i ->
      def suffix = s[i..-1]
      def similarity = calculateSimilarity(s, suffix)
      similarities += similarity
    }

    return similarities
  }

  static int calculateSimilarity(String str1, String str2) {
    def count = 0

    for (int i = 0; i < Math.min(str1.length(), str2.length()); i++) {
      if (str1[i] == str2[i]) {
        count += 1
      } else {
        break
      }
    }

    return count
  }
}
