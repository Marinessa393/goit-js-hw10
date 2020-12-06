import menuList from './menu.json';
import menuTemplate from './template.hbs';

const menuRef = document.querySelector('.js-menu');
const newCard = menuTemplate(menuList);
menuRef.insertAdjacentHTML('afterbegin', newCard);
