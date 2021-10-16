import Button from './Button.js';
import Text from './Text.js';

export default function Background({ mainEl }) {
  this.state = ['#ffffff', '#ffffff'];
  const containerEl = document.createElement('div');
  containerEl.className = 'contanier';
  this.setState = (nextState) => {
    this.state = nextState;
  };

  const text = new Text({
    containerEl,
    initialState: this.state,
  });

  new Button({
    containerEl,
    onChangeColor: () => {
      console.log(11);
    },
  });

  mainEl.appendChild(containerEl);
}
