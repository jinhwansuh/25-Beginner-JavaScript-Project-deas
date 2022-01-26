import { Header, Wrapper } from './components/domain/index.js';
import { filterData, getUnsplashImages } from './api/unsplashApi.js';

export default function App({ mainEl, initialState }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  this.state = initialState;

  const onSubmit = (text) => {
    getUnsplashImages(text).then((data) => {
      const filteredData = filterData(data);
      wrapper.setState(filteredData);
    });
  };

  new Header({ targetEl: mainEl, onSubmit });
  const wrapper = new Wrapper({ targetEl: containerEl, initialState });

  mainEl.appendChild(containerEl);
}
