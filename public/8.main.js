(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/modules/modules/form-edit/delete-user.js":
/*!******************************************************!*\
  !*** ./src/modules/modules/form-edit/delete-user.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst deleteUser = (userId, moduleId, e) => {\r\n    alerts({\r\n        message: `Remover o acesso deste Modulo para este usuário?<br>\r\n        <span><input type=\"button\" id=\"remove-user-sim\" class=\"btn btn-danger\" value=\"Sim\"></span>\r\n        <span><input type=\"button\" onclick=\"$('.close-alert').click()\" class=\"btn btn-secondary\" value=\"Não\"></span>\r\n    `, type: 'primary'\r\n    })\r\n    document.querySelector('#remove-user-sim').onclick = e => {\r\n        ajax({ url: `modules/${moduleId}/${userId}`, method: 'delete' })\r\n            .then(data => {\r\n                $(`#tr${userId}`).remove()\r\n                $('.close-alert').click()\r\n            })\r\n            .catch(console.log)\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (deleteUser);\n\n//# sourceURL=webpack:///./src/modules/modules/form-edit/delete-user.js?");

/***/ })

}]);