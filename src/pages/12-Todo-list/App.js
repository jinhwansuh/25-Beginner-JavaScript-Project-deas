import { Header, TodoList } from './components/domain/index.js';
import { getRandomNumber } from './utils/random.js';
import todoListStyle from './style/style.css';

export default function App({ targetEl }) {
  targetEl.className = todoListStyle.main;
  const containerEl = document.createElement('div');
  const initialState = [];

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState(this.state);
  };

  const onSubmit = (text) => {
    const nextState = [
      ...this.state,
      { id: getRandomNumber(), content: text, isCompleted: false },
    ];
    this.setState(nextState);
  };
  const onDeleteClick = (itemId) => {
    const nextState = this.state.filter(({ id }) => id !== itemId);
    this.setState(nextState);
  };
  const onCheckClick = (itemId) => {
    const selectedTodoIndex = this.state.findIndex(({ id }) => id === itemId);
    this.state[selectedTodoIndex]['isCompleted'] =
      !this.state[selectedTodoIndex]['isCompleted'];
    const nextState = [...this.state];

    this.setState(nextState);
  };

  new Header({ targetEl: containerEl, onSubmit });
  const todoList = new TodoList({
    targetEl: containerEl,
    initialState,
    onDeleteClick,
    onCheckClick,
  });

  targetEl.appendChild(containerEl);
}
