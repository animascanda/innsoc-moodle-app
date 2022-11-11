(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/attempts/attempts.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/attempts/attempts.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.mod_feedback.responses' |translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!attempts || !attempts.loaded\" (ionRefresh)=\"refreshFeedback($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n        <core-loading [hideUntil]=\"attempts && attempts.loaded\">\r\n            <ion-list class=\"ion-no-margin\">\r\n                <core-group-selector [groupInfo]=\"groupInfo\" [(selected)]=\"selectedGroup\" (selectedChange)=\"reloadAttempts()\">\r\n                </core-group-selector>\r\n\r\n                <ng-container *ngIf=\"identifiableAttemptsTotal > 0\">\r\n                    <ion-item-divider>\r\n                        <ion-label>\r\n                            <h2>{{ 'addon.mod_feedback.non_anonymous_entries' | translate : {$a: identifiableAttemptsTotal } }}</h2>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item *ngFor=\"let attempt of identifiableAttempts\" class=\"ion-text-wrap\" button detail=\"true\"\r\n                        (click)=\"attempts?.select(attempt)\" [attr.aria-current]=\"attempts?.getItemAriaCurrent(attempt)\">\r\n                        <core-user-avatar [user]=\"attempt\" [linkProfile]=\"false\" slot=\"start\"></core-user-avatar>\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ attempt.fullname }}</p>\r\n                            <p *ngIf=\"attempt.timemodified\">{{ attempt.timemodified * 1000 | coreFormatDate }}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"identifiableAttemptsTotal === identifiableAttempts.length && anonymousAttemptsTotal > 0\">\r\n                    <ion-item-divider>\r\n                        <ion-label>\r\n                            <h2>{{ 'addon.mod_feedback.anonymous_entries' | translate : {$a: anonymousAttemptsTotal } }}</h2>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item *ngFor=\"let attempt of anonymousAttempts\" class=\"ion-text-wrap\" button detail=\"true\"\r\n                        (click)=\"attempts?.select(attempt)\" [attr.aria-current]=\"attempts?.getItemAriaCurrent(attempt)\">\r\n                        <core-user-avatar [linkProfile]=\"false\" slot=\"start\"></core-user-avatar>\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'addon.mod_feedback.anonymous_user' | translate }}</p>\r\n                            <p>{{ 'addon.mod_feedback.response_nr' | translate }}: {{attempt.number}}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ng-container>\r\n\r\n                <core-infinite-loading [enabled]=\"attempts && attempts.loaded && !attempts.completed\" [error]=\"fetchFailed\"\r\n                    (action)=\"fetchMoreAttempts($event)\">\r\n                </core-infinite-loading>\r\n            </ion-list>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/index/index.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/index/index.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header collapsible>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module?.id\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <!-- The buttons defined by the component will be added in here. -->\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"activityComponent?.showLoading\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <addon-mod-feedback-index [module]=\"module\" [courseId]=\"courseId\" [group]=\"selectedGroup\" [tab]=\"selectedTab\"\r\n        (dataRetrieved)=\"updateData($event)\"></addon-mod-feedback-index>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/feedback/feedback-lazy.module.ts":
/*!*********************************************************!*\
  !*** ./src/addons/mod/feedback/feedback-lazy.module.ts ***!
  \*********************************************************/
/*! exports provided: AddonModFeedbackLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackLazyModule", function() { return AddonModFeedbackLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/feedback/components/components.module.ts");
/* harmony import */ var _pages_index_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index */ "./src/addons/mod/feedback/pages/index/index.ts");
/* harmony import */ var _pages_attempts_attempts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/attempts/attempts */ "./src/addons/mod/feedback/pages/attempts/attempts.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
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
        component: _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModFeedbackIndexPage"],
    },
    {
        path: ':courseId/:cmId/form',
        loadChildren: () => Promise.all(/*! import() | pages-form-form-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-form-form-module")]).then(__webpack_require__.bind(null, /*! ./pages/form/form.module */ "./src/addons/mod/feedback/pages/form/form.module.ts")).then(m => m.AddonModFeedbackFormPageModule),
    },
    {
        path: ':courseId/:cmId/nonrespondents',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-nonrespondents-nonrespondents-module */ "pages-nonrespondents-nonrespondents-module").then(__webpack_require__.bind(null, /*! ./pages/nonrespondents/nonrespondents.module */ "./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.module.ts"))
            .then(m => m.AddonModFeedbackNonRespondentsPageModule),
    },
];
const mobileRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/attempts',
        component: _pages_attempts_attempts__WEBPACK_IMPORTED_MODULE_6__["AddonModFeedbackAttemptsPage"],
    },
    {
        path: ':courseId/:cmId/attempts/:attemptId',
        loadChildren: () => Promise.all(/*! import() | pages-attempt-attempt-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-attempt-attempt-module")]).then(__webpack_require__.bind(null, /*! ./pages/attempt/attempt.module */ "./src/addons/mod/feedback/pages/attempt/attempt.module.ts")).then(m => m.AddonModFeedbackAttemptPageModule),
    },
];
const tabletRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/attempts',
        component: _pages_attempts_attempts__WEBPACK_IMPORTED_MODULE_6__["AddonModFeedbackAttemptsPage"],
        children: [
            {
                path: ':attemptId',
                loadChildren: () => Promise.all(/*! import() | pages-attempt-attempt-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-attempt-attempt-module")]).then(__webpack_require__.bind(null, /*! ./pages/attempt/attempt.module */ "./src/addons/mod/feedback/pages/attempt/attempt.module.ts")).then(m => m.AddonModFeedbackAttemptPageModule),
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isTablet),
];
let AddonModFeedbackLazyModule = class AddonModFeedbackLazyModule {
};
AddonModFeedbackLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonModFeedbackComponentsModule"],
        ],
        declarations: [
            _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModFeedbackIndexPage"],
            _pages_attempts_attempts__WEBPACK_IMPORTED_MODULE_6__["AddonModFeedbackAttemptsPage"],
        ],
    })
], AddonModFeedbackLazyModule);



/***/ }),

/***/ "./src/addons/mod/feedback/pages/attempts/attempts.ts":
/*!************************************************************!*\
  !*** ./src/addons/mod/feedback/pages/attempts/attempts.ts ***!
  \************************************************************/
/*! exports provided: AddonModFeedbackAttemptsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackAttemptsPage", function() { return AddonModFeedbackAttemptsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
/* harmony import */ var _classes_promised_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/promised-value */ "./src/core/classes/promised-value.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _classes_feedback_attempts_source__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../classes/feedback-attempts-source */ "./src/addons/mod/feedback/classes/feedback-attempts-source.ts");
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
 * Page that displays feedback attempts.
 */
let AddonModFeedbackAttemptsPage = class AddonModFeedbackAttemptsPage {
    constructor(route) {
        this.route = route;
        this.fetchFailed = false;
        this.promisedAttempts = new _classes_promised_value__WEBPACK_IMPORTED_MODULE_5__["CorePromisedValue"]();
    }
    get attempts() {
        return this.promisedAttempts.value;
    }
    get groupInfo() {
        var _a;
        return (_a = this.attempts) === null || _a === void 0 ? void 0 : _a.getSource().groupInfo;
    }
    get selectedGroup() {
        var _a;
        return (_a = this.attempts) === null || _a === void 0 ? void 0 : _a.getSource().selectedGroup;
    }
    set selectedGroup(group) {
        if (!this.attempts) {
            return;
        }
        this.attempts.getSource().selectedGroup = group;
        this.attempts.getSource().setDirty(true);
    }
    get identifiableAttempts() {
        var _a, _b;
        return (_b = (_a = this.attempts) === null || _a === void 0 ? void 0 : _a.getSource().identifiable) !== null && _b !== void 0 ? _b : [];
    }
    get identifiableAttemptsTotal() {
        var _a, _b;
        return (_b = (_a = this.attempts) === null || _a === void 0 ? void 0 : _a.getSource().identifiableTotal) !== null && _b !== void 0 ? _b : 0;
    }
    get anonymousAttempts() {
        var _a, _b;
        return (_b = (_a = this.attempts) === null || _a === void 0 ? void 0 : _a.getSource().anonymous) !== null && _b !== void 0 ? _b : [];
    }
    get anonymousAttemptsTotal() {
        var _a, _b;
        return (_b = (_a = this.attempts) === null || _a === void 0 ? void 0 : _a.getSource().anonymousTotal) !== null && _b !== void 0 ? _b : 0;
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                const courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_3__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_classes_feedback_attempts_source__WEBPACK_IMPORTED_MODULE_10__["AddonModFeedbackAttemptsSource"], [courseId, cmId]);
                source.selectedGroup = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('group') || 0;
                this.promisedAttempts.resolve(new AddonModFeedbackAttemptsManager(source, this.route.component));
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].back();
                return;
            }
            const attempts = yield this.promisedAttempts;
            try {
                this.fetchFailed = false;
                yield attempts.getSource().loadFeedback();
                yield attempts.load();
            }
            catch (error) {
                this.fetchFailed = true;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
            }
            yield attempts.start(this.splitView);
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a;
        (_a = this.attempts) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    /**
     * Fetch more attempts, if any.
     *
     * @param infiniteComplete Complete callback for infinite loader.
     */
    fetchMoreAttempts(infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const attempts = yield this.promisedAttempts;
            try {
                this.fetchFailed = false;
                yield attempts.load();
            }
            catch (error) {
                this.fetchFailed = true;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
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
            const attempts = yield this.promisedAttempts;
            try {
                this.fetchFailed = false;
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(attempts.getSource().invalidateCache());
                yield attempts.getSource().loadFeedback();
                yield attempts.reload();
            }
            catch (error) {
                this.fetchFailed = true;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
            }
            finally {
                refresher.complete();
            }
        });
    }
    /**
     * Reload attempts list.
     */
    reloadAttempts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const attempts = yield this.promisedAttempts;
            yield attempts.reload();
        });
    }
};
AddonModFeedbackAttemptsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddonModFeedbackAttemptsPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_6__["CoreSplitViewComponent"],] }]
};
AddonModFeedbackAttemptsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-feedback-attempts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./attempts.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/attempts/attempts.html")).default,
    })
], AddonModFeedbackAttemptsPage);

/**
 * Attempts manager.
 */
class AddonModFeedbackAttemptsManager extends _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_4__["CoreListItemsManager"] {
}


/***/ }),

/***/ "./src/addons/mod/feedback/pages/index/index.ts":
/*!******************************************************!*\
  !*** ./src/addons/mod/feedback/pages/index/index.ts ***!
  \******************************************************/
/*! exports provided: AddonModFeedbackIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackIndexPage", function() { return AddonModFeedbackIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/index/index */ "./src/addons/mod/feedback/components/index/index.ts");
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
 * Page that displays a feedback.
 */
let AddonModFeedbackIndexPage = class AddonModFeedbackIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
    /**
     * Component being initialized.
     */
    ngOnInit() {
        super.ngOnInit();
        this.selectedTab = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteParam('tab');
        this.selectedGroup = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('group');
    }
};
AddonModFeedbackIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index_index__WEBPACK_IMPORTED_MODULE_4__["AddonModFeedbackIndexComponent"],] }]
};
AddonModFeedbackIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-feedback-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/index/index.html")).default,
    })
], AddonModFeedbackIndexPage);



/***/ })

}]);
//# sourceMappingURL=feedback-lazy-module.js.map