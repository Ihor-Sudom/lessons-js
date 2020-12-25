

export const getDiff = (startDate, endDate) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  const newStartDate = new Date(new Date(startDate).getFullYear(), new Date(startDate).getMonth(), new Date(startDate).getDate());
  const newEndDate = new Date(new Date(endDate).getFullYear(), new Date(endDate).getMonth(), new Date(endDate).getDate());

  const differenceDay = (newEndDate - newStartDate) / _MS_PER_DAY;
  const differenceHours = new Date(endDate).getHours() - new Date(startDate).getHours();
  const differenceMinutes = new Date(endDate).getMinutes() - new Date(startDate).getMinutes();
  const differenceSeconds = new Date(endDate).getSeconds() - new Date(startDate).getSeconds();

  return `${differenceDay}d ${differenceHours}h ${differenceMinutes}m ${differenceSeconds}s`;
};


