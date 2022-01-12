export default function TodoForm({ targetEl, onSubmit }) {
  const todoFormEl = document.createElement('form');

  todoFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const target = todoFormEl.querySelector('input');
    const value = target.value;

    onSubmit(value);
    target.value = '';
  });

  this.render = () => {
    todoFormEl.innerHTML = `
      <input />
      <button type="submit">add</button>
    `;
  };

  this.render();

  targetEl.appendChild(todoFormEl);
}
