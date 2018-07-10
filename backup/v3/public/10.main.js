(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/modules/modules/form-edit/delete-user.js":
/*!******************************************************!*\
  !*** ./src/modules/modules/form-edit/delete-user.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst deleteUser = (userId, moduleId, e) => {\r\n    alerts({\r\n        message: `Remover o acesso deste Modulo para este usuário?<br>\r\n        <span><input type=\"button\" id=\"remove-user-sim\" class=\"btn btn-danger\" value=\"Sim\"></span>\r\n        <span><input type=\"button\" onclick=\"$('.close-alert').click()\" class=\"btn btn-secondary\" value=\"Não\"></span>\r\n    `, type: 'primary'\r\n    })\r\n    document.querySelector('#remove-user-sim').onclick = e => {\r\n        ajax({ url: `modules/${moduleId}/${userId}`, method: 'delete' })\r\n            .then(data => {\r\n                $(`#tr${userId}`).remove()\r\n                $('.close-alert').click()\r\n            })\r\n            .catch(console.log)\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (deleteUser);\n\n//# sourceURL=webpack:///./src/modules/modules/form-edit/delete-user.js?");

/***/ }),

/***/ "./src/modules/modules/form-edit/get-users-modules-by-id.js":
/*!******************************************************************!*\
  !*** ./src/modules/modules/form-edit/get-users-modules-by-id.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_user_modules_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/user-modules.html */ \"./src/modules/modules/form-edit/html/user-modules.html\");\n/* harmony import */ var _html_user_modules_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_user_modules_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _delete_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-user */ \"./src/modules/modules/form-edit/delete-user.js\");\n\r\n\r\n\r\nconst getUsersModulesById = async (id) => {\r\n    document.querySelector('#users-modules').innerHTML = _html_user_modules_html__WEBPACK_IMPORTED_MODULE_0___default.a\r\n    const { data } = await ajax({ url: `modules/${id}` })\r\n    createList({\r\n        el: '#tbody-user-modules',\r\n        array: data,\r\n        colums: ['name'],\r\n        delete: (userId, e) => Object(_delete_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(userId, id, e),\r\n        actionParams: 'id'\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getUsersModulesById);\n\n//# sourceURL=webpack:///./src/modules/modules/form-edit/get-users-modules-by-id.js?");

/***/ }),

/***/ "./src/modules/modules/form-edit/html/user-modules.html":
/*!**************************************************************!*\
  !*** ./src/modules/modules/form-edit/html/user-modules.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div id=user-modules> <table class=\\\"table table-sm table-dark table-hover\\\"> <thead> <tr> <th colspan=2> <div class=row> <div class=col-sm-6>Controle de Acessos</div> <div class=col-sm-6> <div class=\\\"input-group search\\\"> <i class=\\\"fas fa-search search-loop\\\"></i> <input type=text class=\\\"form-control search-input\\\" placeholder=\\\"Procurar usuários\\\" id=search-user v-on:keyup=search> <div id=modules-users-search-content class=\\\"search-content truncate\\\"> <ul class=list-group> <li class=\\\"list-group-item list-group-item-action truncate\\\" v-for=\\\"(user, index) in users\\\" :key=index v-on:mousedown=add(user.id)> {{user.name}} </li> </ul> </div> </div> </div> </div> </th> </tr> </thead> <tbody id=tbody-user-modules></tbody> </table> </div>\";\n\n//# sourceURL=webpack:///./src/modules/modules/form-edit/html/user-modules.html?");

/***/ })

}]);