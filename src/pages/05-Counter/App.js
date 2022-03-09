import { Button, Count, Text } from './components/index.js';
import counterStyle from './style/style.css';

export default function App({ targetEl }) {
  targetEl.className = counterStyle.main;
  const containerEl = document.createElement('div');
  const buttonEl = document.createElement('div');
  containerEl.className = counterStyle.container;

  const initialState = 0;

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    number.setState(this.state);
  };

  const onIncrease = () => {
    const nextState = this.state + 1;
    this.setState(nextState);
  };
  const onDecrease = () => {
    const nextState = this.state - 1;
    this.setState(nextState);
  };

  new Text({ targetEl: containerEl });
  const number = new Count({ targetEl: containerEl, initialState });
  new Button({ targetEl: buttonEl, onChange: onIncrease, state: 'Increase' });
  new Button({ targetEl: buttonEl, onChange: onDecrease, state: 'Decrease' });

  containerEl.appendChild(buttonEl);
  targetEl.appendChild(containerEl);
}
