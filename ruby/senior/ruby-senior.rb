def sort_csv_columns(csv_data)
    rows = csv_data.strip.split("\n")
    header = rows.shift
    data_rows = rows

    sorted_header = header.split(",").sort_by(&:downcase)

    sorted_data_rows = data_rows.map do |row|
        values = row.split(",")
        sorted_values = sorted_header.map do |column|
        column_index = header.split(",").index(column)
        values[column_index]&.clone || ""
        end
        sorted_values.join(",")
    end

    "#{sorted_header.join(",")}\n#{sorted_data_rows.join("\n")}".strip
end