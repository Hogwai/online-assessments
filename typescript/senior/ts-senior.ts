function sortCsvColumns(csvData: string): string {
  const rows = csvData.trim().split('\n');
  const header = rows[0];
  const dataRows = rows.slice(1);

  const sortedHeader = header.split(',').sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  const sortedDataRows = dataRows.map((row) => {
    const values = row.split(',');
    const sortedValues = sortedHeader.map((column) => {
      const columnIndex = header.split(',').indexOf(column);
      return values[columnIndex] || '';
    });
    return sortedValues.join(',');
  });

  return `${sortedHeader.join(',')}
  ${sortedDataRows.join('\n')}`.trim();
}


export { sortCsvColumns };