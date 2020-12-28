const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderListItems = listItems => {

  const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({text, done}, index) => {
          const listItemElem = document.createElement('li');
          listItemElem.classList.add('list__item');
          if (done) {
            listItemElem.classList.add('list__item_done');
          }
          const checkboxElem = document.createElement('input');
          checkboxElem.setAttribute('type', 'checkbox');
          checkboxElem.dataset.id = index;
          checkboxElem.checked = done;
          checkboxElem.classList.add('list__item-checkbox');
          listItemElem.append(checkboxElem, text);

          return listItemElem;
        });
        
        listElem.innerHTML = '';
     listElem.append(...listItemsElems);
}


const buttonElem = document.querySelector('.btn');

const additionListTasks = () => {
  const inputElem = document.querySelector('.task-input');
  const inputTaskElem = document.querySelector('.task-input');

    if (inputElem.value === '') {
      return;
    }

  tasks.push({text: inputElem.value, done: false});
  inputTaskElem.value = '';
  renderListItems(tasks);
}

buttonElem.addEventListener('click', additionListTasks);


const changeCompletedTask = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
      return;
    } 
  
    const chosenListItem = event.target.closest('.list__item-checkbox');
    const chosenTask = tasks[chosenListItem.dataset.id];
    chosenTask.done = event.target.checked;
    renderListItems(tasks);
}

listElem.addEventListener('click', changeCompletedTask);


renderListItems(tasks);
