import (
	"strings"
)

func SortCsvColumns(csvData string) string {
	rows := strings.Split(strings.TrimSpace(csvData), "\n")
	header := rows[0]
	dataRows := rows[1:]

	sortedHeader := strings.Split(header, ",")
	for i := 0; i < len(sortedHeader)-1; i++ {
		for j := i + 1; j < len(sortedHeader); j++ {
			if strings.ToLower(sortedHeader[j]) < strings.ToLower(sortedHeader[i]) {
				sortedHeader[i], sortedHeader[j] = sortedHeader[j], sortedHeader[i]
			}
		}
	}

	sortedDataRows := make([]string, len(dataRows))
	for i, row := range dataRows {
		values := strings.Split(row, ",")
		sortedValues := make([]string, len(sortedHeader))
		for j, column := range sortedHeader {
			columnIndex := getIndex(header, column)
			if columnIndex >= 0 && columnIndex < len(values) {
				sortedValues[j] = values[columnIndex]
			} else {
				sortedValues[j] = ""
			}
		}
		sortedDataRows[i] = strings.Join(sortedValues, ",")
	}

	result := strings.Join(sortedHeader, ",") + "\n" + strings.Join(sortedDataRows, "\n")
	return strings.TrimSpace(result)
}

func getIndex(header string, column string) int {
	columns := strings.Split(header, ",")
	for i, c := range columns {
		if c == column {
			return i
		}
	}
	return -1
}