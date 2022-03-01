import { Input, Text } from '../base/index.js';

export default function QuizCreate({ targetEl }) {
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

  targetEl.appendChild(quizCreateEl);
}
