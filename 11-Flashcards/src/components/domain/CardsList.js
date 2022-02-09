import CardItem from './CardItem.js';

export default function CardsList({ targetEl, initialState }) {
  const cardsListEl = document.createElement('div');
  cardsListEl.className = 'card-list';
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  cardsListEl.addEventListener('click', (e) => {
    const targetEl = e.target;
    if (targetEl.className === 'card') {
      const cardEl = e.target.closest('.card');
      const answerEl = cardEl.querySelector('.answer');
      const displayState = answerEl.style.display;
      answerEl.style.display = displayState === 'block' ? 'none' : 'block';
    }
  });

  this.render = () => {
    cardsListEl.innerHTML = '';

    this.state?.map((card) => {
      new CardItem({ targetEl: cardsListEl, state: card });
    });
  };

  this.render();

  targetEl.appendChild(cardsListEl);
}
