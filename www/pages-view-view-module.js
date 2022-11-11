(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/imscp/pages/view/view.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/imscp/pages/view/view.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button *ngIf=\"loaded\" (click)=\"showToc()\" aria-haspopup=\"true\" [attr.aria-label]=\"'addon.mod_imscp.toc' | translate\">\r\n                <ion-icon name=\"fas-bookmark\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <!-- Content. -->\r\n    <core-loading [hideUntil]=\"loaded\">\r\n\r\n        <ion-card class=\"core-warning-card\" *ngIf=\"warning\">\r\n            <ion-item>\r\n                <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label><span [innerHTML]=\"warning\"></span></ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <core-iframe *ngIf=\"loaded\" [src]=\"src\" [showFullscreenOnToolbar]=\"true\" [autoFullscreenOnRotate]=\"true\"></core-iframe>\r\n    </core-loading>\r\n\r\n    <core-navigation-bar collapsible-footer appearOnBottom *ngIf=\"loaded && navigationItems.length > 1\" [items]=\"navigationItems\"\r\n        (action)=\"loadItem($event)\">\r\n    </core-navigation-bar>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/imscp/pages/view/view.module.ts":
/*!********************************************************!*\
  !*** ./src/addons/mod/imscp/pages/view/view.module.ts ***!
  \********************************************************/
/*! exports provided: AddonModImscpViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModImscpViewPageModule", function() { return AddonModImscpViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view */ "./src/addons/mod/imscp/pages/view/view.ts");
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
        component: _view__WEBPACK_IMPORTED_MODULE_4__["AddonModImscpViewPage"],
    },
];
let AddonModImscpViewPageModule = class AddonModImscpViewPageModule {
};
AddonModImscpViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _view__WEBPACK_IMPORTED_MODULE_4__["AddonModImscpViewPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonModImscpViewPageModule);



/***/ }),

/***/ "./src/addons/mod/imscp/pages/view/view.ts":
/*!*************************************************!*\
  !*** ./src/addons/mod/imscp/pages/view/view.ts ***!
  \*************************************************/
/*! exports provided: AddonModImscpViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModImscpViewPage", function() { return AddonModImscpViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/course/services/module-prefetch-delegate */ "./src/core/features/course/services/module-prefetch-delegate.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _components_toc_toc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/toc/toc */ "./src/addons/mod/imscp/components/toc/toc.ts");
/* harmony import */ var _services_imscp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/imscp */ "./src/addons/mod/imscp/services/imscp.ts");
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
 * Page that displays a IMSCP content.
 */
let AddonModImscpViewPage = class AddonModImscpViewPage {
    constructor() {
        this.title = '';
        this.src = '';
        this.warning = '';
        this.navigationItems = [];
        this.loaded = false;
        this.items = [];
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        try {
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.initialItemHref = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('initialHref');
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].back();
            return;
        }
        this.fetchContent();
    }
    /**
     * Download IMSCP contents and load the current item.
     *
     * @param refresh Whether we're refreshing data.
     * @return Promise resolved when done.
     */
    fetchContent(refresh = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const { module, imscp } = yield this.loadImscpData();
                this.title = imscp.name;
                const downloadResult = yield this.downloadResourceIfNeeded(module, refresh);
                // Get contents. No need to refresh, it has been done in downloadResourceIfNeeded.
                const contents = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_4__["CoreCourse"].getModuleContents(module, this.courseId);
                this.items = _services_imscp__WEBPACK_IMPORTED_MODULE_13__["AddonModImscp"].createItemList(contents);
                if (this.items.length) {
                    if (this.initialItemHref) {
                        // Check it's valid.
                        if (this.items.some(item => item.href === this.initialItemHref)) {
                            this.currentHref = this.initialItemHref;
                        }
                    }
                    if (this.currentHref === undefined) {
                        // Get last viewed.
                        const lastViewedHref = yield _services_imscp__WEBPACK_IMPORTED_MODULE_13__["AddonModImscp"].getLastItemViewed(imscp.id);
                        if (lastViewedHref !== undefined) {
                            this.currentHref = lastViewedHref;
                        }
                        else {
                            // Use first one.
                            this.currentHref = this.items[0].href;
                        }
                    }
                }
                if (this.currentHref === undefined) {
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__["CoreError"]('Empty TOC');
                }
                try {
                    yield this.loadItemHref(this.currentHref);
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_imscp.deploymenterror', true);
                    return;
                }
                if (downloadResult === null || downloadResult === void 0 ? void 0 : downloadResult.failed) {
                    const error = _services_utils_text__WEBPACK_IMPORTED_MODULE_9__["CoreTextUtils"].getErrorMessageFromError(downloadResult.error) || downloadResult.error;
                    this.warning = _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.errordownloadingsomefiles') + (error ? ' ' + error : '');
                }
                else {
                    this.warning = '';
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Load IMSCP data from WS.
     *
     * @return Promise resolved when done.
     */
    loadImscpData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.module = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_4__["CoreCourse"].getModule(this.cmId, this.courseId);
            this.imscp = yield _services_imscp__WEBPACK_IMPORTED_MODULE_13__["AddonModImscp"].getImscp(this.courseId, this.cmId);
            return {
                module: this.module,
                imscp: this.imscp,
            };
        });
    }
    /**
     * Download a resource if needed.
     * If the download call fails the promise won't be rejected, but the error will be included in the returned object.
     * If module.contents cannot be loaded then the Promise will be rejected.
     *
     * @param refresh Whether we're refreshing data.
     * @return Promise resolved when done.
     */
    downloadResourceIfNeeded(module, refresh = false) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = {
                failed: false,
            };
            let contentsAlreadyLoaded = false;
            // Get module status to determine if it needs to be downloaded.
            const status = yield _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].getModuleStatus(module, this.courseId, undefined, refresh);
            if (status !== _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].DOWNLOADED) {
                // Download content. This function also loads module contents if needed.
                try {
                    yield _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].downloadModule(module, this.courseId);
                    // If we reach here it means the download process already loaded the contents, no need to do it again.
                    contentsAlreadyLoaded = true;
                }
                catch (error) {
                    // Mark download as failed but go on since the main files could have been downloaded.
                    result.failed = true;
                    result.error = error;
                }
            }
            if (!((_a = module.contents) === null || _a === void 0 ? void 0 : _a.length) || (refresh && !contentsAlreadyLoaded)) {
                // Try to load the contents.
                const ignoreCache = refresh && _services_network__WEBPACK_IMPORTED_MODULE_6__["CoreNetwork"].isOnline();
                try {
                    yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_4__["CoreCourse"].loadModuleContents(module, undefined, undefined, false, ignoreCache);
                }
                catch (error) {
                    // Error loading contents. If we ignored cache, try to get the cached value.
                    if (ignoreCache && !module.contents) {
                        yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_4__["CoreCourse"].loadModuleContents(module);
                    }
                    else if (!module.contents) {
                        // Not able to load contents, throw the error.
                        throw error;
                    }
                }
            }
            return result;
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @return Promise resolved when done.
     */
    doRefresh(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].ignoreErrors(Promise.all([
                _services_imscp__WEBPACK_IMPORTED_MODULE_13__["AddonModImscp"].invalidateContent(this.cmId, this.courseId),
                _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].invalidateCourseUpdates(this.courseId),
            ]));
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].ignoreErrors(this.fetchContent(true));
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Loads an item.
     *
     * @param itemHref Item Href.
     * @return Promise resolved when done.
     */
    loadItemHref(itemHref) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.module) {
                return;
            }
            const src = yield _services_imscp__WEBPACK_IMPORTED_MODULE_13__["AddonModImscp"].getIframeSrc(this.module, itemHref);
            this.currentHref = itemHref;
            this.navigationItems = this.items.map((item) => ({
                item: item,
                current: item.href == this.currentHref,
                enabled: !!item.href,
            }));
            if (this.src && src == this.src) {
                // Re-loading same page. Set it to empty and then re-set the src in the next digest so it detects it has changed.
                this.src = '';
                setTimeout(() => {
                    this.src = src;
                });
            }
            else {
                this.src = src;
            }
            if (this.imscp) {
                _services_imscp__WEBPACK_IMPORTED_MODULE_13__["AddonModImscp"].storeLastItemViewed(this.imscp.id, itemHref, this.courseId);
            }
        });
    }
    /**
     * Loads an item.
     *
     * @param item Item.
     */
    loadItem(item) {
        this.loadItemHref(item.href);
    }
    /**
     * Show the TOC.
     */
    showToc() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Create the toc modal.
            const itemHref = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openSideModal({
                component: _components_toc_toc__WEBPACK_IMPORTED_MODULE_12__["AddonModImscpTocComponent"],
                componentProps: {
                    items: this.items,
                    selected: this.currentHref,
                },
            });
            if (itemHref) {
                this.loadItemHref(itemHref);
            }
        });
    }
};
AddonModImscpViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-mod-imscp-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/imscp/pages/view/view.html")).default,
    })
], AddonModImscpViewPage);



/***/ })

}]);
//# sourceMappingURL=pages-view-view-module.js.map