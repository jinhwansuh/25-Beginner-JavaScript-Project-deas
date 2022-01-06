export const setSessionStorage = (message) => {
  return sessionStorage.setItem('message', JSON.stringify(message));
};

export const getSessionstorage = () => {
  return JSON.parse(sessionStorage.getItem('message'));
};
