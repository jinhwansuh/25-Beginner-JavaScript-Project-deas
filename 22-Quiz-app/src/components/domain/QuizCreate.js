import { Input, Text, Button } from '../base/index.js';

export default function QuizCreate({
  targetEl,
  onAddQuizClick,
  onQuizStartClick,
  onDeleteQuizClick,
}) {
  const quizCreateEl = document.createElement('div');
  quizCreateEl.className = 'quiz-create';

  new Text({ targetEl: quizCreateEl, tag: 'h2', text: 'Create Quiz' });
  new Text({ targetEl: quizCreateEl, tag: 'h3', text: 'Question' });
  new Input({ targetEl: quizCreateEl, placeholder: 'Question' });
  new Text({ targetEl: quizCreateEl, tag: 'h3', text: 'Answers' });
  new Input({ targetEl: quizCreateEl, placeholder: 'Answer...' });
  new Input({ targetEl: quizCreateEl, placeholder: 'Answer...' });
  new Input({ targetEl: quizCreateEl, placeholder: 'Answer...' });
  new Input({ targetEl: quizCreateEl, placeholder: 'Answer...' });
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
