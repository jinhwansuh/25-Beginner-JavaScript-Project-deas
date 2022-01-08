export default function Button({ targetEl, onChange }, state) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = `${state}`;

  buttonEl.addEventListener('click', (e) => {
    onChange();
  });

  targetEl.appendChild(buttonEl);
}
