function createContactPage() {
  const contactPageDiv = document.createElement('div');
  contactPageDiv.id = 'contact-page-div';

  const contactForm = document.createElement('form');
  contactForm.id = 'contact-form';

  contactPageDiv.append(contactForm);
  
  return contactPageDiv;
}

export function loadContactPage() {
const main = document.querySelector('#main');

main.appendChild(createContactPage());
}

