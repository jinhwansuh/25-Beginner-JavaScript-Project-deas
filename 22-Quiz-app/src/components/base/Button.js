export default function Button({ targetEl, text, onClick }) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = text;

  buttonEl.addEventListener('click', (e) => {
    if (onClick) {
      onClick();
    }
  });

  targetEl.appendChild(buttonEl);
}
