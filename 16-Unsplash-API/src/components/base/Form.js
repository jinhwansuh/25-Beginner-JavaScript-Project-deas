export default function Form({ targetEl, onSubmit }) {
  const formEl = document.createElement('form');

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputEl = e.target.querySelector('input');

    if (inputEl.value) {
      onSubmit(inputEl.value);
    }
  });

  this.render = () => {
    formEl.innerHTML = `
      <input placeholder="Search..." />
      <button type="submit"></button>
    `;
  };

  this.render();

  targetEl.appendChild(formEl);
}
