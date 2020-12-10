function countOccurrences(text, textSearch) {
  if (textSearch != "") {
    return text.split(" ").filter((el) => el === textSearch).length;
  }
  return null;
}

