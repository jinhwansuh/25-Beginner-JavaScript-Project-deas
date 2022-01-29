import { Header, Table, Numbers } from './components/domain/index.js';
import { createRandomTwoNumber, randomNumber } from './utils/random.js';

export default function App({ targetEl }) {
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
    const audio = new Audio('./src/assets/wrong.mp3');
    audio.loop = false;
    audio.play();
  };

  new Header({
    targetEl,
    onClick: onCalculationClick,
    state: this.state.calculation,
  });

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

  targetEl.appendChild(containerEl);
}
