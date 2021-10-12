import ClickButton from './Click.js';

export default function Background({ $target }) {
  this.state = ['black', 'orange', 'green', 'red', 'yellowgreen', 'purple'];
  const divEl = document.createElement('div');

  $target.appendChild(divEl);
  divEl.style.minHeight = '100vh';

  new ClickButton({
    $target: divEl,
    onChangeColor: () => {
      const random = parseInt(Math.random() * (this.state.length + 1), 10);
      $target.style.background = this.state[random];
    },
  });
}
