(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quiz-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/index/index.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/index/index.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header collapsible>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module?.id\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <!-- The buttons defined by the component will be added in here. -->\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"activityComponent?.showLoading\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <addon-mod-quiz-index [module]=\"module\" [courseId]=\"courseId\" (dataRetrieved)=\"updateData($event)\"></addon-mod-quiz-index>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/quiz/pages/index/index.page.ts":
/*!*******************************************************!*\
  !*** ./src/addons/mod/quiz/pages/index/index.page.ts ***!
  \*******************************************************/
/*! exports provided: AddonModQuizIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizIndexPage", function() { return AddonModQuizIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/index/index */ "./src/addons/mod/quiz/components/index/index.ts");
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
 * Page that displays the quiz entry page.
 */
let AddonModQuizIndexPage = class AddonModQuizIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
};
AddonModQuizIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index_index__WEBPACK_IMPORTED_MODULE_3__["AddonModQuizIndexComponent"],] }]
};
AddonModQuizIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-quiz-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/index/index.html")).default,
    })
], AddonModQuizIndexPage);



/***/ }),

/***/ "./src/addons/mod/quiz/quiz-lazy.module.ts":
/*!*************************************************!*\
  !*** ./src/addons/mod/quiz/quiz-lazy.module.ts ***!
  \*************************************************/
/*! exports provided: AddonModQuizLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizLazyModule", function() { return AddonModQuizLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/quiz/components/components.module.ts");
/* harmony import */ var _pages_index_index_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index.page */ "./src/addons/mod/quiz/pages/index/index.page.ts");
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
        path: ':courseId/:cmId',
        component: _pages_index_index_page__WEBPACK_IMPORTED_MODULE_5__["AddonModQuizIndexPage"],
    },
    {
        path: ':courseId/:cmId/player',
        loadChildren: () => Promise.all(/*! import() | pages-player-player-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-player-player-module")]).then(__webpack_require__.bind(null, /*! ./pages/player/player.module */ "./src/addons/mod/quiz/pages/player/player.module.ts")).then(m => m.AddonModQuizPlayerPageModule),
    },
    {
        path: ':courseId/:cmId/attempt/:attemptId',
        loadChildren: () => Promise.all(/*! import() | pages-attempt-attempt-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-attempt-attempt-module")]).then(__webpack_require__.bind(null, /*! ./pages/attempt/attempt.module */ "./src/addons/mod/quiz/pages/attempt/attempt.module.ts")).then(m => m.AddonModQuizAttemptPageModule),
    },
    {
        path: ':courseId/:cmId/review/:attemptId',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-review-review-module */ "pages-review-review-module").then(__webpack_require__.bind(null, /*! ./pages/review/review.module */ "./src/addons/mod/quiz/pages/review/review.module.ts")).then(m => m.AddonModQuizReviewPageModule),
    },
];
let AddonModQuizLazyModule = class AddonModQuizLazyModule {
};
AddonModQuizLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonModQuizComponentsModule"],
        ],
        declarations: [
            _pages_index_index_page__WEBPACK_IMPORTED_MODULE_5__["AddonModQuizIndexPage"],
        ],
    })
], AddonModQuizLazyModule);



/***/ })

}]);
//# sourceMappingURL=quiz-lazy-module.js.map