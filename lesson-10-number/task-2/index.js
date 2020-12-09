
function getParsedIntegers(arr) {
  return arr.map(item => Number.parseInt(item));
}

function getParsedIntegersV2(arr) {
  return arr.map(item => parseInt(item));
}

function getParsedFloats(arr) {
  return arr.map(item => Number.parseFloat(item));
}

function getParsedFloatsV2(arr) {
  return arr.map(item => parseFloat(item));
}

