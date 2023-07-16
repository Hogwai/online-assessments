fun stringSuffix(s: String): Int {
    var similarities = 0

    for (i in 0 until s.length) {
        val suffix = s.substring(i)
        val similarity = calculateSimilarity(s, suffix)
        similarities += similarity
    }

    return similarities
}

fun calculateSimilarity(str1: String, str2: String): Int {
    var count = 0

    for (i in 0 until str1.length.coerceAtMost(str2.length)) {
        if (str1[i] == str2[i]) {
            count++
        } else {
            break
        }
    }

    return count
}