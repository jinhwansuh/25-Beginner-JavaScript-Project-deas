export default function ClickButton({ $target, onChangeColor }) {
  const ButtonEl = document.createElement('button');
  ButtonEl.className = 'Btn-change';
  ButtonEl.textContent = 'Button 클릭!';
  $target.appendChild(ButtonEl);

  ButtonEl.addEventListener('click', (e) => {
    const button1 = e.target.closest('button');

    console.log(button1);
    onChangeColor();
  });
}
