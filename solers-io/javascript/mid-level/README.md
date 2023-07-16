# String Suffixes


## Instructions
### Task

Given two strings, A and B, we'll define the similarity of the strings to be the length of the longest prefix common to both strings. For example, the similarity of strings abc and abd is 2, while the similarity of strings aaa and aaab is 3.

For this challenge you'll need to write a function that calculates the sum of similarities of a string with each of its suffixes.
Specification

```
{
    "method": "string_suffix",
    "desc": "Counts how many similarities there between a given word and all of its suffixes",
    "args": {
        "s": { 
            "type": "String", 
            "desc": "Initial word to check against suffixes"
        }
    },
    "returns": { 
        "type": "Integer", 
        "desc": "Number of matching letters from the word and its suffixes"
    }
}
```

#### Example

Let's take a look at the iterations for an example string ababaa:

ababaa
ababaa
111111  (6 similarities)

ababaa
babaa
00000 (0 similarities)

ababaa
abaa
1110 (3 similarities)

ababaa
baa
000 (0 similarity)

ababaa
aa 
10 (1 similarity)

ababaa
a 
1 (1 similarity)

The suffixes of the string are ababaa, babaa, abaa, baa, aa and a. The similarities of each of these strings with the string ababaa are 6, 0, 3, 0, 1, 1 respectively. Thus the answer is 6 + 0 + 3 + 0 + 1 + 1 = 11.
