function swap(array) {
  const [a, ...newArray] = array;
  return [...newArray, a];
}