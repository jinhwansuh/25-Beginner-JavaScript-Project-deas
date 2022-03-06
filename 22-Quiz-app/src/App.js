import { Header, QuizCreate, QuizList } from './components/domain/index.js';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  const inputState = {
    question: '',
    answers: {
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
    },
    rightAnswer: '',
  };

  this.state = [];

  this.setState = (nextState) => {
    this.state = nextState;
    quizList.setState(nextState);
  };

  const onAddQuizClick = () => {
    if (this.state.length > 0) {
      // setState add
    } else {
      alert('please complete the form');
    }
  };

  const onQuizStartClick = () => {
    // 비활성화 하고
    // 퀴즈 시작
    if (this.state.length > 0) {
      // setState add
    } else {
      alert('please complete the form');
    }
  };

  const onDeleteQuizClick = () => {
    const nextState = [];
    this.setState(nextState);
  };

  new Header({ targetEl });
  new QuizCreate({
    targetEl: containerEl,
    onAddQuizClick,
    onQuizStartClick,
    onDeleteQuizClick,
  });
  const quizList = new QuizList({ targetEl: containerEl });

  targetEl.appendChild(containerEl);
}
