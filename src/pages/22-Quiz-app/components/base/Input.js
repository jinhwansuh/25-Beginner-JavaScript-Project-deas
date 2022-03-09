export default function Input({
  targetEl,
  type = 'text',
  state,
  id,
  name,
  placeholder = '',
  className,
  onChange,
  checked,
}) {
  const inputEl = document.createElement('input');
  inputEl.type = type;
  inputEl.placeholder = placeholder;
  id && (inputEl.id = id);
  name && (inputEl.name = name);
  checked && (inputEl.checked = true);
  className && (inputEl.className = className);

  inputEl.addEventListener('change', (e) => {
    const inputValue = e.target.value;
    if (onChange) {
      onChange(state, inputValue);
    }
  });

  targetEl.appendChild(inputEl);
}
