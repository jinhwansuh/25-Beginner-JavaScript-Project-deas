import { Input, Text, Button } from '../base/index.js';

export default function QuizCreate({
  targetEl,
  onInputChange,
  onAnswerClick,
  onAddQuizClick,
  onTaskQuizClick,
  onDeleteQuizClick,
}) {
  const quizCreateEl = document.createElement('div');
  quizCreateEl.className = 'quiz-create';
  const answer1Wrapper = document.createElement('div');
  const answer2Wrapper = document.createElement('div');
  const answer3Wrapper = document.createElement('div');
  const answer4Wrapper = document.createElement('div');
  const answerArray = [
    answer1Wrapper,
    answer2Wrapper,
    answer3Wrapper,
    answer4Wrapper,
  ];

  new Text({ targetEl: quizCreateEl, tag: 'h2', text: 'Create Quiz' });
  new Text({ targetEl: quizCreateEl, tag: 'h3', text: 'Question' });
  new Input({
    targetEl: quizCreateEl,
    state: 'question',
    placeholder: 'Question',
    onChange: onInputChange,
  });
  new Text({ targetEl: quizCreateEl, tag: 'h3', text: 'Answers' });

  for (let i = 0; i < answerArray.length; i++) {
    new Button({
      targetEl: answerArray[i],
      state: `answer${i + 1}`,
      onClick: onAnswerClick,
      text: i + 1,
    });
    new Input({
      targetEl: answerArray[i],
      state: `answer${i + 1}`,
      placeholder: 'Answer...',
      onChange: onInputChange,
    });
  }
  for (const wrapper of answerArray) {
    quizCreateEl.appendChild(wrapper);
  }

  new Button({
    targetEl: quizCreateEl,
    text: 'Add Quiz',
    onClick: onAddQuizClick,
    className: 'quiz-button',
  });
  new Button({
    targetEl: quizCreateEl,
    text: 'Task Quiz',
    onClick: onTaskQuizClick,
    className: 'quiz-button',
  });
  new Button({
    targetEl: quizCreateEl,
    text: 'Delete Quiz',
    onClick: onDeleteQuizClick,
    className: 'quiz-button',
  });

  targetEl.appendChild(quizCreateEl);
}
