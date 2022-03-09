import Text from '../base/Text.js';

export default function QuoteWrapper({ targetEl, initialState }) {
  const quoteEl = document.createElement('div');
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    console.log(this.state);

    for (let i = 0; i < this.state.length; i++) {
      setTimeout(() => {
        return (quoteEl.innerHTML += this.state[i]);
      }, 100);
    }
  };

  this.render();

  targetEl.appendChild(quoteEl);
}
