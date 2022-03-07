export default function Button({ targetEl, onClick }) {
  const buttonEl = document.createElement('button');
  buttonEl.className = 'color-btn';
  buttonEl.textContent = 'Click Me';

  buttonEl.addEventListener('click', (e) => {
    onClick();
  });

  targetEl.appendChild(buttonEl);
}
