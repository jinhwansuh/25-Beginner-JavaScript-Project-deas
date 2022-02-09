export default function TodoItem({
  targetEl,
  isCompleted,
  text,
  index,
  onClick,
}) {
  const todoItemEl = document.createElement('li');
  todoItemEl.setAttribute('data-index', index);
  todoItemEl.className = 'todo-item';

  todoItemEl.addEventListener('click', (e) => {
    const { index } = todoItemEl.dataset;
    onClick(index);
  });

  this.render = () => {
    todoItemEl.innerHTML = `${isCompleted ? `<del>${text}</del>` : text}`;
  };

  this.render();

  targetEl.appendChild(todoItemEl);
}
