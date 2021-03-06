const tasks = [
  { text: 'Buy milk', done: false, id: Math.random() },
  { text: 'Pick up Tom from airport', done: false, id: Math.random() },
  { text: 'Visit party', done: false, id: Math.random() },
  { text: 'Visit doctor', done: true, id: Math.random() },
  { text: 'Buy meat', done: true, id: Math.random() },
];

const listElem = document.querySelector('.list');

const renderListItems = listItems => {

  const listItemsElems = listItems
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

const additionListTasks = () => {
  const inputTaskElem = document.querySelector('.task-input');
  const inputTask = inputTaskElem.value;

    if (inputTask === '') {
      return;
    }

  tasks.push({text: inputTask, done: false, id: Math.random()});
  inputTaskElem.value = '';
  renderListItems(tasks);
}

const buttonElem = document.querySelector('.btn');
buttonElem.addEventListener('click', additionListTasks);

const changeCompletedTask = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
      return;
    } 

    const chosenCheckbox = event.target.dataset.id;
    const chosenTask = tasks.find(el => el.id == chosenCheckbox);
    chosenTask.done = event.target.checked;
    
    renderListItems(tasks);
}

listElem.addEventListener('click', changeCompletedTask);


renderListItems(tasks);
