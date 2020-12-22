
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
  const eventListElem = document.querySelector('.events-list');
  eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreyDiv = logTarget.bind(null, 'div', 'grey');
const logGreyP = logTarget.bind(null, 'p', 'grey');
const logGreySpan = logTarget.bind(null, 'span', 'grey');

const logGreenDiv = logTarget.bind(null, 'div', 'green');
const logGreenP = logTarget.bind(null, 'p', 'green');
const logGreenSpan = logTarget.bind(null, 'span', 'green');

const buttonClearElem = document.querySelector('.clear-btn');

const buttonClear = logButton = () => {
  const eventListElem = document.querySelector('.events-list > span');
  eventListElem.remove();
};

buttonClearElem.addEventListener('click', buttonClear);

const buttonAttachHandlers = document.querySelector('.attach-handlers-btn');

const buttonAttach = logAttachHandlers = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);
  
  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);
  
  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
};

buttonAttachHandlers.addEventListener('click', buttonAttach);

const buttonRemoveHandlers = document.querySelector('.remove-handlers-btn');

const buttonRemove = logRemoveHandlers = () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreenDiv);
  
  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);
  
  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
};

buttonRemoveHandlers.addEventListener('click', buttonRemove);

