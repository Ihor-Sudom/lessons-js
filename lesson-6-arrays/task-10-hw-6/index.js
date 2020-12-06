
function checkSum(arr) {
  if (Array.isArray(arr)) {
    if (arr.reduce((a, b) => a + b) > 100) {
      return true;
    };
    return false;
  }
  return null;
}