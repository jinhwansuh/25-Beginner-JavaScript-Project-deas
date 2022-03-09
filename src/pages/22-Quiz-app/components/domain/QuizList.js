import { Button } from '../base/index.js';
import QuizItem from './QuizItem.js';
import quizStyle from '../../style/style.css';

export default function QuizList({ targetEl, onAnswerChange, onAnswerSubmit }) {
  const quizListEl = document.createElement('div');
  quizListEl.className = quizStyle.quiz_list;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    quizListEl.innerHTML = '';

    this.state?.map((item, index) => {
      new QuizItem({
        targetEl: quizListEl,
        item,
        index: index + 1,
        onChange: onAnswerChange,
      });
    });

    new Button({
      targetEl: quizListEl,
      text: 'submit',
      display: 'none',
      className: 'task-button',
      onClick: onAnswerSubmit,
    });
  };

  targetEl.appendChild(quizListEl);
}
