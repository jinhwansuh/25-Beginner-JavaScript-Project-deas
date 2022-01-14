import { Button, Count, Text } from './components/index.js';

export default function App({ mainEl, initialState }) {
  const containerEl = document.createElement('div');
  const buttonEl = document.createElement('div');
  containerEl.className = 'container';

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
  mainEl.appendChild(containerEl);
}
