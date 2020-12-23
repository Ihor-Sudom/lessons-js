
const inputElem = document.querySelector('.text-input');

const inputChange = logInput = () => {
  console.log(inputElem.value);
};

inputElem.addEventListener('change', inputChange);