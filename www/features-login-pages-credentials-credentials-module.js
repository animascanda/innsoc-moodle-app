(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-login-pages-credentials-credentials-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/credentials/credentials.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/credentials/credentials.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.login.login' | translate }}</h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"openSettings()\" [attr.aria-label]=\"'core.settings.appsettings' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-cog\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding limited-width\">\r\n    <core-loading [hideUntil]=\"pageLoaded\">\r\n        <div class=\"ion-text-wrap ion-text-center ion-margin-bottom\">\r\n            <div class=\"core-login-site-logo\">\r\n                <!-- Show site logo or a default image. -->\r\n                <img *ngIf=\"logoUrl\" [src]=\"logoUrl\" role=\"presentation\" alt=\"\" onError=\"this.src='assets/img/login_logo.png'\">\r\n                <img *ngIf=\"!logoUrl\" src=\"assets/img/login_logo.png\" role=\"presentation\" alt=\"\">\r\n            </div>\r\n\r\n            <h3 *ngIf=\"siteName\" class=\"ion-padding core-sitename\">\r\n                <core-format-text [text]=\"siteName\" [filter]=\"false\"></core-format-text>\r\n            </h3>\r\n            <p class=\"core-siteurl\">{{siteUrl}}</p>\r\n        </div>\r\n\r\n        <form [formGroup]=\"credForm\" (ngSubmit)=\"login($event)\" class=\"core-login-form\" #credentialsForm>\r\n            <ion-item *ngIf=\"siteChecked && !isBrowserSSO\">\r\n                <ion-label class=\"sr-only\">{{ 'core.login.username' | translate }}</ion-label>\r\n                <ion-input type=\"text\" name=\"username\" placeholder=\"{{ 'core.login.username' | translate }}\" formControlName=\"username\"\r\n                    autocapitalize=\"none\" autocorrect=\"off\" autocomplete=\"username\" enterkeyhint=\"next\" required=\"true\">\r\n                </ion-input>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"siteChecked && !isBrowserSSO\" class=\"ion-margin-bottom\">\r\n                <ion-label class=\"sr-only\">{{ 'core.login.password' | translate }}</ion-label>\r\n                <core-show-password name=\"password\">\r\n                    <ion-input name=\"password\" type=\"password\" placeholder=\"{{ 'core.login.password' | translate }}\"\r\n                        formControlName=\"password\" [clearOnEdit]=\"false\" autocomplete=\"current-password\" enterkeyhint=\"go\" required=\"true\">\r\n                    </ion-input>\r\n                </core-show-password>\r\n            </ion-item>\r\n            <ion-button expand=\"block\" type=\"submit\" [disabled]=\"siteChecked && !isBrowserSSO && !credForm.valid\"\r\n                class=\"ion-margin core-login-login-button ion-text-wrap\">\r\n                {{ 'core.login.loginbutton' | translate }}\r\n            </ion-button>\r\n            <!-- Remove this once Ionic fixes this bug: https://github.com/ionic-team/ionic-framework/issues/19368 -->\r\n            <input type=\"submit\" class=\"core-submit-hidden-enter\" />\r\n\r\n            <ng-container *ngIf=\"showScanQR\">\r\n                <div class=\"ion-text-center ion-padding\">{{ 'core.login.or' | translate }}</div>\r\n                <ion-button expand=\"block\" fill=\"outline\" class=\"ion-margin\" (click)=\"showInstructionsAndScanQR()\">\r\n                    <ion-icon slot=\"start\" name=\"fas-qrcode\" aria-hidden=\"true\"></ion-icon>\r\n                    {{ 'core.scanqr' | translate }}\r\n                </ion-button>\r\n            </ng-container>\r\n        </form>\r\n\r\n        <!-- Forgotten password option. -->\r\n        <ion-button *ngIf=\"showForgottenPassword\" expand=\"block\" fill=\"clear\"\r\n            class=\"core-login-forgotten-password core-button-as-link ion-text-wrap\" (click)=\"forgottenPassword()\">\r\n            {{ 'core.login.forgotten' | translate }}\r\n        </ion-button>\r\n\r\n        <ion-list *ngIf=\"identityProviders && identityProviders.length\" class=\"ion-padding-top core-login-identity-providers\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <h3 class=\"item-heading\">{{ 'core.login.potentialidps' | translate }}</h3>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-button fill=\"outline\" *ngFor=\"let provider of identityProviders\" class=\"ion-text-wrap ion-margin core-oauth-provider\"\r\n                (click)=\"oauthClicked(provider)\" [attr.aria-label]=\"provider.name\" expand=\"block\">\r\n                <img [src]=\"provider.iconurl\" alt=\"\" width=\"32\" height=\"32\" slot=\"start\">\r\n                <ion-label>{{provider.name}}</ion-label>\r\n            </ion-button>\r\n        </ion-list>\r\n\r\n        <ion-list *ngIf=\"canSignup || authInstructions\" class=\"ion-padding-top core-login-sign-up\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <h3 class=\"item-heading\">{{ 'core.login.firsttime' | translate }}</h3>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"authInstructions\">\r\n                <ion-label>\r\n                    <p>\r\n                        <core-format-text [text]=\"authInstructions\" [filter]=\"false\"></core-format-text>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-button *ngIf=\"canSignup\" expand=\"block\" class=\"ion-margin ion-text-wrap\" fill=\"outline\" (click)=\"openEmailSignup()\">\r\n                {{ 'core.login.startsignup' | translate }}\r\n            </ion-button>\r\n        </ion-list>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/login/pages/credentials/credentials.module.ts":
/*!*************************************************************************!*\
  !*** ./src/core/features/login/pages/credentials/credentials.module.ts ***!
  \*************************************************************************/
/*! exports provided: CoreLoginCredentialsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginCredentialsPageModule", function() { return CoreLoginCredentialsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./credentials */ "./src/core/features/login/pages/credentials/credentials.ts");
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
        component: _credentials__WEBPACK_IMPORTED_MODULE_4__["CoreLoginCredentialsPage"],
    },
];
let CoreLoginCredentialsPageModule = class CoreLoginCredentialsPageModule {
};
CoreLoginCredentialsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _credentials__WEBPACK_IMPORTED_MODULE_4__["CoreLoginCredentialsPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreLoginCredentialsPageModule);



/***/ }),

/***/ "./src/core/features/login/pages/credentials/credentials.ts":
/*!******************************************************************!*\
  !*** ./src/core/features/login/pages/credentials/credentials.ts ***!
  \******************************************************************/
/*! exports provided: CoreLoginCredentialsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginCredentialsPage", function() { return CoreLoginCredentialsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
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
 * Page to enter the user credentials.
 */
let CoreLoginCredentialsPage = class CoreLoginCredentialsPage {
    constructor(fb) {
        this.fb = fb;
        this.siteChecked = false;
        this.pageLoaded = false;
        this.isBrowserSSO = false;
        this.isFixedUrlSet = false;
        this.showForgottenPassword = true;
        this.showScanQR = false;
        this.eventThrown = false;
        this.viewLeft = false;
    }
    /**
     * Initialize the component.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.siteUrl = _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRequiredRouteParam('siteUrl');
                this.siteName = _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteParam('siteName');
                this.logoUrl = !_core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].CONFIG.forceLoginLogo && _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteParam('logoUrl') || undefined;
                this.siteConfig = _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteParam('siteConfig');
                this.urlToOpen = _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteParam('urlToOpen');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal(error);
                return _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].back();
            }
            this.credForm = this.fb.group({
                username: [_services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteParam('username') || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            if (this.siteConfig) {
                this.treatSiteConfig();
            }
            this.isFixedUrlSet = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].isFixedUrlSet();
            if (this.isFixedUrlSet || !this.siteConfig) {
                // Fixed URL or not siteConfig retrieved from params, we need to check if it uses browser SSO login.
                this.checkSite(this.siteUrl, true);
            }
            else {
                this.siteChecked = true;
                this.pageLoaded = true;
            }
            if (_services_app__WEBPACK_IMPORTED_MODULE_4__["CoreApp"].isIOS()) {
                // Make iOS auto-fill work. The field that isn't focused doesn't get updated, do it manually.
                // Debounce it to prevent triggering this function too often when the user is typing.
                this.valueChangeSubscription = this.credForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe((changes) => {
                    var _a, _b;
                    if (!this.formElement || !this.formElement.nativeElement) {
                        return;
                    }
                    const usernameInput = this.formElement.nativeElement.querySelector('input[name="username"]');
                    const passwordInput = this.formElement.nativeElement.querySelector('input[name="password"]');
                    const usernameValue = usernameInput === null || usernameInput === void 0 ? void 0 : usernameInput.value;
                    const passwordValue = passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.value;
                    if (usernameValue !== undefined && usernameValue !== changes.username) {
                        (_a = this.credForm.get('username')) === null || _a === void 0 ? void 0 : _a.setValue(usernameValue);
                    }
                    if (passwordValue !== undefined && passwordValue !== changes.password) {
                        (_b = this.credForm.get('password')) === null || _b === void 0 ? void 0 : _b.setValue(passwordValue);
                    }
                });
            }
        });
    }
    /**
     * Get site config and check if it requires SSO login.
     * This should be used only if a fixed URL is set, otherwise this check is already performed in CoreLoginSitePage.
     *
     * @param siteUrl Site URL to check.
     * @param onInit Whether the check site is done when initializing the page.
     * @return Promise resolved when done.
     */
    checkSite(siteUrl, onInit = false) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pageLoaded = false;
            // If the site is configured with http:// protocol we force that one, otherwise we use default mode.
            const protocol = siteUrl.indexOf('http://') === 0 ? 'http://' : undefined;
            try {
                const result = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkSite(siteUrl, protocol);
                this.siteChecked = true;
                this.siteUrl = result.siteUrl;
                this.siteConfig = result.config;
                this.treatSiteConfig();
                if (_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].isSSOLoginNeeded(result.code)) {
                    // SSO. User needs to authenticate in a browser.
                    this.isBrowserSSO = true;
                    if (this.showScanQR && onInit) {
                        // Don't open browser automatically, let the user view the scan QR button.
                        return;
                    }
                    // Check that there's no SSO authentication ongoing and the view hasn't changed.
                    if (!_services_app__WEBPACK_IMPORTED_MODULE_4__["CoreApp"].isSSOAuthenticationOngoing() && !this.viewLeft) {
                        _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].confirmAndOpenBrowserForSSOLogin(result.siteUrl, result.code, result.service, (_a = result.config) === null || _a === void 0 ? void 0 : _a.launchurl);
                    }
                }
                else {
                    this.isBrowserSSO = false;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                this.pageLoaded = true;
            }
        });
    }
    /**
     * Treat the site configuration (if it exists).
     */
    treatSiteConfig() {
        if (this.siteConfig) {
            this.siteName = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].CONFIG.sitename ? _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].CONFIG.sitename : this.siteConfig.sitename;
            this.logoUrl = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].getLogoUrl(this.siteConfig);
            this.authInstructions = this.siteConfig.authinstructions || _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.login.loginsteps');
            this.showScanQR = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].displayQRInCredentialsScreen(this.siteConfig.tool_mobile_qrcodetype);
            const disabledFeatures = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].getDisabledFeatures(this.siteConfig);
            this.identityProviders = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].getValidIdentityProviders(this.siteConfig, disabledFeatures);
            this.canSignup = this.siteConfig.registerauth == 'email' &&
                !_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].isEmailSignupDisabled(this.siteConfig, disabledFeatures);
            this.showForgottenPassword = !_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].isForgottenPasswordDisabled(this.siteConfig, disabledFeatures);
            if (!this.eventThrown && !this.viewLeft) {
                this.eventThrown = true;
                _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].LOGIN_SITE_CHECKED, { config: this.siteConfig });
            }
        }
        else {
            this.authInstructions = undefined;
            this.canSignup = false;
            this.identityProviders = [];
        }
    }
    /**
     * Tries to authenticate the user.
     *
     * @param e Event.
     * @return Promise resolved when done.
     */
    login(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            _services_app__WEBPACK_IMPORTED_MODULE_4__["CoreApp"].closeKeyboard();
            // Get input data.
            const siteUrl = this.siteUrl;
            const username = this.credForm.value.username;
            const password = this.credForm.value.password;
            if (!this.siteChecked || this.isBrowserSSO) {
                // Site wasn't checked (it failed) or a previous check determined it was SSO. Let's check again.
                yield this.checkSite(siteUrl);
                if (!this.isBrowserSSO) {
                    // Site doesn't use browser SSO, throw app's login again.
                    return this.login();
                }
                return;
            }
            if (!username) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal('core.login.usernamerequired', true);
                return;
            }
            if (!password) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal('core.login.passwordrequired', true);
                return;
            }
            if (!_services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].isOnline()) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal('core.networkerrormsg', true);
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showModalLoading();
            // Start the authentication process.
            try {
                const data = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getUserToken(siteUrl, username, password);
                const id = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].newSite(data.siteUrl, data.token, data.privateToken);
                // Reset fields so the data is not in the view anymore.
                this.credForm.controls['username'].reset();
                this.credForm.controls['password'].reset();
                this.siteId = id;
                yield _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].navigateToSiteHome({ params: { urlToOpen: this.urlToOpen } });
            }
            catch (error) {
                _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].treatUserTokenError(siteUrl, error, username, password);
                if (error.loggedout) {
                    _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].navigate('/login/sites', { reset: true });
                }
                else if (error.errorcode == 'forcepasswordchangenotice') {
                    // Reset password field.
                    this.credForm.controls.password.reset();
                }
            }
            finally {
                modal.dismiss();
                _singletons_form__WEBPACK_IMPORTED_MODULE_13__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
            }
        });
    }
    /**
     * Forgotten password button clicked.
     */
    forgottenPassword() {
        _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].forgottenPasswordClicked(this.siteUrl, this.credForm.value.username, this.siteConfig);
    }
    /**
     * An OAuth button was clicked.
     *
     * @param provider The provider that was clicked.
     */
    oauthClicked(provider) {
        var _a;
        if (!_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].openBrowserForOAuthLogin(this.siteUrl, provider, (_a = this.siteConfig) === null || _a === void 0 ? void 0 : _a.launchurl)) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal('Invalid data.');
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
     * Open email signup page.
     */
    openEmailSignup() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].navigate('/login/emailsignup', { params: { siteUrl: this.siteUrl } });
    }
    /**
     * Open settings page.
     */
    openSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].navigate('/settings');
    }
    /**
     * View destroyed.
     */
    ngOnDestroy() {
        var _a;
        this.viewLeft = true;
        _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].LOGIN_SITE_UNCHECKED, {
            config: this.siteConfig,
            loginSuccessful: !!this.siteId,
        }, this.siteId);
        (_a = this.valueChangeSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
};
CoreLoginCredentialsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CoreLoginCredentialsPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['credentialsForm',] }]
};
CoreLoginCredentialsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-credentials',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./credentials.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/credentials/credentials.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../login.scss */ "./src/core/features/login/login.scss")).default]
    })
], CoreLoginCredentialsPage);



/***/ })

}]);
//# sourceMappingURL=features-login-pages-credentials-credentials-module.js.map