import { Button, Text } from './components/index.js';

export default function App({ mainEl, initialState }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const randomColor = () =>
    '#' + Math.round(Math.random() * 0xffffff).toString(16);

  const text = new Text({
    containerEl,
    initialState,
  });

  new Button({
    containerEl,
    onClick: () => {
      const nextState = { color1: randomColor(), color2: randomColor() };
      text.setState(nextState);
      this.setState(nextState);
    },
  });

  this.render = () => {
    containerEl.style.background = `linear-gradient(to right, ${this.state.color1}, ${this.state.color2})`;
  };

  mainEl.appendChild(containerEl);
}
