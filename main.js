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
// Edit contact info div
// Improve and edit menu page
// Add hover effects in the elements
// Create media queries
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHdLQUFpRTtBQUM3Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9GQUFvRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sT0FBTyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssZ0NBQWdDLGtDQUFrQywwQkFB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Q2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsR0FBRztBQUN2RDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQTRDO0FBQ25CO0FBQ3pCO0FBQ0EseURBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL3NyYy9wYWdlLXN0cnVjdHVyZS5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2RhbmllbGUtc2FsdXRhcmktcmVzdGF1cmFudC1ob21lLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tdGV4dC1jb2xvci13aGl0ZTogI2ZhZmFmYTtcclxuICAtLWNvbG9yLWJsYWNrOiAjMDAwO1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4jbG9nbyB7XHJcbiAgd2lkdGg6IDE2cmVtO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDdyZW07XHJcbn1cclxuXHJcbiNob21lLWJ0bixcclxuI21lbnUtYnRuLFxyXG4jY29udGFjdC1idG4ge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiNyZXN0YXVyYW50LW5hbWUge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyLjJyZW07XHJcbn1cclxuXHJcbiNyZXN0YXVyYW50LXR5cGUge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbiNob21lLXBhZ2UtZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDNyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XHJcbn1cclxuXHJcbiNob21lLXBhcmFncmFwaCB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDQwJTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcblxyXG4jd29yay1zY2hlZHVsZS1kaXYge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAxMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuI2hvdXJzLWgyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbiNtZW51LWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBnYXA6IDVyZW07XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoOCwgOCwgOCwgMC4yKSwgcmdiKDEyLCAxLCAxLCAwLjgpKTtcclxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xyXG59XHJcblxyXG4jcHJvZHVjdC1pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1JTtcclxuICB3aWR0aDogMTByZW07XHJcbn1cclxuXHJcbiNwcm9kdWN0LWNhcmQge1xyXG4gIGdhcDogMnJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNwcm9kdWN0LWRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuI3Byb2R1Y3QtcHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG4jY29udGFjdC1wYWdlLWNvbnRhaW5lciB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gIFwiYXNpZGUgbWFpblwiXHJcbiAgXCJhc2lkZSBtYWluXCJcclxuICBcImFzaWRlIG1haW5cIjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcclxuICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cclxufVxyXG5cclxuI2NvbnRhY3QtdXMtdGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgZ3JpZC1hcmVhOiBtYWluO1xyXG59XHJcblxyXG4jY29udGFjdC1pbmZvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWFyZWE6IGFzaWRlO1xyXG4gIGdhcDogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIxLCAxMCwgMTApO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICB3aWR0aDogMTVyZW07XHJcbiAgaGVpZ2h0OiAxMHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbn1cclxuXHJcbiNsb2NhdGlvbi1jb250YWluZXIsIFxyXG4jcGhvbmUtbnVtYmVyLWNvbnRhaW5lcixcclxuI2VtYWlsLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbiNjb250YWN0LWZvcm0tY29udGFpbmVyIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxuICBncmlkLWFyZWE6IG1haW47XHJcbn1cclxuXHJcbiNjb250YWN0LWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbiNjb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcclxuICB3aWR0aDogMThyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LWluZGVudDogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4jY29udGFjdC1mb3JtIHRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4jY29udGFjdC1mb3JtIGlucHV0OmZvY3VzLCAjY29udGFjdC1mb3JtIHRleHRhcmVhOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYigxMzEsIDEwLCAxMCk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDVweCA1cHggMHB4ICMzZDAzMDM7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuI3N1Ym1pdC1idG4tY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZ3JpZC1hcmVhOiBtYWluO1xyXG4gIGdyaWQtcm93OiA0LzQ7XHJcbn1cclxuXHJcbiNzdWJtaXQtYnRuIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB3aWR0aDogMTByZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkMGQwZDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbiNjb25maXJtYXRpb24tbWVzc2FnZSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBhbmltYXRpb246IGZhZGVJbiAwLjhzO1xyXG59XHJcblxyXG4jZXJyb3ItbmFtZSxcclxuI2Vycm9yLWVtYWlsLFxyXG4jZXJyb3ItdGV4dGFyZWEge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIFxyXG4jZm9vdGVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ibGFjayk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4jZm9vdGVyLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZ2FwOiAwLjNyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG59XHJcblxyXG4uZmEtYnJhbmRzIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbn1cclxuXHJcbi8qIEhvdmVyIEVmZmVjdHMgKi9cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFB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QzlCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7RUFDcEMsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXRleHQtY29sb3Itd2hpdGU6ICNmYWZhZmE7XFxyXFxuICAtLWNvbG9yLWJsYWNrOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9kYW5pZWxlLXNhbHV0YXJpLXJlc3RhdXJhbnQtaG9tZS5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICB3aWR0aDogMTZyZW07XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWUtYnRuLFxcclxcbiNtZW51LWJ0bixcXHJcXG4jY29udGFjdC1idG4ge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzdGF1cmFudC1uYW1lIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzdGF1cmFudC10eXBlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWUtcGFnZS1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWUtcGFyYWdyYXBoIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1heC13aWR0aDogNDAlO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jd29yay1zY2hlZHVsZS1kaXYge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgaGVpZ2h0OiAxMnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvdXJzLWgyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudS1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVyZW07XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg4LCA4LCA4LCAwLjIpLCByZ2IoMTIsIDEsIDEsIDAuOCkpO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2R1Y3QtaW1nIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDM1JTtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2R1Y3QtY2FyZCB7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2R1Y3QtZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbiNwcm9kdWN0LXByaWNlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1wYWdlLWNvbnRhaW5lciB7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgXFxcImFzaWRlIG1haW5cXFwiXFxyXFxuICBcXFwiYXNpZGUgbWFpblxcXCJcXHJcXG4gIFxcXCJhc2lkZSBtYWluXFxcIjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxyXFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtdXMtdGl0bGUge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGdyaWQtYXJlYTogbWFpbjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtaW5mby1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtYXJlYTogYXNpZGU7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIxLCAxMCwgMTApO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgd2lkdGg6IDE1cmVtO1xcclxcbiAgaGVpZ2h0OiAxMHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvY2F0aW9uLWNvbnRhaW5lciwgXFxyXFxuI3Bob25lLW51bWJlci1jb250YWluZXIsXFxyXFxuI2VtYWlsLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbiAgZ3JpZC1hcmVhOiBtYWluO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1mb3JtIGlucHV0LCB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogMThyZW07XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWluZGVudDogMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWZvcm0gdGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMHJlbTtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWZvcm0gaW5wdXQ6Zm9jdXMsICNjb250YWN0LWZvcm0gdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYigxMzEsIDEwLCAxMCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggNXB4IDVweCAwcHggIzNkMDMwMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtYnRuLWNvbnRhaW5lciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBncmlkLWFyZWE6IG1haW47XFxyXFxuICBncmlkLXJvdzogNC80O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJ0biB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGQwZDBkO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbmZpcm1hdGlvbi1tZXNzYWdlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAwLjhzO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3ItbmFtZSxcXHJcXG4jZXJyb3ItZW1haWwsXFxyXFxuI2Vycm9yLXRleHRhcmVhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuIFxcclxcbiNmb290ZXIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3Rlci1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGdhcDogMC4zcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtYnJhbmRzIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSG92ZXIgRWZmZWN0cyAqL1xcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RQYWdlKCkge1xyXG4gIC8vIENyZWF0ZSBhIGNvbnRhaW5lciBmb3IgYXBwZW5kaW5nIGFsbCB0aGUgY29udGFjdC1wYWdlIGVsZW1lbnRzIG9uIGl0XHJcbiAgY29uc3QgY29udGFjdFBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWN0UGFnZUNvbnRhaW5lci5pZCA9ICdjb250YWN0LXBhZ2UtY29udGFpbmVyJztcclxuXHJcbiAgY29uc3QgY29udGFjdFVzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGNvbnRhY3RVc1RpdGxlLmlkID0gJ2NvbnRhY3QtdXMtdGl0bGUnO1xyXG4gIGNvbnRhY3RVc1RpdGxlLnRleHRDb250ZW50ID0gJ1NlbmQgdXMgeW91ciBtZXNzYWdlJztcclxuXHJcbiAgY29uc3Qgc3VibWl0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc3VibWl0QnRuQ29udGFpbmVyLmlkID0gJ3N1Ym1pdC1idG4tY29udGFpbmVyJztcclxuXHJcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgc3VibWl0QnRuLmlkID0gJ3N1Ym1pdC1idG4nO1xyXG4gIHN1Ym1pdEJ0bi52YWx1ZSA9ICdpbnNlcnQnO1xyXG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xyXG5cclxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRGb3JtKTtcclxuXHJcbiAgc3VibWl0QnRuQ29udGFpbmVyLmFwcGVuZChzdWJtaXRCdG4pO1xyXG4gIGNvbnRhY3RQYWdlQ29udGFpbmVyLmFwcGVuZChjcmVhdGVDb250YWN0SW5mbygpLCBjb250YWN0VXNUaXRsZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRm9ybSgpLCBzdWJtaXRCdG5Db250YWluZXIpO1xyXG5cclxuICByZXR1cm4gY29udGFjdFBhZ2VDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RJbmZvKCkge1xyXG4gIGNvbnN0IGNvbnRhY3RJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFjdEluZm9Db250YWluZXIuaWQgPSAnY29udGFjdC1pbmZvLWNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbG9jYXRpb25Db250YWluZXIuaWQgPSAnbG9jYXRpb24tY29udGFpbmVyJztcclxuICBjb25zdCBsb2NhdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgbG9jYXRpb25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWxvY2F0aW9uLWRvdCcpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGxvY2F0aW9uLmlkID0gJ2xvY2F0aW9uJztcclxuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9ICd4eHh4eCB4eHh4eHh4eCAxMCc7XHJcbiAgXHJcbiAgY29uc3QgcGhvbmVOdW1iZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwaG9uZU51bWJlckNvbnRhaW5lci5pZCA9ICdwaG9uZS1udW1iZXItY29udGFpbmVyJztcclxuICBjb25zdCBwaG9uZU51bWJlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgcGhvbmVOdW1iZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXBob25lJyk7XHJcbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgcGhvbmVOdW1iZXIuaWQgPSAncGhvbmUtbnVtYmVyJztcclxuICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9ICcrMzAgNjk4eHh4eHh4eHgnO1xyXG5cclxuICBjb25zdCBlbWFpbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVtYWlsQ29udGFpbmVyLmlkID0gJ2VtYWlsLWNvbnRhaW5lcic7XHJcbiAgY29uc3QgZW1haWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGVtYWlsSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1lbnZlbG9wZScpO1xyXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGVtYWlsLmlkID0gJ2VtYWlsJztcclxuICBlbWFpbC50ZXh0Q29udGVudCA9ICdvX2ZfSlBAZ21haWwuY29tJztcclxuICBcclxuICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmQobG9jYXRpb25JY29uLCBsb2NhdGlvbik7XHJcbiAgcGhvbmVOdW1iZXJDb250YWluZXIuYXBwZW5kKHBob25lTnVtYmVySWNvbiwgcGhvbmVOdW1iZXIpO1xyXG4gIGVtYWlsQ29udGFpbmVyLmFwcGVuZChlbWFpbEljb24sIGVtYWlsKTtcclxuXHJcbiAgY29udGFjdEluZm9Db250YWluZXIuYXBwZW5kKGxvY2F0aW9uQ29udGFpbmVyLCBwaG9uZU51bWJlckNvbnRhaW5lciwgZW1haWxDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gY29udGFjdEluZm9Db250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XHJcbiAgY29uc3QgY29udGFjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWN0Rm9ybUNvbnRhaW5lci5pZCA9ICdjb250YWN0LWZvcm0tY29udGFpbmVyJztcclxuXHJcbiAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgY29udGFjdEZvcm0uaWQgPSAnY29udGFjdC1mb3JtJztcclxuICBjb250YWN0Rm9ybS5tZXRob2QgPSAnUE9TVCc7XHJcblxyXG4gIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuYW1lRGl2LmlkID0gJ25hbWUtZGl2JztcclxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIG5hbWVJbnB1dC5pZCA9ICduYW1lLWlucHV0JztcclxuICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBuYW1lSW5wdXQubmFtZSA9ICduYW1lJztcclxuICBuYW1lSW5wdXQuYXV0b2NvbXBsZXRlID0gJ29uJztcclxuICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnTmFtZSc7XHJcbiAgXHJcbiAgY29uc3QgZW1haWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlbWFpbERpdi5pZCA9ICdlbWFpbC1kaXYnO1xyXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGVtYWlsSW5wdXQuaWQgPSAnZW1haWwtaW5wdXQnO1xyXG4gIGVtYWlsSW5wdXQudHlwZSA9ICdlbWFpbCc7XHJcbiAgZW1haWxJbnB1dC5uYW1lID0gJ2VtYWlsJztcclxuICBlbWFpbElucHV0LmF1dG9jb21wbGV0ZSA9ICdvbic7XHJcbiAgZW1haWxJbnB1dC5wbGFjZWhvbGRlciA9ICdFbWFpbCc7XHJcbiAgXHJcbiAgY29uc3QgbWVzc2FnZUJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lc3NhZ2VCb3hEaXYuaWQgPSAnbWVzc2FnZS1ib3gtZGl2JztcclxuICBjb25zdCBtZXNzYWdlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICBtZXNzYWdlQm94LmlkID0gJ21lc3NhZ2UtdGV4dGFyZWEnO1xyXG4gIG1lc3NhZ2VCb3gubmFtZSA9ICdtZXNzYWdlLXRleHQnO1xyXG4gIG1lc3NhZ2VCb3gucGxhY2Vob2xkZXIgPSAnTWVzc2FnZSc7XHJcbiAgXHJcbiAgbmFtZURpdi5hcHBlbmQobmFtZUlucHV0KTtcclxuICBlbWFpbERpdi5hcHBlbmQoZW1haWxJbnB1dCk7XHJcbiAgbWVzc2FnZUJveERpdi5hcHBlbmQobWVzc2FnZUJveCk7XHJcblxyXG4gIGNvbnRhY3RGb3JtLmFwcGVuZChuYW1lRGl2LCBlbWFpbERpdiwgbWVzc2FnZUJveERpdiwgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JOYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwsIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yVGV4dEFyZWEpO1xyXG4gIGNvbnRhY3RGb3JtQ29udGFpbmVyLmFwcGVuZChjb250YWN0Rm9ybSk7XHJcblxyXG4gIHJldHVybiBjb250YWN0Rm9ybUNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0Rm9ybSgpIHtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtaW5wdXQnKS52YWx1ZTtcclxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbC1pbnB1dCcpLnZhbHVlO1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZS10ZXh0YXJlYScpLnZhbHVlO1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cclxuICAvLyBNYWtpbmcgdGhlIHZhbGlkYXRpb24gYmVmb3JlIHN1Ym1pdHRpbmcgdGhlIGZvcm0sIGFuZCBzdG9wcyBpZiBzb21ldGhpbmcgaXMgd3JvbmdcclxuICBpZiAoIXZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlIGRhdGEgdGFrZW4gZnJvbSB0aGUgZm9ybVxyXG4gIGNvbnN0IGZvcm1EYXRhID0ge1xyXG4gICAgbmFtZTogbmFtZSxcclxuICAgIGVtYWlsOiBlbWFpbCxcclxuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgfTtcclxuXHJcbiAgLy8gQ29udmVydCB0aGUgZm9ybURhdGEgb2JqZWN0IGludG8gYSBKU09OIHN0cmluZ1xyXG4gIGNvbnN0IGZvcm1EYXRhSlNPTiA9IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKTtcclxuXHJcbiAgLy8gU3RvcmUgdGhlIEpTT04gZGF0YSBpbiBsb2NhbFN0b3JhZ2VcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybURhdGEnLCBmb3JtRGF0YUpTT04pO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1pbnB1dCcpLnZhbHVlID0gJyc7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsLWlucHV0JykudmFsdWUgPSAnJztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZS10ZXh0YXJlYScpLnZhbHVlID0gJyc7XHJcblxyXG4gIGRpc3BsYXlMb2NhbFN0b3JhZ2VEYXRhKCk7ICAvLyBVcGRhdGUgdGhlIGRpc3BsYXllZCBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxyXG5cclxuICBtYWluLmFwcGVuZChjb25maXJtTWVzc2FnZXMuY29uZmlybWF0aW9uTWVzc2FnZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcclxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1pbnB1dCcpLnZhbHVlO1xyXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwtaW5wdXQnKS52YWx1ZTtcclxuICBjb25zdCBtZXNzYWdlVGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZS10ZXh0YXJlYScpLnZhbHVlO1xyXG4gIGNvbnN0IGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybWF0aW9uLW1lc3NhZ2UnKTtcclxuICBsZXQgaXNGb3JtSW5wdXRWYWxpZCA9IHRydWU7XHJcblxyXG4gIGlmICghbmFtZUlucHV0IHx8IG5hbWVJbnB1dC5sZW5ndGggPCAyKSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvck5hbWUuaW5uZXJIVE1MID0gJ1lvdXIgTmFtZSBpcyB0b28gc2hvcnQsIHBsZWFzZSBnaXZlIGEgdmFsaWQgbmFtZSEnO1xyXG4gICAgaXNGb3JtSW5wdXRWYWxpZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAoIS9eW2EtekEtel0rJC8udGVzdChuYW1lSW5wdXQpICkge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JOYW1lLmlubmVySFRNTCA9ICdQbGVhc2UgZ2l2ZSBhIHZhbGlkIG5hbWUhJztcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gQ2xlYXIgdGhlIGVycm9yIG1lc3NhZ2UgaWYgdGhlIGlucHV0IGlzIHZhbGlkXHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvck5hbWUuaW5uZXJIVE1MID0gJyc7XHJcbiAgfVxyXG5cclxuICBpZiAoIS9eW0EtWmEtejAtOS5fJSstXStAW0EtWmEtejAtOS4tXStcXC5bQS1aYS16XXsyLH0kLy50ZXN0KGVtYWlsSW5wdXQpKSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvckVtYWlsLmlubmVySFRNTCA9ICdQbGVhc2UgZ2l2ZSBhIHZhbGlkIGVtYWlsISc7XHJcbiAgICBpc0Zvcm1JbnB1dFZhbGlkID0gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgfVxyXG5cclxuICBpZiAoIW1lc3NhZ2VUZXh0QXJlYXx8IG1lc3NhZ2VUZXh0QXJlYS5sZW5ndGggPD0gNikge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYS5pbm5lckhUTUwgPSAnWW91ciBNZXNzYWdlIGlzIHRvbyBzaG9ydCEnO1xyXG4gICAgaXNGb3JtSW5wdXRWYWxpZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvclRleHRBcmVhLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbmZpcm1hdGlvbk1lc3NhZ2UpIHtcclxuICAgIGNvbmZpcm1NZXNzYWdlcy5jb25maXJtYXRpb25NZXNzYWdlLmlubmVySFRNTCA9ICdZb3UgYXJlIGFscmVhZHkgc3VibWl0dGVkIHRoZSBmb3JtISc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbmZpcm1NZXNzYWdlcy5jb25maXJtYXRpb25NZXNzYWdlLmlubmVySFRNTCA9IGBGb3JtIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkhIDxicj5cclxuICAgIFdlIHdpbGwgY29udGFjdCB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS5gO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gaXNGb3JtSW5wdXRWYWxpZDtcclxufVxyXG5cclxuLy8gSUlGRSAoSW1tZWRpYXRlbHkgSW52b2tlZCBGdW5jdGlvbiBFeHByZXNzaW9uKSBmb3IgZW5jYXBzdWxhdGlvbiBwdXJwb3NlXHJcbmNvbnN0IGVycm9yTWVzc2FnZXMgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGVycm9yVmFsaWRhdGlvbkZvck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZXJyb3JWYWxpZGF0aW9uRm9yTmFtZS5pZCA9ICdlcnJvci1uYW1lJztcclxuXHJcbiAgY29uc3QgZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwuaWQgPSAnZXJyb3ItZW1haWwnO1xyXG5cclxuICBjb25zdCBlcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBlcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYS5pZCA9ICdlcnJvci10ZXh0YXJlYSc7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlcnJvclZhbGlkYXRpb25Gb3JOYW1lLFxyXG4gICAgZXJyb3JWYWxpZGF0aW9uRm9yRW1haWwsXHJcbiAgICBlcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYSxcclxuICB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgY29uZmlybU1lc3NhZ2VzID0gKCgpID0+IHtcclxuICAvLyBTaG93cyBhIGNvbmZpcm1hdGlvbiBtZXNzYWdlIHVwb24gYSBzdWNjZXNzZnVsIHN1Ym1pc3Npb24gb2YgdGhlIGZvcm1cclxuICBjb25zdCBjb25maXJtYXRpb25NZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uZmlybWF0aW9uTWVzc2FnZS5pZCA9ICdjb25maXJtYXRpb24tbWVzc2FnZSc7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb25maXJtYXRpb25NZXNzYWdlXHJcbiAgfVxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUxvY2FsU3RvcmFnZURhdGEoKSB7XHJcbiAgLy8gUmV0cmlldmluZyB0aGUgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBsb2NhbFN0b3JhZ2VEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm1EYXRhJyk7XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2VEYXRhKSB7XHJcbiAgICAvLyBQYXJzaW5nIEpTT04gc3RyaW5nIGludG8gYSBKUyBvYmplY3RcclxuICAgIGNvbnN0IHBhcnNlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZURhdGEpO1xyXG5cclxuICAgIC8vIGxvZ3MgdGhlIHN0b3JlZCBkYXRhIGZyb20gdGhlIGZvcm1cclxuICAgIGNvbnNvbGUubG9nKCdTdG9yZWQgRm9ybSBEYXRhOiAnLCBwYXJzZWREYXRhKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ1RoZXJlIGlzblxcJ3QgYW55IGRhdGEgc3RvcmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlLicpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0UGFnZSgpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuXHJcbiAgbWFpbi5hcHBlbmQoY3JlYXRlQ29udGFjdFBhZ2UoKSk7XHJcbn1cclxuXHJcbiIsIiBmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcclxuICBjb25zdCBob21lUGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvbWVQYWdlRGl2LmlkID0gJ2hvbWUtcGFnZS1kaXYnO1xyXG5cclxuICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgcmVzdGF1cmFudE5hbWUuaWQgPSAncmVzdGF1cmFudC1uYW1lJztcclxuICByZXN0YXVyYW50TmFtZS5pbm5lckhUTUwgPSBgV2VsY29tZSB0byBPa29ub21pIEZsYXZvcnM8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicmVzdGF1cmFudC10eXBlXCI+VHJhZGl0aW9uYWwgSmFwYW5lc2UgUmVzdGF1cmFudDwvc3Bhbj5gO1xyXG5cclxuICBjb25zdCBob21lUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvbWVQYXJhZ3JhcGguaWQgPSAnaG9tZS1wYXJhZ3JhcGgnO1xyXG4gIGhvbWVQYXJhZ3JhcGguaW5uZXJIVE1MID0gYFxyXG4gIFRoZSBhcnQgb2YgY3JhZnRpbmcgbW91dGh3YXRlcmluZyBva29ub21peWFraSBoYXMgXHJcbiAgYmVlbiBvdXIgcGFzc2lvbiBhbmQgdHJhZGl0aW9uIHNpbmNlIDE5MDAuIFxyXG4gIFdpdGggb3ZlciBhIGNlbnR1cnkgb2YgZGVkaWNhdGVkIHNlcnZpY2UsIFxyXG4gIHdlIHRha2UgaW1tZW5zZSBwcmlkZSBpbiBvdXIgY29tbWl0bWVudCB0byBkZWxpdmVyaW5nIFxyXG4gIG5vdCBvbmx5IHRoZSBmaW5lc3QgZmxhdm9ycyBidXQgYWxzbyB0aGUgd2FybWVzdCBob3NwaXRhbGl0eSB0byBvdXIgXHJcbiAgY2hlcmlzaGVkIGN1c3RvbWVycy4gPGJyPjxicj5cclxuICBcclxuICBGb3IgZ2VuZXJhdGlvbnMsIG91ciBmYW1pbHktb3duZWQgZXN0YWJsaXNobWVudCBoYXMgXHJcbiAgcGVyZmVjdGVkIHRoZSBkZWxpY2F0ZSBiYWxhbmNlIG9mIHNhdm9yeSBhbmQgc3dlZXQsIGNyaXNweSBhbmQgdGVuZGVyLCBcclxuICB0aGF0IGRlZmluZXMgdGhlIGVzc2VuY2Ugb2Ygb2tvbm9taXlha2kuIEV2ZXJ5IGRpc2ggd2UgY3JlYXRlIGlzIFxyXG4gIGEgbGFib3Igb2YgbG92ZSwgcGFzc2VkIGRvd24gdGhyb3VnaCB0aGUgeWVhcnMsIHByZXNlcnZpbmcgdGhlIGF1dGhlbnRpY2l0eSBcclxuICBhbmQgdGltZS1ob25vcmVkIHRlY2huaXF1ZXMgdGhhdCBoYXZlIG1hZGUgdXMgYSBiZWxvdmVkIGN1bGluYXJ5IGRlc3RpbmF0aW9uLmA7XHJcblxyXG4gIGNvbnN0IHdvcmtTY2hlZHVsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdvcmtTY2hlZHVsZURpdi5pZCA9ICd3b3JrLXNjaGVkdWxlLWRpdic7XHJcbiAgXHJcbiAgY29uc3QgaG91cnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgaG91cnNUaXRsZS5pZCA9ICdob3Vycy1oMic7XHJcbiAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9ICdXb3JraW5nIEhvdXJzJztcclxuXHJcbiAgLy8gVGltZSBTY2hlZHVsZSBmb3IgcmVzdGF1cmFudFxyXG4gIGNvbnN0IGhvdXJzTW9uZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJzTW9uZGF5LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgaG91cnNNb25kYXkudGV4dENvbnRlbnQgPSAnTW9uZGF5OiAxMDowMCAtIDIxOjAwJztcclxuICBjb25zdCBob3Vyc1R1ZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNUdWVzZGF5LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgaG91cnNUdWVzZGF5LnRleHRDb250ZW50ID0gJ1R1ZXNkYXk6IDEwOjAwIC0gMjE6MDAnO1xyXG4gIGNvbnN0IGhvdXJzV2VkbmVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJzV2VkbmVzZGF5LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgaG91cnNXZWRuZXNkYXkudGV4dENvbnRlbnQgPSAnV2VkbmVzZGF5OiAxMDowMCAtIDIxOjAwJztcclxuICBjb25zdCBob3Vyc1RodXJzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJzVGh1cnNkYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc1RodXJzZGF5LnRleHRDb250ZW50ID0gJ1RodXJzZGF5OiAxMDowMCAtIDIxOjAwJztcclxuICBjb25zdCBob3Vyc0ZyaWRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob3Vyc0ZyaWRheS5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIGhvdXJzRnJpZGF5LnRleHRDb250ZW50ID0gJ0ZyaWRheTogMTA6MDAgLSAyMTowMCc7XHJcbiAgY29uc3QgaG91cnNTYXR1cmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob3Vyc1NhdHVyZGF5LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgaG91cnNTYXR1cmRheS50ZXh0Q29udGVudCA9ICdTYXR1cmRheTogMTA6MDAgLSAxODowMCc7XHJcblxyXG4gIHdvcmtTY2hlZHVsZURpdi5hcHBlbmQoaG91cnNUaXRsZSwgaG91cnNNb25kYXksIGhvdXJzVHVlc2RheSwgaG91cnNXZWRuZXNkYXksICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzVGh1cnNkYXksIGhvdXJzRnJpZGF5LCBob3Vyc1NhdHVyZGF5KTtcclxuICBob21lUGFnZURpdi5hcHBlbmQocmVzdGF1cmFudE5hbWUsIGhvbWVQYXJhZ3JhcGgsIHdvcmtTY2hlZHVsZURpdik7XHJcbiAgXHJcbiAgcmV0dXJuIGhvbWVQYWdlRGl2O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuXHJcbm1haW4uYXBwZW5kKGNyZWF0ZUhvbWVQYWdlKCkpO1xyXG59XHJcbiIsImltcG9ydCBmaXJzdFByb2R1Y3RJbWFnZSBmcm9tICcuL2Fzc2V0cy9maXJzdC1wcm9kdWN0LnBuZyc7XHJcbmltcG9ydCBzZWNvbmRQcm9kdWN0SW1hZ2UgZnJvbSAnLi9hc3NldHMvc2Vjb25kLXByb2R1Y3QucG5nJztcclxuaW1wb3J0IHRoaXJkUHJvZHVjdEltYWdlIGZyb20gJy4vYXNzZXRzL3RoaXJkLXByb2R1Y3QucG5nJztcclxuaW1wb3J0IGZvdXJ0aFByb2R1Y3RJbWFnZSBmcm9tICcuL2Fzc2V0cy9mb3VydGgtcHJvZHVjdC5wbmcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XHJcbiAgLy8gQ3JlYXRlIGEgY29udGFpbmVyIHRvIGFwcGVuZCBhbGwgdGhlIHByb2R1Y3RzIGZvciB0aGUgbWVudVxyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZW51Q29udGFpbmVyLmlkID0gJ21lbnUtZGl2JztcclxuXHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICBjcmVhdGVQcm9kdWN0KFxyXG4gICAgICAnU2FtdXJhaSBCYWNvbicsXHJcbiAgICAgIGZpcnN0UHJvZHVjdEltYWdlLFxyXG4gICAgICAnVGVzdGluZyBEZXNjcmlwdGlvbiBMb3JlbSBJcHN1bScsXHJcbiAgICAgICc1LjcwJCdcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmFwcGVuZChcclxuICAgIGNyZWF0ZVByb2R1Y3QoXHJcbiAgICAgICdGdWppIHNlbnNhdGlvbicsXHJcbiAgICAgIHNlY29uZFByb2R1Y3RJbWFnZSxcclxuICAgICAgJ1Rlc3RpbmcgRGVzY3JpcHRpb24gTG9yZW0gSXBzdW0nLFxyXG4gICAgICAnNy41MCQnXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICBjcmVhdGVQcm9kdWN0KFxyXG4gICAgICAnTmluamEgd2F5JyxcclxuICAgICAgdGhpcmRQcm9kdWN0SW1hZ2UsXHJcbiAgICAgICdUZXN0aW5nIERlc2NyaXB0aW9uIExvcmVtIElwc3VtJyxcclxuICAgICAgJzYuOTAkJ1xyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kKFxyXG4gICAgY3JlYXRlUHJvZHVjdChcclxuICAgICAgJ1NocmltcCBlcnVwdGlvbicsXHJcbiAgICAgIGZvdXJ0aFByb2R1Y3RJbWFnZSxcclxuICAgICAgJ1Rlc3RpbmcgRGVzY3JpcHRpb24gTG9yZW0gSXBzdW0nLFxyXG4gICAgICAnOS42MCQnXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3QocHJvZHVjdFRpdGxlLCBwcm9kdWN0SW1hZ2VQYXRoLCBkZXNjcmlwdGlvbiwgcHJpY2UpIHtcclxuICBjb25zdCBwcm9kdWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHByb2R1Y3RDYXJkLmlkID0gJ3Byb2R1Y3QtY2FyZCc7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHByb2R1Y3RJbWFnZS5pZCA9ICdwcm9kdWN0LWltZyc7XHJcbiAgcHJvZHVjdEltYWdlLnNyYyA9IHByb2R1Y3RJbWFnZVBhdGg7XHJcbiAgcHJvZHVjdEltYWdlLmFsdCA9IHByb2R1Y3RUaXRsZTtcclxuXHJcbiAgY29uc3QgcHJvZHVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHByb2R1Y3ROYW1lLmlkID0gJ3Byb2R1Y3QtdGl0bGUnO1xyXG4gIHByb2R1Y3ROYW1lLnRleHRDb250ZW50ID0gcHJvZHVjdFRpdGxlO1xyXG5cclxuICBjb25zdCBwcm9kdWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcHJvZHVjdERlc2NyaXB0aW9uLmlkID0gJ3Byb2R1Y3QtZGVzY3JpcHRpb24nO1xyXG4gIHByb2R1Y3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG5cclxuICBjb25zdCBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcHJvZHVjdFByaWNlLmlkID0gJ3Byb2R1Y3QtcHJpY2UnO1xyXG4gIHByb2R1Y3RQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xyXG5cclxuICBwcm9kdWN0Q2FyZC5hcHBlbmQocHJvZHVjdEltYWdlKTtcclxuICBwcm9kdWN0Q2FyZC5hcHBlbmQocHJvZHVjdE5hbWUpO1xyXG4gIHByb2R1Y3RDYXJkLmFwcGVuZChwcm9kdWN0RGVzY3JpcHRpb24pO1xyXG4gIHByb2R1Y3RDYXJkLmFwcGVuZChwcm9kdWN0UHJpY2UpO1xyXG5cclxuICByZXR1cm4gcHJvZHVjdENhcmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudVBhZ2UoKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcblxyXG4gIG1haW4uYXBwZW5kKGNyZWF0ZU1lbnVQYWdlKCkpO1xyXG59IiwiaW1wb3J0IHsgbG9hZEhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBsb2FkTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCB7IGxvYWRDb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuaW1wb3J0IGhvbWVCYWNrZ3JvdW5kUGljIGZyb20gJy4vYXNzZXRzL2RhbmllbGUtc2FsdXRhcmktcmVzdGF1cmFudC1ob21lLnBuZyc7XHJcbmltcG9ydCBjb250YWN0QmFja2dyb3VuZFBpYyBmcm9tICcuL2Fzc2V0cy9jb250YWN0LXVzLnBuZyc7XHJcbmltcG9ydCBsb2dvUGljIGZyb20gJy4vYXNzZXRzL29rb25vbWktbG9nby5wbmcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIGhlYWRlci5pZCA9ICdoZWFkZXInO1xyXG5cclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbG9nby5pZCA9ICdsb2dvJztcclxuICBsb2dvLnNyYyA9IGxvZ29QaWM7XHJcbiAgbG9nby5hbHQgPSAnTE9HTyc7XHJcblxyXG4gIGhlYWRlci5hcHBlbmQobG9nbyk7XHJcbiAgaGVhZGVyLmFwcGVuZChjcmVhdGVOYXYoKSk7XHJcblxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICBuYXYuaWQgPSAnbmF2JztcclxuXHJcbiAgY29uc3QgaG9tZU5hdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGhvbWVOYXZCdG4uaWQgPSAnaG9tZS1idG4nO1xyXG4gIGhvbWVOYXZCdG4udGV4dENvbnRlbnQgPSAnSE9NRSc7XHJcblxyXG4gIGNvbnN0IG1lbnVOYXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBtZW51TmF2QnRuLmlkID0gJ21lbnUtYnRuJztcclxuICBtZW51TmF2QnRuLnRleHRDb250ZW50ID0gJ01FTlUnO1xyXG5cclxuICBjb25zdCBjb250YWN0TmF2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29udGFjdE5hdkJ0bi5pZCA9ICdjb250YWN0LWJ0bic7XHJcbiAgY29udGFjdE5hdkJ0bi50ZXh0Q29udGVudCA9ICdDT05UQUNUIFVTJztcclxuXHJcbiAgbmF2LmFwcGVuZChob21lTmF2QnRuKTtcclxuICBuYXYuYXBwZW5kKG1lbnVOYXZCdG4pO1xyXG4gIG5hdi5hcHBlbmQoY29udGFjdE5hdkJ0bik7XHJcblxyXG4gIHJldHVybiBuYXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBtYWluLmlkID0gJ21haW4nO1xyXG5cclxuICByZXR1cm4gbWFpbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gIGZvb3Rlci5pZCA9ICdmb290ZXInO1xyXG5cclxuICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmb290ZXJEaXYuaWQgPSAnZm9vdGVyLWRpdic7XHJcblxyXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IMKpJztcclxuXHJcbiAgY29uc3QgYXV0aG9yTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBhdXRob3JOYW1lLnRleHRDb250ZW50ID0gJ0pvcmRhbiBQYXBhZGl0c2FzJztcclxuXHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gIGNvbnN0IGdpdEh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgZ2l0SHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9qb3JkYW5wYXBhZGl0c2FzJztcclxuXHJcbiAgY29uc3QgZ2l0SHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBnaXRIdWJJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJyYW5kcycsICdmYS1naXRodWInKTtcclxuXHJcbiAgZm9vdGVyRGl2LmFwcGVuZChjb3B5cmlnaHQsIGF1dGhvck5hbWUsIGN1cnJlbnREYXRlLCBnaXRIdWJMaW5rKTtcclxuICBnaXRIdWJMaW5rLmFwcGVuZChnaXRIdWJJY29uKTtcclxuICBmb290ZXIuYXBwZW5kKGZvb3RlckRpdik7XHJcblxyXG4gIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgRnVuY3Rpb24gZm9yIHN3aXRjaGluZyBiZXR3ZWVuIG5hdmJhciB0YWJzXHJcbiAqL1xyXG5mdW5jdGlvbiBicm93c2VOYXZUYWJzKCkge1xyXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuICBjb25zdCBob21lQmFja2dyb3VuZEltYWdlID0gaG9tZUJhY2tncm91bmRQaWM7XHJcbiAgY29uc3QgY29udGFjdEJhY2tncm91bmRJbWFnZSA9IGNvbnRhY3RCYWNrZ3JvdW5kUGljO1xyXG5cclxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdob21lLWJ0bicpIHtcclxuICAgICAgICBjbGVhbk1haW4oKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtob21lQmFja2dyb3VuZEltYWdlfSlgO1xyXG4gICAgICAgIGxvYWRIb21lUGFnZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ21lbnUtYnRuJykge1xyXG4gICAgICAgIGNsZWFuTWFpbigpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xyXG4gICAgICAgIGxvYWRNZW51UGFnZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2NvbnRhY3QtYnRuJykge1xyXG4gICAgICAgIGNsZWFuTWFpbigpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NvbnRhY3RCYWNrZ3JvdW5kSW1hZ2V9KWA7XHJcbiAgICAgICAgbG9hZENvbnRhY3RQYWdlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhbk1haW4oKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcbiAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICByZXR1cm4gbWFpbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgY29udGVudC5hcHBlbmQoY3JlYXRlTWFpbigpKTtcclxuICBjb250ZW50LmFwcGVuZChjcmVhdGVGb290ZXIoKSk7XHJcbiAgbG9hZEhvbWVQYWdlKCk7XHJcbiAgYnJvd3NlTmF2VGFicygpO1xyXG5cclxuICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZFBhZ2UgfSBmcm9tICcuL3BhZ2Utc3RydWN0dXJlJztcclxuaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xyXG5cclxubG9hZFBhZ2UoKTtcclxuXHJcbi8vIFRhc2tzOiBcclxuLy8gRWRpdCBjb250YWN0IGluZm8gZGl2XHJcbi8vIEltcHJvdmUgYW5kIGVkaXQgbWVudSBwYWdlXHJcbi8vIEFkZCBob3ZlciBlZmZlY3RzIGluIHRoZSBlbGVtZW50c1xyXG4vLyBDcmVhdGUgbWVkaWEgcXVlcmllcyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==