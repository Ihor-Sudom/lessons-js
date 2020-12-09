
function getRandomNumbers(len, start, end) {
  if ((end - start) > 1) {
    if (start > 0 && end > 0) {
      return randomNumbersPlus(len, start, end);
    }
    return randomNumbersMinus(len, start, end);
  } else {
    return null;
  }
}

function randomNumbersPlus(len, start, end) {
  let arr = [];
  for (let i = 1; i <= len; i++) {
    arr.push(Math.floor(Math.floor(start) + Math.random() * Math.floor(end - start)));
  }
  return arr;
}

function randomNumbersMinus(len, start, end) {
  let arr = [];
  for (let i = 1; i <= len; i++) {
    arr.push(Math.floor(Math.ceil(start) + Math.random() * Math.ceil(end - start)));
  }
  return arr;
}


