
const buttonElem = document.querySelectorAll('.pagination__page');

const buttonClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

buttonElem.forEach(el => el.addEventListener('click', buttonClick));