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
  gap: 0.8rem;
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
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --text-color-white: #fafafa;\r\n  --color-black: #000;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  background-image: url(../assets/daniele-salutari-restaurant-home.png);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n}\r\n\r\n/* Header */\r\n#logo {\r\n  width: 15rem;\r\n  transition: all 0.8s ease-in-out;\r\n}\r\n\r\n#header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n  max-width: 100%;\r\n  height: 7rem;\r\n}\r\n\r\n#home-btn,\r\n#menu-btn,\r\n#contact-btn {\r\n  color: var(--text-color-white);\r\n  background-color: var(--color-black);\r\n  font-size: 0.9rem;\r\n  margin-right: 5rem;\r\n  border: none;\r\n}\r\n\r\n/* Hamburger menu */\r\n#hamburger-container {\r\n  display: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.hamburger-bar {\r\n  display: block;\r\n  width: 25px;\r\n  height: 3px;\r\n  margin: 5px auto;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n  background-color: var(--text-color-white);\r\n}\r\n\r\n/* Main */\r\n#restaurant-name {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n#restaurant-type {\r\n  font-size: 1.1rem;\r\n  font-weight: normal;\r\n}\r\n\r\n#home-page-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 3rem;\r\n  color: var(--text-color-white);\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n#home-paragraph {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  max-width: 40%;\r\n  font-size: 1.3rem;\r\n  margin-top: 3rem;\r\n}\r\n\r\n#work-schedule-div {\r\n  border: 2px solid var(--text-color-white);\r\n  width: 30%;\r\n  height: 12rem;\r\n  text-align: center;\r\n  margin-top: 5rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#hours-h2 {\r\n  text-decoration: underline;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n#menu-div {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  gap: 5rem;\r\n  background: linear-gradient(rgba(8, 8, 8, 0.2), rgba(117, 109, 109, 0.8));\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n#product-img {\r\n  border-radius: 35%;\r\n  width: 10rem;\r\n}\r\n\r\n#product-card {\r\n  gap: 2rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#product-description {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n#product-price {\r\n  font-size: 1.4rem;\r\n  font-weight: bold;\r\n}\r\n\r\n#contact-page-container {\r\n  animation: fadeIn 1.5s;\r\n  display: grid;\r\n  grid-template-areas: \r\n  \"contact-info contact-form\"\r\n  \"contact-info contact-form\";\r\n  grid-template-columns: 3fr 5fr 1fr;\r\n  grid-template-rows: 1fr 4fr 1fr;\r\n  gap: 4rem;\r\n  padding: 0 2rem;\r\n  justify-items: center;\r\n}\r\n\r\n#contact-us-title {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  margin-bottom: 1rem;\r\n  font-size: 3rem;\r\n  grid-area: contact-form;\r\n  grid-row: 1;\r\n}\r\n\r\n#contact-info-container {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  background-color: rgb(0, 0, 0, 0.7);\r\n  color: var(--text-color-white);\r\n  width: 15rem;\r\n  height: 16rem;\r\n  border-radius: 0.4rem;\r\n  grid-area: contact-info;\r\n  grid-row: 2;\r\n}\r\n\r\n#location-container, \r\n#phone-number-container,\r\n#email-container {\r\n  display: flex;\r\n  gap: 1rem;\r\n  margin-left: 1rem;\r\n}\r\n\r\n#contact-form-container {\r\n  color: var(--text-color-white);\r\n  grid-area: contact-form;\r\n  grid-row: 2;\r\n}\r\n\r\n#contact-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.8rem;\r\n}\r\n\r\n#contact-form input, textarea {\r\n  width: 18rem;\r\n  height: 3rem;\r\n  font-size: 1rem;\r\n  text-indent: 2rem;\r\n  border-radius: 0.7rem;\r\n}\r\n\r\n#contact-form textarea {\r\n  height: 10rem;\r\n  resize: none;     /* disables the resizing message box manually */ \r\n  letter-spacing: 1px;\r\n}\r\n\r\n#submit-btn-container {\r\n  text-align: center;\r\n  grid-area: contact-form;\r\n  grid-row: 3;\r\n}\r\n\r\n#submit-btn {\r\n  font-size: 1.2rem;\r\n  width: 10rem;\r\n  height: 3rem;\r\n  border-radius: 2rem;\r\n  background-color: #8d0d0d;\r\n  color: var(--text-color-white);\r\n  border: none;\r\n  margin-top: 2rem;\r\n  transition: all 0.3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n#confirmation-message {\r\n  color: var(--text-color-white);\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  font-size: 1.5rem;\r\n  animation: fadeIn 0.8s;\r\n}\r\n\r\n#error-name,\r\n#error-email,\r\n#error-textarea {\r\n  font-size: 1.3rem;\r\n  color: red;\r\n  font-weight: bold;\r\n}\r\n\r\n /* Footer */\r\n#footer {\r\n  border: 1px solid var(--color-black);\r\n  background-color: var(--color-black);\r\n  color: var(--text-color-white);\r\n  margin-top: auto;\r\n}\r\n\r\n#footer-div {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  height: 50px;\r\n  gap: 0.3rem;\r\n  color: var(--text-color-white);\r\n}\r\n\r\n.fa-brands {\r\n  color: var(--text-color-white);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n/* Animations - Effects */\r\n#logo:hover {\r\n  transform: rotate(360deg);\r\n  transition: all 0.8s ease-in-out;\r\n}\r\n\r\n#home-btn:hover,\r\n#menu-btn:hover,\r\n#contact-btn:hover {\r\n  background-color: var(--text-color-white);\r\n  color: var(--color-black);\r\n  transform: scale(1.2); \r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.fa-brands:hover {\r\n  transform: scale(1.4);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n#submit-btn:hover {\r\n  color: var(--color-black);\r\n  background-color: var(--text-color-white);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n#contact-form input:focus, #contact-form textarea:focus {\r\n  outline: none;\r\n  box-shadow: 1px 2px 2px 2px #0a0a0a;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Media Queries */\r\n@media (max-width: 1200px) {\r\n  #work-schedule-div {\r\n    margin-bottom: 1rem;\r\n    font-size: 1.1rem;\r\n    width: 28%;\r\n    height: 11rem;\r\n  }\r\n\r\n  #menu-div {\r\n    gap: 4rem;\r\n  }\r\n\r\n  #product-img {\r\n    width: 9rem;\r\n  }\r\n\r\n  #product-description {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #product-price {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  #contact-us-title {\r\n    font-size: 2.5rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 660px) {\r\n  #logo {\r\n    width: 12rem;\r\n  }\r\n\r\n  #nav {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    position: fixed;\r\n    left: -100%;\r\n    width: 100%;    \r\n    transition: 0.3s;\r\n    gap: 1rem;\r\n    background-color: rgb(0, 0, 0, 0.8);\r\n  }\r\n\r\n  #home-btn,\r\n  #menu-btn,\r\n  #contact-btn {\r\n    background-color: transparent;\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  #nav.active {\r\n    left: 0;\r\n  }\r\n\r\n  #hamburger-container {\r\n    display: block;\r\n    position: fixed;\r\n    right: 1rem;\r\n    top: 1rem;\r\n  }\r\n\r\n  #hamburger-container.active .hamburger-bar:nth-child(2) {\r\n    opacity: 0;\r\n  }\r\n  \r\n  #hamburger-container.active .hamburger-bar:nth-child(1) {\r\n    transform: translateY(8px) rotate(45deg);\r\n  }\r\n\r\n  #hamburger-container.active .hamburger-bar:nth-child(3) {\r\n    transform: translateY(-8px) rotate(-45deg);\r\n  }\r\n\r\n  #restaurant-name {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  #restaurant-type {\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  #home-paragraph {\r\n    font-size: 1rem;\r\n    margin-top: 1rem;\r\n    max-width: 50%;\r\n  }\r\n\r\n  #work-schedule-div {\r\n    width: 40%;\r\n    margin-bottom: 1rem;\r\n    font-size: 1rem;\r\n    height: 10rem;\r\n  }\r\n\r\n  #hours-h2 {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  #footer {\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  #product-img {\r\n    width: 8rem;\r\n  }\r\n\r\n  #product-title {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #product-description {\r\n    font-size: 0.9rem;\r\n    text-align: center;\r\n    width: 30rem;\r\n  }\r\n\r\n  #product-price {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #contact-us-title {\r\n    font-size: 1.5rem;\r\n    grid-column: 2;\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  #contact-info-container {\r\n    font-size: 0.8rem;\r\n    width: 12rem;\r\n    height: 10rem;\r\n  }\r\n\r\n  #contact-form-container {\r\n    grid-column: 2;\r\n  }\r\n  \r\n  #contact-form input, textarea {\r\n    width: 150%;\r\n    height: 3rem;\r\n    font-size: 0.8rem;\r\n    text-indent: 1rem;\r\n  }\r\n\r\n  #submit-btn-container {\r\n    grid-column: 2;\r\n    margin-top: -2rem;\r\n  }\r\n\r\n  #submit-btn {\r\n    font-size: 1rem;\r\n    width: 8rem;\r\n    height: 2.5rem;\r\n  }\r\n\r\n  #confirmation-message {\r\n    font-size: 1.1rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  #error-name,\r\n  #error-email,\r\n  #error-textarea {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  #logo {\r\n    width: 8rem;\r\n  }\r\n\r\n  #nav {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    position: fixed;\r\n    left: -100%;\r\n    width: 100%;    \r\n    transition: 0.3s;\r\n    gap: 1rem;\r\n    background-color: rgb(0, 0, 0, 0.8);\r\n  }\r\n\r\n  #home-btn,\r\n  #menu-btn,\r\n  #contact-btn {\r\n    background-color: transparent;\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  #restaurant-name {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  #restaurant-type {\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  #home-paragraph {\r\n    font-size: 1rem;\r\n    margin-top: 1rem;\r\n    max-width: 65%;\r\n  }\r\n\r\n  #work-schedule-div {\r\n    width: 60%;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  #hours-h2 {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #footer {\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  #product-img {\r\n    width: 6rem;\r\n  }\r\n\r\n  #product-title {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #product-description {\r\n    width: 19rem;\r\n  }\r\n\r\n  #product-price {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #contact-page-container {\r\n    gap: 0;\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: 1fr;\r\n    width: 100%;\r\n  }\r\n\r\n  #contact-us-title {\r\n    font-size: 1.3rem;\r\n    grid-column: 1;\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  #contact-info-container {\r\n    font-size: 0.6rem;\r\n    grid-column: 1;\r\n    grid-row: 4;\r\n    margin-bottom: 1rem;\r\n    margin-top: 1rem;\r\n    width: 15rem;\r\n  }\r\n\r\n  #location-container, \r\n  #phone-number-container,\r\n  #email-container {\r\n    display: flex;\r\n    width: 100%;\r\n  }\r\n\r\n  #contact-form-container {\r\n    grid-column: 1;\r\n  }\r\n  \r\n  #contact-form input, textarea {\r\n    width: 15rem;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  #submit-btn-container {\r\n    grid-column: 1;\r\n    grid-row: 3;\r\n    margin-top: -2rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  #submit-btn {\r\n    font-size: 0.8rem;\r\n    width: 6rem;\r\n    height: 2rem;\r\n  }\r\n\r\n  #confirmation-message {\r\n    font-size: 0.8rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  #error-name,\r\n  #error-email,\r\n  #error-textarea {\r\n    font-size: 0.8rem;\r\n    text-align: center;\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 380px) {\r\n  #contact-info-container {\r\n    font-size: 0.6rem;\r\n    grid-column: 1;\r\n    grid-row: 4;\r\n    margin-bottom: 1rem;\r\n    width: 100%;\r\n  }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHdLQUFpRTtBQUM3Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvRkFBb0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sT0FBTyxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxPQUFPLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxzQkFBc0IsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxX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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsR0FBRztBQUN2RDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QjtBQUN6QjtBQUNBLHlEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvcGFnZS1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9kYW5pZWxlLXNhbHV0YXJpLXJlc3RhdXJhbnQtaG9tZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLXRleHQtY29sb3Itd2hpdGU6ICNmYWZhZmE7XHJcbiAgLS1jb2xvci1ibGFjazogIzAwMDtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLyogSGVhZGVyICovXHJcbiNsb2dvIHtcclxuICB3aWR0aDogMTVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDdyZW07XHJcbn1cclxuXHJcbiNob21lLWJ0bixcclxuI21lbnUtYnRuLFxyXG4jY29udGFjdC1idG4ge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLyogSGFtYnVyZ2VyIG1lbnUgKi9cclxuI2hhbWJ1cmdlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyLWJhciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luOiA1cHggYXV0bztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG59XHJcblxyXG4vKiBNYWluICovXHJcbiNyZXN0YXVyYW50LW5hbWUge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyLjJyZW07XHJcbn1cclxuXHJcbiNyZXN0YXVyYW50LXR5cGUge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbiNob21lLXBhZ2UtZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDNyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XHJcbn1cclxuXHJcbiNob21lLXBhcmFncmFwaCB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDQwJTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcblxyXG4jd29yay1zY2hlZHVsZS1kaXYge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAxMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuI2hvdXJzLWgyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbiNtZW51LWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBnYXA6IDVyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoOCwgOCwgOCwgMC4yKSwgcmdiYSgxMTcsIDEwOSwgMTA5LCAwLjgpKTtcclxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xyXG59XHJcblxyXG4jcHJvZHVjdC1pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1JTtcclxuICB3aWR0aDogMTByZW07XHJcbn1cclxuXHJcbiNwcm9kdWN0LWNhcmQge1xyXG4gIGdhcDogMnJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNwcm9kdWN0LWRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuI3Byb2R1Y3QtcHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jY29udGFjdC1wYWdlLWNvbnRhaW5lciB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gIFwiY29udGFjdC1pbmZvIGNvbnRhY3QtZm9ybVwiXHJcbiAgXCJjb250YWN0LWluZm8gY29udGFjdC1mb3JtXCI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgNWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMWZyO1xyXG4gIGdhcDogNHJlbTtcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jY29udGFjdC11cy10aXRsZSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBncmlkLWFyZWE6IGNvbnRhY3QtZm9ybTtcclxuICBncmlkLXJvdzogMTtcclxufVxyXG5cclxuI2NvbnRhY3QtaW5mby1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHdpZHRoOiAxNXJlbTtcclxuICBoZWlnaHQ6IDE2cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICBncmlkLWFyZWE6IGNvbnRhY3QtaW5mbztcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuI2xvY2F0aW9uLWNvbnRhaW5lciwgXHJcbiNwaG9uZS1udW1iZXItY29udGFpbmVyLFxyXG4jZW1haWwtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuI2NvbnRhY3QtZm9ybS1jb250YWluZXIge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBncmlkLWFyZWE6IGNvbnRhY3QtZm9ybTtcclxuICBncmlkLXJvdzogMjtcclxufVxyXG5cclxuI2NvbnRhY3QtZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC44cmVtO1xyXG59XHJcblxyXG4jY29udGFjdC1mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDE4cmVtO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdGV4dC1pbmRlbnQ6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG59XHJcblxyXG4jY29udGFjdC1mb3JtIHRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG4gIHJlc2l6ZTogbm9uZTsgICAgIC8qIGRpc2FibGVzIHRoZSByZXNpemluZyBtZXNzYWdlIGJveCBtYW51YWxseSAqLyBcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4jc3VibWl0LWJ0bi1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBncmlkLWFyZWE6IGNvbnRhY3QtZm9ybTtcclxuICBncmlkLXJvdzogMztcclxufVxyXG5cclxuI3N1Ym1pdC1idG4ge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGQwZDBkO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNjb25maXJtYXRpb24tbWVzc2FnZSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuOHM7XHJcbn1cclxuXHJcbiNlcnJvci1uYW1lLFxyXG4jZXJyb3ItZW1haWwsXHJcbiNlcnJvci10ZXh0YXJlYSB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuIC8qIEZvb3RlciAqL1xyXG4jZm9vdGVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ibGFjayk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4jZm9vdGVyLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZ2FwOiAwLjNyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG59XHJcblxyXG4uZmEtYnJhbmRzIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbnMgLSBFZmZlY3RzICovXHJcbiNsb2dvOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jaG9tZS1idG46aG92ZXIsXHJcbiNtZW51LWJ0bjpob3ZlcixcclxuI2NvbnRhY3QtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgXHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5mYS1icmFuZHM6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI3N1Ym1pdC1idG46aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNjb250YWN0LWZvcm0gaW5wdXQ6Zm9jdXMsICNjb250YWN0LWZvcm0gdGV4dGFyZWE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMnB4ICMwYTBhMGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGlhIFF1ZXJpZXMgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICN3b3JrLXNjaGVkdWxlLWRpdiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgaGVpZ2h0OiAxMXJlbTtcclxuICB9XHJcblxyXG4gICNtZW51LWRpdiB7XHJcbiAgICBnYXA6IDRyZW07XHJcbiAgfVxyXG5cclxuICAjcHJvZHVjdC1pbWcge1xyXG4gICAgd2lkdGg6IDlyZW07XHJcbiAgfVxyXG5cclxuICAjcHJvZHVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gICNwcm9kdWN0LXByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhY3QtdXMtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcclxuICAjbG9nbyB7XHJcbiAgICB3aWR0aDogMTJyZW07XHJcbiAgfVxyXG5cclxuICAjbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTsgICAgXHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOCk7XHJcbiAgfVxyXG5cclxuICAjaG9tZS1idG4sXHJcbiAgI21lbnUtYnRuLFxyXG4gICNjb250YWN0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxuXHJcbiAgI25hdi5hY3RpdmUge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gICNoYW1idXJnZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDFyZW07XHJcbiAgICB0b3A6IDFyZW07XHJcbiAgfVxyXG5cclxuICAjaGFtYnVyZ2VyLWNvbnRhaW5lci5hY3RpdmUgLmhhbWJ1cmdlci1iYXI6bnRoLWNoaWxkKDIpIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNoYW1idXJnZXItY29udGFpbmVyLmFjdGl2ZSAuaGFtYnVyZ2VyLWJhcjpudGgtY2hpbGQoMSkge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCkgcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcblxyXG4gICNoYW1idXJnZXItY29udGFpbmVyLmFjdGl2ZSAuaGFtYnVyZ2VyLWJhcjpudGgtY2hpbGQoMykge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gIH1cclxuXHJcbiAgI3Jlc3RhdXJhbnQtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gICNyZXN0YXVyYW50LXR5cGUge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG5cclxuICAjaG9tZS1wYXJhZ3JhcGgge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgI3dvcmstc2NoZWR1bGUtZGl2IHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxuICB9XHJcblxyXG4gICNob3Vycy1oMiB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcblxyXG4gICNmb290ZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgfVxyXG5cclxuICAjcHJvZHVjdC1pbWcge1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgfVxyXG5cclxuICAjcHJvZHVjdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gICNwcm9kdWN0LWRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwcmVtO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICAjY29udGFjdC11cy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB9XHJcblxyXG4gICNjb250YWN0LWluZm8tY29udGFpbmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgd2lkdGg6IDEycmVtO1xyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxuICB9XHJcblxyXG4gICNjb250YWN0LWZvcm0tY29udGFpbmVyIHtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gIH1cclxuICBcclxuICAjY29udGFjdC1mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDFyZW07XHJcbiAgfVxyXG5cclxuICAjc3VibWl0LWJ0bi1jb250YWluZXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcclxuICB9XHJcblxyXG4gICNzdWJtaXQtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgfVxyXG5cclxuICAjY29uZmlybWF0aW9uLW1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI2Vycm9yLW5hbWUsXHJcbiAgI2Vycm9yLWVtYWlsLFxyXG4gICNlcnJvci10ZXh0YXJlYSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAjbG9nbyB7XHJcbiAgICB3aWR0aDogOHJlbTtcclxuICB9XHJcblxyXG4gICNuYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlOyAgICBcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC44KTtcclxuICB9XHJcblxyXG4gICNob21lLWJ0bixcclxuICAjbWVudS1idG4sXHJcbiAgI2NvbnRhY3QtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgfVxyXG5cclxuICAjcmVzdGF1cmFudC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIH1cclxuXHJcbiAgI3Jlc3RhdXJhbnQtdHlwZSB7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcblxyXG4gICNob21lLXBhcmFncmFwaCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA2NSU7XHJcbiAgfVxyXG5cclxuICAjd29yay1zY2hlZHVsZS1kaXYge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAjaG91cnMtaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICAjZm9vdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtaW1nIHtcclxuICAgIHdpZHRoOiA2cmVtO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDE5cmVtO1xyXG4gIH1cclxuXHJcbiAgI3Byb2R1Y3QtcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhY3QtcGFnZS1jb250YWluZXIge1xyXG4gICAgZ2FwOiAwO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhY3QtdXMtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgfVxyXG5cclxuICAjY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XHJcbiAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHdpZHRoOiAxNXJlbTtcclxuICB9XHJcblxyXG4gICNsb2NhdGlvbi1jb250YWluZXIsIFxyXG4gICNwaG9uZS1udW1iZXItY29udGFpbmVyLFxyXG4gICNlbWFpbC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhY3QtZm9ybS1jb250YWluZXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIH1cclxuXHJcbiAgI3N1Ym1pdC1idG4tY29udGFpbmVyIHtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDM7XHJcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAjc3VibWl0LWJ0biB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gIH1cclxuXHJcbiAgI2NvbmZpcm1hdGlvbi1tZXNzYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gICNlcnJvci1uYW1lLFxyXG4gICNlcnJvci1lbWFpbCxcclxuICAjZXJyb3ItdGV4dGFyZWEge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgI2NvbnRhY3QtaW5mby1jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIGdyaWQtcm93OiA0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseURBQXFFO0VBQ3JFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBLFdBQVc7QUFDWDtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix3Q0FBd0M7RUFDeEMsZ0NBQWdDO0VBQ2hDLHlDQUF5QztBQUMzQzs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QseUVBQXlFO0VBQ3pFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiOzs2QkFFMkI7RUFDM0Isa0NBQWtDO0VBQ2xDLCtCQUErQjtFQUMvQixTQUFTO0VBQ1QsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG1DQUFtQztFQUNuQyw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZLE1BQU0sK0NBQStDO0VBQ2pFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7Q0FFQyxXQUFXO0FBQ1o7RUFDRSxvQ0FBb0M7RUFDcEMsb0NBQW9DO0VBQ3BDLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZ0NBQWdDO0FBQ2xDOztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUE7OztFQUdFLHlDQUF5QztFQUN6Qyx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUNBQXlDO0VBQ3pDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsbUNBQW1DO0VBQ3JDOztFQUVBOzs7SUFHRSw2QkFBNkI7SUFDN0IsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsT0FBTztFQUNUOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztFQUNYOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0Usd0NBQXdDO0VBQzFDOztFQUVBO0lBQ0UsMENBQTBDO0VBQzVDOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBOzs7SUFHRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxtQ0FBbUM7RUFDckM7O0VBRUE7OztJQUdFLDZCQUE2QjtJQUM3QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxNQUFNO0lBQ04sdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBOzs7SUFHRSxhQUFhO0lBQ2IsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7OztJQUdFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXRleHQtY29sb3Itd2hpdGU6ICNmYWZhZmE7XFxyXFxuICAtLWNvbG9yLWJsYWNrOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9kYW5pZWxlLXNhbHV0YXJpLXJlc3RhdXJhbnQtaG9tZS5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgKi9cXHJcXG4jbG9nbyB7XFxyXFxuICB3aWR0aDogMTVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWUtYnRuLFxcclxcbiNtZW51LWJ0bixcXHJcXG4jY29udGFjdC1idG4ge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEhhbWJ1cmdlciBtZW51ICovXFxyXFxuI2hhbWJ1cmdlci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci1iYXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogM3B4O1xcclxcbiAgbWFyZ2luOiA1cHggYXV0bztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluICovXFxyXFxuI3Jlc3RhdXJhbnQtbmFtZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc3RhdXJhbnQtdHlwZSB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbiNob21lLXBhZ2UtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxyXFxufVxcclxcblxcclxcbiNob21lLXBhcmFncmFwaCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXgtd2lkdGg6IDQwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3dvcmstc2NoZWR1bGUtZGl2IHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGhlaWdodDogMTJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNob3Vycy1oMiB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZ2FwOiA1cmVtO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoOCwgOCwgOCwgMC4yKSwgcmdiYSgxMTcsIDEwOSwgMTA5LCAwLjgpKTtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxyXFxufVxcclxcblxcclxcbiNwcm9kdWN0LWltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzNSU7XFxyXFxuICB3aWR0aDogMTByZW07XFxyXFxufVxcclxcblxcclxcbiNwcm9kdWN0LWNhcmQge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNwcm9kdWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1wcmljZSB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1wYWdlLWNvbnRhaW5lciB7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgXFxcImNvbnRhY3QtaW5mbyBjb250YWN0LWZvcm1cXFwiXFxyXFxuICBcXFwiY29udGFjdC1pbmZvIGNvbnRhY3QtZm9ybVxcXCI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA1ZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDFmcjtcXHJcXG4gIGdhcDogNHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtdXMtdGl0bGUge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGdyaWQtYXJlYTogY29udGFjdC1mb3JtO1xcclxcbiAgZ3JpZC1yb3c6IDE7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWluZm8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIHdpZHRoOiAxNXJlbTtcXHJcXG4gIGhlaWdodDogMTZyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxyXFxuICBncmlkLWFyZWE6IGNvbnRhY3QtaW5mbztcXHJcXG4gIGdyaWQtcm93OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9jYXRpb24tY29udGFpbmVyLCBcXHJcXG4jcGhvbmUtbnVtYmVyLWNvbnRhaW5lcixcXHJcXG4jZW1haWwtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtZm9ybS1jb250YWluZXIge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgZ3JpZC1hcmVhOiBjb250YWN0LWZvcm07XFxyXFxuICBncmlkLXJvdzogMjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogMThyZW07XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWluZGVudDogMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgcmVzaXplOiBub25lOyAgICAgLyogZGlzYWJsZXMgdGhlIHJlc2l6aW5nIG1lc3NhZ2UgYm94IG1hbnVhbGx5ICovIFxcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1idG4tY29udGFpbmVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdyaWQtYXJlYTogY29udGFjdC1mb3JtO1xcclxcbiAgZ3JpZC1yb3c6IDM7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZDBkMGQ7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb25maXJtYXRpb24tbWVzc2FnZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuOHM7XFxyXFxufVxcclxcblxcclxcbiNlcnJvci1uYW1lLFxcclxcbiNlcnJvci1lbWFpbCxcXHJcXG4jZXJyb3ItdGV4dGFyZWEge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiAvKiBGb290ZXIgKi9cXHJcXG4jZm9vdGVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNmb290ZXItZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBnYXA6IDAuM3JlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWJyYW5kcyB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQW5pbWF0aW9ucyAtIEVmZmVjdHMgKi9cXHJcXG4jbG9nbzpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNob21lLWJ0bjpob3ZlcixcXHJcXG4jbWVudS1idG46aG92ZXIsXFxyXFxuI2NvbnRhY3QtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgXFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWJyYW5kczpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1idG46aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWZvcm0gaW5wdXQ6Zm9jdXMsICNjb250YWN0LWZvcm0gdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDJweCAjMGEwYTBhO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTWVkaWEgUXVlcmllcyAqL1xcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICN3b3JrLXNjaGVkdWxlLWRpdiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICB3aWR0aDogMjglO1xcclxcbiAgICBoZWlnaHQ6IDExcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI21lbnUtZGl2IHtcXHJcXG4gICAgZ2FwOiA0cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Byb2R1Y3QtaW1nIHtcXHJcXG4gICAgd2lkdGg6IDlyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcHJvZHVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Byb2R1Y3QtcHJpY2Uge1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250YWN0LXVzLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xcclxcbiAgI2xvZ28ge1xcclxcbiAgICB3aWR0aDogMTJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiAtMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hvbWUtYnRuLFxcclxcbiAgI21lbnUtYnRuLFxcclxcbiAgI2NvbnRhY3QtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI25hdi5hY3RpdmUge1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hhbWJ1cmdlci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICByaWdodDogMXJlbTtcXHJcXG4gICAgdG9wOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hhbWJ1cmdlci1jb250YWluZXIuYWN0aXZlIC5oYW1idXJnZXItYmFyOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNoYW1idXJnZXItY29udGFpbmVyLmFjdGl2ZSAuaGFtYnVyZ2VyLWJhcjpudGgtY2hpbGQoMSkge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KSByb3RhdGUoNDVkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hhbWJ1cmdlci1jb250YWluZXIuYWN0aXZlIC5oYW1idXJnZXItYmFyOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNyZXN0YXVyYW50LW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNyZXN0YXVyYW50LXR5cGUge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNob21lLXBhcmFncmFwaCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjd29yay1zY2hlZHVsZS1kaXYge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaG91cnMtaDIge1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNmb290ZXIge1xcclxcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwcm9kdWN0LWltZyB7XFxyXFxuICAgIHdpZHRoOiA4cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Byb2R1Y3QtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwcm9kdWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDMwcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Byb2R1Y3QtcHJpY2Uge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250YWN0LXVzLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRhY3QtaW5mby1jb250YWluZXIge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgd2lkdGg6IDEycmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRhY3QtZm9ybS1jb250YWluZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI2NvbnRhY3QtZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICB3aWR0aDogMTUwJTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgdGV4dC1pbmRlbnQ6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc3VibWl0LWJ0bi1jb250YWluZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc3VibWl0LWJ0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDhyZW07XFxyXFxuICAgIGhlaWdodDogMi41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbmZpcm1hdGlvbi1tZXNzYWdlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZXJyb3ItbmFtZSxcXHJcXG4gICNlcnJvci1lbWFpbCxcXHJcXG4gICNlcnJvci10ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAjbG9nbyB7XFxyXFxuICAgIHdpZHRoOiA4cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI25hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGVmdDogLTEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAgICBcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC44KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNob21lLWJ0bixcXHJcXG4gICNtZW51LWJ0bixcXHJcXG4gICNjb250YWN0LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNyZXN0YXVyYW50LW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNyZXN0YXVyYW50LXR5cGUge1xcclxcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNob21lLXBhcmFncmFwaCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiA2NSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjd29yay1zY2hlZHVsZS1kaXYge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hvdXJzLWgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZm9vdGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcHJvZHVjdC1pbWcge1xcclxcbiAgICB3aWR0aDogNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwcm9kdWN0LXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Byb2R1Y3QtZGVzY3JpcHRpb24ge1xcclxcbiAgICB3aWR0aDogMTlyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcHJvZHVjdC1wcmljZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250YWN0LXBhZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRhY3QtdXMtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcclxcbiAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgZ3JpZC1yb3c6IDQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIHdpZHRoOiAxNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNsb2NhdGlvbi1jb250YWluZXIsIFxcclxcbiAgI3Bob25lLW51bWJlci1jb250YWluZXIsXFxyXFxuICAjZW1haWwtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjY29udGFjdC1mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XFxyXFxuICAgIHdpZHRoOiAxNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc3VibWl0LWJ0bi1jb250YWluZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0ycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3N1Ym1pdC1idG4ge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgd2lkdGg6IDZyZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb25maXJtYXRpb24tbWVzc2FnZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Vycm9yLW5hbWUsXFxyXFxuICAjZXJyb3ItZW1haWwsXFxyXFxuICAjZXJyb3ItdGV4dGFyZWEge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcXHJcXG4gICNjb250YWN0LWluZm8tY29udGFpbmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICBncmlkLXJvdzogNDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKSB7XHJcbiAgLy8gQ3JlYXRlIGEgY29udGFpbmVyIGZvciBhcHBlbmRpbmcgYWxsIHRoZSBjb250YWN0LXBhZ2UgZWxlbWVudHMgb24gaXRcclxuICBjb25zdCBjb250YWN0UGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhY3RQYWdlQ29udGFpbmVyLmlkID0gJ2NvbnRhY3QtcGFnZS1jb250YWluZXInO1xyXG5cclxuICBjb25zdCBjb250YWN0VXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgY29udGFjdFVzVGl0bGUuaWQgPSAnY29udGFjdC11cy10aXRsZSc7XHJcbiAgY29udGFjdFVzVGl0bGUudGV4dENvbnRlbnQgPSAnU2VuZCB1cyB5b3VyIG1lc3NhZ2UnO1xyXG5cclxuICBjb25zdCBzdWJtaXRCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzdWJtaXRCdG5Db250YWluZXIuaWQgPSAnc3VibWl0LWJ0bi1jb250YWluZXInO1xyXG5cclxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBzdWJtaXRCdG4uaWQgPSAnc3VibWl0LWJ0bic7XHJcbiAgc3VibWl0QnRuLnZhbHVlID0gJ2luc2VydCc7XHJcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XHJcblxyXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEZvcm0pO1xyXG5cclxuICBzdWJtaXRCdG5Db250YWluZXIuYXBwZW5kKHN1Ym1pdEJ0bik7XHJcbiAgY29udGFjdFBhZ2VDb250YWluZXIuYXBwZW5kKGNvbnRhY3RVc1RpdGxlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVGb3JtKCksIHN1Ym1pdEJ0bkNvbnRhaW5lcixjcmVhdGVDb250YWN0SW5mbygpKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhY3RQYWdlQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0SW5mbygpIHtcclxuICBjb25zdCBjb250YWN0SW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhY3RJbmZvQ29udGFpbmVyLmlkID0gJ2NvbnRhY3QtaW5mby1jb250YWluZXInO1xyXG5cclxuICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxvY2F0aW9uQ29udGFpbmVyLmlkID0gJ2xvY2F0aW9uLWNvbnRhaW5lcic7XHJcbiAgY29uc3QgbG9jYXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGxvY2F0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1sb2NhdGlvbi1kb3QnKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBsb2NhdGlvbi5pZCA9ICdsb2NhdGlvbic7XHJcbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSAnS3lvdG8sIFlhbWF4eHh4IHh4eHggNjAnO1xyXG4gIFxyXG4gIGNvbnN0IHBob25lTnVtYmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGhvbmVOdW1iZXJDb250YWluZXIuaWQgPSAncGhvbmUtbnVtYmVyLWNvbnRhaW5lcic7XHJcbiAgY29uc3QgcGhvbmVOdW1iZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIHBob25lTnVtYmVySWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1waG9uZScpO1xyXG4gIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHBob25lTnVtYmVyLmlkID0gJ3Bob25lLW51bWJlcic7XHJcbiAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnKzgxIDc1IHh4eCB4eHh4JztcclxuXHJcbiAgY29uc3QgZW1haWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlbWFpbENvbnRhaW5lci5pZCA9ICdlbWFpbC1jb250YWluZXInO1xyXG4gIGNvbnN0IGVtYWlsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBlbWFpbEljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtZW52ZWxvcGUnKTtcclxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBlbWFpbC5pZCA9ICdlbWFpbCc7XHJcbiAgZW1haWwudGV4dENvbnRlbnQgPSAnby1mX0pQQGdtYWlsLmNvbSc7XHJcbiAgXHJcbiAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kKGxvY2F0aW9uSWNvbiwgbG9jYXRpb24pO1xyXG4gIHBob25lTnVtYmVyQ29udGFpbmVyLmFwcGVuZChwaG9uZU51bWJlckljb24sIHBob25lTnVtYmVyKTtcclxuICBlbWFpbENvbnRhaW5lci5hcHBlbmQoZW1haWxJY29uLCBlbWFpbCk7XHJcblxyXG4gIGNvbnRhY3RJbmZvQ29udGFpbmVyLmFwcGVuZChsb2NhdGlvbkNvbnRhaW5lciwgcGhvbmVOdW1iZXJDb250YWluZXIsIGVtYWlsQ29udGFpbmVyKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhY3RJbmZvQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xyXG4gIGNvbnN0IGNvbnRhY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFjdEZvcm1Db250YWluZXIuaWQgPSAnY29udGFjdC1mb3JtLWNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGNvbnRhY3RGb3JtLmlkID0gJ2NvbnRhY3QtZm9ybSc7XHJcbiAgY29udGFjdEZvcm0ubWV0aG9kID0gJ1BPU1QnO1xyXG5cclxuICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmFtZURpdi5pZCA9ICduYW1lLWRpdic7XHJcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBuYW1lSW5wdXQuaWQgPSAnbmFtZS1pbnB1dCc7XHJcbiAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgbmFtZUlucHV0Lm5hbWUgPSAnbmFtZSc7XHJcbiAgbmFtZUlucHV0LmF1dG9jb21wbGV0ZSA9ICdvbic7XHJcbiAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ05hbWUnO1xyXG4gIFxyXG4gIGNvbnN0IGVtYWlsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZW1haWxEaXYuaWQgPSAnZW1haWwtZGl2JztcclxuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBlbWFpbElucHV0LmlkID0gJ2VtYWlsLWlucHV0JztcclxuICBlbWFpbElucHV0LnR5cGUgPSAnZW1haWwnO1xyXG4gIGVtYWlsSW5wdXQubmFtZSA9ICdlbWFpbCc7XHJcbiAgZW1haWxJbnB1dC5hdXRvY29tcGxldGUgPSAnb24nO1xyXG4gIGVtYWlsSW5wdXQucGxhY2Vob2xkZXIgPSAnRW1haWwnO1xyXG4gIFxyXG4gIGNvbnN0IG1lc3NhZ2VCb3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZXNzYWdlQm94RGl2LmlkID0gJ21lc3NhZ2UtYm94LWRpdic7XHJcbiAgY29uc3QgbWVzc2FnZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgbWVzc2FnZUJveC5pZCA9ICdtZXNzYWdlLXRleHRhcmVhJztcclxuICBtZXNzYWdlQm94Lm5hbWUgPSAnbWVzc2FnZS10ZXh0JztcclxuICBtZXNzYWdlQm94LnBsYWNlaG9sZGVyID0gJ01lc3NhZ2UnO1xyXG4gIFxyXG4gIG5hbWVEaXYuYXBwZW5kKG5hbWVJbnB1dCk7XHJcbiAgZW1haWxEaXYuYXBwZW5kKGVtYWlsSW5wdXQpO1xyXG4gIG1lc3NhZ2VCb3hEaXYuYXBwZW5kKG1lc3NhZ2VCb3gpO1xyXG5cclxuICBjb250YWN0Rm9ybS5hcHBlbmQobmFtZURpdiwgZW1haWxEaXYsIG1lc3NhZ2VCb3hEaXYsIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yTmFtZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvckVtYWlsLCBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvclRleHRBcmVhKTtcclxuICBjb250YWN0Rm9ybUNvbnRhaW5lci5hcHBlbmQoY29udGFjdEZvcm0pO1xyXG5cclxuICByZXR1cm4gY29udGFjdEZvcm1Db250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oKSB7XHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lLWlucHV0JykudmFsdWU7XHJcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwtaW5wdXQnKS52YWx1ZTtcclxuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UtdGV4dGFyZWEnKS52YWx1ZTtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuXHJcbiAgLy8gTWFraW5nIHRoZSB2YWxpZGF0aW9uIGJlZm9yZSBzdWJtaXR0aW5nIHRoZSBmb3JtLCBhbmQgc3RvcHMgaWYgc29tZXRoaW5nIGlzIHdyb25nXHJcbiAgaWYgKCF2YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZSBkYXRhIHRha2VuIGZyb20gdGhlIGZvcm1cclxuICBjb25zdCBmb3JtRGF0YSA9IHtcclxuICAgIG5hbWU6IG5hbWUsXHJcbiAgICBlbWFpbDogZW1haWwsXHJcbiAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gIH07XHJcblxyXG4gIC8vIENvbnZlcnQgdGhlIGZvcm1EYXRhIG9iamVjdCBpbnRvIGEgSlNPTiBzdHJpbmdcclxuICBjb25zdCBmb3JtRGF0YUpTT04gPSBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSk7XHJcblxyXG4gIC8vIFN0b3JlIHRoZSBKU09OIGRhdGEgaW4gbG9jYWxTdG9yYWdlXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zvcm1EYXRhJywgZm9ybURhdGFKU09OKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtaW5wdXQnKS52YWx1ZSA9ICcnO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbC1pbnB1dCcpLnZhbHVlID0gJyc7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UtdGV4dGFyZWEnKS52YWx1ZSA9ICcnO1xyXG5cclxuICBkaXNwbGF5TG9jYWxTdG9yYWdlRGF0YSgpOyAgLy8gVXBkYXRlIHRoZSBkaXNwbGF5ZWQgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuXHJcbiAgbWFpbi5hcHBlbmQoY29uZmlybU1lc3NhZ2VzLmNvbmZpcm1hdGlvbk1lc3NhZ2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtaW5wdXQnKS52YWx1ZTtcclxuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsLWlucHV0JykudmFsdWU7XHJcbiAgY29uc3QgbWVzc2FnZVRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UtdGV4dGFyZWEnKS52YWx1ZTtcclxuICBjb25zdCBjb25maXJtYXRpb25NZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbmZpcm1hdGlvbi1tZXNzYWdlJyk7XHJcbiAgbGV0IGlzRm9ybUlucHV0VmFsaWQgPSB0cnVlO1xyXG5cclxuICBpZiAoIW5hbWVJbnB1dCB8fCBuYW1lSW5wdXQubGVuZ3RoIDwgMikge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JOYW1lLmlubmVySFRNTCA9ICdZb3VyIE5hbWUgaXMgdG9vIHNob3J0LCBwbGVhc2UgZ2l2ZSBhIHZhbGlkIG5hbWUhJztcclxuICAgIGlzRm9ybUlucHV0VmFsaWQgPSBmYWxzZTtcclxuICB9IGVsc2UgaWYgKCEvXlthLXpBLXpcXHNdKyQvLnRlc3QobmFtZUlucHV0KSApIHtcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yTmFtZS5pbm5lckhUTUwgPSAnUGxlYXNlIGdpdmUgYSB2YWxpZCBuYW1lISc7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIENsZWFyIHRoZSBlcnJvciBtZXNzYWdlIGlmIHRoZSBpbnB1dCBpcyB2YWxpZFxyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JOYW1lLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaWYgKCEvXltBLVphLXowLTkuXyUrLV0rQFtBLVphLXowLTkuLV0rXFwuW0EtWmEtel17Mix9JC8udGVzdChlbWFpbElucHV0KSkge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JFbWFpbC5pbm5lckhUTUwgPSAnUGxlYXNlIGdpdmUgYSB2YWxpZCBlbWFpbCEnO1xyXG4gICAgaXNGb3JtSW5wdXRWYWxpZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvckVtYWlsLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFtZXNzYWdlVGV4dEFyZWF8fCBtZXNzYWdlVGV4dEFyZWEubGVuZ3RoIDw9IDYpIHtcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yVGV4dEFyZWEuaW5uZXJIVE1MID0gJ1lvdXIgTWVzc2FnZSBpcyB0b28gc2hvcnQhJztcclxuICAgIGlzRm9ybUlucHV0VmFsaWQgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYS5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcblxyXG4gIGlmIChjb25maXJtYXRpb25NZXNzYWdlKSB7XHJcbiAgICBjb25maXJtTWVzc2FnZXMuY29uZmlybWF0aW9uTWVzc2FnZS5pbm5lckhUTUwgPSAnWW91IGFyZSBhbHJlYWR5IHN1Ym1pdHRlZCB0aGUgZm9ybSEnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25maXJtTWVzc2FnZXMuY29uZmlybWF0aW9uTWVzc2FnZS5pbm5lckhUTUwgPSBgRm9ybSBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5ISA8YnI+XHJcbiAgICBXZSB3aWxsIGNvbnRhY3QgeW91IGFzIHNvb24gYXMgcG9zc2libGUuYDtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIGlzRm9ybUlucHV0VmFsaWQ7XHJcbn1cclxuXHJcbi8vIElJRkUgKEltbWVkaWF0ZWx5IEludm9rZWQgRnVuY3Rpb24gRXhwcmVzc2lvbikgZm9yIGVuY2Fwc3VsYXRpb24gcHVycG9zZVxyXG5jb25zdCBlcnJvck1lc3NhZ2VzID0gKCgpID0+IHtcclxuICBjb25zdCBlcnJvclZhbGlkYXRpb25Gb3JOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGVycm9yVmFsaWRhdGlvbkZvck5hbWUuaWQgPSAnZXJyb3ItbmFtZSc7XHJcblxyXG4gIGNvbnN0IGVycm9yVmFsaWRhdGlvbkZvckVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGVycm9yVmFsaWRhdGlvbkZvckVtYWlsLmlkID0gJ2Vycm9yLWVtYWlsJztcclxuXHJcbiAgY29uc3QgZXJyb3JWYWxpZGF0aW9uRm9yVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZXJyb3JWYWxpZGF0aW9uRm9yVGV4dEFyZWEuaWQgPSAnZXJyb3ItdGV4dGFyZWEnO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZXJyb3JWYWxpZGF0aW9uRm9yTmFtZSxcclxuICAgIGVycm9yVmFsaWRhdGlvbkZvckVtYWlsLFxyXG4gICAgZXJyb3JWYWxpZGF0aW9uRm9yVGV4dEFyZWEsXHJcbiAgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGNvbmZpcm1NZXNzYWdlcyA9ICgoKSA9PiB7XHJcbiAgLy8gU2hvd3MgYSBjb25maXJtYXRpb24gbWVzc2FnZSB1cG9uIGEgc3VjY2Vzc2Z1bCBzdWJtaXNzaW9uIG9mIHRoZSBmb3JtXHJcbiAgY29uc3QgY29uZmlybWF0aW9uTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbmZpcm1hdGlvbk1lc3NhZ2UuaWQgPSAnY29uZmlybWF0aW9uLW1lc3NhZ2UnO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY29uZmlybWF0aW9uTWVzc2FnZVxyXG4gIH1cclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlMb2NhbFN0b3JhZ2VEYXRhKCkge1xyXG4gIC8vIFJldHJpZXZpbmcgdGhlIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXHJcbiAgY29uc3QgbG9jYWxTdG9yYWdlRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb3JtRGF0YScpO1xyXG5cclxuICBpZiAobG9jYWxTdG9yYWdlRGF0YSkge1xyXG4gICAgLy8gUGFyc2luZyBKU09OIHN0cmluZyBpbnRvIGEgSlMgb2JqZWN0XHJcbiAgICBjb25zdCBwYXJzZWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VEYXRhKTtcclxuXHJcbiAgICAvLyBsb2dzIHRoZSBzdG9yZWQgZGF0YSBmcm9tIHRoZSBmb3JtXHJcbiAgICBjb25zb2xlLmxvZygnU3RvcmVkIEZvcm0gRGF0YTogJywgcGFyc2VkRGF0YSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKCdUaGVyZSBpc25cXCd0IGFueSBkYXRhIHN0b3JlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZS4nKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29udGFjdFBhZ2UoKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcbiAgaWYgKGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yTmFtZSB8fCBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvckVtYWlsIHx8IFxyXG4gICAgICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYSkge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JOYW1lLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvckVtYWlsLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvclRleHRBcmVhLnRleHRDb250ZW50ID0gJyc7XHJcbiAgfSBcclxuXHJcbiAgbWFpbi5hcHBlbmQoY3JlYXRlQ29udGFjdFBhZ2UoKSk7XHJcbn1cclxuXHJcbiIsIiBmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcclxuICBjb25zdCBob21lUGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvbWVQYWdlRGl2LmlkID0gJ2hvbWUtcGFnZS1kaXYnO1xyXG5cclxuICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgcmVzdGF1cmFudE5hbWUuaWQgPSAncmVzdGF1cmFudC1uYW1lJztcclxuICByZXN0YXVyYW50TmFtZS5pbm5lckhUTUwgPSBgV2VsY29tZSB0byBPa29ub21pIEZsYXZvcnM8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicmVzdGF1cmFudC10eXBlXCI+VHJhZGl0aW9uYWwgSmFwYW5lc2UgUmVzdGF1cmFudDwvc3Bhbj5gO1xyXG5cclxuICBjb25zdCBob21lUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvbWVQYXJhZ3JhcGguaWQgPSAnaG9tZS1wYXJhZ3JhcGgnO1xyXG4gIGhvbWVQYXJhZ3JhcGguaW5uZXJIVE1MID0gYFxyXG4gIFRoZSBhcnQgb2YgY3JhZnRpbmcgbW91dGh3YXRlcmluZyBva29ub21peWFraSBoYXMgXHJcbiAgYmVlbiBvdXIgcGFzc2lvbiBhbmQgdHJhZGl0aW9uIHNpbmNlIDE5MDAuIFxyXG4gIFdpdGggb3ZlciBhIGNlbnR1cnkgb2YgZGVkaWNhdGVkIHNlcnZpY2UsIFxyXG4gIHdlIHRha2UgaW1tZW5zZSBwcmlkZSBpbiBvdXIgY29tbWl0bWVudCB0byBkZWxpdmVyaW5nIFxyXG4gIG5vdCBvbmx5IHRoZSBmaW5lc3QgZmxhdm9ycyBidXQgYWxzbyB0aGUgd2FybWVzdCBob3NwaXRhbGl0eSB0byBvdXIgXHJcbiAgY2hlcmlzaGVkIGN1c3RvbWVycy4gPGJyPjxicj5cclxuICBcclxuICBGb3IgZ2VuZXJhdGlvbnMsIG91ciBmYW1pbHktb3duZWQgZXN0YWJsaXNobWVudCBoYXMgXHJcbiAgcGVyZmVjdGVkIHRoZSBkZWxpY2F0ZSBiYWxhbmNlIG9mIHNhdm9yeSBhbmQgc3dlZXQsIGNyaXNweSBhbmQgdGVuZGVyLCBcclxuICB0aGF0IGRlZmluZXMgdGhlIGVzc2VuY2Ugb2Ygb2tvbm9taXlha2kuIEV2ZXJ5IGRpc2ggd2UgY3JlYXRlIGlzIFxyXG4gIGEgbGFib3Igb2YgbG92ZSwgcGFzc2VkIGRvd24gdGhyb3VnaCB0aGUgeWVhcnMsIHByZXNlcnZpbmcgdGhlIGF1dGhlbnRpY2l0eSBcclxuICBhbmQgdGltZS1ob25vcmVkIHRlY2huaXF1ZXMgdGhhdCBoYXZlIG1hZGUgdXMgYSBiZWxvdmVkIGN1bGluYXJ5IGRlc3RpbmF0aW9uLmA7XHJcblxyXG4gIGNvbnN0IHdvcmtTY2hlZHVsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdvcmtTY2hlZHVsZURpdi5pZCA9ICd3b3JrLXNjaGVkdWxlLWRpdic7XHJcbiAgXHJcbiAgY29uc3QgaG91cnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgaG91cnNUaXRsZS5pZCA9ICdob3Vycy1oMic7XHJcbiAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9ICdXb3JraW5nIEhvdXJzJztcclxuXHJcbiAgLy8gVGltZSBTY2hlZHVsZSBmb3IgcmVzdGF1cmFudFxyXG4gIGNvbnN0IGhvdXJzTW9uZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJzTW9uZGF5LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgaG91cnNNb25kYXkudGV4dENvbnRlbnQgPSAnTW9uZGF5OiAxMDowMCAtIDIxOjAwJztcclxuICBjb25zdCBob3Vyc1R1ZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNUdWVzZGF5LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgaG91cnNUdWVzZGF5LnRleHRDb250ZW50ID0gJ1R1ZXNkYXk6IDEwOjAwIC0gMjE6MDAnO1xyXG4gIGNvbnN0IGhvdXJzV2VkbmVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJzV2VkbmVzZGF5LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgaG91cnNXZWRuZXNkYXkudGV4dENvbnRlbnQgPSAnV2VkbmVzZGF5OiAxMDowMCAtIDIxOjAwJztcclxuICBjb25zdCBob3Vyc1RodXJzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJzVGh1cnNkYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc1RodXJzZGF5LnRleHRDb250ZW50ID0gJ1RodXJzZGF5OiAxMDowMCAtIDIxOjAwJztcclxuICBjb25zdCBob3Vyc0ZyaWRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob3Vyc0ZyaWRheS5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIGhvdXJzRnJpZGF5LnRleHRDb250ZW50ID0gJ0ZyaWRheTogMTA6MDAgLSAyMTowMCc7XHJcbiAgY29uc3QgaG91cnNTYXR1cmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob3Vyc1NhdHVyZGF5LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgaG91cnNTYXR1cmRheS50ZXh0Q29udGVudCA9ICdTYXR1cmRheTogMTA6MDAgLSAxODowMCc7XHJcblxyXG4gIHdvcmtTY2hlZHVsZURpdi5hcHBlbmQoaG91cnNUaXRsZSwgaG91cnNNb25kYXksIGhvdXJzVHVlc2RheSwgaG91cnNXZWRuZXNkYXksICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzVGh1cnNkYXksIGhvdXJzRnJpZGF5LCBob3Vyc1NhdHVyZGF5KTtcclxuICBob21lUGFnZURpdi5hcHBlbmQocmVzdGF1cmFudE5hbWUsIGhvbWVQYXJhZ3JhcGgsIHdvcmtTY2hlZHVsZURpdik7XHJcbiAgXHJcbiAgcmV0dXJuIGhvbWVQYWdlRGl2O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuXHJcbm1haW4uYXBwZW5kKGNyZWF0ZUhvbWVQYWdlKCkpO1xyXG59XHJcbiIsImltcG9ydCBmaXJzdFByb2R1Y3RJbWFnZSBmcm9tICcuL2Fzc2V0cy9maXJzdC1wcm9kdWN0LnBuZyc7XHJcbmltcG9ydCBzZWNvbmRQcm9kdWN0SW1hZ2UgZnJvbSAnLi9hc3NldHMvc2Vjb25kLXByb2R1Y3QucG5nJztcclxuaW1wb3J0IHRoaXJkUHJvZHVjdEltYWdlIGZyb20gJy4vYXNzZXRzL3RoaXJkLXByb2R1Y3QucG5nJztcclxuaW1wb3J0IGZvdXJ0aFByb2R1Y3RJbWFnZSBmcm9tICcuL2Fzc2V0cy9mb3VydGgtcHJvZHVjdC5wbmcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XHJcbiAgLy8gQ3JlYXRlIGEgY29udGFpbmVyIHRvIGFwcGVuZCBhbGwgdGhlIHByb2R1Y3RzIGZvciB0aGUgbWVudVxyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZW51Q29udGFpbmVyLmlkID0gJ21lbnUtZGl2JztcclxuXHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICBjcmVhdGVQcm9kdWN0KFxyXG4gICAgICAnU2FtdXJhaSBCYWNvbicsXHJcbiAgICAgIGZpcnN0UHJvZHVjdEltYWdlLFxyXG4gICAgICBgSW50cm9kdWNpbmcgb3VyIFNhbXVyYWkgQmFjb24gT2tvbm9taXlha2kgd2hlcmUgc2F2b3J5IG1lZXRzIHNlbnNhdGlvbmFsISA8YnI+XHJcbiAgICAgIERlbGlnaHQgaW4gYSBoYXJtb25pb3VzIGJsZW5kIG9mIGNyaXNweSwgXHJcbiAgICAgIHNtb2t5IGJhY29uIGFuZCB0aGUgY2xhc3NpYyBKYXBhbmVzZSBwYW5jYWtlLCBjb29rZWQgdG8gcGVyZmVjdGlvbi5gLFxyXG4gICAgICAnUHJpY2U6IDUuNzAkJ1xyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kKFxyXG4gICAgY3JlYXRlUHJvZHVjdChcclxuICAgICAgJ0Z1amkgc2Vuc2F0aW9uJyxcclxuICAgICAgc2Vjb25kUHJvZHVjdEltYWdlLFxyXG4gICAgICBgQmVob2xkIHRoZSBGdWppIFNlbnNhdGlvbiBPa29ub21peWFraSwgYSBjdWxpbmFyeSBtYXN0ZXJwaWVjZSB0aGF0IGFzY2VuZHMgXHJcbiAgICAgIHRvIG5ldyBoZWlnaHRzIG9mIHRhc3RlIGFuZCBkZWxpZ2h0ISA8YnI+XHJcbiAgICAgIFRoaXMgZXhwbGljaXQgc2Vuc2F0aW9uIGJvYXN0cyBhIGZvdW5kYXRpb24gb2YgdGVuZGVyIGNhYmJhZ2UgYW5kIHNhdm9yeSBwb3JrIGJlbGx5LCBjcmVhdGluZyBhIGRlbGVjdGFibGUgY29udHJhc3Qgb2YgdGV4dHVyZXMgYW5kIGZsYXZvcnMuYCxcclxuICAgICAgJ1ByaWNlOiA3LjUwJCdcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmFwcGVuZChcclxuICAgIGNyZWF0ZVByb2R1Y3QoXHJcbiAgICAgICdOaW5qYSB3YXknLFxyXG4gICAgICB0aGlyZFByb2R1Y3RJbWFnZSxcclxuICAgICAgYFByZXBhcmUgdG8gZW1iYXJrIG9uIGEgY3VsaW5hcnkgYWR2ZW50dXJlIGxpa2Ugbm8gb3RoZXIgd2l0aCBvdXIgTmluamEgV2F5IE9rb25vbWl5YWtpISA8YnI+XHJcbiAgICAgIFRoaXMgZGlzaCBpcyBjcmFmdGVkIHdpdGggY3Jpc3Agc2hyZWRkZWQgY2Fycm90cyBhbmQgZGVsaWNhdGUgdmVnZXRhYmxlcywgcHJvdmlkaW5nIGEgZGVsaWdodGZ1bCBoYXJtb255IG9mIHRleHR1cmVzIGFuZCB0YXN0ZXMuYCxcclxuICAgICAgJ1ByaWNlOiA2LjkwJCdcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmFwcGVuZChcclxuICAgIGNyZWF0ZVByb2R1Y3QoXHJcbiAgICAgICdTaHJpbXAgZXJ1cHRpb24nLFxyXG4gICAgICBmb3VydGhQcm9kdWN0SW1hZ2UsXHJcbiAgICAgIGBQcmVwYXJlIGZvciBhIGZsYXZvciBlcnVwdGlvbiBsaWtlIG5vIG90aGVyIHdpdGggb3VyIFNocmltcCBFcnVwdGlvbiBPa29ub21peWFraSEgPGJyPlxyXG4gICAgICAgVGhpcyBleHRyYW9yZGluYXJ5IGRpc2ggdGFrZXMgdGhlIGNsYXNzaWMgSmFwYW5lc2UgcGFuY2FrZSB0byBuZXcgaGVpZ2h0cyBieSBmZWF0dXJpbmcgYSBnZW5lcm91cyBlcnVwdGlvbiBvZiBzdWNjdWxlbnQgc2hyaW1wLCBcclxuICAgICAgIGNyZWF0aW5nIGEgZGVsaWNpb3VzIHN5bXBob255IG9mIHRhc3RlcyBhbmQgdGV4dHVyZXMuYCxcclxuICAgICAgJ1ByaWNlOiA5LjYwJCdcclxuICAgIClcclxuICApO1xyXG5cclxuICByZXR1cm4gbWVudUNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvZHVjdChwcm9kdWN0VGl0bGUsIHByb2R1Y3RJbWFnZVBhdGgsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xyXG4gIGNvbnN0IHByb2R1Y3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcHJvZHVjdENhcmQuaWQgPSAncHJvZHVjdC1jYXJkJztcclxuXHJcbiAgY29uc3QgcHJvZHVjdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgcHJvZHVjdEltYWdlLmlkID0gJ3Byb2R1Y3QtaW1nJztcclxuICBwcm9kdWN0SW1hZ2Uuc3JjID0gcHJvZHVjdEltYWdlUGF0aDtcclxuICBwcm9kdWN0SW1hZ2UuYWx0ID0gcHJvZHVjdFRpdGxlO1xyXG5cclxuICBjb25zdCBwcm9kdWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgcHJvZHVjdE5hbWUuaWQgPSAncHJvZHVjdC10aXRsZSc7XHJcbiAgcHJvZHVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9kdWN0VGl0bGU7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwcm9kdWN0RGVzY3JpcHRpb24uaWQgPSAncHJvZHVjdC1kZXNjcmlwdGlvbic7XHJcbiAgcHJvZHVjdERlc2NyaXB0aW9uLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xyXG5cclxuICBjb25zdCBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcHJvZHVjdFByaWNlLmlkID0gJ3Byb2R1Y3QtcHJpY2UnO1xyXG4gIHByb2R1Y3RQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xyXG5cclxuICBwcm9kdWN0Q2FyZC5hcHBlbmQocHJvZHVjdEltYWdlKTtcclxuICBwcm9kdWN0Q2FyZC5hcHBlbmQocHJvZHVjdE5hbWUpO1xyXG4gIHByb2R1Y3RDYXJkLmFwcGVuZChwcm9kdWN0RGVzY3JpcHRpb24pO1xyXG4gIHByb2R1Y3RDYXJkLmFwcGVuZChwcm9kdWN0UHJpY2UpO1xyXG5cclxuICByZXR1cm4gcHJvZHVjdENhcmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudVBhZ2UoKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcblxyXG4gIG1haW4uYXBwZW5kKGNyZWF0ZU1lbnVQYWdlKCkpO1xyXG59IiwiaW1wb3J0IHsgbG9hZEhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBsb2FkTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCB7IGxvYWRDb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuaW1wb3J0IGhvbWVCYWNrZ3JvdW5kUGljIGZyb20gJy4vYXNzZXRzL2RhbmllbGUtc2FsdXRhcmktcmVzdGF1cmFudC1ob21lLnBuZyc7XHJcbmltcG9ydCBjb250YWN0QmFja2dyb3VuZFBpYyBmcm9tICcuL2Fzc2V0cy9jb250YWN0LXVzLnBuZyc7XHJcbmltcG9ydCBsb2dvUGljIGZyb20gJy4vYXNzZXRzL29rb25vbWktbG9nby5wbmcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIGhlYWRlci5pZCA9ICdoZWFkZXInO1xyXG5cclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbG9nby5pZCA9ICdsb2dvJztcclxuICBsb2dvLnNyYyA9IGxvZ29QaWM7XHJcbiAgbG9nby5hbHQgPSAnTE9HTyc7XHJcblxyXG4gIGhlYWRlci5hcHBlbmQobG9nbyk7XHJcbiAgaGVhZGVyLmFwcGVuZChjcmVhdGVOYXYoKSk7XHJcblxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICBuYXYuaWQgPSAnbmF2JztcclxuXHJcbiAgY29uc3QgaG9tZU5hdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGhvbWVOYXZCdG4uaWQgPSAnaG9tZS1idG4nO1xyXG4gIGhvbWVOYXZCdG4udGV4dENvbnRlbnQgPSAnSE9NRSc7XHJcblxyXG4gIGNvbnN0IG1lbnVOYXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBtZW51TmF2QnRuLmlkID0gJ21lbnUtYnRuJztcclxuICBtZW51TmF2QnRuLnRleHRDb250ZW50ID0gJ01FTlUnO1xyXG5cclxuICBjb25zdCBjb250YWN0TmF2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29udGFjdE5hdkJ0bi5pZCA9ICdjb250YWN0LWJ0bic7XHJcbiAgY29udGFjdE5hdkJ0bi50ZXh0Q29udGVudCA9ICdDT05UQUNUJztcclxuXHJcbiAgLy8gSGFtYnVyZ2VyIG1lbnUgXHJcbiAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaGFtYnVyZ2VyLmlkID0gJ2hhbWJ1cmdlci1jb250YWluZXInO1xyXG4gIGNvbnN0IGZpcnN0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGZpcnN0QmFyLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlci1iYXInKTtcclxuICBjb25zdCBzZWNvbmRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgc2Vjb25kQmFyLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlci1iYXInKTtcclxuICBjb25zdCB0aGlyZEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0aGlyZEJhci5jbGFzc0xpc3QuYWRkKCdoYW1idXJnZXItYmFyJyk7XHJcblxyXG4gIG5hdi5hcHBlbmQoaG9tZU5hdkJ0bik7XHJcbiAgbmF2LmFwcGVuZChtZW51TmF2QnRuKTtcclxuICBuYXYuYXBwZW5kKGNvbnRhY3ROYXZCdG4pO1xyXG4gIGhhbWJ1cmdlci5hcHBlbmQoZmlyc3RCYXIsIHNlY29uZEJhciwgdGhpcmRCYXIpO1xyXG4gIG5hdi5hcHBlbmQoaGFtYnVyZ2VyKTtcclxuXHJcbiAgcmV0dXJuIG5hdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIG1haW4uaWQgPSAnbWFpbic7XHJcblxyXG4gIHJldHVybiBtYWluO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgZm9vdGVyLmlkID0gJ2Zvb3Rlcic7XHJcblxyXG4gIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZvb3RlckRpdi5pZCA9ICdmb290ZXItZGl2JztcclxuXHJcbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqknO1xyXG5cclxuICBjb25zdCBhdXRob3JOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGF1dGhvck5hbWUudGV4dENvbnRlbnQgPSAnSm9yZGFuIFBhcGFkaXRzYXMnO1xyXG5cclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgY29uc3QgZ2l0SHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBnaXRIdWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2pvcmRhbnBhcGFkaXRzYXMnO1xyXG5cclxuICBjb25zdCBnaXRIdWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGdpdEh1Ykljb24uY2xhc3NMaXN0LmFkZCgnZmEtYnJhbmRzJywgJ2ZhLWdpdGh1YicpO1xyXG5cclxuICBmb290ZXJEaXYuYXBwZW5kKGNvcHlyaWdodCwgYXV0aG9yTmFtZSwgY3VycmVudERhdGUsIGdpdEh1YkxpbmspO1xyXG4gIGdpdEh1YkxpbmsuYXBwZW5kKGdpdEh1Ykljb24pO1xyXG4gIGZvb3Rlci5hcHBlbmQoZm9vdGVyRGl2KTtcclxuXHJcbiAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuICAvLyBGdW5jdGlvbiBmb3Igc3dpdGNoaW5nIGJldHdlZW4gbmF2YmFyIHRhYnNcclxuZnVuY3Rpb24gYnJvd3NlTmF2VGFicygpIHtcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcbiAgY29uc3QgaG9tZUJhY2tncm91bmRJbWFnZSA9IGhvbWVCYWNrZ3JvdW5kUGljO1xyXG4gIGNvbnN0IGNvbnRhY3RCYWNrZ3JvdW5kSW1hZ2UgPSBjb250YWN0QmFja2dyb3VuZFBpYztcclxuXHJcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnaG9tZS1idG4nKSB7XHJcbiAgICAgICAgY2xlYW5NYWluKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aG9tZUJhY2tncm91bmRJbWFnZX0pYDtcclxuICAgICAgICBsb2FkSG9tZVBhZ2UoKTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdtZW51LWJ0bicpIHtcclxuICAgICAgICBjbGVhbk1haW4oKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcclxuICAgICAgICBsb2FkTWVudVBhZ2UoKTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdjb250YWN0LWJ0bicpIHtcclxuICAgICAgICBjbGVhbk1haW4oKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjb250YWN0QmFja2dyb3VuZEltYWdlfSlgO1xyXG4gICAgICAgIGxvYWRDb250YWN0UGFnZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUhhbWJ1cmdlck1lbnUoKSB7XHJcbiAgY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYW1idXJnZXItY29udGFpbmVyJyk7XHJcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdicpO1xyXG5cclxuICBoYW1idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIG5hdkJhci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5NYWluKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG4gIG1haW4udGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZU1haW4oKSk7XHJcbiAgY29udGVudC5hcHBlbmQoY3JlYXRlRm9vdGVyKCkpO1xyXG4gIGxvYWRIb21lUGFnZSgpO1xyXG4gIGJyb3dzZU5hdlRhYnMoKTtcclxuICBkaXNwbGF5SGFtYnVyZ2VyTWVudSgpO1xyXG5cclxuICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZFBhZ2UgfSBmcm9tICcuL3BhZ2Utc3RydWN0dXJlJztcclxuaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xyXG5cclxubG9hZFBhZ2UoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9