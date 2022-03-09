import { Input, Text, Toast, SelectBox, Button } from './components/index.js';
import { calculateTip } from './utils/calculate.js';
import tipCalculatorStyle from './style/style.css';

export default function App({ targetEl }) {
  targetEl.className = tipCalculatorStyle.main;
  const containerEl = document.createElement('div');
  containerEl.className = tipCalculatorStyle.container;
  const initialState = {
    amount: '',
    guests: '',
    quality: '',
  };

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    billAmountInput.setState(nextState);
    guestsInput.setState(nextState);
    selectBox.render();
  };

  const onChange = (state) => {
    const nextState = { ...this.state, ...state };
    this.state = nextState;
  };

  const onClick = () => {
    const { amount, guests, quality } = this.state;
    if (amount && guests && quality) {
      toast.render(calculateTip(amount, quality, guests).toFixed(2));
      this.setState(initialState);
    }
  };

  const toast = new Toast({ time: 3000 });
  new Text({ targetEl: containerEl, tag: 'h3', text: 'Tip Calculator' });
  const billAmountInput = new Input({
    targetEl: containerEl,
    initialState,
    state: 'amount',
    children: 'Bill Amount',
    iconName: 'attach_money',
    onChange,
  });
  const guestsInput = new Input({
    targetEl: containerEl,
    initialState,
    state: 'guests',
    children: 'Number of Guests',
    iconName: 'person',
    onChange,
  });
  const selectBox = new SelectBox({
    targetEl: containerEl,
    state: 'quality',
    children: 'Service Quality',
    onChange,
  });
  new Button({ targetEl: containerEl, state: 'Calculate', onClick });

  targetEl.appendChild(containerEl);
}
