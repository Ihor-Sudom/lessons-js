
export const asyncSum = (...asyncNumbers) => {
  return new Promise.all(asyncNumbers)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error('Can\'t calculate')));
};

const getValueWithDelay = (value, delay) => new Promise(resolve => {
  setTimeout(() => {
    resolve(value);
  }, delay);
});

const getSum = numbers => numbers
  .filter(value => !isNaN(value))
  .reduce((acc, num) => acc + Number(num), 0);
