function reverseArray(arr) {
  if (Array.isArray(arr)) {
    return arr.slice().reverse();
  }
  return null;
}

console.log(reverseArray([5, 2, 6, 9]));
console.log(reverseArray(50));