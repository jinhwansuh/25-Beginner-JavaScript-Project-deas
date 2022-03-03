import QuizItem from './QuizItem.js';

export default function QuizList({ targetEl }) {
  const quizListEl = document.createElement('div');
  quizListEl.className = 'quiz-list';

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    // this.state?.map((item, index) => {
    // new QuizItem({targetEl: quizListEl, item, index})
    // })
  };

  targetEl.appendChild(quizListEl);
}
