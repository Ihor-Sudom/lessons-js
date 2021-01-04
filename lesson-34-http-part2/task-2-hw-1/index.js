const baseUrl = 'https://5ff2e7d128c3980017b18ca3.mockapi.io/api/v1/users';

/* getUsersList code here */
export const getUsersList = () => fetch(baseUrl)
  .then(response => response.json());

/* getUserById code here */
export const getUserById = userId => fetch(`${baseUrl}/${userId}`)
  .then(response => response.json());

/* createUser code here */
export const createUser = user => fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user),
  });

/* updateUser code here */
export const updateUser = (id, user) => fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user),
  });

/* deleteUser code here */
export const deleteUser = id => fetch(`${baseUrl}/${id}`, {
    method: 'DELETE'
  });


