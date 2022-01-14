export default function NewText({ containerEl, initialState }) {
  const newTextEl = document.createElement('div');

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    newTextEl.innerHTML = `
      ${this.state}
    `;
  };

  this.render();

  containerEl.appendChild(newTextEl);
}
