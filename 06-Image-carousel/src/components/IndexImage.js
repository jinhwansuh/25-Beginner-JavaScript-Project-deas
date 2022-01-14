export default function IndexImage({ targetEl, imageLength, initialState }) {
  const indexEl = document.createElement('div');
  this.state = initialState;
  const indexArray = Array.from({ length: imageLength }, (v, i) => i);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    indexEl.innerHTML = `${indexArray
      .map(
        (index) =>
          `<span class="${
            this.state === index ? 'dot checked' : 'dot'
          }"></span>`
      )
      .join('')}`;
  };

  this.render();

  targetEl.appendChild(indexEl);
}
