export default function Total({ targetEl, initialState }) {
  const totalEl = document.createElement('div');
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    totalEl.innerHTML = `${this.state}`;
  };

  this.render();

  targetEl.appendChild(totalEl);
}
