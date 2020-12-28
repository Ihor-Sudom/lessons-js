import { getItem } from './storage.js';

const taskListSorte = (a, b) => {
  if (!a.done) {
    return b.createDate - a.createDate;
  } else if (a.done && b.done) {
    return b.finishDate - a.finishDate;
  };
}

const createCheckbox = ({done, id}) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.dataset.id = id;
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');

  return checkboxElem;
}

const createListItem = ({text, done, id}) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = createCheckbox({done, id});
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.append(checkboxElem, text);
  return listItemElem;
}

export const renderListItems = () => {
  const listElem = document.querySelector('.list');
  const taskList = getItem('tasksList') || [];

  const listItemsElems = taskList
        .sort(taskListSorte)
        .map(createListItem);
        
     listElem.innerHTML = '';
     listElem.append(...listItemsElems);
}