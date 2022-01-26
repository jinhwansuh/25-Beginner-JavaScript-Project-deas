export default function Image({ targetEl, url }) {
  const imageEl = document.createElement('img');
  imageEl.src = url;

  targetEl.appendChild(imageEl);
}
