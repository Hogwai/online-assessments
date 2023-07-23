# Most Digits

## Instructions
### Task

Given an array numbers, find the number with the most digits.
A digit is any character from 0 through 9.

If two numbers in the argument array have the same number of digits, return the first one in the array.

#### Specification
```
{
    "method": "most_digits",
    "args": {
        "numbers": { 
            "type": "Array<Integer>", 
            "desc": "The array of numbers to look through" 
        }
    },
    "returns": { 
        "type": "Integer", 
        "desc": "The value from the array with the most digits" 
    },
    "constraints": [
        "`numbers` will always be a valid array of integers",
        "`numbers` will always contain at least one value"
    ],
    "examples": [
        {
            "args": [[1, 10, 100]], 
            "returns": 100 
        },
        {
            "args": [[8, 400, 600]], 
            "returns": 400 
        }
    ]
}
```