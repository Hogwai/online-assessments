pub fn sort_csv_columns(csv_data: &str) -> String {
    let mut rows: Vec<&str> = csv_data.trim().split('\n').collect();
    let header = rows.remove(0);
    let data_rows = rows;

    let mut sorted_header: Vec<&str> = header.split(',').collect();
    sorted_header.sort_by(|a, b| a.to_lowercase().cmp(&b.to_lowercase()));

    let sorted_data_rows: Vec<String> = data_rows.iter().map(|&row| {
        let values: Vec<&str> = row.split(',').collect();
        let sorted_values: Vec<&str> = sorted_header.iter().map(|&column| {
            let column_index = header.split(',').position(|c| c == column).unwrap();
            values.get(column_index).cloned().unwrap_or("")
        }).collect();
        sorted_values.join(",")
    }).collect();

    format!("{}\n{}", sorted_header.join(","), sorted_data_rows.join("\n")).trim().to_string()
}