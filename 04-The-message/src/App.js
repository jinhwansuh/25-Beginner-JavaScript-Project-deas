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

  new Text({ containerEl }, 'Pass the message');
  new Text({ containerEl }, 'Enter a message');
  new InputForm({ containerEl, onSubmit });
  const newText = new NewText({ containerEl, initialState });

  mainEl.appendChild(containerEl);
}
