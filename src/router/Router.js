import { HomePage } from '../pages/index.js';

export default function Route({ targetEl }) {
  this.route = () => {
    targetEl.innerHTML = '';

    const { pathname } = window.location;

    switch (pathname) {
      case '/':
        new HomePage({ targetEl });
        break;

      default:
        break;
    }
  };

  this.route();
}
