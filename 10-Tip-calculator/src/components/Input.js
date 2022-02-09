export default function Input({
  targetEl,
  state,
  children,
  initialState,
  iconName,
  onChange,
}) {
  const inputEl = document.createElement('div');

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  inputEl.addEventListener('change', (e) => {
    if (e.target.value) {
      onChange({ [state]: e.target.value });
    }
  });

  this.render = () => {
    inputEl.innerHTML = `
      <label for=${state}>${children}</label>
      <div>
        <span class="material-icons">${iconName}</span>
        <input type="number" id="${state}" value="${this.state[state]}" />
      </div>
    `;
  };

  this.render();

  targetEl.appendChild(inputEl);
}
