(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-login-pages-reconnect-reconnect-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/reconnect/reconnect.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/reconnect/reconnect.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.login.reconnect' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\" (keydown)=\"keyDown($event)\" (keyup)=\"keyUp($event)\">\r\n    <div class=\"list-item-limited-width\">\r\n        <div class=\"ion-text-wrap ion-text-center ion-margin-bottom\" [ngClass]=\"{'item-avatar-center': showSiteAvatar}\">\r\n            <!-- Show user avatar. -->\r\n            <img *ngIf=\"showSiteAvatar\" [src]=\"userAvatar\" class=\"large-avatar\" core-external-content [siteId]=\"siteId\"\r\n                alt=\"{{ 'core.pictureof' | translate:{$a: userFullName} }}\" onError=\"this.src='assets/img/user-avatar.png'\">\r\n\r\n            <div class=\"core-login-site-logo\" *ngIf=\"!showSiteAvatar\">\r\n                <!-- Show site logo or a default image. -->\r\n                <img *ngIf=\"logoUrl\" [src]=\"logoUrl\" role=\"presentation\" onError=\"this.src='assets/img/login_logo.png'\" alt=\"\">\r\n                <img *ngIf=\"!logoUrl\" src=\"assets/img/login_logo.png\" role=\"presentation\" alt=\"\">\r\n            </div>\r\n\r\n            <p *ngIf=\"siteName\" class=\"ion-padding core-sitename\">\r\n                <core-format-text [text]=\"siteName\" [filter]=\"false\"></core-format-text>\r\n            </p>\r\n            <p class=\"core-siteurl\">{{siteUrl}}</p>\r\n\r\n            <ion-card *ngIf=\"!isLoggedOut\" class=\"core-danger-card core-login-reconnect-warning\">\r\n                <ion-item>\r\n                    <ion-icon name=\"fas-exclamation-circle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    <ion-label>\r\n                        <p>{{ 'core.lostconnection' | translate }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-card>\r\n        </div>\r\n        <form *ngIf=\"!isOAuth\" [formGroup]=\"credForm\" (ngSubmit)=\"login($event)\" class=\"core-login-form\" #reconnectForm>\r\n            <ion-item class=\"ion-text-wrap core-username item-interactive\">\r\n                <ion-label>\r\n                    <p>{{username}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-margin-bottom\">\r\n                <ion-label class=\"sr-only\">{{ 'core.login.password' | translate }}</ion-label>\r\n                <core-show-password name=\"password\">\r\n                    <ion-input class=\"core-ioninput-password\" name=\"password\" type=\"password\"\r\n                        placeholder=\"{{ 'core.login.password' | translate }}\" formControlName=\"password\" [clearOnEdit]=\"false\"\r\n                        autocomplete=\"current-password\" enterkeyhint=\"go\" required=\"true\">\r\n                    </ion-input>\r\n                </core-show-password>\r\n            </ion-item>\r\n            <div class=\"adaptable-buttons-row\">\r\n                <ion-button expand=\"block\" fill=\"outline\" (click)=\"cancel($event)\" class=\"ion-margin ion-text-wrap\">\r\n                    {{ 'core.login.cancel' | translate }}\r\n                </ion-button>\r\n                <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!credForm.valid\"\r\n                    class=\"ion-margin core-login-login-button ion-text-wrap\">\r\n                    {{ 'core.login.loginbutton' | translate }}\r\n                </ion-button>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"showScanQR\">\r\n                <div class=\"ion-text-center ion-padding\">{{ 'core.login.or' | translate }}</div>\r\n                <ion-button expand=\"block\" fill=\"outline\" class=\"ion-margin\" (click)=\"showInstructionsAndScanQR()\">\r\n                    <ion-icon slot=\"start\" name=\"fas-qrcode\" aria-hidden=\"true\"></ion-icon>\r\n                    {{ 'core.scanqr' | translate }}\r\n                </ion-button>\r\n            </ng-container>\r\n        </form>\r\n\r\n        <!-- Forgotten password option. -->\r\n        <ion-button *ngIf=\"showForgottenPassword && !isOAuth\" expand=\"block\" fill=\"clear\"\r\n            class=\"core-login-forgotten-password core-button-as-link ion-text-wrap\" (click)=\"forgottenPassword()\">\r\n            {{ 'core.login.forgotten' | translate }}\r\n        </ion-button>\r\n\r\n        <!-- Login methods -->\r\n        <core-login-methods></core-login-methods>\r\n\r\n        <!-- Identity providers. -->\r\n        <ion-list *ngIf=\"identityProviders?.length\" class=\"ion-padding-top core-login-identity-providers\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <h3 class=\"item-heading\">{{ 'core.login.potentialidps' | translate }}</h3>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-button [fill]=\"'outline'\" *ngFor=\"let provider of identityProviders\" class=\"ion-text-wrap ion-margin core-oauth-provider\"\r\n                (click)=\"oauthClicked(provider)\" [attr.aria-label]=\"provider.name\" expand=\"block\">\r\n                <img [src]=\"provider.iconurl\" alt=\"\" width=\"32\" height=\"32\" slot=\"start\">\r\n                <ion-label>{{ provider.name }}</ion-label>\r\n            </ion-button>\r\n        </ion-list>\r\n\r\n        <!-- If OAuth, display cancel button since the form isn't displayed. -->\r\n        <ion-list *ngIf=\"isOAuth\">\r\n            <ion-button expand=\"block\" class=\"ion-margin\" fill=\"outline\" (click)=\"cancel($event)\">\r\n                {{ 'core.login.cancel' | translate }}\r\n            </ion-button>\r\n        </ion-list>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/login/pages/reconnect/reconnect.module.ts":
/*!*********************************************************************!*\
  !*** ./src/core/features/login/pages/reconnect/reconnect.module.ts ***!
  \*********************************************************************/
/*! exports provided: CoreLoginReconnectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginReconnectPageModule", function() { return CoreLoginReconnectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _reconnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reconnect */ "./src/core/features/login/pages/reconnect/reconnect.ts");
/* harmony import */ var _features_login_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/login/components/components.module */ "./src/core/features/login/components/components.module.ts");
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
        component: _reconnect__WEBPACK_IMPORTED_MODULE_4__["CoreLoginReconnectPage"],
    },
];
let CoreLoginReconnectPageModule = class CoreLoginReconnectPageModule {
};
CoreLoginReconnectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_login_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreLoginComponentsModule"],
        ],
        declarations: [
            _reconnect__WEBPACK_IMPORTED_MODULE_4__["CoreLoginReconnectPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreLoginReconnectPageModule);



/***/ }),

/***/ "./src/core/features/login/pages/reconnect/reconnect.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/login/pages/reconnect/reconnect.ts ***!
  \**************************************************************/
/*! exports provided: CoreLoginReconnectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginReconnectPage", function() { return CoreLoginReconnectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
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
 * Page to enter the user password to reconnect to a site.
 */
let CoreLoginReconnectPage = class CoreLoginReconnectPage {
    constructor(fb) {
        this.fb = fb;
        this.showForgottenPassword = true;
        this.showSiteAvatar = false;
        this.isOAuth = false;
        this.showScanQR = false;
        this.viewLeft = false;
        this.eventThrown = false;
        this.loginSuccessful = false;
        const currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSite();
        this.isLoggedOut = !currentSite || currentSite.isLoggedOut();
        this.credForm = fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    /**
     * Initialize the component.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.siteId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRequiredRouteParam('siteId');
                const redirectPath = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('redirectPath');
                const urlToOpen = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('urlToOpen');
                if (redirectPath || urlToOpen) {
                    this.redirectData = {
                        redirectPath,
                        redirectOptions: _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('redirectOptions'),
                        urlToOpen,
                    };
                }
                const site = yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getSite(this.siteId);
                if (!site.infos) {
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_10__["CoreError"]('Invalid site');
                }
                this.username = site.infos.username;
                this.userFullName = site.infos.fullname;
                this.userAvatar = site.infos.userpictureurl;
                this.siteUrl = site.infos.siteurl;
                this.siteName = site.getSiteName();
                // If login was OAuth we should only reach this page if the OAuth method ID has changed.
                this.isOAuth = site.isOAuth();
                // Show logo instead of avatar if it's a fixed site.
                this.showSiteAvatar = !!this.userAvatar && !_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].getFixedSites();
                this.checkSiteConfig(site);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal(error);
                return this.cancel();
            }
        });
    }
    /**
     * Component destroyed.
     */
    ngOnDestroy() {
        this.viewLeft = true;
        _singletons_events__WEBPACK_IMPORTED_MODULE_9__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_9__["CoreEvents"].LOGIN_SITE_UNCHECKED, {
            config: this.siteConfig,
            loginSuccessful: this.loginSuccessful,
        }, this.siteId);
    }
    /**
     * Get some data (like identity providers) from the site config.
     */
    checkSiteConfig(site) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.siteConfig = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].ignoreErrors(site.getPublicConfig({
                readingStrategy: 3 /* PREFER_NETWORK */,
            }));
            if (!this.siteConfig) {
                return;
            }
            const disabledFeatures = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].getDisabledFeatures(this.siteConfig);
            this.identityProviders = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].getValidIdentityProviders(this.siteConfig, disabledFeatures);
            this.showForgottenPassword = !_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].isForgottenPasswordDisabled(this.siteConfig);
            if (!this.eventThrown && !this.viewLeft) {
                this.eventThrown = true;
                _singletons_events__WEBPACK_IMPORTED_MODULE_9__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_9__["CoreEvents"].LOGIN_SITE_CHECKED, { config: this.siteConfig });
            }
            this.showScanQR = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].displayQRInSiteScreen() ||
                _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].displayQRInCredentialsScreen(this.siteConfig.tool_mobile_qrcodetype);
            yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].checkApplication(this.siteConfig);
            // Check logoURL if user avatar is not set.
            if ((_a = this.userAvatar) === null || _a === void 0 ? void 0 : _a.startsWith(this.siteUrl + '/theme/image.php')) {
                this.showSiteAvatar = false;
            }
            this.logoUrl = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].getLogoUrl(this.siteConfig);
        });
    }
    /**
     * Cancel reconnect.
     *
     * @param e Event.
     */
    cancel(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (this.isLoggedOut) {
            // Go to sites page when user is logged out.
            _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigate('/login/sites', { reset: true });
        }
        _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].logout();
    }
    /**
     * Tries to authenticate the user.
     *
     * @param e Event.
     */
    login(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            _services_app__WEBPACK_IMPORTED_MODULE_3__["CoreApp"].closeKeyboard();
            // Get input data.
            const password = this.credForm.value.password;
            if (!password) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal('core.login.passwordrequired', true);
                return;
            }
            if (!_services_network__WEBPACK_IMPORTED_MODULE_4__["CoreNetwork"].isOnline()) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal('core.networkerrormsg', true);
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showModalLoading();
            try {
                // Start the authentication process.
                const data = yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getUserToken(this.siteUrl, this.username, password);
                yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].updateSiteToken(this.siteUrl, this.username, data.token, data.privateToken);
                _singletons_form__WEBPACK_IMPORTED_MODULE_12__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
                // Update site info too.
                yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].updateSiteInfoByUrl(this.siteUrl, this.username);
                // Reset fields so the data is not in the view anymore.
                this.credForm.controls['password'].reset();
                // Go to the site initial page.
                this.loginSuccessful = true;
                yield _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigateToSiteHome({
                    params: this.redirectData,
                });
            }
            catch (error) {
                _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].treatUserTokenError(this.siteUrl, error, this.username, password);
                if (error.loggedout) {
                    this.cancel();
                }
                else if (error.errorcode == 'forcepasswordchangenotice') {
                    // Reset password field.
                    this.credForm.controls.password.reset();
                }
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Forgotten password button clicked.
     */
    forgottenPassword() {
        _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].forgottenPasswordClicked(this.siteUrl, this.username, this.siteConfig);
    }
    /**
     * An OAuth button was clicked.
     *
     * @param provider The provider that was clicked.
     */
    oauthClicked(provider) {
        var _a;
        const result = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].openBrowserForOAuthLogin(this.siteUrl, provider, (_a = this.siteConfig) === null || _a === void 0 ? void 0 : _a.launchurl, this.redirectData);
        if (!result) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal('Invalid data.');
        }
    }
    /**
     * Show instructions and scan QR code.
     *
     * @return Promise resolved when done.
     */
    showInstructionsAndScanQR() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].showScanQRInstructions();
                yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].scanQR();
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * A11y key functionality that prevents keyDown events.
     *
     * @param e Event.
     */
    keyDown(e) {
        if (e.key == 'Escape') {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    /**
     * Cancel reconnect.
     *
     * @param e Event.
     */
    keyUp(e) {
        if (e.key == 'Escape') {
            this.cancel(e);
        }
    }
};
CoreLoginReconnectPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CoreLoginReconnectPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['reconnectForm',] }]
};
CoreLoginReconnectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-reconnect',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reconnect.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/reconnect/reconnect.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../login.scss */ "./src/core/features/login/login.scss")).default]
    })
], CoreLoginReconnectPage);



/***/ })

}]);
//# sourceMappingURL=features-login-pages-reconnect-reconnect-module.js.map