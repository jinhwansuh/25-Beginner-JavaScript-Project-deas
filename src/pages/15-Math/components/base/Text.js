export default function Text({ targetEl, text, onClick, color }) {
  const textEl = document.createElement('span');
  textEl.textContent = text;
  textEl.style.color = color ? color : '';

  textEl.addEventListener('click', (e) => {
    if (onClick) {
      onClick(e.target.textContent);
    }
  });

  targetEl.appendChild(textEl);
}
