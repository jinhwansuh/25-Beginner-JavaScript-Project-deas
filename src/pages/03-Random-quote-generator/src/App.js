import { request } from './api/quotable.js';
import { Board, Button } from './components/index.js';

export default function App({ targetEl, initialState }) {
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

  const board = new Board({ targetEl: containerEl, initialState });
  new Button({ targetEl: containerEl, onChange });

  targetEl.appendChild(containerEl);
}
