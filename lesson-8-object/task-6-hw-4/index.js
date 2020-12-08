
function addPropertyV1(obj, key, value) {
  obj[key] = value; 
  return obj;
}

function v2(obj, key, val) {
  return Object.assign(obj, {[key]: val});
}

function v3(obj, key, val) {
  return Object.assign({}, obj, {[key]: val})
}

function v4(obj, key, val) {
  return {...obj, ...{[key]: val}};
}


