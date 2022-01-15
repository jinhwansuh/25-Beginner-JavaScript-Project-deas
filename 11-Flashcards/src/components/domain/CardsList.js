export default function CardsList({ targetEl, initialState }) {
  const cardsListEl = document.createElement('div');
  cardsListEl.className = 'card-list';
  this.state = initialState;
  this.displayState = false;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  cardsListEl.addEventListener('click', (e) => {
    const targetEl = e.target;
    if (targetEl.className === 'card') {
      const cardEl = e.target.closest('.card');
      const answerEl = cardEl.querySelector('.answer');
      this.displayState = !this.displayState;
      answerEl.style.display = this.displayState ? 'block' : 'none';
    }
  });

  this.render = () => {
    cardsListEl.innerHTML = `
      ${this.state
        ?.map(
          (card) => `<div class="card">
        <div class="question">${card.Question}</div>
        <div class="answer" style="display: none">${card.Answer}</div>
      </div>`
        )
        .join('')}
    `;
  };

  this.render();

  targetEl.appendChild(cardsListEl);
}
