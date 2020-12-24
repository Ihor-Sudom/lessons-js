const dayWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  console.log(day);
  const dateInFuture = new Date(date).setDate(day + days);

  return dayWeek[new Date(dateInFuture).getDay()];
}


/* const result = dayOfWeek(new Date(2019, 1, 1), 20);

console.log(result); */