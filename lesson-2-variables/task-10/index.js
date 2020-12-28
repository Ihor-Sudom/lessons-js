
// option 1

// const items = document.querySelectorAll('.list-item');

// console.log(items);

// items.forEach(item => {
//   item.addEventListener('click', handleClick);
// });

// function handleClick() {
//   console.log('clicked');
// }

// option 2

const list = document.querySelector('.list');
function handleListClick(event) {
  if (event.target.className !== 'list-item') {
    return;
  };

  console.log(event.target.textContent);
}

list.addEventListener('click', handleListClick);


// WEB FLOW!!!!!!!
// 1. get data from server ==> [{...}, {...}, {...}]
// 2. render !!!
// 3. handle event - UPDATE [{...}, {...}, {...}]
// 4. re render

// algo
// 1. find task in array
// 2. update done field
// 3. call render
function handleTaskClick(event) {
  // TODO 
}