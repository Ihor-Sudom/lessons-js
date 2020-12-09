
const getAdults = usersObj => {
  const usersArray = Object.entries(usersObj);
  const filteredUsersArray = usersArray.filter(user => user[1] >= 18);
  const userNames = filteredUsersArray.map(user => user[0]);
  return userNames;
}