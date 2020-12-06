function sortAsc(array) {
  if (Array.isArray(array)) {
    let newArr = [];
    for (; array.length;)  { 
      newArr.push(array.splice(array.indexOf(Math.min(...array)),1)[0]);
    }
    return newArr;
  }
  return null;
}

function sortDesc(array) {
  if (Array.isArray(array)) {
    let newArr = [];
    for (; array.length;)  { 
      newArr.push(array.splice(array.indexOf(Math.max(...array)),1)[0]);
    }
    return newArr;
  }
  return null;
}