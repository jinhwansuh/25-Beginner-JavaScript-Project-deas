import { request } from './api/quotable.js';
import { Board, Button } from './components/index.js';

export default function App({ mainEl, initialState }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  this.state = initialState;

  const getRandomQuote = () => request('/random');

  const onChange = () => {
    getRandomQuote().then((res) => {
      const nextState = {
        ...this.state,
        author: res.author,
        content: res.content,
      };
      board.setState(nextState);
    });
  };

  const board = new Board({ containerEl, initialState });
  new Button({ containerEl, onChange });

  mainEl.appendChild(containerEl);
}
