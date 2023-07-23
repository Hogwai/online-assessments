# Find Variable Assignments 

## Instructions
### Task

A common gotcha in Python is to create a bug by overwriting a builtin function. Consider the following program:
```
>>> list("abc")
['a', 'b', 'c']
>>> list = 42
>>> list("xyz")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'int' object is not callable
```
What happened? The builtin function list which converts an iterable into a list was overwritten with the integer value 42. 

Upon trying to call it again, the program crashes because 42("xyz") is invalid.

This can (less commonly) occur with class names and function definitions, which are first-class variables. For example:
```
>>> next(iter("abc"))
'a'
>>> def next(): pass
...
>>> next(iter("abc"))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: next() takes 0 positional arguments but 1 was given
```
Your job is to write a static analysis function, ```def find_variable_assignments(source, target_var_names)``` that can detect such blunders in a source code string of syntactically valid Python.

We'd like to generalize the function to accept a parameter list of names we're interested in searching for (target_var_names) and return a list of any names from this list that had assignments to them anywhere in the code. 

Ignore any assignments to variables not in this list and only report each result variable once. Result ordering doesn't matter.

As a simplifying assumption, your analysis can generate false positives for potentially complex but safe code like:
```
foo = next
next = foo
```
which overwrites a builtin function with itself and causes no ill effects. In other words, your analysis is only concerned with the names of the variables on the left side of each assignment expression.

Here's the function definition:
```
{
  "method": "find_variable_assignments",
  "args": {
    "source": {
      "type": "string",
      "desc": "a string containing a chunk of valid Python source code to perform analysis on."
    },
    "target_var_names": {
      "type": "List<string>",
      "desc": "a list of variable names to search the source string for assignments to."
    }
  },
  "returns": {
    "type": "List<string>",
    "desc": "a filtered list of `target_var_names` that had asssignments to them somewhere in the `source` string."
  }
}
```