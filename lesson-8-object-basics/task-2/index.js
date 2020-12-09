
const obj = {
  name: 'John Doe', 
  age: 17, 
  interest: 'football',
};

const concatProps = obj => {
  let arr = [];
    for (let key in obj) {
      arr.push(obj[key]);
    }
  return arr;
};

console.log(concatProps(obj));

