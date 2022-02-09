import { Text } from '../base/index.js';

export default function CardItem({ targetEl, state }) {
  const cardItemEl = document.createElement('div');
  cardItemEl.className = 'card';

  cardItemEl.addEventListener('click', (e) => {});

  new Text({
    targetEl: cardItemEl,
    className: 'question',
    tag: 'p',
    text: state.question,
  });
  new Text({
    targetEl: cardItemEl,
    className: 'answer',
    tag: 'p',
    text: state.answer,
    display: 'none',
  });

  targetEl.appendChild(cardItemEl);
}
