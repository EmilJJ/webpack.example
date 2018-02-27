import createMenu from './menu';
import './style.scss';

const menu = createMenu(["Home", "About us", "Contacts"], "menu");

document.body.appendChild(menu);