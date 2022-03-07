import { Text, Label, Input, Button } from '../base/index.js';

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

  new Text({ targetEl: createCardEl, tag: 'h1', text: 'Create Flashcard' });
  new Label({ targetEl: createCardEl, text: 'Question', state: 'question' });
  new Input({ targetEl: createCardEl, state: 'question', onChange });
  new Label({ targetEl: createCardEl, text: 'Answer', state: 'question' });
  new Input({ targetEl: createCardEl, state: 'answer', onChange });
  new Button({ targetEl: createCardEl, state: 'Save', onClick: onSaveClick });
  new Button({ targetEl: createCardEl, state: 'Close', onClick: onCloseClick });

  this.render = () => {
    createCardEl.style.display = this.state ? 'block' : 'none';
  };
  this.render();

  targetEl.appendChild(createCardEl);
}
