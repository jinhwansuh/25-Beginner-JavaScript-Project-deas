import { convertTimetoString } from '../utils/convertTime.js';
import timerStyle from '../style/style.css';

export default function Timer({ targetEl, initialState }) {
  const timerEl = document.createElement('div');
  timerEl.className = timerStyle.timer;
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { minute, second, ms } = this.state;

    timerEl.innerHTML = `
      ${
        convertTimetoString(minute) +
        ' : ' +
        convertTimetoString(second) +
        ' : ' +
        convertTimetoString(ms)
      }
    `;
  };

  this.render();

  targetEl.appendChild(timerEl);
}
