import { getSessionstorage, setSessionStorage } from '../utils/storage.js';
import InputForm from './InputForm.js';
import NewText from './NewText.js';
import Text from './Text.js';

export default function Board({ containerEl, initialState }) {
  const boardEl = document.createElement('div');
  boardEl.className = 'board';

  const onSubmit = (text) => {
    setSessionStorage(text);
    const nextState = getSessionstorage();
    newText.setState(nextState);
  };

  new Text({ boardEl }, '하이');
  new Text({ boardEl }, 'Enter a message');
  new InputForm({ boardEl, onSubmit });
  const newText = new NewText({ boardEl, initialState });

  containerEl.appendChild(boardEl);
}
