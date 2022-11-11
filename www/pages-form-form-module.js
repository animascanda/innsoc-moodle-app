(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/form/form.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/form/form.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <core-loading [hideUntil]=\"feedbackLoaded\" class=\"has-spacer\">\r\n        <ng-container *ngIf=\"items && items.length\">\r\n            <ion-list class=\"ion-no-margin has-spacer\">\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <h2>{{ 'addon.mod_feedback.mode' | translate }}</h2>\r\n                        <p *ngIf=\"access!.isanonymous\">{{ 'addon.mod_feedback.anonymous' | translate }}</p>\r\n                        <p *ngIf=\"!access!.isanonymous\">{{ 'addon.mod_feedback.non_anonymous' | translate }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ng-container *ngFor=\"let item of items\">\r\n                    <core-spacer *ngIf=\"item.typ == 'pagebreak'\"></core-spacer>\r\n                    <ng-container *ngIf=\"item.typ != 'pagebreak'\">\r\n                        <ion-item class=\"ion-text-wrap addon-mod_feedback-item\" [color]=\"item.dependitem > 0 ? 'light' : ''\"\r\n                            [class.core-danger-item]=\"item.isEmpty || item.hasError\">\r\n                            <ion-label [position]=\"item.hasTextInput ? 'stacked' : undefined\">\r\n                                <p *ngIf=\"item.name\" [core-mark-required]=\"item.required\">\r\n                                    <span *ngIf=\"feedback!.autonumbering && item.itemnumber\">{{item.itemnumber}}. </span>\r\n                                    <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"item.name\" contextLevel=\"module\"\r\n                                        [contextInstanceId]=\"cmId\" [courseId]=\"courseId\" [wsNotFiltered]=\"true\">\r\n                                    </core-format-text>\r\n                                    <span *ngIf=\"item.postfix\" class=\"addon-mod_feedback-postfix\">{{item.postfix}}</span>\r\n                                </p>\r\n                                <p *ngIf=\"item.templateName == 'label'\">\r\n                                    <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"item.presentation\"\r\n                                        contextLevel=\"module\" [contextInstanceId]=\"cmId\" [wsNotFiltered]=\"true\" [courseId]=\"courseId\">\r\n                                    </core-format-text>\r\n                                </p>\r\n                            </ion-label>\r\n\r\n                            <ion-input *ngIf=\"item.templateName == 'textfield'\" type=\"text\" [(ngModel)]=\"item.value\" autocorrect=\"off\"\r\n                                name=\"{{item.typ}}_{{item.id}}\" maxlength=\"{{item.length}}\" [required]=\"item.required\">\r\n                            </ion-input>\r\n\r\n                            <ng-container *ngIf=\"item.templateName == 'numeric'\">\r\n                                <ion-input type=\"number\" [(ngModel)]=\"item.value\" name=\"{{item.typ}}_{{item.id}}\"\r\n                                    [required]=\"item.required\">\r\n                                </ion-input>\r\n                                <ion-text *ngIf=\"item.hasError\" color=\"danger\" class=\"addon-mod_feedback-item-error\">\r\n                                    {{ 'addon.mod_feedback.numberoutofrange' | translate }} [{{item.rangefrom}}\r\n                                    <span *ngIf=\"item.rangefrom && item.rangeto\">, </span>{{item.rangeto}}]\r\n                                </ion-text>\r\n                            </ng-container>\r\n\r\n                            <ion-textarea *ngIf=\"item.templateName == 'textarea'\" [required]=\"item.required\" name=\"{{item.typ}}_{{item.id}}\"\r\n                                [(ngModel)]=\"item.value\">\r\n                            </ion-textarea>\r\n\r\n                            <ion-select *ngIf=\"item.templateName == 'multichoice-d'\" [required]=\"item.required\"\r\n                                name=\"{{item.typ}}_{{item.id}}\" [(ngModel)]=\"item.value\" interface=\"action-sheet\"\r\n                                [interfaceOptions]=\"{header: item.name}\">\r\n                                <ion-select-option *ngFor=\"let option of item.choices\" [value]=\"option.value\">\r\n                                    <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"option.label\"\r\n                                        contextLevel=\"module\" [contextInstanceId]=\"cmId\" [wsNotFiltered]=\"true\" [courseId]=\"courseId\">\r\n                                    </core-format-text>\r\n                                </ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n\r\n                        <ion-radio-group *ngIf=\"item.templateName == 'multichoice-r'\" [(ngModel)]=\"item.value\" [required]=\"item.required\"\r\n                            name=\"{{item.typ}}_{{item.id}}\">\r\n                            <ion-item *ngFor=\"let option of item.choices\">\r\n                                <ion-label>\r\n                                    <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"option.label\"\r\n                                        contextLevel=\"module\" [contextInstanceId]=\"cmId\" [wsNotFiltered]=\"true\" [courseId]=\"courseId\">\r\n                                    </core-format-text>\r\n                                </ion-label>\r\n                                <ion-radio slot=\"start\" [value]=\"option.value\"></ion-radio>\r\n                            </ion-item>\r\n                        </ion-radio-group>\r\n\r\n                        <ng-container *ngIf=\"item.templateName == 'multichoice-c'\">\r\n                            <ion-item *ngFor=\"let option of item.choices\">\r\n                                <ion-label>\r\n                                    <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"option.label\"\r\n                                        contextLevel=\"module\" [contextInstanceId]=\"cmId\" [wsNotFiltered]=\"true\" [courseId]=\"courseId\">\r\n                                    </core-format-text>\r\n                                </ion-label>\r\n                                <ion-checkbox [required]=\"item.required\" name=\"{{item.typ}}_{{item.id}}\" [(ngModel)]=\"option.checked\"\r\n                                    value=\"option.value\">\r\n                                </ion-checkbox>\r\n                            </ion-item>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"item.templateName == 'captcha'\">\r\n                            <core-recaptcha *ngIf=\"!preview && !offline\" [publicKey]=\"item.captcha.recaptchapublickey\" [model]=\"item\"\r\n                                modelValueName=\"value\">\r\n                            </core-recaptcha>\r\n                            <div *ngIf=\"!preview && (!item.captcha || offline)\" class=\"core-warning-card\">\r\n                                <ion-item>\r\n                                    <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                                    <ion-label>{{ 'addon.mod_feedback.captchaofflinewarning' | translate }}</ion-label>\r\n                                </ion-item>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <ion-row class=\"ion-align-items-center spacer-top\" *ngIf=\"!preview\">\r\n                    <ion-col *ngIf=\"hasPrevPage\">\r\n                        <ion-button expand=\"block\" fill=\"outline\" (click)=\"gotoPage(true)\" class=\"ion-text-wrap\">\r\n                            <ion-icon name=\"fas-chevron-left\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                            {{ 'core.previous' | translate }}\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col *ngIf=\"hasNextPage\">\r\n                        <ion-button expand=\"block\" (click)=\"gotoPage(false)\" class=\"ion-text-wrap\">\r\n                            {{ 'core.next' | translate }}\r\n                            <ion-icon name=\"fas-chevron-right\" slot=\"end\" aria-hidden=\"true\"></ion-icon>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col *ngIf=\"!hasNextPage\">\r\n                        <ion-button expand=\"block\" (click)=\"gotoPage(false)\" class=\"ion-text-wrap\">\r\n                            {{ 'core.submit' | translate }}\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-list>\r\n        </ng-container>\r\n\r\n        <ion-card class=\"core-success-card\" *ngIf=\"completed\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-icon name=\"fas-check\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>\r\n                    <p *ngIf=\"!completionPageContents && !completedOffline\">\r\n                        {{ 'addon.mod_feedback.this_feedback_is_already_submitted' | translate }}\r\n                    </p>\r\n                    <p *ngIf=\"!completionPageContents && completedOffline\">\r\n                        {{ 'addon.mod_feedback.feedback_submitted_offline' | translate }}\r\n                    </p>\r\n                    <core-format-text *ngIf=\"completionPageContents\" [component]=\"component\" componentId=\"componentId\"\r\n                        [text]=\"completionPageContents\" contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                    </core-format-text>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <div collapsible-footer *ngIf=\"feedbackLoaded && completed\" slot=\"fixed\" appearOnBottom>\r\n            <div class=\"list-item-limited-width adaptable-buttons-row\">\r\n                <ion-button expand=\"block\" fill=\"outline\" (click)=\"showAnalysis()\" class=\"ion-text-wrap ion-margin\"\r\n                    *ngIf=\"access!.canviewanalysis\">\r\n                    <ion-icon name=\"fas-chart-bar\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    {{ 'addon.mod_feedback.completed_feedbacks' | translate }}\r\n                </ion-button>\r\n                <ion-button expand=\"block\" (click)=\"continue()\" class=\"ion-text-wrap ion-margin\">\r\n                    <ng-container *ngIf=\"!siteAfterSubmit\">{{ 'core.continue' | translate }}</ng-container>\r\n                    <ng-container *ngIf=\"siteAfterSubmit\">{{ 'core.course.nextactivity' | translate }}</ng-container>\r\n                </ion-button>\r\n            </div>\r\n        </div>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/feedback/pages/form/form.module.ts":
/*!***********************************************************!*\
  !*** ./src/addons/mod/feedback/pages/form/form.module.ts ***!
  \***********************************************************/
/*! exports provided: AddonModFeedbackFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackFormPageModule", function() { return AddonModFeedbackFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form */ "./src/addons/mod/feedback/pages/form/form.ts");
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
        component: _form__WEBPACK_IMPORTED_MODULE_5__["AddonModFeedbackFormPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_4__["CanLeaveGuard"]],
    },
];
let AddonModFeedbackFormPageModule = class AddonModFeedbackFormPageModule {
};
AddonModFeedbackFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _form__WEBPACK_IMPORTED_MODULE_5__["AddonModFeedbackFormPage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], AddonModFeedbackFormPageModule);



/***/ }),

/***/ "./src/addons/mod/feedback/pages/form/form.scss":
/*!******************************************************!*\
  !*** ./src/addons/mod/feedback/pages/form/form.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-mod_feedback-item ion-label.label-stacked {\n  margin: 11px 0px 10px;\n  transform: none;\n}\n:host .addon-mod_feedback-item-error {\n  padding-top: 5px;\n  padding-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2ZlZWRiYWNrL3BhZ2VzL2Zvcm0vZm9ybS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FBQVI7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFEUiIsImZpbGUiOiJzcmMvYWRkb25zL21vZC9mZWVkYmFjay9wYWdlcy9mb3JtL2Zvcm0uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC5hZGRvbi1tb2RfZmVlZGJhY2staXRlbSBpb24tbGFiZWwubGFiZWwtc3RhY2tlZCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMXB4IDBweCAxMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkb24tbW9kX2ZlZWRiYWNrLWl0ZW0tZXJyb3Ige1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/addons/mod/feedback/pages/form/form.ts":
/*!****************************************************!*\
  !*** ./src/addons/mod/feedback/pages/form/form.ts ***!
  \****************************************************/
/*! exports provided: AddonModFeedbackFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackFormPage", function() { return AddonModFeedbackFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/contentlinks/services/contentlinks-helper */ "./src/core/features/contentlinks/services/contentlinks-helper.ts");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_feedback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/feedback */ "./src/addons/mod/feedback/services/feedback.ts");
/* harmony import */ var _services_feedback_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/feedback-helper */ "./src/addons/mod/feedback/services/feedback-helper.ts");
/* harmony import */ var _services_feedback_sync__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/feedback-sync */ "./src/addons/mod/feedback/services/feedback-sync.ts");
/* harmony import */ var _services_handlers_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/handlers/module */ "./src/addons/mod/feedback/services/handlers/module.ts");
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
 * Page that displays feedback form.
 */
let AddonModFeedbackFormPage = class AddonModFeedbackFormPage {
    constructor() {
        this.forceLeave = false;
        this.preview = false;
        this.fromIndex = false;
        this.component = _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedbackProvider"].COMPONENT;
        this.offline = false;
        this.feedbackLoaded = false;
        this.items = [];
        this.hasPrevPage = false;
        this.hasNextPage = false;
        this.completed = false;
        this.completedOffline = false;
        this.currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getRequiredCurrentSite();
        // Refresh online status when changes.
        this.onlineObserver = _services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_10__["NgZone"].run(() => {
                this.offline = !_services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].isOnline();
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.currentPage = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('page');
                this.title = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('title');
                this.preview = !!_services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteBooleanParam('preview');
                this.fromIndex = !!_services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteBooleanParam('fromIndex');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return;
            }
            yield this.fetchData();
            if (!this.feedback) {
                return;
            }
            try {
                yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].logView(this.feedback.id, this.feedback.name, true);
                _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].checkModuleCompletion(this.courseId, this.module.completiondata);
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * View entered.
     */
    ionViewDidEnter() {
        this.forceLeave = false;
    }
    /**
     * @inheritdoc
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave) {
                return true;
            }
            if (!this.preview) {
                const responses = _services_feedback_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModFeedbackHelper"].getPageItemsResponses(this.items);
                if (this.items && !this.completed && this.originalData) {
                    // Form submitted. Check if there is any change.
                    if (!_services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].basicLeftCompare(responses, this.originalData, 3)) {
                        yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.confirmcanceledit'));
                    }
                }
            }
            return true;
        });
    }
    /**
     * Fetch all the data required for the view.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.module = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].getModule(this.cmId, this.courseId, undefined, true, false, this.currentSite.getId());
                this.offline = !_services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].isOnline();
                const options = {
                    cmId: this.cmId,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                    siteId: this.currentSite.getId(),
                };
                this.feedback = yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getFeedback(this.courseId, this.cmId);
                this.title = this.feedback.name || this.title;
                yield this.fetchAccessData(options);
                let page = 0;
                if (!this.preview && this.access.cansubmit && !this.access.isempty) {
                    page = (_a = this.currentPage) !== null && _a !== void 0 ? _a : yield this.fetchResumePage(options);
                }
                else {
                    this.preview = true;
                }
                yield this.fetchFeedbackPageData(page);
            }
            catch (message) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(message, 'core.course.errorgetmodule', true);
                this.forceLeave = true;
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
            }
            finally {
                this.feedbackLoaded = true;
            }
        });
    }
    /**
     * Fetch access information.
     *
     * @param options Options.
     * @return Promise resolved when done.
     */
    fetchAccessData(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.access = yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getFeedbackAccessInformation(this.feedback.id, options);
            }
            catch (error) {
                if (this.offline || _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].isWebServiceError(error)) {
                    // Already offline or shouldn't go offline, fail.
                    throw error;
                }
                // If it fails, go offline.
                this.offline = true;
                options.readingStrategy = 1 /* PREFER_CACHE */;
                this.access = yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getFeedbackAccessInformation(this.feedback.id, options);
            }
        });
    }
    /**
     * Get resume page from WS.
     *
     * @param options Options.
     * @return Promise resolved with the page to resume.
     */
    fetchResumePage(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getResumePage(this.feedback.id, options);
            }
            catch (error) {
                if (this.offline || _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].isWebServiceError(error)) {
                    // Already offline or shouldn't go offline, fail.
                    throw error;
                }
                // Go offline.
                this.offline = true;
                options.readingStrategy = 1 /* PREFER_CACHE */;
                return _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getResumePage(this.feedback.id, options);
            }
        });
    }
    /**
     * Fetch page data.
     *
     * @param page Page to load.
     * @return Promise resolved when done.
     */
    fetchFeedbackPageData(page = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.items = [];
            const response = yield this.fetchPageItems(page);
            this.items = response.items
                .map((itemData) => _services_feedback_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModFeedbackHelper"].getItemForm(itemData, this.preview))
                .filter((itemData) => itemData); // Filter items with errors.
            if (!this.preview) {
                const itemsCopy = _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].clone(this.items); // Copy the array to avoid modifications.
                this.originalData = _services_feedback_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModFeedbackHelper"].getPageItemsResponses(itemsCopy);
            }
        });
    }
    /**
     * Fetch page items.
     *
     * @param page Page to get.
     * @return Promise resolved with WS response.
     */
    fetchPageItems(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                cmId: this.cmId,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                siteId: this.currentSite.getId(),
            };
            if (this.preview) {
                const response = yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getItems(this.feedback.id, options);
                return {
                    items: response.items,
                    warnings: response.warnings,
                    hasnextpage: false,
                    hasprevpage: false,
                };
            }
            this.currentPage = page;
            let response;
            try {
                response = yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getPageItemsWithValues(this.feedback.id, page, options);
            }
            catch (error) {
                if (this.offline || _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].isWebServiceError(error)) {
                    // Already offline or shouldn't go offline, fail.
                    throw error;
                }
                // Go offline.
                this.offline = true;
                options.readingStrategy = 1 /* PREFER_CACHE */;
                response = yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getPageItemsWithValues(this.feedback.id, page, options);
            }
            this.hasPrevPage = !!response.hasprevpage;
            this.hasNextPage = !!response.hasnextpage;
            return response;
        });
    }
    /**
     * Function to allow page navigation through the questions form.
     *
     * @param goPrevious If true it will go back to the previous page, if false, it will go forward.
     * @return Resolved when done.
     */
    gotoPage(goPrevious) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
            this.feedbackLoaded = false;
            const responses = _services_feedback_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModFeedbackHelper"].getPageItemsResponses(this.items);
            const formHasErrors = this.items.some((item) => item.isEmpty || item.hasError);
            try {
                // Sync other pages first.
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(_services_feedback_sync__WEBPACK_IMPORTED_MODULE_14__["AddonModFeedbackSync"].syncFeedback(this.feedback.id));
                const response = yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].processPage(this.feedback.id, this.currentPage, responses, {
                    goPrevious,
                    formHasErrors,
                    courseId: this.courseId,
                    cmId: this.cmId,
                });
                if (response.completed) {
                    // Form is completed, show completion message and buttons.
                    this.items = [];
                    this.completed = true;
                    this.completedOffline = !!response.offline;
                    this.completionPageContents = response.completionpagecontents;
                    this.siteAfterSubmit = response.siteaftersubmit;
                    _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'feedback' });
                    // Invalidate access information so user will see home page updated (continue form or completion messages).
                    yield Promise.all([
                        _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].invalidateFeedbackAccessInformationData(this.feedback.id),
                        _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].invalidateResumePageData(this.feedback.id),
                    ]);
                    // If form has been submitted, the info has been already invalidated but we should update index view.
                    _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedbackProvider"].FORM_SUBMITTED, {
                        feedbackId: this.feedback.id,
                        tab: 'overview',
                        offline: this.completedOffline,
                    });
                    yield this.fetchAccessData({
                        cmId: this.cmId,
                        readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                        siteId: this.currentSite.getId(),
                    });
                }
                else if (typeof response.jumpto != 'number' || response.jumpto == this.currentPage) {
                    // Errors on questions, stay in page.
                }
                else {
                    // Invalidate access information so user will see home page updated (continue form).
                    yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].invalidateResumePageData(this.feedback.id);
                    _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedbackProvider"].FORM_SUBMITTED, {
                        feedbackId: this.feedback.id,
                        tab: 'overview',
                        offline: this.completedOffline,
                    });
                    // Fetch the new page.
                    yield this.fetchFeedbackPageData(response.jumpto);
                }
            }
            catch (message) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(message, 'core.course.errorgetmodule', true);
            }
            finally {
                this.feedbackLoaded = true;
            }
        });
    }
    /**
     * Function to link implemented features.
     */
    showAnalysis() {
        if (this.fromIndex) {
            // Previous page is the index page, go back.
            _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedbackProvider"].FORM_SUBMITTED, {
                feedbackId: this.feedback.id,
                tab: 'analysis',
                offline: this.completedOffline,
            });
            _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
            return;
        }
        _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].navigateToSitePath(_services_handlers_module__WEBPACK_IMPORTED_MODULE_15__["AddonModFeedbackModuleHandlerService"].PAGE_NAME + `/${this.courseId}/${this.cmId}`, {
            params: {
                module: this.module,
                tab: 'analysis',
            },
        });
    }
    /**
     * Function to go to the page after submit.
     */
    continue() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.siteAfterSubmit) {
                return _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
            try {
                const treated = yield _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_2__["CoreContentLinksHelper"].handleLink(this.siteAfterSubmit);
                if (!treated) {
                    yield this.currentSite.openInBrowserWithAutoLogin(this.siteAfterSubmit);
                }
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        this.onlineObserver.unsubscribe();
    }
};
AddonModFeedbackFormPage.ctorParameters = () => [];
AddonModFeedbackFormPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"],] }]
};
AddonModFeedbackFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-feedback-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/form/form.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form.scss */ "./src/addons/mod/feedback/pages/form/form.scss")).default]
    })
], AddonModFeedbackFormPage);



/***/ })

}]);
//# sourceMappingURL=pages-form-form-module.js.map