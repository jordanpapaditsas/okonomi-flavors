/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContactPage: () => (/* binding */ loadContactPage)
/* harmony export */ });
function createContactPage() {
  const contactPageContainer = document.createElement('div');
  contactPageContainer.id = 'contact-page-container';

  const contactUsTitle = document.createElement('h1');
  contactUsTitle.id = 'contact-us-title';
  contactUsTitle.textContent = 'Contact Us';

  const submitBtnContainer = document.createElement('div');
  submitBtnContainer.id = 'submit-btn-container';

  const submitBtn = document.createElement('button');
  submitBtn.id = 'submit-btn';
  submitBtn.value = 'insert';
  submitBtn.textContent = 'Submit';

  submitBtn.addEventListener('click', submitForm);

  submitBtnContainer.append(submitBtn);
  contactPageContainer.append(contactUsTitle ,createForm(), submitBtnContainer);

  return contactPageContainer;
}

function createForm() {
  const contactFormContainer = document.createElement('div');
  contactFormContainer.id = 'contact-form-container';

  const contactForm = document.createElement('form');
  contactForm.id = 'contact-form';
  contactForm.method = 'POST';

  const nameDiv = document.createElement('div');
  nameDiv.id = 'name-div';
  const nameInput = document.createElement('input');
  nameInput.id = 'name-input';
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.autocomplete = 'on';
  nameInput.placeholder = 'Name';
  
  const emailDiv = document.createElement('div');
  emailDiv.id = 'email-div';
  const emailInput = document.createElement('input');
  emailInput.id = 'email-input';
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.autocomplete = 'on';
  emailInput.placeholder = 'Email';
  
  const messageBoxDiv = document.createElement('div');
  messageBoxDiv.id = 'message-box-div';
  const messageBox = document.createElement('textarea');
  messageBox.id = 'message-textarea';
  messageBox.name = 'message-text';
  messageBox.placeholder = 'Message';
  
  nameDiv.append(nameInput);
  emailDiv.append(emailInput);
  messageBoxDiv.append(messageBox);

  contactForm.append(nameDiv, emailDiv, messageBoxDiv, errorMessages.errorValidationForName, 
                      errorMessages.errorValidationForEmail, errorMessages.errorValidationForTextArea);
  contactFormContainer.append(contactForm);

  return contactFormContainer;
}

function submitForm() {
  const name = document.querySelector('#name-input').value;
  const email = document.querySelector('#email-input').value;
  const message = document.querySelector('#message-textarea').value;
  const main = document.querySelector('#main');

  if (!validateForm()) {
    return;
  }

  // Create an object with the data taken from the form
  const formData = {
    name: name,
    email: email,
    message: message,
  };

  // Convert the formData object into a JSON string
  const formDataJSON = JSON.stringify(formData);

  // Store the JSON data in localStorage
  localStorage.setItem('formData', formDataJSON);

  document.querySelector('#name-input').value = '';
  document.querySelector('#email-input').value = '';
  document.querySelector('#message-textarea').value = '';

  displayLocalStorageData();  // Update the displayed data from local storage

  main.append(confirmMessages.confirmationMessage);
}

function validateForm() {
  const nameInput = document.querySelector('#name-input').value;
  const emailInput = document.querySelector('#email-input').value;
  const messageTextArea = document.querySelector('#message-textarea').value;
  const confirmationMessage = document.querySelector('#confirmation-message');
  let isFormInputValid = true;

  if (!nameInput || nameInput.length < 2) {
    errorMessages.errorValidationForName.innerHTML = 'Name is too short, please give a valid name!';
    isFormInputValid = false;
  } else if (!/^[a-zA-z]+$/.test(nameInput) ) {
    errorMessages.errorValidationForName.innerHTML = 'Please give a valid name!';
  } else {
    // Clear the error message if the input is valid
    errorMessages.errorValidationForName.innerHTML = '';
  }

  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(emailInput)) {
    errorMessages.errorValidationForEmail.innerHTML = 'Please give a valid email!';
    isFormInputValid = false;
  } else {
    errorMessages.errorValidationForEmail.innerHTML = '';
  }

  if (!messageTextArea|| messageTextArea.length <= 6) {
    errorMessages.errorValidationForTextArea.innerHTML = 'Message too short!';
    isFormInputValid = false;
  } else {
    errorMessages.errorValidationForTextArea.innerHTML = '';
  }

  if (confirmationMessage) {
    confirmMessages.confirmationMessage.innerHTML = 'You are already submitted the form!';
  } else {
    confirmMessages.confirmationMessage.innerHTML = `Form submitted successfully! <br>
    We will contact you as soon as possible.`;
  }

  return isFormInputValid;
}

// IIFE (Immediately Invoked Function Expression) for encapsulation purpose
const errorMessages = (() => {
  const errorValidationForName = document.createElement('span');
  errorValidationForName.id = 'error-name';

  const errorValidationForEmail = document.createElement('span');
  errorValidationForEmail.id = 'error-email';

  const errorValidationForTextArea = document.createElement('span');
  errorValidationForTextArea.id = 'error-textarea';

  return {
    errorValidationForName,
    errorValidationForEmail,
    errorValidationForTextArea,
  };
})();

const confirmMessages = (() => {
  // Shows a confirmation message upon a successful submission of the form
  const confirmationMessage = document.createElement('div');
  confirmationMessage.id = 'confirmation-message';

  return {
    confirmationMessage
  }
})();

function displayLocalStorageData() {
  // Retrieving the data from local storage
  const localStorageData = localStorage.getItem('formData');

  if (localStorageData) {
    // Parsing JSON string into a JS object
    const parsedData = JSON.parse(localStorageData);

    // logs the stored data from the form
    console.log('Stored Form Data: ', parsedData);
  } else {
    console.log('There isn\'t any data stored in the local storage.');
  }
}

function loadContactPage() {
  const main = document.querySelector('#main');

  main.append(createContactPage());
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)
/* harmony export */ });
 function createHomePage() {
  const homePageDiv = document.createElement('div');
  homePageDiv.id = 'home-page-div';

  const restaurantName = document.createElement('h1');
  restaurantName.id = 'restaurant-name';
  restaurantName.innerHTML = `Welcome to Okonomi Flavors<br>
                              <span id="restaurant-type">Traditional Japanese Restaurant</span>`;

  const homeParagraph = document.createElement('p');
  homeParagraph.id = 'home-paragraph';
  homeParagraph.innerHTML = `
  The art of crafting mouthwatering okonomiyaki has 
  been our passion and tradition since 1900. 
  With over a century of dedicated service, 
  we take immense pride in our commitment to delivering 
  not only the finest flavors but also the warmest hospitality to our 
  cherished customers. <br><br>
  
  For generations, our family-owned establishment has 
  perfected the delicate balance of savory and sweet, crispy and tender, 
  that defines the essence of okonomiyaki. Every dish we create is 
  a labor of love, passed down through the years, preserving the authenticity 
  and time-honored techniques that have made us a beloved culinary destination.`;

  const workScheduleDiv = document.createElement('div');
  workScheduleDiv.id = 'work-schedule-div';
  
  const hoursTitle = document.createElement('h2');
  hoursTitle.id = 'hours-h2';
  hoursTitle.textContent = 'Working Hours';

  const hoursMonday = document.createElement('p');
  hoursMonday.classList.add('hours');
  hoursMonday.textContent = 'Monday: 10:00 - 21:00';
  const hoursTuesday = document.createElement('p');
  hoursTuesday.classList.add('hours');
  hoursTuesday.textContent = 'Tuesday: 10:00 - 21:00';
  const hoursWednesday = document.createElement('p');
  hoursWednesday.classList.add('hours');
  hoursWednesday.textContent = 'Wednesday: 10:00 - 21:00';
  const hoursThursday = document.createElement('p');
  hoursThursday.classList.add('hours');
  hoursThursday.textContent = 'Thursday: 10:00 - 21:00';
  const hoursFriday = document.createElement('p');
  hoursFriday.classList.add('hours');
  hoursFriday.textContent = 'Friday: 10:00 - 21:00';
  const hoursSaturday = document.createElement('p');
  hoursSaturday.classList.add('hours');
  hoursSaturday.textContent = 'Saturday: 10:00 - 18:00';

  workScheduleDiv.append(hoursTitle, hoursMonday, hoursTuesday, hoursWednesday,  
                         hoursThursday, hoursFriday, hoursSaturday);
  homePageDiv.append(restaurantName, homeParagraph, workScheduleDiv);
  
  return homePageDiv;
}

function loadHomePage() {
const main = document.querySelector('#main');

main.append(createHomePage());
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)
/* harmony export */ });
function createMenuPage() {
  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu-div';

  menuContainer.append(
    createProduct(
      'Samurai Bacon',
      'first-product',
      'Testing Description Lorem Ipsum',
      '5.70$'
    )
  );

  menuContainer.append(
    createProduct(
      'Fuji sensation',
      'second-product',
      'Testing Description Lorem Ipsum',
      '7.50$'
    )
  );

  menuContainer.append(
    createProduct(
      'Ninja way',
      'third-product',
      'Testing Description Lorem Ipsum',
      '6.90$'
    )
  );

  menuContainer.append(
    createProduct(
      'Shrimp eruption',
      'fourth-product',
      'Testing Description Lorem Ipsum',
      '9.60$'
    )
  );

  return menuContainer;
}

function createProduct(productTitle, pictureName, description, price) {
  const productCard = document.createElement('div');
  productCard.id = 'product-card';

  const productImage = document.createElement('img');
  productImage.id = 'product-img';
  productImage.src = `../../src/assets/${pictureName.toLowerCase()}.png`;
  productImage.alt = `${pictureName}`;

  const productName = document.createElement('h2');
  productName.id = 'product-title';
  productName.textContent = productTitle;

  const productDescription = document.createElement('p');
  productDescription.id = 'product-description';
  productDescription.textContent = description;

  const productPrice = document.createElement('p');
  productPrice.id = 'product-price';
  productPrice.textContent = price;

  productCard.append(productImage);
  productCard.append(productName);
  productCard.append(productDescription);
  productCard.append(productPrice);

  return productCard;
}

function loadMenuPage() {
  const main = document.querySelector('#main');

  main.append(createMenuPage());
}

/***/ }),

/***/ "./src/page-structure.js":
/*!*******************************!*\
  !*** ./src/page-structure.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadPage: () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _assets_daniele_salutari_restaurant_home_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/daniele-salutari-restaurant-home.png */ "./src/assets/daniele-salutari-restaurant-home.png");
/* harmony import */ var _assets_contact_us_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/contact-us.png */ "./src/assets/contact-us.png");






function createHeader() {
  const header = document.createElement('header');
  header.id = 'header';

  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src = '../../src/assets/okonomi-logo.png';
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

  nav.append(homeNavBtn);
  nav.append(menuNavBtn);
  nav.append(contactNavBtn);

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
  const homeBackgroundImage = _assets_daniele_salutari_restaurant_home_png__WEBPACK_IMPORTED_MODULE_3__;
  const contactBackgroundImage = _assets_contact_us_png__WEBPACK_IMPORTED_MODULE_4__;

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (event.target.id === 'home-btn') {
        cleanMain();
        document.body.style.backgroundImage = `url(${homeBackgroundImage})`;
        (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();
      } else if (event.target.id === 'menu-btn') {
        cleanMain();
        document.body.style.backgroundImage = 'none';
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)();
      } else if (event.target.id === 'contact-btn') {
        cleanMain();
        document.body.style.backgroundImage = `url(${contactBackgroundImage})`;
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadContactPage)();
      }
    });
  });
}

function cleanMain() {
  const main = document.querySelector('#main');
  main.textContent = '';

  return main;
}

function loadPage() {
  const content = document.querySelector('#content');

  content.append(createHeader());
  content.append(createMain());
  content.append(createFooter());
  (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();
  browseNavTabs();

  return content;
}




/***/ }),

/***/ "./src/assets/contact-us.png":
/*!***********************************!*\
  !*** ./src/assets/contact-us.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2a0883929ab3a03c5c5.png";

/***/ }),

/***/ "./src/assets/daniele-salutari-restaurant-home.png":
/*!*********************************************************!*\
  !*** ./src/assets/daniele-salutari-restaurant-home.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc7ac596b4ad63198035.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-structure */ "./src/page-structure.js");


(0,_page_structure__WEBPACK_IMPORTED_MODULE_0__.loadPage)();


// Tasks: 
// Figure out how to not let submit the form more than once in every session
// Complete the CSS styling
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxHQUFHO0FBQ3ZEO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDBCQUEwQjtBQUNuRSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVzQztBQUNBO0FBQ007QUFDa0M7QUFDbkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix5RUFBaUI7QUFDL0MsaUNBQWlDLG1EQUFvQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELG9CQUFvQjtBQUN6RSxRQUFRLG1EQUFZO0FBQ3BCLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUSxtREFBWTtBQUNwQixRQUFRO0FBQ1I7QUFDQSxxREFBcUQsdUJBQXVCO0FBQzVFLFFBQVEseURBQWU7QUFDdkI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDbEI0QztBQUM1QztBQUNBLHlEQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL3NyYy9wYWdlLXN0cnVjdHVyZS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RQYWdlKCkge1xyXG4gIGNvbnN0IGNvbnRhY3RQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFjdFBhZ2VDb250YWluZXIuaWQgPSAnY29udGFjdC1wYWdlLWNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RVc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBjb250YWN0VXNUaXRsZS5pZCA9ICdjb250YWN0LXVzLXRpdGxlJztcclxuICBjb250YWN0VXNUaXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcclxuXHJcbiAgY29uc3Qgc3VibWl0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc3VibWl0QnRuQ29udGFpbmVyLmlkID0gJ3N1Ym1pdC1idG4tY29udGFpbmVyJztcclxuXHJcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgc3VibWl0QnRuLmlkID0gJ3N1Ym1pdC1idG4nO1xyXG4gIHN1Ym1pdEJ0bi52YWx1ZSA9ICdpbnNlcnQnO1xyXG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xyXG5cclxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRGb3JtKTtcclxuXHJcbiAgc3VibWl0QnRuQ29udGFpbmVyLmFwcGVuZChzdWJtaXRCdG4pO1xyXG4gIGNvbnRhY3RQYWdlQ29udGFpbmVyLmFwcGVuZChjb250YWN0VXNUaXRsZSAsY3JlYXRlRm9ybSgpLCBzdWJtaXRCdG5Db250YWluZXIpO1xyXG5cclxuICByZXR1cm4gY29udGFjdFBhZ2VDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XHJcbiAgY29uc3QgY29udGFjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWN0Rm9ybUNvbnRhaW5lci5pZCA9ICdjb250YWN0LWZvcm0tY29udGFpbmVyJztcclxuXHJcbiAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgY29udGFjdEZvcm0uaWQgPSAnY29udGFjdC1mb3JtJztcclxuICBjb250YWN0Rm9ybS5tZXRob2QgPSAnUE9TVCc7XHJcblxyXG4gIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuYW1lRGl2LmlkID0gJ25hbWUtZGl2JztcclxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIG5hbWVJbnB1dC5pZCA9ICduYW1lLWlucHV0JztcclxuICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBuYW1lSW5wdXQubmFtZSA9ICduYW1lJztcclxuICBuYW1lSW5wdXQuYXV0b2NvbXBsZXRlID0gJ29uJztcclxuICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnTmFtZSc7XHJcbiAgXHJcbiAgY29uc3QgZW1haWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlbWFpbERpdi5pZCA9ICdlbWFpbC1kaXYnO1xyXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGVtYWlsSW5wdXQuaWQgPSAnZW1haWwtaW5wdXQnO1xyXG4gIGVtYWlsSW5wdXQudHlwZSA9ICdlbWFpbCc7XHJcbiAgZW1haWxJbnB1dC5uYW1lID0gJ2VtYWlsJztcclxuICBlbWFpbElucHV0LmF1dG9jb21wbGV0ZSA9ICdvbic7XHJcbiAgZW1haWxJbnB1dC5wbGFjZWhvbGRlciA9ICdFbWFpbCc7XHJcbiAgXHJcbiAgY29uc3QgbWVzc2FnZUJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lc3NhZ2VCb3hEaXYuaWQgPSAnbWVzc2FnZS1ib3gtZGl2JztcclxuICBjb25zdCBtZXNzYWdlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICBtZXNzYWdlQm94LmlkID0gJ21lc3NhZ2UtdGV4dGFyZWEnO1xyXG4gIG1lc3NhZ2VCb3gubmFtZSA9ICdtZXNzYWdlLXRleHQnO1xyXG4gIG1lc3NhZ2VCb3gucGxhY2Vob2xkZXIgPSAnTWVzc2FnZSc7XHJcbiAgXHJcbiAgbmFtZURpdi5hcHBlbmQobmFtZUlucHV0KTtcclxuICBlbWFpbERpdi5hcHBlbmQoZW1haWxJbnB1dCk7XHJcbiAgbWVzc2FnZUJveERpdi5hcHBlbmQobWVzc2FnZUJveCk7XHJcblxyXG4gIGNvbnRhY3RGb3JtLmFwcGVuZChuYW1lRGl2LCBlbWFpbERpdiwgbWVzc2FnZUJveERpdiwgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JOYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwsIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yVGV4dEFyZWEpO1xyXG4gIGNvbnRhY3RGb3JtQ29udGFpbmVyLmFwcGVuZChjb250YWN0Rm9ybSk7XHJcblxyXG4gIHJldHVybiBjb250YWN0Rm9ybUNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0Rm9ybSgpIHtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtaW5wdXQnKS52YWx1ZTtcclxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbC1pbnB1dCcpLnZhbHVlO1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZS10ZXh0YXJlYScpLnZhbHVlO1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cclxuICBpZiAoIXZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlIGRhdGEgdGFrZW4gZnJvbSB0aGUgZm9ybVxyXG4gIGNvbnN0IGZvcm1EYXRhID0ge1xyXG4gICAgbmFtZTogbmFtZSxcclxuICAgIGVtYWlsOiBlbWFpbCxcclxuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgfTtcclxuXHJcbiAgLy8gQ29udmVydCB0aGUgZm9ybURhdGEgb2JqZWN0IGludG8gYSBKU09OIHN0cmluZ1xyXG4gIGNvbnN0IGZvcm1EYXRhSlNPTiA9IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKTtcclxuXHJcbiAgLy8gU3RvcmUgdGhlIEpTT04gZGF0YSBpbiBsb2NhbFN0b3JhZ2VcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybURhdGEnLCBmb3JtRGF0YUpTT04pO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1pbnB1dCcpLnZhbHVlID0gJyc7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsLWlucHV0JykudmFsdWUgPSAnJztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZS10ZXh0YXJlYScpLnZhbHVlID0gJyc7XHJcblxyXG4gIGRpc3BsYXlMb2NhbFN0b3JhZ2VEYXRhKCk7ICAvLyBVcGRhdGUgdGhlIGRpc3BsYXllZCBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxyXG5cclxuICBtYWluLmFwcGVuZChjb25maXJtTWVzc2FnZXMuY29uZmlybWF0aW9uTWVzc2FnZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcclxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1pbnB1dCcpLnZhbHVlO1xyXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwtaW5wdXQnKS52YWx1ZTtcclxuICBjb25zdCBtZXNzYWdlVGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZS10ZXh0YXJlYScpLnZhbHVlO1xyXG4gIGNvbnN0IGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybWF0aW9uLW1lc3NhZ2UnKTtcclxuICBsZXQgaXNGb3JtSW5wdXRWYWxpZCA9IHRydWU7XHJcblxyXG4gIGlmICghbmFtZUlucHV0IHx8IG5hbWVJbnB1dC5sZW5ndGggPCAyKSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvck5hbWUuaW5uZXJIVE1MID0gJ05hbWUgaXMgdG9vIHNob3J0LCBwbGVhc2UgZ2l2ZSBhIHZhbGlkIG5hbWUhJztcclxuICAgIGlzRm9ybUlucHV0VmFsaWQgPSBmYWxzZTtcclxuICB9IGVsc2UgaWYgKCEvXlthLXpBLXpdKyQvLnRlc3QobmFtZUlucHV0KSApIHtcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yTmFtZS5pbm5lckhUTUwgPSAnUGxlYXNlIGdpdmUgYSB2YWxpZCBuYW1lISc7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIENsZWFyIHRoZSBlcnJvciBtZXNzYWdlIGlmIHRoZSBpbnB1dCBpcyB2YWxpZFxyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JOYW1lLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaWYgKCEvXltBLVphLXowLTkuXyUrLV0rQFtBLVphLXowLTkuLV0rXFwuW0EtWmEtel17Mix9JC8udGVzdChlbWFpbElucHV0KSkge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JFbWFpbC5pbm5lckhUTUwgPSAnUGxlYXNlIGdpdmUgYSB2YWxpZCBlbWFpbCEnO1xyXG4gICAgaXNGb3JtSW5wdXRWYWxpZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvckVtYWlsLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFtZXNzYWdlVGV4dEFyZWF8fCBtZXNzYWdlVGV4dEFyZWEubGVuZ3RoIDw9IDYpIHtcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yVGV4dEFyZWEuaW5uZXJIVE1MID0gJ01lc3NhZ2UgdG9vIHNob3J0ISc7XHJcbiAgICBpc0Zvcm1JbnB1dFZhbGlkID0gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yVGV4dEFyZWEuaW5uZXJIVE1MID0gJyc7XHJcbiAgfVxyXG5cclxuICBpZiAoY29uZmlybWF0aW9uTWVzc2FnZSkge1xyXG4gICAgY29uZmlybU1lc3NhZ2VzLmNvbmZpcm1hdGlvbk1lc3NhZ2UuaW5uZXJIVE1MID0gJ1lvdSBhcmUgYWxyZWFkeSBzdWJtaXR0ZWQgdGhlIGZvcm0hJztcclxuICB9IGVsc2Uge1xyXG4gICAgY29uZmlybU1lc3NhZ2VzLmNvbmZpcm1hdGlvbk1lc3NhZ2UuaW5uZXJIVE1MID0gYEZvcm0gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseSEgPGJyPlxyXG4gICAgV2Ugd2lsbCBjb250YWN0IHlvdSBhcyBzb29uIGFzIHBvc3NpYmxlLmA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXNGb3JtSW5wdXRWYWxpZDtcclxufVxyXG5cclxuLy8gSUlGRSAoSW1tZWRpYXRlbHkgSW52b2tlZCBGdW5jdGlvbiBFeHByZXNzaW9uKSBmb3IgZW5jYXBzdWxhdGlvbiBwdXJwb3NlXHJcbmNvbnN0IGVycm9yTWVzc2FnZXMgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGVycm9yVmFsaWRhdGlvbkZvck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZXJyb3JWYWxpZGF0aW9uRm9yTmFtZS5pZCA9ICdlcnJvci1uYW1lJztcclxuXHJcbiAgY29uc3QgZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwuaWQgPSAnZXJyb3ItZW1haWwnO1xyXG5cclxuICBjb25zdCBlcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBlcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYS5pZCA9ICdlcnJvci10ZXh0YXJlYSc7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlcnJvclZhbGlkYXRpb25Gb3JOYW1lLFxyXG4gICAgZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwsXHJcbiAgICBlcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYSxcclxuICB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgY29uZmlybU1lc3NhZ2VzID0gKCgpID0+IHtcclxuICAvLyBTaG93cyBhIGNvbmZpcm1hdGlvbiBtZXNzYWdlIHVwb24gYSBzdWNjZXNzZnVsIHN1Ym1pc3Npb24gb2YgdGhlIGZvcm1cclxuICBjb25zdCBjb25maXJtYXRpb25NZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uZmlybWF0aW9uTWVzc2FnZS5pZCA9ICdjb25maXJtYXRpb24tbWVzc2FnZSc7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb25maXJtYXRpb25NZXNzYWdlXHJcbiAgfVxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUxvY2FsU3RvcmFnZURhdGEoKSB7XHJcbiAgLy8gUmV0cmlldmluZyB0aGUgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBsb2NhbFN0b3JhZ2VEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm1EYXRhJyk7XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2VEYXRhKSB7XHJcbiAgICAvLyBQYXJzaW5nIEpTT04gc3RyaW5nIGludG8gYSBKUyBvYmplY3RcclxuICAgIGNvbnN0IHBhcnNlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZURhdGEpO1xyXG5cclxuICAgIC8vIGxvZ3MgdGhlIHN0b3JlZCBkYXRhIGZyb20gdGhlIGZvcm1cclxuICAgIGNvbnNvbGUubG9nKCdTdG9yZWQgRm9ybSBEYXRhOiAnLCBwYXJzZWREYXRhKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ1RoZXJlIGlzblxcJ3QgYW55IGRhdGEgc3RvcmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlLicpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0UGFnZSgpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuXHJcbiAgbWFpbi5hcHBlbmQoY3JlYXRlQ29udGFjdFBhZ2UoKSk7XHJcbn1cclxuXHJcbiIsIiBmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcclxuICBjb25zdCBob21lUGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvbWVQYWdlRGl2LmlkID0gJ2hvbWUtcGFnZS1kaXYnO1xyXG5cclxuICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgcmVzdGF1cmFudE5hbWUuaWQgPSAncmVzdGF1cmFudC1uYW1lJztcclxuICByZXN0YXVyYW50TmFtZS5pbm5lckhUTUwgPSBgV2VsY29tZSB0byBPa29ub21pIEZsYXZvcnM8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicmVzdGF1cmFudC10eXBlXCI+VHJhZGl0aW9uYWwgSmFwYW5lc2UgUmVzdGF1cmFudDwvc3Bhbj5gO1xyXG5cclxuICBjb25zdCBob21lUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvbWVQYXJhZ3JhcGguaWQgPSAnaG9tZS1wYXJhZ3JhcGgnO1xyXG4gIGhvbWVQYXJhZ3JhcGguaW5uZXJIVE1MID0gYFxyXG4gIFRoZSBhcnQgb2YgY3JhZnRpbmcgbW91dGh3YXRlcmluZyBva29ub21peWFraSBoYXMgXHJcbiAgYmVlbiBvdXIgcGFzc2lvbiBhbmQgdHJhZGl0aW9uIHNpbmNlIDE5MDAuIFxyXG4gIFdpdGggb3ZlciBhIGNlbnR1cnkgb2YgZGVkaWNhdGVkIHNlcnZpY2UsIFxyXG4gIHdlIHRha2UgaW1tZW5zZSBwcmlkZSBpbiBvdXIgY29tbWl0bWVudCB0byBkZWxpdmVyaW5nIFxyXG4gIG5vdCBvbmx5IHRoZSBmaW5lc3QgZmxhdm9ycyBidXQgYWxzbyB0aGUgd2FybWVzdCBob3NwaXRhbGl0eSB0byBvdXIgXHJcbiAgY2hlcmlzaGVkIGN1c3RvbWVycy4gPGJyPjxicj5cclxuICBcclxuICBGb3IgZ2VuZXJhdGlvbnMsIG91ciBmYW1pbHktb3duZWQgZXN0YWJsaXNobWVudCBoYXMgXHJcbiAgcGVyZmVjdGVkIHRoZSBkZWxpY2F0ZSBiYWxhbmNlIG9mIHNhdm9yeSBhbmQgc3dlZXQsIGNyaXNweSBhbmQgdGVuZGVyLCBcclxuICB0aGF0IGRlZmluZXMgdGhlIGVzc2VuY2Ugb2Ygb2tvbm9taXlha2kuIEV2ZXJ5IGRpc2ggd2UgY3JlYXRlIGlzIFxyXG4gIGEgbGFib3Igb2YgbG92ZSwgcGFzc2VkIGRvd24gdGhyb3VnaCB0aGUgeWVhcnMsIHByZXNlcnZpbmcgdGhlIGF1dGhlbnRpY2l0eSBcclxuICBhbmQgdGltZS1ob25vcmVkIHRlY2huaXF1ZXMgdGhhdCBoYXZlIG1hZGUgdXMgYSBiZWxvdmVkIGN1bGluYXJ5IGRlc3RpbmF0aW9uLmA7XHJcblxyXG4gIGNvbnN0IHdvcmtTY2hlZHVsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdvcmtTY2hlZHVsZURpdi5pZCA9ICd3b3JrLXNjaGVkdWxlLWRpdic7XHJcbiAgXHJcbiAgY29uc3QgaG91cnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgaG91cnNUaXRsZS5pZCA9ICdob3Vycy1oMic7XHJcbiAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9ICdXb3JraW5nIEhvdXJzJztcclxuXHJcbiAgY29uc3QgaG91cnNNb25kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNNb25kYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc01vbmRheS50ZXh0Q29udGVudCA9ICdNb25kYXk6IDEwOjAwIC0gMjE6MDAnO1xyXG4gIGNvbnN0IGhvdXJzVHVlc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob3Vyc1R1ZXNkYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc1R1ZXNkYXkudGV4dENvbnRlbnQgPSAnVHVlc2RheTogMTA6MDAgLSAyMTowMCc7XHJcbiAgY29uc3QgaG91cnNXZWRuZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNXZWRuZXNkYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc1dlZG5lc2RheS50ZXh0Q29udGVudCA9ICdXZWRuZXNkYXk6IDEwOjAwIC0gMjE6MDAnO1xyXG4gIGNvbnN0IGhvdXJzVGh1cnNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNUaHVyc2RheS5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIGhvdXJzVGh1cnNkYXkudGV4dENvbnRlbnQgPSAnVGh1cnNkYXk6IDEwOjAwIC0gMjE6MDAnO1xyXG4gIGNvbnN0IGhvdXJzRnJpZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJzRnJpZGF5LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgaG91cnNGcmlkYXkudGV4dENvbnRlbnQgPSAnRnJpZGF5OiAxMDowMCAtIDIxOjAwJztcclxuICBjb25zdCBob3Vyc1NhdHVyZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJzU2F0dXJkYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc1NhdHVyZGF5LnRleHRDb250ZW50ID0gJ1NhdHVyZGF5OiAxMDowMCAtIDE4OjAwJztcclxuXHJcbiAgd29ya1NjaGVkdWxlRGl2LmFwcGVuZChob3Vyc1RpdGxlLCBob3Vyc01vbmRheSwgaG91cnNUdWVzZGF5LCBob3Vyc1dlZG5lc2RheSwgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaG91cnNUaHVyc2RheSwgaG91cnNGcmlkYXksIGhvdXJzU2F0dXJkYXkpO1xyXG4gIGhvbWVQYWdlRGl2LmFwcGVuZChyZXN0YXVyYW50TmFtZSwgaG9tZVBhcmFncmFwaCwgd29ya1NjaGVkdWxlRGl2KTtcclxuICBcclxuICByZXR1cm4gaG9tZVBhZ2VEaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cclxubWFpbi5hcHBlbmQoY3JlYXRlSG9tZVBhZ2UoKSk7XHJcbn1cclxuIiwiZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XHJcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lbnVDb250YWluZXIuaWQgPSAnbWVudS1kaXYnO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmFwcGVuZChcclxuICAgIGNyZWF0ZVByb2R1Y3QoXHJcbiAgICAgICdTYW11cmFpIEJhY29uJyxcclxuICAgICAgJ2ZpcnN0LXByb2R1Y3QnLFxyXG4gICAgICAnVGVzdGluZyBEZXNjcmlwdGlvbiBMb3JlbSBJcHN1bScsXHJcbiAgICAgICc1LjcwJCdcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmFwcGVuZChcclxuICAgIGNyZWF0ZVByb2R1Y3QoXHJcbiAgICAgICdGdWppIHNlbnNhdGlvbicsXHJcbiAgICAgICdzZWNvbmQtcHJvZHVjdCcsXHJcbiAgICAgICdUZXN0aW5nIERlc2NyaXB0aW9uIExvcmVtIElwc3VtJyxcclxuICAgICAgJzcuNTAkJ1xyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kKFxyXG4gICAgY3JlYXRlUHJvZHVjdChcclxuICAgICAgJ05pbmphIHdheScsXHJcbiAgICAgICd0aGlyZC1wcm9kdWN0JyxcclxuICAgICAgJ1Rlc3RpbmcgRGVzY3JpcHRpb24gTG9yZW0gSXBzdW0nLFxyXG4gICAgICAnNi45MCQnXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICBjcmVhdGVQcm9kdWN0KFxyXG4gICAgICAnU2hyaW1wIGVydXB0aW9uJyxcclxuICAgICAgJ2ZvdXJ0aC1wcm9kdWN0JyxcclxuICAgICAgJ1Rlc3RpbmcgRGVzY3JpcHRpb24gTG9yZW0gSXBzdW0nLFxyXG4gICAgICAnOS42MCQnXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3QocHJvZHVjdFRpdGxlLCBwaWN0dXJlTmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XHJcbiAgY29uc3QgcHJvZHVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwcm9kdWN0Q2FyZC5pZCA9ICdwcm9kdWN0LWNhcmQnO1xyXG5cclxuICBjb25zdCBwcm9kdWN0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBwcm9kdWN0SW1hZ2UuaWQgPSAncHJvZHVjdC1pbWcnO1xyXG4gIHByb2R1Y3RJbWFnZS5zcmMgPSBgLi4vLi4vc3JjL2Fzc2V0cy8ke3BpY3R1cmVOYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2A7XHJcbiAgcHJvZHVjdEltYWdlLmFsdCA9IGAke3BpY3R1cmVOYW1lfWA7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBwcm9kdWN0TmFtZS5pZCA9ICdwcm9kdWN0LXRpdGxlJztcclxuICBwcm9kdWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2R1Y3RUaXRsZTtcclxuXHJcbiAgY29uc3QgcHJvZHVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHByb2R1Y3REZXNjcmlwdGlvbi5pZCA9ICdwcm9kdWN0LWRlc2NyaXB0aW9uJztcclxuICBwcm9kdWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3QgcHJvZHVjdFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHByb2R1Y3RQcmljZS5pZCA9ICdwcm9kdWN0LXByaWNlJztcclxuICBwcm9kdWN0UHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcclxuXHJcbiAgcHJvZHVjdENhcmQuYXBwZW5kKHByb2R1Y3RJbWFnZSk7XHJcbiAgcHJvZHVjdENhcmQuYXBwZW5kKHByb2R1Y3ROYW1lKTtcclxuICBwcm9kdWN0Q2FyZC5hcHBlbmQocHJvZHVjdERlc2NyaXB0aW9uKTtcclxuICBwcm9kdWN0Q2FyZC5hcHBlbmQocHJvZHVjdFByaWNlKTtcclxuXHJcbiAgcmV0dXJuIHByb2R1Y3RDYXJkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1lbnVQYWdlKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cclxuICBtYWluLmFwcGVuZChjcmVhdGVNZW51UGFnZSgpKTtcclxufSIsImltcG9ydCB7IGxvYWRIb21lUGFnZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgbG9hZE1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgeyBsb2FkQ29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCBob21lQmFja2dyb3VuZFBpYyBmcm9tICcuL2Fzc2V0cy9kYW5pZWxlLXNhbHV0YXJpLXJlc3RhdXJhbnQtaG9tZS5wbmcnO1xyXG5pbXBvcnQgY29udGFjdEJhY2tncm91bmRQaWMgZnJvbSAnLi9hc3NldHMvY29udGFjdC11cy5wbmcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIGhlYWRlci5pZCA9ICdoZWFkZXInO1xyXG5cclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbG9nby5pZCA9ICdsb2dvJztcclxuICBsb2dvLnNyYyA9ICcuLi8uLi9zcmMvYXNzZXRzL29rb25vbWktbG9nby5wbmcnO1xyXG4gIGxvZ28uYWx0ID0gJ0xPR08nO1xyXG5cclxuICBoZWFkZXIuYXBwZW5kKGxvZ28pO1xyXG4gIGhlYWRlci5hcHBlbmQoY3JlYXRlTmF2KCkpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgbmF2LmlkID0gJ25hdic7XHJcblxyXG4gIGNvbnN0IGhvbWVOYXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBob21lTmF2QnRuLmlkID0gJ2hvbWUtYnRuJztcclxuICBob21lTmF2QnRuLnRleHRDb250ZW50ID0gJ0hPTUUnO1xyXG5cclxuICBjb25zdCBtZW51TmF2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgbWVudU5hdkJ0bi5pZCA9ICdtZW51LWJ0bic7XHJcbiAgbWVudU5hdkJ0bi50ZXh0Q29udGVudCA9ICdNRU5VJztcclxuXHJcbiAgY29uc3QgY29udGFjdE5hdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbnRhY3ROYXZCdG4uaWQgPSAnY29udGFjdC1idG4nO1xyXG4gIGNvbnRhY3ROYXZCdG4udGV4dENvbnRlbnQgPSAnQ09OVEFDVCBVUyc7XHJcblxyXG4gIG5hdi5hcHBlbmQoaG9tZU5hdkJ0bik7XHJcbiAgbmF2LmFwcGVuZChtZW51TmF2QnRuKTtcclxuICBuYXYuYXBwZW5kKGNvbnRhY3ROYXZCdG4pO1xyXG5cclxuICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWFpbi5pZCA9ICdtYWluJztcclxuXHJcbiAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICBmb290ZXIuaWQgPSAnZm9vdGVyJztcclxuXHJcbiAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZm9vdGVyRGl2LmlkID0gJ2Zvb3Rlci1kaXYnO1xyXG5cclxuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSc7XHJcblxyXG4gIGNvbnN0IGF1dGhvck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgYXV0aG9yTmFtZS50ZXh0Q29udGVudCA9ICdKb3JkYW4gUGFwYWRpdHNhcyc7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICBjb25zdCBnaXRIdWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGdpdEh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vam9yZGFucGFwYWRpdHNhcyc7XHJcblxyXG4gIGNvbnN0IGdpdEh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgZ2l0SHViSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1icmFuZHMnLCAnZmEtZ2l0aHViJyk7XHJcblxyXG4gIGZvb3RlckRpdi5hcHBlbmQoY29weXJpZ2h0LCBhdXRob3JOYW1lLCBjdXJyZW50RGF0ZSwgZ2l0SHViTGluayk7XHJcbiAgZ2l0SHViTGluay5hcHBlbmQoZ2l0SHViSWNvbik7XHJcbiAgZm9vdGVyLmFwcGVuZChmb290ZXJEaXYpO1xyXG5cclxuICByZXR1cm4gZm9vdGVyO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYnJvd3NlTmF2VGFicygpIHtcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcbiAgY29uc3QgaG9tZUJhY2tncm91bmRJbWFnZSA9IGhvbWVCYWNrZ3JvdW5kUGljO1xyXG4gIGNvbnN0IGNvbnRhY3RCYWNrZ3JvdW5kSW1hZ2UgPSBjb250YWN0QmFja2dyb3VuZFBpYztcclxuXHJcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnaG9tZS1idG4nKSB7XHJcbiAgICAgICAgY2xlYW5NYWluKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aG9tZUJhY2tncm91bmRJbWFnZX0pYDtcclxuICAgICAgICBsb2FkSG9tZVBhZ2UoKTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdtZW51LWJ0bicpIHtcclxuICAgICAgICBjbGVhbk1haW4oKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcclxuICAgICAgICBsb2FkTWVudVBhZ2UoKTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdjb250YWN0LWJ0bicpIHtcclxuICAgICAgICBjbGVhbk1haW4oKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjb250YWN0QmFja2dyb3VuZEltYWdlfSlgO1xyXG4gICAgICAgIGxvYWRDb250YWN0UGFnZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5NYWluKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG4gIG1haW4udGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZU1haW4oKSk7XHJcbiAgY29udGVudC5hcHBlbmQoY3JlYXRlRm9vdGVyKCkpO1xyXG4gIGxvYWRIb21lUGFnZSgpO1xyXG4gIGJyb3dzZU5hdlRhYnMoKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgbG9hZFBhZ2UgfSBmcm9tICcuL3BhZ2Utc3RydWN0dXJlJztcclxuXHJcbmxvYWRQYWdlKCk7XHJcblxyXG5cclxuLy8gVGFza3M6IFxyXG4vLyBGaWd1cmUgb3V0IGhvdyB0byBub3QgbGV0IHN1Ym1pdCB0aGUgZm9ybSBtb3JlIHRoYW4gb25jZSBpbiBldmVyeSBzZXNzaW9uXHJcbi8vIENvbXBsZXRlIHRoZSBDU1Mgc3R5bGluZyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==