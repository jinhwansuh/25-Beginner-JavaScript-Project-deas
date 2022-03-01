import { Header, QuizCreate, QuizList } from './components/domain/index.js';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  new Header({ targetEl });

  new QuizCreate({ targetEl: containerEl });
  new QuizList({ targetEl: containerEl });

  targetEl.appendChild(containerEl);
}
