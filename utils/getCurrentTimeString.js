export const getCurrentTimeString = () => {
  const padTo2Digits = (num) => String(num).padStart(2, '0');
  const date = new Date();
  const hoursAndMinutes = padTo2Digits(date.getHours()) + ':' + padTo2Digits(date.getMinutes());

  return hoursAndMinutes;
};