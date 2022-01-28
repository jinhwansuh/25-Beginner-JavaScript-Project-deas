import { Image } from '../base/index.js';
import Details from './Details.js';

export default function Card({ targetEl, state }) {
  const cardEl = document.createElement('div');
  cardEl.className = 'card';

  const { link, imageUrl, title, description, color } = state;

  // props :
  // 링크, 이미지, Title, 설명, Style (backgroundColor)
  // link, imageUrl, title, description, style

  cardEl.addEventListener('click', (e) => {
    console.log('click');
    // window.location.href = link;
  });

  new Image({
    targetEl: cardEl,
    imageUrl,
  });
  new Details({ targetEl: cardEl, title, description, color });

  targetEl.appendChild(cardEl);
}
