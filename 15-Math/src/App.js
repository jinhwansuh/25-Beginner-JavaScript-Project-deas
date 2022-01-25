import { Header, Table } from './components/domain/index.js';
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
    table.setState(this.state);
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

  new Header({ targetEl: mainEl, onClick: onCalculationClick });

  const table = new Table({
    targetEl: containerEl,
    initialState: this.state,
  });

  // add
  // subtract
  // multiply
  // divide

  mainEl.appendChild(containerEl);
}
