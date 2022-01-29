import App from './App.js';

const mainEl = document.querySelector('#app');
const initialState = { minute: 0, second: 0, ms: 0 };

new App({ targetEl: mainEl, initialState });
