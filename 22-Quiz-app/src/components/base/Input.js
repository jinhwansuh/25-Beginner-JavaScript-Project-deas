export default function Input({ targetEl, state }) {
  const inputEl = document.createElement('input');

  inputEl.addEventListener('change', (e) => {
    onChange();
  });

  targetEl.appendChild(inputEl);
}
