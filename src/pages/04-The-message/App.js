import { Text, InputForm, NewText } from './components/index.js';
import { getSessionstorage, setSessionStorage } from './utils/storage.js';
import theMessageStyle from './style/style.css';

export default function App({ targetEl }) {
  targetEl.className = theMessageStyle.main;
  const containerEl = document.createElement('div');
  containerEl.className = theMessageStyle.container;
  const initialState = '';

  const onSubmit = (text) => {
    setSessionStorage(text);
    const nextState = getSessionstorage();
    newText.setState(nextState);
  };

  new Text({ targetEl: containerEl, tag: 'h3', text: 'Pass the message' });
  new Text({ targetEl: containerEl, tag: 'label', text: 'Enter a message' });
  new InputForm({ targetEl: containerEl, onSubmit });
  const newText = new NewText({ targetEl: containerEl, initialState });

  targetEl.appendChild(containerEl);
}
