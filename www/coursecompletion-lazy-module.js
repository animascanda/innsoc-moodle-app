(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coursecompletion-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/coursecompletion/pages/report/report.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/coursecompletion/pages/report/report.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.coursecompletion.coursecompletion' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!completionLoaded\" (ionRefresh)=\"refreshCompletion($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"completionLoaded\">\r\n        <ion-card *ngIf=\"completion && tracked\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <h2>{{ 'addon.coursecompletion.status' | translate }}</h2>\r\n                    <p>{{ statusText! | translate }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <h2>{{ 'addon.coursecompletion.required' | translate }}</h2>\r\n                    <p *ngIf=\"completion.aggregation === 1\">{{ 'addon.coursecompletion.criteriarequiredall' | translate }}</p>\r\n                    <p *ngIf=\"completion.aggregation === 2\">{{ 'addon.coursecompletion.criteriarequiredany' | translate }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"completion && tracked\">\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    <h2>{{ 'addon.coursecompletion.requiredcriteria' | translate }}</h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item class=\"ion-hide-md-up ion-text-wrap\" *ngFor=\"let criteria of completion.completions\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">\r\n                        <core-format-text clean=\"true\" [text]=\"criteria.details.criteria\" [filter]=\"false\"></core-format-text>\r\n                    </p>\r\n                    <p>\r\n                        <core-format-text clean=\"true\" [text]=\"criteria.details.requirement\" [filter]=\"false\"></core-format-text>\r\n                    </p>\r\n                </ion-label>\r\n                <strong slot=\"end\">{{ criteria.status }}</strong>\r\n            </ion-item>\r\n            <ion-item class=\"ion-hide-md-down ion-text-wrap\">\r\n                <ion-label>\r\n                    <ion-row>\r\n                        <ion-col><strong>{{ 'addon.coursecompletion.criteriagroup' | translate }}</strong></ion-col>\r\n                        <ion-col><strong>{{ 'addon.coursecompletion.criteria' | translate }}</strong></ion-col>\r\n                        <ion-col><strong>{{ 'addon.coursecompletion.requirement' | translate }}</strong></ion-col>\r\n                        <ion-col><strong>{{ 'addon.coursecompletion.status' | translate }}</strong></ion-col>\r\n                        <ion-col><strong>{{ 'addon.coursecompletion.complete' | translate }}</strong></ion-col>\r\n                        <ion-col><strong>{{ 'addon.coursecompletion.completiondate' | translate }}</strong></ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngFor=\"let criteria of completion.completions\">\r\n                        <ion-col>\r\n                            <core-format-text clean=\"true\" [text]=\"criteria.title\" [filter]=\"false\"></core-format-text>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                            <core-format-text clean=\"true\" [text]=\"criteria.details.criteria\" [filter]=\"false\"></core-format-text>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                            <core-format-text clean=\"true\" [text]=\"criteria.details.requirement\" [filter]=\"false\"></core-format-text>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                            <core-format-text [text]=\"criteria.details.status\" [filter]=\"false\"></core-format-text>\r\n                        </ion-col>\r\n                        <ion-col>{{ criteria.status }}</ion-col>\r\n                        <ion-col *ngIf=\"criteria.timecompleted\">\r\n                            {{ criteria.timecompleted * 1000 | coreFormatDate :'strftimedatetimeshort' }}\r\n                        </ion-col>\r\n                        <ion-col *ngIf=\"!criteria.timecompleted\"></ion-col>\r\n                    </ion-row>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"showSelfComplete && tracked\">\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    <h2>{{ 'addon.coursecompletion.manualselfcompletion' | translate }}</h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <ion-button expand=\"block\" (click)=\"completeCourse()\">\r\n                        {{ 'addon.coursecompletion.completecourse' | translate }}\r\n                    </ion-button>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card class=\"core-warning-card\" *ngIf=\"!tracked\">\r\n            <ion-item>\r\n                <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>{{ 'addon.coursecompletion.nottracked' | translate }}</ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/coursecompletion/coursecompletion-lazy.module.ts":
/*!*********************************************************************!*\
  !*** ./src/addons/coursecompletion/coursecompletion-lazy.module.ts ***!
  \*********************************************************************/
/*! exports provided: AddonCourseCompletionLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCourseCompletionLazyModule", function() { return AddonCourseCompletionLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_comments_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/comments/components/components.module */ "./src/core/features/comments/components/components.module.ts");
/* harmony import */ var _features_tag_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/tag/components/components.module */ "./src/core/features/tag/components/components.module.ts");
/* harmony import */ var _pages_report_report__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/report/report */ "./src/addons/coursecompletion/pages/report/report.ts");
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
        component: _pages_report_report__WEBPACK_IMPORTED_MODULE_6__["AddonCourseCompletionReportPage"],
    },
];
let AddonCourseCompletionLazyModule = class AddonCourseCompletionLazyModule {
};
AddonCourseCompletionLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
            _features_comments_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreCommentsComponentsModule"],
            _features_tag_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreTagComponentsModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        declarations: [
            _pages_report_report__WEBPACK_IMPORTED_MODULE_6__["AddonCourseCompletionReportPage"],
        ],
    })
], AddonCourseCompletionLazyModule);



/***/ }),

/***/ "./src/addons/coursecompletion/pages/report/report.ts":
/*!************************************************************!*\
  !*** ./src/addons/coursecompletion/pages/report/report.ts ***!
  \************************************************************/
/*! exports provided: AddonCourseCompletionReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCourseCompletionReportPage", function() { return AddonCourseCompletionReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _addons_coursecompletion_services_coursecompletion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addons/coursecompletion/services/coursecompletion */ "./src/addons/coursecompletion/services/coursecompletion.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
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
 * Page that displays the course completion report.
 */
let AddonCourseCompletionReportPage = class AddonCourseCompletionReportPage {
    constructor() {
        this.completionLoaded = false;
        this.showSelfComplete = false;
        this.tracked = true; // Whether completion is tracked.
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        try {
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('userId') || _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].back();
            return;
        }
        this.fetchCompletion().finally(() => {
            this.completionLoaded = true;
        });
    }
    /**
     * Fetch compleiton data.
     *
     * @return Promise resolved when done.
     */
    fetchCompletion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.completion = yield _addons_coursecompletion_services_coursecompletion__WEBPACK_IMPORTED_MODULE_1__["AddonCourseCompletion"].getCompletion(this.courseId, this.userId);
                this.statusText = _addons_coursecompletion_services_coursecompletion__WEBPACK_IMPORTED_MODULE_1__["AddonCourseCompletion"].getCompletedStatusText(this.completion);
                this.showSelfComplete = _addons_coursecompletion_services_coursecompletion__WEBPACK_IMPORTED_MODULE_1__["AddonCourseCompletion"].canMarkSelfCompleted(this.userId, this.completion);
                this.tracked = true;
            }
            catch (error) {
                if (error && error.errorcode == 'notenroled') {
                    // Not enrolled error, probably a teacher.
                    this.tracked = false;
                }
                else {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.coursecompletion.couldnotloadreport', true);
                }
            }
        });
    }
    /**
     * Refresh completion data on PTR.
     *
     * @param refresher Refresher instance.
     */
    refreshCompletion(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _addons_coursecompletion_services_coursecompletion__WEBPACK_IMPORTED_MODULE_1__["AddonCourseCompletion"].invalidateCourseCompletion(this.courseId, this.userId).finally(() => {
                this.fetchCompletion().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        });
    }
    /**
     * Mark course as completed.
     */
    completeCourse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _addons_coursecompletion_services_coursecompletion__WEBPACK_IMPORTED_MODULE_1__["AddonCourseCompletion"].markCourseAsSelfCompleted(this.courseId);
                yield this.refreshCompletion();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
};
AddonCourseCompletionReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-course-completion-report',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./report.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/coursecompletion/pages/report/report.html")).default,
    })
], AddonCourseCompletionReportPage);



/***/ })

}]);
//# sourceMappingURL=coursecompletion-lazy-module.js.map