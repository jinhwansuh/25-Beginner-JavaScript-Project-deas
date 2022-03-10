import { Button } from './components/base/index.js';
import { routePush } from './router/routeHook.js';
import Route from './router/Router.js';
import mainStyle from './style/style.css';

export default function App({ targetEl }) {
  const onHomeClick = () => {
    routePush('/');
  };

  const route = new Route({ targetEl });
  new Button({
    targetEl: document.body,
    text: 'Home',
    className: mainStyle.home_btns,
    onClick: onHomeClick,
  });

  window.addEventListener('popstate', () => {
    route.route();
  });
}
