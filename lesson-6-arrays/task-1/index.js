function getArrayBounds (array) {
  if (Array.isArray(array)) {
      return [array.length, array[0], array[array.length-1]];
  } else {
    return null;
  }
}