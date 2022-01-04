export default function Button({ containerEl, onClick }) {
  const buttonEl = document.createElement('button');
  buttonEl.className = 'color-btn';
  buttonEl.textContent = 'Click Me';

  buttonEl.addEventListener('click', (e) => {
    onClick();
  });

  containerEl.appendChild(buttonEl);
}
