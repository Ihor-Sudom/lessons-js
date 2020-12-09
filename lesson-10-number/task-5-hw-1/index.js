
function getTotalPrice(arr) {
  return '$' + Math.trunc(arr.reduce((a, b) => a + b) * 100) / 100;
}
