function arrAverage(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((a, b) => a + b) / arr.length;
  }
}

console.log(arrAverage([2, 8, 11]));