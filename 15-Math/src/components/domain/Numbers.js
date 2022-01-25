import { getAnswer, getdifferentNumber } from '../../utils/random.js';
import { Text } from '../base/index.js';

export default function Numbers({
  targetEl,
  initialState,
  onAnswerClick,
  onWrongClick,
}) {
  const numbersEl = document.createElement('div');
  this.state = initialState;
  this.answer = getAnswer(this.state);

  this.setState = (nextState) => {
    this.state = nextState;
    this.answer = getAnswer(this.state);
    this.render();
  };

  this.render = () => {
    numbersEl.innerHTML = '';

    // TODO: 랜덤으로 섞기

    new Text({
      targetEl: numbersEl,
      text: getdifferentNumber(this.answer),
      onClick: onWrongClick,
    });
    new Text({
      targetEl: numbersEl,
      text: getdifferentNumber(this.answer),
      onClick: onWrongClick,
    });
    new Text({
      targetEl: numbersEl,
      text: this.answer,
      onClick: onAnswerClick,
    });
  };
  this.render();

  targetEl.appendChild(numbersEl);
}
