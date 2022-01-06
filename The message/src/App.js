import Board from './components/Board.js';

export default function App({ mainEl, initialState }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  new Board({ containerEl, initialState });

  mainEl.appendChild(containerEl);
}
