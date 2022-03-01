export default function Text({ targetEl, tag = 'span', text }) {
  const textEl = document.createElement(tag);
  textEl.textContent = text;

  targetEl.appendChild(textEl);
}
