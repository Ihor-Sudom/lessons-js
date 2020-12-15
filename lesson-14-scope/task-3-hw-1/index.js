
let sum = 0;

export const add = num => {
 sum += num;
}

export const decrease = num => {
  sum -= num;
}

export const reset = () => {
  sum = 0;
}

export const getMemo = () => {
  return sum;
}

