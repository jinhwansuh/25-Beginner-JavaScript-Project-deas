export default function Button({ containerEl, onChange }) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = 'Generate Quote';

  buttonEl.addEventListener('click', (e) => {
    onChange();
  });

  containerEl.appendChild(buttonEl);
}
