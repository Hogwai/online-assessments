# Ruby Age Counting

## Instructions
In the Ruby file, write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/age-counting which contains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER. 

Your goal is to count how many items exist that have an age equal to or greater than 50, and print this final value.

Example Input
```
{
    "data":"key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47"
}
```
Example Output
2

Once your function is working, take the final output string and concatenate it with your ChallengeToken, and then replace every third character with an X.

Your ChallengeToken: cf712g3yd8e