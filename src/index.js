import { home } from "./home";
import { about } from "./about";
import { menu } from "./menu";
import "./styles.css"

const container = document.getElementById('content');
container.appendChild(home());
container.appendChild(about());
container.appendChild(menu());