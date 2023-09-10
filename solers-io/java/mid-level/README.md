# OOP: Modified TallyCounter Results

## Instructions
We're going to change gears here and start having you to write more code from scratch.

The drill contains just the documentation for the public methods required to pass the tests - you have to do the rest.

The name of your class should be TallyCounter.

If you decide to make any helper methods, they should be private and non-static.
Testing Notes

```getTally_returns0_when_newTallyCounter```

The tally on a brand new tally counter is 0.

```getTally_returns1_when_newTallyCounter_isPressedOnce```

If we take a tally counter and push the button once, then the tally should be 1.

```getTally_returns12_when_newTallyCounter_isPressedTwelveTimes```

If we take a tally counter and push the button twelve times, then the tally should be 12.

```getTally_returns0_when_newTallyCounter_isPressedTwelveTimes_andThen_reset```

If we take a tally counter and push the button twelve times, and then reset it, then the tally should be 0.

```toString_returnsCorrectBars_when_newTallyCounter```

If we take a brand new tally counter then the toString should return an empty string.

```toString_returnsCorrectBars_when_newTallyCounter_isPressedTwoTimes```

If we take a tally counter and push the button two times, then the toString should return: ||

```toString_returnsCorrectBars_when_newTallyCounter_isPressedFiveTimes```

If we take a tally counter and push the button five times, then the toString should return: |||||

```toString_returnsCorrectBars_when_newTallyCounter_isPressedTwelveTimes```

If we take a tally counter and push the button twelve times, then the toString should return: |||| |||| ||
