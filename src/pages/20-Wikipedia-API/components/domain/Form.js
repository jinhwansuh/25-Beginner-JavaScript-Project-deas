import { Input } from '../base/index.js';

export default function Form({ targetEl, onSubmit }) {
  const formEl = document.createElement('form');

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputEl = formEl.querySelector('input');
    const value = inputEl.value.trim();

    if (value) onSubmit(value);
  });

  new Input({ targetEl: formEl, placeholder: 'Search Wikipedia...' });

  targetEl.appendChild(formEl);
}
