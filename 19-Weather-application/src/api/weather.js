export const getCityWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1001706425a8727d8df6aac7ded902a1`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
    throw new Error('에러~');
  } catch (e) {
    alert(e.message);
  }
};
