import ClickButton from './components/Click.js';

export default function App({ $target }) {
  const buttonEl = new ClickButton({
    $target: $target,
    onChangeColor: () => {
      $target.style.background = 'black';
    },
  });
  const Bg = new Background({
    $target,
  });
}
