# Valid Braces 

## Instructions
Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.

All input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.

What is considered Valid?

A string of braces is considered valid if all braces are matched with the correct brace. For example:

'(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.
Specification

```
{
    "method": "valid_braces",
    "desc": "Checks if the brace order is valid",
    "args": {
        "braces": {
            "type": "String", 
            "desc": "A string representation of an order of braces"
        }  
    },
    "returns": {
        "type": "Boolean", 
        "desc": "Returns `true` if order of braces are valid"
    }
}
```

Examples:
|Input  |	Output 	|
|-------|-----------|
|validBraces( "(){}[]" ) |	true |	
|validBraces( "(}" ) |	false 	|
|validBraces( "[(])" ) |	false 	|
|validBraces( "([{}])" ) |	true|