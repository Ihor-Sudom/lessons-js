const baseUrl = 'https://5ff2e7d128c3980017b18ca3.mockapi.io/api/v1/form';

const emailElem = document.querySelector('#email');
const textElem = document.querySelector('#name');
const passwordElem = document.querySelector('#password');

const battonElem = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');


const onInputValid = () => 
  validInputElem.reportValidity()
    ? battonElem.disabled = false 
    : battonElem.disabled = true;

const validInputElem = document.querySelector('.login-form');
validInputElem.addEventListener('input', onInputValid);


const submittingFormData = (event) => {
  event.preventDefault();

  const user = {
    email: emailElem.value,
    userName: textElem.value,
    password: passwordElem.value,
  };

  createUserForm(user)
    .then(response => response.ok ? response : Promise.reject(response))
    .then(() => changeForm())
    .then(() => getUserForm())
    .catch(() => errorElem.textContent = 'Failed to create user')
    .finally(() => validInputElem.addEventListener('input', textErrorElem))
};

const submitButtonElem = document.querySelector('.login-form');
submitButtonElem.addEventListener('submit', submittingFormData);


const createUserForm = user =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user),
  });

const getUserForm = (event) =>
  fetch(baseUrl)
  .then(response => response.json())
  .then(value => alert(JSON.stringify(value[value.length - 1])));

const changeForm = () => {
  emailElem.value = '';
  textElem.value = '';
  passwordElem.value = '';
};

const textErrorElem = event => {
  if (event.type === 'input') {
    errorElem.textContent = '';
  };
};
