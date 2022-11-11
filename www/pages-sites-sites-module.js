(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sites-sites-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/sites/sites.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/sites/sites.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.login.accounts' | translate }}</h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" *ngIf=\"accountsList.count > 0\" (click)=\"toggleDelete()\"\r\n                [attr.aria-label]=\"'core.login.toggleremove' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-pen\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button (click)=\"openSettings()\" [attr.aria-label]=\"'core.settings.appsettings' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-cog\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-list class=\"core-sitelist\">\r\n            <ion-card *ngFor=\"let sites of accountsList.otherSites\">\r\n                <ion-item-divider sticky=\"true\" *ngIf=\"sites[0]\" class=\"core-sitelist-sitename\">\r\n                    <ion-label>\r\n                        <h2>\r\n                            <core-format-text [text]=\"sites[0].siteName\" clean=\"true\" [siteId]=\"sites[0].id\"></core-format-text>\r\n                        </h2>\r\n                        <p><a [href]=\"sites[0].siteUrl\" core-link autoLogin=\"no\">{{ sites[0].siteUrlWithoutProtocol }}</a></p>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n\r\n                <ion-item button *ngFor=\"let site of sites\" (click)=\"login($event, site.id)\" detail=\"true\">\r\n                    <ion-avatar slot=\"start\">\r\n                        <img [src]=\"site.avatar\" core-external-content [siteId]=\"site.id\"\r\n                            alt=\"{{ 'core.pictureof' | translate:{$a: site.fullName} }}\" onError=\"this.src='assets/img/user-avatar.png'\">\r\n                    </ion-avatar>\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{site.fullName}}</p>\r\n                    </ion-label>\r\n                    <ion-badge slot=\"end\" *ngIf=\"!showDelete && site.badge\" @coreShowHideAnimation>\r\n                        <span aria-hidden=\"true\">{{site.badge}}</span>\r\n                        <span class=\"sr-only\">{{ 'core.login.sitebadgedescription' | translate:{ count: site.badge }\r\n                            }}</span>\r\n                    </ion-badge>\r\n                    <ion-button *ngIf=\"showDelete\" slot=\"end\" fill=\"clear\" color=\"danger\" (click)=\"deleteSite($event, site)\"\r\n                        [attr.aria-label]=\"'core.login.removeaccount' | translate\" [@coreSlideInOut]=\"'fromRight'\">\r\n                        <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-item>\r\n            </ion-card>\r\n        </ion-list>\r\n    </core-loading>\r\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\">\r\n        <ion-fab-button (click)=\"add()\" [attr.aria-label]=\"'core.login.add' | translate\">\r\n            <ion-icon name=\"fas-plus\" aria-hidden=\"true\"></ion-icon>\r\n            <span class=\"sr-only\">{{ 'core.login.add' | translate }}</span>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/login/pages/sites/sites.module.ts":
/*!*************************************************************!*\
  !*** ./src/core/features/login/pages/sites/sites.module.ts ***!
  \*************************************************************/
/*! exports provided: CoreLoginSitesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitesPageModule", function() { return CoreLoginSitesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sites */ "./src/core/features/login/pages/sites/sites.ts");
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
        component: _sites__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSitesPage"],
    },
];
let CoreLoginSitesPageModule = class CoreLoginSitesPageModule {
};
CoreLoginSitesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _sites__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSitesPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreLoginSitesPageModule);



/***/ }),

/***/ "./src/core/features/login/pages/sites/sites.ts":
/*!******************************************************!*\
  !*** ./src/core/features/login/pages/sites/sites.ts ***!
  \******************************************************/
/*! exports provided: CoreLoginSitesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitesPage", function() { return CoreLoginSitesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _features_filter_services_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/filter/services/filter */ "./src/core/features/filter/services/filter.ts");
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/animations */ "./src/core/components/animations.ts");
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
 * Page that displays a "splash screen" while the app is being initialized.
 */
let CoreLoginSitesPage = class CoreLoginSitesPage {
    constructor() {
        this.accountsList = {
            sameSite: [],
            otherSites: [],
            count: 0,
        };
        this.showDelete = false;
        this.loaded = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (_services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteBooleanParam('openAddSite')) {
                this.add();
            }
            this.accountsList = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].getAccountsList();
            this.loaded = true;
            if (this.accountsList.count == 0) {
                this.add();
            }
        });
    }
    /**
     * Go to the page to add a site.
     */
    add() {
        _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].goToAddSite(false, true);
    }
    /**
     * Delete a site.
     *
     * @param event Click event.
     * @param site Site to delete.
     * @return Promise resolved when done.
     */
    deleteSite(event, site) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.stopPropagation();
            let siteName = site.siteName || '';
            siteName = yield _features_filter_services_filter__WEBPACK_IMPORTED_MODULE_6__["CoreFilter"].formatText(siteName, { clean: true, singleLine: true, filter: false }, [], site.id);
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__["CoreDomUtils"].showDeleteConfirm('core.login.confirmdeletesite', { sitename: siteName });
            }
            catch (error) {
                // User cancelled, stop.
                return;
            }
            try {
                yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].deleteAccountFromList(this.accountsList, site);
                this.showDelete = false;
                // If there are no sites left, go to add site.
                if (this.accountsList.count == 0) {
                    _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].goToAddSite(true, true);
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__["CoreDomUtils"].showErrorModalDefault(error, 'core.login.errordeletesite', true);
            }
        });
    }
    /**
     * Login in a site.
     *
     * @param event Click event.
     * @param siteId The site ID.
     * @return Promise resolved when done.
     */
    login(event, siteId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.preventDefault();
            event.stopPropagation();
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__["CoreDomUtils"].showModalLoading();
            try {
                const loggedIn = yield _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].loadSite(siteId);
                if (loggedIn) {
                    yield _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].navigateToSiteHome();
                    return;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading site.');
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Toggle delete.
     */
    toggleDelete() {
        this.showDelete = !this.showDelete;
    }
    /**
     * Open settings page.
     */
    openSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].navigate('/settings');
    }
};
CoreLoginSitesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-core-login-sites',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sites.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/sites/sites.html")).default,
        animations: [_components_animations__WEBPACK_IMPORTED_MODULE_7__["CoreAnimations"].SLIDE_IN_OUT, _components_animations__WEBPACK_IMPORTED_MODULE_7__["CoreAnimations"].SHOW_HIDE],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../sitelist.scss */ "./src/core/features/login/sitelist.scss")).default]
    })
], CoreLoginSitesPage);



/***/ })

}]);
//# sourceMappingURL=pages-sites-sites-module.js.map