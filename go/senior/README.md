# Sort CSV Columns

## Instructions
### Task

In this challenge, your task is to sort the columns of a CSV file. The contents of the CSV will be provided to you as a string adhering to the description below.

- The columns are separated by commas (,)
- The rows are separated by a newline (\n)
- The first line contains the names of the columns
- A blank space counts as an empty string
- Treat every value as a string
- The CSV has a dyamic number of rows and columns

Write a method that sorts the columns by the names of the columns alphabetically, and case-insensitive.

#### Specification
```
{
    "method": "sort_csv_columns",
    "desc": "Takes comma separated values and sorts it alphabetically",
    "args": {
        "csv_data": {
            "type": "String", 
            "desc": "Unsorted CSV"
        }
    },
    "returns": {
        "type": "String", 
        "desc": "Sorted CSV"
    }
}
```

#### Example Input

##### Raw Input:
```
Beth,Charles,Danielle,Adam,Eric\n
17945,10091,10088,3907,10132\n
2,12,13,48,11
```

As a Table:
|Beth|Charles|Danielle|Adam|Eric|
|----|-------|--------|----|----|
|17945|10091|10088 |3907|10132|
|2 |12|	13|48|11|

#### Example Output

##### Raw output:
```
Adam,Beth,Charles,Danielle,Eric\n
3907,17945,10091,10088,10132\n
48,2,12,13,11
```

As a Table:
|Adam 	|Beth 	|Charles 	|Danielle 	|Eric|
|----|-------|--------|----|----|
3907 |	17945 |	10091 |	10088 |	10132|
48 |	2| 	12 |	13 |	11|
