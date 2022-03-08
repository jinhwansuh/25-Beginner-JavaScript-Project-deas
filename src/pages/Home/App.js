import Card from './components/domain/Card.js';
import { dataArray } from './utils/data.js';
import './style/style.css';
import { routePush } from '../../router/routeHook.js';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  const onItemClick = (nextUrl) => {
    routePush(nextUrl);
  };

  dataArray.map(
    (data) => new Card({ targetEl: containerEl, state: data, onItemClick })
  );

  targetEl.appendChild(containerEl);
}
