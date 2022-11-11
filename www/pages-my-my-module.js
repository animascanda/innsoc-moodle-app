(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-my-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/my/my.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/my/my.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"siteName\" contextLevel=\"system\" [contextInstanceId]=\"0\" class=\"core-header-sitename\">\r\n                </core-format-text>\r\n                <img src=\"assets/img/top_logo.png\" class=\"core-header-logo\" [alt]=\"siteName\">\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <core-user-menu-button></core-user-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-item class=\"ion-text-wrap divider\">\r\n            <ion-label>\r\n                <h2 class=\"big\">{{ 'core.courses.mycourses' | translate }}</h2>\r\n            </ion-label>\r\n            <div slot=\"end\" class=\"flex-row\">\r\n                <!-- Download all courses. -->\r\n                <div *ngIf=\"downloadCoursesEnabled && myOverviewBlock && myOverviewBlock.filteredCourses.length > 0\"\r\n                    class=\"core-button-spinner\">\r\n                    <ion-button *ngIf=\"!myOverviewBlock.prefetchCoursesData.loading\" fill=\"clear\"\r\n                        (click)=\"myOverviewBlock.prefetchCourses()\"\r\n                        [attr.aria-label]=\"myOverviewBlock.prefetchCoursesData.statusTranslatable | translate\">\r\n                        <ion-icon [name]=\"myOverviewBlock.prefetchCoursesData.icon\" slot=\"icon-only\" aria-hidden=\"true\">\r\n                        </ion-icon>\r\n                    </ion-button>\r\n                    <ion-badge class=\"core-course-download-courses-progress\" *ngIf=\"myOverviewBlock.prefetchCoursesData.badge\"\r\n                        role=\"progressbar\" [attr.aria-valuemax]=\"myOverviewBlock.prefetchCoursesData.total\"\r\n                        [attr.aria-valuenow]=\"myOverviewBlock.prefetchCoursesData.count\"\r\n                        [attr.aria-valuetext]=\"myOverviewBlock.prefetchCoursesData.badgeA11yText\">\r\n                        {{myOverviewBlock.prefetchCoursesData.badge}}\r\n                    </ion-badge>\r\n                    <ion-spinner *ngIf=\"myOverviewBlock.prefetchCoursesData.loading\" [attr.aria-label]=\"'core.loading' | translate\">\r\n                    </ion-spinner>\r\n                </div>\r\n            </div>\r\n        </ion-item>\r\n        <ion-list>\r\n            <core-block *ngIf=\"loadedBlock?.visible\" [block]=\"loadedBlock\" contextLevel=\"user\" [instanceId]=\"userId\"></core-block>\r\n        </ion-list>\r\n\r\n        <core-block-side-blocks-button slot=\"fixed\" *ngIf=\"hasSideBlocks\" contextLevel=\"user\" [instanceId]=\"userId\"\r\n            [myDashboardPage]=\"myPageCourses\">\r\n        </core-block-side-blocks-button>\r\n\r\n        <core-empty-box *ngIf=\"!loadedBlock\" icon=\"fas-cubes\" [message]=\"'core.course.nocontentavailable' | translate\">\r\n        </core-empty-box>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/courses/pages/my/my.module.ts":
/*!*********************************************************!*\
  !*** ./src/core/features/courses/pages/my/my.module.ts ***!
  \*********************************************************/
/*! exports provided: CoreCoursesMyCoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesMyCoursesPageModule", function() { return CoreCoursesMyCoursesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_block_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/block/components/components.module */ "./src/core/features/block/components/components.module.ts");
/* harmony import */ var _my__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my */ "./src/core/features/courses/pages/my/my.ts");
/* harmony import */ var _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/mainmenu/components/components.module */ "./src/core/features/mainmenu/components/components.module.ts");
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
        component: _my__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesMyCoursesPage"],
    },
];
let CoreCoursesMyCoursesPageModule = class CoreCoursesMyCoursesPageModule {
};
CoreCoursesMyCoursesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_block_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreBlockComponentsModule"],
            _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_6__["CoreMainMenuComponentsModule"],
        ],
        declarations: [
            _my__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesMyCoursesPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCoursesMyCoursesPageModule);



/***/ }),

/***/ "./src/core/features/courses/pages/my/my.scss":
/*!****************************************************!*\
  !*** ./src/core/features/courses/pages/my/my.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep ion-item-divider {\n  display: none !important;\n}\n\n:host ::ng-deep core-loading {\n  --internal-loading-inline-min-height: calc(100vh - var(--core-header-toolbar-height));\n}\n\n:host-context(ion-tabs.placement-bottom) ::ng-deep core-loading {\n  --internal-loading-inline-min-height: calc(100vh - var(--core-header-toolbar-height) - var(--bottom-tabs-size) - 2px);\n}\n\ncore-block ::ng-deep ion-card.addon-block-myoverview {\n  --border-width: 0;\n  --background: transparent;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL2NvdXJzZXMvcGFnZXMvbXkvbXkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxRkFBQTtBQUVKOztBQUNBO0VBQ0kscUhBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBRUoiLCJmaWxlIjoic3JjL2NvcmUvZmVhdHVyZXMvY291cnNlcy9wYWdlcy9teS9teS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIGlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCBjb3JlLWxvYWRpbmcge1xyXG4gICAgLS1pbnRlcm5hbC1sb2FkaW5nLWlubGluZS1taW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tY29yZS1oZWFkZXItdG9vbGJhci1oZWlnaHQpKTtcclxufVxyXG5cclxuOmhvc3QtY29udGV4dChpb24tdGFicy5wbGFjZW1lbnQtYm90dG9tKSA6Om5nLWRlZXAgY29yZS1sb2FkaW5nIHtcclxuICAgIC0taW50ZXJuYWwtbG9hZGluZy1pbmxpbmUtbWluLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWNvcmUtaGVhZGVyLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLWJvdHRvbS10YWJzLXNpemUpIC0gMnB4KTtcclxufVxyXG5cclxuY29yZS1ibG9jayA6Om5nLWRlZXAgaW9uLWNhcmQuYWRkb24tYmxvY2stbXlvdmVydmlldyB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/core/features/courses/pages/my/my.ts":
/*!**************************************************!*\
  !*** ./src/core/features/courses/pages/my/my.ts ***!
  \**************************************************/
/*! exports provided: CoreCoursesMyCoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesMyCoursesPage", function() { return CoreCoursesMyCoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_page_loads_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/page-loads-manager */ "./src/core/classes/page-loads-manager.ts");
/* harmony import */ var _classes_promised_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/promised-value */ "./src/core/classes/promised-value.ts");
/* harmony import */ var _features_block_components_block_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/block/components/block/block */ "./src/core/features/block/components/block/block.ts");
/* harmony import */ var _features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/courses/services/dashboard */ "./src/core/features/courses/services/dashboard.ts");
/* harmony import */ var _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/mainmenu/classes/deep-link-manager */ "./src/core/features/mainmenu/classes/deep-link-manager.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_courses__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/courses */ "./src/core/features/courses/services/courses.ts");
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
 * Page that shows a my courses.
 */
let CoreCoursesMyCoursesPage = class CoreCoursesMyCoursesPage {
    constructor(loadsManager) {
        this.loadsManager = loadsManager;
        this.siteName = '';
        this.downloadCoursesEnabled = false;
        this.loaded = false;
        this.myPageCourses = _features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesDashboardProvider"].MY_PAGE_COURSES;
        this.hasSideBlocks = false;
        this.onReadyPromise = new _classes_promised_value__WEBPACK_IMPORTED_MODULE_3__["CorePromisedValue"]();
        // Refresh the enabled flags if site is updated.
        this.updateSiteObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_10__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_10__["CoreEvents"].SITE_UPDATED, () => {
            this.downloadCoursesEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_11__["CoreCourses"].isDownloadCoursesDisabledInSite();
            this.loadSiteName();
        }, _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteId());
        this.userId = _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteUserId();
        this.loadsManagerSubscription = this.loadsManager.onRefreshPage.subscribe(() => {
            this.loaded = false;
            this.loadContent();
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.downloadCoursesEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_11__["CoreCourses"].isDownloadCoursesDisabledInSite();
        const deepLinkManager = new _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_6__["CoreMainMenuDeepLinkManager"]();
        deepLinkManager.treatLink();
        this.loadSiteName();
        this.loadContent(true);
    }
    /**
     * Load data.
     *
     * @param firstLoad Whether it's the first load.
     */
    loadContent(firstLoad = false) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loadWatcher = this.loadsManager.startPageLoad(this, !!firstLoad);
            const available = yield _features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesDashboard"].isAvailable();
            const disabled = yield _services_courses__WEBPACK_IMPORTED_MODULE_11__["CoreCourses"].isMyCoursesDisabled();
            if (available && !disabled) {
                try {
                    const blocks = yield loadWatcher.watchRequest(_features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesDashboard"].getDashboardBlocksObservable({
                        myPage: this.myPageCourses,
                        readingStrategy: loadWatcher.getReadingStrategy(),
                    }));
                    // My overview block should always be in main blocks, but check side blocks too just in case.
                    this.loadedBlock = blocks.mainBlocks.concat(blocks.sideBlocks).find((block) => block.name == 'myoverview');
                    this.hasSideBlocks = blocks.sideBlocks.length > 0;
                    yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].nextTicks(2);
                    this.myOverviewBlock = (_b = (_a = this.block) === null || _a === void 0 ? void 0 : _a.dynamicComponent) === null || _b === void 0 ? void 0 : _b.instance;
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(error);
                    // Cannot get the blocks, just show the block if needed.
                    this.loadFallbackBlock();
                }
            }
            else if (!available) {
                // WS not available, or my courses page not available. show fallback block.
                this.loadFallbackBlock();
            }
            else {
                // Disabled.
                this.loadedBlock = undefined;
            }
            this.loaded = true;
            this.onReadyPromise.resolve();
        });
    }
    /**
     * Load the site name.
     */
    loadSiteName() {
        this.siteName = _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getRequiredCurrentSite().getSiteName() || '';
    }
    /**
     * Load fallback blocks.
     */
    loadFallbackBlock() {
        this.loadedBlock = {
            name: 'myoverview',
            visible: true,
        };
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refresh(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesDashboard"].invalidateDashboardBlocks(_features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesDashboardProvider"].MY_PAGE_COURSES));
            // Invalidate the blocks.
            if (this.myOverviewBlock) {
                promises.push(_services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(this.myOverviewBlock.invalidateContent()));
            }
            Promise.all(promises).finally(() => {
                this.loadContent().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a;
        (_a = this.updateSiteObserver) === null || _a === void 0 ? void 0 : _a.off();
        this.loadsManagerSubscription.unsubscribe();
    }
    /**
     * @inheritdoc
     */
    ready() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.onReadyPromise;
        });
    }
};
CoreCoursesMyCoursesPage.ctorParameters = () => [
    { type: _classes_page_loads_manager__WEBPACK_IMPORTED_MODULE_2__["PageLoadsManager"] }
];
CoreCoursesMyCoursesPage.propDecorators = {
    block: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_features_block_components_block_block__WEBPACK_IMPORTED_MODULE_4__["CoreBlockComponent"],] }]
};
CoreCoursesMyCoursesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-courses-my',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/my/my.html")).default,
        providers: [{
                provide: _classes_page_loads_manager__WEBPACK_IMPORTED_MODULE_2__["PageLoadsManager"],
                useClass: _classes_page_loads_manager__WEBPACK_IMPORTED_MODULE_2__["PageLoadsManager"],
            }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my.scss */ "./src/core/features/courses/pages/my/my.scss")).default]
    })
], CoreCoursesMyCoursesPage);



/***/ })

}]);
//# sourceMappingURL=pages-my-my-module.js.map