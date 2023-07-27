export const setDate = () => {
  const newDate = new Date();
  // Wed Jul 26 2023 21:37:58 GMT+0300 (Eastern European Summer Time)
  //.split('-').reverse().join('/');

  //[str.slice(0, end + step), ',', str.slice(end + step)].join('');
  const date =
    newDate.toDateString().slice(4, 10) +
    ',' +
    newDate.toDateString().slice(10, 15);
  return date;
};
