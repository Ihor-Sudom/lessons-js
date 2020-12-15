export const createCalculator = () => {
  let sum = 0;

  function add(num) {
    sum += num;
  }

  function decrease(num) {
    sum -= num;
  }

  function reset() {
    sum = 0;
  }

  function getMemo() {
    return sum;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  }
};