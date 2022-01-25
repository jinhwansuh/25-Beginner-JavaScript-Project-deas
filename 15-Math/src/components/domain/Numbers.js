export default function Numbers({ targetEl, initialState }) {
  const numbersEl = document.createElement('div');
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    numbersEl.innerHTML = `
      1, 2, 3
    `;
  };

  this.render();

  targetEl.appendChild(numbersEl);
}
