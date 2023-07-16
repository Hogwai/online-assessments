using System;
using System.Collections.Generic;
using System.Linq;

public class Challenge
{
    public static string SortCsvColumns(string csvData)
    {
      var rows = csvData.Trim().Split('\n');
      var header = rows.First();
      var dataRows = rows.Skip(1).ToArray();

      var sortedHeader = header.Split(',').OrderBy(x => x.ToLower()).ToList();
      var sortedDataRows = dataRows.Select(row =>
      {
          var values = row.Split(',');
          var sortedValues = sortedHeader.Select(column =>
          {
              var columnIndex = header.Split(',').ToList().IndexOf(column);
              return values.ElementAtOrDefault(columnIndex) ?? "";
          });
          return string.Join(",", sortedValues);
      });

      return $"{string.Join(",", sortedHeader)}\n{string.Join("\n", sortedDataRows)}".Trim();
    }
}