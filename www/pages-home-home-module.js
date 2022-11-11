(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/home/home.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/home/home.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"siteName\" contextLevel=\"system\" [contextInstanceId]=\"0\" class=\"core-header-sitename\">\r\n                </core-format-text>\r\n                <img src=\"assets/img/top_logo.png\" class=\"core-header-logo\" [alt]=\"siteName\">\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <core-user-menu-button></core-user-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<core-loading [hideUntil]=\"loaded\">\r\n    <core-empty-box *ngIf=\"tabs.length == 0\" icon=\"fas-home\" [message]=\"'core.courses.nocourses' | translate\"></core-empty-box>\r\n</core-loading>\r\n<core-tabs-outlet *ngIf=\"tabs.length > 0\" [hideUntil]=\"loaded\" [tabs]=\"tabs\" (ionChange)=\"tabSelected()\">\r\n</core-tabs-outlet>\r\n");

/***/ }),

/***/ "./src/core/features/mainmenu/pages/home/home.module.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/mainmenu/pages/home/home.module.ts ***!
  \**************************************************************/
/*! exports provided: CoreMainMenuHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuHomePageModule", function() { return CoreMainMenuHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ "./src/core/features/mainmenu/pages/home/home.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/core/features/mainmenu/pages/home/home-routing.module.ts");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
/* harmony import */ var _features_mainmenu_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/mainmenu/services/handlers/mainmenu */ "./src/core/features/mainmenu/services/handlers/mainmenu.ts");
/* harmony import */ var _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/mainmenu/components/components.module */ "./src/core/features/mainmenu/components/components.module.ts");
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










function buildRoutes(injector) {
    const routes = Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["resolveModuleRoutes"])(injector, _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["MAIN_MENU_HOME_ROUTES"]);
    return [
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_7__["buildTabMainRoutes"])(injector, {
            path: '',
            data: {
                mainMenuTabRoot: _features_mainmenu_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_8__["CoreMainMenuHomeHandlerService"].PAGE_NAME,
            },
            component: _home__WEBPACK_IMPORTED_MODULE_5__["CoreMainMenuHomePage"],
            children: routes.children,
        }),
        ...routes.siblings,
    ];
}
let CoreMainMenuHomePageModule = class CoreMainMenuHomePageModule {
};
CoreMainMenuHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_4__["CoreSharedModule"],
            _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_9__["CoreMainMenuComponentsModule"],
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"], multi: true, useFactory: buildRoutes, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]] },
        ],
        declarations: [
            _home__WEBPACK_IMPORTED_MODULE_5__["CoreMainMenuHomePage"],
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ],
    })
], CoreMainMenuHomePageModule);



/***/ }),

/***/ "./src/core/features/mainmenu/pages/home/home.ts":
/*!*******************************************************!*\
  !*** ./src/core/features/mainmenu/pages/home/home.ts ***!
  \*******************************************************/
/*! exports provided: CoreMainMenuHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuHomePage", function() { return CoreMainMenuHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _components_tabs_outlet_tabs_outlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/tabs-outlet/tabs-outlet */ "./src/core/components/tabs-outlet/tabs-outlet.ts");
/* harmony import */ var _services_home_delegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/home-delegate */ "./src/core/features/mainmenu/services/home-delegate.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_mainmenu_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/mainmenu/services/handlers/mainmenu */ "./src/core/features/mainmenu/services/handlers/mainmenu.ts");
/* harmony import */ var _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/mainmenu/classes/deep-link-manager */ "./src/core/features/mainmenu/classes/deep-link-manager.ts");
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
 * Page that displays the Home.
 */
let CoreMainMenuHomePage = class CoreMainMenuHomePage {
    constructor() {
        this.siteName = '';
        this.tabs = [];
        this.loaded = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.deepLinkManager = new _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_8__["CoreMainMenuDeepLinkManager"]();
        this.loadSiteName();
        this.subscription = _services_home_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreMainMenuHomeDelegate"].getHandlersObservable().subscribe((handlers) => {
            handlers && this.initHandlers(handlers);
        });
        // Refresh the enabled flags if site is updated.
        this.updateSiteObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].SITE_UPDATED, () => {
            this.loadSiteName();
        }, _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId());
    }
    /**
     * Init handlers on change (size or handlers).
     */
    initHandlers(handlers) {
        // Re-build the list of tabs.
        const loaded = _services_home_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreMainMenuHomeDelegate"].areHandlersLoaded();
        const handlersMap = _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].arrayToObject(handlers, 'title');
        const newTabs = handlers.map((handler) => {
            const tab = this.tabs.find(tab => tab.title == handler.title);
            // If a handler is already in the list, use existing object to prevent re-creating the tab.
            if (tab) {
                return tab;
            }
            return {
                page: `/main/${_features_mainmenu_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_7__["CoreMainMenuHomeHandlerService"].PAGE_NAME}/${handler.page}`,
                pageParams: handler.pageParams,
                title: handler.title,
                class: handler.class,
                icon: handler.icon,
                badge: handler.badge,
            };
        });
        // Sort them by priority so new handlers are in the right position.
        newTabs.sort((a, b) => (handlersMap[b.title].priority || 0) - (handlersMap[a.title].priority || 0));
        this.tabs = newTabs;
        // Try to prevent empty box displayed for an instant when it shouldn't.
        setTimeout(() => {
            this.loaded = loaded;
        }, 50);
    }
    /**
     * Load the site name.
     */
    loadSiteName() {
        this.siteName = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getRequiredCurrentSite().getSiteName() || '';
    }
    /**
     * Tab was selected.
     */
    tabSelected() {
        var _a;
        (_a = this.deepLinkManager) === null || _a === void 0 ? void 0 : _a.treatLink();
    }
    /**
     * User entered the page.
     */
    ionViewDidEnter() {
        var _a;
        (_a = this.tabsComponent) === null || _a === void 0 ? void 0 : _a.ionViewDidEnter();
    }
    /**
     * User left the page.
     */
    ionViewDidLeave() {
        var _a;
        (_a = this.tabsComponent) === null || _a === void 0 ? void 0 : _a.ionViewDidLeave();
    }
};
CoreMainMenuHomePage.propDecorators = {
    tabsComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_tabs_outlet_tabs_outlet__WEBPACK_IMPORTED_MODULE_4__["CoreTabsOutletComponent"],] }]
};
CoreMainMenuHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-mainmenu-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/mainmenu/pages/home/home.html")).default,
    })
], CoreMainMenuHomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map