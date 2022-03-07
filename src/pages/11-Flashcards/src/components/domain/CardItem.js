import { Text } from '../base/index.js';

export default function CardItem({ targetEl, state }) {
  const cardItemEl = document.createElement('div');
  cardItemEl.className = 'card';

  cardItemEl.addEventListener('click', (e) => {
    const answerEl = cardItemEl.querySelector('.answer');
    const displayState = answerEl.style.display;
    answerEl.style.display = displayState === 'block' ? 'none' : 'block';
  });

  new Text({
    targetEl: cardItemEl,
    className: 'question',
    tag: 'h2',
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
