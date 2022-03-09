import home from '../../style/style.css';
import { Text } from '../base/index.js';

export default function Details({ targetEl, title, description, color }) {
  const detailsEl = document.createElement('div');
  detailsEl.className = home.details;
  detailsEl.style.backgroundColor = color;

  new Text({ targetEl: detailsEl, tag: 'h1', text: title });
  new Text({
    targetEl: detailsEl,
    tag: 'p',
    text: description,
  });

  targetEl.appendChild(detailsEl);
}
