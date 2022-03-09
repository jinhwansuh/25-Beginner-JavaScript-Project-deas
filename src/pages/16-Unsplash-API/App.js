import { Header, Wrapper } from './components/domain/index.js';
import { filterData, getUnsplashImages } from './api/unsplashApi.js';
import unsplashStyle from './style/style.css';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = unsplashStyle.container;
  const initialState = [];

  this.state = initialState;

  const onSubmit = (text) => {
    getUnsplashImages(text).then((data) => {
      const filteredData = filterData(data);
      wrapper.setState(filteredData);
    });
  };

  new Header({ targetEl, onSubmit });
  const wrapper = new Wrapper({ targetEl: containerEl, initialState });

  targetEl.appendChild(containerEl);
}
