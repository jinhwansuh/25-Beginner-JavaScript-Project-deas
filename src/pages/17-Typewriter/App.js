import { getRandomQuote } from './api/quoteApi.js';
import QuoteWrapper from './components/domain/QuoteWrapper.js';
import typeWirterStyle from './style/style.css';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = typeWirterStyle.container;
  const initialState = [];

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

  targetEl.appendChild(containerEl);
}
