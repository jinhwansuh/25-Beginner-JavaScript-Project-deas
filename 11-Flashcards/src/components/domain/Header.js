import { Text, Button } from '../base/index.js';

export default function Header({ targetEl, onAddClick, onDeleteClick }) {
  const headerEl = document.createElement('header');

  new Text({ targetEl: headerEl, tag: 'h1', text: 'Flashcards' });
  new Button({ targetEl: headerEl, state: 'Add Card', onClick: onAddClick });
  new Button({
    targetEl: headerEl,
    state: 'Del Cards',
    onClick: onDeleteClick,
  });

  targetEl.appendChild(headerEl);
}
