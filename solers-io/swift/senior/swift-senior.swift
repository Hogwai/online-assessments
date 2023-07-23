func sortCsvColumns(_ csvData: String) -> String {
    var rows = csvData.trimmingCharacters(in: .whitespacesAndNewlines).components(separatedBy: "\n")
    let header = rows.removeFirst()
    var dataRows = rows

    var sortedHeader = header.components(separatedBy: ",").sorted(by: { $0.lowercased() < $1.lowercased() })
    var sortedDataRows = dataRows.map { row -> String in
        var values = row.components(separatedBy: ",")
        var sortedValues = sortedHeader.map { column -> String in
            let columnIndex = header.components(separatedBy: ",").firstIndex(of: column) ?? -1
            return values.indices.contains(columnIndex) ? values[columnIndex] : ""
        }
        return sortedValues.joined(separator: ",")
    }

    return (sortedHeader.joined(separator: ",") + "\n" + sortedDataRows.joined(separator: "\n")).trimmingCharacters(in: .whitespacesAndNewlines)
}
