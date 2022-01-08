export default function Number({ targetEl, initialState }) {
  const numberEl = document.createElement('h1');

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    numberEl.innerHTML = `${this.state}`;
  };
  this.render();

  targetEl.appendChild(numberEl);
}
