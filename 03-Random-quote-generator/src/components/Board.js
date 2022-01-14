export default function Board({ containerEl, initialState }) {
  const boardEl = document.createElement('div');
  boardEl.className = 'board';

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    boardEl.innerHTML = `
    <div>"${this.state.content}"</div>
    <div>${this.state.author}</div>
    `;
  };

  containerEl.appendChild(boardEl);
}
