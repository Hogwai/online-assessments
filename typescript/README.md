# Making Change 


## Instructions
### Task

Write a method make_change that will determine the minimum number of coins needed to make change for a given amount in American currency.

Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the symbols H, Q, D, N and P.

The argument passed in will be an integer representing the value in cents. The return value should be, depending on language, a hash/map/associative array/object/struct with the symbols as keys, and the numbers of coins as values. Coins that are not used should not be included in the hash. If the argument passed in is 0, then the method should return an empty hash.
Specification

```
{
    "method": "make_change",
    "desc": "a break down of coins to be exchanged",
    "args": {
        "amount": {
            "type": "Integer",
            "desc": "amount of change to be given"
        }
    },
    "returns": {
        "type": "Hash",
        "desc": "amount per coin"
    },
    "examples": [
        {
            "args": [
                43
            ],
            "returns": {
                "H": 0, "Q": 1, "D": 1, "N": 1, "P": 3}
            },
            {
                "args": [
                    91
                ],
                "returns": {
                    "H": 1,
                    "Q": 1,
                    "D": 1,
                    "N": 1,
                    "P": 1
                }
            }
    ]
}

```

