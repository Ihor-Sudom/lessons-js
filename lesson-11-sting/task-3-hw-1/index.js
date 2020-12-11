function splitString(text, n) {
  if (typeof text == "string") {
    return splitString2(text, n);
  }
  return null;
}

function splitString2(text, n) {
  const strArr = [];
  let startPosition = 0;
  if (n === undefined) {
    n = 10;
  }
  while (true) {
    let chunk = text.substr(startPosition, n);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk);
    startPosition += n;
  }
  return strArr.map(item => item.length == n ? item : plusPoint(item, n));
}

function plusPoint(x, n) {
  let text = x;
  for (let i=x.length; i < n; i++) {
    text += '.';
  }
  return text;
}

console.log(splitString('fhjgfghjhdfg', 5));