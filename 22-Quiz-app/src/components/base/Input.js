export default function Input({
  targetEl,
  type = 'text',
  state,
  id,
  placeholder = '',
  onChange,
}) {
  const inputEl = document.createElement('input');
  inputEl.type = type;
  inputEl.placeholder = placeholder;
  id ? (inputEl.id = id) : '';

  inputEl.addEventListener('change', (e) => {
    const inputValue = e.target.value;
    if (onChange) {
      onChange(state, inputValue);
    }
  });

  targetEl.appendChild(inputEl);
}
