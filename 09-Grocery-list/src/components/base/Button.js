export default function ClearButton({ targetEl, text, type, onClick }) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = text;
  buttonEl.type = type;

  buttonEl.addEventListener('click', (e) => {
    if (onClick) {
      onClick();
    }
  });

  targetEl.appendChild(buttonEl);
}
