
function multiRound(n) {
  return [Math.floor(n * 100) / 100,
          Math.round(n * 100) / 100, 
          Math.ceil(n * 100) / 100, 
          Math.trunc(n * 100) / 100, 
          +n.toFixed(2)];
}

