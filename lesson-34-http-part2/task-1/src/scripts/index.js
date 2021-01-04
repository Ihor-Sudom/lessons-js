import { renderListItems } from './render.js';
import { initTodoListHandlers } from './todoList.js';
import { getTaskList } from './tasksGateway.js';
import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  getTaskList()
    .then(tasksList => {
      setItem('tasksList', tasksList);
      renderListItems();
    })
  
  initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderListItems();
  }
};

window.addEventListener('storage', onStorageChange);