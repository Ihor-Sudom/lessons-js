import { getItem } from './storage.js';

export const renderListItems = () => {
  const listElem = document.querySelector('.list');
  const taskList = getItem('tasksList') || [];

  const listItemsElems = taskList
        .sort((a, b) => a.done - b.done)
        .map(({text, done, id}) => {
          const listItemElem = document.createElement('li');
          listItemElem.classList.add('list__item');
          if (done) {
            listItemElem.classList.add('list__item_done');
          }
          const checkboxElem = document.createElement('input');
          checkboxElem.setAttribute('type', 'checkbox');
          checkboxElem.dataset.id = id;
          checkboxElem.checked = done;
          checkboxElem.classList.add('list__item-checkbox');
          listItemElem.append(checkboxElem, text);

          return listItemElem;
        });
        
     listElem.innerHTML = '';
     listElem.append(...listItemsElems);
}