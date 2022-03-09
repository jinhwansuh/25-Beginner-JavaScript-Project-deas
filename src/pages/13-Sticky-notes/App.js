import { Header, NoteLists, ModalForm } from './components/domain/index.js';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');
  const initialState = [];

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    noteLists.setState(nextState);
  };

  const onAddClick = () => {
    modalForm.setState(true);
  };
  const onCloseClick = () => {
    modalForm.setState(false);
  };
  const onSubmit = (text) => {
    const nextState = [...this.state, text];
    this.setState(nextState);
  };
  const modalForm = new ModalForm({ targetEl, onSubmit, onCloseClick });
  new Header({ targetEl, onClick: onAddClick });
  const noteLists = new NoteLists({ targetEl: containerEl, initialState });

  targetEl.appendChild(containerEl);
}
