export const getDate = () => {
  const date = new Date();

  const day = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return {
    day,
    hour,
    minute,
  };
};

export const convertDay = {
  0: 'SUN',
  1: 'MON',
  2: 'TUE',
  3: 'WED',
  4: 'THU',
  5: 'FRI',
  6: 'SAT',
};

export const getMeridiem = (hour) => {
  if (hour >= 12) return 'PM';
  return 'AM';
};
const calculateHour = (hour) => {
  if (hour > 12) {
    return hour - 12;
  }
  return hour;
};

export const convertHour = (hour) => {
  let stringHour = calculateHour(hour).toString();

  return stringHour.padStart(2, '0');
};
