
const inputElem = document.querySelector('.text-input');

const textInput = (event) => {
  console.log(event.target.value);
}

inputElem.addEventListener('change', textInput);