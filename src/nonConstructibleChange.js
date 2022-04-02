function nonConstructibleChange(coins) {
  // Write your code here.
  let current = 0;

  coins.sort((a, b) => {
    return a - b;
  });

  coins.forEach(function (coin) {
    if (coin > current + 1) return current + 1;

    current += coin;
  });

  return current + 1;
}
