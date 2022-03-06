import { Input, Text, Button } from '../base/index.js';

export default function QuizCreate({
  targetEl,
  onInputChange,
  onAddQuizClick,
  onQuizStartClick,
  onDeleteQuizClick,
}) {
  const quizCreateEl = document.createElement('div');
  quizCreateEl.className = 'quiz-create';

  new Text({ targetEl: quizCreateEl, tag: 'h2', text: 'Create Quiz' });
  new Text({ targetEl: quizCreateEl, tag: 'h3', text: 'Question' });
  new Input({
    targetEl: quizCreateEl,
    state: 'question',
    placeholder: 'Question',
    onChange: onInputChange,
  });
  new Text({ targetEl: quizCreateEl, tag: 'h3', text: 'Answers' });

  for (let i = 0; i < 4; i++) {
    new Input({
      targetEl: quizCreateEl,
      state: `answer${i + 1}`,
      placeholder: 'Answer...',
      onChange: onInputChange,
    });
  }
  new Button({
    targetEl: quizCreateEl,
    text: 'Add Quiz',
    onClick: onAddQuizClick,
  });
  new Button({
    targetEl: quizCreateEl,
    text: 'Task Quiz',
    onClick: onQuizStartClick,
  });
  new Button({
    targetEl: quizCreateEl,
    text: 'Delete Quiz',
    onClick: onDeleteQuizClick,
  });

  targetEl.appendChild(quizCreateEl);
}
