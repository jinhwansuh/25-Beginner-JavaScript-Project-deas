import { Text, Form } from '../base/index.js';
import unsplashStyle from '../../style/style.css';

export default function Header({ targetEl, onSubmit }) {
  const headerEl = document.createElement('header');
  headerEl.className = unsplashStyle.header;

  new Text({ targetEl: headerEl, text: 'Unsplash API Demo' });
  new Form({ targetEl: headerEl, onSubmit });

  targetEl.appendChild(headerEl);
}
