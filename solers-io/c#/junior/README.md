# String Repeater with Pattern 

## Instructions

This challenge requires you to create a solution only based on the input and output to your function.

The examples below show you how to write function accum:

Examples:
|Input String| 	Output String|
|------------|---------------|
|"abcd"      |"A-Bb-Ccc-Dddd"|
|"RqaEzty"   |"R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"|
|"cwAt" 	 |"C-Ww-Aaa-Tttt"|

The parameter of accum is a string which includes only letters from a..z and A..Z.

Specification:
```
{
    "method": "accum",
    "desc": "",
    "args": {
        "s": {
            "type": "String", 
            "desc": "Text to be broken down and accumulated"
        }
    },
    "returns": {
        "type": "String", 
        "desc": "Resulting text separated by `-`"
    },
    "examples": [
        {
            "args": 
                ["ZpglnRxqenU"], 
                "returns":"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
        },
        {
            "args": 
                ["NyffsG"], 
                "returns": "N-Yy-Fff-Ffff-Sssss-Gggggg"
        }
    ]
}
```

