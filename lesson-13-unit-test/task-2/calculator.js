
export function getSquaredArray(arr) {
  return arr.map(el => el * el);
}

export function getOddNumbers(arr) {
  return arr.filter(el => el % 2 == 1);
}

export default (a, b) => a + b;