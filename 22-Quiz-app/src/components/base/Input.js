export default function Input({ targetEl, state, placeholder = '' }) {
  const inputEl = document.createElement('input');

  inputEl.placeholder = placeholder;

  inputEl.addEventListener('change', (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);
  });

  targetEl.appendChild(inputEl);
}
