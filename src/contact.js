// Here I will create all the 'contact us' information functions.

function createContactPage() {
  const contactPageDiv = document.createElement('div');
  // homePageDiv.id = 'home-page-div';

  const contactForm = document.createElement('form');
  contactForm.id = 'contact-form';

  contactPageDiv.append(contactForm);
  main.append(contactPageDiv);
  
  return contactPageDiv;
}

export function loadContactPage() {
const main = document.querySelector('#main');

main.appendChild(createContactPage());
}

// test