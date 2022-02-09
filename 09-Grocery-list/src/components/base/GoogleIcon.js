export default function GoogleIcon({ targetEl, className, name, onClick }) {
  const iconEl = document.createElement('span');

  iconEl.className = className;
  iconEl.textContent = name;

  iconEl.addEventListener('click', (e) => {
    if (onClick) {
      onClick();
    }
  });

  targetEl.appendChild(iconEl);
}
