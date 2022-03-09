import { SideSearchBar, Wrapper } from './components/domain/index.js';
import { getCityWeather } from './api/weather.js';
import { Button } from './components/base/index.js';
import weatherStyle from './style/style.css';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = weatherStyle.container;
  const initialState = {
    city: 'seoul',
    temp: 0,
    weather: '',
  };

  this.state = initialState;

  const fetchWeather = async (city) => {
    const data = await getCityWeather(city);

    const nextState = {
      ...this.state,
      city: data.name,
      temp: data.main.temp,
      weather: data.weather[0].main,
    };
    wrapper.setState(nextState);
    console.log(data);
  };

  const onToggleClick = () => {
    const slideEl = document.querySelector(weatherStlye.slide);
    if (slideEl.className === `${weatherStlye.slide} ${weatherStlye.in}`) {
      slideEl.className = `${weatherStlye.slide} ${weatherStlye.out}`;
    } else {
      slideEl.className = `${weatherStlye.slide} ${weatherStlye.in}`;
    }
  };
  const onSearchSubmit = (city) => {
    fetchWeather(city);
  };

  fetchWeather(this.state.city);

  new Button({
    targetEl: containerEl,
    text: 'X',
    onClick: onToggleClick,
  });
  new SideSearchBar({ targetEl: containerEl, onSearchSubmit });
  const wrapper = new Wrapper({ targetEl: containerEl, initialState });

  targetEl.appendChild(containerEl);
}
