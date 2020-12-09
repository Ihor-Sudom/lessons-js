
function superRound(n, x) {
  return [Math.floor(n * Math.pow(10, x)) / Math.pow(10, x),
          Math.round(n * Math.pow(10, x)) / Math.pow(10, x),
          Math.ceil(n * Math.pow(10, x)) / Math.pow(10, x),
          Math.trunc(n * Math.pow(10, x)) / Math.pow(10, x),
          +n.toFixed(x)]
}

console.log(superRound(5.69874, 3));
