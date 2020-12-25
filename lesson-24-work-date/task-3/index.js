
export const getDiff = (startDate, endDate) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  const differenceDay = Math.trunc(Math.abs((endDate - startDate) / _MS_PER_DAY));
  const differenceHours = Math.abs(endDate.getHours() - startDate.getHours());
  const differenceMinutes = Math.abs(endDate.getMinutes() - startDate.getMinutes());
  const differenceSeconds = Math.abs(endDate.getSeconds() - startDate.getSeconds());

  return `${differenceDay}d ${differenceHours}h ${differenceMinutes}m ${differenceSeconds}s`;
};


