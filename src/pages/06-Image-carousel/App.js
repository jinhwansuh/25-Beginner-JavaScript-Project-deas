import { imageArray } from './assets/images.js';
import { ImageWrapper, IndexImage } from './components/domain/index.js';
import imageCarouselStyle from './style/style.css';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = imageCarouselStyle.container;
  const initialState = 0;

  this.state = initialState;
  const imageLength = imageArray.length;

  this.setState = (nextState) => {
    this.state = nextState;
    imageWrapper.setState(imageArray[this.state]);
    indexImage.setState(this.state);
  };

  const onPrevClick = () => {
    const nextState = this.state - 1 === -1 ? imageLength - 1 : this.state - 1;
    this.setState(nextState);
  };
  const onNextClick = () => {
    const nextState = this.state + 1 === imageLength ? 0 : this.state + 1;
    this.setState(nextState);
  };

  const imageWrapper = new ImageWrapper({
    targetEl: containerEl,
    initialState: imageArray[this.state],
    onPrevClick,
    onNextClick,
  });

  const indexImage = new IndexImage({
    targetEl: containerEl,
    imageLength,
    initialState: this.state,
  });

  targetEl.appendChild(containerEl);
}
