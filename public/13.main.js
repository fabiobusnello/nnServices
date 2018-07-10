(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./src/modules/modules/form-edit/send-new-module.js":
/*!**********************************************************!*\
  !*** ./src/modules/modules/form-edit/send-new-module.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sendNewModule = () => {\r\n    document.querySelector('#form-new-module').onsubmit = (e) => {\r\n        alerts({ message: '<strong>Olá! </strong> Criando novo Módulo, após o carregamento o sistema será reiniciado.', type: 'primary' })\r\n        ajax({ url: 'modules', method: 'post', body: { name: e.target.name.value, moduleName: e.target.moduleName.value, icon: e.target.icon.value } })\r\n            .then(data => {\r\n                location.reload()\r\n            })\r\n            .catch(err => {\r\n                console.log('modules/form-edit/send-new-module.js: ', err)\r\n                alerts({ message: '<strong><i class=\"far fa-frown fa-2x\"></i></strong> Houve algum erro e infelismente sua solicitação não pode ser atendida! desculme-nos...' })\r\n            })\r\n        return false\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendNewModule);\n\n//# sourceURL=webpack:///./src/modules/modules/form-edit/send-new-module.js?");

/***/ })

}]);