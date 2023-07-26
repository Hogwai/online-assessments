String sortCsvColumns(String csvData) {
  List<String> rows = csvData.trim().split("\n");
  String header = rows.removeAt(0);
  List<String> dataRows = rows;

  List<String> sortedHeader = header
      .split(",")
      .map((column) => column.trim())
      .toList()
    ..sort((a, b) => a.toLowerCase().compareTo(b.toLowerCase()));

  List<String> sortedDataRows = dataRows.map((row) {
    List<String> values = row.split(",");
    List<String> sortedValues = sortedHeader.map((column) {
      int columnIndex = header.split(",").indexOf(column);
      return values[columnIndex]?.trim() ?? "";
    }).toList();
    return sortedValues.join(",");
  }).toList();

  return "${sortedHeader.join(",")}\n${sortedDataRows.join("\n")}".trim();
}
