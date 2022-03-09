export default function Image({ targetEl, imageUrl }) {
  const imageEl = document.createElement('img');
  imageEl.src = imageUrl;

  targetEl.appendChild(imageEl);
}
