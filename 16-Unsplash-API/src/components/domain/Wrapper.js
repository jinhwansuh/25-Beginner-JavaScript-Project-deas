import { Image } from '../base/index.js';

export default function Wrapper({ targetEl, initialState }) {
  const wrapperEl = document.createElement('div');
  wrapperEl.className = 'wrapper';

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    wrapperEl.innerHTML = ``;

    this.state?.map((url) => new Image({ targetEl: wrapperEl, url }));
  };

  this.render();

  targetEl.appendChild(wrapperEl);
}
