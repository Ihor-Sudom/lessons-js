
const checkboxElem = document.querySelector('.task-status');

const inputCheckbox = logCheckbox = () => {
  if (checkboxElem.checked) {
    console.log(true);
  } else {
    console.log(false);
  };
};

checkboxElem.addEventListener('change', inputCheckbox);