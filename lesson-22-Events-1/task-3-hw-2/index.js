
const inputElem = document.querySelector('.text-input');

const inputChange = () => {
  console.log(inputElem.value);
};

inputElem.addEventListener('change', inputChange);