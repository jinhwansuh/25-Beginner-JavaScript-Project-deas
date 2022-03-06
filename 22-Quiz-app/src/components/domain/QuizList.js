import QuizItem from './QuizItem.js';

export default function QuizList({ targetEl, onAnswerChange }) {
  const quizListEl = document.createElement('div');
  quizListEl.className = 'quiz-list';

  this.setState = (nextState) => {
    console.log(nextState);
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
  };

  targetEl.appendChild(quizListEl);
}
