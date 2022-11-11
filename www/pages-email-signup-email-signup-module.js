(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-email-signup-email-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/email-signup/email-signup.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/email-signup/email-signup.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.login.newaccount' | translate }}</h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" *ngIf=\"authInstructions\" (click)=\"showAuthInstructions()\"\r\n                [attr.aria-label]=\"'core.login.instructions' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"far-question-circle\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-loading [hideUntil]=\"settingsLoaded\" *ngIf=\"!isMinor\">\r\n        <div class=\"list-item-limited-width\">\r\n\r\n            <!-- Site has an unsupported required field. -->\r\n            <ion-list *ngIf=\"!allRequiredSupported\">\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        {{ 'core.login.signuprequiredfieldnotsupported' | translate }}\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-button expand=\"block\" class=\"ion-margin\" [href]=\"signupUrl\" core-link autoLogin=\"no\" [showBrowserWarning]=\"false\">\r\n                    {{ 'core.openinbrowser' | translate }}\r\n                </ion-button>\r\n            </ion-list>\r\n\r\n            <ng-container *ngIf=\"allRequiredSupported && settingsLoaded && settings\">\r\n                <!-- Age verification. -->\r\n                <form *ngIf=\"ageDigitalConsentVerification\" [formGroup]=\"ageVerificationForm\" (ngSubmit)=\"verifyAge($event)\" #ageForm>\r\n\r\n                    <ion-item-divider class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <h3>{{ 'core.agelocationverification' | translate }}</h3>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">\r\n                            <span core-mark-required=\"true\">{{ 'core.whatisyourage' | translate }}</span>\r\n                        </ion-label>\r\n                        <ion-input type=\"number\" name=\"age\" placeholder=\"0\" formControlName=\"age\" autocapitalize=\"none\" autocorrect=\"off\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">\r\n                            <span core-mark-required=\"true\">{{ 'core.wheredoyoulive' | translate }}</span>\r\n                        </ion-label>\r\n                        <ion-select name=\"country\" formControlName=\"country\" [placeholder]=\"'core.login.selectacountry' | translate\">\r\n                            <ion-select-option value=\"\">{{ 'core.login.selectacountry' | translate }}</ion-select-option>\r\n                            <ion-select-option *ngFor=\"let country of countries\" [value]=\"country.code\">{{country.name}}</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n\r\n                    <!-- Submit button. -->\r\n                    <ion-button expand=\"block\" class=\"ion-margin\" type=\"submit\" [disabled]=\"!ageVerificationForm.valid\">\r\n                        {{ 'core.proceed' | translate }}\r\n                    </ion-button>\r\n\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <h3 class=\"item-heading\">{{ 'core.whyisthisrequired' | translate }}</h3>\r\n                            <p>{{ 'core.explanationdigitalminor' | translate }}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </form>\r\n\r\n                <!-- Signup form. -->\r\n                <form *ngIf=\"!ageDigitalConsentVerification\" [formGroup]=\"signupForm\" (ngSubmit)=\"create($event)\" #signupFormEl>\r\n\r\n                    <ion-item class=\"ion-text-wrap ion-text-center\">\r\n                        <ion-label>\r\n                            <!-- If no sitename show big siteurl. -->\r\n                            <p *ngIf=\"!siteName\" class=\"ion-padding item-heading\">{{siteUrl}}</p>\r\n                            <!-- If sitename, show big sitename and small siteurl. -->\r\n                            <p *ngIf=\"siteName\" class=\"ion-padding item-heading\">\r\n                                <core-format-text [text]=\"siteName\" [filter]=\"false\"></core-format-text>\r\n                            </p>\r\n                            <p *ngIf=\"siteName\">{{siteUrl}}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n\r\n                    <!-- Username and password. -->\r\n                    <ion-item-divider class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <h3>{{ 'core.login.createuserandpass' | translate }}</h3>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">\r\n                            <span core-mark-required=\"true\">{{ 'core.login.username' | translate }}</span>\r\n                        </ion-label>\r\n                        <ion-input type=\"text\" name=\"username\" placeholder=\"{{ 'core.login.username' | translate }}\"\r\n                            formControlName=\"username\" autocapitalize=\"none\" autocorrect=\"off\">\r\n                        </ion-input>\r\n                        <core-input-errors [control]=\"signupForm.controls.username\" [errorMessages]=\"usernameErrors\"></core-input-errors>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">\r\n                            <span core-mark-required=\"true\">{{ 'core.login.password' | translate }}</span>\r\n                        </ion-label>\r\n                        <core-show-password name=\"password\">\r\n                            <ion-input name=\"password\" type=\"password\" placeholder=\"{{ 'core.login.password' | translate }}\"\r\n                                formControlName=\"password\" [clearOnEdit]=\"false\" autocomplete=\"new-password\" required=\"true\">\r\n                            </ion-input>\r\n                        </core-show-password>\r\n                        <p *ngIf=\"settings.passwordpolicy\" class=\"core-input-footnote\">\r\n                            {{settings.passwordpolicy}}\r\n                        </p>\r\n                        <core-input-errors [control]=\"signupForm.controls.password\" [errorMessages]=\"passwordErrors\"></core-input-errors>\r\n                    </ion-item>\r\n\r\n                    <!-- More details. -->\r\n                    <ion-item-divider class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <h3>{{ 'core.login.supplyinfo' | translate }}</h3>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">\r\n                            <span core-mark-required=\"true\">{{ 'core.user.email' | translate }}</span>\r\n                        </ion-label>\r\n                        <ion-input type=\"email\" name=\"email\" placeholder=\"{{ 'core.user.email' | translate }}\" formControlName=\"email\"\r\n                            autocapitalize=\"none\" autocorrect=\"off\">\r\n                        </ion-input>\r\n                        <core-input-errors [control]=\"signupForm.controls.email\" [errorMessages]=\"emailErrors\"></core-input-errors>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">\r\n                            <span core-mark-required=\"true\">{{ 'core.user.emailagain' | translate }}</span>\r\n                        </ion-label>\r\n                        <ion-input type=\"email\" name=\"email2\" placeholder=\"{{ 'core.user.emailagain' | translate }}\" autocapitalize=\"none\"\r\n                            formControlName=\"email2\" autocorrect=\"off\" [pattern]=\"escapeMail(signupForm.controls.email.value)\">\r\n                        </ion-input>\r\n                        <core-input-errors [control]=\"signupForm.controls.email2\" [errorMessages]=\"email2Errors\"></core-input-errors>\r\n                    </ion-item>\r\n                    <ion-item *ngFor=\"let nameField of settings.namefields\" class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">\r\n                            <span core-mark-required=\"true\">{{ 'core.user.' + nameField | translate }}</span>\r\n                        </ion-label>\r\n                        <ion-input type=\"text\" [name]=\"nameField\" placeholder=\"{{ 'core.user.' + nameField | translate }}\"\r\n                            formControlName=\"{{nameField}}\" autocorrect=\"off\">\r\n                        </ion-input>\r\n                        <core-input-errors [control]=\"signupForm.controls[nameField]\" [errorMessages]=\"namefieldsErrors![nameField]\">\r\n                        </core-input-errors>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">{{ 'core.user.city' | translate }}</ion-label>\r\n                        <ion-input type=\"text\" name=\"city\" placeholder=\"{{ 'core.user.city' | translate }}\" formControlName=\"city\"\r\n                            autocorrect=\"off\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\" id=\"core-login-signup-country\">{{ 'core.user.country' | translate }}</ion-label>\r\n                        <ion-select name=\"country\" formControlName=\"country\" aria-labelledby=\"core-login-signup-country\"\r\n                            [placeholder]=\"'core.login.selectacountry' | translate\">\r\n\r\n                            <ion-select-option value=\"\">{{ 'core.login.selectacountry' | translate }}</ion-select-option>\r\n                            <ion-select-option *ngFor=\"let country of countries\" [value]=\"country.code\">{{country.name}}</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n\r\n                    <!-- Other categories. -->\r\n                    <ng-container *ngFor=\"let category of categories\">\r\n                        <ion-item-divider class=\"ion-text-wrap\">\r\n                            <ion-label>\r\n                                <p class=\"item-heading\">{{ category.name }}</p>\r\n                            </ion-label>\r\n                        </ion-item-divider>\r\n                        <core-user-profile-field *ngFor=\"let field of category.fields\" [field]=\"field\" [edit]=\"true\" [signup]=\"true\"\r\n                            registerAuth=\"email\" [form]=\"signupForm\"></core-user-profile-field>\r\n                    </ng-container>\r\n\r\n                    <!-- ReCAPTCHA -->\r\n                    <ng-container *ngIf=\"settings.recaptchapublickey\">\r\n                        <ion-item-divider class=\"ion-text-wrap\">\r\n                            <ion-label>\r\n                                <h3><span [core-mark-required]=\"true\">{{ 'core.login.security_question' | translate }}</span></h3>\r\n                            </ion-label>\r\n                        </ion-item-divider>\r\n                        <core-recaptcha [publicKey]=\"settings.recaptchapublickey\" [model]=\"captcha\" [siteUrl]=\"siteUrl\"></core-recaptcha>\r\n                    </ng-container>\r\n\r\n                    <!-- Site policy (if any). -->\r\n                    <ng-container *ngIf=\"settings.sitepolicy\">\r\n                        <ion-item-divider class=\"ion-text-wrap\">\r\n                            <ion-label>\r\n                                <h3>{{ 'core.login.policyagreement' | translate }}</h3>\r\n                            </ion-label>\r\n                        </ion-item-divider>\r\n                        <ion-item class=\"ion-text-wrap\">\r\n                            <ion-label>\r\n                                <a [href]=\"settings.sitepolicy\" core-link capture=\"false\">\r\n                                    {{ 'core.login.policyagreementclick' | translate }}\r\n                                </a>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                        <ion-item class=\"ion-text-wrap\">\r\n                            <ion-label>\r\n                                <span [core-mark-required]=\"true\">{{ 'core.login.policyacceptmandatory' | translate }}</span>\r\n                                <core-input-errors [control]=\"signupForm.controls.policyagreed\" [errorMessages]=\"policyErrors\">\r\n                                </core-input-errors>\r\n                            </ion-label>\r\n                            <ion-checkbox slot=\"end\" name=\"policyagreed\" formControlName=\"policyagreed\"></ion-checkbox>\r\n                        </ion-item>\r\n                    </ng-container>\r\n\r\n                    <!-- Submit button. -->\r\n                    <ion-button expand=\"block\" class=\"ion-margin\" type=\"submit\">{{ 'core.login.createaccount' | translate }}</ion-button>\r\n                    <!-- Remove this once Ionic fixes this bug: https://github.com/ionic-team/ionic-framework/issues/19368 -->\r\n                    <input type=\"submit\" class=\"core-submit-hidden-enter\" />\r\n                </form>\r\n            </ng-container>\r\n        </div>\r\n    </core-loading>\r\n\r\n    <div class=\"list-item-limited-width\">\r\n        <ion-list *ngIf=\"allRequiredSupported && isMinor\">\r\n            <ion-item-divider class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <h3 *ngIf=\"siteName\" class=\"item-heading ion-padding\">\r\n                        <core-format-text [text]=\"siteName\" [filter]=\"false\"></core-format-text>\r\n                    </h3>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <h3 class=\"item-heading\">{{ 'core.considereddigitalminor' | translate }}</h3>\r\n                    <p>{{ 'core.digitalminor_desc' | translate }}</p>\r\n                    <p *ngIf=\"supportName\">{{ supportName }}</p>\r\n                    <p *ngIf=\"supportEmail\">{{ supportEmail }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-button *ngIf=\"!supportName && !supportEmail\" expand=\"block\" class=\"ion-margin\" (click)=\"showContactOnSite()\">\r\n                {{ 'core.openinbrowser' | translate }}\r\n            </ion-button>\r\n        </ion-list>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/login/pages/email-signup/email-signup.module.ts":
/*!***************************************************************************!*\
  !*** ./src/core/features/login/pages/email-signup/email-signup.module.ts ***!
  \***************************************************************************/
/*! exports provided: CoreLoginEmailSignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginEmailSignupPageModule", function() { return CoreLoginEmailSignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_user_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/user/components/components.module */ "./src/core/features/user/components/components.module.ts");
/* harmony import */ var _email_signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-signup */ "./src/core/features/login/pages/email-signup/email-signup.ts");
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
        component: _email_signup__WEBPACK_IMPORTED_MODULE_5__["CoreLoginEmailSignupPage"],
    },
];
let CoreLoginEmailSignupPageModule = class CoreLoginEmailSignupPageModule {
};
CoreLoginEmailSignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_user_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreUserComponentsModule"],
        ],
        declarations: [
            _email_signup__WEBPACK_IMPORTED_MODULE_5__["CoreLoginEmailSignupPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreLoginEmailSignupPageModule);



/***/ }),

/***/ "./src/core/features/login/pages/email-signup/email-signup.ts":
/*!********************************************************************!*\
  !*** ./src/core/features/login/pages/email-signup/email-signup.ts ***!
  \********************************************************************/
/*! exports provided: CoreLoginEmailSignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginEmailSignupPage", function() { return CoreLoginEmailSignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_ws__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/ws */ "./src/core/services/ws.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _features_user_services_user_profile_field_delegate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/user/services/user-profile-field-delegate */ "./src/core/features/user/services/user-profile-field-delegate.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _components_recaptcha_recaptcha__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/recaptcha/recaptcha */ "./src/core/components/recaptcha/recaptcha.ts");
/* harmony import */ var _singletons_text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @singletons/text */ "./src/core/singletons/text.ts");
/* harmony import */ var _singletons_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @singletons/dom */ "./src/core/singletons/dom.ts");
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
 * Page to signup using email.
 */
let CoreLoginEmailSignupPage = class CoreLoginEmailSignupPage {
    constructor(fb, elementRef, changeDetector) {
        this.fb = fb;
        this.elementRef = elementRef;
        this.changeDetector = changeDetector;
        this.authInstructions = '';
        this.settingsLoaded = false;
        this.allRequiredSupported = true;
        this.captcha = {
            recaptcharesponse: '',
        };
        this.isMinor = false; // Whether the user is minor age.
        // Create the ageVerificationForm.
        this.ageVerificationForm = this.fb.group({
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.countryControl = this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.ageVerificationForm.addControl('country', this.countryControl);
        // Create the signupForm with the basic controls. More controls will be added later.
        this.signupForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            email2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
        });
        // Setup validation errors.
        this.usernameErrors = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_11__["CoreLoginHelper"].getErrorMessages('core.login.usernamerequired');
        this.passwordErrors = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_11__["CoreLoginHelper"].getErrorMessages('core.login.passwordrequired');
        this.emailErrors = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_11__["CoreLoginHelper"].getErrorMessages('core.login.missingemail');
        this.policyErrors = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_11__["CoreLoginHelper"].getErrorMessages('core.login.policyagree');
        this.email2Errors = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_11__["CoreLoginHelper"].getErrorMessages('core.login.missingemail', undefined, 'core.login.emailnotmatch');
    }
    /**
     * Component initialized.
     */
    ngOnInit() {
        const siteUrl = _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteParam('siteUrl');
        if (!siteUrl) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal('Site URL not supplied.');
            _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].back();
            return;
        }
        this.siteUrl = siteUrl;
        // Fetch the data.
        this.fetchData().finally(() => {
            this.settingsLoaded = true;
        });
    }
    /**
     * Complete the FormGroup using the settings received from server.
     */
    completeFormGroup() {
        var _a, _b, _c, _d, _e;
        this.signupForm.addControl('city', this.fb.control(((_a = this.settings) === null || _a === void 0 ? void 0 : _a.defaultcity) || ''));
        this.signUpCountryControl = this.fb.control(((_b = this.settings) === null || _b === void 0 ? void 0 : _b.country) || '');
        this.signupForm.addControl('country', this.signUpCountryControl);
        // Add the name fields.
        for (const i in (_c = this.settings) === null || _c === void 0 ? void 0 : _c.namefields) {
            this.signupForm.addControl((_d = this.settings) === null || _d === void 0 ? void 0 : _d.namefields[i], this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
        }
        if ((_e = this.settings) === null || _e === void 0 ? void 0 : _e.sitepolicy) {
            this.signupForm.addControl('policyagreed', this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue));
        }
    }
    /**
     * Fetch the required data from the server.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Get site config.
                this.siteConfig = yield _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getSitePublicConfig(this.siteUrl);
                this.signupUrl = _singletons_text__WEBPACK_IMPORTED_MODULE_15__["CoreText"].concatenatePaths(this.siteConfig.httpswwwroot, 'login/signup.php');
                if (this.treatSiteConfig()) {
                    // Check content verification.
                    if (this.ageDigitalConsentVerification === undefined) {
                        const result = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_ws__WEBPACK_IMPORTED_MODULE_7__["CoreWS"].callAjax('core_auth_is_age_digital_consent_verification_enabled', {}, { siteUrl: this.siteUrl }));
                        this.ageDigitalConsentVerification = !!(result === null || result === void 0 ? void 0 : result.status);
                    }
                    yield this.getSignupSettings();
                }
                this.completeFormGroup();
            }
            catch (error) {
                if (this.allRequiredSupported) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(error);
                }
            }
        });
    }
    /**
     * Get signup settings from server.
     *
     * @return Promise resolved when done.
     */
    getSignupSettings() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.settings = yield _services_ws__WEBPACK_IMPORTED_MODULE_7__["CoreWS"].callAjax('auth_email_get_signup_settings', {}, { siteUrl: this.siteUrl });
            if (_features_user_services_user_profile_field_delegate__WEBPACK_IMPORTED_MODULE_10__["CoreUserProfileFieldDelegate"].hasRequiredUnsupportedField(this.settings.profilefields)) {
                this.allRequiredSupported = false;
                throw new Error(_singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('core.login.signuprequiredfieldnotsupported'));
            }
            this.categories = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_11__["CoreLoginHelper"].formatProfileFieldsForSignup(this.settings.profilefields);
            if (this.settings.recaptchapublickey) {
                this.captcha.recaptcharesponse = ''; // Reset captcha.
            }
            if (!this.countryControl.value) {
                this.countryControl.setValue(this.settings.country || '');
            }
            this.namefieldsErrors = {};
            if (this.settings.namefields) {
                this.settings.namefields.forEach((field) => {
                    this.namefieldsErrors[field] = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_11__["CoreLoginHelper"].getErrorMessages('core.login.missing' + field);
                });
            }
            this.countries = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].getCountryListSorted();
        });
    }
    /**
     * Treat the site config, checking if it's valid and extracting the data we're interested in.
     *
     * @return True if success.
     */
    treatSiteConfig() {
        var _a;
        if (((_a = this.siteConfig) === null || _a === void 0 ? void 0 : _a.registerauth) == 'email' && !_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_11__["CoreLoginHelper"].isEmailSignupDisabled(this.siteConfig)) {
            this.siteName = _core_constants__WEBPACK_IMPORTED_MODULE_8__["CoreConstants"].CONFIG.sitename ? _core_constants__WEBPACK_IMPORTED_MODULE_8__["CoreConstants"].CONFIG.sitename : this.siteConfig.sitename;
            this.authInstructions = this.siteConfig.authinstructions;
            this.ageDigitalConsentVerification = this.siteConfig.agedigitalconsentverification;
            this.supportName = this.siteConfig.supportname;
            this.supportEmail = this.siteConfig.supportemail;
            this.countryControl.setValue(this.siteConfig.country || '');
            return true;
        }
        else {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(_singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('core.login.signupplugindisabled', { $a: _singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('core.login.auth_email') }));
            _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].back();
            return false;
        }
    }
    /**
     * Create account.
     *
     * @param e Event.
     * @return Promise resolved when done.
     */
    create(e) {
        var _a, _b, _c, _d, _e, _f;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            if (!this.signupForm.valid || (((_a = this.settings) === null || _a === void 0 ? void 0 : _a.recaptchapublickey) && !this.captcha.recaptcharesponse)) {
                // Form not valid. Mark all controls as dirty to display errors.
                for (const name in this.signupForm.controls) {
                    this.signupForm.controls[name].markAsDirty();
                }
                this.changeDetector.detectChanges();
                // Scroll to the first element with errors.
                const errorFound = yield _singletons_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDom"].scrollToInputError(this.elementRef.nativeElement);
                if (!errorFound) {
                    // Input not found, show an error modal.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal('core.errorinvalidform', true);
                }
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showModalLoading('core.sending', true);
            const params = {
                username: this.signupForm.value.username.trim().toLowerCase(),
                password: this.signupForm.value.password,
                firstname: _services_utils_text__WEBPACK_IMPORTED_MODULE_5__["CoreTextUtils"].cleanTags(this.signupForm.value.firstname),
                lastname: _services_utils_text__WEBPACK_IMPORTED_MODULE_5__["CoreTextUtils"].cleanTags(this.signupForm.value.lastname),
                email: this.signupForm.value.email.trim(),
                city: _services_utils_text__WEBPACK_IMPORTED_MODULE_5__["CoreTextUtils"].cleanTags(this.signupForm.value.city),
                country: this.signupForm.value.country,
            };
            if ((_b = this.siteConfig) === null || _b === void 0 ? void 0 : _b.launchurl) {
                params.redirect = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_11__["CoreLoginHelper"].prepareForSSOLogin(this.siteUrl, undefined, this.siteConfig.launchurl);
            }
            // Get the recaptcha response (if needed).
            if (((_c = this.settings) === null || _c === void 0 ? void 0 : _c.recaptchapublickey) && this.captcha.recaptcharesponse) {
                params.recaptcharesponse = this.captcha.recaptcharesponse;
            }
            try {
                // Get the data for the custom profile fields.
                params.customprofilefields = yield _features_user_services_user_profile_field_delegate__WEBPACK_IMPORTED_MODULE_10__["CoreUserProfileFieldDelegate"].getDataForFields((_d = this.settings) === null || _d === void 0 ? void 0 : _d.profilefields, true, 'email', this.signupForm.value);
                const result = yield _services_ws__WEBPACK_IMPORTED_MODULE_7__["CoreWS"].callAjax('auth_email_signup_user', params, { siteUrl: this.siteUrl });
                if (result.success) {
                    _singletons_form__WEBPACK_IMPORTED_MODULE_13__["CoreForms"].triggerFormSubmittedEvent(this.signupFormElement, true);
                    // Show alert and ho back.
                    const message = _singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('core.login.emailconfirmsent', { $a: params.email });
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showAlert(_singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('core.success'), message);
                    _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].back();
                }
                else {
                    (_e = this.recaptchaComponent) === null || _e === void 0 ? void 0 : _e.expireRecaptchaAnswer();
                    const warning = (_f = result.warnings) === null || _f === void 0 ? void 0 : _f[0];
                    if (warning) {
                        let error = warning.message;
                        if (error == 'incorrect-captcha-sol' || (!error && warning.item == 'recaptcharesponse')) {
                            error = _singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('core.login.recaptchaincorrect');
                        }
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(error);
                    }
                    else {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal('core.login.usernotaddederror', true);
                    }
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'core.login.usernotaddederror', true);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Escape mail to avoid special characters to be treated as a RegExp.
     *
     * @param text Initial mail.
     * @return Escaped mail.
     */
    escapeMail(text) {
        return _services_utils_text__WEBPACK_IMPORTED_MODULE_5__["CoreTextUtils"].escapeForRegex(text);
    }
    /**
     * Show authentication instructions.
     */
    showAuthInstructions() {
        _services_utils_text__WEBPACK_IMPORTED_MODULE_5__["CoreTextUtils"].viewText(_singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('core.login.instructions'), this.authInstructions);
    }
    /**
     * Show contact information on site (we have to display again the age verification form).
     */
    showContactOnSite() {
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].openInBrowser(_singletons_text__WEBPACK_IMPORTED_MODULE_15__["CoreText"].concatenatePaths(this.siteUrl, '/login/verify_age_location.php'), { showBrowserWarning: false });
    }
    /**
     * Verify Age.
     *
     * @param e Event.
     * @return Promise resolved when done.
     */
    verifyAge(e) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            if (!this.ageVerificationForm.valid) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal('core.errorinvalidform', true);
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showModalLoading('core.sending', true);
            const params = this.ageVerificationForm.value;
            params.age = parseInt(params.age, 10); // Use just the integer part.
            try {
                const result = yield _services_ws__WEBPACK_IMPORTED_MODULE_7__["CoreWS"].callAjax('core_auth_is_minor', params, { siteUrl: this.siteUrl });
                _singletons_form__WEBPACK_IMPORTED_MODULE_13__["CoreForms"].triggerFormSubmittedEvent(this.ageFormElement, true);
                if (!result.status) {
                    if (this.countryControl.value) {
                        (_a = this.signUpCountryControl) === null || _a === void 0 ? void 0 : _a.setValue(this.countryControl.value);
                    }
                    // Not a minor, go ahead.
                    this.ageDigitalConsentVerification = false;
                }
                else {
                    // Is a minor.
                    this.isMinor = true;
                }
            }
            catch (_b) {
                // Something wrong, redirect to the site.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal('There was an error verifying your age, please try again using the browser.');
            }
            finally {
                modal.dismiss();
            }
        });
    }
};
CoreLoginEmailSignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
CoreLoginEmailSignupPage.propDecorators = {
    recaptchaComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_recaptcha_recaptcha__WEBPACK_IMPORTED_MODULE_14__["CoreRecaptchaComponent"],] }],
    ageFormElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['ageForm',] }],
    signupFormElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['signupFormEl',] }]
};
CoreLoginEmailSignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-email-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email-signup.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/email-signup/email-signup.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../login.scss */ "./src/core/features/login/login.scss")).default]
    })
], CoreLoginEmailSignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-email-signup-email-signup-module.js.map