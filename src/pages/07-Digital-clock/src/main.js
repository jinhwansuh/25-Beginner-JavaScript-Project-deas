import App from './App.js';
import { getDate } from './utils/convertDate.js';

const mainEl = document.querySelector('#app');
const initialState = getDate();

new App({ targetEl: mainEl, initialState });
