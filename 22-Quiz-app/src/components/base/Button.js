export default function Button({
  targetEl,
  text,
  className,
  onClick,
  display,
}) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = text;
  className && (buttonEl.className = className);
  display && (buttonEl.style.display = display);

  buttonEl.addEventListener('click', (e) => {
    if (onClick) {
      onClick();
    }
  });

  targetEl.appendChild(buttonEl);
}
