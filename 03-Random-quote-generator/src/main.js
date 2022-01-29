import App from './App.js';

const mainEl = document.querySelector('#app');
const initialState = {
  author: '',
  content: '',
};
new App({ targetEl: mainEl, initialState });
