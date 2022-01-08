import { convertDay, getMeridiem, convertHour } from '../utils/convertDate.js';

export default function Clock({ targetEl, initialState }) {
  const clockEl = document.createElement('div');
  // day, hour, minute
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    clockEl.innerHTML = `
      ${convertDay[this.state.day]} ${convertHour(this.state.hour)} : ${
      this.state.minute
    } ${getMeridiem(this.state.hour)}
    `;
  };

  this.render();

  targetEl.appendChild(clockEl);
}
