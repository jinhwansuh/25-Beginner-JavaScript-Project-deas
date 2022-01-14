export default function Button({ targetEl, onChange }) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = 'Generate Quote';

  buttonEl.addEventListener('click', (e) => {
    onChange();
  });

  targetEl.appendChild(buttonEl);
}
