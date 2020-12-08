function increaseEvenEl(arr, delta) {
  if (Array.isArray(arr)){
    return arr.filter(item => item % 2 === 0).map(item => item + delta); 
  }
  return null;
}

console.log(increaseEvenEl([5, 2, 7, 6], 10));
console.log(increaseEvenEl(50, 10));