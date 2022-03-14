import {
  Calculator,
  Colors,
  Counter,
  DigitalClock,
  Flashcards,
  GroceryList,
  HexColorsGradient,
  HomePage,
  ImageCarousel,
  Math,
  QuizApp,
  RandomQuoteGenerator,
  SquareCards,
  StickyNotes,
  TheMessage,
  Timer,
  TipCalculator,
  TodoList,
  Typewriter,
  UnsplashAPI,
  WeatherApplication,
  WikipediaAPI,
} from '../pages/index.js';
import { initRouter } from './routeHook.js';

export default function Route({ targetEl }) {
  this.route = () => {
    targetEl.className = '';
    window.scrollTo(0, 0);
    targetEl.innerHTML = '';

    const { pathname } = window.location;

    switch (pathname) {
      case '/':
        new HomePage({ targetEl });
        break;
      case '/Colors':
        new Colors({ targetEl });
        break;
      case '/Hex-colors-gradient':
        new HexColorsGradient({ targetEl });
        break;
      case '/Random-quote-generator':
        new RandomQuoteGenerator({ targetEl });
        break;
      case '/The-message':
        new TheMessage({ targetEl });
        break;
      case '/Counter':
        new Counter({ targetEl });
        break;
      case '/Image-carousel':
        new ImageCarousel({ targetEl });
        break;
      case '/Digital-clock':
        new DigitalClock({ targetEl });
        break;
      case '/Calculator':
        new Calculator({ targetEl });
        break;
      case '/Grocery-list':
        new GroceryList({ targetEl });
        break;
      case '/Tip-calculator':
        new TipCalculator({ targetEl });
        break;
      case '/Flashcards':
        new Flashcards({ targetEl });
        break;
      case '/Todo-list':
        new TodoList({ targetEl });
        break;
      case '/Sticky-notes':
        new StickyNotes({ targetEl });
        break;
      case '/Timer':
        new Timer({ targetEl });
        break;
      case '/Math':
        new Math({ targetEl });
        break;
      case '/Unsplash-API':
        new UnsplashAPI({ targetEl });
        break;
      case '/Typewriter':
        new Typewriter({ targetEl });
        break;
      case '/Square-cards':
        new SquareCards({ targetEl });
        break;
      case '/Weather-application':
        new WeatherApplication({ targetEl });
        break;
      case '/Wikipedia-API':
        new WikipediaAPI({ targetEl });
        break;
      case '/Quiz-app':
        new QuizApp({ targetEl });
        break;
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
case '/Random-quote-generator':
  new ({targetEl})
  break;
case '/The-message':
  new ({targetEl})
  break;
case '/Counter':
  new ({targetEl})
  break;
case '/Image-carousel':
  new ({targetEl})
  break;
case '/Digital-clock':
  new ({targetEl})
  break;
case '/Calculator':
  new ({targetEl})
  break;
case '/Grocery-list':
  new ({targetEl})
  break;
case '/Tip-calculator':
  new ({targetEl})
  break;
case '/Flashcards':
  new ({targetEl})
  break;
case '/Todo-list':
  new ({targetEl})
  break;
case '/Sticky-notes':
  new ({targetEl})
  break;
case '/Timer':
  new ({targetEl})
  break;
case '/Math':
  new ({targetEl})
  break;
case '/Unsplash-API':
  new ({targetEl})
  break;
case '/Typewriter':
  new ({targetEl})
  break;
case '/Square-cards':
  new ({targetEl})
  break;
case '/Weather-application':
  new ({targetEl})
  break;
case '/Wikipedia-API':
  new ({targetEl})
  break;
case '/Quiz-app':
  new ({targetEl})
  break;
*/
