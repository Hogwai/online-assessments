function sort_csv_columns(string $csv_data): string {
    $rows = explode("\n", trim($csv_data));
    $header = $rows[0];
    $dataRows = array_slice($rows, 1);

    $sortedHeader = array_map('trim', explode(",", $header));
    sort($sortedHeader, SORT_STRING | SORT_FLAG_CASE);
    $sortedDataRows = array_map(function ($row) use ($header, $sortedHeader) {
        $values = explode(",", $row);
        $sortedValues = array_map(function ($column) use ($header, $values) {
            $columnIndex = array_search($column, explode(",", $header));
            return isset($values[$columnIndex]) ? $values[$columnIndex] : "";
        }, $sortedHeader);
        return implode(",", $sortedValues);
    }, $dataRows);

    return implode(",", $sortedHeader) . "\n" . implode("\n", $sortedDataRows);
}