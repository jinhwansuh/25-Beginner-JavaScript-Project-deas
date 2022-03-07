import { Clock } from './components/index.js';
import { getDate } from './utils/convertDate.js';

export default function App({ targetEl, initialState }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  setInterval(() => {
    const nextState = getDate();
    clock.setState(nextState);
  }, 1000);

  const clock = new Clock({
    targetEl: containerEl,
    initialState,
  });

  targetEl.appendChild(containerEl);
}
