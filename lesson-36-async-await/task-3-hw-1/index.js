export const getUsersBlogs = async (...userId) => {
  const userImail = await Promise.all(fetchUserData(...userId));
  return userImail.map(el => el.blog);
}


const fetchUserData = (...userId) => {
  const result = [];
  for (let i=0; i < userId.length; i++) {
    result.push(fetch(`https://api.github.com/users/${userId[i]}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to load data');
    }));
  };
  return result;
};


