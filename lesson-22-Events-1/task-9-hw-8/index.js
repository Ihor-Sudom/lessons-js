
const checkboxElem = document.querySelector('.task-status');

const inputCheckbox = (event) => {
  if (event.target.checked) {
    console.log(true);
  } else {
    console.log(false);
  };
};

checkboxElem.addEventListener('change', inputCheckbox);