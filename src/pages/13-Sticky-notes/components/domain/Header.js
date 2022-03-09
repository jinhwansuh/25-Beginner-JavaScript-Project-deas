import { Text, Button } from '../base/index.js';
import stickyNotesStyle from '../../style/style.css';

export default function Header({ targetEl, onClick }) {
  const headerEl = document.createElement('header');
  headerEl.className = stickyNotesStyle.header;

  new Text({ targetEl: headerEl, tag: 'h1', text: 'Sticky Notes' });
  new Button({ targetEl: headerEl, text: 'Add Note', onClick });

  targetEl.appendChild(headerEl);
}
