import { Text, Button } from '../base/index.js';
import todoListStyle from '../../style/style.css';

export default function TodoList({
  targetEl,
  initialState,
  onDeleteClick,
  onCheckClick,
}) {
  const todoListEl = document.createElement('div');
  todoListEl.className = todoListStyle.todo_list;
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  todoListEl.addEventListener('click', (e) => {
    const className = e.target.className;
    if (className === 'delete') {
      const targetEl = e.target.closest('.todo-item');
      const { id } = targetEl.dataset;
      onDeleteClick(+id);
    } else if (className.includes('check')) {
      const targetEl = e.target.closest('.todo-item');
      const { id } = targetEl.dataset;
      onCheckClick(+id);
    }
  });

  this.render = () => {
    // todoListEl.innerHTML = ``;
    // this.state.map(({content, isCompleted}) => {
    //   new Text({ targetEl: todoListEl, text: content });
    //   new Button({ targetEl: todoListEl, type: 'button', children: 'check' });
    //   new Button({ targetEl: todoListEl, type: 'button', children: 'del' });
    // });

    todoListEl.innerHTML = `
      ${this.state
        .map(
          ({ id, content, isCompleted }) =>
            `<div class='${todoListStyle.todo_item}' data-id="${id}">${content}
              <div>
                <button type="button" class="btn check ${
                  isCompleted ? `${todoListStyle.checked}` : ''
                }">check</button>
                <button type="button" class="delete">del</button>
              </div>
          </div>`
        )
        .join('')}
    `;
  };

  this.render();

  targetEl.appendChild(todoListEl);
}
