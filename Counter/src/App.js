import { Button, Count, Text } from './components/index.js';

export default function App({ mainEl, initialState }) {
  const containerEl = document.createElement('div');
  const counterEl = document.createElement('div');
  const buttonEl = document.createElement('div');
  containerEl.className = 'container';
  counterEl.className = 'counter';
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

  new Text({ targetEl: counterEl });
  const number = new Count({ targetEl: counterEl, initialState });
  new Button({ targetEl: buttonEl, onChange: onIncrease, state: 'Increase' });
  new Button({ targetEl: buttonEl, onChange: onDecrease, state: 'Decrease' });

  counterEl.appendChild(buttonEl);
  containerEl.appendChild(counterEl);
  mainEl.appendChild(containerEl);
}
