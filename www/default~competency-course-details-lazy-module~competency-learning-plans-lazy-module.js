(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~competency-course-details-lazy-module~competency-learning-plans-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competencies/competencies.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competencies/competencies.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ title }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!competencies.loaded\" (ionRefresh)=\"refreshCompetencies($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n        <core-loading [hideUntil]=\"competencies.loaded\">\r\n            <ion-list>\r\n                <ion-item class=\"ion-text-wrap\" *ngFor=\"let competency of competencies.items\"\r\n                    [attr.aria-label]=\"competency.competency.shortname\" (click)=\"competencies.select(competency)\"\r\n                    [attr.aria-current]=\"competencies.getItemAriaCurrent(competency)\" button detail=\"true\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ competency.competency.shortname }} <em>{{competency.competency.idnumber}}</em></p>\r\n                    </ion-label>\r\n                    <ion-badge slot=\"end\" *ngIf=\"competency.usercompetency\"\r\n                        [color]=\"competency.usercompetency.proficiency ? 'success' : 'danger'\">\r\n                        {{ competency.usercompetency.gradename }}\r\n                    </ion-badge>\r\n                    <ion-badge slot=\"end\" *ngIf=\"competency.usercompetencycourse\"\r\n                        [color]=\"competency.usercompetencycourse.proficiency ? 'success' : 'danger'\">\r\n                        {{ competency.usercompetencycourse.gradename }}\r\n                    </ion-badge>\r\n                </ion-item>\r\n            </ion-list>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competency/competency.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competency/competency.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1 *ngIf=\"competency\">\r\n                {{ competency.competency.competency.shortname }} <small>{{ competency.competency.competency.idnumber }}</small>\r\n            </h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content [core-swipe-navigation]=\"competencies\" class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!competencyLoaded\" (ionRefresh)=\"refreshCompetency($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"competencyLoaded\">\r\n        <ion-card *ngIf=\"user\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <core-user-avatar [user]=\"user\" slot=\"start\"></core-user-avatar>\r\n                <ion-label>\r\n                    <h2>{{ user.fullname }}</h2>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"competency\">\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"competency.competency.competency.description\">\r\n                <ion-label>\r\n                    <core-format-text [text]=\"competency.competency.competency.description\" [contextLevel]=\"contextLevel\"\r\n                        [contextInstanceId]=\"contextInstanceId\">\r\n                    </core-format-text>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap only-links\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.competency.path' | translate }}</p>\r\n                    <p>\r\n                        <a *ngIf=\"competency.competency.comppath.showlinks\" [href]=\"competencyFrameworkUrl\" core-link>\r\n                            {{ competency.competency.comppath.framework.name }}\r\n                        </a>\r\n                        <ng-container *ngIf=\"!competency.competency.comppath.showlinks\">\r\n                            {{ competency.competency.comppath.framework.name }}\r\n                        </ng-container>\r\n                        &nbsp;/&nbsp;\r\n                        <ng-container *ngFor=\"let ancestor of competency.competency.comppath.ancestors\">\r\n                            <button *ngIf=\"competency.competency.comppath.showlinks\" (click)=\"openCompetencySummary(ancestor.id)\"\r\n                                class=\"as-link\">\r\n                                {{ ancestor.name }}\r\n                            </button>\r\n                            <ng-container *ngIf=\"!competency.competency.comppath.showlinks\">{{ ancestor.name }}</ng-container>\r\n                            <ng-container *ngIf=\"!ancestor.last\">&nbsp;/&nbsp;</ng-container>\r\n                        </ng-container>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.competency.crossreferencedcompetencies' | translate }}</p>\r\n                    <p *ngIf=\"!competency.competency.hasrelatedcompetencies\">\r\n                        {{ 'addon.competency.nocrossreferencedcompetencies' | translate }}\r\n                    </p>\r\n                    <ng-container *ngIf=\"competency.competency.hasrelatedcompetencies\">\r\n                        <p *ngFor=\"let relatedcomp of competency.competency.relatedcompetencies\">\r\n                            <button (click)=\"openCompetencySummary(relatedcomp.id)\" class=\"as-link\">\r\n                                {{ relatedcomp.shortname }} - {{ relatedcomp.idnumber }}\r\n                            </button>\r\n                        </p>\r\n                    </ng-container>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"coursemodules\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.competency.activities' | translate }}</p>\r\n                    <p *ngIf=\"coursemodules.length == 0\">\r\n                        {{ 'addon.competency.noactivities' | translate }}\r\n                    </p>\r\n                    <ion-item class=\"ion-text-wrap\" *ngFor=\"let activity of coursemodules\" [href]=\"activity.url\"\r\n                        [attr.aria-label]=\"activity.name\" core-link capture=\"true\">\r\n                        <core-mod-icon slot=\"start\" [modicon]=\"activity.iconurl\" [showAlt]=\"false\" *ngIf=\"activity.iconurl\">\r\n                        </core-mod-icon>\r\n                        <ion-label>\r\n                            <core-format-text [text]=\"activity.name\" contextLevel=\"module\" [contextInstanceId]=\"activity.id\"\r\n                                [courseId]=\"courseId\">\r\n                            </core-format-text>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ng-container *ngIf=\"userCompetency\">\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"competency.usercompetency && competency.usercompetency!.status\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.competency.reviewstatus' | translate }}</p>\r\n                        <p>{{ competency.usercompetency!.statusname }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.competency.proficient' | translate }}</p>\r\n                    </ion-label>\r\n                    <ion-badge slot=\"end\" color=\"success\" *ngIf=\"userCompetency.proficiency\">\r\n                        {{ 'core.yes' | translate }}\r\n                    </ion-badge>\r\n                    <ion-badge slot=\"end\" color=\"danger\" *ngIf=\"!userCompetency.proficiency\">\r\n                        {{ 'core.no' | translate }}\r\n                    </ion-badge>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.competency.rating' | translate }}</p>\r\n                    </ion-label>\r\n                    <ion-badge color=\"dark\" slot=\"end\">{{ userCompetency.gradename }}</ion-badge>\r\n                </ion-item>\r\n            </ng-container>\r\n        </ion-card>\r\n\r\n        <div *ngIf=\"competency\">\r\n            <h3 class=\"ion-margin-horizontal\">{{ 'addon.competency.evidence' | translate }}</h3>\r\n            <p class=\"ion-margin-horizontal\" *ngIf=\"competency.evidence.length == 0\">\r\n                {{ 'addon.competency.noevidence' | translate }}\r\n            </p>\r\n            <ion-card *ngFor=\"let evidence of competency.evidence\">\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"evidence.actionuser\" core-user-link [userId]=\"evidence.actionuser.id\"\r\n                    [courseId]=\"courseId\">\r\n                    <core-user-avatar [user]=\"evidence.actionuser\" slot=\"start\" [linkProfile]=\"false\"></core-user-avatar>\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ evidence.actionuser.fullname }}</p>\r\n                        <p>{{ evidence.timemodified * 1000 | coreFormatDate }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p>\r\n                            <ion-badge color=\"dark\">{{ evidence.gradename }}</ion-badge>\r\n                        </p>\r\n                        <p class=\"ion-margin-top\" *ngIf=\"evidence.description\">{{ evidence.description }}</p>\r\n                        <blockquote *ngIf=\"evidence.note\">{{ evidence.note }}</blockquote>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-card>\r\n        </div>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competencysummary/competencysummary.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competencysummary/competencysummary.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1 *ngIf=\"competency\">\r\n                {{ competency.competency.shortname }} <small>{{ competency.competency.idnumber }}</small>\r\n            </h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!competencyLoaded\" (ionRefresh)=\"refreshCompetency($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"competencyLoaded\">\r\n        <ion-card *ngIf=\"competency\">\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"competency.competency.description\">\r\n                <ion-label>\r\n                    <core-format-text [text]=\"competency.competency.description\" [contextLevel]=\"contextLevel\"\r\n                        [contextInstanceId]=\"contextInstanceId\">\r\n                    </core-format-text>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.competency.path' | translate }}</p>\r\n                    <p>{{ competency.comppath.framework.name }}\r\n                        <ng-container *ngFor=\"let ancestor of competency.comppath.ancestors\">\r\n                            &nbsp;/&nbsp;\r\n                            <button class=\"as-link\" (click)=\"openCompetencySummary(ancestor.id)\">\r\n                                {{ ancestor.name }}\r\n                            </button>\r\n                        </ng-container>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

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

/***/ "./src/addons/competency/classes/competency-plan-competencies-source.ts":
/*!******************************************************************************!*\
  !*** ./src/addons/competency/classes/competency-plan-competencies-source.ts ***!
  \******************************************************************************/
/*! exports provided: AddonCompetencyPlanCompetenciesSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyPlanCompetenciesSource", function() { return AddonCompetencyPlanCompetenciesSource; });
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
 * Provides a collection of plan competencies.
 */
class AddonCompetencyPlanCompetenciesSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    constructor(planId) {
        super();
        this.PLAN_ID = planId;
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
            if (this.dirty || !this.plan) {
                yield this.loadLearningPlan();
            }
            yield _super.load.call(this);
        });
    }
    /**
     * Invalidate plan cache.
     */
    invalidateCache() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_2__["CoreUtils"].ignoreErrors(_services_competency__WEBPACK_IMPORTED_MODULE_3__["AddonCompetency"].invalidateLearningPlan(this.PLAN_ID));
        });
    }
    /**
     * @inheritdoc
     */
    loadPageItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.plan) {
                throw new Error('Can\'t load competencies without plan!');
            }
            return { items: this.plan.competencies };
        });
    }
    /**
     * Load learning plan.
     */
    loadLearningPlan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.plan = yield _services_competency__WEBPACK_IMPORTED_MODULE_3__["AddonCompetency"].getLearningPlan(this.PLAN_ID);
            this.plan.plan.statusname = _services_competency_helper__WEBPACK_IMPORTED_MODULE_4__["AddonCompetencyHelper"].getPlanStatusName(this.plan.plan.status);
            // Get the user profile image.
            this.user = yield _services_competency_helper__WEBPACK_IMPORTED_MODULE_4__["AddonCompetencyHelper"].getProfile(this.plan.plan.userid);
        });
    }
}


/***/ }),

/***/ "./src/addons/competency/pages/competencies/competencies.module.ts":
/*!*************************************************************************!*\
  !*** ./src/addons/competency/pages/competencies/competencies.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddonCompetencyCompetenciesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCompetenciesPageModule", function() { return AddonCompetencyCompetenciesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _competencies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./competencies.page */ "./src/addons/competency/pages/competencies/competencies.page.ts");
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




let AddonCompetencyCompetenciesPageModule = class AddonCompetencyCompetenciesPageModule {
};
AddonCompetencyCompetenciesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
        ],
        declarations: [
            _competencies_page__WEBPACK_IMPORTED_MODULE_3__["AddonCompetencyCompetenciesPage"],
        ],
    })
], AddonCompetencyCompetenciesPageModule);



/***/ }),

/***/ "./src/addons/competency/pages/competencies/competencies.page.ts":
/*!***********************************************************************!*\
  !*** ./src/addons/competency/pages/competencies/competencies.page.ts ***!
  \***********************************************************************/
/*! exports provided: AddonCompetencyCompetenciesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCompetenciesPage", function() { return AddonCompetencyCompetenciesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _addons_competency_classes_competency_plan_competencies_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @addons/competency/classes/competency-plan-competencies-source */ "./src/addons/competency/classes/competency-plan-competencies-source.ts");
/* harmony import */ var _addons_competency_classes_competency_course_competencies_source__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @addons/competency/classes/competency-course-competencies-source */ "./src/addons/competency/classes/competency-course-competencies-source.ts");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
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
var AddonCompetencyCompetenciesPage_1;











/**
 * Page that displays the list of competencies of a learning plan.
 */
let AddonCompetencyCompetenciesPage = AddonCompetencyCompetenciesPage_1 = class AddonCompetencyCompetenciesPage {
    constructor() {
        this.title = '';
        const planId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('planId');
        if (!planId) {
            const courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            const userId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('userId');
            const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_10__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_addons_competency_classes_competency_course_competencies_source__WEBPACK_IMPORTED_MODULE_8__["AddonCompetencyCourseCompetenciesSource"], [courseId, userId]);
            this.competencies = new _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_9__["CoreListItemsManager"](source, AddonCompetencyCompetenciesPage_1);
            return;
        }
        const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_10__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_addons_competency_classes_competency_plan_competencies_source__WEBPACK_IMPORTED_MODULE_7__["AddonCompetencyPlanCompetenciesSource"], [planId]);
        this.competencies = new _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_9__["CoreListItemsManager"](source, AddonCompetencyCompetenciesPage_1);
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchCompetencies();
            this.competencies.start(this.splitView);
        });
    }
    /**
     * Fetches the competencies and updates the view.
     *
     * @return Promise resolved when done.
     */
    fetchCompetencies() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const source = this.competencies.getSource();
                yield this.competencies.load();
                if (source instanceof _addons_competency_classes_competency_plan_competencies_source__WEBPACK_IMPORTED_MODULE_7__["AddonCompetencyPlanCompetenciesSource"]) {
                    if (!source.plan || source.plan && source.plan.competencycount <= 0) {
                        throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_6__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('addon.competency.errornocompetenciesfound'));
                    }
                    this.title = source.plan.plan.name;
                }
                else {
                    this.title = _singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('addon.competency.coursecompetencies');
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting competencies data.');
            }
        });
    }
    /**
     * Refreshes the competencies.
     *
     * @param refresher Refresher.
     */
    refreshCompetencies(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.competencies.getSource().invalidateCache();
            this.competencies.getSource().setDirty(true);
            this.fetchCompetencies().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.competencies.destroy();
    }
};
AddonCompetencyCompetenciesPage.ctorParameters = () => [];
AddonCompetencyCompetenciesPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__["CoreSplitViewComponent"],] }]
};
AddonCompetencyCompetenciesPage = AddonCompetencyCompetenciesPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-competency-competencies',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./competencies.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competencies/competencies.html")).default,
    })
], AddonCompetencyCompetenciesPage);



/***/ }),

/***/ "./src/addons/competency/pages/competency/competency.module.ts":
/*!*********************************************************************!*\
  !*** ./src/addons/competency/pages/competency/competency.module.ts ***!
  \*********************************************************************/
/*! exports provided: AddonCompetencyCompetencyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCompetencyPageModule", function() { return AddonCompetencyCompetencyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _competency_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./competency.page */ "./src/addons/competency/pages/competency/competency.page.ts");
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




let AddonCompetencyCompetencyPageModule = class AddonCompetencyCompetencyPageModule {
};
AddonCompetencyCompetencyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
        ],
        declarations: [
            _competency_page__WEBPACK_IMPORTED_MODULE_3__["AddonCompetencyCompetencyPage"],
        ],
    })
], AddonCompetencyCompetencyPageModule);



/***/ }),

/***/ "./src/addons/competency/pages/competency/competency.page.ts":
/*!*******************************************************************!*\
  !*** ./src/addons/competency/pages/competency/competency.page.ts ***!
  \*******************************************************************/
/*! exports provided: AddonCompetencyCompetencyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCompetencyPage", function() { return AddonCompetencyCompetencyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _addons_competency_services_competency_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addons/competency/services/competency-helper */ "./src/addons/competency/services/competency-helper.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @addons/competency/services/competency */ "./src/addons/competency/services/competency.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _addons_competency_competency_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @addons/competency/competency.module */ "./src/addons/competency/competency.module.ts");
/* harmony import */ var _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @classes/items-management/swipe-navigation-items-manager */ "./src/core/classes/items-management/swipe-navigation-items-manager.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _addons_competency_classes_competency_plan_competencies_source__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @addons/competency/classes/competency-plan-competencies-source */ "./src/addons/competency/classes/competency-plan-competencies-source.ts");
/* harmony import */ var _addons_competency_classes_competency_course_competencies_source__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @addons/competency/classes/competency-course-competencies-source */ "./src/addons/competency/classes/competency-course-competencies-source.ts");
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
 * Page that displays the competency information.
 */
let AddonCompetencyCompetencyPage = class AddonCompetencyCompetencyPage {
    constructor() {
        this.competencyLoaded = false;
        this.fetchSuccess = false;
        try {
            const planId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('planId');
            if (!planId) {
                const courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                const userId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('userId');
                const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_11__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_addons_competency_classes_competency_course_competencies_source__WEBPACK_IMPORTED_MODULE_13__["AddonCompetencyCourseCompetenciesSource"], [courseId, userId]);
                this.competencies = new AddonCompetencyCompetenciesSwipeManager(source);
                return;
            }
            const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_11__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_addons_competency_classes_competency_plan_competencies_source__WEBPACK_IMPORTED_MODULE_12__["AddonCompetencyPlanCompetenciesSource"], [planId]);
            this.competencies = new AddonCompetencyCompetenciesSwipeManager(source);
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].back();
            return;
        }
    }
    get competencyFrameworkUrl() {
        if (!this.competency) {
            return;
        }
        const { pluginbaseurl, framework, pagecontextid } = this.competency.competency.comppath;
        return `${pluginbaseurl}/competencies.php?competencyframeworkid=${framework.id}&pagecontextid=${pagecontextid}`;
    }
    get courseId() {
        const source = this.competencies.getSource();
        if (!(source instanceof _addons_competency_classes_competency_course_competencies_source__WEBPACK_IMPORTED_MODULE_13__["AddonCompetencyCourseCompetenciesSource"])) {
            return;
        }
        return source.COURSE_ID;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const source = this.competencies.getSource();
                yield source.reload();
                yield this.competencies.start();
                yield this.fetchCompetency();
            }
            finally {
                this.competencyLoaded = true;
            }
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.competencies.destroy();
    }
    /**
     * Fetches the competency and updates the view.
     *
     * @return Promise resolved when done.
     */
    fetchCompetency() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const source = this.competencies.getSource();
                this.competency = source instanceof _addons_competency_classes_competency_plan_competencies_source__WEBPACK_IMPORTED_MODULE_12__["AddonCompetencyPlanCompetenciesSource"]
                    ? yield this.fetchCompetencySummaryFromPlan(source)
                    : yield this.fetchCompetencySummaryFromCourse(source);
                if (this.competency.user.id != _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteUserId()) {
                    // Get the user profile from the returned object.
                    this.user = this.competency.user;
                }
                this.competency.evidence.forEach((evidence) => {
                    if (evidence.descidentifier) {
                        const key = 'addon.competency.' + evidence.descidentifier;
                        evidence.description = _singletons__WEBPACK_IMPORTED_MODULE_5__["Translate"].instant(key, { $a: evidence.desca });
                    }
                });
                if (!this.fetchSuccess) {
                    this.fetchSuccess = true;
                    const name = this.competency.competency.competency.shortname;
                    if (source instanceof _addons_competency_classes_competency_plan_competencies_source__WEBPACK_IMPORTED_MODULE_12__["AddonCompetencyPlanCompetenciesSource"]) {
                        this.planStatus && (yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(_addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_6__["AddonCompetency"].logCompetencyInPlanView(source.PLAN_ID, this.requireCompetencyId(), this.planStatus, name, (_a = source.user) === null || _a === void 0 ? void 0 : _a.id)));
                    }
                    else {
                        yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(_addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_6__["AddonCompetency"].logCompetencyInCourseView(source.COURSE_ID, this.requireCompetencyId(), name, source.USER_ID));
                    }
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting competency data.');
            }
        });
    }
    /**
     * Refreshes the competency.
     *
     * @param refresher Refresher.
     */
    refreshCompetency(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const source = this.competencies.getSource();
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(source instanceof _addons_competency_classes_competency_plan_competencies_source__WEBPACK_IMPORTED_MODULE_12__["AddonCompetencyPlanCompetenciesSource"]
                ? _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_6__["AddonCompetency"].invalidateCompetencyInPlan(source.PLAN_ID, this.requireCompetencyId())
                : _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_6__["AddonCompetency"].invalidateCompetencyInCourse(source.COURSE_ID, this.requireCompetencyId(), source.USER_ID));
            this.fetchCompetency().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Opens the summary of a competency.
     *
     * @param competencyId
     */
    openCompetencySummary(competencyId) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigate(`../${competencyId}/${_addons_competency_competency_module__WEBPACK_IMPORTED_MODULE_9__["ADDON_COMPETENCY_SUMMARY_PAGE"]}`, {
            params: { contextLevel: this.contextLevel, contextInstanceId: this.contextInstanceId },
        });
    }
    /**
     * Get competency id or fail.
     *
     * @returns Competency id.
     */
    requireCompetencyId() {
        const selectedItem = this.competencies.getSelectedItem();
        if (!selectedItem) {
            throw new Error('Failed to get competency id from selected item');
        }
        return selectedItem.competency.id;
    }
    /**
     * Fetch competency summary from a plan source.
     *
     * @param source Plan competencies source.
     * @returns Competency summary.
     */
    fetchCompetencySummaryFromPlan(source) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const competency = yield _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_6__["AddonCompetency"].getCompetencyInPlan(source.PLAN_ID, this.requireCompetencyId());
            this.planStatus = competency.plan.status;
            if (competency.usercompetencysummary.usercompetency) {
                competency.usercompetencysummary.usercompetency.statusname =
                    _addons_competency_services_competency_helper__WEBPACK_IMPORTED_MODULE_1__["AddonCompetencyHelper"].getCompetencyStatusName(competency.usercompetencysummary.usercompetency.status);
            }
            this.contextLevel = "user" /* USER */;
            this.contextInstanceId = ((_a = source.user) === null || _a === void 0 ? void 0 : _a.id) || competency.usercompetencysummary.user.id;
            this.userCompetency = competency.usercompetencysummary.usercompetencyplan
                || competency.usercompetencysummary.usercompetency;
            return competency.usercompetencysummary;
        });
    }
    /**
     * Fetch competency summary from a course source.
     *
     * @param source Course competencies source.
     * @returns Competency summary.
     */
    fetchCompetencySummaryFromCourse(source) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const competency = yield _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_6__["AddonCompetency"].getCompetencyInCourse(source.COURSE_ID, this.requireCompetencyId(), source.USER_ID);
            this.coursemodules = competency.coursemodules;
            this.contextLevel = "course" /* COURSE */;
            this.contextInstanceId = source.COURSE_ID;
            this.userCompetency = competency.usercompetencysummary.usercompetencycourse
                || competency.usercompetencysummary.usercompetency;
            return competency.usercompetencysummary;
        });
    }
};
AddonCompetencyCompetencyPage.ctorParameters = () => [];
AddonCompetencyCompetencyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-competency-competency',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./competency.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competency/competency.html")).default,
    })
], AddonCompetencyCompetencyPage);

/**
 * Helper to manage swiping within a collection of competencies.
 */
class AddonCompetencyCompetenciesSwipeManager extends _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_10__["CoreSwipeNavigationItemsManager"] {
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        return route.params.competencyId;
    }
}


/***/ }),

/***/ "./src/addons/competency/pages/competencysummary/competencysummary.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/addons/competency/pages/competencysummary/competencysummary.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AddonCompetencyCompetencySummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCompetencySummaryPageModule", function() { return AddonCompetencyCompetencySummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _competencysummary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./competencysummary.page */ "./src/addons/competency/pages/competencysummary/competencysummary.page.ts");
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




let AddonCompetencyCompetencySummaryPageModule = class AddonCompetencyCompetencySummaryPageModule {
};
AddonCompetencyCompetencySummaryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
        ],
        declarations: [
            _competencysummary_page__WEBPACK_IMPORTED_MODULE_3__["AddonCompetencyCompetencySummaryPage"],
        ],
    })
], AddonCompetencyCompetencySummaryPageModule);



/***/ }),

/***/ "./src/addons/competency/pages/competencysummary/competencysummary.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/addons/competency/pages/competencysummary/competencysummary.page.ts ***!
  \*********************************************************************************/
/*! exports provided: AddonCompetencyCompetencySummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCompetencySummaryPage", function() { return AddonCompetencyCompetencySummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addons/competency/services/competency */ "./src/addons/competency/services/competency.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _addons_competency_competency_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @addons/competency/competency.module */ "./src/addons/competency/competency.module.ts");
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
 * Page that displays the competency summary.
 */
let AddonCompetencyCompetencySummaryPage = class AddonCompetencyCompetencySummaryPage {
    constructor() {
        this.competencyLoaded = false;
        this.fetchSuccess = false; // Whether a fetch was finished successfully.
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.competencyId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('competencyId');
                this.contextLevel = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteParam('contextLevel');
                this.contextInstanceId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('contextInstanceId');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].back();
                return;
            }
            try {
                yield this.fetchCompetency();
            }
            finally {
                this.competencyLoaded = true;
            }
        });
    }
    /**
     * Fetches the competency summary and updates the view.
     *
     * @return Promise resolved when done.
     */
    fetchCompetency() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_2__["AddonCompetency"].getCompetencySummary(this.competencyId);
                if (!this.contextLevel || this.contextInstanceId === undefined) {
                    // Context not specified, use user context.
                    this.contextLevel = "user" /* USER */;
                    this.contextInstanceId = (_a = result.usercompetency) === null || _a === void 0 ? void 0 : _a.userid;
                }
                this.competency = result.competency;
                if (!this.fetchSuccess) {
                    this.fetchSuccess = true;
                    _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(_addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_2__["AddonCompetency"].logCompetencyView(this.competencyId, this.competency.competency.shortname));
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting competency summary data.');
            }
        });
    }
    /**
     * Refreshes the competency summary.
     *
     * @param refresher Refresher.
     */
    refreshCompetency(refresher) {
        _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_2__["AddonCompetency"].invalidateCompetencySummary(this.competencyId).finally(() => {
            this.fetchCompetency().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Opens the summary of a competency.
     *
     * @param competencyId
     */
    openCompetencySummary(competencyId) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].navigate(`../../${competencyId}/${_addons_competency_competency_module__WEBPACK_IMPORTED_MODULE_6__["ADDON_COMPETENCY_SUMMARY_PAGE"]}`, {
            params: { contextLevel: this.contextLevel, contextInstanceId: this.contextInstanceId },
        });
    }
};
AddonCompetencyCompetencySummaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-competency-competency-summary',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./competencysummary.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/competencysummary/competencysummary.html")).default,
    })
], AddonCompetencyCompetencySummaryPage);



/***/ }),

/***/ "./src/core/classes/items-management/swipe-navigation-items-manager.ts":
/*!*****************************************************************************!*\
  !*** ./src/core/classes/items-management/swipe-navigation-items-manager.ts ***!
  \*****************************************************************************/
/*! exports provided: CoreSwipeNavigationItemsManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSwipeNavigationItemsManager", function() { return CoreSwipeNavigationItemsManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _routed_items_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routed-items-manager */ "./src/core/classes/items-management/routed-items-manager.ts");
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
 * Helper class to manage the state and routing of a swipeable page.
 */
class CoreSwipeNavigationItemsManager extends _routed_items_manager__WEBPACK_IMPORTED_MODULE_2__["CoreRoutedItemsManager"] {
    /**
     * Process page started operations.
     */
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateSelectedItem();
        });
    }
    /**
     * Navigate to the next item.
     */
    navigateToNextItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navigateToItemBy(1, 'forward');
        });
    }
    /**
     * Navigate to the previous item.
     */
    navigateToPreviousItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navigateToItemBy(-1, 'back');
        });
    }
    /**
     * Has a next item.
     */
    hasNextItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.getItemBy(1);
            return !!item;
        });
    }
    /**
     * Has a previous item.
     */
    hasPreviousItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.getItemBy(-1);
            return !!item;
        });
    }
    /**
     * @inheritdoc
     */
    getCurrentPageRoute() {
        return _services_navigator__WEBPACK_IMPORTED_MODULE_1__["CoreNavigator"].getCurrentRoute();
    }
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        const segments = [];
        while (route) {
            segments.push(...route.url);
            if (!route.firstChild) {
                break;
            }
            route = route.firstChild;
        }
        return segments.map(segment => segment.path).join('/').replace(/\/+/, '/').trim() || null;
    }
    /**
     * Navigate to an item by an offset.
     *
     * @param delta Index offset.
     * @param animationDirection Animation direction.
     */
    navigateToItemBy(delta, animationDirection) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.getItemBy(delta);
            if (!item) {
                return;
            }
            yield this.navigateToItem(item, { animationDirection, replace: true });
        });
    }
    /**
     * Get item by an offset.
     *
     * @param delta Index offset.
     */
    getItemBy(delta) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const items = this.getSource().getItems();
            const selectedIndex = (_a = (this.selectedItem && (items === null || items === void 0 ? void 0 : items.indexOf(this.selectedItem)))) !== null && _a !== void 0 ? _a : -1;
            if (selectedIndex === -1 || items === null) {
                return null;
            }
            const deltaStep = delta > 0 ? 1 : -1;
            let nextIndex = selectedIndex;
            let deltaMoved = 0;
            while (deltaMoved !== delta) {
                nextIndex += deltaStep;
                if (nextIndex < 0 || nextIndex >= items.length) {
                    break;
                }
                if (this.skipItemInSwipe(items[nextIndex])) {
                    continue;
                }
                deltaMoved += deltaStep;
            }
            if (deltaMoved === delta) {
                return items[nextIndex];
            }
            if (!this.getSource().isCompleted()) {
                yield this.getSource().load();
                return this.getItemBy(delta);
            }
            return null;
        });
    }
    /**
     * Check if an item should be skipped during swipe navigation.
     *
     * @param item Item.
     * @returns Whether to skip this item during swipe navigation.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    skipItemInSwipe(item) {
        return false;
    }
}


/***/ })

}]);
//# sourceMappingURL=default~competency-course-details-lazy-module~competency-learning-plans-lazy-module.js.map