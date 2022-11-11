(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nonrespondents-nonrespondents-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.mod_feedback.responses' |translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshFeedback($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-list class=\"ion-no-margin\">\r\n            <core-group-selector [groupInfo]=\"groupInfo\" [(selected)]=\"selectedGroup\" (selectedChange)=\"loadAttempts(selectedGroup)\">\r\n            </core-group-selector>\r\n\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    <h2>{{ 'addon.mod_feedback.non_respondents_students' | translate : {$a: total } }}</h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ng-container *ngIf=\"total > 0\">\r\n                <ion-item *ngFor=\"let user of users\" class=\"ion-text-wrap\">\r\n                    <core-user-avatar [user]=\"user\" slot=\"start\"></core-user-avatar>\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ user.fullname }}</p>\r\n                        <p>\r\n                            <ion-badge color=\"success\" *ngIf=\"user.started\">\r\n                                {{ 'addon.mod_feedback.started' | translate}}\r\n                            </ion-badge>\r\n                            <ion-badge color=\"danger\" *ngIf=\"!user.started\">\r\n                                {{ 'addon.mod_feedback.not_started' | translate}}\r\n                            </ion-badge>\r\n                        </p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ng-container>\r\n\r\n            <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadAttempts(undefined, $event)\" [error]=\"loadMoreError\">\r\n            </core-infinite-loading>\r\n        </ion-list>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AddonModFeedbackNonRespondentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackNonRespondentsPageModule", function() { return AddonModFeedbackNonRespondentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nonrespondents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nonrespondents */ "./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.ts");
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
        component: _nonrespondents__WEBPACK_IMPORTED_MODULE_4__["AddonModFeedbackNonRespondentsPage"],
    },
];
let AddonModFeedbackNonRespondentsPageModule = class AddonModFeedbackNonRespondentsPageModule {
};
AddonModFeedbackNonRespondentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _nonrespondents__WEBPACK_IMPORTED_MODULE_4__["AddonModFeedbackNonRespondentsPage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], AddonModFeedbackNonRespondentsPageModule);



/***/ }),

/***/ "./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.ts":
/*!************************************************************************!*\
  !*** ./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.ts ***!
  \************************************************************************/
/*! exports provided: AddonModFeedbackNonRespondentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackNonRespondentsPage", function() { return AddonModFeedbackNonRespondentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_feedback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/feedback */ "./src/addons/mod/feedback/services/feedback.ts");
/* harmony import */ var _services_feedback_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/feedback-helper */ "./src/addons/mod/feedback/services/feedback-helper.ts");
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
 * Page that displays feedback non respondents.
 */
let AddonModFeedbackNonRespondentsPage = class AddonModFeedbackNonRespondentsPage {
    constructor() {
        this.page = 0;
        this.users = [];
        this.total = 0;
        this.canLoadMore = false;
        this.loaded = false;
        this.loadMoreError = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        try {
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.selectedGroup = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('group') || 0;
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].back();
            return;
        }
        this.fetchData();
    }
    /**
     * Fetch all the data required for the view.
     *
     * @param refresh Empty events array first.
     * @return Promise resolved when done.
     */
    fetchData(refresh = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.page = 0;
            this.total = 0;
            this.users = [];
            try {
                this.feedback = yield _services_feedback__WEBPACK_IMPORTED_MODULE_6__["AddonModFeedback"].getFeedback(this.courseId, this.cmId);
                this.groupInfo = yield _services_groups__WEBPACK_IMPORTED_MODULE_2__["CoreGroups"].getActivityGroupInfo(this.cmId);
                this.selectedGroup = _services_groups__WEBPACK_IMPORTED_MODULE_2__["CoreGroups"].validateGroupId(this.selectedGroup, this.groupInfo);
                yield this.loadGroupUsers(this.selectedGroup);
            }
            catch (message) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(message, 'core.course.errorgetmodule', true);
                if (!refresh) {
                    // Some call failed on first fetch, go back.
                    _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].back();
                }
            }
        });
    }
    /**
     * Load Group responses.
     *
     * @param groupId If defined it will change group if not, it will load more users for the same group.
     * @return Promise resolved when done.
     */
    loadGroupUsers(groupId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            if (groupId === undefined) {
                this.page++;
            }
            else {
                this.selectedGroup = groupId;
                this.page = 0;
                this.total = 0;
                this.users = [];
                this.loaded = false;
            }
            try {
                const response = yield _services_feedback_helper__WEBPACK_IMPORTED_MODULE_7__["AddonModFeedbackHelper"].getNonRespondents(this.feedback.id, {
                    groupId: this.selectedGroup,
                    page: this.page,
                    cmId: this.cmId,
                });
                this.total = response.total;
                if (this.users.length < response.total) {
                    this.users = this.users.concat(response.users);
                }
                this.canLoadMore = this.users.length < response.total;
            }
            catch (error) {
                this.loadMoreError = true;
                throw error;
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Change selected group or load more users.
     *
     * @param groupId Group ID selected. If not defined, it will load more users.
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     */
    loadAttempts(groupId, infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.loadGroupUsers(groupId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
            }
            finally {
                infiniteComplete && infiniteComplete();
            }
        });
    }
    /**
     * Refresh the attempts.
     *
     * @param refresher Refresher.
     */
    refreshFeedback(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const promises = [];
                promises.push(_services_groups__WEBPACK_IMPORTED_MODULE_2__["CoreGroups"].invalidateActivityGroupInfo(this.cmId));
                if (this.feedback) {
                    promises.push(_services_feedback__WEBPACK_IMPORTED_MODULE_6__["AddonModFeedback"].invalidateNonRespondentsData(this.feedback.id));
                }
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(Promise.all(promises));
                yield this.fetchData(true);
            }
            finally {
                refresher.complete();
            }
        });
    }
};
AddonModFeedbackNonRespondentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-feedback-nonrespondents',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nonrespondents.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.html")).default,
    })
], AddonModFeedbackNonRespondentsPage);



/***/ })

}]);
//# sourceMappingURL=pages-nonrespondents-nonrespondents-module.js.map