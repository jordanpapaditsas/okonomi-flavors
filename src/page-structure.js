import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import { loadContactPage } from "./contact";
import homeBackgroundPic from './assets/daniele-salutari-restaurant-home.png';
import contactBackgroundPic from './assets/contact-us.png';
import logoPic from './assets/okonomi-logo.png';

function createHeader() {
  const header = document.createElement('header');
  header.id = 'header';

  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src = logoPic;
  logo.alt = 'LOGO';

  header.append(logo);
  header.append(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  nav.id = 'nav';

  const homeNavBtn = document.createElement('button');
  homeNavBtn.id = 'home-btn';
  homeNavBtn.textContent = 'HOME';

  const menuNavBtn = document.createElement('button');
  menuNavBtn.id = 'menu-btn';
  menuNavBtn.textContent = 'MENU';

  const contactNavBtn = document.createElement('button');
  contactNavBtn.id = 'contact-btn';
  contactNavBtn.textContent = 'CONTACT';

  // Hamburger menu 
  const hamburger = document.createElement('div');
  hamburger.id = 'hamburger-container';
  const firstBar = document.createElement('span');
  firstBar.classList.add('hamburger-bar');
  const secondBar = document.createElement('span');
  secondBar.classList.add('hamburger-bar');
  const thirdBar = document.createElement('span');
  thirdBar.classList.add('hamburger-bar');

  nav.append(homeNavBtn);
  nav.append(menuNavBtn);
  nav.append(contactNavBtn);
  hamburger.append(firstBar, secondBar, thirdBar);
  nav.append(hamburger);

  return nav;
}

function createMain() {
  const main = document.createElement('main');
  main.id = 'main';

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.id = 'footer';

  const footerDiv = document.createElement('div');
  footerDiv.id = 'footer-div';

  const copyright = document.createElement('span');
  copyright.textContent = 'Copyright ©';

  const authorName = document.createElement('p');
  authorName.textContent = 'Jordan Papaditsas';

  const currentDate = new Date().getFullYear();

  const gitHubLink = document.createElement('a');
  gitHubLink.href = 'https://github.com/jordanpapaditsas';

  const gitHubIcon = document.createElement('i');
  gitHubIcon.classList.add('fa-brands', 'fa-github');

  footerDiv.append(copyright, authorName, currentDate, gitHubLink);
  gitHubLink.append(gitHubIcon);
  footer.append(footerDiv);

  return footer;
}

  // Function for switching navbar pages
function browseNavTabs() {
  const buttons = document.querySelectorAll('button');
  const homeBackgroundImage = homeBackgroundPic;
  const contactBackgroundImage = contactBackgroundPic;

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (event.target.id === 'home-btn') {
        cleanMain();
        document.body.style.backgroundImage = `url(${homeBackgroundImage})`;
        loadHomePage();
      } else if (event.target.id === 'menu-btn') {
        cleanMain();
        document.body.style.backgroundImage = 'none';
        loadMenuPage();
      } else if (event.target.id === 'contact-btn') {
        cleanMain();
        document.body.style.backgroundImage = `url(${contactBackgroundImage})`;
        loadContactPage();
      }
    });
  });
}

function displayHamburgerMenu() {
  const hamburgerMenu = document.querySelector('#hamburger-container');
  const navBar = document.querySelector('#nav');

  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navBar.classList.toggle('active');
  });
}

function cleanMain() {
  const main = document.querySelector('#main');
  main.textContent = '';

  return main;
}

export function loadPage() {
  const content = document.querySelector('#content');

  content.append(createHeader());
  content.append(createMain());
  content.append(createFooter());
  loadHomePage();
  browseNavTabs();
  displayHamburgerMenu();

  return content;
}


