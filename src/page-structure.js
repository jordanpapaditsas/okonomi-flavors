//  Here I will have all the 'create layout' functions of my webpage.
import { loadHomePage } from "./home";

function createHeader() {
  const header = document.createElement('header');
  header.id = 'header';

  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src = '../src/assets/okonomi-logo.png';
  logo.alt = 'LOGO';

  header.append(logo);
  header.append(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  nav.id = 'nav';

  const homeNav = document.createElement('a');
  homeNav.id = 'home-nav';
  homeNav.textContent = 'HOME';

  const menuNav = document.createElement('a');
  menuNav.id = 'menu-nav';
  menuNav.textContent = 'MENU';

  const contactNav = document.createElement('a');
  contactNav.id = 'contact-nav';
  contactNav.textContent = 'CONTACT US';

  nav.appendChild(homeNav);
  nav.appendChild(menuNav);
  nav.appendChild(contactNav);

  return nav;
}

function createMain() {
  const main = document.createElement('main');
  main.id = 'main';

  const restaurantName = document.createElement('h1');
  restaurantName.id = 'restaurant-name';
  restaurantName.textContent = 'Welcome to Okonomi Flavors';

  main.append(restaurantName);

  // main.textContent = '';  Clean main for tabbing new option

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.id = 'footer';

  const copyright = document.createElement('span');
  copyright.textContent = 'Copyright ©';

  const gitHubName = document.createElement('p');
  gitHubName.textContent = 'Jordan Papaditsas';

  const currentDate = new Date().getFullYear();

  footer.append(copyright);
  footer.append(gitHubName);
  footer.append(currentDate);

  return footer;
}

export function loadPage() {
  const content = document.querySelector('#content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  loadHomePage();

  return content;
}

