(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/css-loader/index.js!./src/modules/modules/form-edit/form-edit.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/modules/modules/form-edit/form-edit.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/modules/modules/form-edit/form-edit.css?./node_modules/css-loader");

/***/ }),

/***/ "./src/modules/modules/form-edit/add-user.js":
/*!***************************************************!*\
  !*** ./src/modules/modules/form-edit/add-user.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/modules/modules/form-edit/index.js\");\n\r\n\r\n\r\nconst addUser = async (userId, moduleId, app) => {\r\n    ajax({ url: 'modulesAddUser', body: { userId, moduleId }, method: 'post' })\r\n        .then(data => {\r\n            Object(___WEBPACK_IMPORTED_MODULE_0__[\"default\"])(moduleId)\r\n            alerts({ message: 'Salvo com sucesso!', type: 'success' })\r\n        })\r\n        .catch(err => {\r\n            alerts({ message: 'Houve um erro interno e por isso sua solicitação não foi atendida', type: 'danger' })\r\n        })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (addUser);\n\n//# sourceURL=webpack:///./src/modules/modules/form-edit/add-user.js?");

/***/ }),

/***/ "./src/modules/modules/form-edit/delete-user.js":
/*!******************************************************!*\
  !*** ./src/modules/modules/form-edit/delete-user.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst deleteUser = (userId, moduleId, e) => {\r\n    alerts({\r\n        message: `Remover o acesso deste Modulo para este usuário?<br>\r\n        <span><input type=\"button\" id=\"remove-user-sim\" class=\"btn btn-danger\" value=\"Sim\"></span>\r\n        <span><input type=\"button\" onclick=\"$('.close-alert').click()\" class=\"btn btn-secondary\" value=\"Não\"></span>\r\n    `, type: 'primary'\r\n    })\r\n    document.querySelector('#remove-user-sim').onclick = e => {\r\n        ajax({ url: `modules/${moduleId}/${userId}`, method: 'delete' })\r\n            .then(data => {\r\n                $(`#tr${userId}`).remove()\r\n                $('.close-alert').click()\r\n            })\r\n            .catch(console.log)\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (deleteUser);\n\n//# sourceURL=webpack:///./src/modules/modules/form-edit/delete-user.js?");

/***/ }),

/***/ "./src/modules/modules/form-edit/form-edit.css":
/*!*****************************************************!*\
  !*** ./src/modules/modules/form-edit/form-edit.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!./form-edit.css */ \"./node_modules/css-loader/index.js!./src/modules/modules/form-edit/form-edit.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/modules/modules/form-edit/form-edit.css?");

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

/***/ "./src/modules/modules/form-edit/html/edit.html":
/*!******************************************************!*\
  !*** ./src/modules/modules/form-edit/html/edit.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"modal fade\\\" id=modal-new-module tabindex=-1 role=dialog aria-labelledby=exampleModalLabel aria-hidden=true> <div class=\\\"modal-dialog modal-lg\\\" role=document> <div class=modal-content> <div class=modal-header> <h5 class=\\\"modal-title mx-sm-2\\\">Adicionar Módulo</h5> <button type=button class=close data-dismiss=modal aria-label=Close> <span aria-hidden=true>&times;</span> </button> </div> <div class=modal-body> <form class=form id=form-new-module onsubmit=return!1 method=post> <div class=\\\"form-group mb-2 mx-sm-3\\\"> <div class=group> <input type=text placeholder=\\\" \\\" autocomplete=off name=name required> <span class=bar></span> <label>Nome do módulo para exibição</label> </div> </div> <div class=\\\"form-group mb-2 mx-sm-3\\\"> <div class=group> <input type=text placeholder=\\\" \\\" autocomplete=off name=moduleName required> <span class=bar></span> <label>Nome do que será criado</label> </div> </div> <div class=form-inline> <div class=\\\"form-group mb-2 mx-sm-3\\\"> <div class=group> <input type=text placeholder=\\\" \\\" autocomplete=off name=icon required> <span class=bar></span> <label>Ícone</label> </div> </div> </div> <input type=hidden name=id> <input type=submit id=send-new-module style=display:none> </form> <div id=users-modules></div> </div> <div class=modal-footer> <button type=button class=\\\"btn btn-secondary\\\" data-dismiss=modal>Cancelar</button> <button type=button class=\\\"btn btn-primary\\\" onclick='$(\\\"#send-new-module\\\").click()'>Salvar</button> </div> </div> </div> </div>\";\n\n//# sourceURL=webpack:///./src/modules/modules/form-edit/html/edit.html?");

/***/ }),

/***/ "./src/modules/modules/form-edit/html/user-modules.html":
/*!**************************************************************!*\
  !*** ./src/modules/modules/form-edit/html/user-modules.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div id=user-modules> <table class=\\\"table table-sm table-dark table-hover\\\"> <thead> <tr> <th colspan=2> <div class=row> <div class=col-sm-6>Controle de Acessos</div> <div class=col-sm-6> <div class=\\\"input-group search\\\"> <i class=\\\"fas fa-search search-loop\\\"></i> <input type=text class=\\\"form-control search-input\\\" placeholder=\\\"Procurar usuários\\\" id=search-user v-on:keyup=search> <div id=modules-users-search-content class=\\\"search-content truncate\\\"> <ul class=list-group> <li class=\\\"list-group-item list-group-item-action truncate\\\" v-for=\\\"(user, index) in users\\\" :key=index v-on:mousedown=add(user.id)> {{user.name}} </li> </ul> </div> </div> </div> </div> </th> </tr> </thead> <tbody id=tbody-user-modules></tbody> </table> </div>\";\n\n//# sourceURL=webpack:///./src/modules/modules/form-edit/html/user-modules.html?");

/***/ }),

/***/ "./src/modules/modules/form-edit/index.js":
/*!************************************************!*\
  !*** ./src/modules/modules/form-edit/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_edit_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-edit.css */ \"./src/modules/modules/form-edit/form-edit.css\");\n/* harmony import */ var _form_edit_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form_edit_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _html_edit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html/edit.html */ \"./src/modules/modules/form-edit/html/edit.html\");\n/* harmony import */ var _html_edit_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_html_edit_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _get_users_modules_by_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-users-modules-by-id */ \"./src/modules/modules/form-edit/get-users-modules-by-id.js\");\n/* harmony import */ var _send_new_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send-new-module */ \"./src/modules/modules/form-edit/send-new-module.js\");\n/* harmony import */ var _serach_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serach-users */ \"./src/modules/modules/form-edit/serach-users.js\");\n/* harmony import */ var _show_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../show-modules */ \"./src/modules/modules/show-modules.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst getModule = async (moduleId) => {\r\n    const { data } = await ajax({ url: `moduleById/${moduleId}` })\r\n\r\n    $('[name=\"name\"]').val(data[0].name)\r\n    $('[name=\"moduleName\"]').val(data[0].moduleName)\r\n    $('[name=\"icon\"]').val(data[0].icon)\r\n    $('[name=\"id\"]').val(data[0].id)\r\n\r\n    document.querySelector('#form-new-module').onsubmit = (e) => {\r\n\r\n        ajax({ url: 'modules', method: 'put', body: { name: e.target.name.value, moduleName: e.target.moduleName.value, icon: e.target.icon.value, id: e.target.id.value } })\r\n            .then(data => {\r\n                Object(_show_modules__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n                alerts({ message: '<strong><i class=\"far fa-smile fa-2x\"></i></i></strong> Salvo com sucesso!', type:'success' })\r\n            })\r\n            .catch(err => {\r\n                console.log('modules/form-edit/send-new-module.js: ', err)\r\n                alerts({ message: '<strong><i class=\"far fa-frown fa-2x\"></i></strong> Houve algum erro e infelismente sua solicitação não pode ser atendida! desculme-nos...' })\r\n            })\r\n        return false\r\n    }\r\n}\r\n\r\nconst formNewModule = (moduleId) => {\r\n    $(\".modal-backdrop\").remove()\r\n    document.querySelector(\"#edit-module-container\").innerHTML = _html_edit_html__WEBPACK_IMPORTED_MODULE_1___default.a\r\n    $(\"#modal-new-module\").modal('show')\r\n    if (moduleId) {\r\n        getModule(moduleId)\r\n        Object(_get_users_modules_by_id__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(moduleId)\r\n        return Object(_serach_users__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(moduleId)\r\n    }\r\n    Object(_send_new_module__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (formNewModule);\n\n//# sourceURL=webpack:///./src/modules/modules/form-edit/index.js?");

/***/ }),

/***/ "./src/modules/modules/form-edit/send-new-module.js":
/*!**********************************************************!*\
  !*** ./src/modules/modules/form-edit/send-new-module.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sendNewModule = () => {\r\n    document.querySelector('#form-new-module').onsubmit = (e) => {\r\n        alerts({ message: '<strong>Olá! </strong> Criando novo Módulo, após o carregamento o sistema será reiniciado.', type: 'primary' })\r\n        ajax({ url: 'modules', method: 'post', body: { name: e.target.name.value, moduleName: e.target.moduleName.value, icon: e.target.icon.value } })\r\n            .then(data => {\r\n                location.reload()\r\n            })\r\n            .catch(err => {\r\n                console.log('modules/form-edit/send-new-module.js: ', err)\r\n                alerts({ message: '<strong><i class=\"far fa-frown fa-2x\"></i></strong> Houve algum erro e infelismente sua solicitação não pode ser atendida! desculme-nos...' })\r\n            })\r\n        return false\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendNewModule);\n\n//# sourceURL=webpack:///./src/modules/modules/form-edit/send-new-module.js?");

/***/ }),

/***/ "./src/modules/modules/form-edit/serach-users.js":
/*!*******************************************************!*\
  !*** ./src/modules/modules/form-edit/serach-users.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _add_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user */ \"./src/modules/modules/form-edit/add-user.js\");\n\r\n\r\n\r\n\r\nconst CancelToken = axios__WEBPACK_IMPORTED_MODULE_1___default.a.CancelToken;\r\nvar cancel;\r\n\r\nconst searchUsers = (moduleId) => {\r\n    var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({\r\n        el: '#user-modules',\r\n        data() {\r\n            return { users: [] }\r\n        },\r\n        methods: {\r\n            add: function (userId) {\r\n                Object(_add_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(userId, moduleId, app)\r\n            },\r\n            search: function (e) {\r\n                if (cancel != undefined) { cancel() }\r\n                ajax({\r\n                    url: `usersByName/${e.target.value || 'false'}`, cancelToken: new CancelToken(function executor(c) {\r\n                        cancel = c\r\n                    })\r\n                })\r\n                    .then(function (data) { this.users = data.data })\r\n                    .catch(console.log)\r\n            }\r\n        },\r\n        mounted() {\r\n            ajax({ url: `usersByName/false` })\r\n                .then(function (data) { app.users = data.data })\r\n                .catch(console.log)\r\n        }\r\n    })\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchUsers);\n\n//# sourceURL=webpack:///./src/modules/modules/form-edit/serach-users.js?");

/***/ }),

/***/ "./src/modules/modules/modules-contents.html":
/*!***************************************************!*\
  !*** ./src/modules/modules/modules-contents.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div id=module-container style=display:none> <nav class=\\\"navbar navbar-expand-lg navbar-modules\\\"> <div class=container-fluid> <div> <h5>Modulos</h5> </div> <div> </div> <div class=col-md-5> <div class=input-group> <i id=modules-searsh-button class=\\\"fas fa-search search-loop\\\"></i> <input type=text class=\\\"form-control search-input\\\" placeholder=\\\"Procurar modulos\\\"> <div class=input-group-prepend> <div class=input-group-text id=add-modules title=\\\"Adicionar modulo\\\"> <i class=\\\"fas fa-plus\\\"></i> </div> </div> </div> </div> </div> </nav> <table id=table-modules class=\\\"table table-sm table-dark table-hover\\\"> <thead> <tr> <th scope=col>Nome</th> <th scope=col>Modulo</th> <th scope=col>Icone</th> </tr> </thead> <tbody id=tbody-modules> </tbody> </table> </div> <div id=edit-module-container></div>\";\n\n//# sourceURL=webpack:///./src/modules/modules/modules-contents.html?");

/***/ }),

/***/ "./src/modules/modules/show-modules.js":
/*!*********************************************!*\
  !*** ./src/modules/modules/show-modules.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-edit */ \"./src/modules/modules/form-edit/index.js\");\n/* harmony import */ var _modules_contents_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules-contents.html */ \"./src/modules/modules/modules-contents.html\");\n/* harmony import */ var _modules_contents_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_contents_html__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst showModules = async ()=>{\r\n    $(\".modal-backdrop\").remove()\r\n    document.querySelector('#contents').innerHTML = _modules_contents_html__WEBPACK_IMPORTED_MODULE_1___default.a\r\n    $('#module-container').show('fast')\r\n\r\n    document.querySelector('#add-modules').onclick = ()=>{\r\n        Object(_form_edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    }\r\n\r\n    const { data } = await ajax({ url: 'modules' })\r\n    createList({\r\n        el: '#tbody-modules',\r\n        array: data,\r\n        colums: ['name', 'moduleName', 'icon'],\r\n        actionParams: 'id',\r\n        action: e=>Object(_form_edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e)\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (showModules);\n\n//# sourceURL=webpack:///./src/modules/modules/show-modules.js?");

/***/ })

}]);