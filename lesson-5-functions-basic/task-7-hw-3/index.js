function compareSums(a, b, c, d) {
  let sum1 = sum(a, b);
  let sum2 = sum(c, d);
  return sum1 > sum2 ? true : false;
}

function sum (from, to) {
  let sums = 0;
  for (let i=from; i <= to; i++) {
      sums += i;
  }
  return sums;
}