import { Text, Button } from '../base/index.js';

export default function Header({ targetEl, onAddClick, onDeleteClick }) {
  const headerEl = document.createElement('header');
  const buttonWrapperEl = document.createElement('div');

  new Text({ targetEl: headerEl, tag: 'h1', text: 'Flashcards' });
  new Button({
    targetEl: buttonWrapperEl,
    state: 'Add Card',
    onClick: onAddClick,
  });
  new Button({
    targetEl: buttonWrapperEl,
    state: 'Del Cards',
    onClick: onDeleteClick,
  });

  headerEl.appendChild(buttonWrapperEl);
  targetEl.appendChild(headerEl);
}
