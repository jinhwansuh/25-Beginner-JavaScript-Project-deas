import { Image, Text } from '../base/index.js';
import wikiStyle from '../../style/style.css';

export default function Item({ targetEl, data, handleItemClick }) {
  const itemEl = document.createElement('div');
  itemEl.className = wikiStyle.item;

  const { pageid, thumbnail, title } = data;

  itemEl.addEventListener('click', (e) => {
    handleItemClick(pageid);
  });

  thumbnail ? new Image({ targetEl: itemEl, imageUrl: thumbnail.source }) : '';
  new Text({ targetEl: itemEl, text: title });

  targetEl.appendChild(itemEl);
}
