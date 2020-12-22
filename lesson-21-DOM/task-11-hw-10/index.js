
const manageClasses = () => {
  const liElemOne = document.querySelector('.one');
  liElemOne.classList.add('selected');
  const liElemTwo = document.querySelector('.two');
  liElemTwo.classList.remove('selected');
  const liElemThree = document.querySelector('.three');
  liElemThree.classList.toggle('three_done');
  const liElemFour = document.querySelector('.four');
    if (liElemFour.classList.contains('some-class')) {
      liElemFour.classList.add('another-class');
    };
}

