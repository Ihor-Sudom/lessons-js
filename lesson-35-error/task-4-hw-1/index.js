
export const parseUser = str => {
  try {
     return JSON.parse(str);
  } catch (e) {
    return null;
  };
};

