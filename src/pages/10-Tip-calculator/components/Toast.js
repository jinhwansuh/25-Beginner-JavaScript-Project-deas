import tipCalculatorStyle from '../style/style.css';

export default function Toast({ time }) {
  const toastEl = document.createElement('div');
  toastEl.className = tipCalculatorStyle.toast;
  toastEl.style.display = 'none';

  this.render = (message) => {
    toastEl.innerHTML = message;
    toastEl.style.display = 'block';

    setTimeout(() => {
      toastEl.style.display = 'none';
    }, time);
  };

  document.body.appendChild(toastEl);
}
