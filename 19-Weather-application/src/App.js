import { getCityWeather } from './api/weather.js';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');

  const fetchWeather = async () => {
    const data = await getCityWeather('seoul');

    console.log(data);
  };

  fetchWeather();

  targetEl.appendChild(containerEl);
}
