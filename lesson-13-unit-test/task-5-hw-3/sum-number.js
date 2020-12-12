export const sum = arr => {
  if (Array.isArray(arr)) {
    return arr.reduce((a, b) => a + b);
  }
  return null;
};

