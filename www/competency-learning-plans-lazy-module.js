(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["competency-learning-plans-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/plan/plan.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/plan/plan.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1 *ngIf=\"plan\">{{plan.plan.name}}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content [core-swipe-navigation]=\"plans\" class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!competencies.loaded\" (ionRefresh)=\"refreshLearningPlan($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"competencies.loaded\">\r\n        <ion-card *ngIf=\"user\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <core-user-avatar [user]=\"user\" slot=\"start\"></core-user-avatar>\r\n                    <h2>{{ user.fullname }}</h2>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"plan\">\r\n            <ion-list>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"plan.plan.description\">\r\n                    <ion-label>\r\n                        <p>\r\n                            <core-format-text [text]=\"plan.plan.description\" contextLevel=\"user\" [contextInstanceId]=\"plan.plan.userid\">\r\n                            </core-format-text>\r\n                        </p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.competency.status' | translate }}</p>\r\n                        <p>{{ plan.plan.statusname }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"plan.plan.duedate > 0\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.competency.duedate' | translate }}</p>\r\n                        <p>{{ plan.plan.duedate * 1000 | coreFormatDate }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"plan.plan.template\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.competency.template' | translate }}</p>\r\n                        <p>{{ plan.plan.template.shortname }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label id=\"addon-competency-plan-{{plan.plan.id}}-progress\">\r\n                        <p class=\"item-heading\">{{ 'addon.competency.progress' | translate }}</p>\r\n                        <p>\r\n                            {{ 'addon.competency.xcompetenciesproficientoutofy' | translate:\r\n                            {$a: {x: plan.proficientcompetencycount, y: plan.competencycount} } }}\r\n                        </p>\r\n                        <core-progress-bar [progress]=\"plan.proficientcompetencypercentage\"\r\n                            [text]=\"plan.proficientcompetencypercentageformatted\"\r\n                            ariaDescribedBy=\"addon-competency-plan-{{plan.plan.id}}-progress\">\r\n                        </core-progress-bar>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"plan\">\r\n            <ion-card-header class=\"ion-text-wrap\">\r\n                <ion-card-title>{{ 'addon.competency.learningplancompetencies' | translate }}</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-list>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"plan.competencycount == 0\">\r\n                    <ion-label>\r\n                        <p>{{ 'addon.competency.nocompetencies' | translate }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngFor=\"let competency of competencies.items\" (click)=\"competencies.select(competency)\"\r\n                    [attr.aria-label]=\"competency.competency.shortname\" detail=\"true\" button>\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{competency.competency.shortname}} <em>{{competency.competency.idnumber}}</em></p>\r\n                    </ion-label>\r\n                    <ion-badge *ngIf=\"competency.usercompetencyplan\" slot=\"end\"\r\n                        [color]=\"competency.usercompetencyplan.proficiency ? 'success' : 'danger'\">\r\n                        {{ competency.usercompetencyplan.gradename }}\r\n                    </ion-badge>\r\n                    <ion-badge *ngIf=\"!competency.usercompetencyplan\" slot=\"end\"\r\n                        [color]=\"competency.usercompetency.proficiency ? 'success' : 'danger'\">\r\n                        {{ competency.usercompetency.gradename }}\r\n                    </ion-badge>\r\n                </ion-item>\r\n            </ion-list>\r\n        </ion-card>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/planlist/planlist.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/planlist/planlist.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.competency.userplans' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!plans.loaded\" (ionRefresh)=\"refreshLearningPlans($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n        <core-loading [hideUntil]=\"plans.loaded\">\r\n            <core-empty-box *ngIf=\"plans.empty\" icon=\"fas-route\" [message]=\"'addon.competency.noplanswerecreated' | translate\">\r\n\r\n            </core-empty-box>\r\n            <ion-list *ngIf=\"!plans.empty\" class=\"ion-no-margin\">\r\n                <ion-item class=\"ion-text-wrap\" *ngFor=\"let plan of plans.items\" [attr.aria-label]=\"plan.name\" (click)=\"plans.select(plan)\"\r\n                    [attr.aria-current]=\"plans.getItemAriaCurrent(plan)\" button detail=\"true\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ plan.name }}</p>\r\n                        <p *ngIf=\"plan.duedate > 0\">\r\n                            {{ 'addon.competency.duedate' | translate }}:&nbsp;\r\n                            {{ plan.duedate * 1000 | coreFormatDate :'strftimedatetimeshort' }}\r\n                        </p>\r\n                    </ion-label>\r\n                    <ion-badge slot=\"end\" class=\"ion-text-wrap\" [color]=\"plan.statuscolor\">{{ plan.statusname }}</ion-badge>\r\n                </ion-item>\r\n            </ion-list>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/competency/classes/competency-plans-source.ts":
/*!******************************************************************!*\
  !*** ./src/addons/competency/classes/competency-plans-source.ts ***!
  \******************************************************************/
/*! exports provided: AddonCompetencyPlansSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyPlansSource", function() { return AddonCompetencyPlansSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
/* harmony import */ var _competency_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../competency.module */ "./src/addons/competency/competency.module.ts");
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
 * Provides a collection of learning plans.
 */
class AddonCompetencyPlansSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    constructor(userId) {
        super();
        this.USER_ID = userId;
    }
    /**
     * @inheritdoc
     */
    static getSourceId(userId) {
        return userId ? String(userId) : 'current-user';
    }
    /**
     * @inheritdoc
     */
    getItemPath(plan) {
        return `${plan.id}/${_competency_module__WEBPACK_IMPORTED_MODULE_2__["ADDON_COMPETENCY_COMPETENCIES_PAGE"]}`;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams() {
        if (this.USER_ID) {
            return { userId: this.USER_ID };
        }
        return {};
    }
    /**
     * Invalidate learning plans cache.
     */
    invalidateCache() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_competency__WEBPACK_IMPORTED_MODULE_3__["AddonCompetency"].invalidateLearningPlans(this.USER_ID);
        });
    }
    /**
     * @inheritdoc
     */
    loadPageItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const plans = yield _services_competency__WEBPACK_IMPORTED_MODULE_3__["AddonCompetency"].getLearningPlans(this.USER_ID);
            plans.forEach((plan) => {
                plan.statusname = _services_competency_helper__WEBPACK_IMPORTED_MODULE_4__["AddonCompetencyHelper"].getPlanStatusName(plan.status);
                switch (plan.status) {
                    case _services_competency__WEBPACK_IMPORTED_MODULE_3__["AddonCompetencyProvider"].STATUS_ACTIVE:
                        plan.statuscolor = 'success';
                        break;
                    case _services_competency__WEBPACK_IMPORTED_MODULE_3__["AddonCompetencyProvider"].STATUS_COMPLETE:
                        plan.statuscolor = 'danger';
                        break;
                    default:
                        plan.statuscolor = 'warning';
                        break;
                }
            });
            return { items: plans };
        });
    }
}


/***/ }),

/***/ "./src/addons/competency/competency-learning-plans-lazy.module.ts":
/*!************************************************************************!*\
  !*** ./src/addons/competency/competency-learning-plans-lazy.module.ts ***!
  \************************************************************************/
/*! exports provided: AddonCompetencyLearningPlansLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyLearningPlansLazyModule", function() { return AddonCompetencyLearningPlansLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _pages_plan_plan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/plan/plan */ "./src/addons/competency/pages/plan/plan.ts");
/* harmony import */ var _pages_planlist_planlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/planlist/planlist */ "./src/addons/competency/pages/planlist/planlist.ts");
/* harmony import */ var _pages_competency_competency_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/competency/competency.page */ "./src/addons/competency/pages/competency/competency.page.ts");
/* harmony import */ var _pages_competencysummary_competencysummary_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/competencysummary/competencysummary.page */ "./src/addons/competency/pages/competencysummary/competencysummary.page.ts");
/* harmony import */ var _competency_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./competency.module */ "./src/addons/competency/competency.module.ts");
/* harmony import */ var _pages_competency_competency_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/competency/competency.module */ "./src/addons/competency/pages/competency/competency.module.ts");
/* harmony import */ var _pages_competencysummary_competencysummary_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/competencysummary/competencysummary.module */ "./src/addons/competency/pages/competencysummary/competencysummary.module.ts");
/* harmony import */ var _pages_competencies_competencies_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/competencies/competencies.page */ "./src/addons/competency/pages/competencies/competencies.page.ts");
/* harmony import */ var _pages_competencies_competencies_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/competencies/competencies.module */ "./src/addons/competency/pages/competencies/competencies.module.ts");
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
        pathMatch: 'full',
        component: _pages_planlist_planlist__WEBPACK_IMPORTED_MODULE_7__["AddonCompetencyPlanListPage"],
    },
    {
        path: `:planId/${_competency_module__WEBPACK_IMPORTED_MODULE_10__["ADDON_COMPETENCY_COMPETENCIES_PAGE"]}`,
        component: _pages_plan_plan__WEBPACK_IMPORTED_MODULE_6__["AddonCompetencyPlanPage"],
    },
    {
        path: `:planId/${_competency_module__WEBPACK_IMPORTED_MODULE_10__["ADDON_COMPETENCY_COMPETENCIES_PAGE"]}/:competencyId`,
        component: _pages_competency_competency_page__WEBPACK_IMPORTED_MODULE_8__["AddonCompetencyCompetencyPage"],
    },
];
const tabletRoutes = [
    {
        path: '',
        component: _pages_planlist_planlist__WEBPACK_IMPORTED_MODULE_7__["AddonCompetencyPlanListPage"],
        children: [
            {
                path: `:planId/${_competency_module__WEBPACK_IMPORTED_MODULE_10__["ADDON_COMPETENCY_COMPETENCIES_PAGE"]}`,
                component: _pages_plan_plan__WEBPACK_IMPORTED_MODULE_6__["AddonCompetencyPlanPage"],
            },
        ],
    },
    {
        path: `:planId/${_competency_module__WEBPACK_IMPORTED_MODULE_10__["ADDON_COMPETENCY_COMPETENCIES_PAGE"]}`,
        component: _pages_competencies_competencies_page__WEBPACK_IMPORTED_MODULE_13__["AddonCompetencyCompetenciesPage"],
        children: [
            {
                path: ':competencyId',
                component: _pages_competency_competency_page__WEBPACK_IMPORTED_MODULE_8__["AddonCompetencyCompetencyPage"],
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_4__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_4__["CoreScreen"].isTablet),
    {
        path: `:planId/${_competency_module__WEBPACK_IMPORTED_MODULE_10__["ADDON_COMPETENCY_COMPETENCIES_PAGE"]}/:competencyId/${_competency_module__WEBPACK_IMPORTED_MODULE_10__["ADDON_COMPETENCY_SUMMARY_PAGE"]}`,
        component: _pages_competencysummary_competencysummary_page__WEBPACK_IMPORTED_MODULE_9__["AddonCompetencyCompetencySummaryPage"],
    },
];
let AddonCompetencyLearningPlansLazyModule = class AddonCompetencyLearningPlansLazyModule {
};
AddonCompetencyLearningPlansLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_5__["CoreSharedModule"],
            _pages_competencies_competencies_module__WEBPACK_IMPORTED_MODULE_14__["AddonCompetencyCompetenciesPageModule"],
            _pages_competency_competency_module__WEBPACK_IMPORTED_MODULE_11__["AddonCompetencyCompetencyPageModule"],
            _pages_competencysummary_competencysummary_module__WEBPACK_IMPORTED_MODULE_12__["AddonCompetencyCompetencySummaryPageModule"],
        ],
        declarations: [
            _pages_plan_plan__WEBPACK_IMPORTED_MODULE_6__["AddonCompetencyPlanPage"],
            _pages_planlist_planlist__WEBPACK_IMPORTED_MODULE_7__["AddonCompetencyPlanListPage"],
        ],
    })
], AddonCompetencyLearningPlansLazyModule);



/***/ }),

/***/ "./src/addons/competency/pages/plan/plan.ts":
/*!**************************************************!*\
  !*** ./src/addons/competency/pages/plan/plan.ts ***!
  \**************************************************/
/*! exports provided: AddonCompetencyPlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyPlanPage", function() { return AddonCompetencyPlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/items-management/swipe-navigation-items-manager */ "./src/core/classes/items-management/swipe-navigation-items-manager.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _addons_competency_classes_competency_plans_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @addons/competency/classes/competency-plans-source */ "./src/addons/competency/classes/competency-plans-source.ts");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
/* harmony import */ var _addons_competency_classes_competency_plan_competencies_source__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @addons/competency/classes/competency-plan-competencies-source */ "./src/addons/competency/classes/competency-plan-competencies-source.ts");
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
var AddonCompetencyPlanPage_1;









/**
 * Page that displays a learning plan.
 */
let AddonCompetencyPlanPage = AddonCompetencyPlanPage_1 = class AddonCompetencyPlanPage {
    constructor() {
        try {
            const planId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('planId');
            const userId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('userId');
            const plansSource = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_5__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_addons_competency_classes_competency_plans_source__WEBPACK_IMPORTED_MODULE_6__["AddonCompetencyPlansSource"], [userId]);
            const competenciesSource = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_5__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_addons_competency_classes_competency_plan_competencies_source__WEBPACK_IMPORTED_MODULE_8__["AddonCompetencyPlanCompetenciesSource"], [planId]);
            this.competencies = new _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_7__["CoreListItemsManager"](competenciesSource, AddonCompetencyPlanPage_1);
            this.plans = new _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_4__["CoreSwipeNavigationItemsManager"](plansSource);
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].back();
            return;
        }
    }
    get plan() {
        return this.competencies.getSource().plan;
    }
    get user() {
        return this.competencies.getSource().user;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchLearningPlan();
            yield this.plans.start();
            yield this.competencies.start();
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.plans.destroy();
        this.competencies.destroy();
    }
    /**
     * Fetches the learning plan and updates the view.
     *
     * @return Promise resolved when done.
     */
    fetchLearningPlan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.competencies.getSource().reload();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting learning plan data.');
            }
        });
    }
    /**
     * Refreshes the learning plan.
     *
     * @param refresher Refresher.
     */
    refreshLearningPlan(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.competencies.getSource().invalidateCache();
            this.fetchLearningPlan().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
};
AddonCompetencyPlanPage.ctorParameters = () => [];
AddonCompetencyPlanPage = AddonCompetencyPlanPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-competency-plan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./plan.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/plan/plan.html")).default,
    })
], AddonCompetencyPlanPage);



/***/ }),

/***/ "./src/addons/competency/pages/planlist/planlist.ts":
/*!**********************************************************!*\
  !*** ./src/addons/competency/pages/planlist/planlist.ts ***!
  \**********************************************************/
/*! exports provided: AddonCompetencyPlanListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyPlanListPage", function() { return AddonCompetencyPlanListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _addons_competency_classes_competency_plans_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @addons/competency/classes/competency-plans-source */ "./src/addons/competency/classes/competency-plans-source.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
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
var AddonCompetencyPlanListPage_1;








/**
 * Page that displays the list of learning plans.
 */
let AddonCompetencyPlanListPage = AddonCompetencyPlanListPage_1 = class AddonCompetencyPlanListPage {
    constructor() {
        const userId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('userId');
        const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_6__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_addons_competency_classes_competency_plans_source__WEBPACK_IMPORTED_MODULE_5__["AddonCompetencyPlansSource"], [userId]);
        this.plans = new _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_7__["CoreListItemsManager"](source, AddonCompetencyPlanListPage_1);
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchLearningPlans();
            this.plans.start(this.splitView);
        });
    }
    /**
     * Fetches the learning plans and updates the view.
     *
     * @return Promise resolved when done.
     */
    fetchLearningPlans() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.plans.load();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting learning plans data.');
            }
        });
    }
    /**
     * Refreshes the learning plans.
     *
     * @param refresher Refresher.
     */
    refreshLearningPlans(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.plans.getSource().invalidateCache();
            this.plans.getSource().setDirty(true);
            this.fetchLearningPlans().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.plans.destroy();
    }
};
AddonCompetencyPlanListPage.ctorParameters = () => [];
AddonCompetencyPlanListPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__["CoreSplitViewComponent"],] }]
};
AddonCompetencyPlanListPage = AddonCompetencyPlanListPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-competency-planlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./planlist.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/planlist/planlist.html")).default,
    })
], AddonCompetencyPlanListPage);



/***/ })

}]);
//# sourceMappingURL=competency-learning-plans-lazy-module.js.map