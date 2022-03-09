import counterStyle from '../style/style.css';

export default function Button({ targetEl, onChange, state }) {
  const buttonEl = document.createElement('button');
  buttonEl.className = counterStyle.btn;
  buttonEl.textContent = `${state}`;

  buttonEl.addEventListener('click', (e) => {
    onChange();
  });

  targetEl.appendChild(buttonEl);
}
