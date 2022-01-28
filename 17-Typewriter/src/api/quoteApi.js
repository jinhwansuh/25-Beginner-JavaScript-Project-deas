const API_END_POINT = 'https://api.quotable.io';

export const getRandomQuote = () => {
  return fetch(`${API_END_POINT}/random`)
    .then((response) => {
      if (response.ok) {
        return response;
      }
    })
    .then((data) => data.json())
    .catch((e) => console.log(e));
};
