

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  console.log(localStorage);
};

export const getItem = key => JSON.parse(localStorage.getItem(key));