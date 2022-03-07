import TodoItem from './TodoItem.js';

export default function TodoList({ targetEl, initialState, onToggle }) {
  const todoListEl = document.createElement('ul');
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    todoListEl.innerHTML = '';

    this.state?.map(({ isCompleted, text }, index) => {
      new TodoItem({
        targetEl: todoListEl,
        isCompleted,
        text: '- ' + text,
        index,
        onClick: onToggle,
      });
    });
  };
  this.render();

  targetEl.appendChild(todoListEl);
}
