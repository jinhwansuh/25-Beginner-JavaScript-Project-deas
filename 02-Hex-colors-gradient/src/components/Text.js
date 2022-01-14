export default function Text({ targetEl, initialState }) {
  const textEl = document.createElement('div');
  textEl.className = 'text';

  textEl.style.animation = 'colorchange 5s infinite alternate';

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    textEl.innerHTML = `
      <div>CLICK THE BUTTON BELLOW TO GENERATE A RANDOM GRADIENT HEX COLOR COMBINATION</div>
      background: linear-gradient(to right, ${this.state.color1}, ${this.state.color2})
    `;
  };

  this.render();

  targetEl.appendChild(textEl);
}
