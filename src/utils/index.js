export const setDate = () => {
  const newDate = new Date();
  console.log(`newDate: `, newDate);
  return newDate.toDateString().slice(0, 10).split('-').reverse().join('/');
};
