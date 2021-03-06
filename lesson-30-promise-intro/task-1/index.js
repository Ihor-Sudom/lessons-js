export const addImage = (imgSrc) => {

  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);
  
    const onImageLoaded = () => {
      const {width, height} = imgElem;
      resolve({width, height});
    };
  
    imgElem.addEventListener('load', onImageLoaded);
  
    const onError = () => reject('Image load is failed...');
    imgElem.addEventListener('error', onError);
  });
  
  return p;
}

