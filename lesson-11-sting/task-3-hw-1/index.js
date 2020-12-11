function splitString(text, n = 10) {
  if (typeof text == "string") {
    return splitString2(text, n);
  }
  return null;
}

function splitString2(text, n) {
  const strArr = [];
  let startPosition = 0;
  while (true) {
    let chunk = text.substr(startPosition, n);
    if (chunk.length === 0) {
      break;
    }
    chunk.length === n ? strArr.push(chunk) : strArr.push(chunk.concat('.'.repeat(n - chunk.length)));
    startPosition += n;
  }
  return strArr;
}
