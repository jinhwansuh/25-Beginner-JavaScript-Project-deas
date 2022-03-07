import App from './App.js';
import { getSessionStorage } from './utils/storage.js';

const mainEl = document.querySelector('#app');
const initialState = getSessionStorage();
const initialInputState = {
  question: '',
  answer: '',
};

new App({ targetEl: mainEl, initialState, initialInputState });
