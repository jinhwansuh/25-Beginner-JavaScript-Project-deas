import { Text, Input, Button } from '../base/index.js';

export default function CreateCard({
  targetEl,
  onSaveClick,
  onCloseClick,
  onChange,
}) {
  const createCardEl = document.createElement('div');
  createCardEl.className = 'create-card';
  this.state = false;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  new Text({ targetEl: createCardEl, text: 'Create Flashcard' });
  new Input({ targetEl: createCardEl, state: 'Question', onChange });
  new Input({ targetEl: createCardEl, state: 'Answer', onChange });
  new Button({ targetEl: createCardEl, state: 'Save', onClick: onSaveClick });
  new Button({ targetEl: createCardEl, state: 'Close', onClick: onCloseClick });

  this.render = () => {
    createCardEl.style.display = this.state ? 'block' : 'none';
  };
  this.render();

  targetEl.appendChild(createCardEl);
}
