import { Button, Number, Text } from './components/index.js';

export default function App({ mainEl, initialState }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';
  this.state = initialState;

  const onIncrease = () => {
    const nextState = this.state + 1;
    this.state = nextState;
    number.setState(nextState);
  };
  const onDecrease = () => {
    const nextState = this.state - 1;
    this.state = nextState;
    number.setState(nextState);
  };

  new Text({ targetEl: containerEl });
  const number = new Number({ targetEl: containerEl, initialState });
  new Button({ targetEl: containerEl, onChange: onIncrease }, 'increase');
  new Button({ targetEl: containerEl, onChange: onDecrease }, 'decrease');

  mainEl.appendChild(containerEl);
}
