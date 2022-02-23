import { getWikiData } from './api/wikipedia.js';
import { Form } from './components/domain/index.js';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');

  let count = 0;
  const handleSubmit = async (value) => {
    console.log('123)');
    const data = await getWikiData('card', count);
    console.log(data, count);
    count += 10;
  };

  new Form({ targetEl: containerEl, onSubmit: handleSubmit });

  targetEl.appendChild(containerEl);
}
