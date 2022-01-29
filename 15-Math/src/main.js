import App from './App.js';
import { randomNumber } from './utils/random.js';

const mainEl = document.querySelector('#app');
const initialState = {
  number1: randomNumber(),
  number2: randomNumber(),
  calculation: '+',
};

new App({ targetEl: mainEl, initialState });
