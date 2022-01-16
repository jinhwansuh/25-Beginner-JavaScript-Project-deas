import { Text } from '../base/index.js';
import TodoForm from './TodoForm.js';

export default function Header({ targetEl, onSubmit }) {
  const headerEl = document.createElement('header');

  new Text({ targetEl: headerEl, text: 'To-do List' });
  new TodoForm({ targetEl: headerEl, onSubmit });

  targetEl.appendChild(headerEl);
}
