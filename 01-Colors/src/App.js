import { Button } from './components/index.js';

export default function App({ targetEl, initialState }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  this.state = initialState;
  const colorArray = [
    'white',
    'black',
    'orange',
    'green',
    'red',
    'yellowgreen',
    'purple',
  ];

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
