const makeChange = (amount: number): {[key: string]: number} => {
  const coins: {[key: string]: number} = { H: 50, Q: 25, D: 10, N: 5, P: 1 };
  const change: {[key: string]: number} = {};

  if (amount === 0) {
    return change;
  }

  for (const coin in coins) {
    const coinValue = coins[coin];
    const coinCount = Math.floor(amount / coinValue);

    if (coinCount > 0) {
      change[coin] = coinCount;
      amount -= coinCount * coinValue;
    }
  }

  return change;
};

export {makeChange};
