(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-more-more-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/more/more.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/more/more.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.more' | translate }}</h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <core-user-menu-button></core-user-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-list>\r\n        <ion-item class=\"ion-text-center\" *ngIf=\"(!handlers || !handlers.length) && !handlersLoaded\">\r\n            <ion-label>\r\n                <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item button *ngFor=\"let handler of handlers\" [ngClass]=\"['core-moremenu-handler', handler.class || '']\"\r\n            (click)=\"openHandler(handler)\" [attr.aria-label]=\"handler.title | translate\" detail=\"true\">\r\n            <ion-icon [name]=\"handler.icon\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n            <ion-label>\r\n                <p class=\"item-heading\">{{ handler.title | translate}}</p>\r\n            </ion-label>\r\n            <ion-badge slot=\"end\" *ngIf=\"handler.showBadge\" [hidden]=\"handler.loading || !handler.badge\" aria-hidden=\"true\">\r\n                {{handler.badge}}\r\n            </ion-badge>\r\n            <span *ngIf=\"handler.showBadge && handler.badge && handler.badgeA11yText\" class=\"sr-only\">\r\n                {{ handler.badgeA11yText | translate: {$a : handler.badge } }}\r\n            </span>\r\n            <ion-spinner slot=\"end\" *ngIf=\"handler.showBadge && handler.loading\" [attr.aria-label]=\"'core.loading' | translate\">\r\n            </ion-spinner>\r\n        </ion-item>\r\n        <ng-container *ngFor=\"let item of customItems\">\r\n            <ion-item button *ngIf=\"item.type != 'embedded'\" [href]=\"item.url\" [attr.aria-label]=\"item.label\" core-link\r\n                [capture]=\"item.type == 'app'\" [inApp]=\"item.type == 'inappbrowser'\" class=\"core-moremenu-customitem\" detail=\"true\"\r\n                [detailIcon]=\"item.type == 'browser' ? 'open-outline' : 'chevron-forward'\">\r\n                <ion-icon [name]=\"item.icon\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{item.label}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item button *ngIf=\"item.type == 'embedded'\" (click)=\"openItem(item)\" [attr.aria-label]=\"item.label\"\r\n                class=\"core-moremenu-customitem\" detail=\"true\">\r\n                <ion-icon [name]=\"item.icon\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{item.label}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ng-container>\r\n        <ion-item button *ngIf=\"showScanQR\" (click)=\"scanQR()\" detail=\"true\">\r\n            <ion-icon name=\"fas-qrcode\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n            <ion-label>\r\n                <p class=\"item-heading\">{{ 'core.scanqr' | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-item button (click)=\"openSettings()\" [attr.aria-label]=\"'core.settings.appsettings' | translate\" detail=\"true\">\r\n        <ion-icon name=\"fas-cogs\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n        <ion-label>\r\n            <p class=\"item-heading\">{{ 'core.settings.appsettings' | translate }}</p>\r\n        </ion-label>\r\n    </ion-item>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/core/features/mainmenu/pages/more/more.module.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/mainmenu/pages/more/more.module.ts ***!
  \**************************************************************/
/*! exports provided: CoreMainMenuMorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuMorePageModule", function() { return CoreMainMenuMorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more */ "./src/core/features/mainmenu/pages/more/more.ts");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
/* harmony import */ var _features_mainmenu_services_mainmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/mainmenu/services/mainmenu */ "./src/core/features/mainmenu/services/mainmenu.ts");
/* harmony import */ var _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/mainmenu/components/components.module */ "./src/core/features/mainmenu/components/components.module.ts");
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








let CoreMainMenuMorePageModule = class CoreMainMenuMorePageModule {
};
CoreMainMenuMorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_7__["CoreMainMenuComponentsModule"],
        ],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]],
                useFactory: (injector) => Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__["buildTabMainRoutes"])(injector, {
                    component: _more__WEBPACK_IMPORTED_MODULE_4__["CoreMainMenuMorePage"],
                    data: {
                        mainMenuTabRoot: _features_mainmenu_services_mainmenu__WEBPACK_IMPORTED_MODULE_6__["CoreMainMenuProvider"].MORE_PAGE_NAME,
                    },
                }),
            },
        ],
        declarations: [
            _more__WEBPACK_IMPORTED_MODULE_4__["CoreMainMenuMorePage"],
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ],
    })
], CoreMainMenuMorePageModule);



/***/ }),

/***/ "./src/core/features/mainmenu/pages/more/more.scss":
/*!*********************************************************!*\
  !*** ./src/core/features/mainmenu/pages/more/more.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --border-color: var(--core-more-item-border, var(--ion-border-color));\n}\nion-item > ion-icon[slot] {\n  color: var(--core-more-icon) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL21haW5tZW51L3BhZ2VzL21vcmUvbW9yZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MscUVBQUE7QUFDRDtBQUNJO0VBQ0ksdUNBQUE7QUFDUiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9tYWlubWVudS9wYWdlcy9tb3JlL21vcmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuXHQtLWJvcmRlci1jb2xvcjogdmFyKC0tY29yZS1tb3JlLWl0ZW0tYm9yZGVyLCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKSk7XHJcblxyXG4gICAgPiBpb24taWNvbltzbG90XSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvcmUtbW9yZS1pY29uKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/core/features/mainmenu/pages/more/more.ts":
/*!*******************************************************!*\
  !*** ./src/core/features/mainmenu/pages/more/more.ts ***!
  \*******************************************************/
/*! exports provided: CoreMainMenuMorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuMorePage", function() { return CoreMainMenuMorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_mainmenu_delegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/mainmenu-delegate */ "./src/core/features/mainmenu/services/mainmenu-delegate.ts");
/* harmony import */ var _services_mainmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/mainmenu */ "./src/core/features/mainmenu/services/mainmenu.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_urlschemes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/urlschemes */ "./src/core/services/urlschemes.ts");
/* harmony import */ var _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/contentlinks/services/contentlinks-helper */ "./src/core/features/contentlinks/services/contentlinks-helper.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @features/mainmenu/classes/deep-link-manager */ "./src/core/features/mainmenu/classes/deep-link-manager.ts");
/* harmony import */ var _singletons_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/dom */ "./src/core/singletons/dom.ts");
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
 * Page that displays the more page of the app.
 */
let CoreMainMenuMorePage = class CoreMainMenuMorePage {
    constructor() {
        var _a;
        this.handlersLoaded = false;
        this.langObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].LANGUAGE_CHANGED, () => this.loadCustomMenuItems());
        this.updateSiteObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].SITE_UPDATED, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.customItems = yield _services_mainmenu__WEBPACK_IMPORTED_MODULE_5__["CoreMainMenu"].getCustomMenuItems();
        }), _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId());
        this.loadCustomMenuItems();
        this.showScanQR = _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__["CoreUtils"].canScanQR() &&
            !((_a = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSite()) === null || _a === void 0 ? void 0 : _a.isFeatureDisabled('CoreMainMenuDelegate_QrReader'));
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        // Load the handlers.
        this.subscription = _services_mainmenu_delegate__WEBPACK_IMPORTED_MODULE_4__["CoreMainMenuDelegate"].getHandlersObservable().subscribe((handlers) => {
            this.allHandlers = handlers;
            this.initHandlers();
        });
        this.resizeListener = _singletons_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDom"].onWindowResize(() => {
            this.initHandlers();
        });
        const deepLinkManager = new _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_12__["CoreMainMenuDeepLinkManager"]();
        deepLinkManager.treatLink();
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a, _b, _c, _d;
        (_a = this.langObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.updateSiteObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.subscription) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        (_d = this.resizeListener) === null || _d === void 0 ? void 0 : _d.off();
    }
    /**
     * Init handlers on change (size or handlers).
     */
    initHandlers() {
        if (!this.allHandlers) {
            return;
        }
        // Calculate the main handlers not to display them in this view.
        const mainHandlers = this.allHandlers
            .filter((handler) => !handler.onlyInMore)
            .slice(0, _services_mainmenu__WEBPACK_IMPORTED_MODULE_5__["CoreMainMenu"].getNumItems());
        // Get only the handlers that don't appear in the main view.
        this.handlers = this.allHandlers.filter((handler) => mainHandlers.indexOf(handler) == -1);
        this.handlersLoaded = _services_mainmenu_delegate__WEBPACK_IMPORTED_MODULE_4__["CoreMainMenuDelegate"].areHandlersLoaded();
    }
    /**
     * Load custom menu items.
     */
    loadCustomMenuItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.customItems = yield _services_mainmenu__WEBPACK_IMPORTED_MODULE_5__["CoreMainMenu"].getCustomMenuItems();
        });
    }
    /**
     * Open a handler.
     *
     * @param handler Handler to open.
     */
    openHandler(handler) {
        const params = handler.pageParams;
        _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigateToSitePath(handler.page, { params });
    }
    /**
     * Open an embedded custom item.
     *
     * @param item Item to open.
     */
    openItem(item) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigateToSitePath('viewer/iframe', { params: { title: item.label, url: item.url } });
    }
    /**
     * Open settings.
     */
    openSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigateToSitePath('settings');
    }
    /**
     * Scan and treat a QR code.
     */
    scanQR() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Scan for a QR code.
            const text = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__["CoreUtils"].scanQR();
            if (!text) {
                return;
            }
            if (_services_urlschemes__WEBPACK_IMPORTED_MODULE_8__["CoreCustomURLSchemes"].isCustomURL(text)) {
                // Is a custom URL scheme, handle it.
                _services_urlschemes__WEBPACK_IMPORTED_MODULE_8__["CoreCustomURLSchemes"].handleCustomURL(text).catch((error) => {
                    _services_urlschemes__WEBPACK_IMPORTED_MODULE_8__["CoreCustomURLSchemes"].treatHandleCustomURLError(error);
                });
            }
            else if (/^[^:]{2,}:\/\/[^ ]+$/i.test(text)) { // Check if it's a URL.
                // Check if the app can handle the URL.
                const treated = yield _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_9__["CoreContentLinksHelper"].handleLink(text, undefined, true, true);
                if (!treated) {
                    // Can't handle it, open it in browser.
                    (_a = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSite()) === null || _a === void 0 ? void 0 : _a.openInBrowserWithAutoLogin(text);
                }
            }
            else {
                // It's not a URL, open it in a modal so the user can see it and copy it.
                _services_utils_text__WEBPACK_IMPORTED_MODULE_10__["CoreTextUtils"].viewText(_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.qrscanner'), text, {
                    displayCopyButton: true,
                });
            }
        });
    }
};
CoreMainMenuMorePage.ctorParameters = () => [];
CoreMainMenuMorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-mainmenu-more',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./more.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/more/more.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./more.scss */ "./src/core/features/mainmenu/pages/more/more.scss")).default]
    })
], CoreMainMenuMorePage);



/***/ })

}]);
//# sourceMappingURL=pages-more-more-module.js.map