export default function Text({ targetEl, tag, className, text, display }) {
  const textEl = document.createElement(tag);
  className ? (textEl.className = className) : '';
  textEl.textContent = text;
  textEl.style.display = display;

  targetEl.appendChild(textEl);
}
