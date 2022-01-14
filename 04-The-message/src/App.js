import { Text, InputForm, NewText } from './components/index.js';
import { getSessionstorage, setSessionStorage } from './utils/storage.js';

export default function App({ mainEl, initialState }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  const onSubmit = (text) => {
    setSessionStorage(text);
    const nextState = getSessionstorage();
    newText.setState(nextState);
  };

  new Text({ targetEl: containerEl, text: 'Pass the message' });
  new Text({ targetEl: containerEl, text: 'Enter a message' });
  new InputForm({ targetEl: containerEl, onSubmit });
  const newText = new NewText({ targetEl: containerEl, initialState });

  mainEl.appendChild(containerEl);
}
