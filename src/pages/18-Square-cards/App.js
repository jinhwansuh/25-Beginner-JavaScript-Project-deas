import home from './style/style.css';
import Card from './components/domain/Card.js';
import { dataArray } from './utils/data.js';
import { routePush } from '../../router/routeHook.js';

export default function App({ targetEl }) {
  targetEl.className = home.main;
  const containerEl = document.createElement('div');
  containerEl.className = home.container;

  const onItemClick = (nextUrl) => {
    routePush(nextUrl);
  };

  dataArray.map(
    (data) => new Card({ targetEl: containerEl, state: data, onItemClick })
  );

  targetEl.appendChild(containerEl);
}
