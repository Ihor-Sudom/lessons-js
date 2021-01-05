const baseUrl = 'https://5ff2e7d128c3980017b18ca3.mockapi.io/api/v1/form';

const submittingFormData = () => {
  const inputElem = document.querySelectorAll('.form-input');
  const [email, userName, password] = [...inputElem].map(el => el.value);

  const user = {
    email,
    userName,
    password,
  };

  createUserForm(user)
}

const submitButtonElem = document.querySelector('.submit-button');
submitButtonElem.addEventListener('click', submittingFormData);

const createUserForm = user => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user),
  });
}