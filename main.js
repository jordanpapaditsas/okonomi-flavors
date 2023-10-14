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
  width: 15rem;
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
  font-size: 0.9rem;
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
  font-size: 2.2rem;
}

#restaurant-type {
  font-size: 1.1rem;
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
  font-size: 1.3rem;
  margin-top: 3rem;
}

#work-schedule-div {
  border: 2px solid var(--text-color-white);
  width: 30%;
  height: 12rem;
  text-align: center;
  margin-top: 5rem;
  font-size: 1.2rem;
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
  font-size: 1.3rem;
}

#product-price {
  font-size: 1.4rem;
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
}

#contact-us-title {
  color: var(--text-color-white);
  text-align: center;
  margin-bottom: 1rem;
  font-size: 3rem;
  grid-area: contact-form;
  grid-row: 1;
}

#contact-info-container {
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: rgb(0, 0, 0, 0.7);
  color: var(--text-color-white);
  width: 15rem;
  height: 16rem;
  border-radius: 0.4rem;
  grid-area: contact-info;
  grid-row: 2;
}

#location-container, 
#phone-number-container,
#email-container {
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
}

#contact-form-container {
  color: var(--text-color-white);
  grid-area: contact-form;
  grid-row: 2;
}

#contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#contact-form input, textarea {
  width: 18rem;
  height: 3rem;
  font-size: 1rem;
  text-indent: 2rem;
  border-radius: 0.7rem;
}

#contact-form textarea {
  height: 10rem;
  resize: none;     /* disables the resizing message box manually */ 
  letter-spacing: 1px;
}

#submit-btn-container {
  text-align: center;
  grid-area: contact-form;
  grid-row: 3;
}

#submit-btn {
  font-size: 1.2rem;
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
  font-size: 1.5rem;
  animation: fadeIn 0.8s;
}

#error-name,
#error-email,
#error-textarea {
  font-size: 1.3rem;
  color: red;
  font-weight: bold;
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
  #work-schedule-div {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    width: 28%;
    height: 11rem;
  }

  #menu-div {
    gap: 4rem;
  }

  #product-img {
    width: 9rem;
  }

  #product-description {
    font-size: 1.2rem;
  }

  #product-price {
    font-size: 1.3rem;
  }

  #contact-us-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 660px) {
  #logo {
    width: 12rem;
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
    font-size: 0.8rem;
  }

  #nav.active {
    left: 0;
  }

  #hamburger-container {
    display: block;
    position: fixed;
    right: 1rem;
    top: 1rem;
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
    font-size: 1.5rem;
  }

  #restaurant-type {
    font-size: 0.8rem;
  }

  #home-paragraph {
    font-size: 1rem;
    margin-top: 1rem;
    max-width: 50%;
  }

  #work-schedule-div {
    width: 40%;
    margin-bottom: 1rem;
    font-size: 1rem;
    height: 10rem;
  }

  #hours-h2 {
    font-size: 1.3rem;
  }

  #footer {
    font-size: 0.7rem;
  }

  #product-img {
    width: 8rem;
  }

  #product-title {
    font-size: 1.2rem;
  }

  #product-description {
    font-size: 0.9rem;
    text-align: center;
    width: 30rem;
  }

  #product-price {
    font-size: 1.2rem;
  }

  #contact-us-title {
    font-size: 1.5rem;
    grid-column: 2;
    margin-top: 1rem;
  }

  #contact-info-container {
    font-size: 0.8rem;
    width: 12rem;
    height: 10rem;
  }

  #contact-form-container {
    grid-column: 2;
  }
  
  #contact-form input, textarea {
    width: 150%;
    height: 3rem;
    font-size: 0.8rem;
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
    width: 8rem;
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
    font-size: 0.6rem;
  }

  #restaurant-name {
    font-size: 1.3rem;
  }

  #restaurant-type {
    font-size: 0.7rem;
  }

  #home-paragraph {
    font-size: 1rem;
    margin-top: 1rem;
    max-width: 65%;
  }

  #work-schedule-div {
    width: 60%;
    margin-bottom: 1rem;
  }

  #hours-h2 {
    font-size: 1.2rem;
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
    font-size: 1.3rem;
    grid-column: 1;
    margin-top: 1rem;
  }

  #contact-info-container {
    font-size: 0.6rem;
    grid-column: 1;
    grid-row: 4;
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 15rem;
  }

  #location-container, 
  #phone-number-container,
  #email-container {
    display: flex;
    width: 100%;
  }

  #contact-form-container {
    grid-column: 1;
  }
  
  #contact-form input, textarea {
    width: 15rem;
    font-size: 0.7rem;
  }

  #submit-btn-container {
    grid-column: 1;
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
    gap: 0;
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
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --text-color-white: #fafafa;\r\n  --color-black: #000;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  background-image: url(../assets/daniele-salutari-restaurant-home.png);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n}\r\n\r\n/* Header */\r\n#logo {\r\n  width: 15rem;\r\n  transition: all 0.8s ease-in-out;\r\n}\r\n\r\n#header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n  max-width: 100%;\r\n  height: 7rem;\r\n}\r\n\r\n#home-btn,\r\n#menu-btn,\r\n#contact-btn {\r\n  color: var(--text-color-white);\r\n  background-color: var(--color-black);\r\n  font-size: 0.9rem;\r\n  margin-right: 5rem;\r\n  border: none;\r\n}\r\n\r\n/* Hamburger menu */\r\n#hamburger-container {\r\n  display: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.hamburger-bar {\r\n  display: block;\r\n  width: 25px;\r\n  height: 3px;\r\n  margin: 5px auto;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n  background-color: var(--text-color-white);\r\n}\r\n\r\n/* Main */\r\n#restaurant-name {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n#restaurant-type {\r\n  font-size: 1.1rem;\r\n  font-weight: normal;\r\n}\r\n\r\n#home-page-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 3rem;\r\n  color: var(--text-color-white);\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n#home-paragraph {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  max-width: 40%;\r\n  font-size: 1.3rem;\r\n  margin-top: 3rem;\r\n}\r\n\r\n#work-schedule-div {\r\n  border: 2px solid var(--text-color-white);\r\n  width: 30%;\r\n  height: 12rem;\r\n  text-align: center;\r\n  margin-top: 5rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#hours-h2 {\r\n  text-decoration: underline;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n#menu-div {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  gap: 5rem;\r\n  background: linear-gradient(rgba(8, 8, 8, 0.2), rgba(117, 109, 109, 0.8));\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n#product-img {\r\n  border-radius: 35%;\r\n  width: 10rem;\r\n}\r\n\r\n#product-card {\r\n  gap: 2rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#product-description {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n#product-price {\r\n  font-size: 1.4rem;\r\n  font-weight: bold;\r\n}\r\n\r\n#contact-page-container {\r\n  animation: fadeIn 1.5s;\r\n  display: grid;\r\n  grid-template-areas: \r\n  \"contact-info contact-form\"\r\n  \"contact-info contact-form\";\r\n  grid-template-columns: 3fr 5fr 1fr;\r\n  grid-template-rows: 1fr 4fr 1fr;\r\n  gap: 4rem;\r\n  padding: 0 2rem;\r\n  justify-items: center;\r\n}\r\n\r\n#contact-us-title {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  margin-bottom: 1rem;\r\n  font-size: 3rem;\r\n  grid-area: contact-form;\r\n  grid-row: 1;\r\n}\r\n\r\n#contact-info-container {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  background-color: rgb(0, 0, 0, 0.7);\r\n  color: var(--text-color-white);\r\n  width: 15rem;\r\n  height: 16rem;\r\n  border-radius: 0.4rem;\r\n  grid-area: contact-info;\r\n  grid-row: 2;\r\n}\r\n\r\n#location-container, \r\n#phone-number-container,\r\n#email-container {\r\n  display: flex;\r\n  gap: 1rem;\r\n  margin-left: 1rem;\r\n}\r\n\r\n#contact-form-container {\r\n  color: var(--text-color-white);\r\n  grid-area: contact-form;\r\n  grid-row: 2;\r\n}\r\n\r\n#contact-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n#contact-form input, textarea {\r\n  width: 18rem;\r\n  height: 3rem;\r\n  font-size: 1rem;\r\n  text-indent: 2rem;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\n#contact-form textarea {\r\n  height: 10rem;\r\n  resize: none;     /* disables the resizing message box manually */ \r\n  letter-spacing: 1px;\r\n}\r\n\r\n#submit-btn-container {\r\n  text-align: center;\r\n  grid-area: contact-form;\r\n  grid-row: 3;\r\n}\r\n\r\n#submit-btn {\r\n  font-size: 1.2rem;\r\n  width: 10rem;\r\n  height: 3rem;\r\n  border-radius: 2rem;\r\n  background-color: #8d0d0d;\r\n  color: var(--text-color-white);\r\n  border: none;\r\n  margin-top: 2rem;\r\n  transition: all 0.3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n#confirmation-message {\r\n  color: var(--text-color-white);\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  font-size: 1.5rem;\r\n  animation: fadeIn 0.8s;\r\n}\r\n\r\n#error-name,\r\n#error-email,\r\n#error-textarea {\r\n  font-size: 1.3rem;\r\n  color: red;\r\n  font-weight: bold;\r\n}\r\n\r\n /* Footer */\r\n#footer {\r\n  border: 1px solid var(--color-black);\r\n  background-color: var(--color-black);\r\n  color: var(--text-color-white);\r\n  margin-top: auto;\r\n}\r\n\r\n#footer-div {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  height: 50px;\r\n  gap: 0.3rem;\r\n  color: var(--text-color-white);\r\n}\r\n\r\n.fa-brands {\r\n  color: var(--text-color-white);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n/* Animations - Effects */\r\n#logo:hover {\r\n  transform: rotate(360deg);\r\n  transition: all 0.8s ease-in-out;\r\n}\r\n\r\n#home-btn:hover,\r\n#menu-btn:hover,\r\n#contact-btn:hover {\r\n  background-color: var(--text-color-white);\r\n  color: var(--color-black);\r\n  transform: scale(1.2); \r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.fa-brands:hover {\r\n  transform: scale(1.4);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n#submit-btn:hover {\r\n  color: var(--color-black);\r\n  background-color: var(--text-color-white);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n#contact-form input:focus, #contact-form textarea:focus {\r\n  outline: none;\r\n  box-shadow: 1px 2px 2px 2px #0a0a0a;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Media Queries */\r\n@media (max-width: 1200px) {\r\n  #work-schedule-div {\r\n    margin-bottom: 1rem;\r\n    font-size: 1.1rem;\r\n    width: 28%;\r\n    height: 11rem;\r\n  }\r\n\r\n  #menu-div {\r\n    gap: 4rem;\r\n  }\r\n\r\n  #product-img {\r\n    width: 9rem;\r\n  }\r\n\r\n  #product-description {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #product-price {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  #contact-us-title {\r\n    font-size: 2.5rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 660px) {\r\n  #logo {\r\n    width: 12rem;\r\n  }\r\n\r\n  #nav {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    position: fixed;\r\n    left: -100%;\r\n    width: 100%;    \r\n    transition: 0.3s;\r\n    gap: 1rem;\r\n    background-color: rgb(0, 0, 0, 0.8);\r\n  }\r\n\r\n  #home-btn,\r\n  #menu-btn,\r\n  #contact-btn {\r\n    background-color: transparent;\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  #nav.active {\r\n    left: 0;\r\n  }\r\n\r\n  #hamburger-container {\r\n    display: block;\r\n    position: fixed;\r\n    right: 1rem;\r\n    top: 1rem;\r\n  }\r\n\r\n  #hamburger-container.active .hamburger-bar:nth-child(2) {\r\n    opacity: 0;\r\n  }\r\n  \r\n  #hamburger-container.active .hamburger-bar:nth-child(1) {\r\n    transform: translateY(8px) rotate(45deg);\r\n  }\r\n\r\n  #hamburger-container.active .hamburger-bar:nth-child(3) {\r\n    transform: translateY(-8px) rotate(-45deg);\r\n  }\r\n\r\n  #restaurant-name {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  #restaurant-type {\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  #home-paragraph {\r\n    font-size: 1rem;\r\n    margin-top: 1rem;\r\n    max-width: 50%;\r\n  }\r\n\r\n  #work-schedule-div {\r\n    width: 40%;\r\n    margin-bottom: 1rem;\r\n    font-size: 1rem;\r\n    height: 10rem;\r\n  }\r\n\r\n  #hours-h2 {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  #footer {\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  #product-img {\r\n    width: 8rem;\r\n  }\r\n\r\n  #product-title {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #product-description {\r\n    font-size: 0.9rem;\r\n    text-align: center;\r\n    width: 30rem;\r\n  }\r\n\r\n  #product-price {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #contact-us-title {\r\n    font-size: 1.5rem;\r\n    grid-column: 2;\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  #contact-info-container {\r\n    font-size: 0.8rem;\r\n    width: 12rem;\r\n    height: 10rem;\r\n  }\r\n\r\n  #contact-form-container {\r\n    grid-column: 2;\r\n  }\r\n  \r\n  #contact-form input, textarea {\r\n    width: 150%;\r\n    height: 3rem;\r\n    font-size: 0.8rem;\r\n    text-indent: 1rem;\r\n  }\r\n\r\n  #submit-btn-container {\r\n    grid-column: 2;\r\n    margin-top: -2rem;\r\n  }\r\n\r\n  #submit-btn {\r\n    font-size: 1rem;\r\n    width: 8rem;\r\n    height: 2.5rem;\r\n  }\r\n\r\n  #confirmation-message {\r\n    font-size: 1.1rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  #error-name,\r\n  #error-email,\r\n  #error-textarea {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  #logo {\r\n    width: 8rem;\r\n  }\r\n\r\n  #nav {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    position: fixed;\r\n    left: -100%;\r\n    width: 100%;    \r\n    transition: 0.3s;\r\n    gap: 1rem;\r\n    background-color: rgb(0, 0, 0, 0.8);\r\n  }\r\n\r\n  #home-btn,\r\n  #menu-btn,\r\n  #contact-btn {\r\n    background-color: transparent;\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  #restaurant-name {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  #restaurant-type {\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  #home-paragraph {\r\n    font-size: 1rem;\r\n    margin-top: 1rem;\r\n    max-width: 65%;\r\n  }\r\n\r\n  #work-schedule-div {\r\n    width: 60%;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  #hours-h2 {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #footer {\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  #product-img {\r\n    width: 6rem;\r\n  }\r\n\r\n  #product-title {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #product-description {\r\n    width: 19rem;\r\n  }\r\n\r\n  #product-price {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #contact-page-container {\r\n    gap: 0;\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: 1fr;\r\n    width: 100%;\r\n  }\r\n\r\n  #contact-us-title {\r\n    font-size: 1.3rem;\r\n    grid-column: 1;\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  #contact-info-container {\r\n    font-size: 0.6rem;\r\n    grid-column: 1;\r\n    grid-row: 4;\r\n    margin-bottom: 1rem;\r\n    margin-top: 1rem;\r\n    width: 15rem;\r\n  }\r\n\r\n  #location-container, \r\n  #phone-number-container,\r\n  #email-container {\r\n    display: flex;\r\n    width: 100%;\r\n  }\r\n\r\n  #contact-form-container {\r\n    grid-column: 1;\r\n  }\r\n  \r\n  #contact-form input, textarea {\r\n    width: 15rem;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  #submit-btn-container {\r\n    grid-column: 1;\r\n  }\r\n\r\n  #submit-btn {\r\n    font-size: 0.8rem;\r\n    width: 6rem;\r\n    height: 2rem;\r\n  }\r\n\r\n  #confirmation-message {\r\n    font-size: 0.8rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  #error-name,\r\n  #error-email,\r\n  #error-textarea {\r\n    font-size: 0.8rem;\r\n    gap: 0;\r\n    text-align: center;\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 380px) {\r\n  #contact-info-container {\r\n    font-size: 0.6rem;\r\n    grid-column: 1;\r\n    grid-row: 4;\r\n    margin-bottom: 1rem;\r\n    width: 100%;\r\n  }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHdLQUFpRTtBQUM3Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9GQUFvRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxPQUFPLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLHNCQUFzQixhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksV0FBVyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxP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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsR0FBRztBQUN2RDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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YWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvcGFnZS1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9kYW5pZWxlLXNhbHV0YXJpLXJlc3RhdXJhbnQtaG9tZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLXRleHQtY29sb3Itd2hpdGU6ICNmYWZhZmE7XHJcbiAgLS1jb2xvci1ibGFjazogIzAwMDtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLyogSGVhZGVyICovXHJcbiNsb2dvIHtcclxuICB3aWR0aDogMTVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDdyZW07XHJcbn1cclxuXHJcbiNob21lLWJ0bixcclxuI21lbnUtYnRuLFxyXG4jY29udGFjdC1idG4ge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLyogSGFtYnVyZ2VyIG1lbnUgKi9cclxuI2hhbWJ1cmdlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyLWJhciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luOiA1cHggYXV0bztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG59XHJcblxyXG4vKiBNYWluICovXHJcbiNyZXN0YXVyYW50LW5hbWUge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyLjJyZW07XHJcbn1cclxuXHJcbiNyZXN0YXVyYW50LXR5cGUge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbiNob21lLXBhZ2UtZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDNyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XHJcbn1cclxuXHJcbiNob21lLXBhcmFncmFwaCB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDQwJTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcblxyXG4jd29yay1zY2hlZHVsZS1kaXYge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAxMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuI2hvdXJzLWgyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbiNtZW51LWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBnYXA6IDVyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoOCwgOCwgOCwgMC4yKSwgcmdiYSgxMTcsIDEwOSwgMTA5LCAwLjgpKTtcclxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xyXG59XHJcblxyXG4jcHJvZHVjdC1pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1JTtcclxuICB3aWR0aDogMTByZW07XHJcbn1cclxuXHJcbiNwcm9kdWN0LWNhcmQge1xyXG4gIGdhcDogMnJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNwcm9kdWN0LWRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuI3Byb2R1Y3QtcHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jY29udGFjdC1wYWdlLWNvbnRhaW5lciB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gIFwiY29udGFjdC1pbmZvIGNvbnRhY3QtZm9ybVwiXHJcbiAgXCJjb250YWN0LWluZm8gY29udGFjdC1mb3JtXCI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgNWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMWZyO1xyXG4gIGdhcDogNHJlbTtcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jY29udGFjdC11cy10aXRsZSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBncmlkLWFyZWE6IGNvbnRhY3QtZm9ybTtcclxuICBncmlkLXJvdzogMTtcclxufVxyXG5cclxuI2NvbnRhY3QtaW5mby1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHdpZHRoOiAxNXJlbTtcclxuICBoZWlnaHQ6IDE2cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICBncmlkLWFyZWE6IGNvbnRhY3QtaW5mbztcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuI2xvY2F0aW9uLWNvbnRhaW5lciwgXHJcbiNwaG9uZS1udW1iZXItY29udGFpbmVyLFxyXG4jZW1haWwtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuI2NvbnRhY3QtZm9ybS1jb250YWluZXIge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBncmlkLWFyZWE6IGNvbnRhY3QtZm9ybTtcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuI2NvbnRhY3QtZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuI2NvbnRhY3QtZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxOHJlbTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRleHQtaW5kZW50OiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcclxufVxyXG5cclxuI2NvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XHJcbiAgaGVpZ2h0OiAxMHJlbTtcclxuICByZXNpemU6IG5vbmU7ICAgICAvKiBkaXNhYmxlcyB0aGUgcmVzaXppbmcgbWVzc2FnZSBib3ggbWFudWFsbHkgKi8gXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuI3N1Ym1pdC1idG4tY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZ3JpZC1hcmVhOiBjb250YWN0LWZvcm07XHJcbiAgZ3JpZC1yb3c6IDM7XHJcbn1cclxuXHJcbiNzdWJtaXQtYnRuIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB3aWR0aDogMTByZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkMGQwZDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jY29uZmlybWF0aW9uLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBhbmltYXRpb246IGZhZGVJbiAwLjhzO1xyXG59XHJcblxyXG4jZXJyb3ItbmFtZSxcclxuI2Vycm9yLWVtYWlsLFxyXG4jZXJyb3ItdGV4dGFyZWEge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiAvKiBGb290ZXIgKi9cclxuI2Zvb3RlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmxhY2spO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5cclxuI2Zvb3Rlci1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGdhcDogMC4zcmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxufVxyXG5cclxuLmZhLWJyYW5kcyB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4vKiBBbmltYXRpb25zIC0gRWZmZWN0cyAqL1xyXG4jbG9nbzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2hvbWUtYnRuOmhvdmVyLFxyXG4jbWVudS1idG46aG92ZXIsXHJcbiNjb250YWN0LWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IFxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZmEtYnJhbmRzOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNzdWJtaXQtYnRuOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jY29udGFjdC1mb3JtIGlucHV0OmZvY3VzLCAjY29udGFjdC1mb3JtIHRleHRhcmVhOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDJweCAjMGEwYTBhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNZWRpYSBRdWVyaWVzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAjd29yay1zY2hlZHVsZS1kaXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgd2lkdGg6IDI4JTtcclxuICAgIGhlaWdodDogMTFyZW07XHJcbiAgfVxyXG5cclxuICAjbWVudS1kaXYge1xyXG4gICAgZ2FwOiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtaW1nIHtcclxuICAgIHdpZHRoOiA5cmVtO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICAjcHJvZHVjdC1wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcblxyXG4gICNjb250YWN0LXVzLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XHJcbiAgI2xvZ28ge1xyXG4gICAgd2lkdGg6IDEycmVtO1xyXG4gIH1cclxuXHJcbiAgI25hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjgpO1xyXG4gIH1cclxuXHJcbiAgI2hvbWUtYnRuLFxyXG4gICNtZW51LWJ0bixcclxuICAjY29udGFjdC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcblxyXG4gICNuYXYuYWN0aXZlIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAjaGFtYnVyZ2VyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgdG9wOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI2hhbWJ1cmdlci1jb250YWluZXIuYWN0aXZlIC5oYW1idXJnZXItYmFyOm50aC1jaGlsZCgyKSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAjaGFtYnVyZ2VyLWNvbnRhaW5lci5hY3RpdmUgLmhhbWJ1cmdlci1iYXI6bnRoLWNoaWxkKDEpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG5cclxuICAjaGFtYnVyZ2VyLWNvbnRhaW5lci5hY3RpdmUgLmhhbWJ1cmdlci1iYXI6bnRoLWNoaWxkKDMpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSByb3RhdGUoLTQ1ZGVnKTtcclxuICB9XHJcblxyXG4gICNyZXN0YXVyYW50LW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAjcmVzdGF1cmFudC10eXBlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxuXHJcbiAgI2hvbWUtcGFyYWdyYXBoIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gICN3b3JrLXNjaGVkdWxlLWRpdiB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgfVxyXG5cclxuICAjaG91cnMtaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG5cclxuICAjZm9vdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtaW1nIHtcclxuICAgIHdpZHRoOiA4cmVtO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICAjcHJvZHVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMHJlbTtcclxuICB9XHJcblxyXG4gICNwcm9kdWN0LXByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhY3QtdXMtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgfVxyXG5cclxuICAjY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHdpZHRoOiAxMnJlbTtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgfVxyXG5cclxuICAjY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhY3QtZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHRleHQtaW5kZW50OiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdC1idG4tY29udGFpbmVyIHtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgbWFyZ2luLXRvcDogLTJyZW07XHJcbiAgfVxyXG5cclxuICAjc3VibWl0LWJ0biB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB3aWR0aDogOHJlbTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gIH1cclxuXHJcbiAgI2NvbmZpcm1hdGlvbi1tZXNzYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gICNlcnJvci1uYW1lLFxyXG4gICNlcnJvci1lbWFpbCxcclxuICAjZXJyb3ItdGV4dGFyZWEge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgI2xvZ28ge1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgfVxyXG5cclxuICAjbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTsgICAgXHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOCk7XHJcbiAgfVxyXG5cclxuICAjaG9tZS1idG4sXHJcbiAgI21lbnUtYnRuLFxyXG4gICNjb250YWN0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIH1cclxuXHJcbiAgI3Jlc3RhdXJhbnQtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcblxyXG4gICNyZXN0YXVyYW50LXR5cGUge1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgfVxyXG5cclxuICAjaG9tZS1wYXJhZ3JhcGgge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1heC13aWR0aDogNjUlO1xyXG4gIH1cclxuXHJcbiAgI3dvcmstc2NoZWR1bGUtZGl2IHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI2hvdXJzLWgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgI2Zvb3RlciB7XHJcbiAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICB9XHJcblxyXG4gICNwcm9kdWN0LWltZyB7XHJcbiAgICB3aWR0aDogNnJlbTtcclxuICB9XHJcblxyXG4gICNwcm9kdWN0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gICNwcm9kdWN0LWRlc2NyaXB0aW9uIHtcclxuICAgIHdpZHRoOiAxOXJlbTtcclxuICB9XHJcblxyXG4gICNwcm9kdWN0LXByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gICNjb250YWN0LXBhZ2UtY29udGFpbmVyIHtcclxuICAgIGdhcDogMDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICNjb250YWN0LXVzLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhY3QtaW5mby1jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIGdyaWQtcm93OiA0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB3aWR0aDogMTVyZW07XHJcbiAgfVxyXG5cclxuICAjbG9jYXRpb24tY29udGFpbmVyLCBcclxuICAjcGhvbmUtbnVtYmVyLWNvbnRhaW5lcixcclxuICAjZW1haWwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICNjb250YWN0LWZvcm0tY29udGFpbmVyIHtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gIH1cclxuICBcclxuICAjY29udGFjdC1mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTVyZW07XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcblxyXG4gICNzdWJtaXQtYnRuLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICB9XHJcblxyXG4gICNzdWJtaXQtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgd2lkdGg6IDZyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgfVxyXG5cclxuICAjY29uZmlybWF0aW9uLW1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI2Vycm9yLW5hbWUsXHJcbiAgI2Vycm9yLWVtYWlsLFxyXG4gICNlcnJvci10ZXh0YXJlYSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGdhcDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcclxuICAjY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XHJcbiAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7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QUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7OztJQUdFLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS10ZXh0LWNvbG9yLXdoaXRlOiAjZmFmYWZhO1xcclxcbiAgLS1jb2xvci1ibGFjazogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvZGFuaWVsZS1zYWx1dGFyaS1yZXN0YXVyYW50LWhvbWUucG5nKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuI2xvZ28ge1xcclxcbiAgd2lkdGg6IDE1cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDdyZW07XFxyXFxufVxcclxcblxcclxcbiNob21lLWJ0bixcXHJcXG4jbWVudS1idG4sXFxyXFxuI2NvbnRhY3QtYnRuIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIYW1idXJnZXIgbWVudSAqL1xcclxcbiNoYW1idXJnZXItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXItYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiAqL1xcclxcbiNyZXN0YXVyYW50LW5hbWUge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNyZXN0YXVyYW50LXR5cGUge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1wYWdlLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDNyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1wYXJhZ3JhcGgge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWF4LXdpZHRoOiA0MCU7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxyXFxufVxcclxcblxcclxcbiN3b3JrLXNjaGVkdWxlLWRpdiB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBoZWlnaHQ6IDEycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaG91cnMtaDIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNtZW51LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDgsIDgsIDgsIDAuMiksIHJnYmEoMTE3LCAxMDksIDEwOSwgMC44KSk7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1pbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzUlO1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1jYXJkIHtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2R1Y3QtcHJpY2Uge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtcGFnZS1jb250YWluZXIge1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gIFxcXCJjb250YWN0LWluZm8gY29udGFjdC1mb3JtXFxcIlxcclxcbiAgXFxcImNvbnRhY3QtaW5mbyBjb250YWN0LWZvcm1cXFwiO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgNWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAxZnI7XFxyXFxuICBnYXA6IDRyZW07XFxyXFxuICBwYWRkaW5nOiAwIDJyZW07XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LXVzLXRpdGxlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBncmlkLWFyZWE6IGNvbnRhY3QtZm9ybTtcXHJcXG4gIGdyaWQtcm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICB3aWR0aDogMTVyZW07XFxyXFxuICBoZWlnaHQ6IDE2cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcclxcbiAgZ3JpZC1hcmVhOiBjb250YWN0LWluZm87XFxyXFxuICBncmlkLXJvdzogMjtcXHJcXG59XFxyXFxuXFxyXFxuI2xvY2F0aW9uLWNvbnRhaW5lciwgXFxyXFxuI3Bob25lLW51bWJlci1jb250YWluZXIsXFxyXFxuI2VtYWlsLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWZvcm0tY29udGFpbmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIGdyaWQtYXJlYTogY29udGFjdC1mb3JtO1xcclxcbiAgZ3JpZC1yb3c6IDI7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxOHJlbTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtaW5kZW50OiAycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1mb3JtIHRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTByZW07XFxyXFxuICByZXNpemU6IG5vbmU7ICAgICAvKiBkaXNhYmxlcyB0aGUgcmVzaXppbmcgbWVzc2FnZSBib3ggbWFudWFsbHkgKi8gXFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJ0bi1jb250YWluZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZ3JpZC1hcmVhOiBjb250YWN0LWZvcm07XFxyXFxuICBncmlkLXJvdzogMztcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1idG4ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB3aWR0aDogMTByZW07XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkMGQwZDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbmZpcm1hdGlvbi1tZXNzYWdlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC44cztcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yLW5hbWUsXFxyXFxuI2Vycm9yLWVtYWlsLFxcclxcbiNlcnJvci10ZXh0YXJlYSB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuIC8qIEZvb3RlciAqL1xcclxcbiNmb290ZXIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3Rlci1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGdhcDogMC4zcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtYnJhbmRzIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBbmltYXRpb25zIC0gRWZmZWN0cyAqL1xcclxcbiNsb2dvOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWUtYnRuOmhvdmVyLFxcclxcbiNtZW51LWJ0bjpob3ZlcixcXHJcXG4jY29udGFjdC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyBcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtYnJhbmRzOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtZm9ybSBpbnB1dDpmb2N1cywgI2NvbnRhY3QtZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMnB4ICMwYTBhMGE7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBNZWRpYSBRdWVyaWVzICovXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgI3dvcmstc2NoZWR1bGUtZGl2IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIHdpZHRoOiAyOCU7XFxyXFxuICAgIGhlaWdodDogMTFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbWVudS1kaXYge1xcclxcbiAgICBnYXA6IDRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcHJvZHVjdC1pbWcge1xcclxcbiAgICB3aWR0aDogOXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwcm9kdWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcHJvZHVjdC1wcmljZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRhY3QtdXMtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XFxyXFxuICAjbG9nbyB7XFxyXFxuICAgIHdpZHRoOiAxMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNuYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxlZnQ6IC0xMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTsgICAgXFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaG9tZS1idG4sXFxyXFxuICAjbWVudS1idG4sXFxyXFxuICAjY29udGFjdC1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbmF2LmFjdGl2ZSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaGFtYnVyZ2VyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHJpZ2h0OiAxcmVtO1xcclxcbiAgICB0b3A6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaGFtYnVyZ2VyLWNvbnRhaW5lci5hY3RpdmUgLmhhbWJ1cmdlci1iYXI6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI2hhbWJ1cmdlci1jb250YWluZXIuYWN0aXZlIC5oYW1idXJnZXItYmFyOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpIHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaGFtYnVyZ2VyLWNvbnRhaW5lci5hY3RpdmUgLmhhbWJ1cmdlci1iYXI6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Jlc3RhdXJhbnQtbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Jlc3RhdXJhbnQtdHlwZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hvbWUtcGFyYWdyYXBoIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN3b3JrLXNjaGVkdWxlLWRpdiB7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNob3Vycy1oMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Zvb3RlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Byb2R1Y3QtaW1nIHtcXHJcXG4gICAgd2lkdGg6IDhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcHJvZHVjdC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Byb2R1Y3QtZGVzY3JpcHRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMzByZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcHJvZHVjdC1wcmljZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRhY3QtdXMtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICB3aWR0aDogMTJyZW07XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjY29udGFjdC1mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XFxyXFxuICAgIHdpZHRoOiAxNTAlO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICB0ZXh0LWluZGVudDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzdWJtaXQtYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzdWJtaXQtYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB3aWR0aDogOHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29uZmlybWF0aW9uLW1lc3NhZ2Uge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNlcnJvci1uYW1lLFxcclxcbiAgI2Vycm9yLWVtYWlsLFxcclxcbiAgI2Vycm9yLXRleHRhcmVhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gICNsb2dvIHtcXHJcXG4gICAgd2lkdGg6IDhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiAtMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hvbWUtYnRuLFxcclxcbiAgI21lbnUtYnRuLFxcclxcbiAgI2NvbnRhY3QtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Jlc3RhdXJhbnQtbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Jlc3RhdXJhbnQtdHlwZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hvbWUtcGFyYWdyYXBoIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDY1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN3b3JrLXNjaGVkdWxlLWRpdiB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaG91cnMtaDIge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNmb290ZXIge1xcclxcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwcm9kdWN0LWltZyB7XFxyXFxuICAgIHdpZHRoOiA2cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Byb2R1Y3QtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcHJvZHVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxOXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwcm9kdWN0LXByaWNlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRhY3QtcGFnZS1jb250YWluZXIge1xcclxcbiAgICBnYXA6IDA7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29udGFjdC11cy10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250YWN0LWluZm8tY29udGFpbmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICBncmlkLXJvdzogNDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2xvY2F0aW9uLWNvbnRhaW5lciwgXFxyXFxuICAjcGhvbmUtbnVtYmVyLWNvbnRhaW5lcixcXHJcXG4gICNlbWFpbC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250YWN0LWZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNjb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzdWJtaXQtYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3N1Ym1pdC1idG4ge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgd2lkdGg6IDZyZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb25maXJtYXRpb24tbWVzc2FnZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Vycm9yLW5hbWUsXFxyXFxuICAjZXJyb3ItZW1haWwsXFxyXFxuICAjZXJyb3ItdGV4dGFyZWEge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xcclxcbiAgI2NvbnRhY3QtaW5mby1jb250YWluZXIge1xcclxcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgIGdyaWQtcm93OiA0O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZSgpIHtcclxuICAvLyBDcmVhdGUgYSBjb250YWluZXIgZm9yIGFwcGVuZGluZyBhbGwgdGhlIGNvbnRhY3QtcGFnZSBlbGVtZW50cyBvbiBpdFxyXG4gIGNvbnN0IGNvbnRhY3RQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFjdFBhZ2VDb250YWluZXIuaWQgPSAnY29udGFjdC1wYWdlLWNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RVc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBjb250YWN0VXNUaXRsZS5pZCA9ICdjb250YWN0LXVzLXRpdGxlJztcclxuICBjb250YWN0VXNUaXRsZS50ZXh0Q29udGVudCA9ICdTZW5kIHVzIHlvdXIgbWVzc2FnZSc7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHN1Ym1pdEJ0bkNvbnRhaW5lci5pZCA9ICdzdWJtaXQtYnRuLWNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHN1Ym1pdEJ0bi5pZCA9ICdzdWJtaXQtYnRuJztcclxuICBzdWJtaXRCdG4udmFsdWUgPSAnaW5zZXJ0JztcclxuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcclxuXHJcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0Rm9ybSk7XHJcblxyXG4gIHN1Ym1pdEJ0bkNvbnRhaW5lci5hcHBlbmQoc3VibWl0QnRuKTtcclxuICBjb250YWN0UGFnZUNvbnRhaW5lci5hcHBlbmQoY29udGFjdFVzVGl0bGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUZvcm0oKSwgc3VibWl0QnRuQ29udGFpbmVyLGNyZWF0ZUNvbnRhY3RJbmZvKCkpO1xyXG5cclxuICByZXR1cm4gY29udGFjdFBhZ2VDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RJbmZvKCkge1xyXG4gIGNvbnN0IGNvbnRhY3RJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFjdEluZm9Db250YWluZXIuaWQgPSAnY29udGFjdC1pbmZvLWNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbG9jYXRpb25Db250YWluZXIuaWQgPSAnbG9jYXRpb24tY29udGFpbmVyJztcclxuICBjb25zdCBsb2NhdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgbG9jYXRpb25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWxvY2F0aW9uLWRvdCcpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGxvY2F0aW9uLmlkID0gJ2xvY2F0aW9uJztcclxuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9ICdLeW90bywgWWFtYXh4eHggeHh4eCA2MCc7XHJcbiAgXHJcbiAgY29uc3QgcGhvbmVOdW1iZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwaG9uZU51bWJlckNvbnRhaW5lci5pZCA9ICdwaG9uZS1udW1iZXItY29udGFpbmVyJztcclxuICBjb25zdCBwaG9uZU51bWJlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgcGhvbmVOdW1iZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXBob25lJyk7XHJcbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgcGhvbmVOdW1iZXIuaWQgPSAncGhvbmUtbnVtYmVyJztcclxuICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9ICcrODEgNzUgeHh4IHh4eHgnO1xyXG5cclxuICBjb25zdCBlbWFpbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVtYWlsQ29udGFpbmVyLmlkID0gJ2VtYWlsLWNvbnRhaW5lcic7XHJcbiAgY29uc3QgZW1haWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGVtYWlsSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1lbnZlbG9wZScpO1xyXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGVtYWlsLmlkID0gJ2VtYWlsJztcclxuICBlbWFpbC50ZXh0Q29udGVudCA9ICdvLWZfSlBAZ21haWwuY29tJztcclxuICBcclxuICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmQobG9jYXRpb25JY29uLCBsb2NhdGlvbik7XHJcbiAgcGhvbmVOdW1iZXJDb250YWluZXIuYXBwZW5kKHBob25lTnVtYmVySWNvbiwgcGhvbmVOdW1iZXIpO1xyXG4gIGVtYWlsQ29udGFpbmVyLmFwcGVuZChlbWFpbEljb24sIGVtYWlsKTtcclxuXHJcbiAgY29udGFjdEluZm9Db250YWluZXIuYXBwZW5kKGxvY2F0aW9uQ29udGFpbmVyLCBwaG9uZU51bWJlckNvbnRhaW5lciwgZW1haWxDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gY29udGFjdEluZm9Db250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XHJcbiAgY29uc3QgY29udGFjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWN0Rm9ybUNvbnRhaW5lci5pZCA9ICdjb250YWN0LWZvcm0tY29udGFpbmVyJztcclxuXHJcbiAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgY29udGFjdEZvcm0uaWQgPSAnY29udGFjdC1mb3JtJztcclxuICBjb250YWN0Rm9ybS5tZXRob2QgPSAnUE9TVCc7XHJcblxyXG4gIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuYW1lRGl2LmlkID0gJ25hbWUtZGl2JztcclxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIG5hbWVJbnB1dC5pZCA9ICduYW1lLWlucHV0JztcclxuICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBuYW1lSW5wdXQubmFtZSA9ICduYW1lJztcclxuICBuYW1lSW5wdXQuYXV0b2NvbXBsZXRlID0gJ29uJztcclxuICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnTmFtZSc7XHJcbiAgXHJcbiAgY29uc3QgZW1haWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlbWFpbERpdi5pZCA9ICdlbWFpbC1kaXYnO1xyXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGVtYWlsSW5wdXQuaWQgPSAnZW1haWwtaW5wdXQnO1xyXG4gIGVtYWlsSW5wdXQudHlwZSA9ICdlbWFpbCc7XHJcbiAgZW1haWxJbnB1dC5uYW1lID0gJ2VtYWlsJztcclxuICBlbWFpbElucHV0LmF1dG9jb21wbGV0ZSA9ICdvbic7XHJcbiAgZW1haWxJbnB1dC5wbGFjZWhvbGRlciA9ICdFbWFpbCc7XHJcbiAgXHJcbiAgY29uc3QgbWVzc2FnZUJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lc3NhZ2VCb3hEaXYuaWQgPSAnbWVzc2FnZS1ib3gtZGl2JztcclxuICBjb25zdCBtZXNzYWdlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICBtZXNzYWdlQm94LmlkID0gJ21lc3NhZ2UtdGV4dGFyZWEnO1xyXG4gIG1lc3NhZ2VCb3gubmFtZSA9ICdtZXNzYWdlLXRleHQnO1xyXG4gIG1lc3NhZ2VCb3gucGxhY2Vob2xkZXIgPSAnTWVzc2FnZSc7XHJcbiAgXHJcbiAgbmFtZURpdi5hcHBlbmQobmFtZUlucHV0KTtcclxuICBlbWFpbERpdi5hcHBlbmQoZW1haWxJbnB1dCk7XHJcbiAgbWVzc2FnZUJveERpdi5hcHBlbmQobWVzc2FnZUJveCk7XHJcblxyXG4gIGNvbnRhY3RGb3JtLmFwcGVuZChuYW1lRGl2LCBlbWFpbERpdiwgbWVzc2FnZUJveERpdiwgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JOYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwsIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yVGV4dEFyZWEpO1xyXG4gIGNvbnRhY3RGb3JtQ29udGFpbmVyLmFwcGVuZChjb250YWN0Rm9ybSk7XHJcblxyXG4gIHJldHVybiBjb250YWN0Rm9ybUNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0Rm9ybSgpIHtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtaW5wdXQnKS52YWx1ZTtcclxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbC1pbnB1dCcpLnZhbHVlO1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZS10ZXh0YXJlYScpLnZhbHVlO1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cclxuICAvLyBNYWtpbmcgdGhlIHZhbGlkYXRpb24gYmVmb3JlIHN1Ym1pdHRpbmcgdGhlIGZvcm0sIGFuZCBzdG9wcyBpZiBzb21ldGhpbmcgaXMgd3JvbmdcclxuICBpZiAoIXZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlIGRhdGEgdGFrZW4gZnJvbSB0aGUgZm9ybVxyXG4gIGNvbnN0IGZvcm1EYXRhID0ge1xyXG4gICAgbmFtZTogbmFtZSxcclxuICAgIGVtYWlsOiBlbWFpbCxcclxuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgfTtcclxuXHJcbiAgLy8gQ29udmVydCB0aGUgZm9ybURhdGEgb2JqZWN0IGludG8gYSBKU09OIHN0cmluZ1xyXG4gIGNvbnN0IGZvcm1EYXRhSlNPTiA9IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKTtcclxuXHJcbiAgLy8gU3RvcmUgdGhlIEpTT04gZGF0YSBpbiBsb2NhbFN0b3JhZ2VcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybURhdGEnLCBmb3JtRGF0YUpTT04pO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1pbnB1dCcpLnZhbHVlID0gJyc7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsLWlucHV0JykudmFsdWUgPSAnJztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZS10ZXh0YXJlYScpLnZhbHVlID0gJyc7XHJcblxyXG4gIGRpc3BsYXlMb2NhbFN0b3JhZ2VEYXRhKCk7ICAvLyBVcGRhdGUgdGhlIGRpc3BsYXllZCBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxyXG5cclxuICBtYWluLmFwcGVuZChjb25maXJtTWVzc2FnZXMuY29uZmlybWF0aW9uTWVzc2FnZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcclxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1pbnB1dCcpLnZhbHVlO1xyXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwtaW5wdXQnKS52YWx1ZTtcclxuICBjb25zdCBtZXNzYWdlVGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZS10ZXh0YXJlYScpLnZhbHVlO1xyXG4gIGNvbnN0IGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybWF0aW9uLW1lc3NhZ2UnKTtcclxuICBsZXQgaXNGb3JtSW5wdXRWYWxpZCA9IHRydWU7XHJcblxyXG4gIGlmICghbmFtZUlucHV0IHx8IG5hbWVJbnB1dC5sZW5ndGggPCAyKSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvck5hbWUuaW5uZXJIVE1MID0gJ1lvdXIgTmFtZSBpcyB0b28gc2hvcnQsIHBsZWFzZSBnaXZlIGEgdmFsaWQgbmFtZSEnO1xyXG4gICAgaXNGb3JtSW5wdXRWYWxpZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAoIS9eW2EtekEtel0rJC8udGVzdChuYW1lSW5wdXQpICkge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JOYW1lLmlubmVySFRNTCA9ICdQbGVhc2UgZ2l2ZSBhIHZhbGlkIG5hbWUhJztcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gQ2xlYXIgdGhlIGVycm9yIG1lc3NhZ2UgaWYgdGhlIGlucHV0IGlzIHZhbGlkXHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvck5hbWUuaW5uZXJIVE1MID0gJyc7XHJcbiAgfVxyXG5cclxuICBpZiAoIS9eW0EtWmEtejAtOS5fJSstXStAW0EtWmEtejAtOS4tXStcXC5bQS1aYS16XXsyLH0kLy50ZXN0KGVtYWlsSW5wdXQpKSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvckVtYWlsLmlubmVySFRNTCA9ICdQbGVhc2UgZ2l2ZSBhIHZhbGlkIGVtYWlsISc7XHJcbiAgICBpc0Zvcm1JbnB1dFZhbGlkID0gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgfVxyXG5cclxuICBpZiAoIW1lc3NhZ2VUZXh0QXJlYXx8IG1lc3NhZ2VUZXh0QXJlYS5sZW5ndGggPD0gNikge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYS5pbm5lckhUTUwgPSAnWW91ciBNZXNzYWdlIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgaXNGb3JtSW5wdXRWYWxpZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvclRleHRBcmVhLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbmZpcm1hdGlvbk1lc3NhZ2UpIHtcclxuICAgIGNvbmZpcm1NZXNzYWdlcy5jb25maXJtYXRpb25NZXNzYWdlLmlubmVySFRNTCA9ICdZb3UgYXJlIGFscmVhZHkgc3VibWl0dGVkIHRoZSBmb3JtISc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbmZpcm1NZXNzYWdlcy5jb25maXJtYXRpb25NZXNzYWdlLmlubmVySFRNTCA9IGBGb3JtIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkhIDxicj5cclxuICAgIFdlIHdpbGwgY29udGFjdCB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS5gO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gaXNGb3JtSW5wdXRWYWxpZDtcclxufVxyXG5cclxuLy8gSUlGRSAoSW1tZWRpYXRlbHkgSW52b2tlZCBGdW5jdGlvbiBFeHByZXNzaW9uKSBmb3IgZW5jYXBzdWxhdGlvbiBwdXJwb3NlXHJcbmNvbnN0IGVycm9yTWVzc2FnZXMgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGVycm9yVmFsaWRhdGlvbkZvck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZXJyb3JWYWxpZGF0aW9uRm9yTmFtZS5pZCA9ICdlcnJvci1uYW1lJztcclxuXHJcbiAgY29uc3QgZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwuaWQgPSAnZXJyb3ItZW1haWwnO1xyXG5cclxuICBjb25zdCBlcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBlcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYS5pZCA9ICdlcnJvci10ZXh0YXJlYSc7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlcnJvclZhbGlkYXRpb25Gb3JOYW1lLFxyXG4gICAgZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwsXHJcbiAgICBlcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYSxcclxuICB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgY29uZmlybU1lc3NhZ2VzID0gKCgpID0+IHtcclxuICAvLyBTaG93cyBhIGNvbmZpcm1hdGlvbiBtZXNzYWdlIHVwb24gYSBzdWNjZXNzZnVsIHN1Ym1pc3Npb24gb2YgdGhlIGZvcm1cclxuICBjb25zdCBjb25maXJtYXRpb25NZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uZmlybWF0aW9uTWVzc2FnZS5pZCA9ICdjb25maXJtYXRpb24tbWVzc2FnZSc7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb25maXJtYXRpb25NZXNzYWdlXHJcbiAgfVxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUxvY2FsU3RvcmFnZURhdGEoKSB7XHJcbiAgLy8gUmV0cmlldmluZyB0aGUgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBsb2NhbFN0b3JhZ2VEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm1EYXRhJyk7XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2VEYXRhKSB7XHJcbiAgICAvLyBQYXJzaW5nIEpTT04gc3RyaW5nIGludG8gYSBKUyBvYmplY3RcclxuICAgIGNvbnN0IHBhcnNlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZURhdGEpO1xyXG5cclxuICAgIC8vIGxvZ3MgdGhlIHN0b3JlZCBkYXRhIGZyb20gdGhlIGZvcm1cclxuICAgIGNvbnNvbGUubG9nKCdTdG9yZWQgRm9ybSBEYXRhOiAnLCBwYXJzZWREYXRhKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ1RoZXJlIGlzblxcJ3QgYW55IGRhdGEgc3RvcmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlLicpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0UGFnZSgpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuICBpZiAoZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JOYW1lIHx8IGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwgfHwgXHJcbiAgICAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvclRleHRBcmVhKSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvck5hbWUudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yVGV4dEFyZWEudGV4dENvbnRlbnQgPSAnJztcclxuICB9IFxyXG5cclxuICBtYWluLmFwcGVuZChjcmVhdGVDb250YWN0UGFnZSgpKTtcclxufVxyXG5cclxuIiwiIGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IGhvbWVQYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG9tZVBhZ2VEaXYuaWQgPSAnaG9tZS1wYWdlLWRpdic7XHJcblxyXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICByZXN0YXVyYW50TmFtZS5pZCA9ICdyZXN0YXVyYW50LW5hbWUnO1xyXG4gIHJlc3RhdXJhbnROYW1lLmlubmVySFRNTCA9IGBXZWxjb21lIHRvIE9rb25vbWkgRmxhdm9yczxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJyZXN0YXVyYW50LXR5cGVcIj5UcmFkaXRpb25hbCBKYXBhbmVzZSBSZXN0YXVyYW50PC9zcGFuPmA7XHJcblxyXG4gIGNvbnN0IGhvbWVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG9tZVBhcmFncmFwaC5pZCA9ICdob21lLXBhcmFncmFwaCc7XHJcbiAgaG9tZVBhcmFncmFwaC5pbm5lckhUTUwgPSBgXHJcbiAgVGhlIGFydCBvZiBjcmFmdGluZyBtb3V0aHdhdGVyaW5nIG9rb25vbWl5YWtpIGhhcyBcclxuICBiZWVuIG91ciBwYXNzaW9uIGFuZCB0cmFkaXRpb24gc2luY2UgMTkwMC4gXHJcbiAgV2l0aCBvdmVyIGEgY2VudHVyeSBvZiBkZWRpY2F0ZWQgc2VydmljZSwgXHJcbiAgd2UgdGFrZSBpbW1lbnNlIHByaWRlIGluIG91ciBjb21taXRtZW50IHRvIGRlbGl2ZXJpbmcgXHJcbiAgbm90IG9ubHkgdGhlIGZpbmVzdCBmbGF2b3JzIGJ1dCBhbHNvIHRoZSB3YXJtZXN0IGhvc3BpdGFsaXR5IHRvIG91ciBcclxuICBjaGVyaXNoZWQgY3VzdG9tZXJzLiA8YnI+PGJyPlxyXG4gIFxyXG4gIEZvciBnZW5lcmF0aW9ucywgb3VyIGZhbWlseS1vd25lZCBlc3RhYmxpc2htZW50IGhhcyBcclxuICBwZXJmZWN0ZWQgdGhlIGRlbGljYXRlIGJhbGFuY2Ugb2Ygc2F2b3J5IGFuZCBzd2VldCwgY3Jpc3B5IGFuZCB0ZW5kZXIsIFxyXG4gIHRoYXQgZGVmaW5lcyB0aGUgZXNzZW5jZSBvZiBva29ub21peWFraS4gRXZlcnkgZGlzaCB3ZSBjcmVhdGUgaXMgXHJcbiAgYSBsYWJvciBvZiBsb3ZlLCBwYXNzZWQgZG93biB0aHJvdWdoIHRoZSB5ZWFycywgcHJlc2VydmluZyB0aGUgYXV0aGVudGljaXR5IFxyXG4gIGFuZCB0aW1lLWhvbm9yZWQgdGVjaG5pcXVlcyB0aGF0IGhhdmUgbWFkZSB1cyBhIGJlbG92ZWQgY3VsaW5hcnkgZGVzdGluYXRpb24uYDtcclxuXHJcbiAgY29uc3Qgd29ya1NjaGVkdWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd29ya1NjaGVkdWxlRGl2LmlkID0gJ3dvcmstc2NoZWR1bGUtZGl2JztcclxuICBcclxuICBjb25zdCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBob3Vyc1RpdGxlLmlkID0gJ2hvdXJzLWgyJztcclxuICBob3Vyc1RpdGxlLnRleHRDb250ZW50ID0gJ1dvcmtpbmcgSG91cnMnO1xyXG5cclxuICAvLyBUaW1lIFNjaGVkdWxlIGZvciByZXN0YXVyYW50XHJcbiAgY29uc3QgaG91cnNNb25kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNNb25kYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc01vbmRheS50ZXh0Q29udGVudCA9ICdNb25kYXk6IDEwOjAwIC0gMjE6MDAnO1xyXG4gIGNvbnN0IGhvdXJzVHVlc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob3Vyc1R1ZXNkYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc1R1ZXNkYXkudGV4dENvbnRlbnQgPSAnVHVlc2RheTogMTA6MDAgLSAyMTowMCc7XHJcbiAgY29uc3QgaG91cnNXZWRuZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNXZWRuZXNkYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc1dlZG5lc2RheS50ZXh0Q29udGVudCA9ICdXZWRuZXNkYXk6IDEwOjAwIC0gMjE6MDAnO1xyXG4gIGNvbnN0IGhvdXJzVGh1cnNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNUaHVyc2RheS5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIGhvdXJzVGh1cnNkYXkudGV4dENvbnRlbnQgPSAnVGh1cnNkYXk6IDEwOjAwIC0gMjE6MDAnO1xyXG4gIGNvbnN0IGhvdXJzRnJpZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJzRnJpZGF5LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgaG91cnNGcmlkYXkudGV4dENvbnRlbnQgPSAnRnJpZGF5OiAxMDowMCAtIDIxOjAwJztcclxuICBjb25zdCBob3Vyc1NhdHVyZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJzU2F0dXJkYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc1NhdHVyZGF5LnRleHRDb250ZW50ID0gJ1NhdHVyZGF5OiAxMDowMCAtIDE4OjAwJztcclxuXHJcbiAgd29ya1NjaGVkdWxlRGl2LmFwcGVuZChob3Vyc1RpdGxlLCBob3Vyc01vbmRheSwgaG91cnNUdWVzZGF5LCBob3Vyc1dlZG5lc2RheSwgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaG91cnNUaHVyc2RheSwgaG91cnNGcmlkYXksIGhvdXJzU2F0dXJkYXkpO1xyXG4gIGhvbWVQYWdlRGl2LmFwcGVuZChyZXN0YXVyYW50TmFtZSwgaG9tZVBhcmFncmFwaCwgd29ya1NjaGVkdWxlRGl2KTtcclxuICBcclxuICByZXR1cm4gaG9tZVBhZ2VEaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cclxubWFpbi5hcHBlbmQoY3JlYXRlSG9tZVBhZ2UoKSk7XHJcbn1cclxuIiwiaW1wb3J0IGZpcnN0UHJvZHVjdEltYWdlIGZyb20gJy4vYXNzZXRzL2ZpcnN0LXByb2R1Y3QucG5nJztcclxuaW1wb3J0IHNlY29uZFByb2R1Y3RJbWFnZSBmcm9tICcuL2Fzc2V0cy9zZWNvbmQtcHJvZHVjdC5wbmcnO1xyXG5pbXBvcnQgdGhpcmRQcm9kdWN0SW1hZ2UgZnJvbSAnLi9hc3NldHMvdGhpcmQtcHJvZHVjdC5wbmcnO1xyXG5pbXBvcnQgZm91cnRoUHJvZHVjdEltYWdlIGZyb20gJy4vYXNzZXRzL2ZvdXJ0aC1wcm9kdWN0LnBuZyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcclxuICAvLyBDcmVhdGUgYSBjb250YWluZXIgdG8gYXBwZW5kIGFsbCB0aGUgcHJvZHVjdHMgZm9yIHRoZSBtZW51XHJcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lbnVDb250YWluZXIuaWQgPSAnbWVudS1kaXYnO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmFwcGVuZChcclxuICAgIGNyZWF0ZVByb2R1Y3QoXHJcbiAgICAgICdTYW11cmFpIEJhY29uJyxcclxuICAgICAgZmlyc3RQcm9kdWN0SW1hZ2UsXHJcbiAgICAgIGBJbnRyb2R1Y2luZyBvdXIgU2FtdXJhaSBCYWNvbiBPa29ub21peWFraSB3aGVyZSBzYXZvcnkgbWVldHMgc2Vuc2F0aW9uYWwhIDxicj5cclxuICAgICAgRGVsaWdodCBpbiBhIGhhcm1vbmlvdXMgYmxlbmQgb2YgY3Jpc3B5LCBcclxuICAgICAgc21va3kgYmFjb24gYW5kIHRoZSBjbGFzc2ljIEphcGFuZXNlIHBhbmNha2UsIGNvb2tlZCB0byBwZXJmZWN0aW9uLmAsXHJcbiAgICAgICdQcmljZTogNS43MCQnXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICBjcmVhdGVQcm9kdWN0KFxyXG4gICAgICAnRnVqaSBzZW5zYXRpb24nLFxyXG4gICAgICBzZWNvbmRQcm9kdWN0SW1hZ2UsXHJcbiAgICAgIGBCZWhvbGQgdGhlIEZ1amkgU2Vuc2F0aW9uIE9rb25vbWl5YWtpLCBhIGN1bGluYXJ5IG1hc3RlcnBpZWNlIHRoYXQgYXNjZW5kcyBcclxuICAgICAgdG8gbmV3IGhlaWdodHMgb2YgdGFzdGUgYW5kIGRlbGlnaHQhIDxicj5cclxuICAgICAgVGhpcyBleHBsaWNpdCBzZW5zYXRpb24gYm9hc3RzIGEgZm91bmRhdGlvbiBvZiB0ZW5kZXIgY2FiYmFnZSBhbmQgc2F2b3J5IHBvcmsgYmVsbHksIGNyZWF0aW5nIGEgZGVsZWN0YWJsZSBjb250cmFzdCBvZiB0ZXh0dXJlcyBhbmQgZmxhdm9ycy5gLFxyXG4gICAgICAnUHJpY2U6IDcuNTAkJ1xyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kKFxyXG4gICAgY3JlYXRlUHJvZHVjdChcclxuICAgICAgJ05pbmphIHdheScsXHJcbiAgICAgIHRoaXJkUHJvZHVjdEltYWdlLFxyXG4gICAgICBgUHJlcGFyZSB0byBlbWJhcmsgb24gYSBjdWxpbmFyeSBhZHZlbnR1cmUgbGlrZSBubyBvdGhlciB3aXRoIG91ciBOaW5qYSBXYXkgT2tvbm9taXlha2khIDxicj5cclxuICAgICAgVGhpcyBkaXNoIGlzIGNyYWZ0ZWQgd2l0aCBjcmlzcCBzaHJlZGRlZCBjYXJyb3RzIGFuZCBkZWxpY2F0ZSB2ZWdldGFibGVzLCBwcm92aWRpbmcgYSBkZWxpZ2h0ZnVsIGhhcm1vbnkgb2YgdGV4dHVyZXMgYW5kIHRhc3Rlcy5gLFxyXG4gICAgICAnUHJpY2U6IDYuOTAkJ1xyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kKFxyXG4gICAgY3JlYXRlUHJvZHVjdChcclxuICAgICAgJ1NocmltcCBlcnVwdGlvbicsXHJcbiAgICAgIGZvdXJ0aFByb2R1Y3RJbWFnZSxcclxuICAgICAgYFByZXBhcmUgZm9yIGEgZmxhdm9yIGVydXB0aW9uIGxpa2Ugbm8gb3RoZXIgd2l0aCBvdXIgU2hyaW1wIEVydXB0aW9uIE9rb25vbWl5YWtpISA8YnI+XHJcbiAgICAgICBUaGlzIGV4dHJhb3JkaW5hcnkgZGlzaCB0YWtlcyB0aGUgY2xhc3NpYyBKYXBhbmVzZSBwYW5jYWtlIHRvIG5ldyBoZWlnaHRzIGJ5IGZlYXR1cmluZyBhIGdlbmVyb3VzIGVydXB0aW9uIG9mIHN1Y2N1bGVudCBzaHJpbXAsIFxyXG4gICAgICAgY3JlYXRpbmcgYSBkZWxpY2lvdXMgc3ltcGhvbnkgb2YgdGFzdGVzIGFuZCB0ZXh0dXJlcy5gLFxyXG4gICAgICAnUHJpY2U6IDkuNjAkJ1xyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9kdWN0KHByb2R1Y3RUaXRsZSwgcHJvZHVjdEltYWdlUGF0aCwgZGVzY3JpcHRpb24sIHByaWNlKSB7XHJcbiAgY29uc3QgcHJvZHVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwcm9kdWN0Q2FyZC5pZCA9ICdwcm9kdWN0LWNhcmQnO1xyXG5cclxuICBjb25zdCBwcm9kdWN0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBwcm9kdWN0SW1hZ2UuaWQgPSAncHJvZHVjdC1pbWcnO1xyXG4gIHByb2R1Y3RJbWFnZS5zcmMgPSBwcm9kdWN0SW1hZ2VQYXRoO1xyXG4gIHByb2R1Y3RJbWFnZS5hbHQgPSBwcm9kdWN0VGl0bGU7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBwcm9kdWN0TmFtZS5pZCA9ICdwcm9kdWN0LXRpdGxlJztcclxuICBwcm9kdWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2R1Y3RUaXRsZTtcclxuXHJcbiAgY29uc3QgcHJvZHVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHByb2R1Y3REZXNjcmlwdGlvbi5pZCA9ICdwcm9kdWN0LWRlc2NyaXB0aW9uJztcclxuICBwcm9kdWN0RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwcm9kdWN0UHJpY2UuaWQgPSAncHJvZHVjdC1wcmljZSc7XHJcbiAgcHJvZHVjdFByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XHJcblxyXG4gIHByb2R1Y3RDYXJkLmFwcGVuZChwcm9kdWN0SW1hZ2UpO1xyXG4gIHByb2R1Y3RDYXJkLmFwcGVuZChwcm9kdWN0TmFtZSk7XHJcbiAgcHJvZHVjdENhcmQuYXBwZW5kKHByb2R1Y3REZXNjcmlwdGlvbik7XHJcbiAgcHJvZHVjdENhcmQuYXBwZW5kKHByb2R1Y3RQcmljZSk7XHJcblxyXG4gIHJldHVybiBwcm9kdWN0Q2FyZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZW51UGFnZSgpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuXHJcbiAgbWFpbi5hcHBlbmQoY3JlYXRlTWVudVBhZ2UoKSk7XHJcbn0iLCJpbXBvcnQgeyBsb2FkSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IGxvYWRNZW51UGFnZSB9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IHsgbG9hZENvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgaG9tZUJhY2tncm91bmRQaWMgZnJvbSAnLi9hc3NldHMvZGFuaWVsZS1zYWx1dGFyaS1yZXN0YXVyYW50LWhvbWUucG5nJztcclxuaW1wb3J0IGNvbnRhY3RCYWNrZ3JvdW5kUGljIGZyb20gJy4vYXNzZXRzL2NvbnRhY3QtdXMucG5nJztcclxuaW1wb3J0IGxvZ29QaWMgZnJvbSAnLi9hc3NldHMvb2tvbm9taS1sb2dvLnBuZyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XHJcblxyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBsb2dvLmlkID0gJ2xvZ28nO1xyXG4gIGxvZ28uc3JjID0gbG9nb1BpYztcclxuICBsb2dvLmFsdCA9ICdMT0dPJztcclxuXHJcbiAgaGVhZGVyLmFwcGVuZChsb2dvKTtcclxuICBoZWFkZXIuYXBwZW5kKGNyZWF0ZU5hdigpKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIG5hdi5pZCA9ICduYXYnO1xyXG5cclxuICBjb25zdCBob21lTmF2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgaG9tZU5hdkJ0bi5pZCA9ICdob21lLWJ0bic7XHJcbiAgaG9tZU5hdkJ0bi50ZXh0Q29udGVudCA9ICdIT01FJztcclxuXHJcbiAgY29uc3QgbWVudU5hdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIG1lbnVOYXZCdG4uaWQgPSAnbWVudS1idG4nO1xyXG4gIG1lbnVOYXZCdG4udGV4dENvbnRlbnQgPSAnTUVOVSc7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3ROYXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb250YWN0TmF2QnRuLmlkID0gJ2NvbnRhY3QtYnRuJztcclxuICBjb250YWN0TmF2QnRuLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QnO1xyXG5cclxuICAvLyBIYW1idXJnZXIgbWVudSBcclxuICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBoYW1idXJnZXIuaWQgPSAnaGFtYnVyZ2VyLWNvbnRhaW5lcic7XHJcbiAgY29uc3QgZmlyc3RCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZmlyc3RCYXIuY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyLWJhcicpO1xyXG4gIGNvbnN0IHNlY29uZEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBzZWNvbmRCYXIuY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyLWJhcicpO1xyXG4gIGNvbnN0IHRoaXJkQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRoaXJkQmFyLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlci1iYXInKTtcclxuXHJcbiAgbmF2LmFwcGVuZChob21lTmF2QnRuKTtcclxuICBuYXYuYXBwZW5kKG1lbnVOYXZCdG4pO1xyXG4gIG5hdi5hcHBlbmQoY29udGFjdE5hdkJ0bik7XHJcbiAgaGFtYnVyZ2VyLmFwcGVuZChmaXJzdEJhciwgc2Vjb25kQmFyLCB0aGlyZEJhcik7XHJcbiAgbmF2LmFwcGVuZChoYW1idXJnZXIpO1xyXG5cclxuICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWFpbi5pZCA9ICdtYWluJztcclxuXHJcbiAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICBmb290ZXIuaWQgPSAnZm9vdGVyJztcclxuXHJcbiAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZm9vdGVyRGl2LmlkID0gJ2Zvb3Rlci1kaXYnO1xyXG5cclxuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSc7XHJcblxyXG4gIGNvbnN0IGF1dGhvck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgYXV0aG9yTmFtZS50ZXh0Q29udGVudCA9ICdKb3JkYW4gUGFwYWRpdHNhcyc7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICBjb25zdCBnaXRIdWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGdpdEh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vam9yZGFucGFwYWRpdHNhcyc7XHJcblxyXG4gIGNvbnN0IGdpdEh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgZ2l0SHViSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1icmFuZHMnLCAnZmEtZ2l0aHViJyk7XHJcblxyXG4gIGZvb3RlckRpdi5hcHBlbmQoY29weXJpZ2h0LCBhdXRob3JOYW1lLCBjdXJyZW50RGF0ZSwgZ2l0SHViTGluayk7XHJcbiAgZ2l0SHViTGluay5hcHBlbmQoZ2l0SHViSWNvbik7XHJcbiAgZm9vdGVyLmFwcGVuZChmb290ZXJEaXYpO1xyXG5cclxuICByZXR1cm4gZm9vdGVyO1xyXG59XHJcblxyXG4gIC8vIEZ1bmN0aW9uIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBuYXZiYXIgdGFic1xyXG5mdW5jdGlvbiBicm93c2VOYXZUYWJzKCkge1xyXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuICBjb25zdCBob21lQmFja2dyb3VuZEltYWdlID0gaG9tZUJhY2tncm91bmRQaWM7XHJcbiAgY29uc3QgY29udGFjdEJhY2tncm91bmRJbWFnZSA9IGNvbnRhY3RCYWNrZ3JvdW5kUGljO1xyXG5cclxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdob21lLWJ0bicpIHtcclxuICAgICAgICBjbGVhbk1haW4oKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtob21lQmFja2dyb3VuZEltYWdlfSlgO1xyXG4gICAgICAgIGxvYWRIb21lUGFnZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ21lbnUtYnRuJykge1xyXG4gICAgICAgIGNsZWFuTWFpbigpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xyXG4gICAgICAgIGxvYWRNZW51UGFnZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2NvbnRhY3QtYnRuJykge1xyXG4gICAgICAgIGNsZWFuTWFpbigpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NvbnRhY3RCYWNrZ3JvdW5kSW1hZ2V9KWA7XHJcbiAgICAgICAgbG9hZENvbnRhY3RQYWdlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SGFtYnVyZ2VyTWVudSgpIHtcclxuICBjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hhbWJ1cmdlci1jb250YWluZXInKTtcclxuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2Jyk7XHJcblxyXG4gIGhhbWJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBoYW1idXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgbmF2QmFyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhbk1haW4oKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcbiAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICByZXR1cm4gbWFpbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgY29udGVudC5hcHBlbmQoY3JlYXRlTWFpbigpKTtcclxuICBjb250ZW50LmFwcGVuZChjcmVhdGVGb290ZXIoKSk7XHJcbiAgbG9hZEhvbWVQYWdlKCk7XHJcbiAgYnJvd3NlTmF2VGFicygpO1xyXG4gIGRpc3BsYXlIYW1idXJnZXJNZW51KCk7XHJcblxyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBsb2FkUGFnZSB9IGZyb20gJy4vcGFnZS1zdHJ1Y3R1cmUnO1xyXG5pbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XHJcblxyXG5sb2FkUGFnZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=