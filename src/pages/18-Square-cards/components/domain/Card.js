import home from '../../style/style.css';
import { Image } from '../base/index.js';
import Details from './Details.js';

export default function Card({ targetEl, state, onItemClick }) {
  const cardEl = document.createElement('div');
  cardEl.className = home.card;

  const { link, imageUrl, title, description, color } = state;

  cardEl.addEventListener('click', (e) => {
    onItemClick(link);
  });

  new Image({
    targetEl: cardEl,
    imageUrl,
  });
  new Details({ targetEl: cardEl, title, description, color });

  targetEl.appendChild(cardEl);
}
