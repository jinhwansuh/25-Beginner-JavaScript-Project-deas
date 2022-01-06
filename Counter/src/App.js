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

  new Text({ containerEl });
  const number = new Number({ containerEl, initialState });
  new Button({ containerEl, onChange: onIncrease }, 'increase');
  new Button({ containerEl, onChange: onDecrease }, 'decrease');

  mainEl.appendChild(containerEl);
}
