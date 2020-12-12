export const arrAverage = arr => {
  if (Array.isArray(arr)) {
    return arr.reduce((a, b) => a + b) / arr.length;
  }
  return null;
};

