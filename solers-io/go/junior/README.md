# Merge Strings


## Instructions
### Task

Complete the function in your editor.

Your function must merge strings a and b, and then return a single merged string. A merge operation on two strings is described as follows:

- Append alternating characters from a and b, respectively, to some new string, mergedString.
- Once all of the characters in one of the strings have been merged, append the remaining characters in the other string to mergedString.

Specification
```
{
    "method": "merge_strings",
    "desc": "",
    "args": {
        "a": { 
            "type": "String", 
            "desc": "" 
        },
        "b": { 
            "type": "String", 
            "desc": "" 
        }
    },
    "returns": { 
        "type": "String", 
        "desc": "The _mergedString_" 
    },
    "constraints": [
        "`1 ≤ |a length|, |b length| ≤ 25000`"
    ],
    "examples": [
        {
            "args": 
            ["abc", "def"], 
            "returns": "adbecf" 
        },
        {
            "args": ["ab", "def"], 
            "returns": "adbef" 
        },
        {
            "args": ["abc", "de"], 
            "returns": "adbec" 
        }
    ]
}
```