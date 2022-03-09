import { Image, Button } from '../base/index.js';
import imageCarouselStyle from '../../style/style.css';

export default function ImageWrapper({
  targetEl,
  initialState,
  onPrevClick,
  onNextClick,
}) {
  const wrapperEl = document.createElement('div');
  wrapperEl.className = imageCarouselStyle.wrapper;

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    wrapperEl.innerHTML = '';

    new Image({ targetEl: wrapperEl, imageUrl: this.state });
    new Button({
      targetEl: wrapperEl,
      state: '<',
      className: `${imageCarouselStyle.btn} ${imageCarouselStyle.prev}`,
      onClick: onPrevClick,
    });
    new Button({
      targetEl: wrapperEl,
      state: '>',
      className: `${imageCarouselStyle.btn} ${imageCarouselStyle.next}`,
      onClick: onNextClick,
    });
  };

  this.render();

  targetEl.appendChild(wrapperEl);
}
