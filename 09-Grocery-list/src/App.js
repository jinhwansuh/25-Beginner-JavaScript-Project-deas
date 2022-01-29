import { ClearButton, TodoForm, TodoList } from './components/index.js';
import {
  getSessionStorage,
  removeStorage,
  setSessionStorage,
} from './utils/storage.js';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');
  this.state = getSessionStorage();

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState(this.state);
  };

  const onSubmit = (text) => {
    const nextState = [{ isCompleted: false, text }, ...this.state];
    setSessionStorage(nextState);
    this.setState(nextState);
  };
  const onClearStorage = () => {
    const nextState = removeStorage();
    this.setState(nextState);
  };

  const onToggle = (index) => {
    const item = this.state[index];
    item.isCompleted ? (item.isCompleted = false) : (item.isCompleted = true);
    const nextState = [...this.state];
    setSessionStorage(nextState);
    this.setState(nextState);
  };

  new ClearButton({
    targetEl: containerEl,
    state: '지우기',
    onClick: onClearStorage,
  });

  new TodoForm({ targetEl: containerEl, onSubmit });
  const todoList = new TodoList({
    targetEl: containerEl,
    initialState: this.state,
    onToggle,
  });
  targetEl.appendChild(containerEl);
}
