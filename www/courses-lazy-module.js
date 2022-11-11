(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courses-lazy-module"],{

/***/ "./src/core/features/courses/courses-lazy.module.ts":
/*!**********************************************************!*\
  !*** ./src/core/features/courses/courses-lazy.module.ts ***!
  \**********************************************************/
/*! exports provided: CoreCoursesLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesLazyModule", function() { return CoreCoursesLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
/* harmony import */ var _services_courses_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/courses-helper */ "./src/core/features/courses/services/courses-helper.ts");
/* harmony import */ var _services_handlers_my_courses_mainmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/handlers/my-courses-mainmenu */ "./src/core/features/courses/services/handlers/my-courses-mainmenu.ts");
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
            path: 'my',
            data: {
                mainMenuTabRoot: _services_handlers_my_courses_mainmenu__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesMyCoursesMainMenuHandlerService"].PAGE_NAME,
            },
            loadChildren: () => _services_courses_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCoursesHelper"].getMyRouteModule(),
        },
        {
            path: 'categories',
            redirectTo: 'categories/root',
            pathMatch: 'full',
        },
        {
            path: 'categories/:id',
            loadChildren: () => __webpack_require__.e(/*! import() | pages-categories-categories-module */ "pages-categories-categories-module").then(__webpack_require__.bind(null, /*! ./pages/categories/categories.module */ "./src/core/features/courses/pages/categories/categories.module.ts"))
                .then(m => m.CoreCoursesCategoriesPageModule),
        },
        {
            path: 'list',
            loadChildren: () => Promise.all(/*! import() | pages-list-list-module */[__webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-login-pages-c~d66fb4f8"), __webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-login-pages-r~b60f3355"), __webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-login-pages-r~353fa808"), __webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-tag-pages-sea~fc222c92"), __webpack_require__.e("default~pages-list-list-module~pages-notification-notification-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-list-list-module")]).then(__webpack_require__.bind(null, /*! ./pages/list/list.module */ "./src/core/features/courses/pages/list/list.module.ts"))
                .then(m => m.CoreCoursesListPageModule),
        },
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_3__["buildTabMainRoutes"])(injector, {
            redirectTo: 'my',
            pathMatch: 'full',
        }),
    ];
}
let CoreCoursesLazyModule = class CoreCoursesLazyModule {
};
CoreCoursesLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]],
                useFactory: buildRoutes,
            },
        ],
    })
], CoreCoursesLazyModule);



/***/ })

}]);
//# sourceMappingURL=courses-lazy-module.js.map