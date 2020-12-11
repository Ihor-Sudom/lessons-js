export default (arr) {
  let result = arr.map(el => Math.abs(el));
  return Math.pow(Math.min.apply(null, result), 2);
}