import { Text } from '../base/index.js';

export default function Header({ targetEl }) {
  const headerEl = document.createElement('header');

  new Text({ targetEl: headerEl, tag: 'h1', text: 'Quiz Pro' });

  targetEl.appendChild(headerEl);
}
