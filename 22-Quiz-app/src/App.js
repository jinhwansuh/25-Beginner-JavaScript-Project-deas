import {
  Header,
  QuizCreate,
  QuizList,
  QuizResult,
} from './components/domain/index.js';

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
    quizList.setState(nextState);
  };

  const onInputChange = (state, value) => {
    const nextInputState = { ...this.inputState, [state]: value };
    this.inputState = nextInputState;
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
      const inputList = document.querySelectorAll('input');
      inputList.forEach((inputEl) => {
        inputEl.type === 'text' && (inputEl.value = '');
      });
      this.inputState = initialInputState;
    } else {
      alert('please complete the form');
    }
  };

  const onTaskQuizClick = () => {
    if (this.state.length > 0) {
      const buttonList = document.querySelectorAll('.quiz-button');
      const taskButtonEl = document.querySelector('.task-button');
      buttonList.forEach((buttonEl) => {
        buttonEl.disabled = true;
      });
      taskButtonEl.style.display = 'block';
    } else {
      alert('please complete the form');
    }
  };

  const onDeleteQuizClick = () => {
    const nextState = [];
    this.setState(nextState);
  };

  const onAnswerChange = (answerIndex, checked) => {
    const nextState = this.state.map((answer, index) => {
      if (answerIndex === index) {
        return { ...answer, checked };
      }
      return answer;
    });
    this.state = nextState;
  };
  const onAnswerSubmit = () => {
    const quizListEl = document.querySelector('.quiz-list');
    new QuizResult({ targetEl: quizListEl, answerList: this.state });
  };

  new Header({ targetEl });
  new QuizCreate({
    targetEl: containerEl,
    onInputChange,
    onAddQuizClick,
    onTaskQuizClick,
    onDeleteQuizClick,
  });
  const quizList = new QuizList({
    targetEl: containerEl,
    onAnswerChange,
    onAnswerSubmit,
  });

  targetEl.appendChild(containerEl);
}
