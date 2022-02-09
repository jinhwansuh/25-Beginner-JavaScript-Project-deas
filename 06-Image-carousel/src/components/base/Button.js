export default function Button({ targetEl, state, className, onClick }) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = state;
  buttonEl.className = className;

  buttonEl.addEventListener('click', (e) => {
    onClick();
  });

  targetEl.appendChild(buttonEl);
}
