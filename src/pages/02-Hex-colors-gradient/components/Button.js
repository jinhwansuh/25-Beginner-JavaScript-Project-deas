import hexColors from '../style/style.css';

export default function Button({ targetEl, onClick }) {
  const buttonEl = document.createElement('button');
  buttonEl.className = hexColors.color_btn;
  buttonEl.textContent = 'Click Me';

  buttonEl.addEventListener('click', (e) => {
    onClick();
  });

  targetEl.appendChild(buttonEl);
}
