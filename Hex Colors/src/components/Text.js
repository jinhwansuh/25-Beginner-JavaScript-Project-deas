export default function Text({ containerEl, initialState }) {
  const textEl = document.createElement('div');

  this.render = () => {
    return (textEl.innerHTML = `
      CLICK THE BUTTON BELLOW TO GENERATE A RANDOM GRADIENT HEX COLOR COMBINATION
      background: linear-gradient(to right, #ffffff, #ffffff)
    `);
  };
  this.render();

  containerEl.appendChild(textEl);
}
