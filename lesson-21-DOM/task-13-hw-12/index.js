
export const getSection = (num) => {
  const spanElem = document.querySelector(`span[data-number="${num}"]`);
  const elem = spanElem.closest('.box');
  return elem.dataset.section;
}
