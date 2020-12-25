
export const getDiff = (startDate, endDate) => {
  const diffTime = Math.abs(new Date(startDate) - new Date(endDate));
  
  const differenceDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const differenceHours = Math.floor((diffTime / 1000 / 60 / 60) % 24);
  const differenceMinutes = Math.floor((diffTime / 1000 / 60) % 60);
  const differenceSeconds = Math.floor((diffTime / 1000) % 60);

  return `${differenceDay}d ${differenceHours}h ${differenceMinutes}m ${differenceSeconds}s`;
};

