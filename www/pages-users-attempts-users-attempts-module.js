(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-attempts-users-attempts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text *ngIf=\"h5pActivity\" [text]=\"h5pActivity.name\" contextLevel=\"module\"\r\n                    [contextInstanceId]=\"h5pActivity.coursemodule\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-list *ngIf=\"users.length\">\r\n            <!-- \"Header\" of the table -->\r\n            <ion-item class=\"addon-mod_h5pactivity-table-header font-bold\" [detail]=\"false\">\r\n                <ion-label>\r\n                    <ion-row class=\"ion-align-items-center\">\r\n                        <ion-col class=\"ion-text-center\" size=\"4\">{{ 'core.user' | translate }}</ion-col>\r\n                        <ion-col class=\"ion-text-center\" size=\"4\">{{ 'core.date' | translate }}</ion-col>\r\n                        <ion-col class=\"ion-text-center\" size=\"2\">{{ 'addon.mod_h5pactivity.score' | translate }}</ion-col>\r\n                        <ion-col class=\"ion-text-center\" size=\"2\">{{ 'addon.mod_h5pactivity.attempts' | translate }}</ion-col>\r\n                    </ion-row>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <!-- List of users. -->\r\n            <ion-item class=\"ion-text-wrap addon-mod_h5pactivity-table-row\" *ngFor=\"let user of users\" detail=\"true\" button\r\n                [attr.aria-label]=\"'addon.mod_h5pactivity.review_user_attempts' | translate:{$a: user.attempts.length}\"\r\n                (click)=\"openUser(user)\">\r\n\r\n                <ion-label>\r\n                    <ion-row class=\"ion-align-items-center\">\r\n                        <ion-col class=\"ion-text-center\" size=\"4\">\r\n                            <p>\r\n                                <core-user-avatar [user]=\"user.user\" [courseId]=\"courseId\"></core-user-avatar>\r\n                            </p>\r\n                            {{ user.user.fullname }}\r\n                        </ion-col>\r\n                        <ion-col class=\"ion-text-center\" size=\"4\">\r\n                            <span *ngIf=\"user.attempts.length\">\r\n                                {{ user.attempts[user.attempts.length - 1].timemodified | coreFormatDate:'strftimedatetimeshort' }}\r\n                            </span>\r\n                            <span *ngIf=\"!user.attempts.length\">-</span>\r\n                        </ion-col>\r\n                        <ion-col class=\"ion-text-center\" size=\"2\">\r\n                            <span *ngIf=\"user.score !== undefined\">\r\n                                {{ 'core.percentagenumber' | translate: {$a: user.score} }}\r\n                            </span>\r\n                            <span *ngIf=\"user.score === undefined\">-</span>\r\n                        </ion-col>\r\n                        <ion-col class=\"ion-text-center\" size=\"2\">\r\n                            {{user.attempts.length}}\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n\r\n        <!-- No attempts. -->\r\n        <core-empty-box *ngIf=\"!users.length && !canLoadMore\" icon=\"fas-chart-bar\"\r\n            [message]=\"'addon.mod_h5pactivity.noparticipants' | translate\">\r\n        </core-empty-box>\r\n\r\n        <core-infinite-loading [enabled]=\"loaded && canLoadMore\" [error]=\"fetchMoreUsersFailed\" (action)=\"fetchMoreUsers($event)\">\r\n        </core-infinite-loading>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AddonModH5PActivityUsersAttemptsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModH5PActivityUsersAttemptsPageModule", function() { return AddonModH5PActivityUsersAttemptsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _users_attempts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-attempts */ "./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.ts");
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
        component: _users_attempts__WEBPACK_IMPORTED_MODULE_4__["AddonModH5PActivityUsersAttemptsPage"],
    },
];
let AddonModH5PActivityUsersAttemptsPageModule = class AddonModH5PActivityUsersAttemptsPageModule {
};
AddonModH5PActivityUsersAttemptsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _users_attempts__WEBPACK_IMPORTED_MODULE_4__["AddonModH5PActivityUsersAttemptsPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonModH5PActivityUsersAttemptsPageModule);



/***/ }),

/***/ "./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.ts":
/*!***************************************************************************!*\
  !*** ./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.ts ***!
  \***************************************************************************/
/*! exports provided: AddonModH5PActivityUsersAttemptsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModH5PActivityUsersAttemptsPage", function() { return AddonModH5PActivityUsersAttemptsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/h5pactivity */ "./src/addons/mod/h5pactivity/services/h5pactivity.ts");
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
 * Page that displays all users that can attempt an H5P activity.
 */
let AddonModH5PActivityUsersAttemptsPage = class AddonModH5PActivityUsersAttemptsPage {
    constructor() {
        this.loaded = false;
        this.users = [];
        this.fetchMoreUsersFailed = false;
        this.canLoadMore = false;
        this.page = 0;
        this.fetchSuccess = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].back();
                return;
            }
            this.fetchData();
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
     * @param refresh Whether user is refreshing data.
     * @return Promise resolved when done.
     */
    fetchData(refresh) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.h5pActivity = yield _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivity"].getH5PActivity(this.courseId, this.cmId);
                yield Promise.all([
                    this.fetchUsers(refresh),
                ]);
                if (!this.fetchSuccess) {
                    this.fetchSuccess = true;
                    _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(_services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivity"].logViewReport(this.h5pActivity.id, this.h5pActivity.name));
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading attempts.');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Get users.
     *
     * @param refresh Whether user is refreshing data.
     * @return Promise resolved when done.
     */
    fetchUsers(refresh) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.h5pActivity) {
                return;
            }
            if (refresh) {
                this.page = 0;
            }
            const result = yield _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivity"].getUsersAttempts(this.h5pActivity.id, {
                cmId: this.cmId,
                page: this.page,
            });
            const formattedUsers = yield this.formatUsers(this.h5pActivity, result.users);
            if (this.page === 0) {
                this.users = formattedUsers;
            }
            else {
                this.users = this.users.concat(formattedUsers);
            }
            this.canLoadMore = result.canLoadMore;
            this.page++;
        });
    }
    /**
     * Format users data.
     *
     * @param h5pActivity Activity data.
     * @param users Users to format.
     * @return Formatted users.
     */
    formatUsers(h5pActivity, users) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return Promise.all(users.map((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var _a;
                user.user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUser"].getProfile(user.userid, this.courseId, true);
                // Calculate the score of the user.
                if (h5pActivity.grademethod === _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivityProvider"].GRADEMANUAL) {
                    // No score.
                }
                else if (h5pActivity.grademethod === _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivityProvider"].GRADEAVERAGEATTEMPT) {
                    if (user.attempts.length) {
                        // Calculate the average.
                        const sumScores = user.attempts.reduce((sumScores, attempt) => sumScores + attempt.rawscore * 100 / attempt.maxscore, 0);
                        user.score = Math.round(sumScores / user.attempts.length);
                    }
                }
                else if ((_a = user.scored) === null || _a === void 0 ? void 0 : _a.attempts[0]) {
                    // Only a single attempt used to calculate the grade. Use it.
                    user.score = Math.round(user.scored.attempts[0].rawscore * 100 / user.scored.attempts[0].maxscore);
                }
                return user;
            })));
        });
    }
    /**
     * Load a new batch of users.
     *
     * @param complete Completion callback.
     */
    fetchMoreUsers(complete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchUsers(false);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading more users');
                this.fetchMoreUsersFailed = true;
            }
            complete();
        });
    }
    /**
     * Refresh the data.
     *
     * @return Promise resolved when done.
     */
    refreshData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [
                _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivity"].invalidateActivityData(this.courseId),
            ];
            if (this.h5pActivity) {
                promises.push(_services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivity"].invalidateAllUsersAttempts(this.h5pActivity.id));
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(Promise.all(promises));
            yield this.fetchData(true);
        });
    }
    /**
     * Open the page to view a user attempts.
     *
     * @param user User to open.
     */
    openUser(user) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].navigate(`../userattempts/${user.userid}`);
    }
};
AddonModH5PActivityUsersAttemptsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-h5pactivity-users-attempts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users-attempts.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.html")).default,
    })
], AddonModH5PActivityUsersAttemptsPage);



/***/ })

}]);
//# sourceMappingURL=pages-users-attempts-users-attempts-module.js.map