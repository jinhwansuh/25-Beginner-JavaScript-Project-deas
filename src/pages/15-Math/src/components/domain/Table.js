import { Text } from '../base/index.js';

export default function Table({ targetEl, initialState }) {
  const tableEl = document.createElement('div');
  tableEl.className = 'table';

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    tableEl.innerHTML = ``;

    new Text({
      targetEl: tableEl,
      text: this.state.number1,
      color: '#FE4A49',
    });
    new Text({
      targetEl: tableEl,
      text: this.state.calculation,
      color: ' #2AB7CA',
    });
    new Text({
      targetEl: tableEl,
      text: this.state.number2,
      color: ' #FED766',
    });
    new Text({
      targetEl: tableEl,
      text: '=',
      color: ' #F86624',
    });
    new Text({
      targetEl: tableEl,
      text: '?',
      color: ' gray',
    });
  };

  this.render();

  targetEl.appendChild(tableEl);
}
