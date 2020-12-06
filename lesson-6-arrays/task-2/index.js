function getSum (array) {
  if (Array.isArray(array)) {
      return array.reduce((a, b) => a + b);
  } else {
    return null;
  }
}