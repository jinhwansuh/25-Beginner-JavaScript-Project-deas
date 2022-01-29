import { imageArray } from './assets/images.js';
import { Image, Button, IndexImage } from './components/index.js';

export default function App({ targetEl, initialState }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  this.state = initialState;
  const imageLength = imageArray.length;

  this.setState = (nextState) => {
    this.state = nextState;
    image.setState(imageArray[this.state]);
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

  const image = new Image({
    targetEl: containerEl,
    initialState: imageArray[this.state],
  });

  new Button({
    targetEl: containerEl,
    state: '<',
    onClick: onPrevClick,
  });
  new Button({
    targetEl: containerEl,
    state: '>',
    onClick: onNextClick,
  });

  const indexImage = new IndexImage({
    targetEl: containerEl,
    imageLength,
    initialState: this.state,
  });

  targetEl.appendChild(containerEl);
}
