
function getRandomNumbers(len, start, end) {
  if (Math.abs(end - start) > 1) {
    return Array(len).fill(1).map(() => start > 0 && end > 0
                                      ? Math.floor(Math.random() * (end - start)) + start
                                      : Math.ceil(Math.random() * (end - start)) + start);
  }
 return null;
}


