export default function Text({ targetEl, text }) {
  const textEl = document.createElement('p');
  textEl.textContent = text;

  targetEl.appendChild(textEl);
}
