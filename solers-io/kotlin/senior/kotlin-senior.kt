fun sortCsvColumns(csvData: String): String {
    val rows = csvData.trim().split("\n")
    val header = rows.first()
    val dataRows = rows.subList(1, rows.size)

    val sortedHeader = header.split(",").sortedBy { it.toLowerCase() }
    val sortedDataRows = dataRows.map { row ->
        val values = row.split(",")
        val sortedValues = sortedHeader.map { column ->
            val columnIndex = header.split(",").indexOf(column)
            values.getOrElse(columnIndex) { "" }
        }
        sortedValues.joinToString(",")
    }

    return (sortedHeader.joinToString(",") + "\n" + sortedDataRows.joinToString("\n")).trim()
}
