import { Text } from '../base/index.js';
import TodoForm from './TodoForm.js';
import todoListStyle from '../../style/style.css';

export default function Header({ targetEl, onSubmit }) {
  const headerEl = document.createElement('header');
  headerEl.className = todoListStyle.header;

  new Text({ targetEl: headerEl, text: 'To-do List' });
  new TodoForm({ targetEl: headerEl, onSubmit });

  targetEl.appendChild(headerEl);
}
