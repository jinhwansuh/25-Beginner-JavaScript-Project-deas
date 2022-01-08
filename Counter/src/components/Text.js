export default function Text({ targetEl }) {
  const textEl = document.createElement('h1');

  this.render = () => {
    textEl.innerHTML = `COUNTER`;
  };

  this.render();

  targetEl.appendChild(textEl);
}
