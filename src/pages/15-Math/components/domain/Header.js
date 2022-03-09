import { Text } from '../base/index.js';
import mathStyle from '../../style/style.css';

export default function Header({ targetEl, onClick, state }) {
  const headerEl = document.createElement('header');
  headerEl.className = mathStyle.header;
  const navEl = document.createElement('nav');

  const operation = {
    ADD: '+',
    SUBTRACT: '-',
    MULTIPLY: '*',
    DIVIDE: '/',
  };

  new Text({ targetEl: headerEl, text: 'MATH 4 KIDS' });
  new Text({ targetEl: navEl, text: 'ADD', onClick });
  new Text({ targetEl: navEl, text: 'SUBTRACT', onClick });
  new Text({ targetEl: navEl, text: 'MULTIPLY', onClick });
  new Text({ targetEl: navEl, text: 'DIVIDE', onClick });

  headerEl.appendChild(navEl);

  targetEl.appendChild(headerEl);
}
