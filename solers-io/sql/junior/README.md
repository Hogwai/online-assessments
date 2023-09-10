# SQL: GROUP BY Day 

## Instructions
### Task

There is an ```events``` table used to track different key activities taken on a website. For this task you need to filter the ```name``` field to only show "trained" events. Events should be grouped by the day they happened and counted. The ```description``` field is used to distinguish which items the events happened on.

Along with the results, a time series chart will also be provided which will consume the data and be used to visualize the data. Create your query to be ready to be consumed by the chart, such as ensuring the dates are in order.

Table Schema
```
{
    "table": "events",
    "desc": "A table of events and the details of each event.",
    "columns": {
    "id": "INT",
    "name": "STRING",
    "created_at": "DateTime",
    "description": "String"
}
```

Query Schema
```
{
    "table": "Resulting query",
    "desc": "A list of events ordered by their date with a count",
    "columns": {
    "day": "Date",
    "description": "String",
    "count": "INT"
}
```

The expected results is provided so that you can see what the expected output is supposed to look like. Your "actual" output needs to match the expected output.