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

#logo {
  width: 16rem;
}

#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 7rem;
}

#home-btn,
#menu-btn,
#contact-btn {
  color: var(--text-color-white);
  background-color: var(--color-black);
  font-size: 1rem;
  margin-right: 5rem;
  border: none;
}

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
  width: 50%;
  border-radius: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background: linear-gradient(rgba(8, 8, 8, 0.2), rgb(12, 1, 1, 0.8));
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
}

#contact-page-container {
  animation: fadeIn 1.5s;
  display: grid;
  grid-template-areas: 
  "aside main"
  "aside main"
  "aside main";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr 1fr;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}

#contact-us-title {
  color: var(--text-color-white);
  text-align: center;
  margin-bottom: 1rem;
  font-size: 3rem;
  grid-area: main;
}

#contact-info-container {
  display: grid;
  grid-area: aside;
  gap: 1rem;
  background-color: rgb(121, 10, 10);
  color: var(--text-color-white);
  width: 15rem;
  height: 10rem;
  border-radius: 0.4rem;
}

#location-container, 
#phone-number-container,
#email-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
}

#contact-form-container {
  color: var(--text-color-white);
  margin-top: 5rem;
  grid-area: main;
}

#contact-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
}

#contact-form input, textarea {
  width: 18rem;
  height: 3rem;
  font-size: 1rem;
  text-indent: 2rem;
  border-radius: 1rem;
}

#contact-form textarea {
  height: 10rem;
  resize: none;
  letter-spacing: 1px;
}

#contact-form input:focus, #contact-form textarea:focus {
  outline: none;
  border: 5px solid rgb(131, 10, 10);
  box-shadow: 2px 5px 5px 0px #3d0303;
  border-radius: 1rem;
}

#submit-btn-container {
  text-align: center;
  grid-area: main;
  grid-row: 4/4;
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
}

#confirmation-message {
  color: var(--text-color-white);
  text-align: center;
  margin-top: 2rem;
  font-size: 2rem;
  animation: fadeIn 0.8s;
}

#error-name,
#error-email,
#error-textarea {
  font-size: 1.5rem;
  color: red;
}
 
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
}

/* Hover Effects */

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --text-color-white: #fafafa;\r\n  --color-black: #000;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  background-image: url(../assets/daniele-salutari-restaurant-home.png);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n}\r\n\r\n#logo {\r\n  width: 16rem;\r\n}\r\n\r\n#header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n  width: 100%;\r\n  height: 7rem;\r\n}\r\n\r\n#home-btn,\r\n#menu-btn,\r\n#contact-btn {\r\n  color: var(--text-color-white);\r\n  background-color: var(--color-black);\r\n  font-size: 1rem;\r\n  margin-right: 5rem;\r\n  border: none;\r\n}\r\n\r\n#restaurant-name {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n#restaurant-type {\r\n  font-size: 1.1rem;\r\n  font-weight: normal;\r\n}\r\n\r\n#home-page-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 3rem;\r\n  color: var(--text-color-white);\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n#home-paragraph {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  max-width: 40%;\r\n  font-size: 1.3rem;\r\n  margin-top: 3rem;\r\n}\r\n\r\n#work-schedule-div {\r\n  border: 2px solid var(--text-color-white);\r\n  width: 30%;\r\n  height: 12rem;\r\n  text-align: center;\r\n  margin-top: 5rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#hours-h2 {\r\n  text-decoration: underline;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n#menu-div {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  gap: 5rem;\r\n  width: 50%;\r\n  border-radius: 1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  background: linear-gradient(rgba(8, 8, 8, 0.2), rgb(12, 1, 1, 0.8));\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n#product-img {\r\n  border-radius: 35%;\r\n  width: 10rem;\r\n}\r\n\r\n#product-card {\r\n  gap: 2rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#product-description {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n#product-price {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n#contact-page-container {\r\n  animation: fadeIn 1.5s;\r\n  display: grid;\r\n  grid-template-areas: \r\n  \"aside main\"\r\n  \"aside main\"\r\n  \"aside main\";\r\n  grid-template-columns: 1fr 3fr;\r\n  grid-template-rows: 1fr 1fr 1fr;\r\n  /* display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column; */\r\n}\r\n\r\n#contact-us-title {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  margin-bottom: 1rem;\r\n  font-size: 3rem;\r\n  grid-area: main;\r\n}\r\n\r\n#contact-info-container {\r\n  display: grid;\r\n  grid-area: aside;\r\n  gap: 1rem;\r\n  background-color: rgb(121, 10, 10);\r\n  color: var(--text-color-white);\r\n  width: 15rem;\r\n  height: 10rem;\r\n  border-radius: 0.4rem;\r\n}\r\n\r\n#location-container, \r\n#phone-number-container,\r\n#email-container {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  margin-left: 1rem;\r\n}\r\n\r\n#contact-form-container {\r\n  color: var(--text-color-white);\r\n  margin-top: 5rem;\r\n  grid-area: main;\r\n}\r\n\r\n#contact-form {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n}\r\n\r\n#contact-form input, textarea {\r\n  width: 18rem;\r\n  height: 3rem;\r\n  font-size: 1rem;\r\n  text-indent: 2rem;\r\n  border-radius: 1rem;\r\n}\r\n\r\n#contact-form textarea {\r\n  height: 10rem;\r\n  resize: none;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n#contact-form input:focus, #contact-form textarea:focus {\r\n  outline: none;\r\n  border: 5px solid rgb(131, 10, 10);\r\n  box-shadow: 2px 5px 5px 0px #3d0303;\r\n  border-radius: 1rem;\r\n}\r\n\r\n#submit-btn-container {\r\n  text-align: center;\r\n  grid-area: main;\r\n  grid-row: 4/4;\r\n}\r\n\r\n#submit-btn {\r\n  font-size: 1.2rem;\r\n  width: 10rem;\r\n  height: 3rem;\r\n  border-radius: 2rem;\r\n  background-color: #8d0d0d;\r\n  color: var(--text-color-white);\r\n  border: none;\r\n  margin-top: 2rem;\r\n}\r\n\r\n#confirmation-message {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  margin-top: 2rem;\r\n  font-size: 2rem;\r\n  animation: fadeIn 0.8s;\r\n}\r\n\r\n#error-name,\r\n#error-email,\r\n#error-textarea {\r\n  font-size: 1.5rem;\r\n  color: red;\r\n}\r\n \r\n#footer {\r\n  border: 1px solid var(--color-black);\r\n  background-color: var(--color-black);\r\n  color: var(--text-color-white);\r\n  margin-top: auto;\r\n}\r\n\r\n#footer-div {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  height: 50px;\r\n  gap: 0.3rem;\r\n  color: var(--text-color-white);\r\n}\r\n\r\n.fa-brands {\r\n  color: var(--text-color-white);\r\n}\r\n\r\n/* Hover Effects */\r\n\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}"],"sourceRoot":""}]);
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
  contactPageContainer.append(createContactInfo(), contactUsTitle, 
                                createForm(), submitBtnContainer);

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
  location.textContent = 'xxxxx xxxxxxxx 10';
  
  const phoneNumberContainer = document.createElement('div');
  phoneNumberContainer.id = 'phone-number-container';
  const phoneNumberIcon = document.createElement('i');
  phoneNumberIcon.classList.add('fa-solid', 'fa-phone');
  const phoneNumber = document.createElement('span');
  phoneNumber.id = 'phone-number';
  phoneNumber.textContent = '+30 698xxxxxxxx';

  const emailContainer = document.createElement('div');
  emailContainer.id = 'email-container';
  const emailIcon = document.createElement('i');
  emailIcon.classList.add('fa-solid', 'fa-envelope');
  const email = document.createElement('span');
  email.id = 'email';
  email.textContent = 'o_f_JP@gmail.com';
  
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
      'Testing Description Lorem Ipsum',
      '5.70$'
    )
  );

  menuContainer.append(
    createProduct(
      'Fuji sensation',
      _assets_second_product_png__WEBPACK_IMPORTED_MODULE_1__,
      'Testing Description Lorem Ipsum',
      '7.50$'
    )
  );

  menuContainer.append(
    createProduct(
      'Ninja way',
      _assets_third_product_png__WEBPACK_IMPORTED_MODULE_2__,
      'Testing Description Lorem Ipsum',
      '6.90$'
    )
  );

  menuContainer.append(
    createProduct(
      'Shrimp eruption',
      _assets_fourth_product_png__WEBPACK_IMPORTED_MODULE_3__,
      'Testing Description Lorem Ipsum',
      '9.60$'
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

/**
 *  Function for switching between navbar tabs
 */
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

// Tasks: 
// Add more information in Contact Us page
// Complete the CSS styling
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHdLQUFpRTtBQUM3Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9GQUFvRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sT0FBTyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssZ0NBQWdDLGtDQUFrQywwQkFB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Q2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsR0FBRztBQUN2RDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQTRDO0FBQ25CO0FBQ3pCO0FBQ0EseURBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vc3JjL3BhZ2Utc3RydWN0dXJlLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZGFuaWVsZS1zYWx1dGFyaS1yZXN0YXVyYW50LWhvbWUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS10ZXh0LWNvbG9yLXdoaXRlOiAjZmFmYWZhO1xyXG4gIC0tY29sb3ItYmxhY2s6ICMwMDA7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICB3aWR0aDogMTZyZW07XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogN3JlbTtcclxufVxyXG5cclxuI2hvbWUtYnRuLFxyXG4jbWVudS1idG4sXHJcbiNjb250YWN0LWJ0biB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI3Jlc3RhdXJhbnQtbmFtZSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxufVxyXG5cclxuI3Jlc3RhdXJhbnQtdHlwZSB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuI2hvbWUtcGFnZS1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogM3JlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcclxufVxyXG5cclxuI2hvbWUtcGFyYWdyYXBoIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1heC13aWR0aDogNDAlO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuXHJcbiN3b3JrLXNjaGVkdWxlLWRpdiB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDEycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4jaG91cnMtaDIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuI21lbnUtZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGdhcDogNXJlbTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg4LCA4LCA4LCAwLjIpLCByZ2IoMTIsIDEsIDEsIDAuOCkpO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XHJcbn1cclxuXHJcbiNwcm9kdWN0LWltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMzUlO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxufVxyXG5cclxuI3Byb2R1Y3QtY2FyZCB7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuI3Byb2R1Y3QtZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcblxyXG4jcHJvZHVjdC1wcmljZSB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbiNjb250YWN0LXBhZ2UtY29udGFpbmVyIHtcclxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgXCJhc2lkZSBtYWluXCJcclxuICBcImFzaWRlIG1haW5cIlxyXG4gIFwiYXNpZGUgbWFpblwiO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xyXG59XHJcblxyXG4jY29udGFjdC11cy10aXRsZSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBncmlkLWFyZWE6IG1haW47XHJcbn1cclxuXHJcbiNjb250YWN0LWluZm8tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtYXJlYTogYXNpZGU7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjEsIDEwLCAxMCk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHdpZHRoOiAxNXJlbTtcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxufVxyXG5cclxuI2xvY2F0aW9uLWNvbnRhaW5lciwgXHJcbiNwaG9uZS1udW1iZXItY29udGFpbmVyLFxyXG4jZW1haWwtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuI2NvbnRhY3QtZm9ybS1jb250YWluZXIge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gIGdyaWQtYXJlYTogbWFpbjtcclxufVxyXG5cclxuI2NvbnRhY3QtZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuI2NvbnRhY3QtZm9ybSBpbnB1dCwgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxOHJlbTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRleHQtaW5kZW50OiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbiNjb250YWN0LWZvcm0gdGV4dGFyZWEge1xyXG4gIGhlaWdodDogMTByZW07XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbiNjb250YWN0LWZvcm0gaW5wdXQ6Zm9jdXMsICNjb250YWN0LWZvcm0gdGV4dGFyZWE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiKDEzMSwgMTAsIDEwKTtcclxuICBib3gtc2hhZG93OiAycHggNXB4IDVweCAwcHggIzNkMDMwMztcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4jc3VibWl0LWJ0bi1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBncmlkLWFyZWE6IG1haW47XHJcbiAgZ3JpZC1yb3c6IDQvNDtcclxufVxyXG5cclxuI3N1Ym1pdC1idG4ge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGQwZDBkO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuI2NvbmZpcm1hdGlvbi1tZXNzYWdlIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuOHM7XHJcbn1cclxuXHJcbiNlcnJvci1uYW1lLFxyXG4jZXJyb3ItZW1haWwsXHJcbiNlcnJvci10ZXh0YXJlYSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4gXHJcbiNmb290ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJsYWNrKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbiNmb290ZXItZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBnYXA6IDAuM3JlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbn1cclxuXHJcbi5mYS1icmFuZHMge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxufVxyXG5cclxuLyogSG92ZXIgRWZmZWN0cyAqL1xyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7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O0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tdGV4dC1jb2xvci13aGl0ZTogI2ZhZmFmYTtcXHJcXG4gIC0tY29sb3ItYmxhY2s6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2RhbmllbGUtc2FsdXRhcmktcmVzdGF1cmFudC1ob21lLnBuZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIHdpZHRoOiAxNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1idG4sXFxyXFxuI21lbnUtYnRuLFxcclxcbiNjb250YWN0LWJ0biB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNyZXN0YXVyYW50LW5hbWUge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNyZXN0YXVyYW50LXR5cGUge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1wYWdlLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDNyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1wYXJhZ3JhcGgge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWF4LXdpZHRoOiA0MCU7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxyXFxufVxcclxcblxcclxcbiN3b3JrLXNjaGVkdWxlLWRpdiB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBoZWlnaHQ6IDEycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaG91cnMtaDIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNtZW51LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDgsIDgsIDgsIDAuMiksIHJnYigxMiwgMSwgMSwgMC44KSk7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1pbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzUlO1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1jYXJkIHtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2R1Y3QtcHJpY2Uge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LXBhZ2UtY29udGFpbmVyIHtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICBcXFwiYXNpZGUgbWFpblxcXCJcXHJcXG4gIFxcXCJhc2lkZSBtYWluXFxcIlxcclxcbiAgXFxcImFzaWRlIG1haW5cXFwiO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXHJcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC11cy10aXRsZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZ3JpZC1hcmVhOiBtYWluO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC1hcmVhOiBhc2lkZTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjEsIDEwLCAxMCk7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICB3aWR0aDogMTVyZW07XFxyXFxuICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9jYXRpb24tY29udGFpbmVyLCBcXHJcXG4jcGhvbmUtbnVtYmVyLWNvbnRhaW5lcixcXHJcXG4jZW1haWwtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWZvcm0tY29udGFpbmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxyXFxuICBncmlkLWFyZWE6IG1haW47XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxOHJlbTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtaW5kZW50OiAycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtZm9ybSBpbnB1dDpmb2N1cywgI2NvbnRhY3QtZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiKDEzMSwgMTAsIDEwKTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCA1cHggNXB4IDBweCAjM2QwMzAzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1idG4tY29udGFpbmVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdyaWQtYXJlYTogbWFpbjtcXHJcXG4gIGdyaWQtcm93OiA0LzQ7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZDBkMGQ7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29uZmlybWF0aW9uLW1lc3NhZ2Uge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuOHM7XFxyXFxufVxcclxcblxcclxcbiNlcnJvci1uYW1lLFxcclxcbiNlcnJvci1lbWFpbCxcXHJcXG4jZXJyb3ItdGV4dGFyZWEge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG4gXFxyXFxuI2Zvb3RlciB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZ2FwOiAwLjNyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5mYS1icmFuZHMge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIb3ZlciBFZmZlY3RzICovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKSB7XHJcbiAgLy8gQ3JlYXRlIGEgY29udGFpbmVyIGZvciBhcHBlbmRpbmcgYWxsIHRoZSBjb250YWN0LXBhZ2UgZWxlbWVudHMgb24gaXRcclxuICBjb25zdCBjb250YWN0UGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhY3RQYWdlQ29udGFpbmVyLmlkID0gJ2NvbnRhY3QtcGFnZS1jb250YWluZXInO1xyXG5cclxuICBjb25zdCBjb250YWN0VXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgY29udGFjdFVzVGl0bGUuaWQgPSAnY29udGFjdC11cy10aXRsZSc7XHJcbiAgY29udGFjdFVzVGl0bGUudGV4dENvbnRlbnQgPSAnU2VuZCB1cyB5b3VyIG1lc3NhZ2UnO1xyXG5cclxuICBjb25zdCBzdWJtaXRCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzdWJtaXRCdG5Db250YWluZXIuaWQgPSAnc3VibWl0LWJ0bi1jb250YWluZXInO1xyXG5cclxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBzdWJtaXRCdG4uaWQgPSAnc3VibWl0LWJ0bic7XHJcbiAgc3VibWl0QnRuLnZhbHVlID0gJ2luc2VydCc7XHJcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XHJcblxyXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEZvcm0pO1xyXG5cclxuICBzdWJtaXRCdG5Db250YWluZXIuYXBwZW5kKHN1Ym1pdEJ0bik7XHJcbiAgY29udGFjdFBhZ2VDb250YWluZXIuYXBwZW5kKGNyZWF0ZUNvbnRhY3RJbmZvKCksIGNvbnRhY3RVc1RpdGxlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVGb3JtKCksIHN1Ym1pdEJ0bkNvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiBjb250YWN0UGFnZUNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdEluZm8oKSB7XHJcbiAgY29uc3QgY29udGFjdEluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWN0SW5mb0NvbnRhaW5lci5pZCA9ICdjb250YWN0LWluZm8tY29udGFpbmVyJztcclxuXHJcbiAgY29uc3QgbG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsb2NhdGlvbkNvbnRhaW5lci5pZCA9ICdsb2NhdGlvbi1jb250YWluZXInO1xyXG4gIGNvbnN0IGxvY2F0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBsb2NhdGlvbkljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtbG9jYXRpb24tZG90Jyk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgbG9jYXRpb24uaWQgPSAnbG9jYXRpb24nO1xyXG4gIGxvY2F0aW9uLnRleHRDb250ZW50ID0gJ3h4eHh4IHh4eHh4eHh4IDEwJztcclxuICBcclxuICBjb25zdCBwaG9uZU51bWJlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBob25lTnVtYmVyQ29udGFpbmVyLmlkID0gJ3Bob25lLW51bWJlci1jb250YWluZXInO1xyXG4gIGNvbnN0IHBob25lTnVtYmVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBwaG9uZU51bWJlckljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtcGhvbmUnKTtcclxuICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBwaG9uZU51bWJlci5pZCA9ICdwaG9uZS1udW1iZXInO1xyXG4gIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJyszMCA2OTh4eHh4eHh4eCc7XHJcblxyXG4gIGNvbnN0IGVtYWlsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZW1haWxDb250YWluZXIuaWQgPSAnZW1haWwtY29udGFpbmVyJztcclxuICBjb25zdCBlbWFpbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgZW1haWxJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWVudmVsb3BlJyk7XHJcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZW1haWwuaWQgPSAnZW1haWwnO1xyXG4gIGVtYWlsLnRleHRDb250ZW50ID0gJ29fZl9KUEBnbWFpbC5jb20nO1xyXG4gIFxyXG4gIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZChsb2NhdGlvbkljb24sIGxvY2F0aW9uKTtcclxuICBwaG9uZU51bWJlckNvbnRhaW5lci5hcHBlbmQocGhvbmVOdW1iZXJJY29uLCBwaG9uZU51bWJlcik7XHJcbiAgZW1haWxDb250YWluZXIuYXBwZW5kKGVtYWlsSWNvbiwgZW1haWwpO1xyXG5cclxuICBjb250YWN0SW5mb0NvbnRhaW5lci5hcHBlbmQobG9jYXRpb25Db250YWluZXIsIHBob25lTnVtYmVyQ29udGFpbmVyLCBlbWFpbENvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiBjb250YWN0SW5mb0NvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcclxuICBjb25zdCBjb250YWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhY3RGb3JtQ29udGFpbmVyLmlkID0gJ2NvbnRhY3QtZm9ybS1jb250YWluZXInO1xyXG5cclxuICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBjb250YWN0Rm9ybS5pZCA9ICdjb250YWN0LWZvcm0nO1xyXG4gIGNvbnRhY3RGb3JtLm1ldGhvZCA9ICdQT1NUJztcclxuXHJcbiAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5hbWVEaXYuaWQgPSAnbmFtZS1kaXYnO1xyXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgbmFtZUlucHV0LmlkID0gJ25hbWUtaW5wdXQnO1xyXG4gIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIG5hbWVJbnB1dC5uYW1lID0gJ25hbWUnO1xyXG4gIG5hbWVJbnB1dC5hdXRvY29tcGxldGUgPSAnb24nO1xyXG4gIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdOYW1lJztcclxuICBcclxuICBjb25zdCBlbWFpbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVtYWlsRGl2LmlkID0gJ2VtYWlsLWRpdic7XHJcbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZW1haWxJbnB1dC5pZCA9ICdlbWFpbC1pbnB1dCc7XHJcbiAgZW1haWxJbnB1dC50eXBlID0gJ2VtYWlsJztcclxuICBlbWFpbElucHV0Lm5hbWUgPSAnZW1haWwnO1xyXG4gIGVtYWlsSW5wdXQuYXV0b2NvbXBsZXRlID0gJ29uJztcclxuICBlbWFpbElucHV0LnBsYWNlaG9sZGVyID0gJ0VtYWlsJztcclxuICBcclxuICBjb25zdCBtZXNzYWdlQm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVzc2FnZUJveERpdi5pZCA9ICdtZXNzYWdlLWJveC1kaXYnO1xyXG4gIGNvbnN0IG1lc3NhZ2VCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gIG1lc3NhZ2VCb3guaWQgPSAnbWVzc2FnZS10ZXh0YXJlYSc7XHJcbiAgbWVzc2FnZUJveC5uYW1lID0gJ21lc3NhZ2UtdGV4dCc7XHJcbiAgbWVzc2FnZUJveC5wbGFjZWhvbGRlciA9ICdNZXNzYWdlJztcclxuICBcclxuICBuYW1lRGl2LmFwcGVuZChuYW1lSW5wdXQpO1xyXG4gIGVtYWlsRGl2LmFwcGVuZChlbWFpbElucHV0KTtcclxuICBtZXNzYWdlQm94RGl2LmFwcGVuZChtZXNzYWdlQm94KTtcclxuXHJcbiAgY29udGFjdEZvcm0uYXBwZW5kKG5hbWVEaXYsIGVtYWlsRGl2LCBtZXNzYWdlQm94RGl2LCBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvck5hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JFbWFpbCwgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYSk7XHJcbiAgY29udGFjdEZvcm1Db250YWluZXIuYXBwZW5kKGNvbnRhY3RGb3JtKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhY3RGb3JtQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1pbnB1dCcpLnZhbHVlO1xyXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsLWlucHV0JykudmFsdWU7XHJcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlLXRleHRhcmVhJykudmFsdWU7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcblxyXG4gIC8vIE1ha2luZyB0aGUgdmFsaWRhdGlvbiBiZWZvcmUgc3VibWl0dGluZyB0aGUgZm9ybSwgYW5kIHN0b3BzIGlmIHNvbWV0aGluZyBpcyB3cm9uZ1xyXG4gIGlmICghdmFsaWRhdGVGb3JtKCkpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGUgZGF0YSB0YWtlbiBmcm9tIHRoZSBmb3JtXHJcbiAgY29uc3QgZm9ybURhdGEgPSB7XHJcbiAgICBuYW1lOiBuYW1lLFxyXG4gICAgZW1haWw6IGVtYWlsLFxyXG4gICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICB9O1xyXG5cclxuICAvLyBDb252ZXJ0IHRoZSBmb3JtRGF0YSBvYmplY3QgaW50byBhIEpTT04gc3RyaW5nXHJcbiAgY29uc3QgZm9ybURhdGFKU09OID0gSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpO1xyXG5cclxuICAvLyBTdG9yZSB0aGUgSlNPTiBkYXRhIGluIGxvY2FsU3RvcmFnZVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb3JtRGF0YScsIGZvcm1EYXRhSlNPTik7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lLWlucHV0JykudmFsdWUgPSAnJztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwtaW5wdXQnKS52YWx1ZSA9ICcnO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlLXRleHRhcmVhJykudmFsdWUgPSAnJztcclxuXHJcbiAgZGlzcGxheUxvY2FsU3RvcmFnZURhdGEoKTsgIC8vIFVwZGF0ZSB0aGUgZGlzcGxheWVkIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXHJcblxyXG4gIG1haW4uYXBwZW5kKGNvbmZpcm1NZXNzYWdlcy5jb25maXJtYXRpb25NZXNzYWdlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lLWlucHV0JykudmFsdWU7XHJcbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbC1pbnB1dCcpLnZhbHVlO1xyXG4gIGNvbnN0IG1lc3NhZ2VUZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlLXRleHRhcmVhJykudmFsdWU7XHJcbiAgY29uc3QgY29uZmlybWF0aW9uTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtYXRpb24tbWVzc2FnZScpO1xyXG4gIGxldCBpc0Zvcm1JbnB1dFZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgaWYgKCFuYW1lSW5wdXQgfHwgbmFtZUlucHV0Lmxlbmd0aCA8IDIpIHtcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yTmFtZS5pbm5lckhUTUwgPSAnWW91ciBOYW1lIGlzIHRvbyBzaG9ydCwgcGxlYXNlIGdpdmUgYSB2YWxpZCBuYW1lISc7XHJcbiAgICBpc0Zvcm1JbnB1dFZhbGlkID0gZmFsc2U7XHJcbiAgfSBlbHNlIGlmICghL15bYS16QS16XSskLy50ZXN0KG5hbWVJbnB1dCkgKSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvck5hbWUuaW5uZXJIVE1MID0gJ1BsZWFzZSBnaXZlIGEgdmFsaWQgbmFtZSEnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBDbGVhciB0aGUgZXJyb3IgbWVzc2FnZSBpZiB0aGUgaW5wdXQgaXMgdmFsaWRcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yTmFtZS5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcblxyXG4gIGlmICghL15bQS1aYS16MC05Ll8lKy1dK0BbQS1aYS16MC05Li1dK1xcLltBLVphLXpdezIsfSQvLnRlc3QoZW1haWxJbnB1dCkpIHtcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwuaW5uZXJIVE1MID0gJ1BsZWFzZSBnaXZlIGEgdmFsaWQgZW1haWwhJztcclxuICAgIGlzRm9ybUlucHV0VmFsaWQgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JFbWFpbC5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcblxyXG4gIGlmICghbWVzc2FnZVRleHRBcmVhfHwgbWVzc2FnZVRleHRBcmVhLmxlbmd0aCA8PSA2KSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvclRleHRBcmVhLmlubmVySFRNTCA9ICdZb3VyIE1lc3NhZ2UgaXMgdG9vIHNob3J0ISc7XHJcbiAgICBpc0Zvcm1JbnB1dFZhbGlkID0gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yVGV4dEFyZWEuaW5uZXJIVE1MID0gJyc7XHJcbiAgfVxyXG5cclxuICBpZiAoY29uZmlybWF0aW9uTWVzc2FnZSkge1xyXG4gICAgY29uZmlybU1lc3NhZ2VzLmNvbmZpcm1hdGlvbk1lc3NhZ2UuaW5uZXJIVE1MID0gJ1lvdSBhcmUgYWxyZWFkeSBzdWJtaXR0ZWQgdGhlIGZvcm0hJztcclxuICB9IGVsc2Uge1xyXG4gICAgY29uZmlybU1lc3NhZ2VzLmNvbmZpcm1hdGlvbk1lc3NhZ2UuaW5uZXJIVE1MID0gYEZvcm0gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseSEgPGJyPlxyXG4gICAgV2Ugd2lsbCBjb250YWN0IHlvdSBhcyBzb29uIGFzIHBvc3NpYmxlLmA7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBpc0Zvcm1JbnB1dFZhbGlkO1xyXG59XHJcblxyXG4vLyBJSUZFIChJbW1lZGlhdGVseSBJbnZva2VkIEZ1bmN0aW9uIEV4cHJlc3Npb24pIGZvciBlbmNhcHN1bGF0aW9uIHB1cnBvc2VcclxuY29uc3QgZXJyb3JNZXNzYWdlcyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZXJyb3JWYWxpZGF0aW9uRm9yTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBlcnJvclZhbGlkYXRpb25Gb3JOYW1lLmlkID0gJ2Vycm9yLW5hbWUnO1xyXG5cclxuICBjb25zdCBlcnJvclZhbGlkYXRpb25Gb3JFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBlcnJvclZhbGlkYXRpb25Gb3JFbWFpbC5pZCA9ICdlcnJvci1lbWFpbCc7XHJcblxyXG4gIGNvbnN0IGVycm9yVmFsaWRhdGlvbkZvclRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGVycm9yVmFsaWRhdGlvbkZvclRleHRBcmVhLmlkID0gJ2Vycm9yLXRleHRhcmVhJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVycm9yVmFsaWRhdGlvbkZvck5hbWUsXHJcbiAgICBlcnJvclZhbGlkYXRpb25Gb3JFbWFpbCxcclxuICAgIGVycm9yVmFsaWRhdGlvbkZvclRleHRBcmVhLFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBjb25maXJtTWVzc2FnZXMgPSAoKCkgPT4ge1xyXG4gIC8vIFNob3dzIGEgY29uZmlybWF0aW9uIG1lc3NhZ2UgdXBvbiBhIHN1Y2Nlc3NmdWwgc3VibWlzc2lvbiBvZiB0aGUgZm9ybVxyXG4gIGNvbnN0IGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25maXJtYXRpb25NZXNzYWdlLmlkID0gJ2NvbmZpcm1hdGlvbi1tZXNzYWdlJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2VcclxuICB9XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TG9jYWxTdG9yYWdlRGF0YSgpIHtcclxuICAvLyBSZXRyaWV2aW5nIHRoZSBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gIGNvbnN0IGxvY2FsU3RvcmFnZURhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9ybURhdGEnKTtcclxuXHJcbiAgaWYgKGxvY2FsU3RvcmFnZURhdGEpIHtcclxuICAgIC8vIFBhcnNpbmcgSlNPTiBzdHJpbmcgaW50byBhIEpTIG9iamVjdFxyXG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlRGF0YSk7XHJcblxyXG4gICAgLy8gbG9ncyB0aGUgc3RvcmVkIGRhdGEgZnJvbSB0aGUgZm9ybVxyXG4gICAgY29uc29sZS5sb2coJ1N0b3JlZCBGb3JtIERhdGE6ICcsIHBhcnNlZERhdGEpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnVGhlcmUgaXNuXFwndCBhbnkgZGF0YSBzdG9yZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2UuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbnRhY3RQYWdlKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cclxuICBtYWluLmFwcGVuZChjcmVhdGVDb250YWN0UGFnZSgpKTtcclxufVxyXG5cclxuIiwiIGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IGhvbWVQYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG9tZVBhZ2VEaXYuaWQgPSAnaG9tZS1wYWdlLWRpdic7XHJcblxyXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICByZXN0YXVyYW50TmFtZS5pZCA9ICdyZXN0YXVyYW50LW5hbWUnO1xyXG4gIHJlc3RhdXJhbnROYW1lLmlubmVySFRNTCA9IGBXZWxjb21lIHRvIE9rb25vbWkgRmxhdm9yczxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJyZXN0YXVyYW50LXR5cGVcIj5UcmFkaXRpb25hbCBKYXBhbmVzZSBSZXN0YXVyYW50PC9zcGFuPmA7XHJcblxyXG4gIGNvbnN0IGhvbWVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG9tZVBhcmFncmFwaC5pZCA9ICdob21lLXBhcmFncmFwaCc7XHJcbiAgaG9tZVBhcmFncmFwaC5pbm5lckhUTUwgPSBgXHJcbiAgVGhlIGFydCBvZiBjcmFmdGluZyBtb3V0aHdhdGVyaW5nIG9rb25vbWl5YWtpIGhhcyBcclxuICBiZWVuIG91ciBwYXNzaW9uIGFuZCB0cmFkaXRpb24gc2luY2UgMTkwMC4gXHJcbiAgV2l0aCBvdmVyIGEgY2VudHVyeSBvZiBkZWRpY2F0ZWQgc2VydmljZSwgXHJcbiAgd2UgdGFrZSBpbW1lbnNlIHByaWRlIGluIG91ciBjb21taXRtZW50IHRvIGRlbGl2ZXJpbmcgXHJcbiAgbm90IG9ubHkgdGhlIGZpbmVzdCBmbGF2b3JzIGJ1dCBhbHNvIHRoZSB3YXJtZXN0IGhvc3BpdGFsaXR5IHRvIG91ciBcclxuICBjaGVyaXNoZWQgY3VzdG9tZXJzLiA8YnI+PGJyPlxyXG4gIFxyXG4gIEZvciBnZW5lcmF0aW9ucywgb3VyIGZhbWlseS1vd25lZCBlc3RhYmxpc2htZW50IGhhcyBcclxuICBwZXJmZWN0ZWQgdGhlIGRlbGljYXRlIGJhbGFuY2Ugb2Ygc2F2b3J5IGFuZCBzd2VldCwgY3Jpc3B5IGFuZCB0ZW5kZXIsIFxyXG4gIHRoYXQgZGVmaW5lcyB0aGUgZXNzZW5jZSBvZiBva29ub21peWFraS4gRXZlcnkgZGlzaCB3ZSBjcmVhdGUgaXMgXHJcbiAgYSBsYWJvciBvZiBsb3ZlLCBwYXNzZWQgZG93biB0aHJvdWdoIHRoZSB5ZWFycywgcHJlc2VydmluZyB0aGUgYXV0aGVudGljaXR5IFxyXG4gIGFuZCB0aW1lLWhvbm9yZWQgdGVjaG5pcXVlcyB0aGF0IGhhdmUgbWFkZSB1cyBhIGJlbG92ZWQgY3VsaW5hcnkgZGVzdGluYXRpb24uYDtcclxuXHJcbiAgY29uc3Qgd29ya1NjaGVkdWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd29ya1NjaGVkdWxlRGl2LmlkID0gJ3dvcmstc2NoZWR1bGUtZGl2JztcclxuICBcclxuICBjb25zdCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBob3Vyc1RpdGxlLmlkID0gJ2hvdXJzLWgyJztcclxuICBob3Vyc1RpdGxlLnRleHRDb250ZW50ID0gJ1dvcmtpbmcgSG91cnMnO1xyXG5cclxuICAvLyBUaW1lIFNjaGVkdWxlIGZvciByZXN0YXVyYW50XHJcbiAgY29uc3QgaG91cnNNb25kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNNb25kYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc01vbmRheS50ZXh0Q29udGVudCA9ICdNb25kYXk6IDEwOjAwIC0gMjE6MDAnO1xyXG4gIGNvbnN0IGhvdXJzVHVlc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob3Vyc1R1ZXNkYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc1R1ZXNkYXkudGV4dENvbnRlbnQgPSAnVHVlc2RheTogMTA6MDAgLSAyMTowMCc7XHJcbiAgY29uc3QgaG91cnNXZWRuZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNXZWRuZXNkYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc1dlZG5lc2RheS50ZXh0Q29udGVudCA9ICdXZWRuZXNkYXk6IDEwOjAwIC0gMjE6MDAnO1xyXG4gIGNvbnN0IGhvdXJzVGh1cnNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNUaHVyc2RheS5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIGhvdXJzVGh1cnNkYXkudGV4dENvbnRlbnQgPSAnVGh1cnNkYXk6IDEwOjAwIC0gMjE6MDAnO1xyXG4gIGNvbnN0IGhvdXJzRnJpZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJzRnJpZGF5LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgaG91cnNGcmlkYXkudGV4dENvbnRlbnQgPSAnRnJpZGF5OiAxMDowMCAtIDIxOjAwJztcclxuICBjb25zdCBob3Vyc1NhdHVyZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJzU2F0dXJkYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc1NhdHVyZGF5LnRleHRDb250ZW50ID0gJ1NhdHVyZGF5OiAxMDowMCAtIDE4OjAwJztcclxuXHJcbiAgd29ya1NjaGVkdWxlRGl2LmFwcGVuZChob3Vyc1RpdGxlLCBob3Vyc01vbmRheSwgaG91cnNUdWVzZGF5LCBob3Vyc1dlZG5lc2RheSwgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaG91cnNUaHVyc2RheSwgaG91cnNGcmlkYXksIGhvdXJzU2F0dXJkYXkpO1xyXG4gIGhvbWVQYWdlRGl2LmFwcGVuZChyZXN0YXVyYW50TmFtZSwgaG9tZVBhcmFncmFwaCwgd29ya1NjaGVkdWxlRGl2KTtcclxuICBcclxuICByZXR1cm4gaG9tZVBhZ2VEaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cclxubWFpbi5hcHBlbmQoY3JlYXRlSG9tZVBhZ2UoKSk7XHJcbn1cclxuIiwiaW1wb3J0IGZpcnN0UHJvZHVjdEltYWdlIGZyb20gJy4vYXNzZXRzL2ZpcnN0LXByb2R1Y3QucG5nJztcclxuaW1wb3J0IHNlY29uZFByb2R1Y3RJbWFnZSBmcm9tICcuL2Fzc2V0cy9zZWNvbmQtcHJvZHVjdC5wbmcnO1xyXG5pbXBvcnQgdGhpcmRQcm9kdWN0SW1hZ2UgZnJvbSAnLi9hc3NldHMvdGhpcmQtcHJvZHVjdC5wbmcnO1xyXG5pbXBvcnQgZm91cnRoUHJvZHVjdEltYWdlIGZyb20gJy4vYXNzZXRzL2ZvdXJ0aC1wcm9kdWN0LnBuZyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcclxuICAvLyBDcmVhdGUgYSBjb250YWluZXIgdG8gYXBwZW5kIGFsbCB0aGUgcHJvZHVjdHMgZm9yIHRoZSBtZW51XHJcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lbnVDb250YWluZXIuaWQgPSAnbWVudS1kaXYnO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmFwcGVuZChcclxuICAgIGNyZWF0ZVByb2R1Y3QoXHJcbiAgICAgICdTYW11cmFpIEJhY29uJyxcclxuICAgICAgZmlyc3RQcm9kdWN0SW1hZ2UsXHJcbiAgICAgICdUZXN0aW5nIERlc2NyaXB0aW9uIExvcmVtIElwc3VtJyxcclxuICAgICAgJzUuNzAkJ1xyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kKFxyXG4gICAgY3JlYXRlUHJvZHVjdChcclxuICAgICAgJ0Z1amkgc2Vuc2F0aW9uJyxcclxuICAgICAgc2Vjb25kUHJvZHVjdEltYWdlLFxyXG4gICAgICAnVGVzdGluZyBEZXNjcmlwdGlvbiBMb3JlbSBJcHN1bScsXHJcbiAgICAgICc3LjUwJCdcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmFwcGVuZChcclxuICAgIGNyZWF0ZVByb2R1Y3QoXHJcbiAgICAgICdOaW5qYSB3YXknLFxyXG4gICAgICB0aGlyZFByb2R1Y3RJbWFnZSxcclxuICAgICAgJ1Rlc3RpbmcgRGVzY3JpcHRpb24gTG9yZW0gSXBzdW0nLFxyXG4gICAgICAnNi45MCQnXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICBjcmVhdGVQcm9kdWN0KFxyXG4gICAgICAnU2hyaW1wIGVydXB0aW9uJyxcclxuICAgICAgZm91cnRoUHJvZHVjdEltYWdlLFxyXG4gICAgICAnVGVzdGluZyBEZXNjcmlwdGlvbiBMb3JlbSBJcHN1bScsXHJcbiAgICAgICc5LjYwJCdcclxuICAgIClcclxuICApO1xyXG5cclxuICByZXR1cm4gbWVudUNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvZHVjdChwcm9kdWN0VGl0bGUsIHByb2R1Y3RJbWFnZVBhdGgsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xyXG4gIGNvbnN0IHByb2R1Y3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcHJvZHVjdENhcmQuaWQgPSAncHJvZHVjdC1jYXJkJztcclxuXHJcbiAgY29uc3QgcHJvZHVjdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgcHJvZHVjdEltYWdlLmlkID0gJ3Byb2R1Y3QtaW1nJztcclxuICBwcm9kdWN0SW1hZ2Uuc3JjID0gcHJvZHVjdEltYWdlUGF0aDtcclxuICBwcm9kdWN0SW1hZ2UuYWx0ID0gcHJvZHVjdFRpdGxlO1xyXG5cclxuICBjb25zdCBwcm9kdWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgcHJvZHVjdE5hbWUuaWQgPSAncHJvZHVjdC10aXRsZSc7XHJcbiAgcHJvZHVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9kdWN0VGl0bGU7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwcm9kdWN0RGVzY3JpcHRpb24uaWQgPSAncHJvZHVjdC1kZXNjcmlwdGlvbic7XHJcbiAgcHJvZHVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwcm9kdWN0UHJpY2UuaWQgPSAncHJvZHVjdC1wcmljZSc7XHJcbiAgcHJvZHVjdFByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XHJcblxyXG4gIHByb2R1Y3RDYXJkLmFwcGVuZChwcm9kdWN0SW1hZ2UpO1xyXG4gIHByb2R1Y3RDYXJkLmFwcGVuZChwcm9kdWN0TmFtZSk7XHJcbiAgcHJvZHVjdENhcmQuYXBwZW5kKHByb2R1Y3REZXNjcmlwdGlvbik7XHJcbiAgcHJvZHVjdENhcmQuYXBwZW5kKHByb2R1Y3RQcmljZSk7XHJcblxyXG4gIHJldHVybiBwcm9kdWN0Q2FyZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZW51UGFnZSgpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuXHJcbiAgbWFpbi5hcHBlbmQoY3JlYXRlTWVudVBhZ2UoKSk7XHJcbn0iLCJpbXBvcnQgeyBsb2FkSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IGxvYWRNZW51UGFnZSB9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IHsgbG9hZENvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgaG9tZUJhY2tncm91bmRQaWMgZnJvbSAnLi9hc3NldHMvZGFuaWVsZS1zYWx1dGFyaS1yZXN0YXVyYW50LWhvbWUucG5nJztcclxuaW1wb3J0IGNvbnRhY3RCYWNrZ3JvdW5kUGljIGZyb20gJy4vYXNzZXRzL2NvbnRhY3QtdXMucG5nJztcclxuaW1wb3J0IGxvZ29QaWMgZnJvbSAnLi9hc3NldHMvb2tvbm9taS1sb2dvLnBuZyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XHJcblxyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBsb2dvLmlkID0gJ2xvZ28nO1xyXG4gIGxvZ28uc3JjID0gbG9nb1BpYztcclxuICBsb2dvLmFsdCA9ICdMT0dPJztcclxuXHJcbiAgaGVhZGVyLmFwcGVuZChsb2dvKTtcclxuICBoZWFkZXIuYXBwZW5kKGNyZWF0ZU5hdigpKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIG5hdi5pZCA9ICduYXYnO1xyXG5cclxuICBjb25zdCBob21lTmF2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgaG9tZU5hdkJ0bi5pZCA9ICdob21lLWJ0bic7XHJcbiAgaG9tZU5hdkJ0bi50ZXh0Q29udGVudCA9ICdIT01FJztcclxuXHJcbiAgY29uc3QgbWVudU5hdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIG1lbnVOYXZCdG4uaWQgPSAnbWVudS1idG4nO1xyXG4gIG1lbnVOYXZCdG4udGV4dENvbnRlbnQgPSAnTUVOVSc7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3ROYXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb250YWN0TmF2QnRuLmlkID0gJ2NvbnRhY3QtYnRuJztcclxuICBjb250YWN0TmF2QnRuLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QgVVMnO1xyXG5cclxuICBuYXYuYXBwZW5kKGhvbWVOYXZCdG4pO1xyXG4gIG5hdi5hcHBlbmQobWVudU5hdkJ0bik7XHJcbiAgbmF2LmFwcGVuZChjb250YWN0TmF2QnRuKTtcclxuXHJcbiAgcmV0dXJuIG5hdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIG1haW4uaWQgPSAnbWFpbic7XHJcblxyXG4gIHJldHVybiBtYWluO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgZm9vdGVyLmlkID0gJ2Zvb3Rlcic7XHJcblxyXG4gIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZvb3RlckRpdi5pZCA9ICdmb290ZXItZGl2JztcclxuXHJcbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqknO1xyXG5cclxuICBjb25zdCBhdXRob3JOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGF1dGhvck5hbWUudGV4dENvbnRlbnQgPSAnSm9yZGFuIFBhcGFkaXRzYXMnO1xyXG5cclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgY29uc3QgZ2l0SHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBnaXRIdWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2pvcmRhbnBhcGFkaXRzYXMnO1xyXG5cclxuICBjb25zdCBnaXRIdWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGdpdEh1Ykljb24uY2xhc3NMaXN0LmFkZCgnZmEtYnJhbmRzJywgJ2ZhLWdpdGh1YicpO1xyXG5cclxuICBmb290ZXJEaXYuYXBwZW5kKGNvcHlyaWdodCwgYXV0aG9yTmFtZSwgY3VycmVudERhdGUsIGdpdEh1YkxpbmspO1xyXG4gIGdpdEh1YkxpbmsuYXBwZW5kKGdpdEh1Ykljb24pO1xyXG4gIGZvb3Rlci5hcHBlbmQoZm9vdGVyRGl2KTtcclxuXHJcbiAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqICBGdW5jdGlvbiBmb3Igc3dpdGNoaW5nIGJldHdlZW4gbmF2YmFyIHRhYnNcclxuICovXHJcbmZ1bmN0aW9uIGJyb3dzZU5hdlRhYnMoKSB7XHJcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG4gIGNvbnN0IGhvbWVCYWNrZ3JvdW5kSW1hZ2UgPSBob21lQmFja2dyb3VuZFBpYztcclxuICBjb25zdCBjb250YWN0QmFja2dyb3VuZEltYWdlID0gY29udGFjdEJhY2tncm91bmRQaWM7XHJcblxyXG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2hvbWUtYnRuJykge1xyXG4gICAgICAgIGNsZWFuTWFpbigpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2hvbWVCYWNrZ3JvdW5kSW1hZ2V9KWA7XHJcbiAgICAgICAgbG9hZEhvbWVQYWdlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnbWVudS1idG4nKSB7XHJcbiAgICAgICAgY2xlYW5NYWluKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XHJcbiAgICAgICAgbG9hZE1lbnVQYWdlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnY29udGFjdC1idG4nKSB7XHJcbiAgICAgICAgY2xlYW5NYWluKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y29udGFjdEJhY2tncm91bmRJbWFnZX0pYDtcclxuICAgICAgICBsb2FkQ29udGFjdFBhZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFuTWFpbigpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuICBtYWluLnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gIHJldHVybiBtYWluO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZUhlYWRlcigpKTtcclxuICBjb250ZW50LmFwcGVuZChjcmVhdGVNYWluKCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZUZvb3RlcigpKTtcclxuICBsb2FkSG9tZVBhZ2UoKTtcclxuICBicm93c2VOYXZUYWJzKCk7XHJcblxyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBsb2FkUGFnZSB9IGZyb20gJy4vcGFnZS1zdHJ1Y3R1cmUnO1xyXG5pbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XHJcblxyXG5sb2FkUGFnZSgpO1xyXG5cclxuLy8gVGFza3M6IFxyXG4vLyBBZGQgbW9yZSBpbmZvcm1hdGlvbiBpbiBDb250YWN0IFVzIHBhZ2VcclxuLy8gQ29tcGxldGUgdGhlIENTUyBzdHlsaW5nIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9