export default function Number({ targetEl, state, color, onClick }) {
  const numberEl = document.createElement('button');
  numberEl.style.backgroundColor = color;
  numberEl.textContent = state;

  numberEl.addEventListener('click', (e) => {
    onClick(e.target.textContent);
  });

  targetEl.appendChild(numberEl);
}
