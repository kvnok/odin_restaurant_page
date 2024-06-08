console.log('Webpack is working!');
import { initialLoad } from './initialLoad';

initialLoad();

import { loadHomePage } from './home';
import { loadMenuPage } from './menu';
import { loadAboutPage } from './about';

const homeButton = document.getElementById('home-tab');
const menuButton = document.getElementById('menu-tab');
const aboutButton = document.getElementById('about-tab');

homeButton.addEventListener('click', () => {
    loadHomePage();
});

menuButton.addEventListener('click', () => {
    loadMenuPage();
});

aboutButton.addEventListener('click', () => {
	loadAboutPage();
});

// Initial load
loadHomePage();
