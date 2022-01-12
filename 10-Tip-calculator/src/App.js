import Button from './components/Button.js';
import Input from './components/Input.js';
import SelectBox from './components/SelectBox.js';

export default function App({ mainEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  const initialState = {
    amount: '',
    guests: '',
    quality: '',
  };

  this.state = initialState;

  const onChange = (state) => {
    const nextState = { ...this.state, ...state };
    this.state = nextState;
  };

  const onClick = () => {
    const { amount, guests, quality } = this.state;
    if (amount && guests && quality) {
      const tip = (+amount * (+quality / 100)) / +guests;
      alert(tip.toFixed(2));
    }
  };

  new Input({
    targetEl: containerEl,
    state: 'amount',
    children: 'Bill Amount',
    onChange,
  });
  new Input({
    targetEl: containerEl,
    state: 'guests',
    children: 'Number of Guests',
    onChange,
  });
  new SelectBox({ targetEl: containerEl, state: 'quality', onChange });
  new Button({ targetEl: containerEl, state: 'Caculate', onClick });

  mainEl.appendChild(containerEl);
}
