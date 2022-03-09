export const setSesstionStorage = (text) => {
  try {
    return sessionStorage.setItem('flash-card', JSON.stringify(text));
  } catch (e) {
    alert(e);
    return;
  }
};

export const getSessionStorage = () => {
  try {
    const value = sessionStorage.getItem('flash-card');
    return value ? JSON.parse(value) : [];
  } catch (e) {
    alert(e);
    return [];
  }
};
