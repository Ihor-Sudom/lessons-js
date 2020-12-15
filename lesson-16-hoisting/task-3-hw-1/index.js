export function createArrayOfFunctions(length) {
  if (length === undefined) {
    return [];
  }
  return typeof length != 'number' ? null
                                   : Array(length).fill().map((el, index) => function () { return index });
}

