import { Text } from '../base/index.js';
import flashCardsStyle from '../../style/style.css';

export default function CardItem({ targetEl, state }) {
  const cardItemEl = document.createElement('div');
  cardItemEl.className = flashCardsStyle.card;

  cardItemEl.addEventListener('click', (e) => {
    const answerEl = cardItemEl.querySelector('.answer');
    const displayState = answerEl.style.display;
    answerEl.style.display = displayState === 'block' ? 'none' : 'block';
  });

  new Text({
    targetEl: cardItemEl,
    className: flashCardsStyle.question,
    tag: 'h2',
    text: state.question,
  });
  new Text({
    targetEl: cardItemEl,
    className: flashCardsStyle.answer,
    tag: 'p',
    text: state.answer,
    display: 'none',
  });

  targetEl.appendChild(cardItemEl);
}
