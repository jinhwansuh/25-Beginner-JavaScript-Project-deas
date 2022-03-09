import calculatorStyle from '../../style/style.css';

export default function Total({ targetEl, initialState }) {
  const totalEl = document.createElement('div');
  totalEl.className = calculatorStyle.total;

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
