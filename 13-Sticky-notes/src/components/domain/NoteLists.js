export default function NoteLists({ targetEl, initialState }) {
  const noteListsEl = document.createElement('div');
  noteListsEl.className = 'note-lists';
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    noteListsEl.innerHTML = `
      ${this.state.map((note) => `<div class="note">${note}</div>`).join('')}
    `;
  };

  this.render();

  targetEl.appendChild(noteListsEl);
}
