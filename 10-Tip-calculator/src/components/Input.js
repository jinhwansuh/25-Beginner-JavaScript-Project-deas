export default function Input({ targetEl, state, children, onChange }) {
  const inputEl = document.createElement('div');

  inputEl.addEventListener('change', (e) => {
    const target = document.querySelector(`#${state}`);
    onChange({ [state]: target.value });
  });

  this.render = () => {
    inputEl.innerHTML = `
      <label for="${state}">${children}</label>
      <input type="number" id="${state}" />
    `;
  };

  this.render();

  targetEl.appendChild(inputEl);
}
