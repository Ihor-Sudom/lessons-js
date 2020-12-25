const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderListItems = listItems => {
  const listElem = document.querySelector('.list');

  const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({text, done}) => {
          const listItemElem = document.createElement('li');
          listItemElem.classList.add('list__item');
          if (done) {
            listItemElem.classList.add('list__item_done');
          }
          const checkboxElem = document.createElement('input');
          checkboxElem.setAttribute('type', 'checkbox');
          checkboxElem.setAttribute('data-id', `${Math.random()}`);
          checkboxElem.checked = done;
          checkboxElem.classList.add('list__item-checkbox');
          listItemElem.append(checkboxElem, text);

          return listItemElem;
        });

     listElem.append(...listItemsElems);
}


const buttonElem = document.querySelector('.btn');

const additionListTasks = () => {
  const inputElem = document.querySelector('.task-input');
  const listItemElems = document.querySelectorAll('.list__item');
  const inputTaskElem = document.querySelector('.task-input');

    if (inputElem.value === '') {
      return;
    }

  tasks.push({text: inputElem.value, done: false});
  listItemElems.forEach(el => el.remove());
  inputTaskElem.value = '';
  renderListItems(tasks);
}

buttonElem.addEventListener('click', additionListTasks);


const ulElem = document.querySelector('.list');

const changeCompletedTask = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
      return;
    } 
  
  const checkboxData = event.target.dataset.id;
  const checkbox = document.querySelector(`[data-id="${checkboxData}"]`);
  const liElem = checkbox.closest('.list__item');
  
    if (checkbox.checked) {
      liElem.classList.add('list__item_done');
    } else {
      liElem.classList.remove('list__item_done');
    }
}

ulElem.addEventListener('click', changeCompletedTask);


renderListItems(tasks);