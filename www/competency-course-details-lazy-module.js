(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["competency-course-details-lazy-module"],{

/***/ "./src/addons/competency/competency-course-details-lazy.module.ts":
/*!************************************************************************!*\
  !*** ./src/addons/competency/competency-course-details-lazy.module.ts ***!
  \************************************************************************/
/*! exports provided: AddonCompetencyCourseDetailsLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCourseDetailsLazyModule", function() { return AddonCompetencyCourseDetailsLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_competency_competency_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/competency/competency.page */ "./src/addons/competency/pages/competency/competency.page.ts");
/* harmony import */ var _pages_competencysummary_competencysummary_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/competencysummary/competencysummary.page */ "./src/addons/competency/pages/competencysummary/competencysummary.page.ts");
/* harmony import */ var _competency_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./competency.module */ "./src/addons/competency/competency.module.ts");
/* harmony import */ var _pages_competency_competency_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/competency/competency.module */ "./src/addons/competency/pages/competency/competency.module.ts");
/* harmony import */ var _pages_competencysummary_competencysummary_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/competencysummary/competencysummary.module */ "./src/addons/competency/pages/competencysummary/competencysummary.module.ts");
/* harmony import */ var _pages_coursecompetencies_coursecompetencies_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/coursecompetencies/coursecompetencies.page */ "./src/addons/competency/pages/coursecompetencies/coursecompetencies.page.ts");
/* harmony import */ var _pages_coursecompetencies_coursecompetencies_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/coursecompetencies/coursecompetencies.module */ "./src/addons/competency/pages/coursecompetencies/coursecompetencies.module.ts");
/* harmony import */ var _pages_competencies_competencies_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/competencies/competencies.page */ "./src/addons/competency/pages/competencies/competencies.page.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _pages_competencies_competencies_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/competencies/competencies.module */ "./src/addons/competency/pages/competencies/competencies.module.ts");
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














const mobileRoutes = [
    {
        path: '',
        component: _pages_coursecompetencies_coursecompetencies_page__WEBPACK_IMPORTED_MODULE_8__["AddonCompetencyCourseCompetenciesPage"],
    },
    {
        path: ':competencyId',
        component: _pages_competency_competency_page__WEBPACK_IMPORTED_MODULE_3__["AddonCompetencyCompetencyPage"],
    },
];
const tabletRoutes = [
    {
        path: '',
        component: _pages_competencies_competencies_page__WEBPACK_IMPORTED_MODULE_10__["AddonCompetencyCompetenciesPage"],
        children: [
            {
                path: ':competencyId',
                component: _pages_competency_competency_page__WEBPACK_IMPORTED_MODULE_3__["AddonCompetencyCompetencyPage"],
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_12__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_12__["CoreScreen"].isTablet),
    {
        path: `:competencyId/${_competency_module__WEBPACK_IMPORTED_MODULE_5__["ADDON_COMPETENCY_SUMMARY_PAGE"]}`,
        component: _pages_competencysummary_competencysummary_page__WEBPACK_IMPORTED_MODULE_4__["AddonCompetencyCompetencySummaryPage"],
    },
];
let AddonCompetencyCourseDetailsLazyModule = class AddonCompetencyCourseDetailsLazyModule {
};
AddonCompetencyCourseDetailsLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _pages_coursecompetencies_coursecompetencies_module__WEBPACK_IMPORTED_MODULE_9__["AddonCompetencyCourseCompetenciesPageModule"],
            _pages_competencies_competencies_module__WEBPACK_IMPORTED_MODULE_13__["AddonCompetencyCompetenciesPageModule"],
            _pages_competency_competency_module__WEBPACK_IMPORTED_MODULE_6__["AddonCompetencyCompetencyPageModule"],
            _pages_competencysummary_competencysummary_module__WEBPACK_IMPORTED_MODULE_7__["AddonCompetencyCompetencySummaryPageModule"],
        ],
    })
], AddonCompetencyCourseDetailsLazyModule);



/***/ })

}]);
//# sourceMappingURL=competency-course-details-lazy-module.js.map