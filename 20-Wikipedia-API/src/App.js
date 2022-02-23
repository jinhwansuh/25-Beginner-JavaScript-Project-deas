import { getWikiData } from './api/wikipedia.js';
import { Form, ItemList } from './components/domain/index.js';

export default function App({ targetEl }) {
  this.state = {
    limit: 30,
    nextStart: 0,
    data: [],
    isLoading: false,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    itemList.setState(this.state.data);
  };

  let count = 0;
  const handleSubmit = async (value) => {
    const data = await getWikiData(value, count);
    console.log(data, count);
    count += 10;
    if (data.query) {
      this.setState({
        ...this.state,
        data: [...this.state.data, ...Object.values(data.query.pages)],
      });
    } else {
      this.setState({
        ...this.state,
        data: [],
      });
    }
  };

  new Form({ targetEl, onSubmit: handleSubmit });
  const itemList = new ItemList({ targetEl });
}
