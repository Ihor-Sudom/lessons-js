
export const delay = time => new Promise ((resolve) => {
  setTimeout =(() => {
    console.log('Done');
    resolve(time);
  }, time);
});