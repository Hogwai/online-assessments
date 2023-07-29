#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int helper(int amount, unsigned int index, const int* coins, unsigned int coins_length, int** memo) {
    if (amount == 0) return 1;
    if (amount < 0 || index == coins_length) return 0;

    if (memo[amount][index] != -1) {
        return memo[amount][index];
    }

    int includeCoin = helper(amount - coins[index], index, coins, coins_length, memo);
    int skipCoin = helper(amount, index + 1, coins, coins_length, memo);

    memo[amount][index] = includeCoin + skipCoin;
    return memo[amount][index];
}

int count_change(int money, const unsigned int coins_length, const int* coins) {
    int** memo = (int**)malloc((money + 1) * sizeof(int*));
    for (int i = 0; i <= money; i++) {
        memo[i] = (int*)malloc(coins_length * sizeof(int));
        for (int j = 0; j < coins_length; j++) {
            memo[i][j] = -1;
        }
    }

    int result = helper(money, 0, coins, coins_length, memo);

    for (int i = 0; i <= money; i++) {
        free(memo[i]);
    }
    free(memo);

    return result;
}