export default function SelectBox({ targetEl, state, children, onChange }) {
  const selectBoxEl = document.createElement('div');

  selectBoxEl.addEventListener('change', (e) => {
    const target = e.target;
    onChange({ [state]: target.value });
  });

  this.render = () => {
    selectBoxEl.innerHTML = `
      <label for=${state}>${children}</label>
      <select id=${state}>
        <option value="" disabled selected>Choose.</option>
        <option value="30">30%</option>
        <option value="20">20%</option>
        <option value="15">15%</option>
        <option value="10">10%</option>
        <option value="5">5%</option>
      </select>
    `;
  };
  this.render();

  targetEl.appendChild(selectBoxEl);
}
