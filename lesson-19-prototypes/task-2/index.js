
export function getOwnProps(obj) {
  let arr = [];
  for (let prop in obj) {
    if (hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      arr.push(prop);
    };
  };
  return arr;
};

