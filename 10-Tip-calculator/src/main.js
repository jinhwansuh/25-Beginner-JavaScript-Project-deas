import App from './App.js';

const mainEl = document.querySelector('#app');
const initialState = {
  amount: '',
  guests: '',
  quality: '',
};

new App({ targetEl: mainEl, initialState });
