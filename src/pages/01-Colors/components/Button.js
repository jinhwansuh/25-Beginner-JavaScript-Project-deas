import colors from '../style/style.css';

export default function Button({ targetEl, onClick }) {
  const ButtonEl = document.createElement('button');
  ButtonEl.className = colors.btn_change;
  ButtonEl.textContent = 'Click Me!';

  ButtonEl.addEventListener('click', (e) => {
    onClick();
  });

  targetEl.appendChild(ButtonEl);
}
