
import { renderListItems } from './render.js';
import { getItem, setItem } from './storage.js';


export const changeCompletedTask = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
      return;
    } 
  
    const taskList = getItem('tasksList');
    const newTasksList = taskList
      .map(task => {
        if (task.id === event.target.dataset.id) {
          const done = event.target.checked;
          return {
            ...task,
            done,
            finishDate: done
              ? new Date().toISOString()
              : null
          };
        }
        return task;
      })
    setItem('tasksList', newTasksList);
    renderListItems();
}

