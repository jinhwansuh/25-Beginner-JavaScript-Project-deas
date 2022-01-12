export default function Input({
  targetEl,
  state,
  children,
  initialState,
  onChange,
}) {
  const inputEl = document.createElement('div');

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  inputEl.addEventListener('change', (e) => {
    const target = document.querySelector(`#${state}`);
    onChange({ [state]: target.value });
  });

  this.render = () => {
    inputEl.innerHTML = `
      <label for="${state}">${children}</label>
      <input type="number" id="${state}" value="${this.state[state]}" />
    `;
  };

  this.render();

  targetEl.appendChild(inputEl);
}
