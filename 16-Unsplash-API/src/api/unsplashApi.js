const API_END_POINT = 'https://api.unsplash.com';
const CLIENT_KEY = 'SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

export const filterData = (data) => {
  const imageArray = [];

  data.results?.map((image) => {
    const a = image.urls.small;
    imageArray.push(a);
  });

  return imageArray;
};

export const getUnsplashImages = (value) => {
  const url = `${API_END_POINT}/search/photos?query=${value}&per_page=30&client_id=${CLIENT_KEY}`;

  return fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`${res.Error}`);
  });
};
