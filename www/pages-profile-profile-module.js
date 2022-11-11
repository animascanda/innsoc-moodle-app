(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/profile/profile.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/profile/profile.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ user?.fullname }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content [core-swipe-navigation]=\"users\" class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!userLoaded\" (ionRefresh)=\"refreshUser($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"userLoaded\">\r\n        <ion-list *ngIf=\"user && !isDeleted && isEnrolled\">\r\n            <ion-item class=\"ion-text-center core-user-profile-maininfo ion-text-wrap\">\r\n                <core-user-avatar [user]=\"user\" [userId]=\"user.id\" [linkProfile]=\"false\" [checkOnline]=\"true\">\r\n                </core-user-avatar>\r\n                <ion-label>\r\n                    <h2>{{ user.fullname }}</h2>\r\n                    <p *ngIf=\"user.address\">\r\n                        <ion-icon name=\"fas-map-marker-alt\" [attr.aria-hidden]=\"true\"></ion-icon> {{ user.address }}\r\n                    </p>\r\n                    <p *ngIf=\"rolesFormatted\">\r\n                        <strong>{{ 'core.user.roles' | translate}}</strong>{{'core.labelsep' | translate}}\r\n                        {{ rolesFormatted }}\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <div class=\"core-user-communication-handlers\"\r\n                *ngIf=\"(communicationHandlers && communicationHandlers.length) || isLoadingHandlers\">\r\n                <ion-item *ngIf=\"communicationHandlers && communicationHandlers.length\">\r\n                    <ion-label>\r\n                        <ion-button *ngFor=\"let handler of communicationHandlers\" expand=\"block\" size=\"default\"\r\n                            [ngClass]=\"['core-user-profile-handler', handler.class || '']\" (click)=\"handlerClicked($event, handler)\"\r\n                            [hidden]=\"handler.hidden\" [attr.aria-label]=\"handler.title | translate\" [disabled]=\"handler.spinner\">\r\n                            <ion-icon *ngIf=\"handler.icon\" [name]=\"handler.icon\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                            {{ handler.title | translate }}\r\n                        </ion-button>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <div *ngIf=\"isLoadingHandlers\" class=\"ion-text-center core-loading-handlers\">\r\n                    <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n                </div>\r\n            </div>\r\n            <ion-item button class=\"ion-text-wrap core-user-profile-handler\" (click)=\"openUserDetails()\"\r\n                [attr.aria-label]=\"'core.user.details' | translate\" detail=\"true\">\r\n                <ion-icon name=\"fas-user\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'core.user.details' | translate }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-center core-loading-handlers\" *ngIf=\"isLoadingHandlers\">\r\n                <ion-label>\r\n                    <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item button *ngFor=\"let handler of newPageHandlers\" class=\"ion-text-wrap\" (click)=\"handlerClicked($event, handler)\"\r\n                [ngClass]=\"['core-user-profile-handler', handler.class || '']\" [hidden]=\"handler.hidden\"\r\n                [attr.aria-label]=\"handler.title | translate\" detail=\"true\">\r\n                <ion-icon *ngIf=\"handler.icon\" [name]=\"handler.icon\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ handler.title | translate }}</p>\r\n                </ion-label>\r\n                <ion-badge slot=\"end\" *ngIf=\"handler.showBadge\" [hidden]=\"handler.loading || !handler.badge\" aria-hidden=\"true\">\r\n                    {{handler.badge}}\r\n                </ion-badge>\r\n                <span *ngIf=\"handler.showBadge && handler.badge && handler.badgeA11yText\" class=\"sr-only\">\r\n                    {{ handler.badgeA11yText | translate: {$a : handler.badge } }}\r\n                </span>\r\n                <ion-spinner slot=\"end\" *ngIf=\"handler.showBadge && handler.loading\" [attr.aria-label]=\"'core.loading' | translate\">\r\n                </ion-spinner>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"actionHandlers && actionHandlers.length\">\r\n                <ion-label>\r\n                    <ion-button *ngFor=\"let handler of actionHandlers\" expand=\"block\" fill=\"outline\" size=\"default\"\r\n                        [ngClass]=\"['core-user-profile-handler', handler.class || '']\" (click)=\"handlerClicked($event, handler)\"\r\n                        [hidden]=\"handler.hidden\" [attr.aria-label]=\"handler.title | translate\" [disabled]=\"handler.spinner\">\r\n                        <ion-icon *ngIf=\"handler.icon\" [name]=\"handler.icon\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                        {{ handler.title | translate }}\r\n                        <ion-spinner *ngIf=\"handler.spinner\" slot=\"end\" [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n                    </ion-button>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n        <core-empty-box *ngIf=\"!user && !isDeleted && isEnrolled\" icon=\"far-user\" [message]=\" 'core.user.detailsnotavailable' | translate\">\r\n        </core-empty-box>\r\n        <core-empty-box *ngIf=\"isDeleted\" icon=\"far-user\" [message]=\"'core.userdeleted' | translate\"></core-empty-box>\r\n        <core-empty-box *ngIf=\"isSuspended\" icon=\"far-user\" [message]=\"'core.usersuspended' | translate\"></core-empty-box>\r\n        <core-empty-box *ngIf=\"!isEnrolled\" icon=\"far-user\" [message]=\"'core.notenrolledprofile' | translate\"></core-empty-box>\r\n    </core-loading>\r\n</ion-content>\r\n");

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


/***/ }),

/***/ "./src/core/features/user/pages/profile/profile.module.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/user/pages/profile/profile.module.ts ***!
  \****************************************************************/
/*! exports provided: CoreUserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserProfilePageModule", function() { return CoreUserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.page */ "./src/core/features/user/pages/profile/profile.page.ts");
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
        component: _profile_page__WEBPACK_IMPORTED_MODULE_4__["CoreUserProfilePage"],
    },
];
let CoreUserProfilePageModule = class CoreUserProfilePageModule {
};
CoreUserProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _profile_page__WEBPACK_IMPORTED_MODULE_4__["CoreUserProfilePage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreUserProfilePageModule);



/***/ }),

/***/ "./src/core/features/user/pages/profile/profile.page.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/user/pages/profile/profile.page.ts ***!
  \**************************************************************/
/*! exports provided: CoreUserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserProfilePage", function() { return CoreUserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/user/services/user-helper */ "./src/core/features/user/services/user-helper.ts");
/* harmony import */ var _features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user-delegate */ "./src/core/features/user/services/user-delegate.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @classes/items-management/swipe-navigation-items-manager */ "./src/core/classes/items-management/swipe-navigation-items-manager.ts");
/* harmony import */ var _features_user_classes_participants_source__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @features/user/classes/participants-source */ "./src/core/features/user/classes/participants-source.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
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















let CoreUserProfilePage = class CoreUserProfilePage {
    constructor(route) {
        this.route = route;
        this.fetchSuccess = false;
        this.userLoaded = false;
        this.isLoadingHandlers = false;
        this.isDeleted = false;
        this.isSuspended = false;
        this.isEnrolled = true;
        this.actionHandlers = [];
        this.newPageHandlers = [];
        this.communicationHandlers = [];
        this.obsProfileRefreshed = _singletons_events__WEBPACK_IMPORTED_MODULE_5__["CoreEvents"].on(_features_user_services_user__WEBPACK_IMPORTED_MODULE_6__["USER_PROFILE_REFRESHED"], (data) => {
            if (!this.user || !data.user) {
                return;
            }
            this.user.email = data.user.email;
            this.user.address = _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_7__["CoreUserHelper"].formatAddress('', data.user.city, data.user.country);
        }, _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteId());
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.site = _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getRequiredCurrentSite();
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('courseId');
                this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRequiredRouteNumberParam('userId');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].back();
                return;
            }
            if (this.courseId === this.site.getSiteHomeId()) {
                // Get site profile.
                this.courseId = undefined;
            }
            if (this.courseId && this.route.snapshot.data.swipeManagerSource === 'participants') {
                const search = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('search');
                const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_14__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_features_user_classes_participants_source__WEBPACK_IMPORTED_MODULE_13__["CoreUserParticipantsSource"], [this.courseId, search]);
                this.users = new CoreUserSwipeItemsManager(source);
                this.users.start();
            }
            try {
                yield this.fetchUser();
            }
            finally {
                this.userLoaded = true;
            }
        });
    }
    /**
     * Fetches the user and updates the view.
     */
    fetchUser() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_6__["CoreUser"].getProfile(this.userId, this.courseId);
                user.address = _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_7__["CoreUserHelper"].formatAddress('', user.city, user.country);
                this.rolesFormatted = 'roles' in user ? _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_7__["CoreUserHelper"].formatRoleList(user.roles) : '';
                this.user = user;
                // If there's already a subscription, unsubscribe because we'll get a new one.
                (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
                const context = this.courseId ? _features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_8__["CoreUserDelegateContext"].COURSE : _features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_8__["CoreUserDelegateContext"].SITE;
                this.subscription = _features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_8__["CoreUserDelegate"].getProfileHandlersFor(user, context, this.courseId).subscribe((handlers) => {
                    this.actionHandlers = [];
                    this.newPageHandlers = [];
                    this.communicationHandlers = [];
                    handlers.forEach((handler) => {
                        switch (handler.type) {
                            case _features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_8__["CoreUserDelegateService"].TYPE_COMMUNICATION:
                                this.communicationHandlers.push(handler.data);
                                break;
                            case _features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_8__["CoreUserDelegateService"].TYPE_ACTION:
                                this.actionHandlers.push(handler.data);
                                break;
                            case _features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_8__["CoreUserDelegateService"].TYPE_NEW_PAGE:
                            default:
                                this.newPageHandlers.push(handler.data);
                                break;
                        }
                    });
                    this.isLoadingHandlers = !_features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_8__["CoreUserDelegate"].areHandlersLoaded(user.id, context, this.courseId);
                });
                if (!this.fetchSuccess) {
                    this.fetchSuccess = true;
                    try {
                        yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_6__["CoreUser"].logView(this.userId, this.courseId, this.user.fullname);
                    }
                    catch (error) {
                        this.isDeleted = (error === null || error === void 0 ? void 0 : error.errorcode) === 'userdeleted' || (error === null || error === void 0 ? void 0 : error.errorcode) === 'wsaccessuserdeleted';
                        this.isSuspended = (error === null || error === void 0 ? void 0 : error.errorcode) === 'wsaccessusersuspended';
                        this.isEnrolled = (error === null || error === void 0 ? void 0 : error.errorcode) !== 'notenrolledprofile';
                    }
                }
            }
            catch (error) {
                // Error is null for deleted users, do not show the modal.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(error);
            }
        });
    }
    /**
     * Refresh the user.
     *
     * @param event Event.
     * @return Promise resolved when done.
     */
    refreshUser(event) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(Promise.all([
                _features_user_services_user__WEBPACK_IMPORTED_MODULE_6__["CoreUser"].invalidateUserCache(this.userId),
                _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_11__["CoreCourses"].invalidateUserNavigationOptions(),
                _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_11__["CoreCourses"].invalidateUserAdministrationOptions(),
            ]));
            yield this.fetchUser();
            event === null || event === void 0 ? void 0 : event.complete();
            if (this.user) {
                _singletons_events__WEBPACK_IMPORTED_MODULE_5__["CoreEvents"].trigger(_features_user_services_user__WEBPACK_IMPORTED_MODULE_6__["USER_PROFILE_REFRESHED"], {
                    courseId: this.courseId,
                    userId: this.userId,
                    user: this.user,
                }, (_a = this.site) === null || _a === void 0 ? void 0 : _a.getId());
            }
        });
    }
    /**
     * Open the page with the user details.
     */
    openUserDetails() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].navigateToSitePath('user/about', {
            params: {
                courseId: this.courseId,
                userId: this.userId,
            },
        });
    }
    /**
     * A handler was clicked.
     *
     * @param event Click event.
     * @param handler Handler that was clicked.
     */
    handlerClicked(event, handler) {
        if (!this.user) {
            return;
        }
        const context = this.courseId ? _features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_8__["CoreUserDelegateContext"].COURSE : _features_user_services_user_delegate__WEBPACK_IMPORTED_MODULE_8__["CoreUserDelegateContext"].SITE;
        handler.action(event, this.user, context, this.courseId);
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a, _b;
        (_a = this.users) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.subscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        this.obsProfileRefreshed.off();
    }
};
CoreUserProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
CoreUserProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-core-user-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/profile/profile.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.scss */ "./src/core/features/user/pages/profile/profile.scss")).default]
    })
], CoreUserProfilePage);

/**
 * Helper to manage swiping within a collection of users.
 */
class CoreUserSwipeItemsManager extends _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_12__["CoreSwipeNavigationItemsManager"] {
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        return route.params.userId;
    }
}


/***/ }),

/***/ "./src/core/features/user/pages/profile/profile.scss":
/*!***********************************************************!*\
  !*** ./src/core/features/user/pages/profile/profile.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .core-user-profile-maininfo::part(native) {\n  flex-direction: column;\n}\n:host ::ng-deep core-user-avatar {\n  display: block;\n  --core-avatar-size: var(--core-large-avatar-size);\n  height: calc(var(--core-avatar-size) + 16px);\n}\n:host ::ng-deep core-user-avatar img {\n  margin: 8px auto;\n}\n:host ::ng-deep core-user-avatar .contact-status {\n  width: 24px !important;\n  height: 24px !important;\n  right: calc(50% - 12px - var(--core-avatar-size) / 2) !important;\n}\n:host-context([dir=rtl]) ::ng-deep core-user-avatar .edit-avatar {\n  left: -24px;\n  right: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL3VzZXIvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxzQkFBQTtBQURSO0FBSVE7RUFDSSxjQUFBO0VBQ0EsaURBQUE7RUFDQSw0Q0FBQTtBQUZaO0FBSVk7RUFDSSxnQkFBQTtBQUZoQjtBQUtZO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdFQUFBO0FBSGhCO0FBVUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVBKIiwiZmlsZSI6InNyYy9jb3JlL2ZlYXR1cmVzL3VzZXIvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gICAgLmNvcmUtdXNlci1wcm9maWxlLW1haW5pbmZvOjpwYXJ0KG5hdGl2ZSkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAge1xyXG4gICAgICAgIGNvcmUtdXNlci1hdmF0YXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgLS1jb3JlLWF2YXRhci1zaXplOiB2YXIoLS1jb3JlLWxhcmdlLWF2YXRhci1zaXplKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNvcmUtYXZhdGFyLXNpemUpICsgMTZweCk7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRhY3Qtc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBjYWxjKDUwJSAtIDEycHggLSB2YXIoLS1jb3JlLWF2YXRhci1zaXplKSAvIDIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KFtkaXI9XCJydGxcIl0pIDo6bmctZGVlcCBjb3JlLXVzZXItYXZhdGFyIC5lZGl0LWF2YXRhciB7XHJcbiAgICBsZWZ0OiAtMjRweDtcclxuICAgIHJpZ2h0OiB1bnNldDtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map