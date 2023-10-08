function createContactPage() {
  const contactPageContainer = document.createElement('div');
  contactPageContainer.id = 'contact-page-container';

  const contactUsTitle = document.createElement('h1');
  contactUsTitle.id = 'contact-us-title';
  contactUsTitle.textContent = 'Contact Us';

  contactPageContainer.append(contactUsTitle ,createForm());

  return contactPageContainer;
}

function createForm(name, email, message) {
  const contactFormContainer = document.createElement('div');
  contactFormContainer.id = 'contact-form-container';

  const contactForm = document.createElement('form');
  contactForm.id = 'contact-form';
  contactForm.method = 'post';

  const nameDiv = document.createElement('div');
  nameDiv.id = 'name-div';
  const nameLabel = document.createElement('label');
  nameLabel.id = 'name-label';
  nameLabel.for = `${name}`;
  nameLabel.textContent = 'Name: ';
  const nameInput = document.createElement('input');
  nameInput.id = 'name-input';
  nameInput.type = 'text';
  nameInput.name = `${name}`;

  const emailDiv = document.createElement('div');
  emailDiv.id = 'email-div';
  const emailLabel = document.createElement('label');
  emailLabel.id = 'email-label';
  emailLabel.for = `${email}`;
  emailLabel.textContent = 'Email: ';
  const emailInput = document.createElement('input');
  emailInput.id = 'email-input';
  emailInput.type = 'email';
  emailInput.name = `${email}`;

  nameDiv.append(nameLabel, nameInput);
  emailDiv.append(emailLabel, emailInput);
  contactForm.append(nameDiv, emailDiv);
  contactFormContainer.append(contactForm);

  return contactFormContainer;
}

export function loadContactPage() {
const main = document.querySelector('#main');

main.append(createContactPage());
}

