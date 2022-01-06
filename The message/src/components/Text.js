export default function Text({ containerEl }, text) {
  const textEl = document.createElement('div');

  this.render = () => {
    textEl.innerHTML = `
      ${text}
    `;
  };
  this.render();

  containerEl.appendChild(textEl);
}
