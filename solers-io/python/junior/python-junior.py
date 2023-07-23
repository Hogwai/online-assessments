from typing import List

def up_array(numbers: List[int]) -> List[int]:
    carry = 1
    n = len(numbers)

    for i in range(n - 1, -1, -1):
        current_sum = numbers[i] + carry
        if current_sum < 10:
            numbers[i] = current_sum
            carry = 0
        else:
            numbers[i] = 0
            carry = 1 

    if carry == 1:
        numbers.insert(0, 1)

    return numbers