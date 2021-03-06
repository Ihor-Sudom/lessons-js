const tasks = [
  { text: 'Buy milk', done: false, dataTaskCreationDate: new Date() },
  { text: 'Pick up Tom from airport', done: false, dataTaskCreationDate: new Date() },
  { text: 'Visit party', done: false, dataTaskCreationDate: new Date() },
  { text: 'Visit doctor', done: true, dataTaskCreationDate: new Date() },
  { text: 'Buy meat', done: true, dataTaskCreationDate: new Date() },
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

const updatingList = () => {
  tasks.sort((a, b) => b.dataTaskCreationDate - a.dataTaskCreationDate); 

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

  tasks.push({text: inputElem.value, done: false, dataTaskCreationDate: new Date()});
  inputTaskElem.value = '';
  updatingList();
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
  const liElemText = liElem.innerText;
  
    if (checkbox.checked) {
      tasks.map(el => {
        if (el.text == liElemText) {
          el.dataTaskCreationDate = new Date();
          el.done = true;
        }
      });
      updatingList();
    } else {
      tasks.map(el => el.text == liElemText ? el.done = false : el);
      updatingList();
    }
}

ulElem.addEventListener('click', changeCompletedTask);


renderListItems(tasks);