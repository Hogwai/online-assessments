# Counting Change Combinations 

## Instructions

### Task

Write a function that counts how many different ways you can make change for an amount of money given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

```1+1+1+1, 1+1+2, 2+2.```

The order of coins does not matter:

```1+1+2 == 2+1+1```

Also, assume that you have an infinite amount of coins.

Your function should take an amount to change and an array of unique denominations for the coins.

Specification
```
{
    "method": "count_change",
    "desc": "",
    "args": {
        "money": { "type": "Integer", "desc": "Number to make change for " },
        "coins": { "type": "Array<Integer>", "desc": "Array of denominations" }
    },
    "returns": { "type": "Integer", "desc": "Number of ways change can be made" },
    "examples": [
        {"args": [4, [1,2]], "returns": 3},
        {"args": [10, [5,2,3]], "returns": 4},
        {"args": [11, [5,7]], "returns": 0}
    ]
}
```

