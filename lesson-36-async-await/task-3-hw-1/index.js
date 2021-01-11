


export const getUsersBlogs = (...userId) => {
  return Promise.all(userId.map(el => fetchUserData(el).then(userData => userData.blog)));
};

 const fetchUserData = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (response.ok) {
      return response.json();
    }
  } catch(err) {
    throw new Error(err.message);
  };
};




/* const getUsersBlogs = (...userId) => {
  try {
    return Promise.all(userId.map(el => fetchUserData(el).then(userData => userData.blog)));
  } catch (err) 
    throw new Error(err.message);
  }
};

const fetchUserData = async userId => {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (response.ok) {
      return response.json();
    }
}; */