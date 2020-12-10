

function splitText(text, len) {
  if (typeof text == "string") {
    return splitText2(text, len);
  }
  return null;
}

function splitText2(text, len) {
  const strArr = [];
  let startPosition = 0;
  if (len === undefined) {
    len = 10;
  }
  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  return strArr.join('\n');
}




