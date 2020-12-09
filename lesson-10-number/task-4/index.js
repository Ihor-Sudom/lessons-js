
function getMaxAbsoluteNumber(arr) {
  if (Array.isArray(arr) && arr.length != 0) {
    return Math.max.apply(null, arr.map(item => Math.abs(item)));
  }
  return null;
}

