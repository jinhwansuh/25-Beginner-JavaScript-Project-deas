import { TodoForm, TodoList } from './components/domain/index.js';
import { Text } from './components/base/index.js';
import {
  getSessionStorage,
  removeStorage,
  setSessionStorage,
} from './utils/storage.js';
import groceryStyle from './style/style.css';

export default function App({ targetEl }) {
  targetEl.className = groceryStyle.main;
  const containerEl = document.createElement('div');
  containerEl.className = groceryStyle.container;

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

  new Text({ targetEl: containerEl, tag: 'h1', text: 'Grocery List' });
  new TodoForm({ targetEl: containerEl, onSubmit, onClearStorage });
  const todoList = new TodoList({
    targetEl: containerEl,
    initialState: this.state,
    onToggle,
  });

  targetEl.appendChild(containerEl);
}
