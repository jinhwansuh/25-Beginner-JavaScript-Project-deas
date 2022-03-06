import { Text } from '../base/index.js';

export default function QuizResult({ targetEl, answerList }) {
  const quizResultEl = document.createElement('div');

  this.state = answerList;

  new Text({ targetEl: quizResultEl, tag: 'h3', text: 'Results' });
  this.state.map((answer, index) => {
    const isCorrect = answer.checked === answer.rightAnswer;

    new Text({
      targetEl: quizResultEl,
      tag: 'div',
      text: `Question ${index + 1} : ${
        isCorrect
          ? 'Correct'
          : `Incorrect / Answer is ${answer[answer.rightAnswer]}`
      }`,
    });
  });

  targetEl.appendChild(quizResultEl);
}
