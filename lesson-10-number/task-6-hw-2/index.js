
function getRandomNumbers(len, start, end) {
  if (Math.abs(end - start) > 1) {
    return randomNumbersOptions(len, start, end);
  }
 return null;
}

function randomNumbersOptions(len, start, end) {
  if (start > 0 && end > 0) {
    return Array.from({ length: len }, (a, b) => Math.floor(Math.floor(start) + Math.random() * Math.floor(end - start)));
  }
    return Array.from({ length: len }, (a, b) => Math.floor(Math.ceil(start) + Math.random() * Math.ceil(end - start)));
}

