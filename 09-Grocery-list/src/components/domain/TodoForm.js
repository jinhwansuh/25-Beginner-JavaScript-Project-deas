import { Button, Input } from '../base/index.js';

export default function TodoForm({ targetEl, onSubmit, onClearStorage }) {
  const todoFormEl = document.createElement('form');

  todoFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputEl = todoFormEl.querySelector('input');
    const value = inputEl.value;
    if (value) {
      onSubmit(value);
      inputEl.value = '';
    }
  });

  new Button({
    targetEl: todoFormEl,
    text: '지우기',
    type: 'button',
    onClick: onClearStorage,
  });

  new Input({ targetEl: todoFormEl });

  new Button({
    targetEl: todoFormEl,
    text: 'Add',
    type: 'submit',
  });

  targetEl.appendChild(todoFormEl);
}
