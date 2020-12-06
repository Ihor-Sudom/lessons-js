function reverseArray (arr) {
  if (Array.isArray(arr)) {
      return arr.slice().reverse();
  }
  return null;
}