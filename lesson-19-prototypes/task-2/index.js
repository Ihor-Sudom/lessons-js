
export function getOwnProps(obj) {
  let arr = [];
  for (let prop in obj) {
    if (hasOwnProperty(obj) && typeof obj[prop] !== 'function') {
      arr.push(prop);
    };
  };
  return arr;
};

