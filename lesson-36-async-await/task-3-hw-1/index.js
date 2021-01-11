export const getUsersBlogs = async (...userId) => await Promise.all(fetchUserData(...userId));

const fetchUserData = (...userId) => {
  return userId.map(el => {
   return fetch(`https://api.github.com/users/${el}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to load data');
    })
    .then(response => response.blog);
  });
};

