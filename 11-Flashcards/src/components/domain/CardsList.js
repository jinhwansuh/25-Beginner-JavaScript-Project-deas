import CardItem from './CardItem.js';

export default function CardsList({ targetEl, initialState }) {
  const cardsListEl = document.createElement('div');
  cardsListEl.className = 'card-list';
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    cardsListEl.innerHTML = '';

    this.state?.map((card) => {
      new CardItem({ targetEl: cardsListEl, state: card });
    });
  };

  this.render();

  targetEl.appendChild(cardsListEl);
}
