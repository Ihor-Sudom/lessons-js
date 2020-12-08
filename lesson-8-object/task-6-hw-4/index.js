
function addPropertyV1(obj, key, value) {
  obj[key] = value; 
  return obj;
}


function addPropertyV2(obj, key, value) {
  newObj = {};
  newObj[key] = value;
  return Object.assign(obj, newObj);
}


function addPropertyV3(obj, key, value) {
  newObj = {};
  newObj[key] = value;
  const sumObj = Object.assign(obj, newObj);
  return sumObj;
}
console.log(addPropertyV3({A: 3, D: 5}, 'b', '50'));

function addPropertyV4(obj, key, value) {
  newObj = {};
  newObj[key] = value;
  const sumObj = {...obj, ...newObj}
  return sumObj;
}


