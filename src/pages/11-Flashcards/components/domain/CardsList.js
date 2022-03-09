import CardItem from './CardItem.js';
import flashCardsStyle from '../../style/style.css';

export default function CardsList({ targetEl, initialState }) {
  const cardsListEl = document.createElement('div');
  cardsListEl.className = flashCardsStyle.card_list;
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
