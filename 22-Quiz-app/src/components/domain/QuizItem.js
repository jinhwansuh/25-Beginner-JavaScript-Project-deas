import { Input, Text, Label } from '../base/index.js';

export default function QuizItem({ targetEl, item, index, onChange }) {
  const quizItemEl = document.createElement('div');
  quizItemEl.className = 'quiz-item';

  new Text({ targetEl: quizItemEl, tag: 'h3', text: `Question ${index}` });
  new Text({ targetEl: quizItemEl, tag: 'h3', text: item.question });

  for (let i = 1; i < 5; i++) {
    new Input({
      targetEl: quizItemEl,
      name: `question${index}`,
      id: `answer${i}${index}`,
      type: 'radio',
      checked: `answer${i}` === item.checked,
    });
    new Label({
      targetEl: quizItemEl,
      state: `answer${i}${index}`,
      text: item.answer,
    });
  }

  quizItemEl.addEventListener('change', (e) => {
    const targetEl = e.target.id;
    const answer = targetEl.slice(0, 7);
    console.log(answer);
    if (onChange) {
      onChange(index - 1, answer);
    }
  });

  targetEl.appendChild(quizItemEl);
}
