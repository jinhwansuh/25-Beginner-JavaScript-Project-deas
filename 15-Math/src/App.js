import { Header, Table, Numbers } from './components/domain/index.js';
import { createRandomTwoNumber, randomNumber } from './utils/random.js';

export default function App({ mainEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  this.state = {
    number1: randomNumber(),
    number2: randomNumber(),
    calculation: '+',
  };

  this.setState = (nextState) => {
    this.state = nextState;
    table.setState(nextState);
    numbers.setState(nextState);
  };

  const onCalculationClick = (calculation) => {
    switch (calculation) {
      case 'ADD':
        this.setState({ ...createRandomTwoNumber(), calculation: '+' });
        break;
      case 'SUBTRACT':
        this.setState({ ...createRandomTwoNumber(), calculation: '-' });
        break;
      case 'MULTIPLY':
        this.setState({ ...createRandomTwoNumber(), calculation: '*' });
        break;
      case 'DIVIDE':
        this.setState({ ...createRandomTwoNumber(), calculation: '/' });
        break;

      default:
        break;
    }
  };

  const onAnswerClick = (number) => {
    this.setState({ ...this.state, ...createRandomTwoNumber() });
  };
  const onWrongClick = (number) => {
    console.log('fail');
  };

  new Header({ targetEl: mainEl, onClick: onCalculationClick });

  const table = new Table({
    targetEl: containerEl,
    initialState: this.state,
  });

  const numbers = new Numbers({
    targetEl: containerEl,
    initialState: this.state,
    onAnswerClick,
    onWrongClick,
  });

  // add
  // subtract
  // multiply
  // divide

  mainEl.appendChild(containerEl);
}
