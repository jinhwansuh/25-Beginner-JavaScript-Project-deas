export default function Text({ targetEl, text }) {
  const textEl = document.createElement('div');

  this.render = () => {
    textEl.innerHTML = `
      ${text}
    `;
  };
  this.render();

  targetEl.appendChild(textEl);
}
