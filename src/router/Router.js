import { Colors, HomePage } from '../pages/index.js';
import { initRouter } from './routeHook.js';

export default function Route({ targetEl }) {
  this.route = () => {
    targetEl.innerHTML = '';

    const { pathname } = window.location;

    switch (pathname) {
      case '/':
        new HomePage({ targetEl });
        break;
      case '/Colors':
        new Colors({ targetEl });

      default:
        break;
    }
  };

  this.route();

  initRouter(() => this.route());
}

/* 
/01-Colors',
/02-Hex-colors-gradient',
/03-Random-quote-generator',
/04-The-message',
/05-Counter',
/06-Image-carousel',
/07-Digital-clock',
/08-Calculator',
/09-Grocery-list',
/10-Tip-calculator',
/11-Flashcards',
/12-Todo-list',
/13-Sticky-notes',
/14-Timer',
/15-Math',
/16-Unsplash-API',
/17-Typewriter',
/18-Square-cards',
/19-Weather-application',
/20-Wikipedia-API',
/22-Quiz-app',
*/
