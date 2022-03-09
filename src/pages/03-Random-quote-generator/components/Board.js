import randomQuoteStyle from '../style/style.css';

export default function Board({ targetEl, initialState }) {
  const boardEl = document.createElement('div');
  boardEl.className = randomQuoteStyle.board;

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    boardEl.innerHTML = `
      <div>"${this.state.content}"</div>
      <div>- ${this.state.author}</div>
    `;
  };

  targetEl.appendChild(boardEl);
}
