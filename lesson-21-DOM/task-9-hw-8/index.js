
export const finishList = () => {
  const ulElem = document.querySelector('.list');
  const ulLiElem = document.querySelector('.special');
  const liElemOne = document.createElement('li');
  liElemOne.textContent = '1';
  ulElem.prepend(liElemOne);
  const liElemFour = document.createElement('li');
  liElemFour.textContent = '4';
  ulLiElem.before(liElemFour);
  const liElemSix = document.createElement('li');
  liElemSix.textContent = '6';
  ulLiElem.after(liElemSix);
  const liElemEight = document.createElement('li');
  liElemEight.textContent = '8';
  ulElem.append(liElemEight);
}

