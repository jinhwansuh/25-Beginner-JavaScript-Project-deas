import { Image, Text } from '../base/index.js';

export default function Data({ targetEl, data }) {
  const dataEl = document.createElement('div');
  const { pageid, thumbnail, title } = data;

  dataEl.addEventListener('click', (e) => {
    window.open(`https://en.wikipedia.org/?curid=${pageid}`);
  });

  thumbnail ? new Image({ targetEl: dataEl, imageUrl: thumbnail }) : '';
  new Text({ targetEl: dataEl, text: title });

  targetEl.appendChild(dataEl);
}
