
export const finishList = () => {
  const liElem = document.createElement('li');
  const ulElem = document.querySelector('.list');
  const ulLiElem = document.querySelector('.special');
  ulElem.prepend(liElem.textContent = '1');
  ulLiElem.before(liElem.textContent = '4');
  ulLiElem.after(liElem.textContent = '6');
  ulElem.append(liElem.textContent = '8');
  
}
