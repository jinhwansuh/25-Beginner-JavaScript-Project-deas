export default function Button({ containerEl, onChangeColor }) {
  const ButtonEl = document.createElement('button');
  ButtonEl.className = 'btn-change';
  ButtonEl.textContent = 'Click me';
  containerEl.appendChild(ButtonEl);

  ButtonEl.addEventListener('click', (e) => {
    onChangeColor();
  });
}
