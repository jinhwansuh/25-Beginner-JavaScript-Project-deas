import { Button, Input } from '../base/index.js';

export default function ModalForm({ targetEl, onSubmit, onCloseClick }) {
  const modalFormEl = document.createElement('div');

  this.state = true;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  modalFormEl.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      const inputEl = modalFormEl.querySelector('input');
      if (inputEl.value) {
        onSubmit(inputEl.value);
        inputEl.value = '';
      }
    }
  });

  new Input({ targetEl: modalFormEl });
  new Button({ targetEl: modalFormEl, text: 'X', onClick: onCloseClick });

  this.render = () => {
    modalFormEl.style.display = this.state ? 'block' : 'none';
  };

  this.render();

  targetEl.appendChild(modalFormEl);
}
