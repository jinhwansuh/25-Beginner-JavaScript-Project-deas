export default function ClickButton({ $target, onChangeColor }) {
  const ButtonEl = document.createElement('button');
  ButtonEl.className = 'btn-change';
  ButtonEl.textContent = 'Button 클릭!';
  $target.appendChild(ButtonEl);

  ButtonEl.addEventListener('click', (e) => {
    onChangeColor();
  });
}
