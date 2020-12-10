
function getRandomNumbers(len, start, end) {
  if (Math.abs(end - start) > 1) {
    return randomNumbersOptions(len, start, end);
  }
 return null;
}

function randomNumbersOptions(len, start, end) {
  if (start > 0 && end > 0) {
    return Array(len).fill(Math.floor(start)).map(item => Math.floor(item + Math.random() * Math.floor(end - start)));
  }
    return Array(len).fill(Math.ceil(start)).map(item => Math.floor(item + Math.random() * Math.ceil(end - start)));
}

console.log(getRandomNumbers(6, 2, 8));