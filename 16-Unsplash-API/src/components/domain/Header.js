import { Text, Form } from '../base/index.js';

export default function Header({ targetEl, onSubmit }) {
  const headerEl = document.createElement('header');

  new Text({ targetEl: headerEl, text: 'Unsplash API Demo' });
  new Form({ targetEl: headerEl, onSubmit });

  targetEl.appendChild(headerEl);
}
