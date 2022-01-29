export default function Input({ targetEl, state, onChange }) {
  const inputEl = document.createElement('input');

  inputEl.addEventListener('change', (e) => {
    const value = e.target.value;
    if (value) {
      onChange(state, value);
    }
  });

  targetEl.appendChild(inputEl);
}
