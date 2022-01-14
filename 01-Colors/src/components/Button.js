export default function Button({ targetEl, onClick }) {
  const ButtonEl = document.createElement('button');
  ButtonEl.className = 'btn-change';
  ButtonEl.textContent = 'Click Me!';

  ButtonEl.addEventListener('click', (e) => {
    onClick();
  });

  targetEl.appendChild(ButtonEl);
}
