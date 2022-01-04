import Background from './components/Background.js';

export default function App({ mainEl, initialState }) {
  const randomColor = () =>
    '#' + Math.round(Math.random() * 0xffffff).toString(16);

  new Background({
    mainEl,
    initialState,
    randomColor,
  });
}
