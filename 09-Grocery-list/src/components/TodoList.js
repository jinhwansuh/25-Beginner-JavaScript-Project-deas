export default function TodoList({ targetEl, initialState, onToggle }) {
  const todoListEl = document.createElement('div');
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  todoListEl.addEventListener('click', (e) => {
    const itemEl = e.target.closest('.todo-item');
    const { index } = itemEl.dataset;
    if (index) onToggle(index);
  });

  this.render = () => {
    todoListEl.innerHTML = `
      <ul> 
        ${this.state
          .map(
            ({ isCompleted, text }, index) =>
              `<li class="todo-item" data-index='${index}'>
                ${isCompleted ? `<del>${text}</del>` : text}
              </li>
              `
          )
          .join('')}
      </ul>
    `;
  };
  this.render();

  targetEl.appendChild(todoListEl);
}
