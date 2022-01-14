import { Text, Input, Button } from '../base/index.js';

export default function CreateCard({
  targetEl,
  onSaveClick,
  onCloseClick,
  onChange,
}) {
  const createCardEl = document.createElement('div');

  new Text({ targetEl: createCardEl, text: 'Create Flashcard' });
  new Input({ targetEl: createCardEl, state: 'Question', onChange });
  new Input({ targetEl: createCardEl, state: 'Answer', onChange });
  new Button({ targetEl: createCardEl, state: 'Save', onClick: onSaveClick });
  new Button({ targetEl: createCardEl, state: 'Close', onClick: onCloseClick });

  targetEl.appendChild(createCardEl);
}
