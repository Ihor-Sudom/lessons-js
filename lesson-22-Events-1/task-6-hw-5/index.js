
const buttonElem = document.querySelector('.single-use-btn');


const buttonClick = logButton = () => {
  console.log('clicked');
};


buttonElem.addEventListener('click', buttonClick);
buttonElem.removeEventListener('click', buttonClick, true);