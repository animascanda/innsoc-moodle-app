(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-attempt-attempt-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/attempt/attempt.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/attempt/attempt.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1 *ngIf=\"attempt\">{{ attempt.fullname }}</h1>\r\n            <h1 *ngIf=\"anonAttempt\">{{ 'addon.mod_feedback.anonymous_user' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content [core-swipe-navigation]=\"attempts\">\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-list class=\"ion-no-margin\" *ngIf=\"attempt || anonAttempt\">\r\n            <ion-item *ngIf=\"attempt\" class=\"ion-text-wrap\" core-user-link [userId]=\"attempt.userid\"\r\n                [attr.aria-label]=\"'core.user.viewprofile' | translate\" [courseId]=\"attempt.courseid\">\r\n                <core-user-avatar [user]=\"attempt\" slot=\"start\" [linkProfile]=\"false\"></core-user-avatar>\r\n                <ion-label>\r\n                    <h2>{{attempt.fullname}}</h2>\r\n                    <p *ngIf=\"attempt.timemodified\">{{attempt.timemodified * 1000 | coreFormatDate }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"anonAttempt\">\r\n                <core-user-avatar [linkProfile]=\"false\" slot=\"start\"></core-user-avatar>\r\n                <ion-label>\r\n                    <h2>{{ 'addon.mod_feedback.anonymous_user' |translate }}</h2>\r\n                    <p>{{ 'addon.mod_feedback.response_nr' | translate }}: {{anonAttempt.number}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ng-container *ngIf=\"items && items.length\">\r\n                <ng-container *ngFor=\"let item of items\">\r\n                    <core-spacer *ngIf=\"item.typ == 'pagebreak'\"></core-spacer>\r\n                    <ion-item class=\"ion-text-wrap\" *ngIf=\"item.typ != 'pagebreak'\" [color]=\"item.dependitem > 0 ? 'light' : ''\">\r\n                        <ion-label>\r\n                            <h2 *ngIf=\"item.name\" [core-mark-required]=\"item.required\">\r\n                                <span *ngIf=\"feedback!.autonumbering && item.itemnumber\">{{item.itemnumber}}. </span>\r\n                                <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"item.name\" contextLevel=\"module\"\r\n                                    [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                                </core-format-text>\r\n                            </h2>\r\n                            <p *ngIf=\"item.submittedValue\">\r\n                                <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"item.submittedValue\"\r\n                                    contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                                </core-format-text>\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ng-container>\r\n            </ng-container>\r\n        </ion-list>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/attempt/attempt.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/attempt/attempt.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text *ngIf=\"quiz\" [text]=\"quiz.name\" contextLevel=\"module\" [contextInstanceId]=\"quiz.coursemodule\"\r\n                    [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-list *ngIf=\"attempt\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <h2>{{ 'addon.mod_quiz.attemptnumber' | translate }}</h2>\r\n                    <p *ngIf=\"attempt.preview\">{{ 'addon.mod_quiz.preview' | translate }}</p>\r\n                    <p *ngIf=\"!attempt.preview\">{{ attempt.attempt }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <h2>{{ 'addon.mod_quiz.attemptstate' | translate }}</h2>\r\n                    <p *ngFor=\"let sentence of attempt.readableState\">{{ sentence }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"quiz!.showMarkColumn && attempt.readableMark !== ''\">\r\n                <ion-label>\r\n                    <h2>{{ 'addon.mod_quiz.marks' | translate }} / {{ quiz!.sumGradesFormatted }}</h2>\r\n                    <p>{{ attempt.readableMark }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"quiz!.showGradeColumn && attempt.readableGrade !== ''\">\r\n                <ion-label>\r\n                    <h2>{{ 'addon.mod_quiz.grade' | translate }} / {{ quiz!.gradeFormatted }}</h2>\r\n                    <p>{{ attempt.readableGrade }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"quiz!.showFeedbackColumn && feedback\">\r\n                <ion-label>\r\n                    <h2>{{ 'addon.mod_quiz.feedback' | translate }}</h2>\r\n                    <p>\r\n                        <core-format-text [component]=\"component\" [componentId]=\"componentId\" [text]=\"feedback\" contextLevel=\"module\"\r\n                            [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                        </core-format-text>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-text-wrap core-danger-item\" *ngIf=\"!showReviewColumn\">\r\n                <ion-label>\r\n                    <p>{{ 'addon.mod_quiz.noreviewattempt' | translate }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n\r\n        <div collapsible-footer appearOnBottom *ngIf=\"loaded && attempt && showReviewColumn && attempt.finished\" slot=\"fixed\">\r\n            <div class=\"list-item-limited-width\">\r\n                <ion-button class=\"ion-margin ion-text-wrap\" expand=\"block\" (click)=\"reviewAttempt()\">\r\n                    <ion-icon name=\"fas-search\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    {{ 'addon.mod_quiz.review' | translate }}\r\n                </ion-button>\r\n            </div>\r\n        </div>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/feedback/pages/attempt/attempt.module.ts":
/*!*****************************************************************!*\
  !*** ./src/addons/mod/feedback/pages/attempt/attempt.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddonModFeedbackAttemptPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackAttemptPageModule", function() { return AddonModFeedbackAttemptPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _attempt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attempt */ "./src/addons/mod/feedback/pages/attempt/attempt.ts");
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
        component: _attempt__WEBPACK_IMPORTED_MODULE_4__["AddonModFeedbackAttemptPage"],
    },
];
let AddonModFeedbackAttemptPageModule = class AddonModFeedbackAttemptPageModule {
};
AddonModFeedbackAttemptPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _attempt__WEBPACK_IMPORTED_MODULE_4__["AddonModFeedbackAttemptPage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], AddonModFeedbackAttemptPageModule);



/***/ }),

/***/ "./src/addons/mod/feedback/pages/attempt/attempt.ts":
/*!**********************************************************!*\
  !*** ./src/addons/mod/feedback/pages/attempt/attempt.ts ***!
  \**********************************************************/
/*! exports provided: AddonModFeedbackAttemptPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackAttemptPage", function() { return AddonModFeedbackAttemptPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/items-management/swipe-navigation-items-manager */ "./src/core/classes/items-management/swipe-navigation-items-manager.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _classes_feedback_attempts_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../classes/feedback-attempts-source */ "./src/addons/mod/feedback/classes/feedback-attempts-source.ts");
/* harmony import */ var _services_feedback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/feedback */ "./src/addons/mod/feedback/services/feedback.ts");
/* harmony import */ var _services_feedback_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/feedback-helper */ "./src/addons/mod/feedback/services/feedback-helper.ts");
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
 * Page that displays a feedback attempt review.
 */
let AddonModFeedbackAttemptPage = class AddonModFeedbackAttemptPage {
    constructor() {
        this.items = [];
        this.component = _services_feedback__WEBPACK_IMPORTED_MODULE_8__["AddonModFeedbackProvider"].COMPONENT;
        this.loaded = false;
        this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
        this.attemptId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRequiredRouteNumberParam('attemptId');
        const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_2__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_classes_feedback_attempts_source__WEBPACK_IMPORTED_MODULE_7__["AddonModFeedbackAttemptsSource"], [this.courseId, this.cmId]);
        this.attempts = new AddonModFeedbackAttemptsSwipeManager(source);
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.attempts.start();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].back();
                return;
            }
            this.fetchData();
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.attempts.destroy();
    }
    /**
     * Fetch all the data required for the view.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.feedback = yield _services_feedback__WEBPACK_IMPORTED_MODULE_8__["AddonModFeedback"].getFeedback(this.courseId, this.cmId);
                const attempt = yield _services_feedback__WEBPACK_IMPORTED_MODULE_8__["AddonModFeedback"].getAttempt(this.feedback.id, this.attemptId, { cmId: this.cmId });
                if (this.isAnonAttempt(attempt)) {
                    this.anonAttempt = attempt;
                    delete this.attempt;
                }
                else {
                    this.attempt = attempt;
                    delete this.anonAttempt;
                }
                const items = yield _services_feedback__WEBPACK_IMPORTED_MODULE_8__["AddonModFeedback"].getItems(this.feedback.id, { cmId: this.cmId });
                // Add responses and format items.
                this.items = items.items.map((item) => {
                    const formItem = _services_feedback_helper__WEBPACK_IMPORTED_MODULE_9__["AddonModFeedbackHelper"].getItemForm(item, true);
                    if (!formItem) {
                        return;
                    }
                    const attemptItem = formItem;
                    if (item.typ == 'label') {
                        attemptItem.submittedValue = _services_utils_text__WEBPACK_IMPORTED_MODULE_6__["CoreTextUtils"].replacePluginfileUrls(item.presentation, item.itemfiles);
                    }
                    else {
                        for (const x in attempt.responses) {
                            if (attempt.responses[x].id == item.id) {
                                attemptItem.submittedValue = attempt.responses[x].printval;
                                break;
                            }
                        }
                    }
                    return attemptItem;
                }).filter((itemData) => itemData); // Filter items with errors.
            }
            catch (message) {
                // Some call failed on fetch, go back.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(message, 'core.course.errorgetmodule', true);
                _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].back();
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Check if an attempt is anonymous or not.
     *
     * @param attempt Attempt to check.
     */
    isAnonAttempt(attempt) {
        return !('fullname' in attempt);
    }
};
AddonModFeedbackAttemptPage.ctorParameters = () => [];
AddonModFeedbackAttemptPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-feedback-attempt',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./attempt.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/attempt/attempt.html")).default,
    })
], AddonModFeedbackAttemptPage);

/**
 * Helper to manage swiping within a collection of discussions.
 */
class AddonModFeedbackAttemptsSwipeManager extends _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_3__["CoreSwipeNavigationItemsManager"] {
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        return route.params.attemptId;
    }
}


/***/ }),

/***/ "./src/addons/mod/quiz/pages/attempt/attempt.module.ts":
/*!*************************************************************!*\
  !*** ./src/addons/mod/quiz/pages/attempt/attempt.module.ts ***!
  \*************************************************************/
/*! exports provided: AddonModQuizAttemptPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizAttemptPageModule", function() { return AddonModQuizAttemptPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _attempt_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attempt.page */ "./src/addons/mod/quiz/pages/attempt/attempt.page.ts");
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
        component: _attempt_page__WEBPACK_IMPORTED_MODULE_4__["AddonModQuizAttemptPage"],
    },
];
let AddonModQuizAttemptPageModule = class AddonModQuizAttemptPageModule {
};
AddonModQuizAttemptPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _attempt_page__WEBPACK_IMPORTED_MODULE_4__["AddonModQuizAttemptPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonModQuizAttemptPageModule);



/***/ }),

/***/ "./src/addons/mod/quiz/pages/attempt/attempt.page.ts":
/*!***********************************************************!*\
  !*** ./src/addons/mod/quiz/pages/attempt/attempt.page.ts ***!
  \***********************************************************/
/*! exports provided: AddonModQuizAttemptPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizAttemptPage", function() { return AddonModQuizAttemptPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_quiz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/quiz */ "./src/addons/mod/quiz/services/quiz.ts");
/* harmony import */ var _services_quiz_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/quiz-helper */ "./src/addons/mod/quiz/services/quiz-helper.ts");
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
 * Page that displays some summary data about an attempt.
 */
let AddonModQuizAttemptPage = class AddonModQuizAttemptPage {
    constructor() {
        this.component = _services_quiz__WEBPACK_IMPORTED_MODULE_7__["AddonModQuizProvider"].COMPONENT; // Component to link the files to.
        this.loaded = false; // Whether data has been loaded.
        this.showReviewColumn = false;
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        try {
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.attemptId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('attemptId');
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].back();
            return;
        }
        this.fetchQuizData().finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    doRefresh(refresher) {
        this.refreshData().finally(() => {
            refresher.complete();
        });
    }
    /**
     * Get quiz data and attempt data.
     *
     * @return Promise resolved when done.
     */
    fetchQuizData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.quiz = yield _services_quiz__WEBPACK_IMPORTED_MODULE_7__["AddonModQuiz"].getQuiz(this.courseId, this.cmId);
                this.componentId = this.quiz.coursemodule;
                // Load attempt data.
                const [options, accessInfo, attempt] = yield Promise.all([
                    _services_quiz__WEBPACK_IMPORTED_MODULE_7__["AddonModQuiz"].getCombinedReviewOptions(this.quiz.id, { cmId: this.quiz.coursemodule }),
                    this.fetchAccessInfo(),
                    this.fetchAttempt(),
                ]);
                // Set calculated data.
                this.showReviewColumn = accessInfo.canreviewmyattempts;
                _services_quiz_helper__WEBPACK_IMPORTED_MODULE_8__["AddonModQuizHelper"].setQuizCalculatedData(this.quiz, options);
                this.attempt = yield _services_quiz_helper__WEBPACK_IMPORTED_MODULE_8__["AddonModQuizHelper"].setAttemptCalculatedData(this.quiz, attempt, false, undefined, true);
                // Check if the feedback should be displayed.
                const grade = Number(this.attempt.rescaledGrade);
                if (this.quiz.showFeedbackColumn && _services_quiz__WEBPACK_IMPORTED_MODULE_7__["AddonModQuiz"].isAttemptFinished(this.attempt.state) &&
                    options.someoptions.overallfeedback && !isNaN(grade)) {
                    // Feedback should be displayed, get the feedback for the grade.
                    const response = yield _services_quiz__WEBPACK_IMPORTED_MODULE_7__["AddonModQuiz"].getFeedbackForGrade(this.quiz.id, grade, {
                        cmId: this.quiz.coursemodule,
                    });
                    this.feedback = response.feedbacktext;
                }
                else {
                    delete this.feedback;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetattempt', true);
            }
        });
    }
    /**
     * Get the attempt.
     *
     * @return Promise resolved when done.
     */
    fetchAttempt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get all the attempts and search the one we want.
            const attempts = yield _services_quiz__WEBPACK_IMPORTED_MODULE_7__["AddonModQuiz"].getUserAttempts(this.quiz.id, { cmId: this.cmId });
            const attempt = attempts.find(attempt => attempt.id == this.attemptId);
            if (!attempt) {
                // Attempt not found, error.
                this.attempt = undefined;
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_2__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_6__["Translate"].instant('addon.mod_quiz.errorgetattempt'));
            }
            return attempt;
        });
    }
    /**
     * Get the access info.
     *
     * @return Promise resolved when done.
     */
    fetchAccessInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const accessInfo = yield _services_quiz__WEBPACK_IMPORTED_MODULE_7__["AddonModQuiz"].getQuizAccessInformation(this.quiz.id, { cmId: this.cmId });
            if (!accessInfo.canreviewmyattempts) {
                return accessInfo;
            }
            // Check if the user can review the attempt.
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(_services_quiz__WEBPACK_IMPORTED_MODULE_7__["AddonModQuiz"].invalidateAttemptReviewForPage(this.attemptId, -1));
            try {
                yield _services_quiz__WEBPACK_IMPORTED_MODULE_7__["AddonModQuiz"].getAttemptReview(this.attemptId, { page: -1, cmId: this.quiz.coursemodule });
            }
            catch (_a) {
                // Error getting the review, assume the user cannot review the attempt.
                accessInfo.canreviewmyattempts = false;
            }
            return accessInfo;
        });
    }
    /**
     * Refresh the data.
     *
     * @return Promise resolved when done.
     */
    refreshData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_7__["AddonModQuiz"].invalidateQuizData(this.courseId));
            promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_7__["AddonModQuiz"].invalidateAttemptReview(this.attemptId));
            if (this.quiz) {
                promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_7__["AddonModQuiz"].invalidateUserAttemptsForUser(this.quiz.id));
                promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_7__["AddonModQuiz"].invalidateQuizAccessInformation(this.quiz.id));
                promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_7__["AddonModQuiz"].invalidateCombinedReviewOptionsForUser(this.quiz.id));
                if (this.attempt && this.feedback !== undefined) {
                    promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_7__["AddonModQuiz"].invalidateFeedback(this.quiz.id));
                }
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(Promise.all(promises));
            yield this.fetchQuizData();
        });
    }
    /**
     * Go to the page to review the attempt.
     *
     * @return Promise resolved when done.
     */
    reviewAttempt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].navigate(`../../review/${this.attempt.id}`);
        });
    }
};
AddonModQuizAttemptPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-quiz-attempt',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./attempt.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/attempt/attempt.html")).default,
    })
], AddonModQuizAttemptPage);



/***/ }),

/***/ "./src/core/classes/items-management/swipe-navigation-items-manager.ts":
/*!*****************************************************************************!*\
  !*** ./src/core/classes/items-management/swipe-navigation-items-manager.ts ***!
  \*****************************************************************************/
/*! exports provided: CoreSwipeNavigationItemsManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSwipeNavigationItemsManager", function() { return CoreSwipeNavigationItemsManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _routed_items_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routed-items-manager */ "./src/core/classes/items-management/routed-items-manager.ts");
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
 * Helper class to manage the state and routing of a swipeable page.
 */
class CoreSwipeNavigationItemsManager extends _routed_items_manager__WEBPACK_IMPORTED_MODULE_2__["CoreRoutedItemsManager"] {
    /**
     * Process page started operations.
     */
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateSelectedItem();
        });
    }
    /**
     * Navigate to the next item.
     */
    navigateToNextItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navigateToItemBy(1, 'forward');
        });
    }
    /**
     * Navigate to the previous item.
     */
    navigateToPreviousItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navigateToItemBy(-1, 'back');
        });
    }
    /**
     * Has a next item.
     */
    hasNextItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.getItemBy(1);
            return !!item;
        });
    }
    /**
     * Has a previous item.
     */
    hasPreviousItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.getItemBy(-1);
            return !!item;
        });
    }
    /**
     * @inheritdoc
     */
    getCurrentPageRoute() {
        return _services_navigator__WEBPACK_IMPORTED_MODULE_1__["CoreNavigator"].getCurrentRoute();
    }
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        const segments = [];
        while (route) {
            segments.push(...route.url);
            if (!route.firstChild) {
                break;
            }
            route = route.firstChild;
        }
        return segments.map(segment => segment.path).join('/').replace(/\/+/, '/').trim() || null;
    }
    /**
     * Navigate to an item by an offset.
     *
     * @param delta Index offset.
     * @param animationDirection Animation direction.
     */
    navigateToItemBy(delta, animationDirection) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.getItemBy(delta);
            if (!item) {
                return;
            }
            yield this.navigateToItem(item, { animationDirection, replace: true });
        });
    }
    /**
     * Get item by an offset.
     *
     * @param delta Index offset.
     */
    getItemBy(delta) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const items = this.getSource().getItems();
            const selectedIndex = (_a = (this.selectedItem && (items === null || items === void 0 ? void 0 : items.indexOf(this.selectedItem)))) !== null && _a !== void 0 ? _a : -1;
            if (selectedIndex === -1 || items === null) {
                return null;
            }
            const deltaStep = delta > 0 ? 1 : -1;
            let nextIndex = selectedIndex;
            let deltaMoved = 0;
            while (deltaMoved !== delta) {
                nextIndex += deltaStep;
                if (nextIndex < 0 || nextIndex >= items.length) {
                    break;
                }
                if (this.skipItemInSwipe(items[nextIndex])) {
                    continue;
                }
                deltaMoved += deltaStep;
            }
            if (deltaMoved === delta) {
                return items[nextIndex];
            }
            if (!this.getSource().isCompleted()) {
                yield this.getSource().load();
                return this.getItemBy(delta);
            }
            return null;
        });
    }
    /**
     * Check if an item should be skipped during swipe navigation.
     *
     * @param item Item.
     * @returns Whether to skip this item during swipe navigation.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    skipItemInSwipe(item) {
        return false;
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-attempt-attempt-module.js.map