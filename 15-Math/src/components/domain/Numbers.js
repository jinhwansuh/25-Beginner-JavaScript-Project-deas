import { getAnswer, getdifferentNumber } from '../../utils/random.js';
import { Text } from '../base/index.js';

export default function Numbers({
  targetEl,
  initialState,
  onAnswerClick,
  onWrongClick,
}) {
  const numbersEl = document.createElement('div');
  numbersEl.className = 'numbers';
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
      style: 'background-color: #FE4A49',
    });
    new Text({
      targetEl: numbersEl,
      text: getdifferentNumber(this.answer),
      onClick: onWrongClick,
      style: 'background-color: #2AB7CA',
    });
    new Text({
      targetEl: numbersEl,
      text: this.answer,
      onClick: onAnswerClick,
      style: 'background-color: #FED766;',
    });
  };
  this.render();

  targetEl.appendChild(numbersEl);
}
