# Roman Numerals Decoder

## Instructions
### Task

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. 

You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. 

So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). 

The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:
|Input|Output|
|-----|------|
|"XXI"| 	21|
|"M" |	1000|
|"MCMXC" |	1990|
|"MMVIII" |	2008|
|"MDCLXVI" |	1666|

#### Specification
```
{
  "method": "decode",
  "desc": "Converts a Roman Numeral into a numeric decimal integer",
  "args": {
    "roman": {"type": "String", "desc": "Roman Numberal to be converted"}
  },
  "returns": {"type": "Integer", "desc": "Evaluated decimal number"},
  "examples": [
    {"args": ["XXI"], "returns": 21},
    {"args": ["MDCLXVI"], "returns": 1666},
    {"args": ["MMVIII"], "returns": 2008}
  ]
}
```

