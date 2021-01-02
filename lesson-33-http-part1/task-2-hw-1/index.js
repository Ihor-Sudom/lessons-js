const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

/* getTasksList code here */
const getTasksList = () => {
  return fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks')
    .then(response => response.json());
};


/* getTaskById code here */
const getTaskById = (taskId) => {
  return fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks')
  .then(response => response.json())
  .then(response => response[taskId - 1]);
};


