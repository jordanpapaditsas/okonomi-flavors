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

  const restaurantName = document.createElement('h1');
  restaurantName.id = 'restaurant-name';
  restaurantName.innerHTML = `Welcome to Okonomi Flavors<br>
                              <span id="restaurant-type">Japanese Restaurant</span>`;

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

function browseNavTabs() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (event.target.id === 'home-btn') {
        //  Handle Home
        console.log('Home button clicked');  // Test home btn
      } else if (event.target.id === 'menu-btn') {
        // Handle Menu
      } else if (event.target.id === 'contact-btn') {
        // Handle Contact
      }
    });
  });
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

