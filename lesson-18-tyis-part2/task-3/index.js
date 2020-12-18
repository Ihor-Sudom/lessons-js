
export function sumOfSquares() {
  return [...arguments].reduce((acc, el) => acc + el * el, 0);
}

