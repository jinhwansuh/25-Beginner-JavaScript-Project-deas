export default function Number({ targetEl, state, onClick }) {
  const tdEl = document.createElement('td');
  const numberEl = document.createElement('button');
  numberEl.textContent = state;
  if (state == '=') tdEl.setAttribute('colspan', '4');

  numberEl.addEventListener('click', (e) => {
    onClick(e.target.textContent);
  });

  tdEl.appendChild(numberEl);
  targetEl.appendChild(tdEl);
}
