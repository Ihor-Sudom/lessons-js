
export const parseUser = str => {
  try {
    console.log(JSON.parse(str));
  } catch (e) {
    console.log(null);
  };
};

