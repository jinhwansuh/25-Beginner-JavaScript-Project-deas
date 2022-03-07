export default function Button({
  targetEl,
  text,
  className,
  onClick,
  state,
  display,
}) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = text;
  className && (buttonEl.className = className);
  display && (buttonEl.style.display = display);

  buttonEl.addEventListener('click', (e) => {
    if (onClick && state) {
      onClick(state);
      return;
    }
    if (onClick) {
      onClick();
    }
  });

  targetEl.appendChild(buttonEl);
}
