import { getWikiData } from './api/wikipedia.js';
import { Form, ItemList } from './components/domain/index.js';

export default function App({ targetEl }) {
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

      const items = document.querySelectorAll('.item');
      observeLastItem(io, items);
    } else {
      this.setState({
        ...this.state,
        value: '',
        offset: 0,
        data: [],
      });
    }
  };

  new Form({ targetEl, onSubmit: handleSubmit });
  const itemList = new ItemList({ targetEl });

  const observeLastItem = (io, items) => {
    const lastItem = items[items.length - 1];
    io.observe(lastItem);
  };

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          console.log(entry.target);
          const data = await getWikiData(this.state.value, this.state.offset);
          if (data.query) {
            this.setState({
              ...this.state,
              offset: this.state.offset + this.state.limit,
              data: [...this.state.data, ...Object.values(data.query.pages)],
            });
            observeLastItem(observer, document.querySelectorAll('.item'));
          }
        }
      });
    },
    {
      threshold: 0.5,
    }
  );
}
