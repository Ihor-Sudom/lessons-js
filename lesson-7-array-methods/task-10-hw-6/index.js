function sum(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((a, b) => a + b);
  }
  return null;
}

console.log(sum([5, 2, 10, 3]));
console.log(sum(6));
