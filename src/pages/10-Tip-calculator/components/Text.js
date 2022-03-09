export default function Text({ targetEl, tag, text }) {
  const textEl = document.createElement(tag);
  textEl.textContent = text;

  targetEl.appendChild(textEl);
}
