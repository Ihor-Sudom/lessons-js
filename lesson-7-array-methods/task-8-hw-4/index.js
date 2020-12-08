function cloneArr(arr) {
  if (Array.isArray(arr)) {
    return arr.slice();
  }
  return null;
}

console.log(cloneArr([5, 6, 8, 10]));
console.log(cloneArr(20));