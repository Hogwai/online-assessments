#  SQL: EXISTS Results

## Instructions
### Task

For this challenge you need to create a SELECT statement, this SELECT statement will use an EXISTS to check whether a department has had a sale with a price over 98.00 dollars.

Table Schema
```
{
    "table": "departments",
    "desc": "A list of departments and its ID's",
    "columns": {
    "id": "INT",
    "name": "VARCHAR(100)"
}
```
```
{
    "table": "sales",
    "desc": "Properties of a sale",
    "columns": {
    "id": "INT",
    "department_id": "INT",
    "name": "VARCHAR(100)",
    "price": "DECIMAL",
    "card_name": "VARCHAR(100)",
    "card_number": "VARCHAR(100)",
    "transaction_date": "DATE()"
}
```

Query Schema
```
{
    "table": "Resulting query",
    "desc": "A table of departments that have sales greater than $98.",
    "columns": {
    "id": "INT",
    "name": "VARCHAR(100)"
}
```
