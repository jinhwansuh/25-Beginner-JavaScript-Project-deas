import { Image, Text } from '../base/index.js';

export default function Item({ targetEl, data, handleItemClick }) {
  const itemEl = document.createElement('div');
  itemEl.className = 'item';

  const { pageid, thumbnail, title } = data;

  itemEl.addEventListener('click', (e) => {
    handleItemClick(pageid);
  });

  thumbnail ? new Image({ targetEl: itemEl, imageUrl: thumbnail.source }) : '';
  new Text({ targetEl: itemEl, text: title });

  targetEl.appendChild(itemEl);
}
