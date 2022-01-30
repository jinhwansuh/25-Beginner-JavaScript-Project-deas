import { Image } from '../base/index.js';
import Details from './Details.js';

export default function Card({ targetEl, state }) {
  const cardEl = document.createElement('div');
  cardEl.className = 'card';

  const { link, imageUrl, title, description, color } = state;

  cardEl.addEventListener('click', (e) => {
    window.location.href = link;
  });

  new Image({
    targetEl: cardEl,
    imageUrl,
  });
  new Details({ targetEl: cardEl, title, description, color });

  targetEl.appendChild(cardEl);
}
