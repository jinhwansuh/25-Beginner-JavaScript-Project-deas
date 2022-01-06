export default function Text({ containerEl }) {
  const textEl = document.createElement('h1');

  this.render = () => {
    textEl.innerHTML = `Counter`;
  };

  this.render();

  containerEl.appendChild(textEl);
}
