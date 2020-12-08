
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
  newObj = Object.assign({}, obj);
  newObj[key] = value;
  return newObj;
}


function addPropertyV4(obj, key, value) {
  newObj = {...obj};
  newObj[key] = value;
  return newObj;
}
