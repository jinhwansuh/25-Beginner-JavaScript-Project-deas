import { Image, Text } from '../base/index.js';

export default function Item({ targetEl, data }) {
  const itemEl = document.createElement('div');
  const { pageid, thumbnail, title } = data;

  itemEl.addEventListener('click', (e) => {
    window.open(`https://en.wikipedia.org/?curid=${pageid}`);
  });

  thumbnail ? new Image({ targetEl: itemEl, imageUrl: thumbnail.source }) : '';
  new Text({ targetEl: itemEl, text: title });

  targetEl.appendChild(itemEl);
}
