export default function Image({ targetEl, initialState }) {
  const imageEl = document.createElement('div');
  imageEl.className = 'image-container';

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    imageEl.innerHTML = `<img src='${this.state}' width="100%" height="100%" />`;
  };

  this.render();

  targetEl.appendChild(imageEl);
}
