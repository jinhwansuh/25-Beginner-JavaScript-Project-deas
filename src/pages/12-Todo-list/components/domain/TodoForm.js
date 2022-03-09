import { Button, Input } from '../base/index.js';

export default function TodoForm({ targetEl, onSubmit }) {
  const todoFormEl = document.createElement('form');

  todoFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const targetEl = e.target;
    const inputEl = targetEl.querySelector('input');

    if (inputEl.value) {
      onSubmit(inputEl.value);
      inputEl.value = '';
    }
  });

  new Input({ targetEl: todoFormEl, placeholderText: 'I need to...' });
  new Button({
    targetEl: todoFormEl,
    type: 'submit',
    children: 'Submit',
  });

  targetEl.appendChild(todoFormEl);
}
