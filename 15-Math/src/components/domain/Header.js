import { Text } from '../base/index.js';

export default function Header({ targetEl, onClick }) {
  const headerEl = document.createElement('header');
  const navEl = document.createElement('nav');

  new Text({ targetEl: headerEl, text: 'MATH 4 KIDS' });
  new Text({ targetEl: navEl, text: 'ADD', onClick });
  new Text({ targetEl: navEl, text: 'SUBTRACT', onClick });
  new Text({ targetEl: navEl, text: 'MULTIPLY', onClick });
  new Text({ targetEl: navEl, text: 'DIVIDE', onClick });

  headerEl.appendChild(navEl);

  targetEl.appendChild(headerEl);
}
