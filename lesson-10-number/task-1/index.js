
function getFiniteNumbers(arr) {
  return arr.filter(item => Number.isFinite(item));
}

function getFiniteNumbersV2(arr) {
  return arr.filter(item => isFinite(item));
}

function getNaN(arr) {
  return arr.filter(item => Number.isNaN(item));
}

function getNaNV2(arr) {
  return arr.filter(item => isNaN(item));
}

function getIntegers(arr) {
  return arr.filter(item => Number.isInteger(item));
}



