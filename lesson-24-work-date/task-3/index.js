

export const getDiff = (startDate, endDate) => {
  const differenceDay = new Date(startDate).getDate() - new Date(endDate).getDate();
  const differenceHours = new Date(startDate).getHours() - new Date(endDate).getHours();
  const differenceMinutes = new Date(startDate).getMinutes() - new Date(endDate).getMinutes();
  const differenceSeconds = new Date(startDate).getSeconds() - new Date(endDate).getSeconds();

  return `${differenceDay}d ${differenceHours}h ${differenceMinutes}m ${differenceSeconds}s`;
};


/* const result = getDiff(new Date(2019, 1, 1, 14, 15, 12), new Date(2019, 1, 8, 18, 56, 42));
console.log(result); */