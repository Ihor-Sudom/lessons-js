

export const getUsersBlogs = userId => {
  try {
    return Promise.all(userId.map(el => fetchUserData(el).then(userData => userData.blog)));
  } catch (err) {
    console.log(err.message);
  }
};

const fetchUserData = async userId => {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (response.ok) {
      return response.json();
    }
};
