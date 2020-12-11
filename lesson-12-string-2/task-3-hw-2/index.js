

function cleanTransactionsList(arr) {
  return arr.map(el => typeof el === 'string' ? el.trim() : el)
            .map(el => +el)
            .filter(el => !isNaN(el))
            .map(el => '$' + el.toFixed(2));
}
