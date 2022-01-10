import Table from './components/Table.js';
import Total from './components/Total.js';

export default function App({ mainEl }) {
  const containerEl = document.createElement('div');
  const initialState = '';
  this.state = initialState;

  const total = new Total({ targetEl: containerEl, initialState: this.state });

  const onNumberClick = (text) => {
    this.state += text;
    total.setState(this.state);
  };
  const onCountClick = () => {
    const result = eval(this.state);
    total.setState(result);
  };
  const onClearClick = () => {
    this.state = '';
    total.setState(this.state);
  };

  new Table({
    targetEl: containerEl,
    onNumberClick,
    onCountClick,
    onClearClick,
  });
  mainEl.appendChild(containerEl);
}
