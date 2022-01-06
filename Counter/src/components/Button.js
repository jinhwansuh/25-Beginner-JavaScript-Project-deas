export default function Button({ containerEl, onChange }, state) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = `${state}`;

  buttonEl.addEventListener('click', (e) => {
    onChange();
  });

  containerEl.appendChild(buttonEl);
}
