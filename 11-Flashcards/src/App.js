import { Header, CreateCard, CardsList } from './components/domain/index.js';
import { getSessionStorage, setSesstionStorage } from './utils/storage.js';

export default function App({ mainEl }) {
  const containerEl = document.createElement('div');
  const initialState = getSessionStorage();
  const initialInputState = {
    Question: '',
    Answer: '',
  };

  this.state = initialState;
  this.inputState = initialInputState;

  this.setState = (nextState) => {
    this.state = nextState;
    setSesstionStorage(this.state);
    cardList.setState(this.state);
  };
  this.setInputState = (nextInputState) => {
    this.inputState = nextInputState;
  };

  const onChange = (state, value) => {
    const nextInputState = { ...this.inputState, [state]: value };
    this.setInputState(nextInputState);
  };

  const onDeleteClick = () => {
    const nextState = [];
    this.setState(nextState);
  };

  const onAddClick = () => {
    createdCard.setState(true);
  };

  const onSaveClick = () => {
    const targetList = document.querySelectorAll('input');
    targetList.forEach((target) => (target.value = ''));
    const nextState = [...this.state, this.inputState];
    this.setState(nextState);
    this.setInputState(initialInputState);
  };
  const onCloseClick = () => {
    createdCard.setState(false);
  };

  new Header({ targetEl: containerEl, onAddClick, onDeleteClick });
  const createdCard = new CreateCard({
    targetEl: containerEl,
    onChange,
    onSaveClick,
    onCloseClick,
  });
  const cardList = new CardsList({
    targetEl: containerEl,
    initialState: this.state,
  });

  mainEl.appendChild(containerEl);
}
