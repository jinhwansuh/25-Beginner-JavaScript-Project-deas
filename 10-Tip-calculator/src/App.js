import { Input, SelectBox, Button } from './components/index.js';
import { calculateTip } from './utils/calculate.js';

export default function App({ targetEl, initialState }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

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
      alert(calculateTip(amount, quality, guests).toFixed(2));
      this.setState(initialState);
    }
  };

  const billAmountInput = new Input({
    targetEl: containerEl,
    state: 'amount',
    children: 'Bill Amount',
    initialState,
    onChange,
  });
  const guestsInput = new Input({
    targetEl: containerEl,
    state: 'guests',
    children: 'Number of Guests',
    initialState,
    onChange,
  });
  const selectBox = new SelectBox({
    targetEl: containerEl,
    state: 'quality',
    onChange,
  });
  new Button({ targetEl: containerEl, state: 'Calculate', onClick });

  targetEl.appendChild(containerEl);
}
