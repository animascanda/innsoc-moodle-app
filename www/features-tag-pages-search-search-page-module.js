(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-tag-pages-search-search-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/search/search.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/search/search.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'core.tag.searchtags' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <core-user-menu-button></core-user-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <ion-grid class=\"safe-area-padding\">\r\n        <ion-row class=\"ion-no-padding ion-wrap\">\r\n            <ion-col class=\"ion-no-padding\" size=\"12\" size-sm=\"6\" [attr.col-sm-6]=\"collections && collections.length > 1 ? '' : null\">\r\n                <core-search-box (onSubmit)=\"searchTags($event)\" (onClear)=\"searchTags('')\" [initialSearch]=\"query\" [disabled]=\"searching\"\r\n                    autocorrect=\"off\" [spellcheck]=\"false\" [autoFocus]=\"false\" [lengthCheck]=\"0\" searchArea=\"CoreTag\"></core-search-box>\r\n            </ion-col>\r\n            <ion-col class=\"ion-no-padding\" size=\"12\" size-sm=\"6\" *ngIf=\"collections && collections.length > 1\">\r\n                <core-combobox [selection]=\"collectionId\" (onChange)=\"searchTags($event)\" [disabled]=\"searching\">\r\n                    <ion-select-option class=\"ion-text-wrap\" [value]=\"0\">\r\n                        {{ 'core.tag.inalltagcoll' | translate }}\r\n                    </ion-select-option>\r\n                    <ion-select-option class=\"ion-text-wrap\" *ngFor=\"let collection of collections\" [value]=\"collection.id\">\r\n                        {{ collection.name }}</ion-select-option>\r\n                </core-combobox>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <core-loading [hideUntil]=\"loaded && !searching\">\r\n        <core-empty-box *ngIf=\"!cloud || !cloud!.tags || !cloud!.tags.length\" icon=\"fas-tags\"\r\n            [message]=\"'core.tag.notagsfound' | translate: {$a: query}\"></core-empty-box>\r\n\r\n        <ng-container *ngIf=\"cloud && cloud!.tags && cloud!.tags.length > 0\">\r\n            <div class=\"ion-text-center core-tag-cloud\">\r\n                <ion-badge *ngFor=\"let tag of cloud!.tags\" (click)=\"openTag(tag)\" class=\"ion-text-wrap\">\r\n                    <span [class]=\"'size' + tag.size\">{{ tag.name }}</span>\r\n                </ion-badge>\r\n            </div>\r\n            <p *ngIf=\"cloud!.tags.length < cloud!.totalcount\" class=\"ion-text-center\">\r\n                {{ 'core.tag.showingfirsttags' | translate: {$a: cloud!.tags.length} }}\r\n            </p>\r\n        </ng-container>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/tag/pages/search/search.page.module.ts":
/*!******************************************************************!*\
  !*** ./src/core/features/tag/pages/search/search.page.module.ts ***!
  \******************************************************************/
/*! exports provided: CoreTagSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagSearchPageModule", function() { return CoreTagSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/search/components/components.module */ "./src/core/features/search/components/components.module.ts");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.page */ "./src/core/features/tag/pages/search/search.page.ts");
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
        component: _search_page__WEBPACK_IMPORTED_MODULE_5__["CoreTagSearchPage"],
    },
];
let CoreTagSearchPageModule = class CoreTagSearchPageModule {
};
CoreTagSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _search_page__WEBPACK_IMPORTED_MODULE_5__["CoreTagSearchPage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreSearchComponentsModule"],
            _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_6__["CoreMainMenuComponentsModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreTagSearchPageModule);



/***/ }),

/***/ "./src/core/features/tag/pages/search/search.page.ts":
/*!***********************************************************!*\
  !*** ./src/core/features/tag/pages/search/search.page.ts ***!
  \***********************************************************/
/*! exports provided: CoreTagSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagSearchPage", function() { return CoreTagSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/tag/services/tag */ "./src/core/features/tag/services/tag.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/contentlinks/services/contentlinks-helper */ "./src/core/features/contentlinks/services/contentlinks-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/mainmenu/classes/deep-link-manager */ "./src/core/features/mainmenu/classes/deep-link-manager.ts");
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
 * Page that displays most used tags and allows searching.
 */
let CoreTagSearchPage = class CoreTagSearchPage {
    constructor() {
        this.collections = [];
        this.loaded = false;
        this.searching = false;
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        this.collectionId = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteNumberParam('collectionId') || 0;
        this.query = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteParam('query') || '';
        const deepLinkManager = new _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_10__["CoreMainMenuDeepLinkManager"]();
        deepLinkManager.treatLink();
        this.fetchData().finally(() => {
            this.loaded = true;
        });
    }
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield Promise.all([
                    this.fetchCollections(),
                    this.fetchTags(),
                ]);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading tags.');
            }
        });
    }
    /**
     * Fetch tag collections.
     *
     * @return Resolved when done.
     */
    fetchCollections() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const collections = yield _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_6__["CoreTag"].getTagCollections();
            collections.forEach((collection) => {
                if (!collection.name && collection.isdefault) {
                    collection.name = _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('core.tag.defautltagcoll');
                }
            });
            this.collections = collections;
        });
    }
    /**
     * Fetch tags.
     *
     * @return Resolved when done.
     */
    fetchTags() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cloud = yield _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_6__["CoreTag"].getTagCloud(this.collectionId, undefined, undefined, this.query);
        });
    }
    /**
     * Go to tag index page.
     */
    openTag(tag) {
        const url = _services_utils_text__WEBPACK_IMPORTED_MODULE_5__["CoreTextUtils"].decodeURI(tag.viewurl);
        _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_8__["CoreContentLinksHelper"].handleLink(url);
    }
    /**
     * Refresh data.
     *
     * @param refresher Refresher event.
     */
    refreshData(refresher) {
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].allPromises([
            _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_6__["CoreTag"].invalidateTagCollections(),
            _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_6__["CoreTag"].invalidateTagCloud(this.collectionId, undefined, undefined, this.query),
        ]).finally(() => this.fetchData().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        }));
    }
    /**
     * Search tags.
     *
     * @param query Search query.
     * @return Resolved when done.
     */
    searchTags(query) {
        this.searching = true;
        this.query = query;
        _services_app__WEBPACK_IMPORTED_MODULE_2__["CoreApp"].closeKeyboard();
        return this.fetchTags().catch((error) => {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading tags.');
        }).finally(() => {
            this.searching = false;
        });
    }
};
CoreTagSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-tag-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/search/search.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.scss */ "./src/core/features/tag/pages/search/search.scss")).default]
    })
], CoreTagSearchPage);



/***/ }),

/***/ "./src/core/features/tag/pages/search/search.scss":
/*!********************************************************!*\
  !*** ./src/core/features/tag/pages/search/search.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host core-search-box ion-card {\n  width: 100% !important;\n  margin: 0 !important;\n}\n:host .core-tag-cloud ion-badge {\n  margin: 8px;\n  cursor: pointer;\n}\n:host .core-tag-cloud ion-badge .size20 {\n  font-size: 3.4rem;\n}\n:host .core-tag-cloud ion-badge .size19 {\n  font-size: 3.3rem;\n}\n:host .core-tag-cloud ion-badge .size18 {\n  font-size: 3.2rem;\n}\n:host .core-tag-cloud ion-badge .size17 {\n  font-size: 3.1rem;\n}\n:host .core-tag-cloud ion-badge .size16 {\n  font-size: 3rem;\n}\n:host .core-tag-cloud ion-badge .size15 {\n  font-size: 2.9rem;\n}\n:host .core-tag-cloud ion-badge .size14 {\n  font-size: 2.8rem;\n}\n:host .core-tag-cloud ion-badge .size13 {\n  font-size: 2.7rem;\n}\n:host .core-tag-cloud ion-badge .size12 {\n  font-size: 2.6rem;\n}\n:host .core-tag-cloud ion-badge .size11 {\n  font-size: 2.5rem;\n}\n:host .core-tag-cloud ion-badge .size10 {\n  font-size: 2.4rem;\n}\n:host .core-tag-cloud ion-badge .size9 {\n  font-size: 2.3rem;\n}\n:host .core-tag-cloud ion-badge .size8 {\n  font-size: 2.2rem;\n}\n:host .core-tag-cloud ion-badge .size7 {\n  font-size: 2.1rem;\n}\n:host .core-tag-cloud ion-badge .size6 {\n  font-size: 2rem;\n}\n:host .core-tag-cloud ion-badge .size5 {\n  font-size: 1.9rem;\n}\n:host .core-tag-cloud ion-badge .size4 {\n  font-size: 1.8rem;\n}\n:host .core-tag-cloud ion-badge .size3 {\n  font-size: 1.7rem;\n}\n:host .core-tag-cloud ion-badge .size2 {\n  font-size: 1.6rem;\n}\n:host .core-tag-cloud ion-badge .size1 {\n  font-size: 1.5rem;\n}\n:host .core-tag-cloud ion-badge .size0 {\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL3RhZy9wYWdlcy9zZWFyY2gvc2VhcmNoLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FBQVI7QUFHSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBRFI7QUFHUTtFQUNJLGlCQUFBO0FBRFo7QUFJUTtFQUNJLGlCQUFBO0FBRlo7QUFLUTtFQUNJLGlCQUFBO0FBSFo7QUFNUTtFQUNJLGlCQUFBO0FBSlo7QUFPUTtFQUNJLGVBQUE7QUFMWjtBQVFRO0VBQ0ksaUJBQUE7QUFOWjtBQVNRO0VBQ0ksaUJBQUE7QUFQWjtBQVVRO0VBQ0ksaUJBQUE7QUFSWjtBQVdRO0VBQ0ksaUJBQUE7QUFUWjtBQVlRO0VBQ0ksaUJBQUE7QUFWWjtBQWFRO0VBQ0ksaUJBQUE7QUFYWjtBQWNRO0VBQ0ksaUJBQUE7QUFaWjtBQWVRO0VBQ0ksaUJBQUE7QUFiWjtBQWdCUTtFQUNJLGlCQUFBO0FBZFo7QUFpQlE7RUFDSSxlQUFBO0FBZlo7QUFrQlE7RUFDSSxpQkFBQTtBQWhCWjtBQW1CUTtFQUNJLGlCQUFBO0FBakJaO0FBb0JRO0VBQ0ksaUJBQUE7QUFsQlo7QUFxQlE7RUFDSSxpQkFBQTtBQW5CWjtBQXNCUTtFQUNJLGlCQUFBO0FBcEJaO0FBdUJRO0VBQ0ksaUJBQUE7QUFyQloiLCJmaWxlIjoic3JjL2NvcmUvZmVhdHVyZXMvdGFnL3BhZ2VzL3NlYXJjaC9zZWFyY2guc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGNvcmUtc2VhcmNoLWJveCBpb24tY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY29yZS10YWctY2xvdWQgaW9uLWJhZGdlIHtcclxuICAgICAgICBtYXJnaW46IDhweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIC5zaXplMjAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMuNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXplMTkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMuM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXplMTgge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMuMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXplMTcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMuMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXplMTYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTE1IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjlyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTE0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTEzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjdyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTEyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjZyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTExIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTEwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXplOCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNpemU3IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXplNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNpemUzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXplMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNpemUwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=features-tag-pages-search-search-page-module.js.map