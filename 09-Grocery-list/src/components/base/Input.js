export default function Input({ targetEl }) {
  const inputEl = document.createElement('input');
  inputEl.type = 'text';

  targetEl.appendChild(inputEl);
}
