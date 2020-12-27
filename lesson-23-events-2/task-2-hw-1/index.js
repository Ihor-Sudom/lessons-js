const tasks = [
  { text: 'Buy milk', done: false, id: '1' },
  { text: 'Pick up Tom from airport', done: false, id: '2' },
  { text: 'Visit party', done: false, id: '3' },
  { text: 'Visit doctor', done: true, id: '4' },
  { text: 'Buy meat', done: true, id: '5' },
];

const listElem = document.querySelector('.list');

const renderListItems = listItems => {

  const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({text, done, id}) => {
          const listItemElem = document.createElement('li');
          listItemElem.classList.add('list__item');
          listItemElem.dataset.id = id;
          if (done) {
            listItemElem.classList.add('list__item_done');
          }
          const checkboxElem = document.createElement('input');
          checkboxElem.setAttribute('type', 'checkbox');
          checkboxElem.checked = done;
          checkboxElem.classList.add('list__item-checkbox');
          listItemElem.append(checkboxElem, text);

          return listItemElem;
        });

     listElem.append(...listItemsElems);
}


const updatingList = () => {
  const listItemElems = document.querySelectorAll('.list__item');
  listItemElems.forEach(el => el.remove());
  renderListItems(tasks);
};


const buttonElem = document.querySelector('.btn');

const additionListTasks = () => {
  const inputElem = document.querySelector('.task-input');
  const inputTaskElem = document.querySelector('.task-input');

    if (inputElem.value === '') {
      return;
    }

  tasks.push({text: inputElem.value, done: false, id: `${tasks.length + 1}`});
  inputTaskElem.value = '';
  updatingList();
}

buttonElem.addEventListener('click', additionListTasks);


const changeCompletedTask = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
      return;
    } 
  
    const chosenListItem = event.target.closest('.list__item');
    const chosenTask = tasks.find(item => item.id === chosenListItem.dataset.id);
    chosenTask.done = event.target.checked;
    updatingList();
}

listElem.addEventListener('click', changeCompletedTask);


renderListItems(tasks);
