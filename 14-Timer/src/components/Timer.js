export default function Timer({ targetEl, initialState }) {
  const timerEl = document.createElement('div');
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    timerEl.innerHTML = `
      ${this.state}
    `;
  };

  this.render();

  targetEl.appendChild(timerEl);
}
