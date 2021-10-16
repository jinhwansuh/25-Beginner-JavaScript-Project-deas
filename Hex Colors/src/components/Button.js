export default function Button({ containerEl, onChangeColor }) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = 'Click Me';

  buttonEl.addEventListener('click', (e) => {
    onChangeColor();
  });

  containerEl.appendChild(buttonEl);
}
