export const setSessionStorage = (text) => {
  try {
    sessionStorage.setItem('grocery-list', JSON.stringify(text));
  } catch (e) {
    console.log(e);
  }
};

export const getSessionStorage = () => {
  try {
    return sessionStorage.getItem('grocery-list')
      ? JSON.parse(sessionStorage.getItem('grocery-list'))
      : [];
  } catch (e) {
    console.error(e);
  }
};

export const removeStorage = () => {
  sessionStorage.removeItem('grocery-list');
  return [];
};
