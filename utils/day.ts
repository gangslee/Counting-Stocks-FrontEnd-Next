export const getDay = (n: number) => {
  const day = new Date();
  day.setDate(day.getDate() + n);
  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const date = day.getUTCDate();

  return new Date(`${year}-${month}-${date}`);
};

export const dateFormat = (date: Date, delimiter = "-") => {
  const year = date.getFullYear();

  const dateMonth = date.getMonth() + 1;
  const month = dateMonth < 10 ? `0${dateMonth}` : dateMonth.toString();

  const dateDay = date.getDate();
  const day = dateDay < 10 ? `0${dateDay}` : dateDay.toString();

  return [year, month, day].join(delimiter);
};
