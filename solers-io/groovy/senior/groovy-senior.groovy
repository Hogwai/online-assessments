class Challenge {
  static String sortCsvColumns(String csvData) {
    List<String> rows = csvData.trim().split("\n")
    String header = rows.first()
    List<String> dataRows = rows.subList(1, rows.size())

    List<String> sortedHeader = header.split(",").sort { it.toLowerCase() }
    List<String> sortedDataRows = dataRows.collect { row ->
      List<String> values = row.split(",")
      List<String> sortedValues = sortedHeader.collect { column ->
        List<String> headerList = header.split(",")
        int columnIndex = headerList.indexOf(column)
        if (columnIndex >= 0 && columnIndex < values.size()) {
          values[columnIndex]
        } else {
          ""
        }
      }
      sortedValues.join(",")
    }

    return (sortedHeader.join(",") + "\n" + sortedDataRows.join("\n")).trim()
  }
}