/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/daniele-salutari-restaurant-home.png */ "./src/assets/daniele-salutari-restaurant-home.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --text-color-white: #fafafa;
  --color-black: #000;
  --font-size-small: 0.8rem;
  --font-size-medium: 1.3rem;
  --font-size-large: 1.5rem;
  --font-size-extra-large: 2.5rem;
  --font-size-3rem: 3rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
}

#content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* Header */
#logo {
  width: 17rem;
  transition: all 0.8s ease-in-out;
}

#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  max-width: 100%;
  height: 7rem;
}

#home-btn,
#menu-btn,
#contact-btn {
  color: var(--text-color-white);
  background-color: var(--color-black);
  font-size: var(--font-size-medium);
  margin-right: 5rem;
  border: none;
}

/* Hamburger menu */
#hamburger-container {
  display: none;
  cursor: pointer;
}

.hamburger-bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: var(--text-color-white);
}

/* Main */
#restaurant-name {
  color: var(--text-color-white);
  text-align: center;
  font-size: var(--font-size-extra-large);
}

#restaurant-type {
  font-size: var(--font-size-medium);
  font-weight: normal;
}

#home-page-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  color: var(--text-color-white);
  animation: fadeIn 1.5s;
}

#home-paragraph {
  color: var(--text-color-white);
  text-align: center;
  max-width: 40%;
  font-size: var(--font-size-large);
  margin-top: 3rem;
}

#work-schedule-div {
  border: 2px solid var(--text-color-white);
  font-size: var(--font-size-medium);
  width: 20%;
  height: 14rem;
  text-align: center;
  margin-top: 7rem;
}

#hours-h2 {
  text-decoration: underline;
  margin-bottom: 0.5rem;
}

#menu-div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 5rem;
  background: linear-gradient(rgba(8, 8, 8, 0.2), rgba(117, 109, 109, 0.8));
  animation: fadeIn 1.5s;
}

#product-img {
  border-radius: 35%;
  width: 10rem;
}

#product-card {
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

#product-description {
  font-size: var(--font-size-medium);
  margin-top: 0.5rem;
}

#product-price {
  font-size: var(--font-size-large);
  margin-top: 0.5rem;
  font-weight: bold;
}

#contact-page-container {
  animation: fadeIn 1.5s;
  display: grid;
  grid-template-areas: 
  "contact-info contact-form"
  "contact-info contact-form";
  grid-template-columns: 3fr 5fr 1fr;
  grid-template-rows: 1fr 4fr 1fr;
  gap: 4rem;
  padding: 0 2rem;
  justify-items: center;
  width: 100%;
}

#contact-us-title {
  color: var(--text-color-white);
  text-align: center;
  margin-bottom: 1rem;
  font-size: var(--font-size-3rem);
  grid-area: contact-form;
  grid-row: 1;
  width: 100%;
}

#contact-info-container {
  display: grid;
  grid-area: contact-info;
  grid-row: 2;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  background-color: rgb(0, 0, 0, 0.7);
  color: var(--text-color-white);
  width: 100%;
  height: 16rem;
  border-radius: 0.4rem;
}

#location-container, 
#phone-number-container,
#email-container {
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
  font-size: var(--font-size-large);
}

#contact-form-container {
  color: var(--text-color-white);
  grid-area: contact-form;
  grid-row: 2;
  width: 60%;
}

#contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
}

#contact-form input, textarea {
  width: 100%;
  height: 4rem;
  font-size: var(--font-size-medium);
  text-indent: 2rem;
  border-radius: 0.7rem;
}

#contact-form textarea {
  height: 12rem;
  resize: none;     /* disables the resizing message box manually */ 
  letter-spacing: 1px;
}

#submit-btn-container {
  text-align: center;
  grid-area: contact-form;
  grid-row: 3;
}

#submit-btn {
  font-size: var(--font-size-medium);
  width: 10rem;
  height: 3rem;
  border-radius: 2rem;
  background-color: #8d0d0d;
  color: var(--text-color-white);
  border: none;
  margin-top: 2rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

#confirmation-message {
  color: var(--text-color-white);
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
  font-size: var(--font-size-large);
  animation: fadeIn 0.8s;
}

#error-name,
#error-email,
#error-textarea {
  font-size: var(--font-size-large);
  color: red;
  font-weight: bold;
  text-align: center;
}

 /* Footer */
#footer {
  border: 1px solid var(--color-black);
  background-color: var(--color-black);
  color: var(--text-color-white);
  margin-top: auto;
}

#footer-div {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50px;
  gap: 0.3rem;
  color: var(--text-color-white);
  font-size: var(--font-size-medium);
}

.fa-brands {
  color: var(--text-color-white);
  transition: all 0.3s ease-in-out;
}

/* Animations - Effects */
#logo:hover {
  transform: rotate(360deg);
  transition: all 0.8s ease-in-out;
}

#home-btn:hover,
#menu-btn:hover,
#contact-btn:hover {
  background-color: var(--text-color-white);
  color: var(--color-black);
  transform: scale(1.2); 
  transition: all 0.2s ease-in-out;
}

.fa-brands:hover {
  transform: scale(1.4);
  transition: all 0.3s ease-in-out;
}

#submit-btn:hover {
  color: var(--color-black);
  background-color: var(--text-color-white);
  transition: all 0.3s ease-in-out;
}

#contact-form input:focus, #contact-form textarea:focus {
  outline: none;
  box-shadow: 1px 2px 2px 2px #0a0a0a;
  border-radius: 0.5rem;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* Media Queries */
@media (max-width: 1200px) {

  #logo {
    width: 14rem;
  }

  #home-btn,
  #menu-btn,
  #contact-btn {
    font-size: var(--font-size-small);
  }

  #work-schedule-div {
    margin-bottom: 3rem;
    font-size: 1.1rem;
    width: 28%;
    height: 12rem;
  }

  #home-paragraph {
    font-size: var(--font-size-medium);
  }

  #menu-div {
    gap: 4rem;
  }

  #product-img {
    width: 9rem;
  }

  #product-description {
    font-size: var(--font-size-medium);
  }

  #product-price {
    font-size: var(--font-size-medium);
  }

  #contact-us-title {
    font-size: var(--font-size-extra-large);
  }

  #contact-form input, textarea {
    width: 200%;
    margin-left: -3rem;
  }

  #location-container,
  #phone-number-container,
  #email-container {
    font-size: var(--font-size-small);
  }

  #footer-div {
    font-size: var(--font-size-small);
  }
}

@media (max-width: 660px) {
  #logo {
    width: 11rem;
  }

  #nav {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    position: fixed;
    left: -100%;
    width: 100%;
    transition: 0.3s;
    gap: 1rem;
    background-color: rgb(0, 0, 0, 0.8);
  }

  #home-btn,
  #menu-btn,
  #contact-btn {
    background-color: transparent;
    font-size: var(--font-size-small);
  }

  #nav.active {
    left: 0;
  }

  #hamburger-container {
    display: block;
    position: fixed;
    right: 1rem;
    top: 2.3rem;
  }

  #hamburger-container.active .hamburger-bar:nth-child(2) {
    opacity: 0;
  }
  
  #hamburger-container.active .hamburger-bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  #hamburger-container.active .hamburger-bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  #restaurant-name {
    font-size: var(--font-size-large);
  }

  #restaurant-type {
    font-size: var(--font-size-small);
  }

  #home-paragraph {
   font-size: var(--font-size-small);
    margin-top: 1rem;
    max-width: 50%;
  }

  #work-schedule-div {
    width: 40%;
    margin-bottom: 1rem;
    font-size: var(--font-size-small);
    height: 9rem;
  }

  #hours-h2 {
    font-size: var(--font-size-medium);
  }

  #footer {
    font-size: var(--font-size-small);
  }

  #product-img {
    width: 8rem;
  }

  #product-title {
    font-size: var(--font-size-medium);
  }

  #product-description {
    font-size: 0.9rem;
    text-align: center;
    width: 30rem;
  }

  #product-price {
    font-size: var(--font-size-medium);
  }

  #contact-us-title {
    font-size: var(--font-size-large);
    grid-column: 2;
    margin-top: 1rem;
    width: 100%;
  }

  #contact-info-container {
    font-size: var(--font-size-small);
    width: 120%;
    height: 11rem;
  }

  #contact-form-container {
    grid-column: 2;
  }
  
  #contact-form input, textarea {
    width: 200%;
    height: 3rem;
    font-size: var(--font-size-small);
    text-indent: 1rem;
  }

  #submit-btn-container {
    grid-column: 2;
    margin-top: -2rem;
  }

  #submit-btn {
    font-size: 1rem;
    width: 8rem;
    height: 2.5rem;
  }

  #confirmation-message {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  #error-name,
  #error-email,
  #error-textarea {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  #logo {
    width: 9.5rem;
  }

  #home-btn,
  #menu-btn,
  #contact-btn {
    background-color: transparent;
    font-size: var(--font-size-small);
  }

  #restaurant-name {
    font-size: var(--font-size-medium);  
  }

  #restaurant-type {
    font-size: 0.7rem;
  }

  #home-paragraph {
    font-size: var(--font-size-small);
    margin-top: 1rem;
    max-width: 65%;
  }

  #work-schedule-div {
    width: 60%;
    margin-bottom: 1rem;
  }

  #hours-h2 {
    font-size: var(--font-size-medium);
  }

  #footer {
    font-size: 0.6rem;
  }

  #product-img {
    width: 6rem;
  }

  #product-title {
    font-size: 1rem;
  }

  #product-description {
    width: 19rem;
  }

  #product-price {
    font-size: 1rem;
  }

  #contact-page-container {
    gap: 0;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    width: 100%;
  }

  #contact-us-title {
    font-size: var(--font-size-medium);
    grid-column: 1;
    margin-top: 1rem;
  }

  #contact-info-container {
    grid-column: 1;
    grid-row: 4;
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 100%;
  }

  #location-container, 
  #phone-number-container,
  #email-container {
    display: flex;
  }

  #contact-form-container {
    grid-column: 1;
  }
  
  #contact-form input, textarea {
    width: 150%;
    font-size: 0.7rem;
  }

  #submit-btn-container {
    grid-column: 1;
    grid-row: 3;
    margin-top: -2rem;
    margin-bottom: 1rem;
  }

  #submit-btn {
    font-size: 0.8rem;
    width: 6rem;
    height: 2rem;
  }

  #confirmation-message {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  #error-name,
  #error-email,
  #error-textarea {
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 1rem;
  }
}

@media (max-width: 380px) {
  #contact-info-container {
    font-size: 0.6rem;
    grid-column: 1;
    grid-row: 4;
    margin-bottom: 1rem;
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --text-color-white: #fafafa;\r\n  --color-black: #000;\r\n  --font-size-small: 0.8rem;\r\n  --font-size-medium: 1.3rem;\r\n  --font-size-large: 1.5rem;\r\n  --font-size-extra-large: 2.5rem;\r\n  --font-size-3rem: 3rem;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  background-image: url(../assets/daniele-salutari-restaurant-home.png);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n}\r\n\r\n/* Header */\r\n#logo {\r\n  width: 17rem;\r\n  transition: all 0.8s ease-in-out;\r\n}\r\n\r\n#header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n  max-width: 100%;\r\n  height: 7rem;\r\n}\r\n\r\n#home-btn,\r\n#menu-btn,\r\n#contact-btn {\r\n  color: var(--text-color-white);\r\n  background-color: var(--color-black);\r\n  font-size: var(--font-size-medium);\r\n  margin-right: 5rem;\r\n  border: none;\r\n}\r\n\r\n/* Hamburger menu */\r\n#hamburger-container {\r\n  display: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.hamburger-bar {\r\n  display: block;\r\n  width: 25px;\r\n  height: 3px;\r\n  margin: 5px auto;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n  background-color: var(--text-color-white);\r\n}\r\n\r\n/* Main */\r\n#restaurant-name {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  font-size: var(--font-size-extra-large);\r\n}\r\n\r\n#restaurant-type {\r\n  font-size: var(--font-size-medium);\r\n  font-weight: normal;\r\n}\r\n\r\n#home-page-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 3rem;\r\n  color: var(--text-color-white);\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n#home-paragraph {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  max-width: 40%;\r\n  font-size: var(--font-size-large);\r\n  margin-top: 3rem;\r\n}\r\n\r\n#work-schedule-div {\r\n  border: 2px solid var(--text-color-white);\r\n  font-size: var(--font-size-medium);\r\n  width: 20%;\r\n  height: 14rem;\r\n  text-align: center;\r\n  margin-top: 7rem;\r\n}\r\n\r\n#hours-h2 {\r\n  text-decoration: underline;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n#menu-div {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  gap: 5rem;\r\n  background: linear-gradient(rgba(8, 8, 8, 0.2), rgba(117, 109, 109, 0.8));\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n#product-img {\r\n  border-radius: 35%;\r\n  width: 10rem;\r\n}\r\n\r\n#product-card {\r\n  gap: 2rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#product-description {\r\n  font-size: var(--font-size-medium);\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n#product-price {\r\n  font-size: var(--font-size-large);\r\n  margin-top: 0.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n#contact-page-container {\r\n  animation: fadeIn 1.5s;\r\n  display: grid;\r\n  grid-template-areas: \r\n  \"contact-info contact-form\"\r\n  \"contact-info contact-form\";\r\n  grid-template-columns: 3fr 5fr 1fr;\r\n  grid-template-rows: 1fr 4fr 1fr;\r\n  gap: 4rem;\r\n  padding: 0 2rem;\r\n  justify-items: center;\r\n  width: 100%;\r\n}\r\n\r\n#contact-us-title {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  margin-bottom: 1rem;\r\n  font-size: var(--font-size-3rem);\r\n  grid-area: contact-form;\r\n  grid-row: 1;\r\n  width: 100%;\r\n}\r\n\r\n#contact-info-container {\r\n  display: grid;\r\n  grid-area: contact-info;\r\n  grid-row: 2;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  background-color: rgb(0, 0, 0, 0.7);\r\n  color: var(--text-color-white);\r\n  width: 100%;\r\n  height: 16rem;\r\n  border-radius: 0.4rem;\r\n}\r\n\r\n#location-container, \r\n#phone-number-container,\r\n#email-container {\r\n  display: flex;\r\n  gap: 1rem;\r\n  margin-left: 1rem;\r\n  font-size: var(--font-size-large);\r\n}\r\n\r\n#contact-form-container {\r\n  color: var(--text-color-white);\r\n  grid-area: contact-form;\r\n  grid-row: 2;\r\n  width: 60%;\r\n}\r\n\r\n#contact-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.8rem;\r\n  width: 100%;\r\n}\r\n\r\n#contact-form input, textarea {\r\n  width: 100%;\r\n  height: 4rem;\r\n  font-size: var(--font-size-medium);\r\n  text-indent: 2rem;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\n#contact-form textarea {\r\n  height: 12rem;\r\n  resize: none;     /* disables the resizing message box manually */ \r\n  letter-spacing: 1px;\r\n}\r\n\r\n#submit-btn-container {\r\n  text-align: center;\r\n  grid-area: contact-form;\r\n  grid-row: 3;\r\n}\r\n\r\n#submit-btn {\r\n  font-size: var(--font-size-medium);\r\n  width: 10rem;\r\n  height: 3rem;\r\n  border-radius: 2rem;\r\n  background-color: #8d0d0d;\r\n  color: var(--text-color-white);\r\n  border: none;\r\n  margin-top: 2rem;\r\n  transition: all 0.3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n#confirmation-message {\r\n  color: var(--text-color-white);\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  font-size: var(--font-size-large);\r\n  animation: fadeIn 0.8s;\r\n}\r\n\r\n#error-name,\r\n#error-email,\r\n#error-textarea {\r\n  font-size: var(--font-size-large);\r\n  color: red;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n /* Footer */\r\n#footer {\r\n  border: 1px solid var(--color-black);\r\n  background-color: var(--color-black);\r\n  color: var(--text-color-white);\r\n  margin-top: auto;\r\n}\r\n\r\n#footer-div {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  height: 50px;\r\n  gap: 0.3rem;\r\n  color: var(--text-color-white);\r\n  font-size: var(--font-size-medium);\r\n}\r\n\r\n.fa-brands {\r\n  color: var(--text-color-white);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n/* Animations - Effects */\r\n#logo:hover {\r\n  transform: rotate(360deg);\r\n  transition: all 0.8s ease-in-out;\r\n}\r\n\r\n#home-btn:hover,\r\n#menu-btn:hover,\r\n#contact-btn:hover {\r\n  background-color: var(--text-color-white);\r\n  color: var(--color-black);\r\n  transform: scale(1.2); \r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.fa-brands:hover {\r\n  transform: scale(1.4);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n#submit-btn:hover {\r\n  color: var(--color-black);\r\n  background-color: var(--text-color-white);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n#contact-form input:focus, #contact-form textarea:focus {\r\n  outline: none;\r\n  box-shadow: 1px 2px 2px 2px #0a0a0a;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Media Queries */\r\n@media (max-width: 1200px) {\r\n\r\n  #logo {\r\n    width: 14rem;\r\n  }\r\n\r\n  #home-btn,\r\n  #menu-btn,\r\n  #contact-btn {\r\n    font-size: var(--font-size-small);\r\n  }\r\n\r\n  #work-schedule-div {\r\n    margin-bottom: 3rem;\r\n    font-size: 1.1rem;\r\n    width: 28%;\r\n    height: 12rem;\r\n  }\r\n\r\n  #home-paragraph {\r\n    font-size: var(--font-size-medium);\r\n  }\r\n\r\n  #menu-div {\r\n    gap: 4rem;\r\n  }\r\n\r\n  #product-img {\r\n    width: 9rem;\r\n  }\r\n\r\n  #product-description {\r\n    font-size: var(--font-size-medium);\r\n  }\r\n\r\n  #product-price {\r\n    font-size: var(--font-size-medium);\r\n  }\r\n\r\n  #contact-us-title {\r\n    font-size: var(--font-size-extra-large);\r\n  }\r\n\r\n  #contact-form input, textarea {\r\n    width: 200%;\r\n    margin-left: -3rem;\r\n  }\r\n\r\n  #location-container,\r\n  #phone-number-container,\r\n  #email-container {\r\n    font-size: var(--font-size-small);\r\n  }\r\n\r\n  #footer-div {\r\n    font-size: var(--font-size-small);\r\n  }\r\n}\r\n\r\n@media (max-width: 660px) {\r\n  #logo {\r\n    width: 11rem;\r\n  }\r\n\r\n  #nav {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    position: fixed;\r\n    left: -100%;\r\n    width: 100%;\r\n    transition: 0.3s;\r\n    gap: 1rem;\r\n    background-color: rgb(0, 0, 0, 0.8);\r\n  }\r\n\r\n  #home-btn,\r\n  #menu-btn,\r\n  #contact-btn {\r\n    background-color: transparent;\r\n    font-size: var(--font-size-small);\r\n  }\r\n\r\n  #nav.active {\r\n    left: 0;\r\n  }\r\n\r\n  #hamburger-container {\r\n    display: block;\r\n    position: fixed;\r\n    right: 1rem;\r\n    top: 2.3rem;\r\n  }\r\n\r\n  #hamburger-container.active .hamburger-bar:nth-child(2) {\r\n    opacity: 0;\r\n  }\r\n  \r\n  #hamburger-container.active .hamburger-bar:nth-child(1) {\r\n    transform: translateY(8px) rotate(45deg);\r\n  }\r\n\r\n  #hamburger-container.active .hamburger-bar:nth-child(3) {\r\n    transform: translateY(-8px) rotate(-45deg);\r\n  }\r\n\r\n  #restaurant-name {\r\n    font-size: var(--font-size-large);\r\n  }\r\n\r\n  #restaurant-type {\r\n    font-size: var(--font-size-small);\r\n  }\r\n\r\n  #home-paragraph {\r\n   font-size: var(--font-size-small);\r\n    margin-top: 1rem;\r\n    max-width: 50%;\r\n  }\r\n\r\n  #work-schedule-div {\r\n    width: 40%;\r\n    margin-bottom: 1rem;\r\n    font-size: var(--font-size-small);\r\n    height: 9rem;\r\n  }\r\n\r\n  #hours-h2 {\r\n    font-size: var(--font-size-medium);\r\n  }\r\n\r\n  #footer {\r\n    font-size: var(--font-size-small);\r\n  }\r\n\r\n  #product-img {\r\n    width: 8rem;\r\n  }\r\n\r\n  #product-title {\r\n    font-size: var(--font-size-medium);\r\n  }\r\n\r\n  #product-description {\r\n    font-size: 0.9rem;\r\n    text-align: center;\r\n    width: 30rem;\r\n  }\r\n\r\n  #product-price {\r\n    font-size: var(--font-size-medium);\r\n  }\r\n\r\n  #contact-us-title {\r\n    font-size: var(--font-size-large);\r\n    grid-column: 2;\r\n    margin-top: 1rem;\r\n    width: 100%;\r\n  }\r\n\r\n  #contact-info-container {\r\n    font-size: var(--font-size-small);\r\n    width: 120%;\r\n    height: 11rem;\r\n  }\r\n\r\n  #contact-form-container {\r\n    grid-column: 2;\r\n  }\r\n  \r\n  #contact-form input, textarea {\r\n    width: 200%;\r\n    height: 3rem;\r\n    font-size: var(--font-size-small);\r\n    text-indent: 1rem;\r\n  }\r\n\r\n  #submit-btn-container {\r\n    grid-column: 2;\r\n    margin-top: -2rem;\r\n  }\r\n\r\n  #submit-btn {\r\n    font-size: 1rem;\r\n    width: 8rem;\r\n    height: 2.5rem;\r\n  }\r\n\r\n  #confirmation-message {\r\n    font-size: 1.1rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  #error-name,\r\n  #error-email,\r\n  #error-textarea {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  #logo {\r\n    width: 9.5rem;\r\n  }\r\n\r\n  #home-btn,\r\n  #menu-btn,\r\n  #contact-btn {\r\n    background-color: transparent;\r\n    font-size: var(--font-size-small);\r\n  }\r\n\r\n  #restaurant-name {\r\n    font-size: var(--font-size-medium);  \r\n  }\r\n\r\n  #restaurant-type {\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  #home-paragraph {\r\n    font-size: var(--font-size-small);\r\n    margin-top: 1rem;\r\n    max-width: 65%;\r\n  }\r\n\r\n  #work-schedule-div {\r\n    width: 60%;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  #hours-h2 {\r\n    font-size: var(--font-size-medium);\r\n  }\r\n\r\n  #footer {\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  #product-img {\r\n    width: 6rem;\r\n  }\r\n\r\n  #product-title {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #product-description {\r\n    width: 19rem;\r\n  }\r\n\r\n  #product-price {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #contact-page-container {\r\n    gap: 0;\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: 1fr;\r\n    width: 100%;\r\n  }\r\n\r\n  #contact-us-title {\r\n    font-size: var(--font-size-medium);\r\n    grid-column: 1;\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  #contact-info-container {\r\n    grid-column: 1;\r\n    grid-row: 4;\r\n    margin-bottom: 1rem;\r\n    margin-top: 1rem;\r\n    width: 100%;\r\n  }\r\n\r\n  #location-container, \r\n  #phone-number-container,\r\n  #email-container {\r\n    display: flex;\r\n  }\r\n\r\n  #contact-form-container {\r\n    grid-column: 1;\r\n  }\r\n  \r\n  #contact-form input, textarea {\r\n    width: 150%;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  #submit-btn-container {\r\n    grid-column: 1;\r\n    grid-row: 3;\r\n    margin-top: -2rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  #submit-btn {\r\n    font-size: 0.8rem;\r\n    width: 6rem;\r\n    height: 2rem;\r\n  }\r\n\r\n  #confirmation-message {\r\n    font-size: 0.8rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  #error-name,\r\n  #error-email,\r\n  #error-textarea {\r\n    font-size: 0.8rem;\r\n    text-align: center;\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 380px) {\r\n  #contact-info-container {\r\n    font-size: 0.6rem;\r\n    grid-column: 1;\r\n    grid-row: 4;\r\n    margin-bottom: 1rem;\r\n    width: 100%;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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
  // Create a container for appending all the contact-page elements on it
  const contactPageContainer = document.createElement('div');
  contactPageContainer.id = 'contact-page-container';

  const contactUsTitle = document.createElement('h1');
  contactUsTitle.id = 'contact-us-title';
  contactUsTitle.textContent = 'Send us your message';

  const submitBtnContainer = document.createElement('div');
  submitBtnContainer.id = 'submit-btn-container';

  const submitBtn = document.createElement('button');
  submitBtn.id = 'submit-btn';
  submitBtn.value = 'insert';
  submitBtn.textContent = 'Submit';

  submitBtn.addEventListener('click', submitForm);

  submitBtnContainer.append(submitBtn);
  contactPageContainer.append(contactUsTitle, 
                                createForm(), submitBtnContainer,createContactInfo());

  return contactPageContainer;
}

function createContactInfo() {
  const contactInfoContainer = document.createElement('div');
  contactInfoContainer.id = 'contact-info-container';

  const locationContainer = document.createElement('div');
  locationContainer.id = 'location-container';
  const locationIcon = document.createElement('i');
  locationIcon.classList.add('fa-solid', 'fa-location-dot');
  const location = document.createElement('span');
  location.id = 'location';
  location.textContent = 'Kyoto, Yamaxxxx xxxx 60';
  
  const phoneNumberContainer = document.createElement('div');
  phoneNumberContainer.id = 'phone-number-container';
  const phoneNumberIcon = document.createElement('i');
  phoneNumberIcon.classList.add('fa-solid', 'fa-phone');
  const phoneNumber = document.createElement('span');
  phoneNumber.id = 'phone-number';
  phoneNumber.textContent = '+81 75 xxx xxxx';

  const emailContainer = document.createElement('div');
  emailContainer.id = 'email-container';
  const emailIcon = document.createElement('i');
  emailIcon.classList.add('fa-solid', 'fa-envelope');
  const email = document.createElement('span');
  email.id = 'email';
  email.textContent = 'o-f_JP@gmail.com';
  
  locationContainer.append(locationIcon, location);
  phoneNumberContainer.append(phoneNumberIcon, phoneNumber);
  emailContainer.append(emailIcon, email);

  contactInfoContainer.append(locationContainer, phoneNumberContainer, emailContainer);

  return contactInfoContainer;
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

  // Making the validation before submitting the form, and stops if something is wrong
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
    errorMessages.errorValidationForName.innerHTML = 'Your Name is too short, please give a valid name!';
    isFormInputValid = false;
  } else if (!/^[a-zA-z\s]+$/.test(nameInput) ) {
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
    errorMessages.errorValidationForTextArea.innerHTML = 'Your Message is too short!';
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
  if (errorMessages.errorValidationForName || errorMessages.errorValidationForEmail || 
       errorMessages.errorValidationForTextArea) {
    errorMessages.errorValidationForName.textContent = '';
    errorMessages.errorValidationForEmail.textContent = '';
    errorMessages.errorValidationForTextArea.textContent = '';
  } 

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

  // Time Schedule for restaurant
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

  const hoursSunday = document.createElement('p');
  hoursSunday.classList.add('hours');
  hoursSunday.textContent = 'Sunday: Closed';

  workScheduleDiv.append(hoursTitle, hoursMonday, hoursTuesday, hoursWednesday,  
                         hoursThursday, hoursFriday, hoursSaturday, hoursSunday);
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
/* harmony import */ var _assets_first_product_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/first-product.png */ "./src/assets/first-product.png");
/* harmony import */ var _assets_second_product_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/second-product.png */ "./src/assets/second-product.png");
/* harmony import */ var _assets_third_product_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/third-product.png */ "./src/assets/third-product.png");
/* harmony import */ var _assets_fourth_product_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/fourth-product.png */ "./src/assets/fourth-product.png");





function createMenuPage() {
  // Create a container to append all the products for the menu
  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu-div';

  menuContainer.append(
    createProduct(
      'Samurai Bacon',
      _assets_first_product_png__WEBPACK_IMPORTED_MODULE_0__,
      `Introducing our Samurai Bacon Okonomiyaki where savory meets sensational! <br>
      Delight in a harmonious blend of crispy, 
      smoky bacon and the classic Japanese pancake, cooked to perfection.`,
      'Price: 5.70$'
    )
  );

  menuContainer.append(
    createProduct(
      'Fuji sensation',
      _assets_second_product_png__WEBPACK_IMPORTED_MODULE_1__,
      `Behold the Fuji Sensation Okonomiyaki, a culinary masterpiece that ascends 
      to new heights of taste and delight! <br>
      This explicit sensation boasts a foundation of tender cabbage and savory pork belly, creating a delectable contrast of textures and flavors.`,
      'Price: 7.50$'
    )
  );

  menuContainer.append(
    createProduct(
      'Ninja way',
      _assets_third_product_png__WEBPACK_IMPORTED_MODULE_2__,
      `Prepare to embark on a culinary adventure like no other with our Ninja Way Okonomiyaki! <br>
      This dish is crafted with crisp shredded carrots and delicate vegetables, providing a delightful harmony of textures and tastes.`,
      'Price: 6.90$'
    )
  );

  menuContainer.append(
    createProduct(
      'Shrimp eruption',
      _assets_fourth_product_png__WEBPACK_IMPORTED_MODULE_3__,
      `Prepare for a flavor eruption like no other with our Shrimp Eruption Okonomiyaki! <br>
       This extraordinary dish takes the classic Japanese pancake to new heights by featuring a generous eruption of succulent shrimp, 
       creating a delicious symphony of tastes and textures.`,
      'Price: 9.60$'
    )
  );

  return menuContainer;
}

function createProduct(productTitle, productImagePath, description, price) {
  const productCard = document.createElement('div');
  productCard.id = 'product-card';

  const productImage = document.createElement('img');
  productImage.id = 'product-img';
  productImage.src = productImagePath;
  productImage.alt = productTitle;

  const productName = document.createElement('h2');
  productName.id = 'product-title';
  productName.textContent = productTitle;

  const productDescription = document.createElement('p');
  productDescription.id = 'product-description';
  productDescription.innerHTML = description;

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
/* harmony import */ var _assets_okonomi_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/okonomi-logo.png */ "./src/assets/okonomi-logo.png");







function createHeader() {
  const header = document.createElement('header');
  header.id = 'header';

  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src = _assets_okonomi_logo_png__WEBPACK_IMPORTED_MODULE_5__;
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

  // Function for switching between navbar tabs
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

function loadPage() {
  const content = document.querySelector('#content');

  content.append(createHeader());
  content.append(createMain());
  content.append(createFooter());
  (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();
  browseNavTabs();
  displayHamburgerMenu();

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

/***/ }),

/***/ "./src/assets/first-product.png":
/*!**************************************!*\
  !*** ./src/assets/first-product.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5f9661d6bb6429d7b31.png";

/***/ }),

/***/ "./src/assets/fourth-product.png":
/*!***************************************!*\
  !*** ./src/assets/fourth-product.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68131183b4e035fea51b.png";

/***/ }),

/***/ "./src/assets/okonomi-logo.png":
/*!*************************************!*\
  !*** ./src/assets/okonomi-logo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1eeb5feb6751672f2d8a.png";

/***/ }),

/***/ "./src/assets/second-product.png":
/*!***************************************!*\
  !*** ./src/assets/second-product.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b40497a883b37eab558.png";

/***/ }),

/***/ "./src/assets/third-product.png":
/*!**************************************!*\
  !*** ./src/assets/third-product.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebdab80a93eb87408439.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");



(0,_page_structure__WEBPACK_IMPORTED_MODULE_0__.loadPage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHdLQUFpRTtBQUM3Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sb0ZBQW9GLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sT0FBTyxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsc0JBQXNCLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxN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QTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsR0FBRztBQUN2RDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFMkQ7QUFDRTtBQUNGO0FBQ0U7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzREFBaUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQWlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQWtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZzQztBQUNBO0FBQ007QUFDa0M7QUFDbkI7QUFDWDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscURBQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHlFQUFpQjtBQUMvQyxpQ0FBaUMsbURBQW9CO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsb0JBQW9CO0FBQ3pFLFFBQVEsbURBQVk7QUFDcEIsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRLG1EQUFZO0FBQ3BCLFFBQVE7QUFDUjtBQUNBLHFEQUFxRCx1QkFBdUI7QUFDNUUsUUFBUSx5REFBZTtBQUN2QjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0E0QztBQUNuQjtBQUN6QjtBQUNBLHlEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvcGFnZS1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9kYW5pZWxlLXNhbHV0YXJpLXJlc3RhdXJhbnQtaG9tZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLXRleHQtY29sb3Itd2hpdGU6ICNmYWZhZmE7XHJcbiAgLS1jb2xvci1ibGFjazogIzAwMDtcclxuICAtLWZvbnQtc2l6ZS1zbWFsbDogMC44cmVtO1xyXG4gIC0tZm9udC1zaXplLW1lZGl1bTogMS4zcmVtO1xyXG4gIC0tZm9udC1zaXplLWxhcmdlOiAxLjVyZW07XHJcbiAgLS1mb250LXNpemUtZXh0cmEtbGFyZ2U6IDIuNXJlbTtcclxuICAtLWZvbnQtc2l6ZS0zcmVtOiAzcmVtO1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuI2xvZ28ge1xyXG4gIHdpZHRoOiAxN3JlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogN3JlbTtcclxufVxyXG5cclxuI2hvbWUtYnRuLFxyXG4jbWVudS1idG4sXHJcbiNjb250YWN0LWJ0biB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZWRpdW0pO1xyXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEhhbWJ1cmdlciBtZW51ICovXHJcbiNoYW1idXJnZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhhbWJ1cmdlci1iYXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxufVxyXG5cclxuLyogTWFpbiAqL1xyXG4jcmVzdGF1cmFudC1uYW1lIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWV4dHJhLWxhcmdlKTtcclxufVxyXG5cclxuI3Jlc3RhdXJhbnQtdHlwZSB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4jaG9tZS1wYWdlLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAzcmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xyXG59XHJcblxyXG4jaG9tZS1wYXJhZ3JhcGgge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGFyZ2UpO1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuXHJcbiN3b3JrLXNjaGVkdWxlLWRpdiB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcclxuICB3aWR0aDogMjAlO1xyXG4gIGhlaWdodDogMTRyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDdyZW07XHJcbn1cclxuXHJcbiNob3Vycy1oMiB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4jbWVudS1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZ2FwOiA1cmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDgsIDgsIDgsIDAuMiksIHJnYmEoMTE3LCAxMDksIDEwOSwgMC44KSk7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcclxufVxyXG5cclxuI3Byb2R1Y3QtaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAzNSU7XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG59XHJcblxyXG4jcHJvZHVjdC1jYXJkIHtcclxuICBnYXA6IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4jcHJvZHVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbiNwcm9kdWN0LXByaWNlIHtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jY29udGFjdC1wYWdlLWNvbnRhaW5lciB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gIFwiY29udGFjdC1pbmZvIGNvbnRhY3QtZm9ybVwiXHJcbiAgXCJjb250YWN0LWluZm8gY29udGFjdC1mb3JtXCI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgNWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMWZyO1xyXG4gIGdhcDogNHJlbTtcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jY29udGFjdC11cy10aXRsZSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTNyZW0pO1xyXG4gIGdyaWQtYXJlYTogY29udGFjdC1mb3JtO1xyXG4gIGdyaWQtcm93OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWFyZWE6IGNvbnRhY3QtaW5mbztcclxuICBncmlkLXJvdzogMjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTZyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG59XHJcblxyXG4jbG9jYXRpb24tY29udGFpbmVyLCBcclxuI3Bob25lLW51bWJlci1jb250YWluZXIsXHJcbiNlbWFpbC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlKTtcclxufVxyXG5cclxuI2NvbnRhY3QtZm9ybS1jb250YWluZXIge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBncmlkLWFyZWE6IGNvbnRhY3QtZm9ybTtcclxuICBncmlkLXJvdzogMjtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4jY29udGFjdC1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwLjhyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNjb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcclxuICB0ZXh0LWluZGVudDogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbn1cclxuXHJcbiNjb250YWN0LWZvcm0gdGV4dGFyZWEge1xyXG4gIGhlaWdodDogMTJyZW07XHJcbiAgcmVzaXplOiBub25lOyAgICAgLyogZGlzYWJsZXMgdGhlIHJlc2l6aW5nIG1lc3NhZ2UgYm94IG1hbnVhbGx5ICovIFxyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbiNzdWJtaXQtYnRuLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGdyaWQtYXJlYTogY29udGFjdC1mb3JtO1xyXG4gIGdyaWQtcm93OiAzO1xyXG59XHJcblxyXG4jc3VibWl0LWJ0biB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcclxuICB3aWR0aDogMTByZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkMGQwZDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jY29uZmlybWF0aW9uLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC44cztcclxufVxyXG5cclxuI2Vycm9yLW5hbWUsXHJcbiNlcnJvci1lbWFpbCxcclxuI2Vycm9yLXRleHRhcmVhIHtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAvKiBGb290ZXIgKi9cclxuI2Zvb3RlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmxhY2spO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5cclxuI2Zvb3Rlci1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGdhcDogMC4zcmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZWRpdW0pO1xyXG59XHJcblxyXG4uZmEtYnJhbmRzIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbnMgLSBFZmZlY3RzICovXHJcbiNsb2dvOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jaG9tZS1idG46aG92ZXIsXHJcbiNtZW51LWJ0bjpob3ZlcixcclxuI2NvbnRhY3QtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgXHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5mYS1icmFuZHM6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI3N1Ym1pdC1idG46aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNjb250YWN0LWZvcm0gaW5wdXQ6Zm9jdXMsICNjb250YWN0LWZvcm0gdGV4dGFyZWE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMnB4ICMwYTBhMGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGlhIFF1ZXJpZXMgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG5cclxuICAjbG9nbyB7XHJcbiAgICB3aWR0aDogMTRyZW07XHJcbiAgfVxyXG5cclxuICAjaG9tZS1idG4sXHJcbiAgI21lbnUtYnRuLFxyXG4gICNjb250YWN0LWJ0biB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XHJcbiAgfVxyXG5cclxuICAjd29yay1zY2hlZHVsZS1kaXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgd2lkdGg6IDI4JTtcclxuICAgIGhlaWdodDogMTJyZW07XHJcbiAgfVxyXG5cclxuICAjaG9tZS1wYXJhZ3JhcGgge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcclxuICB9XHJcblxyXG4gICNtZW51LWRpdiB7XHJcbiAgICBnYXA6IDRyZW07XHJcbiAgfVxyXG5cclxuICAjcHJvZHVjdC1pbWcge1xyXG4gICAgd2lkdGg6IDlyZW07XHJcbiAgfVxyXG5cclxuICAjcHJvZHVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZWRpdW0pO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcclxuICB9XHJcblxyXG4gICNjb250YWN0LXVzLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWV4dHJhLWxhcmdlKTtcclxuICB9XHJcblxyXG4gICNjb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zcmVtO1xyXG4gIH1cclxuXHJcbiAgI2xvY2F0aW9uLWNvbnRhaW5lcixcclxuICAjcGhvbmUtbnVtYmVyLWNvbnRhaW5lcixcclxuICAjZW1haWwtY29udGFpbmVyIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcclxuICB9XHJcblxyXG4gICNmb290ZXItZGl2IHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xyXG4gICNsb2dvIHtcclxuICAgIHdpZHRoOiAxMXJlbTtcclxuICB9XHJcblxyXG4gICNuYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjgpO1xyXG4gIH1cclxuXHJcbiAgI2hvbWUtYnRuLFxyXG4gICNtZW51LWJ0bixcclxuICAjY29udGFjdC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XHJcbiAgfVxyXG5cclxuICAjbmF2LmFjdGl2ZSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgI2hhbWJ1cmdlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMXJlbTtcclxuICAgIHRvcDogMi4zcmVtO1xyXG4gIH1cclxuXHJcbiAgI2hhbWJ1cmdlci1jb250YWluZXIuYWN0aXZlIC5oYW1idXJnZXItYmFyOm50aC1jaGlsZCgyKSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAjaGFtYnVyZ2VyLWNvbnRhaW5lci5hY3RpdmUgLmhhbWJ1cmdlci1iYXI6bnRoLWNoaWxkKDEpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG5cclxuICAjaGFtYnVyZ2VyLWNvbnRhaW5lci5hY3RpdmUgLmhhbWJ1cmdlci1iYXI6bnRoLWNoaWxkKDMpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSByb3RhdGUoLTQ1ZGVnKTtcclxuICB9XHJcblxyXG4gICNyZXN0YXVyYW50LW5hbWUge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGFyZ2UpO1xyXG4gIH1cclxuXHJcbiAgI3Jlc3RhdXJhbnQtdHlwZSB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XHJcbiAgfVxyXG5cclxuICAjaG9tZS1wYXJhZ3JhcGgge1xyXG4gICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAjd29yay1zY2hlZHVsZS1kaXYge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XHJcbiAgICBoZWlnaHQ6IDlyZW07XHJcbiAgfVxyXG5cclxuICAjaG91cnMtaDIge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcclxuICB9XHJcblxyXG4gICNmb290ZXIge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtaW1nIHtcclxuICAgIHdpZHRoOiA4cmVtO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcclxuICB9XHJcblxyXG4gICNwcm9kdWN0LWRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwcmVtO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcclxuICB9XHJcblxyXG4gICNjb250YWN0LXVzLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlKTtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhY3QtaW5mby1jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xyXG4gICAgd2lkdGg6IDEyMCU7XHJcbiAgICBoZWlnaHQ6IDExcmVtO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhY3QtZm9ybS1jb250YWluZXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDFyZW07XHJcbiAgfVxyXG5cclxuICAjc3VibWl0LWJ0bi1jb250YWluZXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcclxuICB9XHJcblxyXG4gICNzdWJtaXQtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgfVxyXG5cclxuICAjY29uZmlybWF0aW9uLW1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI2Vycm9yLW5hbWUsXHJcbiAgI2Vycm9yLWVtYWlsLFxyXG4gICNlcnJvci10ZXh0YXJlYSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAjbG9nbyB7XHJcbiAgICB3aWR0aDogOS41cmVtO1xyXG4gIH1cclxuXHJcbiAgI2hvbWUtYnRuLFxyXG4gICNtZW51LWJ0bixcclxuICAjY29udGFjdC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XHJcbiAgfVxyXG5cclxuICAjcmVzdGF1cmFudC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1lZGl1bSk7ICBcclxuICB9XHJcblxyXG4gICNyZXN0YXVyYW50LXR5cGUge1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgfVxyXG5cclxuICAjaG9tZS1wYXJhZ3JhcGgge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1heC13aWR0aDogNjUlO1xyXG4gIH1cclxuXHJcbiAgI3dvcmstc2NoZWR1bGUtZGl2IHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI2hvdXJzLWgyIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1lZGl1bSk7XHJcbiAgfVxyXG5cclxuICAjZm9vdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtaW1nIHtcclxuICAgIHdpZHRoOiA2cmVtO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDE5cmVtO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhY3QtcGFnZS1jb250YWluZXIge1xyXG4gICAgZ2FwOiAwO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhY3QtdXMtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB9XHJcblxyXG4gICNjb250YWN0LWluZm8tY29udGFpbmVyIHtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI2xvY2F0aW9uLWNvbnRhaW5lciwgXHJcbiAgI3Bob25lLW51bWJlci1jb250YWluZXIsXHJcbiAgI2VtYWlsLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhY3QtZm9ybS1jb250YWluZXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxNTAlO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgfVxyXG5cclxuICAjc3VibWl0LWJ0bi1jb250YWluZXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBncmlkLXJvdzogMztcclxuICAgIG1hcmdpbi10b3A6IC0ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gICNzdWJtaXQtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgd2lkdGg6IDZyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgfVxyXG5cclxuICAjY29uZmlybWF0aW9uLW1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI2Vycm9yLW5hbWUsXHJcbiAgI2Vycm9yLWVtYWlsLFxyXG4gICNlcnJvci10ZXh0YXJlYSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcclxuICAjY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XHJcbiAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlEQUFxRTtFQUNyRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGFBQWE7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QWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTs7O0lBR0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tdGV4dC1jb2xvci13aGl0ZTogI2ZhZmFmYTtcXHJcXG4gIC0tY29sb3ItYmxhY2s6ICMwMDA7XFxyXFxuICAtLWZvbnQtc2l6ZS1zbWFsbDogMC44cmVtO1xcclxcbiAgLS1mb250LXNpemUtbWVkaXVtOiAxLjNyZW07XFxyXFxuICAtLWZvbnQtc2l6ZS1sYXJnZTogMS41cmVtO1xcclxcbiAgLS1mb250LXNpemUtZXh0cmEtbGFyZ2U6IDIuNXJlbTtcXHJcXG4gIC0tZm9udC1zaXplLTNyZW06IDNyZW07XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2RhbmllbGUtc2FsdXRhcmktcmVzdGF1cmFudC1ob21lLnBuZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciAqL1xcclxcbiNsb2dvIHtcXHJcXG4gIHdpZHRoOiAxN3JlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1idG4sXFxyXFxuI21lbnUtYnRuLFxcclxcbiNjb250YWN0LWJ0biB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZWRpdW0pO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIYW1idXJnZXIgbWVudSAqL1xcclxcbiNoYW1idXJnZXItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiAqL1xcclxcbiNyZXN0YXVyYW50LW5hbWUge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZXh0cmEtbGFyZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzdGF1cmFudC10eXBlIHtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1lZGl1bSk7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1wYWdlLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDNyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1wYXJhZ3JhcGgge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWF4LXdpZHRoOiA0MCU7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XFxyXFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jd29yay1zY2hlZHVsZS1kaXYge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZWRpdW0pO1xcclxcbiAgd2lkdGg6IDIwJTtcXHJcXG4gIGhlaWdodDogMTRyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaG91cnMtaDIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNtZW51LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDgsIDgsIDgsIDAuMiksIHJnYmEoMTE3LCAxMDksIDEwOSwgMC44KSk7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1pbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzUlO1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1jYXJkIHtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZWRpdW0pO1xcclxcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1wcmljZSB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtcGFnZS1jb250YWluZXIge1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gIFxcXCJjb250YWN0LWluZm8gY29udGFjdC1mb3JtXFxcIlxcclxcbiAgXFxcImNvbnRhY3QtaW5mbyBjb250YWN0LWZvcm1cXFwiO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgNWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAxZnI7XFxyXFxuICBnYXA6IDRyZW07XFxyXFxuICBwYWRkaW5nOiAwIDJyZW07XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtdXMtdGl0bGUge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTNyZW0pO1xcclxcbiAgZ3JpZC1hcmVhOiBjb250YWN0LWZvcm07XFxyXFxuICBncmlkLXJvdzogMTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC1hcmVhOiBjb250YWN0LWluZm87XFxyXFxuICBncmlkLXJvdzogMjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxNnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvY2F0aW9uLWNvbnRhaW5lciwgXFxyXFxuI3Bob25lLW51bWJlci1jb250YWluZXIsXFxyXFxuI2VtYWlsLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWZvcm0tY29udGFpbmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIGdyaWQtYXJlYTogY29udGFjdC1mb3JtO1xcclxcbiAgZ3JpZC1yb3c6IDI7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjhyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDRyZW07XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZWRpdW0pO1xcclxcbiAgdGV4dC1pbmRlbnQ6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWZvcm0gdGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMnJlbTtcXHJcXG4gIHJlc2l6ZTogbm9uZTsgICAgIC8qIGRpc2FibGVzIHRoZSByZXNpemluZyBtZXNzYWdlIGJveCBtYW51YWxseSAqLyBcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtYnRuLWNvbnRhaW5lciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBncmlkLWFyZWE6IGNvbnRhY3QtZm9ybTtcXHJcXG4gIGdyaWQtcm93OiAzO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJ0biB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZWRpdW0pO1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZDBkMGQ7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb25maXJtYXRpb24tbWVzc2FnZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAwLjhzO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3ItbmFtZSxcXHJcXG4jZXJyb3ItZW1haWwsXFxyXFxuI2Vycm9yLXRleHRhcmVhIHtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlKTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuIC8qIEZvb3RlciAqL1xcclxcbiNmb290ZXIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3Rlci1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGdhcDogMC4zcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWJyYW5kcyB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQW5pbWF0aW9ucyAtIEVmZmVjdHMgKi9cXHJcXG4jbG9nbzpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNob21lLWJ0bjpob3ZlcixcXHJcXG4jbWVudS1idG46aG92ZXIsXFxyXFxuI2NvbnRhY3QtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgXFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWJyYW5kczpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1idG46aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWZvcm0gaW5wdXQ6Zm9jdXMsICNjb250YWN0LWZvcm0gdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDJweCAjMGEwYTBhO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTWVkaWEgUXVlcmllcyAqL1xcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG5cXHJcXG4gICNsb2dvIHtcXHJcXG4gICAgd2lkdGg6IDE0cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hvbWUtYnRuLFxcclxcbiAgI21lbnUtYnRuLFxcclxcbiAgI2NvbnRhY3QtYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3dvcmstc2NoZWR1bGUtZGl2IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIHdpZHRoOiAyOCU7XFxyXFxuICAgIGhlaWdodDogMTJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaG9tZS1wYXJhZ3JhcGgge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZWRpdW0pO1xcclxcbiAgfVxcclxcblxcclxcbiAgI21lbnUtZGl2IHtcXHJcXG4gICAgZ2FwOiA0cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Byb2R1Y3QtaW1nIHtcXHJcXG4gICAgd2lkdGg6IDlyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcHJvZHVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1lZGl1bSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcHJvZHVjdC1wcmljZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1lZGl1bSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29udGFjdC11cy10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWV4dHJhLWxhcmdlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gICAgd2lkdGg6IDIwMCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNsb2NhdGlvbi1jb250YWluZXIsXFxyXFxuICAjcGhvbmUtbnVtYmVyLWNvbnRhaW5lcixcXHJcXG4gICNlbWFpbC1jb250YWluZXIge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZm9vdGVyLWRpdiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XFxyXFxuICAjbG9nbyB7XFxyXFxuICAgIHdpZHRoOiAxMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNuYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxlZnQ6IC0xMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC44KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNob21lLWJ0bixcXHJcXG4gICNtZW51LWJ0bixcXHJcXG4gICNjb250YWN0LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbmF2LmFjdGl2ZSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaGFtYnVyZ2VyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHJpZ2h0OiAxcmVtO1xcclxcbiAgICB0b3A6IDIuM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNoYW1idXJnZXItY29udGFpbmVyLmFjdGl2ZSAuaGFtYnVyZ2VyLWJhcjpudGgtY2hpbGQoMikge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjaGFtYnVyZ2VyLWNvbnRhaW5lci5hY3RpdmUgLmhhbWJ1cmdlci1iYXI6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNoYW1idXJnZXItY29udGFpbmVyLmFjdGl2ZSAuaGFtYnVyZ2VyLWJhcjpudGgtY2hpbGQoMykge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCkgcm90YXRlKC00NWRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcmVzdGF1cmFudC1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGFyZ2UpO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Jlc3RhdXJhbnQtdHlwZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNob21lLXBhcmFncmFwaCB7XFxyXFxuICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN3b3JrLXNjaGVkdWxlLWRpdiB7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcXHJcXG4gICAgaGVpZ2h0OiA5cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hvdXJzLWgyIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNmb290ZXIge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcHJvZHVjdC1pbWcge1xcclxcbiAgICB3aWR0aDogOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwcm9kdWN0LXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwcm9kdWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDMwcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Byb2R1Y3QtcHJpY2Uge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZWRpdW0pO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRhY3QtdXMtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250YWN0LWluZm8tY29udGFpbmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xcclxcbiAgICB3aWR0aDogMTIwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250YWN0LWZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNjb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gICAgd2lkdGg6IDIwMCU7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xcclxcbiAgICB0ZXh0LWluZGVudDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzdWJtaXQtYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzdWJtaXQtYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB3aWR0aDogOHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29uZmlybWF0aW9uLW1lc3NhZ2Uge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNlcnJvci1uYW1lLFxcclxcbiAgI2Vycm9yLWVtYWlsLFxcclxcbiAgI2Vycm9yLXRleHRhcmVhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gICNsb2dvIHtcXHJcXG4gICAgd2lkdGg6IDkuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNob21lLWJ0bixcXHJcXG4gICNtZW51LWJ0bixcXHJcXG4gICNjb250YWN0LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcmVzdGF1cmFudC1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTsgIFxcclxcbiAgfVxcclxcblxcclxcbiAgI3Jlc3RhdXJhbnQtdHlwZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hvbWUtcGFyYWdyYXBoIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDY1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN3b3JrLXNjaGVkdWxlLWRpdiB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaG91cnMtaDIge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZWRpdW0pO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Zvb3RlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Byb2R1Y3QtaW1nIHtcXHJcXG4gICAgd2lkdGg6IDZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcHJvZHVjdC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwcm9kdWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDE5cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Byb2R1Y3QtcHJpY2Uge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29udGFjdC1wYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgIGdhcDogMDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250YWN0LXVzLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWVkaXVtKTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICBncmlkLXJvdzogNDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbG9jYXRpb24tY29udGFpbmVyLCBcXHJcXG4gICNwaG9uZS1udW1iZXItY29udGFpbmVyLFxcclxcbiAgI2VtYWlsLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjY29udGFjdC1mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XFxyXFxuICAgIHdpZHRoOiAxNTAlO1xcclxcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzdWJtaXQtYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICBncmlkLXJvdzogMztcXHJcXG4gICAgbWFyZ2luLXRvcDogLTJyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc3VibWl0LWJ0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICB3aWR0aDogNnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbmZpcm1hdGlvbi1tZXNzYWdlIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZXJyb3ItbmFtZSxcXHJcXG4gICNlcnJvci1lbWFpbCxcXHJcXG4gICNlcnJvci10ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xcclxcbiAgI2NvbnRhY3QtaW5mby1jb250YWluZXIge1xcclxcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgIGdyaWQtcm93OiA0O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZSgpIHtcclxuICAvLyBDcmVhdGUgYSBjb250YWluZXIgZm9yIGFwcGVuZGluZyBhbGwgdGhlIGNvbnRhY3QtcGFnZSBlbGVtZW50cyBvbiBpdFxyXG4gIGNvbnN0IGNvbnRhY3RQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFjdFBhZ2VDb250YWluZXIuaWQgPSAnY29udGFjdC1wYWdlLWNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RVc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBjb250YWN0VXNUaXRsZS5pZCA9ICdjb250YWN0LXVzLXRpdGxlJztcclxuICBjb250YWN0VXNUaXRsZS50ZXh0Q29udGVudCA9ICdTZW5kIHVzIHlvdXIgbWVzc2FnZSc7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHN1Ym1pdEJ0bkNvbnRhaW5lci5pZCA9ICdzdWJtaXQtYnRuLWNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHN1Ym1pdEJ0bi5pZCA9ICdzdWJtaXQtYnRuJztcclxuICBzdWJtaXRCdG4udmFsdWUgPSAnaW5zZXJ0JztcclxuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcclxuXHJcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0Rm9ybSk7XHJcblxyXG4gIHN1Ym1pdEJ0bkNvbnRhaW5lci5hcHBlbmQoc3VibWl0QnRuKTtcclxuICBjb250YWN0UGFnZUNvbnRhaW5lci5hcHBlbmQoY29udGFjdFVzVGl0bGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUZvcm0oKSwgc3VibWl0QnRuQ29udGFpbmVyLGNyZWF0ZUNvbnRhY3RJbmZvKCkpO1xyXG5cclxuICByZXR1cm4gY29udGFjdFBhZ2VDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RJbmZvKCkge1xyXG4gIGNvbnN0IGNvbnRhY3RJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFjdEluZm9Db250YWluZXIuaWQgPSAnY29udGFjdC1pbmZvLWNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbG9jYXRpb25Db250YWluZXIuaWQgPSAnbG9jYXRpb24tY29udGFpbmVyJztcclxuICBjb25zdCBsb2NhdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgbG9jYXRpb25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWxvY2F0aW9uLWRvdCcpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGxvY2F0aW9uLmlkID0gJ2xvY2F0aW9uJztcclxuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9ICdLeW90bywgWWFtYXh4eHggeHh4eCA2MCc7XHJcbiAgXHJcbiAgY29uc3QgcGhvbmVOdW1iZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwaG9uZU51bWJlckNvbnRhaW5lci5pZCA9ICdwaG9uZS1udW1iZXItY29udGFpbmVyJztcclxuICBjb25zdCBwaG9uZU51bWJlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgcGhvbmVOdW1iZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXBob25lJyk7XHJcbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgcGhvbmVOdW1iZXIuaWQgPSAncGhvbmUtbnVtYmVyJztcclxuICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9ICcrODEgNzUgeHh4IHh4eHgnO1xyXG5cclxuICBjb25zdCBlbWFpbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVtYWlsQ29udGFpbmVyLmlkID0gJ2VtYWlsLWNvbnRhaW5lcic7XHJcbiAgY29uc3QgZW1haWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGVtYWlsSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1lbnZlbG9wZScpO1xyXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGVtYWlsLmlkID0gJ2VtYWlsJztcclxuICBlbWFpbC50ZXh0Q29udGVudCA9ICdvLWZfSlBAZ21haWwuY29tJztcclxuICBcclxuICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmQobG9jYXRpb25JY29uLCBsb2NhdGlvbik7XHJcbiAgcGhvbmVOdW1iZXJDb250YWluZXIuYXBwZW5kKHBob25lTnVtYmVySWNvbiwgcGhvbmVOdW1iZXIpO1xyXG4gIGVtYWlsQ29udGFpbmVyLmFwcGVuZChlbWFpbEljb24sIGVtYWlsKTtcclxuXHJcbiAgY29udGFjdEluZm9Db250YWluZXIuYXBwZW5kKGxvY2F0aW9uQ29udGFpbmVyLCBwaG9uZU51bWJlckNvbnRhaW5lciwgZW1haWxDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gY29udGFjdEluZm9Db250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XHJcbiAgY29uc3QgY29udGFjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWN0Rm9ybUNvbnRhaW5lci5pZCA9ICdjb250YWN0LWZvcm0tY29udGFpbmVyJztcclxuXHJcbiAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgY29udGFjdEZvcm0uaWQgPSAnY29udGFjdC1mb3JtJztcclxuICBjb250YWN0Rm9ybS5tZXRob2QgPSAnUE9TVCc7XHJcblxyXG4gIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuYW1lRGl2LmlkID0gJ25hbWUtZGl2JztcclxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIG5hbWVJbnB1dC5pZCA9ICduYW1lLWlucHV0JztcclxuICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBuYW1lSW5wdXQubmFtZSA9ICduYW1lJztcclxuICBuYW1lSW5wdXQuYXV0b2NvbXBsZXRlID0gJ29uJztcclxuICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnTmFtZSc7XHJcbiAgXHJcbiAgY29uc3QgZW1haWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlbWFpbERpdi5pZCA9ICdlbWFpbC1kaXYnO1xyXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGVtYWlsSW5wdXQuaWQgPSAnZW1haWwtaW5wdXQnO1xyXG4gIGVtYWlsSW5wdXQudHlwZSA9ICdlbWFpbCc7XHJcbiAgZW1haWxJbnB1dC5uYW1lID0gJ2VtYWlsJztcclxuICBlbWFpbElucHV0LmF1dG9jb21wbGV0ZSA9ICdvbic7XHJcbiAgZW1haWxJbnB1dC5wbGFjZWhvbGRlciA9ICdFbWFpbCc7XHJcbiAgXHJcbiAgY29uc3QgbWVzc2FnZUJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lc3NhZ2VCb3hEaXYuaWQgPSAnbWVzc2FnZS1ib3gtZGl2JztcclxuICBjb25zdCBtZXNzYWdlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICBtZXNzYWdlQm94LmlkID0gJ21lc3NhZ2UtdGV4dGFyZWEnO1xyXG4gIG1lc3NhZ2VCb3gubmFtZSA9ICdtZXNzYWdlLXRleHQnO1xyXG4gIG1lc3NhZ2VCb3gucGxhY2Vob2xkZXIgPSAnTWVzc2FnZSc7XHJcbiAgXHJcbiAgbmFtZURpdi5hcHBlbmQobmFtZUlucHV0KTtcclxuICBlbWFpbERpdi5hcHBlbmQoZW1haWxJbnB1dCk7XHJcbiAgbWVzc2FnZUJveERpdi5hcHBlbmQobWVzc2FnZUJveCk7XHJcblxyXG4gIGNvbnRhY3RGb3JtLmFwcGVuZChuYW1lRGl2LCBlbWFpbERpdiwgbWVzc2FnZUJveERpdiwgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JOYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwsIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yVGV4dEFyZWEpO1xyXG4gIGNvbnRhY3RGb3JtQ29udGFpbmVyLmFwcGVuZChjb250YWN0Rm9ybSk7XHJcblxyXG4gIHJldHVybiBjb250YWN0Rm9ybUNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0Rm9ybSgpIHtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtaW5wdXQnKS52YWx1ZTtcclxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbC1pbnB1dCcpLnZhbHVlO1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZS10ZXh0YXJlYScpLnZhbHVlO1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cclxuICAvLyBNYWtpbmcgdGhlIHZhbGlkYXRpb24gYmVmb3JlIHN1Ym1pdHRpbmcgdGhlIGZvcm0sIGFuZCBzdG9wcyBpZiBzb21ldGhpbmcgaXMgd3JvbmdcclxuICBpZiAoIXZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlIGRhdGEgdGFrZW4gZnJvbSB0aGUgZm9ybVxyXG4gIGNvbnN0IGZvcm1EYXRhID0ge1xyXG4gICAgbmFtZTogbmFtZSxcclxuICAgIGVtYWlsOiBlbWFpbCxcclxuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgfTtcclxuXHJcbiAgLy8gQ29udmVydCB0aGUgZm9ybURhdGEgb2JqZWN0IGludG8gYSBKU09OIHN0cmluZ1xyXG4gIGNvbnN0IGZvcm1EYXRhSlNPTiA9IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKTtcclxuXHJcbiAgLy8gU3RvcmUgdGhlIEpTT04gZGF0YSBpbiBsb2NhbFN0b3JhZ2VcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybURhdGEnLCBmb3JtRGF0YUpTT04pO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1pbnB1dCcpLnZhbHVlID0gJyc7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsLWlucHV0JykudmFsdWUgPSAnJztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZS10ZXh0YXJlYScpLnZhbHVlID0gJyc7XHJcblxyXG4gIGRpc3BsYXlMb2NhbFN0b3JhZ2VEYXRhKCk7ICAvLyBVcGRhdGUgdGhlIGRpc3BsYXllZCBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxyXG5cclxuICBtYWluLmFwcGVuZChjb25maXJtTWVzc2FnZXMuY29uZmlybWF0aW9uTWVzc2FnZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcclxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1pbnB1dCcpLnZhbHVlO1xyXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwtaW5wdXQnKS52YWx1ZTtcclxuICBjb25zdCBtZXNzYWdlVGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZS10ZXh0YXJlYScpLnZhbHVlO1xyXG4gIGNvbnN0IGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybWF0aW9uLW1lc3NhZ2UnKTtcclxuICBsZXQgaXNGb3JtSW5wdXRWYWxpZCA9IHRydWU7XHJcblxyXG4gIGlmICghbmFtZUlucHV0IHx8IG5hbWVJbnB1dC5sZW5ndGggPCAyKSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvck5hbWUuaW5uZXJIVE1MID0gJ1lvdXIgTmFtZSBpcyB0b28gc2hvcnQsIHBsZWFzZSBnaXZlIGEgdmFsaWQgbmFtZSEnO1xyXG4gICAgaXNGb3JtSW5wdXRWYWxpZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAoIS9eW2EtekEtelxcc10rJC8udGVzdChuYW1lSW5wdXQpICkge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JOYW1lLmlubmVySFRNTCA9ICdQbGVhc2UgZ2l2ZSBhIHZhbGlkIG5hbWUhJztcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gQ2xlYXIgdGhlIGVycm9yIG1lc3NhZ2UgaWYgdGhlIGlucHV0IGlzIHZhbGlkXHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvck5hbWUuaW5uZXJIVE1MID0gJyc7XHJcbiAgfVxyXG5cclxuICBpZiAoIS9eW0EtWmEtejAtOS5fJSstXStAW0EtWmEtejAtOS4tXStcXC5bQS1aYS16XXsyLH0kLy50ZXN0KGVtYWlsSW5wdXQpKSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvckVtYWlsLmlubmVySFRNTCA9ICdQbGVhc2UgZ2l2ZSBhIHZhbGlkIGVtYWlsISc7XHJcbiAgICBpc0Zvcm1JbnB1dFZhbGlkID0gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgfVxyXG5cclxuICBpZiAoIW1lc3NhZ2VUZXh0QXJlYXx8IG1lc3NhZ2VUZXh0QXJlYS5sZW5ndGggPD0gNikge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYS5pbm5lckhUTUwgPSAnWW91ciBNZXNzYWdlIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgaXNGb3JtSW5wdXRWYWxpZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvclRleHRBcmVhLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbmZpcm1hdGlvbk1lc3NhZ2UpIHtcclxuICAgIGNvbmZpcm1NZXNzYWdlcy5jb25maXJtYXRpb25NZXNzYWdlLmlubmVySFRNTCA9ICdZb3UgYXJlIGFscmVhZHkgc3VibWl0dGVkIHRoZSBmb3JtISc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbmZpcm1NZXNzYWdlcy5jb25maXJtYXRpb25NZXNzYWdlLmlubmVySFRNTCA9IGBGb3JtIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkhIDxicj5cclxuICAgIFdlIHdpbGwgY29udGFjdCB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS5gO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gaXNGb3JtSW5wdXRWYWxpZDtcclxufVxyXG5cclxuLy8gSUlGRSAoSW1tZWRpYXRlbHkgSW52b2tlZCBGdW5jdGlvbiBFeHByZXNzaW9uKSBmb3IgZW5jYXBzdWxhdGlvbiBwdXJwb3NlXHJcbmNvbnN0IGVycm9yTWVzc2FnZXMgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGVycm9yVmFsaWRhdGlvbkZvck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZXJyb3JWYWxpZGF0aW9uRm9yTmFtZS5pZCA9ICdlcnJvci1uYW1lJztcclxuXHJcbiAgY29uc3QgZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwuaWQgPSAnZXJyb3ItZW1haWwnO1xyXG5cclxuICBjb25zdCBlcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBlcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYS5pZCA9ICdlcnJvci10ZXh0YXJlYSc7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlcnJvclZhbGlkYXRpb25Gb3JOYW1lLFxyXG4gICAgZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwsXHJcbiAgICBlcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYSxcclxuICB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgY29uZmlybU1lc3NhZ2VzID0gKCgpID0+IHtcclxuICAvLyBTaG93cyBhIGNvbmZpcm1hdGlvbiBtZXNzYWdlIHVwb24gYSBzdWNjZXNzZnVsIHN1Ym1pc3Npb24gb2YgdGhlIGZvcm1cclxuICBjb25zdCBjb25maXJtYXRpb25NZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uZmlybWF0aW9uTWVzc2FnZS5pZCA9ICdjb25maXJtYXRpb24tbWVzc2FnZSc7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb25maXJtYXRpb25NZXNzYWdlXHJcbiAgfVxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUxvY2FsU3RvcmFnZURhdGEoKSB7XHJcbiAgLy8gUmV0cmlldmluZyB0aGUgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBsb2NhbFN0b3JhZ2VEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm1EYXRhJyk7XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2VEYXRhKSB7XHJcbiAgICAvLyBQYXJzaW5nIEpTT04gc3RyaW5nIGludG8gYSBKUyBvYmplY3RcclxuICAgIGNvbnN0IHBhcnNlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZURhdGEpO1xyXG5cclxuICAgIC8vIGxvZ3MgdGhlIHN0b3JlZCBkYXRhIGZyb20gdGhlIGZvcm1cclxuICAgIGNvbnNvbGUubG9nKCdTdG9yZWQgRm9ybSBEYXRhOiAnLCBwYXJzZWREYXRhKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ1RoZXJlIGlzblxcJ3QgYW55IGRhdGEgc3RvcmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlLicpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0UGFnZSgpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuICBpZiAoZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JOYW1lIHx8IGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwgfHwgXHJcbiAgICAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvclRleHRBcmVhKSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvck5hbWUudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yVGV4dEFyZWEudGV4dENvbnRlbnQgPSAnJztcclxuICB9IFxyXG5cclxuICBtYWluLmFwcGVuZChjcmVhdGVDb250YWN0UGFnZSgpKTtcclxufVxyXG5cclxuIiwiIGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IGhvbWVQYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG9tZVBhZ2VEaXYuaWQgPSAnaG9tZS1wYWdlLWRpdic7XHJcblxyXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICByZXN0YXVyYW50TmFtZS5pZCA9ICdyZXN0YXVyYW50LW5hbWUnO1xyXG4gIHJlc3RhdXJhbnROYW1lLmlubmVySFRNTCA9IGBXZWxjb21lIHRvIE9rb25vbWkgRmxhdm9yczxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJyZXN0YXVyYW50LXR5cGVcIj5UcmFkaXRpb25hbCBKYXBhbmVzZSBSZXN0YXVyYW50PC9zcGFuPmA7XHJcblxyXG4gIGNvbnN0IGhvbWVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG9tZVBhcmFncmFwaC5pZCA9ICdob21lLXBhcmFncmFwaCc7XHJcbiAgaG9tZVBhcmFncmFwaC5pbm5lckhUTUwgPSBgXHJcbiAgVGhlIGFydCBvZiBjcmFmdGluZyBtb3V0aHdhdGVyaW5nIG9rb25vbWl5YWtpIGhhcyBcclxuICBiZWVuIG91ciBwYXNzaW9uIGFuZCB0cmFkaXRpb24gc2luY2UgMTkwMC4gXHJcbiAgV2l0aCBvdmVyIGEgY2VudHVyeSBvZiBkZWRpY2F0ZWQgc2VydmljZSwgXHJcbiAgd2UgdGFrZSBpbW1lbnNlIHByaWRlIGluIG91ciBjb21taXRtZW50IHRvIGRlbGl2ZXJpbmcgXHJcbiAgbm90IG9ubHkgdGhlIGZpbmVzdCBmbGF2b3JzIGJ1dCBhbHNvIHRoZSB3YXJtZXN0IGhvc3BpdGFsaXR5IHRvIG91ciBcclxuICBjaGVyaXNoZWQgY3VzdG9tZXJzLiA8YnI+PGJyPlxyXG4gIFxyXG4gIEZvciBnZW5lcmF0aW9ucywgb3VyIGZhbWlseS1vd25lZCBlc3RhYmxpc2htZW50IGhhcyBcclxuICBwZXJmZWN0ZWQgdGhlIGRlbGljYXRlIGJhbGFuY2Ugb2Ygc2F2b3J5IGFuZCBzd2VldCwgY3Jpc3B5IGFuZCB0ZW5kZXIsIFxyXG4gIHRoYXQgZGVmaW5lcyB0aGUgZXNzZW5jZSBvZiBva29ub21peWFraS4gRXZlcnkgZGlzaCB3ZSBjcmVhdGUgaXMgXHJcbiAgYSBsYWJvciBvZiBsb3ZlLCBwYXNzZWQgZG93biB0aHJvdWdoIHRoZSB5ZWFycywgcHJlc2VydmluZyB0aGUgYXV0aGVudGljaXR5IFxyXG4gIGFuZCB0aW1lLWhvbm9yZWQgdGVjaG5pcXVlcyB0aGF0IGhhdmUgbWFkZSB1cyBhIGJlbG92ZWQgY3VsaW5hcnkgZGVzdGluYXRpb24uYDtcclxuXHJcbiAgY29uc3Qgd29ya1NjaGVkdWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd29ya1NjaGVkdWxlRGl2LmlkID0gJ3dvcmstc2NoZWR1bGUtZGl2JztcclxuICBcclxuICBjb25zdCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBob3Vyc1RpdGxlLmlkID0gJ2hvdXJzLWgyJztcclxuICBob3Vyc1RpdGxlLnRleHRDb250ZW50ID0gJ1dvcmtpbmcgSG91cnMnO1xyXG5cclxuICAvLyBUaW1lIFNjaGVkdWxlIGZvciByZXN0YXVyYW50XHJcbiAgY29uc3QgaG91cnNNb25kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNNb25kYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc01vbmRheS50ZXh0Q29udGVudCA9ICdNb25kYXk6IDEwOjAwIC0gMjE6MDAnO1xyXG5cclxuICBjb25zdCBob3Vyc1R1ZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNUdWVzZGF5LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgaG91cnNUdWVzZGF5LnRleHRDb250ZW50ID0gJ1R1ZXNkYXk6IDEwOjAwIC0gMjE6MDAnO1xyXG5cclxuICBjb25zdCBob3Vyc1dlZG5lc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob3Vyc1dlZG5lc2RheS5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIGhvdXJzV2VkbmVzZGF5LnRleHRDb250ZW50ID0gJ1dlZG5lc2RheTogMTA6MDAgLSAyMTowMCc7XHJcblxyXG4gIGNvbnN0IGhvdXJzVGh1cnNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNUaHVyc2RheS5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIGhvdXJzVGh1cnNkYXkudGV4dENvbnRlbnQgPSAnVGh1cnNkYXk6IDEwOjAwIC0gMjE6MDAnO1xyXG5cclxuICBjb25zdCBob3Vyc0ZyaWRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob3Vyc0ZyaWRheS5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIGhvdXJzRnJpZGF5LnRleHRDb250ZW50ID0gJ0ZyaWRheTogMTA6MDAgLSAyMTowMCc7XHJcblxyXG4gIGNvbnN0IGhvdXJzU2F0dXJkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNTYXR1cmRheS5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIGhvdXJzU2F0dXJkYXkudGV4dENvbnRlbnQgPSAnU2F0dXJkYXk6IDEwOjAwIC0gMTg6MDAnO1xyXG5cclxuICBjb25zdCBob3Vyc1N1bmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob3Vyc1N1bmRheS5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIGhvdXJzU3VuZGF5LnRleHRDb250ZW50ID0gJ1N1bmRheTogQ2xvc2VkJztcclxuXHJcbiAgd29ya1NjaGVkdWxlRGl2LmFwcGVuZChob3Vyc1RpdGxlLCBob3Vyc01vbmRheSwgaG91cnNUdWVzZGF5LCBob3Vyc1dlZG5lc2RheSwgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaG91cnNUaHVyc2RheSwgaG91cnNGcmlkYXksIGhvdXJzU2F0dXJkYXksIGhvdXJzU3VuZGF5KTtcclxuICBob21lUGFnZURpdi5hcHBlbmQocmVzdGF1cmFudE5hbWUsIGhvbWVQYXJhZ3JhcGgsIHdvcmtTY2hlZHVsZURpdik7XHJcbiAgXHJcbiAgcmV0dXJuIGhvbWVQYWdlRGl2O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuXHJcbm1haW4uYXBwZW5kKGNyZWF0ZUhvbWVQYWdlKCkpO1xyXG59XHJcbiIsImltcG9ydCBmaXJzdFByb2R1Y3RJbWFnZSBmcm9tICcuL2Fzc2V0cy9maXJzdC1wcm9kdWN0LnBuZyc7XHJcbmltcG9ydCBzZWNvbmRQcm9kdWN0SW1hZ2UgZnJvbSAnLi9hc3NldHMvc2Vjb25kLXByb2R1Y3QucG5nJztcclxuaW1wb3J0IHRoaXJkUHJvZHVjdEltYWdlIGZyb20gJy4vYXNzZXRzL3RoaXJkLXByb2R1Y3QucG5nJztcclxuaW1wb3J0IGZvdXJ0aFByb2R1Y3RJbWFnZSBmcm9tICcuL2Fzc2V0cy9mb3VydGgtcHJvZHVjdC5wbmcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XHJcbiAgLy8gQ3JlYXRlIGEgY29udGFpbmVyIHRvIGFwcGVuZCBhbGwgdGhlIHByb2R1Y3RzIGZvciB0aGUgbWVudVxyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZW51Q29udGFpbmVyLmlkID0gJ21lbnUtZGl2JztcclxuXHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICBjcmVhdGVQcm9kdWN0KFxyXG4gICAgICAnU2FtdXJhaSBCYWNvbicsXHJcbiAgICAgIGZpcnN0UHJvZHVjdEltYWdlLFxyXG4gICAgICBgSW50cm9kdWNpbmcgb3VyIFNhbXVyYWkgQmFjb24gT2tvbm9taXlha2kgd2hlcmUgc2F2b3J5IG1lZXRzIHNlbnNhdGlvbmFsISA8YnI+XHJcbiAgICAgIERlbGlnaHQgaW4gYSBoYXJtb25pb3VzIGJsZW5kIG9mIGNyaXNweSwgXHJcbiAgICAgIHNtb2t5IGJhY29uIGFuZCB0aGUgY2xhc3NpYyBKYXBhbmVzZSBwYW5jYWtlLCBjb29rZWQgdG8gcGVyZmVjdGlvbi5gLFxyXG4gICAgICAnUHJpY2U6IDUuNzAkJ1xyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kKFxyXG4gICAgY3JlYXRlUHJvZHVjdChcclxuICAgICAgJ0Z1amkgc2Vuc2F0aW9uJyxcclxuICAgICAgc2Vjb25kUHJvZHVjdEltYWdlLFxyXG4gICAgICBgQmVob2xkIHRoZSBGdWppIFNlbnNhdGlvbiBPa29ub21peWFraSwgYSBjdWxpbmFyeSBtYXN0ZXJwaWVjZSB0aGF0IGFzY2VuZHMgXHJcbiAgICAgIHRvIG5ldyBoZWlnaHRzIG9mIHRhc3RlIGFuZCBkZWxpZ2h0ISA8YnI+XHJcbiAgICAgIFRoaXMgZXhwbGljaXQgc2Vuc2F0aW9uIGJvYXN0cyBhIGZvdW5kYXRpb24gb2YgdGVuZGVyIGNhYmJhZ2UgYW5kIHNhdm9yeSBwb3JrIGJlbGx5LCBjcmVhdGluZyBhIGRlbGVjdGFibGUgY29udHJhc3Qgb2YgdGV4dHVyZXMgYW5kIGZsYXZvcnMuYCxcclxuICAgICAgJ1ByaWNlOiA3LjUwJCdcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmFwcGVuZChcclxuICAgIGNyZWF0ZVByb2R1Y3QoXHJcbiAgICAgICdOaW5qYSB3YXknLFxyXG4gICAgICB0aGlyZFByb2R1Y3RJbWFnZSxcclxuICAgICAgYFByZXBhcmUgdG8gZW1iYXJrIG9uIGEgY3VsaW5hcnkgYWR2ZW50dXJlIGxpa2Ugbm8gb3RoZXIgd2l0aCBvdXIgTmluamEgV2F5IE9rb25vbWl5YWtpISA8YnI+XHJcbiAgICAgIFRoaXMgZGlzaCBpcyBjcmFmdGVkIHdpdGggY3Jpc3Agc2hyZWRkZWQgY2Fycm90cyBhbmQgZGVsaWNhdGUgdmVnZXRhYmxlcywgcHJvdmlkaW5nIGEgZGVsaWdodGZ1bCBoYXJtb255IG9mIHRleHR1cmVzIGFuZCB0YXN0ZXMuYCxcclxuICAgICAgJ1ByaWNlOiA2LjkwJCdcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmFwcGVuZChcclxuICAgIGNyZWF0ZVByb2R1Y3QoXHJcbiAgICAgICdTaHJpbXAgZXJ1cHRpb24nLFxyXG4gICAgICBmb3VydGhQcm9kdWN0SW1hZ2UsXHJcbiAgICAgIGBQcmVwYXJlIGZvciBhIGZsYXZvciBlcnVwdGlvbiBsaWtlIG5vIG90aGVyIHdpdGggb3VyIFNocmltcCBFcnVwdGlvbiBPa29ub21peWFraSEgPGJyPlxyXG4gICAgICAgVGhpcyBleHRyYW9yZGluYXJ5IGRpc2ggdGFrZXMgdGhlIGNsYXNzaWMgSmFwYW5lc2UgcGFuY2FrZSB0byBuZXcgaGVpZ2h0cyBieSBmZWF0dXJpbmcgYSBnZW5lcm91cyBlcnVwdGlvbiBvZiBzdWNjdWxlbnQgc2hyaW1wLCBcclxuICAgICAgIGNyZWF0aW5nIGEgZGVsaWNpb3VzIHN5bXBob255IG9mIHRhc3RlcyBhbmQgdGV4dHVyZXMuYCxcclxuICAgICAgJ1ByaWNlOiA5LjYwJCdcclxuICAgIClcclxuICApO1xyXG5cclxuICByZXR1cm4gbWVudUNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvZHVjdChwcm9kdWN0VGl0bGUsIHByb2R1Y3RJbWFnZVBhdGgsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xyXG4gIGNvbnN0IHByb2R1Y3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcHJvZHVjdENhcmQuaWQgPSAncHJvZHVjdC1jYXJkJztcclxuXHJcbiAgY29uc3QgcHJvZHVjdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgcHJvZHVjdEltYWdlLmlkID0gJ3Byb2R1Y3QtaW1nJztcclxuICBwcm9kdWN0SW1hZ2Uuc3JjID0gcHJvZHVjdEltYWdlUGF0aDtcclxuICBwcm9kdWN0SW1hZ2UuYWx0ID0gcHJvZHVjdFRpdGxlO1xyXG5cclxuICBjb25zdCBwcm9kdWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgcHJvZHVjdE5hbWUuaWQgPSAncHJvZHVjdC10aXRsZSc7XHJcbiAgcHJvZHVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9kdWN0VGl0bGU7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwcm9kdWN0RGVzY3JpcHRpb24uaWQgPSAncHJvZHVjdC1kZXNjcmlwdGlvbic7XHJcbiAgcHJvZHVjdERlc2NyaXB0aW9uLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xyXG5cclxuICBjb25zdCBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcHJvZHVjdFByaWNlLmlkID0gJ3Byb2R1Y3QtcHJpY2UnO1xyXG4gIHByb2R1Y3RQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xyXG5cclxuICBwcm9kdWN0Q2FyZC5hcHBlbmQocHJvZHVjdEltYWdlKTtcclxuICBwcm9kdWN0Q2FyZC5hcHBlbmQocHJvZHVjdE5hbWUpO1xyXG4gIHByb2R1Y3RDYXJkLmFwcGVuZChwcm9kdWN0RGVzY3JpcHRpb24pO1xyXG4gIHByb2R1Y3RDYXJkLmFwcGVuZChwcm9kdWN0UHJpY2UpO1xyXG5cclxuICByZXR1cm4gcHJvZHVjdENhcmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudVBhZ2UoKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcblxyXG4gIG1haW4uYXBwZW5kKGNyZWF0ZU1lbnVQYWdlKCkpO1xyXG59IiwiaW1wb3J0IHsgbG9hZEhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBsb2FkTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCB7IGxvYWRDb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuaW1wb3J0IGhvbWVCYWNrZ3JvdW5kUGljIGZyb20gJy4vYXNzZXRzL2RhbmllbGUtc2FsdXRhcmktcmVzdGF1cmFudC1ob21lLnBuZyc7XHJcbmltcG9ydCBjb250YWN0QmFja2dyb3VuZFBpYyBmcm9tICcuL2Fzc2V0cy9jb250YWN0LXVzLnBuZyc7XHJcbmltcG9ydCBsb2dvUGljIGZyb20gJy4vYXNzZXRzL29rb25vbWktbG9nby5wbmcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIGhlYWRlci5pZCA9ICdoZWFkZXInO1xyXG5cclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbG9nby5pZCA9ICdsb2dvJztcclxuICBsb2dvLnNyYyA9IGxvZ29QaWM7XHJcbiAgbG9nby5hbHQgPSAnTE9HTyc7XHJcblxyXG4gIGhlYWRlci5hcHBlbmQobG9nbyk7XHJcbiAgaGVhZGVyLmFwcGVuZChjcmVhdGVOYXYoKSk7XHJcblxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICBuYXYuaWQgPSAnbmF2JztcclxuXHJcbiAgY29uc3QgaG9tZU5hdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGhvbWVOYXZCdG4uaWQgPSAnaG9tZS1idG4nO1xyXG4gIGhvbWVOYXZCdG4udGV4dENvbnRlbnQgPSAnSE9NRSc7XHJcblxyXG4gIGNvbnN0IG1lbnVOYXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBtZW51TmF2QnRuLmlkID0gJ21lbnUtYnRuJztcclxuICBtZW51TmF2QnRuLnRleHRDb250ZW50ID0gJ01FTlUnO1xyXG5cclxuICBjb25zdCBjb250YWN0TmF2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29udGFjdE5hdkJ0bi5pZCA9ICdjb250YWN0LWJ0bic7XHJcbiAgY29udGFjdE5hdkJ0bi50ZXh0Q29udGVudCA9ICdDT05UQUNUJztcclxuXHJcbiAgLy8gSGFtYnVyZ2VyIG1lbnUgXHJcbiAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaGFtYnVyZ2VyLmlkID0gJ2hhbWJ1cmdlci1jb250YWluZXInO1xyXG4gIGNvbnN0IGZpcnN0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGZpcnN0QmFyLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlci1iYXInKTtcclxuICBjb25zdCBzZWNvbmRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgc2Vjb25kQmFyLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlci1iYXInKTtcclxuICBjb25zdCB0aGlyZEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0aGlyZEJhci5jbGFzc0xpc3QuYWRkKCdoYW1idXJnZXItYmFyJyk7XHJcblxyXG4gIG5hdi5hcHBlbmQoaG9tZU5hdkJ0bik7XHJcbiAgbmF2LmFwcGVuZChtZW51TmF2QnRuKTtcclxuICBuYXYuYXBwZW5kKGNvbnRhY3ROYXZCdG4pO1xyXG4gIGhhbWJ1cmdlci5hcHBlbmQoZmlyc3RCYXIsIHNlY29uZEJhciwgdGhpcmRCYXIpO1xyXG4gIG5hdi5hcHBlbmQoaGFtYnVyZ2VyKTtcclxuXHJcbiAgcmV0dXJuIG5hdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIG1haW4uaWQgPSAnbWFpbic7XHJcblxyXG4gIHJldHVybiBtYWluO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgZm9vdGVyLmlkID0gJ2Zvb3Rlcic7XHJcblxyXG4gIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZvb3RlckRpdi5pZCA9ICdmb290ZXItZGl2JztcclxuXHJcbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqknO1xyXG5cclxuICBjb25zdCBhdXRob3JOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGF1dGhvck5hbWUudGV4dENvbnRlbnQgPSAnSm9yZGFuIFBhcGFkaXRzYXMnO1xyXG5cclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgY29uc3QgZ2l0SHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBnaXRIdWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2pvcmRhbnBhcGFkaXRzYXMnO1xyXG5cclxuICBjb25zdCBnaXRIdWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGdpdEh1Ykljb24uY2xhc3NMaXN0LmFkZCgnZmEtYnJhbmRzJywgJ2ZhLWdpdGh1YicpO1xyXG5cclxuICBmb290ZXJEaXYuYXBwZW5kKGNvcHlyaWdodCwgYXV0aG9yTmFtZSwgY3VycmVudERhdGUsIGdpdEh1YkxpbmspO1xyXG4gIGdpdEh1YkxpbmsuYXBwZW5kKGdpdEh1Ykljb24pO1xyXG4gIGZvb3Rlci5hcHBlbmQoZm9vdGVyRGl2KTtcclxuXHJcbiAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuICAvLyBGdW5jdGlvbiBmb3Igc3dpdGNoaW5nIGJldHdlZW4gbmF2YmFyIHRhYnNcclxuZnVuY3Rpb24gYnJvd3NlTmF2VGFicygpIHtcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcbiAgY29uc3QgaG9tZUJhY2tncm91bmRJbWFnZSA9IGhvbWVCYWNrZ3JvdW5kUGljO1xyXG4gIGNvbnN0IGNvbnRhY3RCYWNrZ3JvdW5kSW1hZ2UgPSBjb250YWN0QmFja2dyb3VuZFBpYztcclxuXHJcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnaG9tZS1idG4nKSB7XHJcbiAgICAgICAgY2xlYW5NYWluKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aG9tZUJhY2tncm91bmRJbWFnZX0pYDtcclxuICAgICAgICBsb2FkSG9tZVBhZ2UoKTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdtZW51LWJ0bicpIHtcclxuICAgICAgICBjbGVhbk1haW4oKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcclxuICAgICAgICBsb2FkTWVudVBhZ2UoKTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdjb250YWN0LWJ0bicpIHtcclxuICAgICAgICBjbGVhbk1haW4oKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjb250YWN0QmFja2dyb3VuZEltYWdlfSlgO1xyXG4gICAgICAgIGxvYWRDb250YWN0UGFnZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUhhbWJ1cmdlck1lbnUoKSB7XHJcbiAgY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYW1idXJnZXItY29udGFpbmVyJyk7XHJcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdicpO1xyXG5cclxuICBoYW1idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIG5hdkJhci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5NYWluKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG4gIG1haW4udGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZU1haW4oKSk7XHJcbiAgY29udGVudC5hcHBlbmQoY3JlYXRlRm9vdGVyKCkpO1xyXG4gIGxvYWRIb21lUGFnZSgpO1xyXG4gIGJyb3dzZU5hdlRhYnMoKTtcclxuICBkaXNwbGF5SGFtYnVyZ2VyTWVudSgpO1xyXG5cclxuICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZFBhZ2UgfSBmcm9tICcuL3BhZ2Utc3RydWN0dXJlJztcclxuaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xyXG5cclxubG9hZFBhZ2UoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9