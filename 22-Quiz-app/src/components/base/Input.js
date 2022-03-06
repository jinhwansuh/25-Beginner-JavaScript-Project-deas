export default function Input({
  targetEl,
  type = 'text',
  state,
  placeholder = '',
}) {
  const inputEl = document.createElement('input');
  inputEl.type = type;
  inputEl.placeholder = placeholder;

  inputEl.addEventListener('change', (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);
  });

  targetEl.appendChild(inputEl);
}
