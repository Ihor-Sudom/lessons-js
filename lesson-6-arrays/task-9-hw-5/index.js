function checker(arr) {
  if (Array.isArray(arr)) {
    if (Math.max.apply(null, arr) + Math.min.apply(null, arr) > 1000) {
      return true;
    };
    return false;
  }
  return null;
}