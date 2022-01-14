export default function Button({ containerEl, state, onClick }) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = state;

  buttonEl.addEventListener('click', (e) => {
    onClick();
  });

  containerEl.appendChild(buttonEl);
}
