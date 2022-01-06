export default function Text({ boardEl }, text) {
  const textEl = document.createElement('div');

  this.render = () => {
    textEl.innerHTML = `
      ${text}
    `;
  };
  this.render();

  boardEl.appendChild(textEl);
}
