import { Text } from '../base/index.js';

export default function Wrapper({ targetEl }) {
  const wrapperEl = document.createElement('div');
  wrapperEl.className = 'details';

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    wrapperEl.innerHTML = ``;
    const { city, temp, weather } = this.state;

    new Text({ targetEl: wrapperEl, tag: 'h1', text: weather });
    new Text({ targetEl: wrapperEl, tag: 'h1', text: city });
    new Text({ targetEl: wrapperEl, tag: 'h1', text: temp });
  };

  targetEl.appendChild(wrapperEl);
}
