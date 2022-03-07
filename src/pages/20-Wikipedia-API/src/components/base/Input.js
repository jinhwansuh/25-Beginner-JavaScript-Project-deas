export default function Input({ targetEl, placeholder }) {
  const inputEl = document.createElement('input');
  inputEl.placeholder = placeholder;

  targetEl.appendChild(inputEl);
}
