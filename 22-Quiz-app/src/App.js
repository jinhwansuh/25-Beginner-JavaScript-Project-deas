import { Header, QuizCreate, QuizList } from './components/domain/index.js';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = 'container';

  const initialInputState = {
    question: '',
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    rightAnswer: 'answer1',
    checked: '',
  };

  this.inputState = initialInputState;
  this.state = [];

  this.setState = (nextState) => {
    this.state = nextState;
    console.log(this.state);
    quizList.setState(nextState);
  };

  const onInputChange = (state, value) => {
    const nextInputState = { ...this.inputState, [state]: value };
    this.inputState = nextInputState;
    console.log(nextInputState);
  };

  const onAddQuizClick = () => {
    const { question, answer1, answer2, answer3, answer4, rightAnswer } =
      this.inputState;
    if (
      question.length &&
      answer1 &&
      answer2 &&
      answer3 &&
      answer4 &&
      rightAnswer
    ) {
      const nextState = [...this.state, this.inputState];
      this.setState(nextState);
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

  const onAnswerChange = (answerIndex, answer) => {
    const nextState = this.state.map((a, index) => {
      if (answerIndex === index) {
        return { ...a, checked: answer };
      }
      return a;
    });
    this.state = nextState;
  };

  new Header({ targetEl });
  new QuizCreate({
    targetEl: containerEl,
    onInputChange,
    onAddQuizClick,
    onQuizStartClick,
    onDeleteQuizClick,
  });
  const quizList = new QuizList({ targetEl: containerEl, onAnswerChange });

  targetEl.appendChild(containerEl);
}
