import { Text } from '../base/index.js';
import Item from './Item.js';

export default function ItemList({ targetEl, data }) {
  const itemListEl = document.createElement('section');

  this.setState = (nextState) => {
    console.log(nextState);
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    itemListEl.innerHTML = '';

    this.state.length
      ? this.state.map((data) => new Item({ targetEl: itemListEl, data }))
      : new Text({
          targetEl: itemListEl,
          tag: 'h1',
          text: 'There are no data',
        });
  };

  targetEl.appendChild(itemListEl);
}
