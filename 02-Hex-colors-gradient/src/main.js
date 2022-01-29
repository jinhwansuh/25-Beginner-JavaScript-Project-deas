import App from './App.js';

const mainEl = document.querySelector('#app');
const initialState = {
  color1: '#ffffff',
  color2: '#ffffff',
};

new App({ targetEl: mainEl, initialState });
