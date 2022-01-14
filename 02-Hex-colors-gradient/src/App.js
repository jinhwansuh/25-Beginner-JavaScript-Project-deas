import { Button, Text } from './components/index.js';
import { randomColor } from './utils/random.js';

export default function App({ mainEl, initialState }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    text.setState(this.state);
    this.render();
  };

  const text = new Text({
    targetEl: containerEl,
    initialState,
  });

  new Button({
    targetEl: containerEl,
    onClick: () => {
      const nextState = { color1: randomColor(), color2: randomColor() };
      this.setState(nextState);
    },
  });

  this.render = () => {
    containerEl.style.background = `linear-gradient(to right, ${this.state.color1}, ${this.state.color2})`;
  };

  mainEl.appendChild(containerEl);
}
