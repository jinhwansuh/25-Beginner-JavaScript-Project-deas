import { Clock } from './components/index.js';
import { getDate } from './utils/convertDate.js';

export default function App({ mainEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';
  const initialState = getDate();

  setInterval(() => {
    const nextState = getDate();
    clock.setState(nextState);
  }, 1000);

  const clock = new Clock({
    targetEl: containerEl,
    initialState,
  });
  mainEl.appendChild(containerEl);
}
