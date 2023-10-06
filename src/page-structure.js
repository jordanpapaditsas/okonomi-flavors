import { loadHomePage } from "./home";
import { loadContactPage } from "./contact";
import { loadMenuPage } from "./menu";
import homeBackgroundPic from './assets/daniele-salutari-restaurant-home.png';
import contactBackgroundPic from './assets/daniel-hooper-about-us.png';

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

  const homeNavBtn = document.createElement('button');
  homeNavBtn.id = 'home-btn';
  homeNavBtn.textContent = 'HOME';

  const menuNavBtn = document.createElement('button');
  menuNavBtn.id = 'menu-btn';
  menuNavBtn.textContent = 'MENU';

  const contactNavBtn = document.createElement('button');
  contactNavBtn.id = 'contact-btn';
  contactNavBtn.textContent = 'CONTACT US';

  nav.appendChild(homeNavBtn);
  nav.appendChild(menuNavBtn);
  nav.appendChild(contactNavBtn);

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


function browseNavTabs() {
  const buttons = document.querySelectorAll('button');
  const homeBackgroundImage = homeBackgroundPic;
  const contactBackgroundImage = contactBackgroundPic;

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (event.target.id === 'home-btn') {
        cleanMain();
        document.body.style.backgroundImage = `url(${homeBackgroundImage})`;
        changeFooterTextColorWhite();
        loadHomePage();
      } else if (event.target.id === 'menu-btn') {
        cleanMain();
        document.body.style.backgroundImage = 'none';
        changeFooterTextColorBlack();
        loadMenuPage();
      } else if (event.target.id === 'contact-btn') {
        cleanMain();
        document.body.style.backgroundImage = `url(${contactBackgroundImage})`;
        changeFooterTextColorBlack();
        loadContactPage();
      }
    });
  });
}

function cleanMain() {
  const main = document.querySelector('#main');
  main.textContent = '';

  return main;
}

function changeFooterTextColorBlack() {
  const footerDiv = document.querySelector('#footer-div');
  footerDiv.style.cssText = 'color: black;';
  const gitHubIcon = document.querySelector('.fa-brands');
  gitHubIcon.style.color = 'black';
}

function changeFooterTextColorWhite() {
  const footerDiv = document.querySelector('#footer-div');
  footerDiv.style.cssText = 'color: white;';
  const gitHubIcon = document.querySelector('.fa-brands');
  gitHubIcon.style.color = 'white';
}

export function loadPage() {
  const content = document.querySelector('#content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  loadHomePage();
  browseNavTabs();

  return content;
}


