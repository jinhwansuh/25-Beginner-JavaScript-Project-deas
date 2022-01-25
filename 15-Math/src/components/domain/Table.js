export default function Table({ targetEl, initialState }) {
  const tableEl = document.createElement('div');

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    tableEl.innerHTML = `
      <div>${this.state.number1}</div>
      ${this.state.calculation}
      <div>${this.state.number2}</div>
    `;
  };

  this.render();

  targetEl.appendChild(tableEl);
}
