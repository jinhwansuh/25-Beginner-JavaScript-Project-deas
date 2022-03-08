import { colorArray } from './assets/colors.js';
import { Button } from './components/index.js';
import './style/style.css';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';
  const initialState = 0;

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const onChangeColor = () => {
    const randomIndex = parseInt(Math.random() * (colorArray.length + 1), 10);
    const nextState =
      randomIndex !== this.state
        ? randomIndex
        : parseInt(Math.random() * (colorArray.length + 1), 10);
    this.setState(nextState);
  };

  new Button({
    targetEl: containerEl,
    onClick: onChangeColor,
  });

  this.render = () => {
    containerEl.style.background = colorArray[this.state];
  };

  this.render();

  targetEl.appendChild(containerEl);
}
