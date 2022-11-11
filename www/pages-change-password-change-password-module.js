(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/change-password/change-password.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/change-password/change-password.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1 *ngIf=\"!changingPassword\">{{ 'core.login.changepassword' | translate }}</h1>\r\n            <h1 *ngIf=\"changingPassword\">{{ 'core.login.reconnecttosite' | translate }}</h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"showHelp()\" [attr.aria-label]=\"'core.help' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"far-question-circle\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-list class=\"list-item-limited-width\">\r\n        <ng-container *ngIf=\"!changingPassword\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.login.forcepasswordchangenotice' | translate }}</h2>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-button class=\"ion-text-wrap ion-margin\" expand=\"block\" (click)=\"openChangePasswordPage()\">\r\n                {{ 'core.login.changepasswordbutton' | translate }}\r\n            </ion-button>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"changingPassword\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p>{{ 'core.login.changepasswordreconnectinstructions' | translate }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-button class=\"ion-text-wrap ion-margin\" expand=\"block\" (click)=\"login()\">\r\n                {{ 'core.login.reconnect' | translate }}\r\n            </ion-button>\r\n        </ng-container>\r\n        <ion-item class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <p>{{ 'core.wanttochangesite' | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-button class=\"ion-text-wrap ion-margin\" expand=\"block\" fill=\"outline\" (click)=\"logout()\">\r\n            {{ logoutLabel | translate }}\r\n        </ion-button>\r\n    </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/login/pages/change-password/change-password.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/core/features/login/pages/change-password/change-password.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CoreLoginChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginChangePasswordPageModule", function() { return CoreLoginChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _change_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-password */ "./src/core/features/login/pages/change-password/change-password.ts");
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
        component: _change_password__WEBPACK_IMPORTED_MODULE_4__["CoreLoginChangePasswordPage"],
    },
];
let CoreLoginChangePasswordPageModule = class CoreLoginChangePasswordPageModule {
};
CoreLoginChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _change_password__WEBPACK_IMPORTED_MODULE_4__["CoreLoginChangePasswordPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreLoginChangePasswordPageModule);



/***/ }),

/***/ "./src/core/features/login/pages/change-password/change-password.ts":
/*!**************************************************************************!*\
  !*** ./src/core/features/login/pages/change-password/change-password.ts ***!
  \**************************************************************************/
/*! exports provided: CoreLoginChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginChangePasswordPage", function() { return CoreLoginChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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
 * Page that shows instructions to change the password.
 */
let CoreLoginChangePasswordPage = class CoreLoginChangePasswordPage {
    constructor() {
        this.changingPassword = false;
        this.logoutLabel = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].getLogoutLabel();
    }
    /**
     * Show a help modal.
     */
    showHelp() {
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showAlert(_singletons__WEBPACK_IMPORTED_MODULE_5__["Translate"].instant('core.help'), _singletons__WEBPACK_IMPORTED_MODULE_5__["Translate"].instant('core.login.changepasswordhelp'));
    }
    /**
     * Open the change password page in a browser.
     */
    openChangePasswordPage() {
        _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].openInAppForEdit(_services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId(), '/login/change_password.php', undefined, true);
        this.changingPassword = true;
        this.detectPasswordChanged();
    }
    /**
     * Login the user.
     */
    login() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].navigateToSiteHome();
        this.changingPassword = false;
    }
    /**
     * Logout the user.
     */
    logout() {
        _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].logout();
        this.changingPassword = false;
    }
    /**
     * Try to detect if the user changed password in browser.
     */
    detectPasswordChanged() {
        if (this.urlLoadedObserver) {
            // Already listening (shouldn't happen).
            return;
        }
        this.urlLoadedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].IAB_LOAD_START, (event) => {
            if (event.url.match(/\/login\/change_password\.php.*return=1/)) {
                // Password should have changed.
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].closeInAppBrowser();
                this.login();
            }
        });
        this.browserClosedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].IAB_EXIT, () => {
            var _a, _b;
            (_a = this.urlLoadedObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.browserClosedObserver) === null || _b === void 0 ? void 0 : _b.off();
            delete this.urlLoadedObserver;
            delete this.browserClosedObserver;
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a, _b;
        (_a = this.urlLoadedObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.browserClosedObserver) === null || _b === void 0 ? void 0 : _b.off();
    }
};
CoreLoginChangePasswordPage.ctorParameters = () => [];
CoreLoginChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-change-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./change-password.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/change-password/change-password.html")).default,
    })
], CoreLoginChangePasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-change-password-change-password-module.js.map