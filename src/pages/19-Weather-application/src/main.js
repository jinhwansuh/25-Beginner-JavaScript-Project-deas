import App from './App.js';

const mainEl = document.querySelector('#app');
const initialState = {
  city: 'seoul',
  temp: 0,
  weather: '',
};

new App({ targetEl: mainEl, initialState });
