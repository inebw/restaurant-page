import { home } from "./home";
import { about } from "./about";
import { menu } from "./menu";
import "./styles.css"

const container = document.getElementById('content');

container.appendChild(home());

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');
homeButton.classList.toggle('current');

homeButton.addEventListener('click', () => {
    menuButton.classList.remove('current');
    aboutButton.classList.remove('current');
    homeButton.classList.add('current');
    container.removeChild(container.firstChild);
    container.appendChild(home());
})

menuButton.addEventListener('click', () => {
    homeButton.classList.remove('current');
    aboutButton.classList.remove('current');
    menuButton.classList.add('current');
    container.removeChild(container.firstChild);
    container.appendChild(menu());
})

aboutButton.addEventListener('click', () => {
    homeButton.classList.remove('current');
    aboutButton.classList.add('current');
    menuButton.classList.remove('current');
    container.removeChild(container.firstChild);
    container.appendChild(about());
})

