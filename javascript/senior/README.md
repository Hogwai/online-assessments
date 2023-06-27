# Default Arguments


## Instructions
### Task

Write a function defaultArguments. 

It takes a function as an argument, along with an object containing default values for that function's arguments, and returns another function which defaults to the correct values.

You cannot assume that the function's arguments have any particular names.

You should be able to call defaultArguments repeatedly to change the defaults.

```
{
    "method": "default_arguments",
    "desc": "Takes a function and object as arguments with default object values and returns another function",
    "args": {
        "func": {
            "type": "Function", 
            "desc": "A method with default values"
        },
        "params": {
            "type": "hash", 
            "desc": "An object containing values to be tested against func"
        }
    },
    "returns": {
        "type": "Function",
        "desc": "A function which defaults to the correct values"
    }
}
```

```
function add(a,b) { return a+b;};

var add_ = defaultArguments(add,{b:9});
add_(10); // returns 19
add_(10,7); // returns 17
add_(); // returns NaN

add_ = defaultArguments(add_,{b:3, a:2});
add_(10); // returns 13 now
add_(); // returns 5

add_ = defaultArguments(add_,{c:3}); // doesn't do anything, since c isn't an argument
add_(10); // returns NaN
add_(10,10); // returns 20
```
Hint: This problem requires using Function.prototype.toString() in order to extract a function's argument list.
