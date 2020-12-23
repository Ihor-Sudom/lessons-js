
const buttonElem = document.querySelector('.search__btn');

const buttonSearch = () => {
  const inputElem = document.querySelector('.search__input');
  console.log(inputElem.value);
};

buttonElem.addEventListener('click', buttonSearch);