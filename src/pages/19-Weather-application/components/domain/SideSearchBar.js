import { Form, Button } from '../base/index.js';
import weatherStlye from '../../style/style.css';

export default function SideSearchBar({ targetEl, onSearchSubmit }) {
  const sideBarEl = document.createElement('div');
  sideBarEl.className = `${weatherStlye.slide} ${weatherStlye.in}`;

  new Form({ targetEl: sideBarEl, onSubmit: onSearchSubmit });

  targetEl.appendChild(sideBarEl);
}
