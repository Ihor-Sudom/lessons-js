function getSpecialNumbers (m, n) {
  let array = [];
  for (let i=m; i <= n; i++) {
      if (i % 3 === 0) {
          array.push(i);
      }
  }
  return array;
}