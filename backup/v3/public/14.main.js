(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/css-loader/index.js!./src/modules/modules/modules.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader!./src/modules/modules/modules.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".navbar-modules{\\r\\n    background-color: #006495;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n#module-container tr{\\r\\n    cursor: pointer;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/modules/modules/modules.css?./node_modules/css-loader");

/***/ }),

/***/ "./src/modules/modules/index.js":
/*!**************************************!*\
  !*** ./src/modules/modules/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules.css */ \"./src/modules/modules/modules.css\");\n/* harmony import */ var _modules_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _show_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-modules */ \"./src/modules/modules/show-modules.js\");\n\n\n\nconst modules = async () => {\n    document.querySelector('#modules').onclick = ()=>{\n        Object(_show_modules__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().catch(console.log)\n        closeSidebar()\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modules);\n\n//# sourceURL=webpack:///./src/modules/modules/index.js?");

/***/ }),

/***/ "./src/modules/modules/modules.css":
/*!*****************************************!*\
  !*** ./src/modules/modules/modules.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./modules.css */ \"./node_modules/css-loader/index.js!./src/modules/modules/modules.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/modules/modules/modules.css?");

/***/ })

}]);