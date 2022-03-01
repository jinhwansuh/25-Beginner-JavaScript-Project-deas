export default function QuizList({ targetEl }) {
  const quizListEl = document.createElement('div');
  quizListEl.className = 'quiz-list';

  targetEl.appendChild(quizListEl);
}
