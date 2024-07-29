import './style.css'
import loadPage from "./loadPage";
import menuLoad from "./menu/menu"
import contactLoad from "./contact/contact";

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu-button'); // Renamed to avoid conflict
const contactBtn = document.querySelector('.contact');


document.addEventListener('DOMContentLoaded', loadPage);

let removeAll = function() {
    const content = document.querySelector('.content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        removeAll(); // Clear existing content
        menuLoad();  // Load new menu content
    });
}

if (homeBtn) {
    homeBtn.addEventListener('click', () => {
        removeAll(); // Clear existing content
        loadPage();  // Load home page content
    });
}

if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        removeAll(); // Clear existing content
        contactLoad();  // Load home page content
    });
}