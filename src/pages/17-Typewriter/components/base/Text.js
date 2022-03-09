export default function Text({ targetEl, text }) {
  const textEl = document.createElement('span');

  textEl.textContent = text;

  targetEl.appendChild(textEl);
}
