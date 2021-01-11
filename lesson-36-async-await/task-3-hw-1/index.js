
export const getUsersBlogs = (...userId) => {
  return Promise.all(userId.map(el => fetchUserData(el)));
};

const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    const userData = await response.json();
    return userData.blog;
  } catch(err) {
    throw new Error('Failed to fetch user');
  };
};
