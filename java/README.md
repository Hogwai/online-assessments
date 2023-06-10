# Morse Code Possibilities 

Background

You've started work as a Morse code translator. Unfortunately some of the signals aren't as distinguishable as others and there are times where a . seems indistinguishable from -. 

In these cases you write down a ? so that you can figure out what all the posibilities of that letter for that word are later.
Task

Write a function possibilities which will take a string signals and return an array of possible characters that the Morse code signals could represent.

The signals parameter contains the Morse code signals that needs to be parsed. The may contain one or more unknown signals (?).

The returned array or list contains the possible letters for the given group of signals. These letters will always be ordered from how they appear on the chart, from left to right.

There will be no more than 3 characters within signals and 0 - 3 unknown signals may be given.
Examples

- possibilities(".")   -> ["E"]
- possibilities("-")   -> ["T"]
- possibilities("-.")  -> ["N"]
- possibilities("...") -> ["S"]
- possibilities("..-") -> ["U"]
- possibilities("?")   -> ["E", "T"]
- possibilities(".?")  -> ["I", "A"]
- possibilities("?-?") -> ["R", "W", "G", "O"]
