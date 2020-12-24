

export const getDiff = (startDate, endDate) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  const newStartDate = Date.UTC(new Date(startDate).getFullYear(), new Date(startDate).getMonth(), new Date(startDate).getDate());
  const newEndDate = Date.UTC(new Date(endDate).getFullYear(), new Date(endDate).getMonth(), new Date(endDate).getDate());

  const differenceDay = (newStartDate - newEndDate) / _MS_PER_DAY;
  const differenceHours = new Date(startDate).getHours() - new Date(endDate).getHours();
  const differenceMinutes = new Date(startDate).getMinutes() - new Date(endDate).getMinutes();
  const differenceSeconds = new Date(startDate).getSeconds() - new Date(endDate).getSeconds();

  return `${differenceDay}d ${differenceHours}h ${differenceMinutes}m ${differenceSeconds}s`;
};



