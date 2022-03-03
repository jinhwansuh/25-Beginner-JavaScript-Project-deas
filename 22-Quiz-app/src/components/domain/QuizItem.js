import { Input, Text, Label } from '../base/index.js';

export default function QuizItem({ targetEl, item, index }) {
  const quizItemEl = document.createElement('div');

  new Text({ targetEl: quizItemEl, tag: 'h3', text: `Question ${index}` });
  new Text({ targetEl: quizItemEl, tag: 'h3', text: item.question });
  new Input({ targetEl: quizItemEl, type: 'radio' });
  new Label({ targetEl: quizItemEl, state: '', text: item.answer.answer1 });
  new Input({ targetEl: quizItemEl, type: 'radio' });
  new Label({ targetEl: quizItemEl, state: '', text: item.answer.answer2 });
  new Input({ targetEl: quizItemEl, type: 'radio' });
  new Label({ targetEl: quizItemEl, state: '', text: item.answer.answer3 });
  new Input({ targetEl: quizItemEl, type: 'radio' });
  new Label({ targetEl: quizItemEl, state: '', text: item.answer.answer4 });

  targetEl.appendChild(quizItemEl);
}
