const API_END_POINT = 'https://api.unsplash.com';
const CLIENT_KEY = 'uxEc60cz8p1C0Lskdr5a9LSu3cCfls2Dgcm1Sg7WoWM';

export const filterData = (data) => {
  const imageArray = [];

  data.results?.map((image) => {
    imageArray.push(image.urls.small);
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
