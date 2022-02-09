export default function Label({ targetEl, text, state }) {
  const labelEl = document.createElement('label');
  labelEl.textContent = text;
  labelEl.htmlFor = state;

  targetEl.appendChild(labelEl);
}
