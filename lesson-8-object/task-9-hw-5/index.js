
function getAdults(obj) {
  return Object.keys(obj).filter(item => obj[item] >= 18);
}

