import { Total, Table } from './components/domain/index.js';
import calculatorStyle from './style/style.css';

export default function App({ targetEl }) {
  targetEl.className = calculatorStyle.main;
  const containerEl = document.createElement('div');
  containerEl.className = calculatorStyle.container;
  const initialState = '';

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    total.setState(nextState);
  };

  const onNumberClick = (text) => {
    const nextState = this.state + text;
    this.setState(nextState);
  };
  const onCountClick = () => {
    const nextState = eval(this.state);
    this.setState(nextState);
  };
  const onClearClick = () => {
    const nextState = initialState;
    this.setState(nextState);
  };

  const total = new Total({ targetEl: containerEl, initialState });

  new Table({
    targetEl: containerEl,
    onNumberClick,
    onCountClick,
    onClearClick,
  });
  targetEl.appendChild(containerEl);
}
