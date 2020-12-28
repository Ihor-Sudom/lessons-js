import { renderListItems } from './render.js';
import { initTodoListHandlers } from './todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderListItems();
  initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderListItems();
  }
};

window.addEventListener('storage', onStorageChange);