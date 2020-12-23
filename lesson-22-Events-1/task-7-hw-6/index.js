const buttonElem = document.querySelectorAll('.btn');

const handleClick = (event) => {
  console.log(event.target.textContent);
};

buttonElem.forEach(el => el.addEventListener('click', handleClick));