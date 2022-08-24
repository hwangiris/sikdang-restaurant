export const toDate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};
export const toTime = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleTimeString('it-IT');
};
export const toNumber = (val) => Number.parseInt(val, 10).toLocaleString();
