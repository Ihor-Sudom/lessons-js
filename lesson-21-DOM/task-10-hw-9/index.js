
export const finishForm = () => {
  const inputElem = document.createElement('input');
  inputElem.setAttribute('type', 'text');
  inputElem.setAttribute('name', 'login');
  const formElem = document.querySelector('.login-form');
  formElem.prepend(inputElem);
  const inputElemTwo = document.querySelector('input[name="password"]');
  inputElemTwo.setAttribute('type', 'password');
}

