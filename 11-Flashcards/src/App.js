import { Header, CreateCard, CardsList } from './components/domain/index.js';
import { getSessionStorage, setSesstionStorage } from './utils/storage.js';

export default function App({ mainEl }) {
  const containerEl = document.createElement('div');
  this.state = getSessionStorage();
  const initialInputState = {
    Question: '',
    Answer: '',
  };
  this.inputState = initialInputState;

  this.setState = (nextState) => {
    this.state = nextState;
    setSesstionStorage(this.state);
  };
  this.setInputState = (state) => {
    const nextInputState = { ...inputState, ...state };
    console.log();
  };

  const onDeleteClick = () => {
    const nextState = [];
    this.setState(nextState);
  };

  const onAddClick = () => {};

  const onSaveClick = (card) => {
    const nextState = [...this.state, card];
    this.setState(nextState);
  };
  const onCloseClick = () => {};

  const onChange = (state) => {};

  new Header({ targetEl: containerEl, onAddClick, onDeleteClick });
  new CreateCard({
    targetEl: containerEl,
    onChange,
    onSaveClick,
    onCloseClick,
  });
  new CardsList({ targetEl: containerEl, initialState: this.state });

  mainEl.appendChild(containerEl);
}
