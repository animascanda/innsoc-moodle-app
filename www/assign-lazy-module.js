(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assign-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/edit/edit.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/edit/edit.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"moduleId\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"save()\">\r\n                {{ 'core.save' | translate }}\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-list *ngIf=\"userSubmission && userSubmission.plugins && userSubmission.plugins.length\">\r\n            <!-- @todo: plagiarism_print_disclosure -->\r\n            <core-timer *ngIf=\"timeLimitEndTime > 0\" [endTime]=\"timeLimitEndTime\" (finished)=\"timeUp()\" timeUpText=\"00:00:00\"\r\n                [timerText]=\"'addon.mod_assign.assigntimeleft' | translate\" [align]=\"'center'\" [timeLeftClassThreshold]=\"-1\"\r\n                [underTimeClassThresholds]=\"[300, 900]\" class=\"ion-margin-horizontal\">\r\n            </core-timer>\r\n\r\n            <!-- Assign activity instructions and attachments if needed. -->\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"activityInstructions\">\r\n                <ion-label>\r\n                    <core-format-text [text]=\"activityInstructions\" [component]=\"component\" [componentId]=\"moduleId\" contextLevel=\"module\"\r\n                        [contextInstanceId]=\"moduleId\" [courseId]=\"courseId\" [maxHeight]=\"120\">\r\n                    </core-format-text>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ng-container *ngIf=\"assign?.submissionattachments\">\r\n                <core-file *ngFor=\"let file of introAttachments\" [file]=\"file\" [component]=\"component\" [componentId]=\"moduleId\">\r\n                </core-file>\r\n            </ng-container>\r\n\r\n            <form name=\"addon-mod_assign-edit-form\" #editSubmissionForm>\r\n                <!-- Submission statement. -->\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"submissionStatement\">\r\n                    <ion-label>\r\n                        <core-format-text [text]=\"submissionStatement\" [filter]=\"false\">\r\n                        </core-format-text>\r\n                    </ion-label>\r\n                    <ion-checkbox slot=\"end\" name=\"submissionstatement\" [(ngModel)]=\"submissionStatementAccepted\"></ion-checkbox>\r\n                    <!-- ion-checkbox doesn't use an input. Create a hidden input to hold the value. -->\r\n                    <input type=\"hidden\" [ngModel]=\"submissionStatementAccepted\" name=\"submissionstatement\">\r\n                </ion-item>\r\n\r\n                <addon-mod-assign-submission-plugin *ngFor=\"let plugin of userSubmission.plugins\" [assign]=\"assign\"\r\n                    [submission]=\"userSubmission\" [plugin]=\"plugin\" [edit]=\"true\" [allowOffline]=\"allowOffline\">\r\n                </addon-mod-assign-submission-plugin>\r\n            </form>\r\n        </ion-list>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/index/index.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/index/index.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header collapsible>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module?.id\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <!-- The buttons defined by the component will be added in here. -->\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"activityComponent?.showLoading\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <addon-mod-assign-index [module]=\"module\" [courseId]=\"courseId\" (dataRetrieved)=\"updateData($event)\"></addon-mod-assign-index>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/submission-list/submission-list.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/submission-list/submission-list.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"moduleId\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\"></ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!submissions.loaded\" (ionRefresh)=\"refreshList($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n        <core-loading [hideUntil]=\"submissions.loaded\">\r\n            <ion-list>\r\n                <core-group-selector [groupInfo]=\"groupInfo\" [(selected)]=\"groupId\" (selectedChange)=\"reloadSubmissions()\">\r\n                </core-group-selector>\r\n\r\n                <!-- List of submissions. -->\r\n                <ng-container *ngFor=\"let submission of submissions.items\">\r\n                    <ion-item class=\"ion-text-wrap\" (click)=\"submissions.select(submission)\" button\r\n                        [attr.aria-current]=\"submissions.getItemAriaCurrent(submission)\" detail=\"true\">\r\n                        <core-user-avatar [user]=\"submission\" [linkProfile]=\"false\" slot=\"start\"></core-user-avatar>\r\n                        <ion-label>\r\n                            <p class=\"item-heading\" *ngIf=\"submission.userfullname\">{{submission.userfullname}}</p>\r\n                            <p class=\"item-heading\" *ngIf=\"!submission.userfullname\">\r\n                                {{ 'addon.mod_assign.hiddenuser' | translate }}{{submission.blindid}}\r\n                            </p>\r\n                            <p *ngIf=\"assign && assign!.teamsubmission\">\r\n                                <span *ngIf=\"submission.groupname\" class=\"core-groupname\">\r\n                                    {{submission.groupname}}\r\n                                </span>\r\n                                <span *ngIf=\"assign!.preventsubmissionnotingroup && !submission.groupname && submission.noGroups\r\n                                    && !submission.blindid\" class=\"text-danger\">\r\n                                    {{ 'addon.mod_assign.noteam' | translate }}\r\n                                </span>\r\n                                <span *ngIf=\"assign!.preventsubmissionnotingroup && !submission.groupname && submission.manyGroups\r\n                                    && !submission.blindid\" class=\"text-danger\">\r\n                                    {{ 'addon.mod_assign.multipleteams' | translate }}\r\n                                </span>\r\n                                <span *ngIf=\"!assign!.preventsubmissionnotingroup && !submission.groupname\">\r\n                                    {{ 'addon.mod_assign.defaultteam' | translate }}\r\n                                </span>\r\n                            </p>\r\n                            <p *ngIf=\"submission.statusTranslated\">\r\n                                <ion-badge class=\"ion-text-center ion-text-wrap\" [color]=\"submission.statusColor\">\r\n                                    {{ submission.statusTranslated }}\r\n                                </ion-badge>\r\n                            </p>\r\n                            <p *ngIf=\"submission.gradingStatusTranslationId\">\r\n                                <ion-badge class=\"ion-text-center ion-text-wrap\" [color]=\"submission.gradingColor\">\r\n                                    {{ submission.gradingStatusTranslationId | translate }}\r\n                                </ion-badge>\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ng-container>\r\n            </ion-list>\r\n\r\n            <core-empty-box *ngIf=\"!submissions || submissions.empty\" icon=\"fas-file-signature\"\r\n                [message]=\"'addon.mod_assign.submissionstatus_' | translate\">\r\n            </core-empty-box>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/submission-review/submission-review.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/submission-review/submission-review.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"moduleId\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\"></ion-buttons>\r\n    </ion-toolbar>\r\n\r\n    <core-navbar-buttons slot=\"end\">\r\n        <ion-button [hidden]=\"!canSaveGrades\" fill=\"clear\" (click)=\"submitGrade()\">\r\n            {{ 'core.done' | translate }}\r\n        </ion-button>\r\n    </core-navbar-buttons>\r\n</ion-header>\r\n<ion-content [core-swipe-navigation]=\"submissions\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshSubmission($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <addon-mod-assign-submission *ngIf=\"loaded\" [courseId]=\"courseId\" [moduleId]=\"moduleId\" [submitId]=\"submitId\" [blindId]=\"blindId\">\r\n        </addon-mod-assign-submission>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/assign/assign-lazy.module.ts":
/*!*****************************************************!*\
  !*** ./src/addons/mod/assign/assign-lazy.module.ts ***!
  \*****************************************************/
/*! exports provided: AddonModAssignLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignLazyModule", function() { return AddonModAssignLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/assign/components/components.module.ts");
/* harmony import */ var _pages_edit_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/edit/edit */ "./src/addons/mod/assign/pages/edit/edit.ts");
/* harmony import */ var _pages_index_index_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/index/index.page */ "./src/addons/mod/assign/pages/index/index.page.ts");
/* harmony import */ var _pages_submission_list_submission_list_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/submission-list/submission-list.page */ "./src/addons/mod/assign/pages/submission-list/submission-list.page.ts");
/* harmony import */ var _pages_submission_review_submission_review__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/submission-review/submission-review */ "./src/addons/mod/assign/pages/submission-review/submission-review.ts");
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












const commonRoutes = [
    {
        path: ':courseId/:cmId',
        component: _pages_index_index_page__WEBPACK_IMPORTED_MODULE_9__["AddonModAssignIndexPage"],
    },
    {
        path: ':courseId/:cmId/edit',
        component: _pages_edit_edit__WEBPACK_IMPORTED_MODULE_8__["AddonModAssignEditPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_5__["CanLeaveGuard"]],
    },
];
const mobileRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/submission',
        component: _pages_submission_list_submission_list_page__WEBPACK_IMPORTED_MODULE_10__["AddonModAssignSubmissionListPage"],
    },
    {
        path: ':courseId/:cmId/submission/:submitId',
        component: _pages_submission_review_submission_review__WEBPACK_IMPORTED_MODULE_11__["AddonModAssignSubmissionReviewPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_5__["CanLeaveGuard"]],
    },
];
const tabletRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/submission',
        component: _pages_submission_list_submission_list_page__WEBPACK_IMPORTED_MODULE_10__["AddonModAssignSubmissionListPage"],
        children: [
            {
                path: ':submitId',
                component: _pages_submission_review_submission_review__WEBPACK_IMPORTED_MODULE_11__["AddonModAssignSubmissionReviewPage"],
                canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_5__["CanLeaveGuard"]],
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_6__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_6__["CoreScreen"].isTablet),
];
let AddonModAssignLazyModule = class AddonModAssignLazyModule {
};
AddonModAssignLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["AddonModAssignComponentsModule"],
        ],
        declarations: [
            _pages_index_index_page__WEBPACK_IMPORTED_MODULE_9__["AddonModAssignIndexPage"],
            _pages_submission_list_submission_list_page__WEBPACK_IMPORTED_MODULE_10__["AddonModAssignSubmissionListPage"],
            _pages_submission_review_submission_review__WEBPACK_IMPORTED_MODULE_11__["AddonModAssignSubmissionReviewPage"],
            _pages_edit_edit__WEBPACK_IMPORTED_MODULE_8__["AddonModAssignEditPage"],
        ],
    })
], AddonModAssignLazyModule);



/***/ }),

/***/ "./src/addons/mod/assign/pages/edit/edit.scss":
/*!****************************************************!*\
  !*** ./src/addons/mod/assign/pages/edit/edit.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep core-timer {\n  display: block;\n}\n:host ::ng-deep core-timer .core-timer.core-timer-under-300 {\n  background-color: var(--danger-tint);\n  color: var(--danger-shade);\n}\n:host ::ng-deep core-timer .core-timer.core-timer-under-900 {\n  background-color: var(--warning-tint);\n  color: var(--warning-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2Fzc2lnbi9wYWdlcy9lZGl0L2VkaXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGNBQUE7QUFBUjtBQUdZO0VBQ0ksb0NBQUE7RUFDQSwwQkFBQTtBQURoQjtBQUlZO0VBQ0kscUNBQUE7RUFDQSwyQkFBQTtBQUZoQiIsImZpbGUiOiJzcmMvYWRkb25zL21vZC9hc3NpZ24vcGFnZXMvZWRpdC9lZGl0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xyXG4gICAgY29yZS10aW1lciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIC5jb3JlLXRpbWVyIHtcclxuICAgICAgICAgICAgJi5jb3JlLXRpbWVyLXVuZGVyLTMwMCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXItdGludCk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyLXNoYWRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5jb3JlLXRpbWVyLXVuZGVyLTkwMCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nLXRpbnQpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdhcm5pbmctc2hhZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/addons/mod/assign/pages/edit/edit.ts":
/*!**************************************************!*\
  !*** ./src/addons/mod/assign/pages/edit/edit.ts ***!
  \**************************************************/
/*! exports provided: AddonModAssignEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignEditPage", function() { return AddonModAssignEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader-helper */ "./src/core/features/fileuploader/services/fileuploader-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_assign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/assign */ "./src/addons/mod/assign/services/assign.ts");
/* harmony import */ var _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/assign-helper */ "./src/addons/mod/assign/services/assign-helper.ts");
/* harmony import */ var _services_assign_offline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/assign-offline */ "./src/addons/mod/assign/services/assign-offline.ts");
/* harmony import */ var _services_assign_sync__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/assign-sync */ "./src/addons/mod/assign/services/assign-sync.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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
 * Page that allows adding or editing an assigment submission.
 */
let AddonModAssignEditPage = class AddonModAssignEditPage {
    constructor(route) {
        this.route = route;
        this.allowOffline = false; // Whether offline is allowed.
        this.submissionStatementAccepted = false; // Whether submission statement is accepted.
        this.loaded = false; // Whether data has been loaded.
        this.timeLimitEndTime = 0; // If time limit is enabled, the end time for the timer.
        this.component = _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssignProvider"].COMPONENT;
        this.isBlind = false; // Whether blind is used.
        this.saveOffline = false; // Whether to save data in offline.
        this.hasOffline = false; // Whether the assignment has offline data.
        this.isDestroyed = false; // Whether the component has been destroyed.
        this.forceLeave = false; // To allow leaving the page without checking for changes.
        this.userId = _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteUserId(); // Right now we can only edit current user's submissions.
        this.editText = _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_assign.editsubmission');
        this.title = this.editText;
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        try {
            this.moduleId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.isBlind = !!_services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('blindId');
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
            return;
        }
        this.fetchAssignment().finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave) {
                return true;
            }
            // Check if data has changed.
            const changed = yield this.hasDataChanged();
            if (changed) {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.confirmcanceledit'));
            }
            // Nothing has changed or user confirmed to leave. Clear temporary data from plugins.
            _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignHelper"].clearSubmissionPluginTmpData(this.assign, this.userSubmission, this.getInputData());
            _singletons_form__WEBPACK_IMPORTED_MODULE_9__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
            return true;
        });
    }
    /**
     * Fetch assignment data.
     *
     * @return Promise resolved when done.
     */
    fetchAssignment() {
        var _a, _b, _c, _d, _e, _f, _g;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteUserId();
            try {
                // Get assignment data.
                this.assign = yield _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].getAssignment(this.courseId, this.moduleId);
                this.title = this.assign.name || this.title;
                if (!this.isDestroyed) {
                    // Block the assignment.
                    _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].blockOperation(_services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssignProvider"].COMPONENT, this.assign.id);
                }
                // Wait for sync to be over (if any).
                yield _services_assign_sync__WEBPACK_IMPORTED_MODULE_15__["AddonModAssignSync"].waitForSync(this.assign.id);
                // Get submission status. Ignore cache to get the latest data.
                const options = {
                    userId: this.userId,
                    isBlind: this.isBlind,
                    cmId: this.assign.cmid,
                    filter: false,
                    readingStrategy: 2 /* ONLY_NETWORK */,
                };
                let submissionStatus;
                try {
                    submissionStatus = yield _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].getSubmissionStatus(this.assign.id, options);
                    this.userSubmission =
                        _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].getSubmissionObjectFromAttempt(this.assign, submissionStatus.lastattempt);
                }
                catch (error) {
                    // Cannot connect. Get cached data.
                    options.filter = true;
                    options.readingStrategy = 1 /* PREFER_CACHE */;
                    submissionStatus = yield _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].getSubmissionStatus(this.assign.id, options);
                    this.userSubmission =
                        _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].getSubmissionObjectFromAttempt(this.assign, submissionStatus.lastattempt);
                    // Check if the user can edit it in offline.
                    const canEditOffline = yield _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignHelper"].canEditSubmissionOffline(this.assign, this.userSubmission);
                    if (!canEditOffline) {
                        // Submission cannot be edited in offline, reject.
                        this.allowOffline = false;
                        throw error;
                    }
                }
                if (!((_a = submissionStatus.lastattempt) === null || _a === void 0 ? void 0 : _a.canedit)) {
                    // Can't edit. Reject.
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.nopermissions', { $a: this.editText }));
                }
                submissionStatus = yield this.startSubmissionIfNeeded(submissionStatus, options);
                if ((_b = submissionStatus.assignmentdata) === null || _b === void 0 ? void 0 : _b.activity) {
                    // There are activity instructions. Make sure to display it with filters applied.
                    const filteredSubmissionStatus = options.filter ?
                        submissionStatus :
                        yield _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].getSubmissionStatus(this.assign.id, Object.assign(Object.assign({}, options), { filter: true }));
                    this.activityInstructions = (_c = filteredSubmissionStatus.assignmentdata) === null || _c === void 0 ? void 0 : _c.activity;
                }
                this.introAttachments = (_f = (_e = (_d = submissionStatus.assignmentdata) === null || _d === void 0 ? void 0 : _d.attachments) === null || _e === void 0 ? void 0 : _e.intro) !== null && _f !== void 0 ? _f : this.assign.introattachments;
                this.allowOffline = true; // If offline isn't allowed we shouldn't have reached this point.
                // Only show submission statement if we are editing our own submission.
                if (this.assign.requiresubmissionstatement && !this.assign.submissiondrafts && this.userId == currentUserId) {
                    this.submissionStatement = this.assign.submissionstatement;
                }
                else {
                    this.submissionStatement = undefined;
                }
                if (this.assign.timelimit && ((_g = this.userSubmission) === null || _g === void 0 ? void 0 : _g.timestarted)) {
                    this.timeLimitEndTime = _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignHelper"].calculateEndTime(this.assign, this.userSubmission);
                }
                else {
                    this.timeLimitEndTime = 0;
                }
                try {
                    // Check if there's any offline data for this submission.
                    const offlineData = yield _services_assign_offline__WEBPACK_IMPORTED_MODULE_14__["AddonModAssignOffline"].getSubmission(this.assign.id, this.userId);
                    this.hasOffline = (offlineData === null || offlineData === void 0 ? void 0 : offlineData.plugindata) && Object.keys(offlineData.plugindata).length > 0;
                }
                catch (_h) {
                    // No offline data found.
                    this.hasOffline = false;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting assigment data.');
                // Leave the player.
                this.leaveWithoutCheck();
            }
        });
    }
    /**
     * Start the submission if needed.
     *
     * @param submissionStatus Current submission status.
     * @param options Options.
     * @return Promise resolved with the new submission status if it changed, original submission status otherwise.
     */
    startSubmissionIfNeeded(submissionStatus, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.assign || !this.assign.timelimit) {
                // Submission only needs to be started if there's a timelimit.
                return submissionStatus;
            }
            if (this.userSubmission && this.userSubmission.status !== _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssignSubmissionStatusValues"].NEW &&
                this.userSubmission.status !== _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssignSubmissionStatusValues"].REOPENED) {
                // There is an ongoing submission, no need to start it.
                return submissionStatus;
            }
            yield _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].startSubmission(this.assign.id);
            _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssignProvider"].STARTED_EVENT, {
                assignmentId: this.assign.id,
            }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
            // Submission started, update the submission status.
            const newSubmissionStatus = yield _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].getSubmissionStatus(this.assign.id, Object.assign(Object.assign({}, options), { readingStrategy: 2 /* ONLY_NETWORK */ }));
            this.userSubmission = _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].getSubmissionObjectFromAttempt(this.assign, newSubmissionStatus.lastattempt);
            return newSubmissionStatus;
        });
    }
    /**
     * Get the input data.
     *
     * @return Input data.
     */
    getInputData() {
        return _singletons_form__WEBPACK_IMPORTED_MODULE_9__["CoreForms"].getDataFromForm(document.forms['addon-mod_assign-edit-form']);
    }
    /**
     * Check if data has changed.
     *
     * @return Promise resolved with boolean: whether data has changed.
     */
    hasDataChanged() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Usually the hasSubmissionDataChanged call will be resolved inmediately, causing the modal to be shown just an instant.
            // We'll wait a bit before showing it to prevent this "blink".
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
            const data = this.getInputData();
            return _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignHelper"].hasSubmissionDataChanged(this.assign, this.userSubmission, data).finally(() => {
                modal.dismiss();
            });
        });
    }
    /**
     * Leave the view without checking for changes.
     */
    leaveWithoutCheck() {
        this.forceLeave = true;
        _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
    }
    /**
     * Get data to submit based on the input data.
     *
     * @param inputData The input data.
     * @return Promise resolved with the data to submit.
     */
    prepareSubmissionData(inputData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // If there's offline data, always save it in offline.
            this.saveOffline = this.hasOffline;
            try {
                return yield _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignHelper"].prepareSubmissionPluginData(this.assign, this.userSubmission, inputData, this.hasOffline);
            }
            catch (error) {
                if (this.allowOffline && !this.saveOffline && !_services_utils_utils__WEBPACK_IMPORTED_MODULE_16__["CoreUtils"].isWebServiceError(error)) {
                    // Cannot submit in online, prepare for offline usage.
                    this.saveOffline = true;
                    return _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignHelper"].prepareSubmissionPluginData(this.assign, this.userSubmission, inputData, true);
                }
                throw error;
            }
        });
    }
    /**
     * Save the submission.
     */
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Check if data has changed.
            const changed = yield this.hasDataChanged();
            if (!changed) {
                // Nothing to save, just go back.
                this.leaveWithoutCheck();
                return;
            }
            try {
                yield this.saveSubmission();
                this.leaveWithoutCheck();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error saving submission.');
            }
        });
    }
    /**
     * Save the submission.
     *
     * @return Promise resolved when done.
     */
    saveSubmission() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputData = this.getInputData();
            if (this.submissionStatement && (!inputData.submissionstatement || inputData.submissionstatement === 'false')) {
                throw _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_assign.acceptsubmissionstatement');
            }
            let modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
            let size = -1;
            // Get size to ask for confirmation.
            try {
                size = yield _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignHelper"].getSubmissionSizeForEdit(this.assign, this.userSubmission, inputData);
            }
            catch (error) {
                // Error calculating size, return -1.
                size = -1;
            }
            modal.dismiss();
            try {
                // Confirm action.
                yield _features_fileuploader_services_fileuploader_helper__WEBPACK_IMPORTED_MODULE_4__["CoreFileUploaderHelper"].confirmUploadFile(size, true, this.allowOffline);
                modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
                const pluginData = yield this.prepareSubmissionData(inputData);
                if (!Object.keys(pluginData).length) {
                    // Nothing to save.
                    return;
                }
                let sent;
                if (this.saveOffline) {
                    // Save submission in offline.
                    sent = false;
                    yield _services_assign_offline__WEBPACK_IMPORTED_MODULE_14__["AddonModAssignOffline"].saveSubmission(this.assign.id, this.courseId, pluginData, this.userSubmission.timemodified, !this.assign.submissiondrafts, this.userId);
                }
                else {
                    // Try to send it to server.
                    sent = yield _services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssign"].saveSubmission(this.assign.id, this.courseId, pluginData, this.allowOffline, this.userSubmission.timemodified, !!this.assign.submissiondrafts, this.userId);
                }
                // Clear temporary data from plugins.
                _services_assign_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModAssignHelper"].clearSubmissionPluginTmpData(this.assign, this.userSubmission, inputData);
                if (sent) {
                    _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'assign' });
                }
                // Submission saved, trigger events.
                _singletons_form__WEBPACK_IMPORTED_MODULE_9__["CoreForms"].triggerFormSubmittedEvent(this.formElement, sent, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
                _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssignProvider"].SUBMISSION_SAVED_EVENT, {
                    assignmentId: this.assign.id,
                    submissionId: this.userSubmission.id,
                    userId: this.userId,
                }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
                if (!this.assign.submissiondrafts) {
                    // No drafts allowed, so it was submitted. Trigger event.
                    _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssignProvider"].SUBMITTED_FOR_GRADING_EVENT, {
                        assignmentId: this.assign.id,
                        submissionId: this.userSubmission.id,
                        userId: this.userId,
                    }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
                }
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Function called when the time is up.
     */
    timeUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.timeUpToast = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showToastWithOptions({
                message: _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_assign.caneditsubmission'),
                duration: _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["ToastDuration"].STICKY,
                buttons: [_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.dismiss')],
                cssClass: 'core-danger-toast',
            });
        });
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        var _a;
        this.isDestroyed = true;
        (_a = this.timeUpToast) === null || _a === void 0 ? void 0 : _a.dismiss();
        // Unblock the assignment.
        if (this.assign) {
            _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].unblockOperation(_services_assign__WEBPACK_IMPORTED_MODULE_12__["AddonModAssignProvider"].COMPONENT, this.assign.id);
        }
    }
};
AddonModAssignEditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddonModAssignEditPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['editSubmissionForm',] }]
};
AddonModAssignEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-assign-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/edit/edit.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit.scss */ "./src/addons/mod/assign/pages/edit/edit.scss")).default]
    })
], AddonModAssignEditPage);



/***/ }),

/***/ "./src/addons/mod/assign/pages/index/index.page.ts":
/*!*********************************************************!*\
  !*** ./src/addons/mod/assign/pages/index/index.page.ts ***!
  \*********************************************************/
/*! exports provided: AddonModAssignIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignIndexPage", function() { return AddonModAssignIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/index/index */ "./src/addons/mod/assign/components/index/index.ts");
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
 * Page that displays an assign.
 */
let AddonModAssignIndexPage = class AddonModAssignIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
};
AddonModAssignIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index_index__WEBPACK_IMPORTED_MODULE_3__["AddonModAssignIndexComponent"],] }]
};
AddonModAssignIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-assign-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/index/index.html")).default,
    })
], AddonModAssignIndexPage);



/***/ }),

/***/ "./src/addons/mod/assign/pages/submission-list/submission-list.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/addons/mod/assign/pages/submission-list/submission-list.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AddonModAssignSubmissionListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignSubmissionListPage", function() { return AddonModAssignSubmissionListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _classes_submissions_source__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../classes/submissions-source */ "./src/addons/mod/assign/classes/submissions-source.ts");
/* harmony import */ var _services_assign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/assign */ "./src/addons/mod/assign/services/assign.ts");
/* harmony import */ var _services_assign_sync__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/assign-sync */ "./src/addons/mod/assign/services/assign-sync.ts");
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
var AddonModAssignSubmissionListPage_1;













/**
 * Page that displays a list of submissions of an assignment.
 */
let AddonModAssignSubmissionListPage = AddonModAssignSubmissionListPage_1 = class AddonModAssignSubmissionListPage {
    constructor() {
        this.title = '';
        // Update data if some grade changes.
        this.gradedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_9__["CoreEvents"].on(_services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssignProvider"].GRADED_EVENT, (data) => {
            var _a;
            if (this.submissions.loaded &&
                this.submissions.getSource().assign &&
                data.assignmentId == ((_a = this.submissions.getSource().assign) === null || _a === void 0 ? void 0 : _a.id) &&
                data.userId == _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteUserId()) {
                // Grade changed, refresh the data.
                this.refreshAllData(true);
            }
        }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
        // Refresh data if this assign is synchronized.
        const events = [_services_assign_sync__WEBPACK_IMPORTED_MODULE_12__["AddonModAssignSyncProvider"].AUTO_SYNCED, _services_assign_sync__WEBPACK_IMPORTED_MODULE_12__["AddonModAssignSyncProvider"].MANUAL_SYNCED];
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_9__["CoreEvents"].onMultiple(events, (data) => {
            if (!this.submissions.loaded || ('context' in data && data.context == 'submission-list')) {
                return;
            }
            this.refreshAllData(false);
        }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
        try {
            const moduleId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            const courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            const groupId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('groupId') || 0;
            const selectedStatus = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteParam('status');
            const submissionsSource = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_3__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_classes_submissions_source__WEBPACK_IMPORTED_MODULE_10__["AddonModAssignSubmissionsSource"], [courseId, moduleId, selectedStatus]);
            submissionsSource.groupId = groupId;
            this.sourceUnsubscribe = submissionsSource.addListener({
                onItemsUpdated: () => {
                    var _a;
                    this.title = ((_a = this.submissions.getSource().assign) === null || _a === void 0 ? void 0 : _a.name) || this.title;
                },
            });
            this.submissions = new _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_2__["CoreListItemsManager"](submissionsSource, AddonModAssignSubmissionListPage_1);
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
            return;
        }
    }
    get assign() {
        return this.submissions.getSource().assign;
    }
    get groupInfo() {
        return this.submissions.getSource().groupInfo;
    }
    get moduleId() {
        return this.submissions.getSource().MODULE_ID;
    }
    get courseId() {
        return this.submissions.getSource().COURSE_ID;
    }
    get groupId() {
        return this.submissions.getSource().groupId;
    }
    set groupId(value) {
        this.submissions.getSource().groupId = value;
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        const selectedStatus = this.submissions.getSource().SELECTED_STATUS;
        this.title = _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant(selectedStatus
            ? (selectedStatus === _classes_submissions_source__WEBPACK_IMPORTED_MODULE_10__["AddonModAssignListFilterName"].NEED_GRADING
                ? 'addon.mod_assign.numberofsubmissionsneedgrading'
                : `addon.mod_assign.submissionstatus_${selectedStatus}`)
            : 'addon.mod_assign.numberofparticipants');
        this.fetchAssignment(true).finally(() => {
            this.submissions.start(this.splitView);
        });
    }
    /**
     * Fetch assignment data.
     *
     * @param sync Whether to try to synchronize data.
     * @return Promise resolved when done.
     */
    fetchAssignment(sync = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.submissions.getSource().loadAssignment(sync);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting assigment data.');
            }
        });
    }
    /**
     * Refresh all the data.
     *
     * @param sync Whether to try to synchronize data.
     * @return Promise resolved when done.
     */
    refreshAllData(sync) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.submissions.getSource().invalidateCache();
            }
            finally {
                this.fetchAssignment(sync);
            }
        });
    }
    /**
     * Refresh the list.
     *
     * @param refresher Refresher.
     */
    refreshList(refresher) {
        this.refreshAllData(true).finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Reload submissions list.
     */
    reloadSubmissions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.submissions.reload();
        });
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        var _a, _b;
        (_a = this.gradedObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.syncObserver) === null || _b === void 0 ? void 0 : _b.off();
        this.submissions.destroy();
        this.sourceUnsubscribe && this.sourceUnsubscribe();
    }
};
AddonModAssignSubmissionListPage.ctorParameters = () => [];
AddonModAssignSubmissionListPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_4__["CoreSplitViewComponent"],] }]
};
AddonModAssignSubmissionListPage = AddonModAssignSubmissionListPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-assign-submission-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./submission-list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/submission-list/submission-list.html")).default,
    })
], AddonModAssignSubmissionListPage);



/***/ }),

/***/ "./src/addons/mod/assign/pages/submission-review/submission-review.ts":
/*!****************************************************************************!*\
  !*** ./src/addons/mod/assign/pages/submission-review/submission-review.ts ***!
  \****************************************************************************/
/*! exports provided: AddonModAssignSubmissionReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModAssignSubmissionReviewPage", function() { return AddonModAssignSubmissionReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/items-management/swipe-navigation-items-manager */ "./src/core/classes/items-management/swipe-navigation-items-manager.ts");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _classes_submissions_source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../classes/submissions-source */ "./src/addons/mod/assign/classes/submissions-source.ts");
/* harmony import */ var _components_submission_submission__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/submission/submission */ "./src/addons/mod/assign/components/submission/submission.ts");
/* harmony import */ var _services_assign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/assign */ "./src/addons/mod/assign/services/assign.ts");
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
 * Page that displays a submission.
 */
let AddonModAssignSubmissionReviewPage = class AddonModAssignSubmissionReviewPage {
    constructor(route) {
        this.route = route;
        this.title = ''; // Title to display.
        this.loaded = false; // Whether data has been loaded.
        this.canSaveGrades = false; // Whether the user can save grades.
        this.blindMarking = false; // Whether it uses blind marking.
        this.forceLeave = false; // To allow leaving the page without checking for changes.
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            var _a;
            try {
                this.moduleId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.submitId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('submitId') || 0;
                this.blindId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('blindId', { params });
                const groupId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('groupId');
                const selectedStatus = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('selectedStatus');
                const submissionsSource = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_3__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_classes_submissions_source__WEBPACK_IMPORTED_MODULE_9__["AddonModAssignSubmissionsSource"], [this.courseId, this.moduleId, selectedStatus]);
                (_a = this.submissions) === null || _a === void 0 ? void 0 : _a.destroy();
                submissionsSource.groupId = groupId;
                this.submissions = new AddonModAssignSubmissionSwipeItemsManager(submissionsSource);
                this.submissions.start();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return;
            }
            this.fetchSubmission().finally(() => {
                this.loaded = true;
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a;
        (_a = this.submissions) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.submissionComponent || this.forceLeave) {
                return true;
            }
            // Check if data has changed.
            return this.submissionComponent.canLeave();
        });
    }
    /**
     * User entered the page.
     */
    ionViewDidEnter() {
        var _a;
        (_a = this.submissionComponent) === null || _a === void 0 ? void 0 : _a.ionViewDidEnter();
    }
    /**
     * User left the page.
     */
    ionViewDidLeave() {
        var _a;
        (_a = this.submissionComponent) === null || _a === void 0 ? void 0 : _a.ionViewDidLeave();
    }
    /**
     * Get the submission.
     *
     * @return Promise resolved when done.
     */
    fetchSubmission() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.assign = yield _services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].getAssignment(this.courseId, this.moduleId);
            this.title = this.assign.name;
            this.blindMarking = !!this.assign.blindmarking && !this.assign.revealidentities;
            const gradeInfo = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_5__["CoreCourse"].getModuleBasicGradeInfo(this.moduleId);
            if (!gradeInfo) {
                return;
            }
            // Grades can be saved if simple grading.
            if (gradeInfo.advancedgrading && gradeInfo.advancedgrading[0] &&
                gradeInfo.advancedgrading[0].method !== undefined) {
                const method = gradeInfo.advancedgrading[0].method || 'simple';
                this.canSaveGrades = method == 'simple';
            }
            else {
                this.canSaveGrades = true;
            }
        });
    }
    /**
     * Refresh all the data.
     *
     * @return Promise resolved when done.
     */
    refreshAllData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].invalidateAssignmentData(this.courseId));
            if (this.assign) {
                promises.push(_services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].invalidateSubmissionData(this.assign.id));
                promises.push(_services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].invalidateAssignmentUserMappingsData(this.assign.id));
                promises.push(_services_assign__WEBPACK_IMPORTED_MODULE_11__["AddonModAssign"].invalidateSubmissionStatusData(this.assign.id, this.submitId, undefined, this.blindMarking));
            }
            try {
                yield Promise.all(promises);
            }
            finally {
                this.submissionComponent && this.submissionComponent.invalidateAndRefresh(true);
                yield this.fetchSubmission();
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refreshSubmission(refresher) {
        this.refreshAllData().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Submit a grade and feedback.
     */
    submitGrade() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.submissionComponent) {
                return;
            }
            try {
                yield this.submissionComponent.submitGrade();
                // Grade submitted, leave the view if not in tablet.
                if (!_services_screen__WEBPACK_IMPORTED_MODULE_7__["CoreScreen"].isTablet) {
                    this.forceLeave = true;
                    _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
            }
        });
    }
};
AddonModAssignSubmissionReviewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddonModAssignSubmissionReviewPage.propDecorators = {
    submissionComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_submission_submission__WEBPACK_IMPORTED_MODULE_10__["AddonModAssignSubmissionComponent"],] }]
};
AddonModAssignSubmissionReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-assign-submission-review',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./submission-review.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/assign/pages/submission-review/submission-review.html")).default,
    })
], AddonModAssignSubmissionReviewPage);

/**
 * Helper to manage swiping within a collection of submissions.
 */
class AddonModAssignSubmissionSwipeItemsManager extends _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_4__["CoreSwipeNavigationItemsManager"] {
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        return route.params.submitId;
    }
}


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
//# sourceMappingURL=assign-lazy-module.js.map