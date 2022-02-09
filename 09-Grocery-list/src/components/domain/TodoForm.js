import { GoogleIcon, Input } from '../base/index.js';

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

  new GoogleIcon({
    targetEl: todoFormEl,
    className: 'material-icons',
    name: 'edit',
    onClick: onClearStorage,
  });

  new Input({ targetEl: todoFormEl });

  targetEl.appendChild(todoFormEl);
}
