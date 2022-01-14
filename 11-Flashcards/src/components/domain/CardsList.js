export default function CardsList({ targetEl, initialState }) {
  const cardsListEl = document.createElement('div');
  cardsListEl.className = 'card-list';
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    cardsListEl.innerHTML = `
      ${this.state
        ?.map(
          (card) => `<div class="card">
        <div>${card.Question}</div>
        <div>${card.Answer}</div>
      </div>`
        )
        .join('')}
    `;
  };

  this.render();

  targetEl.appendChild(cardsListEl);
}
