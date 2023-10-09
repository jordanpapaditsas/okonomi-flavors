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
  font-size: 1.1rem;
  margin-right: 5rem;
  border: none;
}

#restaurant-name {
  color: var(--text-color-white);
  text-align: center;
  font-size: 2.2rem;
}

#restaurant-type {
  font-size: 1.2rem;
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
}

#contact-us-title {
  color: var(--text-color-white);
  text-align: center;
  margin-bottom: 1rem;
  font-size: 3rem;
}

#contact-form-container {
  color: var(--text-color-white);
  margin-top: 5rem;
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
  width: 25rem;
  height: 4rem;
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
}

#submit-btn {
  font-size: 1.2rem;
  width: 12rem;
  height: 4rem;
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

i {
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
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,yDAAqE;EACrE,sBAAsB;EACtB,4BAA4B;EAC5B,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,oCAAoC;EACpC,WAAW;EACX,YAAY;AACd;;AAEA;;;EAGE,8BAA8B;EAC9B,oCAAoC;EACpC,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;EACzC,UAAU;EACV,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;EAC1B,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,mEAAmE;EACnE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,8BAA8B;EAC9B,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,sBAAsB;AACxB;;AAEA;;;EAGE,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,oCAAoC;EACpC,oCAAoC;EACpC,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC;;AAEA,kBAAkB;;AAElB;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF","sourcesContent":[":root {\r\n  --text-color-white: #fafafa;\r\n  --color-black: #000;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  background-image: url(../assets/daniele-salutari-restaurant-home.png);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n}\r\n\r\n#logo {\r\n  width: 16rem;\r\n}\r\n\r\n#header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n  width: 100%;\r\n  height: 7rem;\r\n}\r\n\r\n#home-btn,\r\n#menu-btn,\r\n#contact-btn {\r\n  color: var(--text-color-white);\r\n  background-color: var(--color-black);\r\n  font-size: 1.1rem;\r\n  margin-right: 5rem;\r\n  border: none;\r\n}\r\n\r\n#restaurant-name {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n#restaurant-type {\r\n  font-size: 1.2rem;\r\n  font-weight: normal;\r\n}\r\n\r\n#home-page-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 3rem;\r\n  color: var(--text-color-white);\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n#home-paragraph {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  max-width: 40%;\r\n  font-size: 1.3rem;\r\n  margin-top: 3rem;\r\n}\r\n\r\n#work-schedule-div {\r\n  border: 2px solid var(--text-color-white);\r\n  width: 30%;\r\n  height: 12rem;\r\n  text-align: center;\r\n  margin-top: 5rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#hours-h2 {\r\n  text-decoration: underline;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n#menu-div {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  gap: 5rem;\r\n  width: 50%;\r\n  border-radius: 1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  background: linear-gradient(rgba(8, 8, 8, 0.2), rgb(12, 1, 1, 0.8));\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n#product-img {\r\n  border-radius: 35%;\r\n  width: 10rem;\r\n}\r\n\r\n#product-card {\r\n  gap: 2rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#product-description {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n#product-price {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n#contact-page-container {\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n#contact-us-title {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  margin-bottom: 1rem;\r\n  font-size: 3rem;\r\n}\r\n\r\n#contact-form-container {\r\n  color: var(--text-color-white);\r\n  margin-top: 5rem;\r\n}\r\n\r\n#contact-form {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n}\r\n\r\n#contact-form input, textarea {\r\n  width: 25rem;\r\n  height: 4rem;\r\n  font-size: 1rem;\r\n  text-indent: 2rem;\r\n  border-radius: 1rem;\r\n}\r\n\r\n#contact-form textarea {\r\n  height: 10rem;\r\n  resize: none;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n#contact-form input:focus, #contact-form textarea:focus {\r\n  outline: none;\r\n  border: 5px solid rgb(131, 10, 10);\r\n  box-shadow: 2px 5px 5px 0px #3d0303;\r\n  border-radius: 1rem;\r\n}\r\n\r\n#submit-btn-container {\r\n  text-align: center;\r\n}\r\n\r\n#submit-btn {\r\n  font-size: 1.2rem;\r\n  width: 12rem;\r\n  height: 4rem;\r\n  border-radius: 2rem;\r\n  background-color: #8d0d0d;\r\n  color: var(--text-color-white);\r\n  border: none;\r\n  margin-top: 2rem;\r\n}\r\n\r\n#confirmation-message {\r\n  color: var(--text-color-white);\r\n  text-align: center;\r\n  margin-top: 2rem;\r\n  font-size: 2rem;\r\n  animation: fadeIn 0.8s;\r\n}\r\n\r\n#error-name,\r\n#error-email,\r\n#error-textarea {\r\n  font-size: 1.5rem;\r\n  color: red;\r\n}\r\n \r\n#footer {\r\n  border: 1px solid var(--color-black);\r\n  background-color: var(--color-black);\r\n  color: var(--text-color-white);\r\n  margin-top: auto;\r\n}\r\n\r\n#footer-div {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  height: 50px;\r\n  gap: 0.3rem;\r\n  color: var(--text-color-white);\r\n}\r\n\r\ni {\r\n  color: var(--text-color-white);\r\n}\r\n\r\n/* Hover Effects */\r\n\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}"],"sourceRoot":""}]);
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
// Figure out how to not let submit the form more than once in every session
// Complete the CSS styling
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHdLQUFpRTtBQUM3Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvRkFBb0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxh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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsR0FBRztBQUN2RDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Ozs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0E0QztBQUNuQjtBQUN6QjtBQUNBLHlEQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vc3JjL3BhZ2Utc3RydWN0dXJlLmpzIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9va29ub21pLWZsYXZvcnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29rb25vbWktZmxhdm9ycy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2tvbm9taS1mbGF2b3JzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZGFuaWVsZS1zYWx1dGFyaS1yZXN0YXVyYW50LWhvbWUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS10ZXh0LWNvbG9yLXdoaXRlOiAjZmFmYWZhO1xyXG4gIC0tY29sb3ItYmxhY2s6ICMwMDA7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICB3aWR0aDogMTZyZW07XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogN3JlbTtcclxufVxyXG5cclxuI2hvbWUtYnRuLFxyXG4jbWVudS1idG4sXHJcbiNjb250YWN0LWJ0biB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4jcmVzdGF1cmFudC1uYW1lIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG59XHJcblxyXG4jcmVzdGF1cmFudC10eXBlIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4jaG9tZS1wYWdlLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAzcmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xyXG59XHJcblxyXG4jaG9tZS1wYXJhZ3JhcGgge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuI3dvcmstc2NoZWR1bGUtZGl2IHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMTJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbiNob3Vycy1oMiB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4jbWVudS1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZ2FwOiA1cmVtO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDgsIDgsIDgsIDAuMiksIHJnYigxMiwgMSwgMSwgMC44KSk7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcclxufVxyXG5cclxuI3Byb2R1Y3QtaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAzNSU7XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG59XHJcblxyXG4jcHJvZHVjdC1jYXJkIHtcclxuICBnYXA6IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4jcHJvZHVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuXHJcbiNwcm9kdWN0LXByaWNlIHtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5cclxuI2NvbnRhY3QtcGFnZS1jb250YWluZXIge1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XHJcbn1cclxuXHJcbiNjb250YWN0LXVzLXRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG59XHJcblxyXG4jY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcbn1cclxuXHJcbiNjb250YWN0LWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbiNjb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcclxuICB3aWR0aDogMjVyZW07XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LWluZGVudDogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4jY29udGFjdC1mb3JtIHRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4jY29udGFjdC1mb3JtIGlucHV0OmZvY3VzLCAjY29udGFjdC1mb3JtIHRleHRhcmVhOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYigxMzEsIDEwLCAxMCk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDVweCA1cHggMHB4ICMzZDAzMDM7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuI3N1Ym1pdC1idG4tY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzdWJtaXQtYnRuIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB3aWR0aDogMTJyZW07XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkMGQwZDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbiNjb25maXJtYXRpb24tbWVzc2FnZSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBhbmltYXRpb246IGZhZGVJbiAwLjhzO1xyXG59XHJcblxyXG4jZXJyb3ItbmFtZSxcclxuI2Vycm9yLWVtYWlsLFxyXG4jZXJyb3ItdGV4dGFyZWEge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIFxyXG4jZm9vdGVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ibGFjayk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4jZm9vdGVyLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZ2FwOiAwLjNyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xyXG59XHJcblxyXG5pIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XHJcbn1cclxuXHJcbi8qIEhvdmVyIEVmZmVjdHMgKi9cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseURBQXFFO0VBQ3JFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUVBQW1FO0VBQ25FLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7RUFDcEMsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXRleHQtY29sb3Itd2hpdGU6ICNmYWZhZmE7XFxyXFxuICAtLWNvbG9yLWJsYWNrOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9kYW5pZWxlLXNhbHV0YXJpLXJlc3RhdXJhbnQtaG9tZS5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICB3aWR0aDogMTZyZW07XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWUtYnRuLFxcclxcbiNtZW51LWJ0bixcXHJcXG4jY29udGFjdC1idG4ge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNyZXN0YXVyYW50LW5hbWUge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNyZXN0YXVyYW50LXR5cGUge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1wYWdlLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDNyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1wYXJhZ3JhcGgge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWF4LXdpZHRoOiA0MCU7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxyXFxufVxcclxcblxcclxcbiN3b3JrLXNjaGVkdWxlLWRpdiB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBoZWlnaHQ6IDEycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaG91cnMtaDIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNtZW51LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDgsIDgsIDgsIDAuMiksIHJnYigxMiwgMSwgMSwgMC44KSk7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1pbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzUlO1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1jYXJkIHtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZHVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2R1Y3QtcHJpY2Uge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LXBhZ2UtY29udGFpbmVyIHtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LXVzLXRpdGxlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWZvcm0tY29udGFpbmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWZvcm0gaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAyNXJlbTtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtaW5kZW50OiAycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtZm9ybSBpbnB1dDpmb2N1cywgI2NvbnRhY3QtZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiKDEzMSwgMTAsIDEwKTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCA1cHggNXB4IDBweCAjM2QwMzAzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1idG4tY29udGFpbmVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1idG4ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB3aWR0aDogMTJyZW07XFxyXFxuICBoZWlnaHQ6IDRyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkMGQwZDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNjb25maXJtYXRpb24tbWVzc2FnZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC44cztcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yLW5hbWUsXFxyXFxuI2Vycm9yLWVtYWlsLFxcclxcbiNlcnJvci10ZXh0YXJlYSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcbiBcXHJcXG4jZm9vdGVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNmb290ZXItZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBnYXA6IDAuM3JlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi8qIEhvdmVyIEVmZmVjdHMgKi9cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZSgpIHtcclxuICBjb25zdCBjb250YWN0UGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhY3RQYWdlQ29udGFpbmVyLmlkID0gJ2NvbnRhY3QtcGFnZS1jb250YWluZXInO1xyXG5cclxuICBjb25zdCBjb250YWN0VXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgY29udGFjdFVzVGl0bGUuaWQgPSAnY29udGFjdC11cy10aXRsZSc7XHJcbiAgY29udGFjdFVzVGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHN1Ym1pdEJ0bkNvbnRhaW5lci5pZCA9ICdzdWJtaXQtYnRuLWNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHN1Ym1pdEJ0bi5pZCA9ICdzdWJtaXQtYnRuJztcclxuICBzdWJtaXRCdG4udmFsdWUgPSAnaW5zZXJ0JztcclxuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcclxuXHJcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0Rm9ybSk7XHJcblxyXG4gIHN1Ym1pdEJ0bkNvbnRhaW5lci5hcHBlbmQoc3VibWl0QnRuKTtcclxuICBjb250YWN0UGFnZUNvbnRhaW5lci5hcHBlbmQoY29udGFjdFVzVGl0bGUgLGNyZWF0ZUZvcm0oKSwgc3VibWl0QnRuQ29udGFpbmVyKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhY3RQYWdlQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xyXG4gIGNvbnN0IGNvbnRhY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFjdEZvcm1Db250YWluZXIuaWQgPSAnY29udGFjdC1mb3JtLWNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGNvbnRhY3RGb3JtLmlkID0gJ2NvbnRhY3QtZm9ybSc7XHJcbiAgY29udGFjdEZvcm0ubWV0aG9kID0gJ1BPU1QnO1xyXG5cclxuICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmFtZURpdi5pZCA9ICduYW1lLWRpdic7XHJcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBuYW1lSW5wdXQuaWQgPSAnbmFtZS1pbnB1dCc7XHJcbiAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgbmFtZUlucHV0Lm5hbWUgPSAnbmFtZSc7XHJcbiAgbmFtZUlucHV0LmF1dG9jb21wbGV0ZSA9ICdvbic7XHJcbiAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ05hbWUnO1xyXG4gIFxyXG4gIGNvbnN0IGVtYWlsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZW1haWxEaXYuaWQgPSAnZW1haWwtZGl2JztcclxuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBlbWFpbElucHV0LmlkID0gJ2VtYWlsLWlucHV0JztcclxuICBlbWFpbElucHV0LnR5cGUgPSAnZW1haWwnO1xyXG4gIGVtYWlsSW5wdXQubmFtZSA9ICdlbWFpbCc7XHJcbiAgZW1haWxJbnB1dC5hdXRvY29tcGxldGUgPSAnb24nO1xyXG4gIGVtYWlsSW5wdXQucGxhY2Vob2xkZXIgPSAnRW1haWwnO1xyXG4gIFxyXG4gIGNvbnN0IG1lc3NhZ2VCb3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZXNzYWdlQm94RGl2LmlkID0gJ21lc3NhZ2UtYm94LWRpdic7XHJcbiAgY29uc3QgbWVzc2FnZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgbWVzc2FnZUJveC5pZCA9ICdtZXNzYWdlLXRleHRhcmVhJztcclxuICBtZXNzYWdlQm94Lm5hbWUgPSAnbWVzc2FnZS10ZXh0JztcclxuICBtZXNzYWdlQm94LnBsYWNlaG9sZGVyID0gJ01lc3NhZ2UnO1xyXG4gIFxyXG4gIG5hbWVEaXYuYXBwZW5kKG5hbWVJbnB1dCk7XHJcbiAgZW1haWxEaXYuYXBwZW5kKGVtYWlsSW5wdXQpO1xyXG4gIG1lc3NhZ2VCb3hEaXYuYXBwZW5kKG1lc3NhZ2VCb3gpO1xyXG5cclxuICBjb250YWN0Rm9ybS5hcHBlbmQobmFtZURpdiwgZW1haWxEaXYsIG1lc3NhZ2VCb3hEaXYsIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yTmFtZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvckVtYWlsLCBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvclRleHRBcmVhKTtcclxuICBjb250YWN0Rm9ybUNvbnRhaW5lci5hcHBlbmQoY29udGFjdEZvcm0pO1xyXG5cclxuICByZXR1cm4gY29udGFjdEZvcm1Db250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oKSB7XHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lLWlucHV0JykudmFsdWU7XHJcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwtaW5wdXQnKS52YWx1ZTtcclxuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UtdGV4dGFyZWEnKS52YWx1ZTtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuXHJcbiAgaWYgKCF2YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZSBkYXRhIHRha2VuIGZyb20gdGhlIGZvcm1cclxuICBjb25zdCBmb3JtRGF0YSA9IHtcclxuICAgIG5hbWU6IG5hbWUsXHJcbiAgICBlbWFpbDogZW1haWwsXHJcbiAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gIH07XHJcblxyXG4gIC8vIENvbnZlcnQgdGhlIGZvcm1EYXRhIG9iamVjdCBpbnRvIGEgSlNPTiBzdHJpbmdcclxuICBjb25zdCBmb3JtRGF0YUpTT04gPSBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSk7XHJcblxyXG4gIC8vIFN0b3JlIHRoZSBKU09OIGRhdGEgaW4gbG9jYWxTdG9yYWdlXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zvcm1EYXRhJywgZm9ybURhdGFKU09OKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtaW5wdXQnKS52YWx1ZSA9ICcnO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbC1pbnB1dCcpLnZhbHVlID0gJyc7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UtdGV4dGFyZWEnKS52YWx1ZSA9ICcnO1xyXG5cclxuICBkaXNwbGF5TG9jYWxTdG9yYWdlRGF0YSgpOyAgLy8gVXBkYXRlIHRoZSBkaXNwbGF5ZWQgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuXHJcbiAgbWFpbi5hcHBlbmQoY29uZmlybU1lc3NhZ2VzLmNvbmZpcm1hdGlvbk1lc3NhZ2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtaW5wdXQnKS52YWx1ZTtcclxuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsLWlucHV0JykudmFsdWU7XHJcbiAgY29uc3QgbWVzc2FnZVRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UtdGV4dGFyZWEnKS52YWx1ZTtcclxuICBjb25zdCBjb25maXJtYXRpb25NZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbmZpcm1hdGlvbi1tZXNzYWdlJyk7XHJcbiAgbGV0IGlzRm9ybUlucHV0VmFsaWQgPSB0cnVlO1xyXG5cclxuICBpZiAoIW5hbWVJbnB1dCB8fCBuYW1lSW5wdXQubGVuZ3RoIDwgMikge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JOYW1lLmlubmVySFRNTCA9ICdZb3VyIE5hbWUgaXMgdG9vIHNob3J0LCBwbGVhc2UgZ2l2ZSBhIHZhbGlkIG5hbWUhJztcclxuICAgIGlzRm9ybUlucHV0VmFsaWQgPSBmYWxzZTtcclxuICB9IGVsc2UgaWYgKCEvXlthLXpBLXpdKyQvLnRlc3QobmFtZUlucHV0KSApIHtcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yTmFtZS5pbm5lckhUTUwgPSAnUGxlYXNlIGdpdmUgYSB2YWxpZCBuYW1lISc7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIENsZWFyIHRoZSBlcnJvciBtZXNzYWdlIGlmIHRoZSBpbnB1dCBpcyB2YWxpZFxyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JOYW1lLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaWYgKCEvXltBLVphLXowLTkuXyUrLV0rQFtBLVphLXowLTkuLV0rXFwuW0EtWmEtel17Mix9JC8udGVzdChlbWFpbElucHV0KSkge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JFbWFpbC5pbm5lckhUTUwgPSAnUGxlYXNlIGdpdmUgYSB2YWxpZCBlbWFpbCEnO1xyXG4gICAgaXNGb3JtSW5wdXRWYWxpZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLmVycm9yVmFsaWRhdGlvbkZvckVtYWlsLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFtZXNzYWdlVGV4dEFyZWF8fCBtZXNzYWdlVGV4dEFyZWEubGVuZ3RoIDw9IDYpIHtcclxuICAgIGVycm9yTWVzc2FnZXMuZXJyb3JWYWxpZGF0aW9uRm9yVGV4dEFyZWEuaW5uZXJIVE1MID0gJ1lvdXIgTWVzc2FnZSBpcyB0b28gc2hvcnQhJztcclxuICAgIGlzRm9ybUlucHV0VmFsaWQgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lcnJvclZhbGlkYXRpb25Gb3JUZXh0QXJlYS5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcblxyXG4gIGlmIChjb25maXJtYXRpb25NZXNzYWdlKSB7XHJcbiAgICBjb25maXJtTWVzc2FnZXMuY29uZmlybWF0aW9uTWVzc2FnZS5pbm5lckhUTUwgPSAnWW91IGFyZSBhbHJlYWR5IHN1Ym1pdHRlZCB0aGUgZm9ybSEnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25maXJtTWVzc2FnZXMuY29uZmlybWF0aW9uTWVzc2FnZS5pbm5lckhUTUwgPSBgRm9ybSBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5ISA8YnI+XHJcbiAgICBXZSB3aWxsIGNvbnRhY3QgeW91IGFzIHNvb24gYXMgcG9zc2libGUuYDtcclxuICB9XHJcblxyXG4gIHJldHVybiBpc0Zvcm1JbnB1dFZhbGlkO1xyXG59XHJcblxyXG4vLyBJSUZFIChJbW1lZGlhdGVseSBJbnZva2VkIEZ1bmN0aW9uIEV4cHJlc3Npb24pIGZvciBlbmNhcHN1bGF0aW9uIHB1cnBvc2VcclxuY29uc3QgZXJyb3JNZXNzYWdlcyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZXJyb3JWYWxpZGF0aW9uRm9yTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBlcnJvclZhbGlkYXRpb25Gb3JOYW1lLmlkID0gJ2Vycm9yLW5hbWUnO1xyXG5cclxuICBjb25zdCBlcnJvclZhbGlkYXRpb25Gb3JFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBlcnJvclZhbGlkYXRpb25Gb3JFbWFpbC5pZCA9ICdlcnJvci1lbWFpbCc7XHJcblxyXG4gIGNvbnN0IGVycm9yVmFsaWRhdGlvbkZvclRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGVycm9yVmFsaWRhdGlvbkZvclRleHRBcmVhLmlkID0gJ2Vycm9yLXRleHRhcmVhJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVycm9yVmFsaWRhdGlvbkZvck5hbWUsXHJcbiAgICBlcnJvclZhbGlkYXRpb25Gb3JFbWFpbCxcclxuICAgIGVycm9yVmFsaWRhdGlvbkZvclRleHRBcmVhLFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBjb25maXJtTWVzc2FnZXMgPSAoKCkgPT4ge1xyXG4gIC8vIFNob3dzIGEgY29uZmlybWF0aW9uIG1lc3NhZ2UgdXBvbiBhIHN1Y2Nlc3NmdWwgc3VibWlzc2lvbiBvZiB0aGUgZm9ybVxyXG4gIGNvbnN0IGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25maXJtYXRpb25NZXNzYWdlLmlkID0gJ2NvbmZpcm1hdGlvbi1tZXNzYWdlJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2VcclxuICB9XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TG9jYWxTdG9yYWdlRGF0YSgpIHtcclxuICAvLyBSZXRyaWV2aW5nIHRoZSBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gIGNvbnN0IGxvY2FsU3RvcmFnZURhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9ybURhdGEnKTtcclxuXHJcbiAgaWYgKGxvY2FsU3RvcmFnZURhdGEpIHtcclxuICAgIC8vIFBhcnNpbmcgSlNPTiBzdHJpbmcgaW50byBhIEpTIG9iamVjdFxyXG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlRGF0YSk7XHJcblxyXG4gICAgLy8gbG9ncyB0aGUgc3RvcmVkIGRhdGEgZnJvbSB0aGUgZm9ybVxyXG4gICAgY29uc29sZS5sb2coJ1N0b3JlZCBGb3JtIERhdGE6ICcsIHBhcnNlZERhdGEpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnVGhlcmUgaXNuXFwndCBhbnkgZGF0YSBzdG9yZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2UuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbnRhY3RQYWdlKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG5cclxuICBtYWluLmFwcGVuZChjcmVhdGVDb250YWN0UGFnZSgpKTtcclxufVxyXG5cclxuIiwiIGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IGhvbWVQYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG9tZVBhZ2VEaXYuaWQgPSAnaG9tZS1wYWdlLWRpdic7XHJcblxyXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICByZXN0YXVyYW50TmFtZS5pZCA9ICdyZXN0YXVyYW50LW5hbWUnO1xyXG4gIHJlc3RhdXJhbnROYW1lLmlubmVySFRNTCA9IGBXZWxjb21lIHRvIE9rb25vbWkgRmxhdm9yczxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJyZXN0YXVyYW50LXR5cGVcIj5UcmFkaXRpb25hbCBKYXBhbmVzZSBSZXN0YXVyYW50PC9zcGFuPmA7XHJcblxyXG4gIGNvbnN0IGhvbWVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG9tZVBhcmFncmFwaC5pZCA9ICdob21lLXBhcmFncmFwaCc7XHJcbiAgaG9tZVBhcmFncmFwaC5pbm5lckhUTUwgPSBgXHJcbiAgVGhlIGFydCBvZiBjcmFmdGluZyBtb3V0aHdhdGVyaW5nIG9rb25vbWl5YWtpIGhhcyBcclxuICBiZWVuIG91ciBwYXNzaW9uIGFuZCB0cmFkaXRpb24gc2luY2UgMTkwMC4gXHJcbiAgV2l0aCBvdmVyIGEgY2VudHVyeSBvZiBkZWRpY2F0ZWQgc2VydmljZSwgXHJcbiAgd2UgdGFrZSBpbW1lbnNlIHByaWRlIGluIG91ciBjb21taXRtZW50IHRvIGRlbGl2ZXJpbmcgXHJcbiAgbm90IG9ubHkgdGhlIGZpbmVzdCBmbGF2b3JzIGJ1dCBhbHNvIHRoZSB3YXJtZXN0IGhvc3BpdGFsaXR5IHRvIG91ciBcclxuICBjaGVyaXNoZWQgY3VzdG9tZXJzLiA8YnI+PGJyPlxyXG4gIFxyXG4gIEZvciBnZW5lcmF0aW9ucywgb3VyIGZhbWlseS1vd25lZCBlc3RhYmxpc2htZW50IGhhcyBcclxuICBwZXJmZWN0ZWQgdGhlIGRlbGljYXRlIGJhbGFuY2Ugb2Ygc2F2b3J5IGFuZCBzd2VldCwgY3Jpc3B5IGFuZCB0ZW5kZXIsIFxyXG4gIHRoYXQgZGVmaW5lcyB0aGUgZXNzZW5jZSBvZiBva29ub21peWFraS4gRXZlcnkgZGlzaCB3ZSBjcmVhdGUgaXMgXHJcbiAgYSBsYWJvciBvZiBsb3ZlLCBwYXNzZWQgZG93biB0aHJvdWdoIHRoZSB5ZWFycywgcHJlc2VydmluZyB0aGUgYXV0aGVudGljaXR5IFxyXG4gIGFuZCB0aW1lLWhvbm9yZWQgdGVjaG5pcXVlcyB0aGF0IGhhdmUgbWFkZSB1cyBhIGJlbG92ZWQgY3VsaW5hcnkgZGVzdGluYXRpb24uYDtcclxuXHJcbiAgY29uc3Qgd29ya1NjaGVkdWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd29ya1NjaGVkdWxlRGl2LmlkID0gJ3dvcmstc2NoZWR1bGUtZGl2JztcclxuICBcclxuICBjb25zdCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBob3Vyc1RpdGxlLmlkID0gJ2hvdXJzLWgyJztcclxuICBob3Vyc1RpdGxlLnRleHRDb250ZW50ID0gJ1dvcmtpbmcgSG91cnMnO1xyXG5cclxuICBjb25zdCBob3Vyc01vbmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob3Vyc01vbmRheS5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIGhvdXJzTW9uZGF5LnRleHRDb250ZW50ID0gJ01vbmRheTogMTA6MDAgLSAyMTowMCc7XHJcbiAgY29uc3QgaG91cnNUdWVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJzVHVlc2RheS5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIGhvdXJzVHVlc2RheS50ZXh0Q29udGVudCA9ICdUdWVzZGF5OiAxMDowMCAtIDIxOjAwJztcclxuICBjb25zdCBob3Vyc1dlZG5lc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob3Vyc1dlZG5lc2RheS5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIGhvdXJzV2VkbmVzZGF5LnRleHRDb250ZW50ID0gJ1dlZG5lc2RheTogMTA6MDAgLSAyMTowMCc7XHJcbiAgY29uc3QgaG91cnNUaHVyc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob3Vyc1RodXJzZGF5LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgaG91cnNUaHVyc2RheS50ZXh0Q29udGVudCA9ICdUaHVyc2RheTogMTA6MDAgLSAyMTowMCc7XHJcbiAgY29uc3QgaG91cnNGcmlkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNGcmlkYXkuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICBob3Vyc0ZyaWRheS50ZXh0Q29udGVudCA9ICdGcmlkYXk6IDEwOjAwIC0gMjE6MDAnO1xyXG4gIGNvbnN0IGhvdXJzU2F0dXJkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cnNTYXR1cmRheS5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gIGhvdXJzU2F0dXJkYXkudGV4dENvbnRlbnQgPSAnU2F0dXJkYXk6IDEwOjAwIC0gMTg6MDAnO1xyXG5cclxuICB3b3JrU2NoZWR1bGVEaXYuYXBwZW5kKGhvdXJzVGl0bGUsIGhvdXJzTW9uZGF5LCBob3Vyc1R1ZXNkYXksIGhvdXJzV2VkbmVzZGF5LCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBob3Vyc1RodXJzZGF5LCBob3Vyc0ZyaWRheSwgaG91cnNTYXR1cmRheSk7XHJcbiAgaG9tZVBhZ2VEaXYuYXBwZW5kKHJlc3RhdXJhbnROYW1lLCBob21lUGFyYWdyYXBoLCB3b3JrU2NoZWR1bGVEaXYpO1xyXG4gIFxyXG4gIHJldHVybiBob21lUGFnZURpdjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcblxyXG5tYWluLmFwcGVuZChjcmVhdGVIb21lUGFnZSgpKTtcclxufVxyXG4iLCJpbXBvcnQgZmlyc3RQcm9kdWN0SW1hZ2UgZnJvbSAnLi9hc3NldHMvZmlyc3QtcHJvZHVjdC5wbmcnO1xyXG5pbXBvcnQgc2Vjb25kUHJvZHVjdEltYWdlIGZyb20gJy4vYXNzZXRzL3NlY29uZC1wcm9kdWN0LnBuZyc7XHJcbmltcG9ydCB0aGlyZFByb2R1Y3RJbWFnZSBmcm9tICcuL2Fzc2V0cy90aGlyZC1wcm9kdWN0LnBuZyc7XHJcbmltcG9ydCBmb3VydGhQcm9kdWN0SW1hZ2UgZnJvbSAnLi9hc3NldHMvZm91cnRoLXByb2R1Y3QucG5nJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZW51Q29udGFpbmVyLmlkID0gJ21lbnUtZGl2JztcclxuXHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICBjcmVhdGVQcm9kdWN0KFxyXG4gICAgICAnU2FtdXJhaSBCYWNvbicsXHJcbiAgICAgIGZpcnN0UHJvZHVjdEltYWdlLFxyXG4gICAgICAnVGVzdGluZyBEZXNjcmlwdGlvbiBMb3JlbSBJcHN1bScsXHJcbiAgICAgICc1LjcwJCdcclxuICAgIClcclxuICApO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmFwcGVuZChcclxuICAgIGNyZWF0ZVByb2R1Y3QoXHJcbiAgICAgICdGdWppIHNlbnNhdGlvbicsXHJcbiAgICAgIHNlY29uZFByb2R1Y3RJbWFnZSxcclxuICAgICAgJ1Rlc3RpbmcgRGVzY3JpcHRpb24gTG9yZW0gSXBzdW0nLFxyXG4gICAgICAnNy41MCQnXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICBjcmVhdGVQcm9kdWN0KFxyXG4gICAgICAnTmluamEgd2F5JyxcclxuICAgICAgdGhpcmRQcm9kdWN0SW1hZ2UsXHJcbiAgICAgICdUZXN0aW5nIERlc2NyaXB0aW9uIExvcmVtIElwc3VtJyxcclxuICAgICAgJzYuOTAkJ1xyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kKFxyXG4gICAgY3JlYXRlUHJvZHVjdChcclxuICAgICAgJ1NocmltcCBlcnVwdGlvbicsXHJcbiAgICAgIGZvdXJ0aFByb2R1Y3RJbWFnZSxcclxuICAgICAgJ1Rlc3RpbmcgRGVzY3JpcHRpb24gTG9yZW0gSXBzdW0nLFxyXG4gICAgICAnOS42MCQnXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3QocHJvZHVjdFRpdGxlLCBwcm9kdWN0SW1hZ2VQYXRoLCBkZXNjcmlwdGlvbiwgcHJpY2UpIHtcclxuICBjb25zdCBwcm9kdWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHByb2R1Y3RDYXJkLmlkID0gJ3Byb2R1Y3QtY2FyZCc7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHByb2R1Y3RJbWFnZS5pZCA9ICdwcm9kdWN0LWltZyc7XHJcbiAgcHJvZHVjdEltYWdlLnNyYyA9IHByb2R1Y3RJbWFnZVBhdGg7XHJcbiAgcHJvZHVjdEltYWdlLmFsdCA9IHByb2R1Y3RUaXRsZTtcclxuXHJcbiAgY29uc3QgcHJvZHVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHByb2R1Y3ROYW1lLmlkID0gJ3Byb2R1Y3QtdGl0bGUnO1xyXG4gIHByb2R1Y3ROYW1lLnRleHRDb250ZW50ID0gcHJvZHVjdFRpdGxlO1xyXG5cclxuICBjb25zdCBwcm9kdWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcHJvZHVjdERlc2NyaXB0aW9uLmlkID0gJ3Byb2R1Y3QtZGVzY3JpcHRpb24nO1xyXG4gIHByb2R1Y3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG5cclxuICBjb25zdCBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcHJvZHVjdFByaWNlLmlkID0gJ3Byb2R1Y3QtcHJpY2UnO1xyXG4gIHByb2R1Y3RQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xyXG5cclxuICBwcm9kdWN0Q2FyZC5hcHBlbmQocHJvZHVjdEltYWdlKTtcclxuICBwcm9kdWN0Q2FyZC5hcHBlbmQocHJvZHVjdE5hbWUpO1xyXG4gIHByb2R1Y3RDYXJkLmFwcGVuZChwcm9kdWN0RGVzY3JpcHRpb24pO1xyXG4gIHByb2R1Y3RDYXJkLmFwcGVuZChwcm9kdWN0UHJpY2UpO1xyXG5cclxuICByZXR1cm4gcHJvZHVjdENhcmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudVBhZ2UoKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcblxyXG4gIG1haW4uYXBwZW5kKGNyZWF0ZU1lbnVQYWdlKCkpO1xyXG59IiwiaW1wb3J0IHsgbG9hZEhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBsb2FkTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCB7IGxvYWRDb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuaW1wb3J0IGhvbWVCYWNrZ3JvdW5kUGljIGZyb20gJy4vYXNzZXRzL2RhbmllbGUtc2FsdXRhcmktcmVzdGF1cmFudC1ob21lLnBuZyc7XHJcbmltcG9ydCBjb250YWN0QmFja2dyb3VuZFBpYyBmcm9tICcuL2Fzc2V0cy9jb250YWN0LXVzLnBuZyc7XHJcbmltcG9ydCBsb2dvUGljIGZyb20gJy4vYXNzZXRzL29rb25vbWktbG9nby5wbmcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIGhlYWRlci5pZCA9ICdoZWFkZXInO1xyXG5cclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbG9nby5pZCA9ICdsb2dvJztcclxuICBsb2dvLnNyYyA9IGxvZ29QaWM7XHJcbiAgbG9nby5hbHQgPSAnTE9HTyc7XHJcblxyXG4gIGhlYWRlci5hcHBlbmQobG9nbyk7XHJcbiAgaGVhZGVyLmFwcGVuZChjcmVhdGVOYXYoKSk7XHJcblxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICBuYXYuaWQgPSAnbmF2JztcclxuXHJcbiAgY29uc3QgaG9tZU5hdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGhvbWVOYXZCdG4uaWQgPSAnaG9tZS1idG4nO1xyXG4gIGhvbWVOYXZCdG4udGV4dENvbnRlbnQgPSAnSE9NRSc7XHJcblxyXG4gIGNvbnN0IG1lbnVOYXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBtZW51TmF2QnRuLmlkID0gJ21lbnUtYnRuJztcclxuICBtZW51TmF2QnRuLnRleHRDb250ZW50ID0gJ01FTlUnO1xyXG5cclxuICBjb25zdCBjb250YWN0TmF2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29udGFjdE5hdkJ0bi5pZCA9ICdjb250YWN0LWJ0bic7XHJcbiAgY29udGFjdE5hdkJ0bi50ZXh0Q29udGVudCA9ICdDT05UQUNUIFVTJztcclxuXHJcbiAgbmF2LmFwcGVuZChob21lTmF2QnRuKTtcclxuICBuYXYuYXBwZW5kKG1lbnVOYXZCdG4pO1xyXG4gIG5hdi5hcHBlbmQoY29udGFjdE5hdkJ0bik7XHJcblxyXG4gIHJldHVybiBuYXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBtYWluLmlkID0gJ21haW4nO1xyXG5cclxuICByZXR1cm4gbWFpbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gIGZvb3Rlci5pZCA9ICdmb290ZXInO1xyXG5cclxuICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmb290ZXJEaXYuaWQgPSAnZm9vdGVyLWRpdic7XHJcblxyXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IMKpJztcclxuXHJcbiAgY29uc3QgYXV0aG9yTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBhdXRob3JOYW1lLnRleHRDb250ZW50ID0gJ0pvcmRhbiBQYXBhZGl0c2FzJztcclxuXHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gIGNvbnN0IGdpdEh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgZ2l0SHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9qb3JkYW5wYXBhZGl0c2FzJztcclxuXHJcbiAgY29uc3QgZ2l0SHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBnaXRIdWJJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJyYW5kcycsICdmYS1naXRodWInKTtcclxuXHJcbiAgZm9vdGVyRGl2LmFwcGVuZChjb3B5cmlnaHQsIGF1dGhvck5hbWUsIGN1cnJlbnREYXRlLCBnaXRIdWJMaW5rKTtcclxuICBnaXRIdWJMaW5rLmFwcGVuZChnaXRIdWJJY29uKTtcclxuICBmb290ZXIuYXBwZW5kKGZvb3RlckRpdik7XHJcblxyXG4gIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBicm93c2VOYXZUYWJzKCkge1xyXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuICBjb25zdCBob21lQmFja2dyb3VuZEltYWdlID0gaG9tZUJhY2tncm91bmRQaWM7XHJcbiAgY29uc3QgY29udGFjdEJhY2tncm91bmRJbWFnZSA9IGNvbnRhY3RCYWNrZ3JvdW5kUGljO1xyXG5cclxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdob21lLWJ0bicpIHtcclxuICAgICAgICBjbGVhbk1haW4oKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtob21lQmFja2dyb3VuZEltYWdlfSlgO1xyXG4gICAgICAgIGxvYWRIb21lUGFnZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ21lbnUtYnRuJykge1xyXG4gICAgICAgIGNsZWFuTWFpbigpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xyXG4gICAgICAgIGxvYWRNZW51UGFnZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2NvbnRhY3QtYnRuJykge1xyXG4gICAgICAgIGNsZWFuTWFpbigpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NvbnRhY3RCYWNrZ3JvdW5kSW1hZ2V9KWA7XHJcbiAgICAgICAgbG9hZENvbnRhY3RQYWdlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhbk1haW4oKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcbiAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICByZXR1cm4gbWFpbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgY29udGVudC5hcHBlbmQoY3JlYXRlTWFpbigpKTtcclxuICBjb250ZW50LmFwcGVuZChjcmVhdGVGb290ZXIoKSk7XHJcbiAgbG9hZEhvbWVQYWdlKCk7XHJcbiAgYnJvd3NlTmF2VGFicygpO1xyXG5cclxuICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZFBhZ2UgfSBmcm9tICcuL3BhZ2Utc3RydWN0dXJlJztcclxuaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xyXG5cclxubG9hZFBhZ2UoKTtcclxuXHJcblxyXG4vLyBUYXNrczogXHJcbi8vIEZpZ3VyZSBvdXQgaG93IHRvIG5vdCBsZXQgc3VibWl0IHRoZSBmb3JtIG1vcmUgdGhhbiBvbmNlIGluIGV2ZXJ5IHNlc3Npb25cclxuLy8gQ29tcGxldGUgdGhlIENTUyBzdHlsaW5nIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9