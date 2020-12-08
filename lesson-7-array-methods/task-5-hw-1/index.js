function squareArray(arr) {
  if (Array.isArray(arr)) {
    return arr.map(item => item * item);
  }
    return null;
}

console.log(squareArray([5, 3, 4]));
console.log(squareArray(55));