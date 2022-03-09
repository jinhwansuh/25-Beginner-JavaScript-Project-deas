import { getAnswer, getdifferentNumber } from '../../utils/random.js';
import { shuffleArray } from '../../utils/shuffle.js';
import { Text } from '../base/index.js';
import mathStyle from '../../style/style.css';

export default function Numbers({
  targetEl,
  initialState,
  onAnswerClick,
  onWrongClick,
}) {
  const numbersEl = document.createElement('div');
  numbersEl.className = mathStyle.numbers;
  this.state = initialState;
  this.answer = getAnswer(this.state);

  this.setState = (nextState) => {
    this.state = nextState;
    this.answer = getAnswer(this.state);
    this.render();
  };

  this.render = () => {
    numbersEl.innerHTML = '';

    const array = [
      {
        targetEl: numbersEl,
        text: getdifferentNumber(this.answer),
        onClick: onWrongClick,
      },
      {
        targetEl: numbersEl,
        text: getdifferentNumber(this.answer),
        onClick: onWrongClick,
      },
      {
        targetEl: numbersEl,
        text: this.answer,
        onClick: onAnswerClick,
      },
    ];

    shuffleArray(array);

    array.map(({ targetEl, text, onClick }) => {
      new Text({ targetEl, text, onClick });
    });
  };
  this.render();

  targetEl.appendChild(numbersEl);
}
