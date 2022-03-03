export default function Label({ targetEl, state, text }) {
  const labelEl = document.createElement('label');
  labelEl.htmlFor = state;
  labelEl.textContent = text;

  targetEl.appendChild(labelEl);
}
