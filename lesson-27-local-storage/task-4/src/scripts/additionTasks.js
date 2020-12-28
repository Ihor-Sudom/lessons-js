import { renderListItems } from './render.js';
import { getItem, setItem } from './storage.js';

export const additionListTasks = () => {
  const inputElem = document.querySelector('.task-input');
  const inputTaskElem = document.querySelector('.task-input');

    if (inputElem.value === '') {
      return;
    }

  const tasksList = getItem('tasksList') || [];

  const newTasksList = tasksList.concat({
    text: inputElem.value,
    done: false,
    createDate: new Date().getTime(), 
    id: Math.random().toString(),
  });

  inputTaskElem.value = '';

  setItem('tasksList', newTasksList);
  renderListItems();
}
