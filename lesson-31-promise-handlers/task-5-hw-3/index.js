
export const delay = time => new Promise ((resolve) => {
  setTimeout =(() => {
    console.log('Done');
    resolve('Done');
  }, time);
});