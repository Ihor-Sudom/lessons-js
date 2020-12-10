
function reverseString(text) {
  if (typeof text === "string") {
    return text.split('').reverse().join('');
  }
  return null;
}
