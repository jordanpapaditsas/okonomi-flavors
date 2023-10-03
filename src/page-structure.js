//  Here I will have all the 'create layout' functions of my webpage.

function createHeader() {
  const header = document.createElement('header');
  header.id = 'header';

  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src = '../src/assets/okonomi-logo.png';
  logo.alt = 'LOGO';

  header.append(logo);

  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  nav.id = 'nav';

  const homeNav = document.createElement('a');
  homeNav.id = 'home-nav';
  homeNav.textContent = 'Home';

  const menuNav = document.createElement('a');
  menuNav.id = 'menu-nav';
  menuNav.textContent = 'Menu';

  const contactNav = document.createElement('a');
  contactNav.id = 'contact-nav';
  contactNav.textContent = 'Contact Us';

  nav.appendChild(homeNav);
  nav.appendChild(menuNav);
  nav.appendChild(contactNav);

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

  const gitHubName = document.createElement('p');
  gitHubName.textContent = 'Jordan Papaditsas';

  const currentDate = new Date().getFullYear();

  footer.appendChild(gitHubName);
  footer.append(currentDate);

  return footer;
}

function loadPage() {
  const content = document.querySelector('#content');

  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

module.exports = loadPage;
