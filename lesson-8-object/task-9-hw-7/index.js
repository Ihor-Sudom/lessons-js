
function getAdults(obj) {
  let obj2 = {};
  for (let i in obj) {
      if (obj[i] >= 18) {
        obj2[i] = obj[i];
      }
  }
  return obj2;
}

