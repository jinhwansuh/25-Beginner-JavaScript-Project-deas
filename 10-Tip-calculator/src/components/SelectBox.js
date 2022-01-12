export default function SelectBox({ targetEl, state, onChange }) {
  const selectBoxEl = document.createElement('select');

  selectBoxEl.addEventListener('change', (e) => {
    const target = e.target;
    onChange({ [state]: target.value });
  });

  this.render = () => {
    selectBoxEl.innerHTML = `
      <option value="" disabled selected>Choose</option>
      <option value="30">30%</option>
      <option value="20">20%</option>
      <option value="15">15%</option>
      <option value="10">10%</option>
      <option value="5">5%</option>
    `;
  };
  this.render();

  targetEl.appendChild(selectBoxEl);
}
