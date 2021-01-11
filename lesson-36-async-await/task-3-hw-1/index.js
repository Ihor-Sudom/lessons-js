/* export */ const getUsersBlogs = async (...userId) => {
  const userImail = await Promise.all(fetchUserData(...userId));
  return userImail.map(el => el.blog);
}


const fetchUserData = (...userId) => {
  return userId.map(el => {
   return fetch(`https://api.github.com/users/${el}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to load data');
    });
  });
};
