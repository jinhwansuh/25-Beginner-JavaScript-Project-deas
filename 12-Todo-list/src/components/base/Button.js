export default function Button({ targetEl, onClick, type, children }) {
  const buttonEl = document.createElement('button');
  buttonEl.type = type;
  buttonEl.textContent = children;

  buttonEl.addEventListener('click', (e) => {
    if (type === 'button') {
      onClick();
    }
  });

  targetEl.appendChild(buttonEl);
}
