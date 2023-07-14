func StringSuffix(s string) int {
    similarities := 0

    for i := 0; i < len(s); i++ {
        suffix := s[i:]
        similarity := calculateSimilarity(s, suffix)
        similarities += similarity
    }
    return similarities
}

func calculateSimilarity(str1, str2 string) int {
    count := 0

    for i, c := range str1 {
        if i >= len(str2) || c != rune(str2[i]) {
            break
        }
        count++
    }
    return count
}