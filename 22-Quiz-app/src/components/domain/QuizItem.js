import { Input, Text, Label } from '../base/index.js';

export default function QuizItem({ targetEl, item, index, onChange }) {
  const quizItemEl = document.createElement('div');
  const answer1Wrapper = document.createElement('div');
  const answer2Wrapper = document.createElement('div');
  const answer3Wrapper = document.createElement('div');
  const answer4Wrapper = document.createElement('div');
  quizItemEl.className = 'quiz-item';

  new Text({ targetEl: quizItemEl, tag: 'h3', text: `Question ${index}` });
  new Text({ targetEl: quizItemEl, tag: 'h3', text: item.question });

  new Input({
    targetEl: answer1Wrapper,
    name: `question${index}`,
    id: `answer1${index}`,
    type: 'radio',
    checked: `answer1` === item.checked,
  });
  new Label({
    targetEl: answer1Wrapper,
    state: `answer1${index}`,
    text: item.answer1,
  });
  new Input({
    targetEl: answer2Wrapper,
    name: `question${index}`,
    id: `answer2${index}`,
    type: 'radio',
    checked: `answer2` === item.checked,
  });
  new Label({
    targetEl: answer2Wrapper,
    state: `answer2${index}`,
    text: item.answer2,
  });
  new Input({
    targetEl: answer3Wrapper,
    name: `question${index}`,
    id: `answer3${index}`,
    type: 'radio',
    checked: `answer3` === item.checked,
  });
  new Label({
    targetEl: answer3Wrapper,
    state: `answer3${index}`,
    text: item.answer3,
  });
  new Input({
    targetEl: answer4Wrapper,
    name: `question${index}`,
    id: `answer4${index}`,
    type: 'radio',
    checked: `answer4` === item.checked,
  });
  new Label({
    targetEl: answer4Wrapper,
    state: `answer4${index}`,
    text: item.answer4,
  });

  quizItemEl.addEventListener('change', (e) => {
    const targetEl = e.target.id;
    const answer = targetEl.slice(0, 7);
    if (onChange) {
      onChange(index - 1, answer);
    }
  });

  quizItemEl.appendChild(answer1Wrapper);
  quizItemEl.appendChild(answer2Wrapper);
  quizItemEl.appendChild(answer3Wrapper);
  quizItemEl.appendChild(answer4Wrapper);
  targetEl.appendChild(quizItemEl);
}
