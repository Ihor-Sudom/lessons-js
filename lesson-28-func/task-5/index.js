
const shmoment = value => {
  let result = {
    years: new Date(value).getFullYear(),
    months: new Date(value).getMonth(),
    days: new Date(value).getDate(),
    hours: new Date(value).getHours(),
    minutes: new Date(value).getMinutes(),
    seconds: new Date(value).getSeconds(),
    milliseconds: new Date(value).getMilliseconds(),
  };

  const changeDate = {
    add(date, value) {
      result[date] += value;
      return this;
    },

    subtract(date, value) {
      result[date] -= value;
      return this;
    },

    result() {
      const arrValue = Object.values(result);
      return new Date(...arrValue);
    },
  }
  return changeDate;
}
