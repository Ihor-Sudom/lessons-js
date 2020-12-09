

function pickProps(obj, arr) {
  let obj2 = {};
  for (let i in obj) {
      if (arr.includes(i)) {
        obj2[i] = obj[i];
      }
  }
  return obj2;
}

console.log(pickProps({
  a: 1,
  b: 2,
  c: 3
}, ['g', 'y']));