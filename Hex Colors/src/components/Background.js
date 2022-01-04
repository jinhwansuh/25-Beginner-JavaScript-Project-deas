import Button from './Button.js';
import Text from './Text.js';

export default function Background({ mainEl, initialState, randomColor }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

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
