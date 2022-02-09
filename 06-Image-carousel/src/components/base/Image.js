export default function Image({ targetEl, imageUrl }) {
  const imageEl = document.createElement('img');

  imageEl.src = imageUrl;
  imageEl.style.width = '100%';
  imageEl.style.height = '100%';

  targetEl.appendChild(imageEl);
}
