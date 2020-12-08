
const transformToObject = arr => {
  let obj = {};
  arr.forEach(el => obj[el] = el);
  return obj;
}


const arr = ['a', 17.1, 'John Doe'];
const result = transformToObject(arr);
console.log(result);