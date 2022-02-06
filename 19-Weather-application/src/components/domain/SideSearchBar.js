import { Form, Button } from '../base/index.js';

export default function SideSearchBar({ targetEl, onSearchSubmit }) {
  const sideBarEl = document.createElement('div');
  sideBarEl.className = 'slide in';

  new Form({ targetEl: sideBarEl, onSubmit: onSearchSubmit });

  targetEl.appendChild(sideBarEl);
}
