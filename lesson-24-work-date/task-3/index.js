

export const getDiff = (startDate, endDate) => {

  const differenceDay = Math.round((new Date(startDate).getTime() - new Date(endDate).getTime()) / (60 * 60 * 24 * 1000));
  const differenceHours = new Date(startDate).getHours() - new Date(endDate).getHours();
  const differenceMinutes = new Date(startDate).getMinutes() - new Date(endDate).getMinutes();
  const differenceSeconds = new Date(startDate).getSeconds() - new Date(endDate).getSeconds();

  return `${differenceDay}d ${differenceHours}h ${differenceMinutes}m ${differenceSeconds}s`;
};


/* const result = getDiff(new Date(), new Date(2020, 11, 15, 16, 10, 0));
console.log(result);
console.log(new Date());
console.log(new Date(2020, 11, 15, 16, 10, 0)); */