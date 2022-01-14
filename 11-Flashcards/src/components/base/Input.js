export default function Input({ targetEl, state }) {
  const inputEl = document.createElement('input');

  inputEl.addEventListener('click', (e) => {
    const value = e.target.value;

    console.log(value);
  });

  targetEl.appendChild(inputEl);
}
