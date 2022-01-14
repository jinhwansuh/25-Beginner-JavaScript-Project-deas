import { Text, Button } from '../base/index.js';

export default function CreateCard({ targetEl, onSaveClick, onCloseClick }) {
  const createCardEl = document.createElement('div');

  new Text({ targetEl: createCardEl, text: 'Create Flashcard' });
  new Button({ targetEl: createCardEl, state: 'Save', onClick: onSaveClick });
  new Button({ targetEl: createCardEl, state: 'Close', onClick: onCloseClick });

  targetEl.appendChild(createCardEl);
}
