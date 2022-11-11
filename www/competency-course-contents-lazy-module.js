(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["competency-course-contents-lazy-module"],{

/***/ "./src/addons/competency/classes/competency-course-competencies-source.ts":
/*!********************************************************************************!*\
  !*** ./src/addons/competency/classes/competency-course-competencies-source.ts ***!
  \********************************************************************************/
/*! exports provided: AddonCompetencyCourseCompetenciesSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCourseCompetenciesSource", function() { return AddonCompetencyCourseCompetenciesSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_competency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/competency */ "./src/addons/competency/services/competency.ts");
/* harmony import */ var _services_competency_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/competency-helper */ "./src/addons/competency/services/competency-helper.ts");
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
 * Provides a collection of course competencies.
 */
class AddonCompetencyCourseCompetenciesSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    constructor(courseId, userId) {
        super();
        this.COURSE_ID = courseId;
        this.USER_ID = userId;
    }
    /**
     * @inheritdoc
     */
    static getSourceId(courseId, userId) {
        return `${courseId}-${userId || 'current-user'}`;
    }
    /**
     * @inheritdoc
     */
    getItemPath(competency) {
        return String(competency.competency.id);
    }
    /**
     * @inheritdoc
     */
    load() {
        const _super = Object.create(null, {
            load: { get: () => super.load }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.dirty || !this.courseCompetencies) {
                yield this.loadCourseCompetencies();
            }
            yield _super.load.call(this);
        });
    }
    /**
     * Invalidate course cache.
     */
    invalidateCache() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_2__["CoreUtils"].ignoreErrors(_services_competency__WEBPACK_IMPORTED_MODULE_3__["AddonCompetency"].invalidateCourseCompetencies(this.COURSE_ID, this.USER_ID));
        });
    }
    /**
     * @inheritdoc
     */
    loadPageItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.courseCompetencies) {
                throw new Error('Can\'t load competencies without course data');
            }
            return { items: this.courseCompetencies.competencies };
        });
    }
    /**
     * Load competencies.
     */
    loadCourseCompetencies() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            [this.courseCompetencies, this.user] = yield Promise.all([
                _services_competency__WEBPACK_IMPORTED_MODULE_3__["AddonCompetency"].getCourseCompetencies(this.COURSE_ID, this.USER_ID),
                _services_competency_helper__WEBPACK_IMPORTED_MODULE_4__["AddonCompetencyHelper"].getProfile(this.USER_ID),
            ]);
        });
    }
}


/***/ }),

/***/ "./src/addons/competency/competency-course-contents-lazy.module.ts":
/*!*************************************************************************!*\
  !*** ./src/addons/competency/competency-course-contents-lazy.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddonCompetencyCourseContentsLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCourseContentsLazyModule", function() { return AddonCompetencyCourseContentsLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_coursecompetencies_coursecompetencies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/coursecompetencies/coursecompetencies.page */ "./src/addons/competency/pages/coursecompetencies/coursecompetencies.page.ts");
/* harmony import */ var _pages_coursecompetencies_coursecompetencies_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/coursecompetencies/coursecompetencies.module */ "./src/addons/competency/pages/coursecompetencies/coursecompetencies.module.ts");
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
        component: _pages_coursecompetencies_coursecompetencies_page__WEBPACK_IMPORTED_MODULE_3__["AddonCompetencyCourseCompetenciesPage"],
    },
];
let AddonCompetencyCourseContentsLazyModule = class AddonCompetencyCourseContentsLazyModule {
};
AddonCompetencyCourseContentsLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _pages_coursecompetencies_coursecompetencies_module__WEBPACK_IMPORTED_MODULE_4__["AddonCompetencyCourseCompetenciesPageModule"],
        ],
    })
], AddonCompetencyCourseContentsLazyModule);



/***/ })

}]);
//# sourceMappingURL=competency-course-contents-lazy-module.js.map