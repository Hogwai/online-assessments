int countChange(int money, List<int> coins) {
  Map<String, int?> memo = {};

  int helper(int amount, int index) {
    if (amount == 0) return 1;

    if (amount < 0 || index == coins.length) return 0;

    String key = "$amount-$index";

    if (memo.containsKey(key)) return memo[key]!;

    int includeCoin = helper(amount - coins[index], index);
    int skipCoin = helper(amount, index + 1);

    memo[key] = includeCoin + skipCoin;
    return memo[key]!;
  }

  return helper(money, 0);
}
