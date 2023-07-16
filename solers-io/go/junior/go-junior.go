func MergeStrings(a string, b string) string {
	mergedString := ""
	lenA, lenB := len(a), len(b)
	minLen := lenA
	if lenB < minLen {
		minLen = lenB
	}

	for i := 0; i < minLen; i++ {
		mergedString += string(a[i]) + string(b[i])
	}

	if lenA > lenB {
		mergedString += a[minLen:]
	} else if lenB > lenA {
		mergedString += b[minLen:]
	}

	return mergedString
}