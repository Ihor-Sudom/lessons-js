
function filterNames(arr, text) {
  return arr.filter(item => item.length > 5)
            .filter(item => item.includes(text));

  
}

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));

let arr = [2, 3, 4, 7, 8];
console.log(arr.map(item => item % 2 === 0));