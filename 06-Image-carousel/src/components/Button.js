export default function Button({ targetEl, state, onClick }) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = state;

  buttonEl.addEventListener('click', (e) => {
    onClick();
  });

  targetEl.appendChild(buttonEl);
}
