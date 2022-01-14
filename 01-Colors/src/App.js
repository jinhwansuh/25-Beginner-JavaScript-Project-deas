import { Button } from './components/index.js';

export default function App({ mainEl, initialState }) {
  const containerEl = document.createElement('div');
  this.state = initialState;
  const colorArray = [
    'black',
    'orange',
    'green',
    'red',
    'yellowgreen',
    'purple',
  ];

  containerEl.style.background = this.state;

  new Button({
    containerEl,
    onChangeColor: () => {
      const random = parseInt(Math.random() * (colorArray.length + 1), 10);
      containerEl.style.background = colorArray[random];
    },
  });

  mainEl.appendChild(containerEl);
}
