import Card from './components/domain/Card.js';
import { dataArray } from './utils/data.js';
import './style/style.css';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  dataArray.map((data) => new Card({ targetEl: containerEl, state: data }));

  targetEl.appendChild(containerEl);
}
