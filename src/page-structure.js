//  Here I will have all the 'create layout' functions of my webpage.
import { loadHomePage } from "./home";
import { loadContactPage } from "./contact";
import { loadMenuPage } from "./menu";

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
  // main.textContent = '';  Clean main for tabbing new option

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.id = 'footer';

  const copyright = document.createElement('span');
  copyright.textContent = 'Copyright ©';

  const authorName = document.createElement('p');
  authorName.textContent = 'Jordan Papaditsas';

  const currentDate = new Date().getFullYear();

  const gitHubLink = document.createElement('a');
  gitHubLink.href = 'https://github.com/jordanpapaditsas';

  const gitHubIcon = document.createElement('i');
  gitHubIcon.classList.add('fa-brands', 'fa-github');

  footer.append(copyright);
  footer.append(authorName);
  footer.append(currentDate);
  gitHubLink.appendChild(gitHubIcon);
  footer.append(gitHubLink);

  return footer;
}

function browseNavTabs() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (event.target.id === 'home-btn') {
        cleanMain();
        loadHomePage();
      } else if (event.target.id === 'menu-btn') {
        cleanMain();
        changeColorInGithubIcon();
        loadMenuPage();
      } else if (event.target.id === 'contact-btn') {
        cleanMain();
        changeColorInGithubIcon();
        loadContactPage();
      }
    });
  });
}

function removeBackGroundImg() {
// Need to make a function for removing or toggling the background Image
}

function changeColorInGithubIcon() {
  const gitHubIcon = document.querySelector('.fa-github');

  gitHubIcon.style.color = 'black';

  return gitHubIcon;
}

function cleanMain() {
  const main = document.querySelector('#main');

  main.textContent = '';

  return main;
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


// Tasks: 
// Figure out how to toggle background image with JS
// Make the menu page with prices
// Make the contact form  
// Complete the CSS styling