
function getSpecialNumbers(arr) {
  return arr.filter(item => item % 3 === 0);
}

console.log(getSpecialNumbers([5, 2, 6, 9, 10]));