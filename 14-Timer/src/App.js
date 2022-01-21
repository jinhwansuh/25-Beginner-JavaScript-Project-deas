import { Timer } from './components/index.js';

export default function App({ mainEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';
  const initialState = 0;
  this.state = initialState;

  containerEl.addEventListener('click', (e) => {
    console.log(123);
    // 시작하고 멈추는 로직
  });

  this.setState = (nextState) => {
    this.state = nextState;
    timer.setState(nextState);
  };

  const startTime = new Date();
  const endTime = 1;
  const stopTime = 2;

  const timer = new Timer({ targetEl: containerEl, initialState: this.state });

  mainEl.appendChild(containerEl);
}
