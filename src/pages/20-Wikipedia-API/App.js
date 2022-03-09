import { getWikiData } from './api/wikipedia.js';
import { Button } from './components/base/index.js';
import { Form, ItemList } from './components/domain/index.js';
import wikiStyle from './style/style.css';

export default function App({ targetEl }) {
  targetEl.className = wikiStyle.main;

  this.state = {
    limit: 30,
    offset: 0,
    data: [],
    isLoading: false,
    value: '',
  };

  this.setState = (nextState) => {
    this.state = nextState;
    itemList.setState(this.state.data);

    const items = document.querySelectorAll(wikiStyle.item);
    setTimeout(() => observeLastItem(io, items), 0);
  };

  const handleSubmit = async (value) => {
    const data = await getWikiData(value, 0);
    if (data.query) {
      this.setState({
        ...this.state,
        value,
        offset: this.state.limit,
        data: [...Object.values(data.query.pages)],
      });
    } else {
      this.setState({
        ...this.state,
        value: '',
        offset: 0,
        data: [],
      });
    }
  };

  const handleItemClick = (id) => {
    window.open(`https://en.wikipedia.org/?curid=${id}`);
  };

  const handleScrollTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const observeLastItem = (io, items) => {
    const lastItem = items[items.length - 1];
    io.observe(lastItem);
  };

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          const data = await getWikiData(this.state.value, this.state.offset);
          if (data.query) {
            this.setState({
              ...this.state,
              offset: this.state.offset + this.state.limit,
              data: [...this.state.data, ...Object.values(data.query.pages)],
            });
            // observeLastItem(observer, document.querySelectorAll('.item'));
          }
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  new Form({ targetEl, onSubmit: handleSubmit });
  const itemList = new ItemList({ targetEl, handleItemClick });
  new Button({
    targetEl,
    text: '맨위로',
    className: wikiStyle.scroll_top,
    onClick: handleScrollTopClick,
  });
}
