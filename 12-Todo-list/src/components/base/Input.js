export default function Input({ targetEl, placeholderText }) {
  const inputEl = document.createElement('input');
  inputEl.placeholder = placeholderText;

  targetEl.appendChild(inputEl);
}
