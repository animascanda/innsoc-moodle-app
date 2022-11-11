(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grades-courses-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/grades/pages/courses/courses.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/grades/pages/courses/courses.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'core.grades.grades' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!courses.loaded\" (ionRefresh)=\"refreshCourses($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n        <core-loading [hideUntil]=\"courses.loaded\">\r\n            <core-empty-box *ngIf=\"courses.empty\" icon=\"fas-chart-bar\" [message]=\"'core.grades.nogradesreturned' | translate\">\r\n            </core-empty-box>\r\n\r\n            <ion-list *ngIf=\"!courses.empty\">\r\n                <ion-item *ngFor=\"let course of courses.items\" [attr.aria-label]=\"course.courseFullName\"\r\n                    [attr.aria-current]=\"courses.getItemAriaCurrent(course)\" class=\"ion-text-wrap\" button detail=\"true\"\r\n                    (click)=\"courses.select(course)\">\r\n                    <ion-label>\r\n                        <core-format-text [text]=\"course.courseFullName\" [contextInstanceId]=\"course.courseid\" contextLevel=\"course\">\r\n                        </core-format-text>\r\n                    </ion-label>\r\n                    <ion-badge slot=\"end\" color=\"light\">\r\n                        <span class=\"sr-only\" *ngIf=\"course.grade && course.grade != '-'\">\r\n                            {{ 'core.grades.grade' | translate }}\r\n                        </span>\r\n                        {{course.grade}}\r\n                    </ion-badge>\r\n                </ion-item>\r\n            </ion-list>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/grades/grades-courses-lazy.module.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/grades/grades-courses-lazy.module.ts ***!
  \****************************************************************/
/*! exports provided: CoreGradesCoursesLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreGradesCoursesLazyModule", function() { return CoreGradesCoursesLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _pages_course_course_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/course/course.page */ "./src/core/features/grades/pages/course/course.page.ts");
/* harmony import */ var _pages_course_course_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/course/course.module */ "./src/core/features/grades/pages/course/course.module.ts");
/* harmony import */ var _pages_courses_courses_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/courses/courses.page */ "./src/core/features/grades/pages/courses/courses.page.ts");
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
        component: _pages_courses_courses_page__WEBPACK_IMPORTED_MODULE_8__["CoreGradesCoursesPage"],
    },
    {
        path: ':courseId',
        component: _pages_course_course_page__WEBPACK_IMPORTED_MODULE_6__["CoreGradesCoursePage"],
    },
];
const tabletRoutes = [
    {
        path: '',
        component: _pages_courses_courses_page__WEBPACK_IMPORTED_MODULE_8__["CoreGradesCoursesPage"],
        children: [
            {
                path: ':courseId',
                component: _pages_course_course_page__WEBPACK_IMPORTED_MODULE_6__["CoreGradesCoursePage"],
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_4__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_4__["CoreScreen"].isTablet),
];
let CoreGradesCoursesLazyModule = class CoreGradesCoursesLazyModule {
};
CoreGradesCoursesLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_5__["CoreSharedModule"],
            _pages_course_course_module__WEBPACK_IMPORTED_MODULE_7__["CoreGradesCoursePageModule"],
        ],
        declarations: [
            _pages_courses_courses_page__WEBPACK_IMPORTED_MODULE_8__["CoreGradesCoursesPage"],
        ],
    })
], CoreGradesCoursesLazyModule);



/***/ }),

/***/ "./src/core/features/grades/pages/courses/courses.page.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/grades/pages/courses/courses.page.ts ***!
  \****************************************************************/
/*! exports provided: CoreGradesCoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreGradesCoursesPage", function() { return CoreGradesCoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _features_grades_classes_grades_courses_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/grades/classes/grades-courses-source */ "./src/core/features/grades/classes/grades-courses-source.ts");
/* harmony import */ var _features_grades_services_grades__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/grades/services/grades */ "./src/core/features/grades/services/grades.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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
var CoreGradesCoursesPage_1;









/**
 * Page that displays courses grades (main menu option).
 */
let CoreGradesCoursesPage = CoreGradesCoursesPage_1 = class CoreGradesCoursesPage {
    constructor() {
        const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_3__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_features_grades_classes_grades_courses_source__WEBPACK_IMPORTED_MODULE_5__["CoreGradesCoursesSource"], []);
        this.courses = new CoreGradesCoursesManager(source, CoreGradesCoursesPage_1);
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchInitialCourses();
            this.courses.start(this.splitView);
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.courses.destroy();
    }
    /**
     * Refresh courses.
     *
     * @param refresher Refresher.
     */
    refreshCourses(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(_features_grades_services_grades__WEBPACK_IMPORTED_MODULE_6__["CoreGrades"].invalidateCoursesGradesData());
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(this.courses.reload());
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Obtain the initial list of courses.
     */
    fetchInitialCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.courses.load();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading courses');
            }
        });
    }
};
CoreGradesCoursesPage.ctorParameters = () => [];
CoreGradesCoursesPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_4__["CoreSplitViewComponent"],] }]
};
CoreGradesCoursesPage = CoreGradesCoursesPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-grades-courses',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./courses.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/grades/pages/courses/courses.html")).default,
    })
], CoreGradesCoursesPage);

/**
 * Helper class to manage courses.
 */
class CoreGradesCoursesManager extends _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_2__["CoreListItemsManager"] {
    /**
     * @inheritdoc
     */
    logActivity() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _features_grades_services_grades__WEBPACK_IMPORTED_MODULE_6__["CoreGrades"].logCoursesGradesView();
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=grades-courses-lazy-module.js.map