# Debug function


## Instructions
### Task

In this challenge, your task is to debug a provided non-working function interleave_values($arr, $key) which should interleave elements of a two-dimensional associative array based on values for a specific target key in the inner arrays.

For example, consider the following array:

```
$data = [
    ["k" => 1],
    ["k" => 3],
    ["k" => 2],
    ["k" => 1],
    ["k" => 3],
    ["k" => 3],
];
```

The output of interleave_values($data, "k") should be
```
[
    ["k" => 3],
    ["k" => 1],
    ["k" => 2],
    ["k" => 3],
    ["k" => 1],
    ["k" => 3],
]
```

The result shows an arrangement where the three possible values for "k" were gathered into groups, sorted by frequency ([3 => 3, 1 => 2, 2 => 1] in value-frequency pairs), then interleaved in a round-robin fashion until all elements were consumed.

While priority ordering in the top example is unambiguous, you can receive input in which values are of equal frequencies:
```
$data = [
    ["id" => 1, "qty" => 22],
    ["id" => 2, "qty" => 33],
    ["id" => 3, "qty" => 11],
    ["id" => 4, "qty" => 11],
    ["id" => 5, "qty" => 33],
];
```

The output of interleave_values($data, "qty") should be
```
[
    ["id" => 1, "qty" => 22],
    ["id" => 2, "qty" => 33],
    ["id" => 3, "qty" => 11],
    ["id" => 4, "qty" => 11],
    ["id" => 5, "qty" => 33],
]
```


In this case, we apply the same logic as above, but a tie-break is necessary to determine the ordering between elements with "qty" values 11 and 33 since both have an equal number of occurrences ([33 => 2, 11 => 2, 22 => 1]). The algorithm prioritizes 33 because its first occurrence precedes the first occurrence of 11 in the array.

Secondarily, note that there is an additional key in the inner arrays. As above, arrays that are identical in value for "key" are sorted according to index location in the original array. ["id" => 3, "qty" => 1] appears before ["id" => 4, "qty" => 1], so it must remain so in the final result.
Notes

The input array may be empty.

You can assume $key exists on each inner array and that $key is a nonempty string of printable ASCII characters or an integer.

The length of the input array $arr will not exceed 5000.