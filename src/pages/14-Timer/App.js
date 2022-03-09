import { Timer } from './components/index.js';
import timerStyle from './style/style.css';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = timerStyle.container;
  const initialState = { minute: 0, second: 0, ms: 0 };

  this.state = initialState;
  this.timeState = false;
  let startTime;

  const plus = () => {
    let { minute, second, ms } = this.state;
    ms++;
    if (ms >= 100) {
      ms = 0;
      second++;
    }
    if (second >= 60) {
      minute = 0;
      second++;
    }
    const nextState = { minute, second, ms };
    this.setState(nextState);
  };

  containerEl.addEventListener('click', () => {
    if (this.timeState) {
      clearInterval(startTime);
      this.timeState = false;
    } else {
      startTime = setInterval(plus, 10);
      this.timeState = true;
    }
  });

  containerEl.addEventListener('dblclick', (e) => {
    const nextState = initialState;
    this.setState(nextState);
  });

  this.setState = (nextState) => {
    this.state = nextState;
    timer.setState(nextState);
  };

  const timer = new Timer({ targetEl: containerEl, initialState });

  targetEl.appendChild(containerEl);
}
