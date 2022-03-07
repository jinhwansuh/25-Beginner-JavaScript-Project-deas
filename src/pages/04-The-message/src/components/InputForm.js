export default function InputForm({ targetEl, onSubmit }) {
  const formEl = document.createElement('form');

  this.render = () => {
    formEl.innerHTML = `
      <input type='text' />
      <button> Submit </button>
    `;
  };

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputEl = formEl.querySelector('input');
    const text = inputEl.value;

    if (text.length > 1) {
      onSubmit(text);
      inputEl.value = '';
    } else {
      alert('input more than 1 word');
    }
  });
  this.render();

  targetEl.appendChild(formEl);
}
