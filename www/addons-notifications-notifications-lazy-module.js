(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-notifications-notifications-lazy-module"],{

/***/ "./src/addons/notifications/notifications-lazy.module.ts":
/*!***************************************************************!*\
  !*** ./src/addons/notifications/notifications-lazy.module.ts ***!
  \***************************************************************/
/*! exports provided: AddonNotificationsLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotificationsLazyModule", function() { return AddonNotificationsLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/handlers/mainmenu */ "./src/addons/notifications/services/handlers/mainmenu.ts");
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
    return [
        {
            path: 'list',
            data: {
                mainMenuTabRoot: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_6__["AddonNotificationsMainMenuHandlerService"].PAGE_NAME,
            },
            loadChildren: () => Promise.all(/*! import() | pages-list-list-module */[__webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-login-pages-c~d66fb4f8"), __webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-login-pages-r~b60f3355"), __webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-login-pages-r~353fa808"), __webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-tag-pages-sea~fc222c92"), __webpack_require__.e("default~pages-list-list-module~pages-notification-notification-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-list-list-module")]).then(__webpack_require__.bind(null, /*! ./pages/list/list.module */ "./src/addons/notifications/pages/list/list.module.ts")).then(m => m.AddonNotificationsListPageModule),
        },
        ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["conditionalRoutes"])([
            {
                path: 'list/:id',
                loadChildren: () => Promise.all(/*! import() | pages-notification-notification-module */[__webpack_require__.e("default~pages-list-list-module~pages-notification-notification-module"), __webpack_require__.e("pages-notification-notification-module")]).then(__webpack_require__.bind(null, /*! ./pages/notification/notification.module */ "./src/addons/notifications/pages/notification/notification.module.ts"))
                    .then(m => m.AddonNotificationsNotificationPageModule),
            },
        ], () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isMobile),
        {
            path: 'notification',
            loadChildren: () => Promise.all(/*! import() | pages-notification-notification-module */[__webpack_require__.e("default~pages-list-list-module~pages-notification-notification-module"), __webpack_require__.e("pages-notification-notification-module")]).then(__webpack_require__.bind(null, /*! ./pages/notification/notification.module */ "./src/addons/notifications/pages/notification/notification.module.ts"))
                .then(m => m.AddonNotificationsNotificationPageModule),
        },
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_4__["buildTabMainRoutes"])(injector, {
            redirectTo: 'list',
            pathMatch: 'full',
        }),
    ];
}
let AddonNotificationsLazyModule = class AddonNotificationsLazyModule {
};
AddonNotificationsLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ROUTES"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]],
                useFactory: buildRoutes,
            },
        ],
    })
], AddonNotificationsLazyModule);



/***/ })

}]);
//# sourceMappingURL=addons-notifications-notifications-lazy-module.js.map