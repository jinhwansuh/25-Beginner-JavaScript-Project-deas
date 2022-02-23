import { Text } from '../base/index.js';
import Data from './Data.js';

export default function DataList({ targetEl }) {
  const dataListEl = document.createElement('div');

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    dataListEl.innerHTML = '';

    this.state.length
      ? this.state.map((data) => new Data({}))
      : new Text({
          targetEl: dataListEl,
          tag: 'h1',
          text: 'There are no data',
        });
  };

  targetEl.appendChild(dataListEl);
}
