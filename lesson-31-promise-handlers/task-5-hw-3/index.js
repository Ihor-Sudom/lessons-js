export const delay = time => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Done');
  }, time);
});