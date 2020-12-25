
export const getDiff = (startDate, endDate) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  const differenceDay = Math.trunc(Math.abs((endDate - startDate) / _MS_PER_DAY));
  const differenceHours = Math.abs(new Date(endDate).getHours() - new Date(startDate).getHours());
  const differenceMinutes = Math.abs(new Date(endDate).getMinutes() - new Date(startDate).getMinutes());
  const differenceSeconds = Math.abs(new Date(endDate).getSeconds() - new Date(startDate).getSeconds());

  return `${differenceDay}d ${differenceHours}h ${differenceMinutes}m ${differenceSeconds}s`;
};

/* const result = getDiff(new Date(2020, 2, 10, 0, 15, 59), new Date(2018, 2, 10, 9, 45, 45)); */

