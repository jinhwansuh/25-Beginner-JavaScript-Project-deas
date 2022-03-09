import weatherStyle from '../../style/style.css';

export default function Button({ targetEl, text, onClick }) {
  const buttonEl = document.createElement('button');
  buttonEl.className = weatherStyle.toggle;
  buttonEl.textContent = text;

  buttonEl.addEventListener('click', (e) => {
    onClick();
  });

  targetEl.appendChild(buttonEl);
}
