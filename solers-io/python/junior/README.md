# Most Digits

## Instructions
### Task

Consider an array where each element in the array contains a positive integer digit. Taken as a whole, such an array represents a positive integer number. The rightmost position of the array represents the least siginificant digit of the number.

An example digit array is ```[4, 2]``` which represents the integer ```42```.

In this challenge, you will write a function to increment the number in the digit array by 1. For example, ```upArray([4, 2])``` will return the array ```[4, 3]```.

Here is the complete specification for upArray:
```
{
  "method": "up_array",
  "desc": "increases the digit array value by one",
  "args": {
    "arr": {
      "type": "Array<Integer>",
      "desc": "an array of integers to be increased."
    }
  },
  "returns" : {
    "type": "Array<Integer>",
    "desc": "an array with the new value."
  },
  "constraints": [
    "- Parameter array will not be empty",
    "- Array will only contain non-negative single digit integers",
    "- Array will not contain leading zeroes unless its length is exactly 1"
  ],
  "examples": [
    {
      "args": [[5, 7, 4]],
      "returns": [5, 7, 5]
    },
    {
      "args": [[4, 3, 9]],
      "returns": [4, 4, 0]
    },
    {
      "args": [[9]],
      "returns": [1, 0]
    }
  ]
}
```