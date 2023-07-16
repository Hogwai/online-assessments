# Find the Parity Outlier 

## Instructions
### Task
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 

The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 

Write a method that takes the array as an argument and returns this "outlier" N.

Specification
```
{
    "method": "find_outlier",
    "languages": {
        "kotlin": {
            "global": false,
            "method": "find"
        },
        "java": {
            "global": "FindOutlier",
            "method": "find"
        },
        "scala": {
            "global": "Parity"
        },
        "php": {
            "method": "find"
        }
    },
    "args": {
        "integers": {
            "type": "Array<Integer>"
        }
    },
    "returns": {
        "type": "Integer",
        "desc": "The only odd or even number"
    },
    "examples": [
        {
            "name": "Only odd number",
            "args": [[2, 4, 0, 4, 11, 2602, 36]],
            "returns": 11
        },
        {
            "name": "Only even number",
            "args": [[160, 3, 1719, 19, 13, -21]],
            "returns": 160
        }
    ]
}
```
