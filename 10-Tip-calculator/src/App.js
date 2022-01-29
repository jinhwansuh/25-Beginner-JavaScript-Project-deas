import { Input, SelectBox, Button } from './components/index.js';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  const initialState = {
    amount: '',
    guests: '',
    quality: '',
  };

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    input1.setState(nextState);
    input2.setState(nextState);
    selectBox.render();
  };

  const onChange = (state) => {
    const nextState = { ...this.state, ...state };
    this.state = nextState;
  };

  const onClick = () => {
    const { amount, guests, quality } = this.state;
    if (amount && guests && quality) {
      const tip = (+amount * (+quality / 100)) / +guests;
      alert(tip.toFixed(2));
      this.setState(initialState);
    }
  };

  const input1 = new Input({
    targetEl: containerEl,
    state: 'amount',
    children: 'Bill Amount',
    initialState: this.state,
    onChange,
  });
  const input2 = new Input({
    targetEl: containerEl,
    state: 'guests',
    children: 'Number of Guests',
    initialState: this.state,
    onChange,
  });
  const selectBox = new SelectBox({
    targetEl: containerEl,
    state: 'quality',
    onChange,
  });
  new Button({ targetEl: containerEl, state: 'Caculate', onClick });

  targetEl.appendChild(containerEl);
}
