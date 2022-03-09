export default function Button({ targetEl, text, className, onClick }) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = text;
  buttonEl.className = className;

  buttonEl.addEventListener('click', (e) => {
    onClick(e);
  });

  targetEl.appendChild(buttonEl);
}
