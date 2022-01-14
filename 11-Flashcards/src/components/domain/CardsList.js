export default function CardsList({ targetEl, initialState }) {
  const cardsListEl = document.createElement('div');
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  console.log(this.state);

  this.render = () => {
    cardsListEl.innerHTML = `
      ${this.state?.map(
        (card) => `<div>
        <div>${card.question}</div>
        <div>${card.answer}</div>
      </div>`
      )}
    `;
  };

  this.render();

  targetEl.appendChild(cardsListEl);
}
