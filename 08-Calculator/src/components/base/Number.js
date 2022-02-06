export default function Number({ targetEl, state, onClick }) {
  const numberEl = document.createElement('button');
  numberEl.textContent = state;

  numberEl.addEventListener('click', (e) => {
    onClick(e.target.textContent);
  });

  targetEl.appendChild(numberEl);
}
