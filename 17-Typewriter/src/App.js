import { getRandomQuote } from './api/quoteApi.js';
import QuoteWrapper from './components/domain/QuoteWrapper.js';

export default function App({ mainEl, initialState }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    wrapper.setState(nextState);
  };

  this.init = () => {
    getRandomQuote().then((res) => {
      const nextState = [...res.content];
      console.log(nextState);
      this.setState(nextState);
    });
  };

  const wrapper = new QuoteWrapper({ targetEl: containerEl, initialState });

  this.init();

  mainEl.appendChild(containerEl);
}
