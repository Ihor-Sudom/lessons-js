
const buttonElem = document.querySelector('.single-use-btn');


const buttonClick = (event) => {
  console.log('clicked');
  buttonElem.removeEventListener('click', buttonClick);
};

buttonElem.addEventListener('click', buttonClick);
