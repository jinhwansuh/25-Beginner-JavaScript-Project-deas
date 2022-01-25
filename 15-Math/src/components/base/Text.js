export default function Text({ targetEl, text, onClick, state, style }) {
  const textEl = document.createElement('span');
  textEl.textContent = text;
  textEl.style = style ? style : '';

  textEl.addEventListener('click', (e) => {
    if (onClick) {
      onClick(e.target.textContent);
    }
  });

  targetEl.appendChild(textEl);
}
