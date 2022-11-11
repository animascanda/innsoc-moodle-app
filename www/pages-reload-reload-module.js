(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reload-reload-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/reload/reload.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/reload/reload.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <core-loading></core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/mainmenu/pages/reload/reload.module.ts":
/*!******************************************************************!*\
  !*** ./src/core/features/mainmenu/pages/reload/reload.module.ts ***!
  \******************************************************************/
/*! exports provided: CoreMainMenuReloadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuReloadPageModule", function() { return CoreMainMenuReloadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _reload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reload */ "./src/core/features/mainmenu/pages/reload/reload.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.





const routes = [
    {
        path: '',
        component: _reload__WEBPACK_IMPORTED_MODULE_4__["CoreMainMenuReloadPage"],
    },
];
let CoreMainMenuReloadPageModule = class CoreMainMenuReloadPageModule {
};
CoreMainMenuReloadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _reload__WEBPACK_IMPORTED_MODULE_4__["CoreMainMenuReloadPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreMainMenuReloadPageModule);



/***/ }),

/***/ "./src/core/features/mainmenu/pages/reload/reload.ts":
/*!***********************************************************!*\
  !*** ./src/core/features/mainmenu/pages/reload/reload.ts ***!
  \***********************************************************/
/*! exports provided: CoreMainMenuReloadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuReloadPage", function() { return CoreMainMenuReloadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



/**
 * Page that displays a loading and then opens the main menu again.
 */
let CoreMainMenuReloadPage = class CoreMainMenuReloadPage {
    /**
     * @inheritdoc
     */
    ngOnInit() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].navigate('/main', {
            reset: true,
        });
    }
};
CoreMainMenuReloadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-mainmenu-reload',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reload.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/reload/reload.html")).default,
    })
], CoreMainMenuReloadPage);



/***/ })

}]);
//# sourceMappingURL=pages-reload-reload-module.js.map