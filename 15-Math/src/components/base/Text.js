export default function Text({ targetEl, text, onClick }) {
  const textEl = document.createElement('span');
  textEl.textContent = text;

  textEl.addEventListener('click', (e) => {
    if (onClick) {
      onClick(e.target.textContent);
    }
  });

  targetEl.appendChild(textEl);
}
