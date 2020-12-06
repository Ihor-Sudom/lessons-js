function squareArray(array) {
  if (Array.isArray(array)) {
    return array.map(item => item * item);
  }
  return null;
}