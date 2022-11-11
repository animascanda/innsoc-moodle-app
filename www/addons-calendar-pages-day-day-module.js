(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-calendar-pages-day-day-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/day/day.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/day/day.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.calendar.calendarevents' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"openFilter()\" [attr.aria-label]=\"'core.filter' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-filter\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n            <core-context-menu>\r\n                <core-context-menu-item *ngIf=\"!selectedDayIsCurrent()\" [priority]=\"900\" [content]=\"'addon.calendar.today' | translate\"\r\n                    iconAction=\"fas-calendar-day\" (action)=\"goToCurrentDay()\">\r\n                </core-context-menu-item>\r\n                <core-context-menu-item [hidden]=\"!loaded || !selectedDayHasOffline() || !isOnline\" [priority]=\"400\"\r\n                    [content]=\"'core.settings.synchronizenow' | translate\" (action)=\"doRefresh(undefined, $event)\" [iconAction]=\"syncIcon\"\r\n                    [closeOnClick]=\"false\">\r\n                </core-context-menu-item>\r\n            </core-context-menu>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <div class=\"core-swipe-slides-container\">\r\n            <!-- Period name and arrows to navigate. -->\r\n            <ion-grid class=\"ion-no-padding safe-area-padding\">\r\n                <ion-row class=\"ion-align-items-center\">\r\n                    <ion-col class=\"ion-text-start\">\r\n                        <ion-button fill=\"clear\" (click)=\"loadPrevious()\" [attr.aria-label]=\"'addon.calendar.dayprev' | translate\">\r\n                            <ion-icon name=\"fas-chevron-left\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center addon-calendar-period\">\r\n                        <h3>{{ periodName }}</h3>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-end\">\r\n                        <ion-button fill=\"clear\" (click)=\"loadNext()\" [attr.aria-label]=\"'addon.calendar.daynext' | translate\">\r\n                            <ion-icon name=\"fas-chevron-right\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n\r\n            <core-swipe-slides [manager]=\"manager\">\r\n                <ng-template let-day=\"item\">\r\n                    <core-loading [hideUntil]=\"day.loaded\">\r\n                        <!-- There is data to be synchronized -->\r\n                        <ion-card class=\"core-warning-card list-item-limited-width\" *ngIf=\"day.hasOffline\">\r\n                            <ion-item>\r\n                                <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                                <ion-label>{{ 'core.hasdatatosync' | translate:{$a: 'core.day' | translate} }}</ion-label>\r\n                            </ion-item>\r\n                        </ion-card>\r\n\r\n                        <core-empty-box *ngIf=\"!day.filteredEvents || !day.filteredEvents.length\" icon=\"fas-calendar\"\r\n                            [message]=\"'addon.calendar.noevents' | translate\">\r\n                        </core-empty-box>\r\n\r\n                        <ion-list *ngIf=\"day.filteredEvents && day.filteredEvents.length\" class=\"list-item-limited-width\">\r\n                            <ng-container *ngFor=\"let event of day.filteredEvents\">\r\n                                <ion-card>\r\n                                    <ion-item class=\"addon-calendar-event ion-text-wrap\" [attr.aria-label]=\"event.name\"\r\n                                        (click)=\"gotoEvent(event.id, day)\" [class.item-dimmed]=\"event.ispast\"\r\n                                        [ngClass]=\"['addon-calendar-eventtype-'+event.eventtype]\" button [detail]=\"false\">\r\n                                        <core-mod-icon *ngIf=\"event.moduleIcon\" [modicon]=\"event.moduleIcon\" slot=\"start\" [showAlt]=\"false\"\r\n                                            [modname]=\"event.modulename\" [componentId]=\"event.instance\" [purpose]=\"event.purpose\">\r\n                                        </core-mod-icon>\r\n                                        <ion-icon *ngIf=\"event.eventIcon && !event.moduleIcon\" [name]=\"event.eventIcon\" slot=\"start\"\r\n                                            aria-hidden=\"true\">\r\n                                        </ion-icon>\r\n                                        <ion-label>\r\n                                            <!-- Add the icon title so accessibility tools read it. -->\r\n                                            <span class=\"sr-only\">\r\n                                                {{ 'addon.calendar.type' + event.formattedType | translate }}\r\n                                                <span class=\"sr-only\" *ngIf=\"event.moduleIcon && event.iconTitle\">{{ event.iconTitle\r\n                                                    }}</span>\r\n                                            </span>\r\n                                            <p class=\"item-heading\">\r\n                                                <core-format-text [text]=\"event.name\" [contextLevel]=\"event.contextLevel\"\r\n                                                    [contextInstanceId]=\"event.contextInstanceId\"></core-format-text>\r\n                                            </p>\r\n                                            <p [innerHTML]=\"event.formattedtime\"></p>\r\n                                        </ion-label>\r\n                                        <ion-note *ngIf=\"event.offline && !event.deleted\" slot=\"end\">\r\n                                            <ion-icon name=\"fas-clock\" aria-hidden=\"true\"></ion-icon>\r\n                                            <span class=\"ion-text-wrap\">{{ 'core.notsent' | translate }}</span>\r\n                                        </ion-note>\r\n                                        <ion-note *ngIf=\"event.deleted\" slot=\"end\">\r\n                                            <ion-icon name=\"fas-trash\" aria-hidden=\"true\"></ion-icon>\r\n                                            <span class=\"ion-text-wrap\">{{ 'core.deletedoffline' | translate }}</span>\r\n                                        </ion-note>\r\n                                    </ion-item>\r\n                                </ion-card>\r\n                            </ng-container>\r\n                        </ion-list>\r\n                    </core-loading>\r\n                </ng-template>\r\n            </core-swipe-slides>\r\n        </div>\r\n    </core-loading>\r\n\r\n    <!-- Create a calendar event. -->\r\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"canCreate && loaded\">\r\n        <ion-fab-button (click)=\"openEdit()\" [attr.aria-label]=\"'addon.calendar.newevent' | translate\">\r\n            <ion-icon name=\"fas-plus\" aria-hidden=\"true\"></ion-icon>\r\n            <span class=\"sr-only\">{{ 'addon.calendar.newevent' | translate }}</span>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/calendar/pages/day/day.module.ts":
/*!*****************************************************!*\
  !*** ./src/addons/calendar/pages/day/day.module.ts ***!
  \*****************************************************/
/*! exports provided: AddonCalendarDayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarDayPageModule", function() { return AddonCalendarDayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/addons/calendar/components/components.module.ts");
/* harmony import */ var _day_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./day.page */ "./src/addons/calendar/pages/day/day.page.ts");
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
        component: _day_page__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarDayPage"],
    },
];
let AddonCalendarDayPageModule = class AddonCalendarDayPageModule {
};
AddonCalendarDayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarComponentsModule"],
        ],
        declarations: [
            _day_page__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarDayPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonCalendarDayPageModule);



/***/ }),

/***/ "./src/addons/calendar/pages/day/day.page.ts":
/*!***************************************************!*\
  !*** ./src/addons/calendar/pages/day/day.page.ts ***!
  \***************************************************/
/*! exports provided: AddonCalendarDayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarDayPage", function() { return AddonCalendarDayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _services_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/calendar */ "./src/addons/calendar/services/calendar.ts");
/* harmony import */ var _services_calendar_offline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/calendar-offline */ "./src/addons/calendar/services/calendar-offline.ts");
/* harmony import */ var _services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/calendar-helper */ "./src/addons/calendar/services/calendar-helper.ts");
/* harmony import */ var _services_calendar_sync__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/calendar-sync */ "./src/addons/calendar/services/calendar-sync.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @features/courses/services/courses-helper */ "./src/core/features/courses/services/courses-helper.ts");
/* harmony import */ var _components_filter_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/filter/filter */ "./src/addons/calendar/components/filter/filter.ts");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _classes_items_management_swipe_slides_dynamic_items_manager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @classes/items-management/swipe-slides-dynamic-items-manager */ "./src/core/classes/items-management/swipe-slides-dynamic-items-manager.ts");
/* harmony import */ var _components_swipe_slides_swipe_slides__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @components/swipe-slides/swipe-slides */ "./src/core/components/swipe-slides/swipe-slides.ts");
/* harmony import */ var _classes_items_management_swipe_slides_dynamic_items_manager_source__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @classes/items-management/swipe-slides-dynamic-items-manager-source */ "./src/core/classes/items-management/swipe-slides-dynamic-items-manager-source.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _addons_calendar_classes_events_source__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @addons/calendar/classes/events-source */ "./src/addons/calendar/classes/events-source.ts");
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
 * Page that displays the calendar events for a certain day.
 */
let AddonCalendarDayPage = class AddonCalendarDayPage {
    constructor() {
        this.loaded = false;
        this.isOnline = false;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_18__["CoreConstants"].ICON_LOADING;
        this.filter = {
            filtered: false,
            courseId: undefined,
            categoryId: undefined,
            course: true,
            group: true,
            site: true,
            user: true,
            category: true,
        };
        this.currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
        // Listen for events added. When an event is added, reload the data.
        this.newEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].NEW_EVENT_EVENT, (data) => {
            var _a;
            if (data && data.eventId) {
                (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().markAllItemsUnloaded();
                this.refreshData(true, true);
            }
        }, this.currentSiteId);
        // Listen for new event discarded event. When it does, reload the data.
        this.discardedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].NEW_EVENT_DISCARDED_EVENT, () => {
            var _a;
            (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().markAllItemsUnloaded();
            this.refreshData(true, true);
        }, this.currentSiteId);
        // Listen for events edited. When an event is edited, reload the data.
        this.editEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].EDIT_EVENT_EVENT, (data) => {
            var _a;
            if (data && data.eventId) {
                (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().markAllItemsUnloaded();
                this.refreshData(true, true);
            }
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarSyncProvider"].AUTO_SYNCED, () => {
            var _a;
            (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().markAllItemsUnloaded();
            this.refreshData(false, true);
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized manually but not by this page.
        this.manualSyncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarSyncProvider"].MANUAL_SYNCED, (data) => {
            var _a, _b;
            const selectedDay = (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSelectedItem();
            if (data && (data.source != 'day' || !selectedDay || !data.moment || !selectedDay.moment.isSame(data.moment, 'day'))) {
                (_b = this.manager) === null || _b === void 0 ? void 0 : _b.getSource().markAllItemsUnloaded();
                this.refreshData(false, true);
            }
        }, this.currentSiteId);
        // Update the events when an event is deleted.
        this.deleteEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].DELETED_EVENT_EVENT, (data) => {
            var _a, _b;
            if (data && !data.sent) {
                // Event was deleted in offline. Just mark it as deleted, no need to refresh.
                (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().markAsDeleted(data.eventId, true);
            }
            else {
                (_b = this.manager) === null || _b === void 0 ? void 0 : _b.getSource().markAllItemsUnloaded();
                this.refreshData(false, true);
            }
        }, this.currentSiteId);
        // Listen for events "undeleted" (offline).
        this.undeleteEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].UNDELETED_EVENT_EVENT, (data) => {
            var _a;
            if (!data || !data.eventId) {
                return;
            }
            // Mark it as undeleted, no need to refresh.
            (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().markAsDeleted(data.eventId, false);
        }, this.currentSiteId);
        this.filterChangedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].FILTER_CHANGED_EVENT, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _a, _b;
            this.filter = data;
            // Course viewed has changed, check if the user can create events for this course calendar.
            yield ((_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().loadCanCreate(this.filter.courseId));
            (_b = this.manager) === null || _b === void 0 ? void 0 : _b.getSource().filterAllDayEvents(this.filter);
        }));
        // Refresh online status when changes.
        this.onlineObserver = _services_network__WEBPACK_IMPORTED_MODULE_2__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_15__["NgZone"].run(() => {
                this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_2__["CoreNetwork"].isOnline();
            });
        });
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        const types = [];
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].enumKeys(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarEventType"]).forEach((name) => {
            var _a;
            const value = _services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarEventType"][name];
            this.filter[name] = (_a = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteBooleanParam(name)) !== null && _a !== void 0 ? _a : true;
            types.push(value);
        });
        this.filter.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('courseId');
        this.filter.categoryId = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('categoryId');
        this.filter.filtered = this.filter.courseId !== undefined || types.some((name) => !this.filter[name]);
        const month = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('month');
        const source = new AddonCalendarDaySlidesItemsManagerSource(this, moment_timezone__WEBPACK_IMPORTED_MODULE_14___default()({
            year: _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('year'),
            month: month ? month - 1 : undefined,
            date: _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('day'),
        }));
        this.manager = new _classes_items_management_swipe_slides_dynamic_items_manager__WEBPACK_IMPORTED_MODULE_19__["CoreSwipeSlidesDynamicItemsManager"](source);
        this.managerUnsubscribe = this.manager.addListener({
            onSelectedItemUpdated: (item) => {
                this.onDayViewed(item);
            },
        });
        this.fetchData(true);
    }
    get canCreate() {
        var _a;
        return ((_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().canCreate) || false;
    }
    get timeFormat() {
        var _a;
        return ((_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().timeFormat) || 'core.strftimetime';
    }
    /**
     * Fetch all the data required for the view.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    fetchData(sync) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_18__["CoreConstants"].ICON_LOADING;
            this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_2__["CoreNetwork"].isOnline();
            if (sync) {
                yield this.sync();
            }
            try {
                yield ((_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().fetchData(this.filter.courseId));
                yield ((_b = this.manager) === null || _b === void 0 ? void 0 : _b.getSource().load((_c = this.manager) === null || _c === void 0 ? void 0 : _c.getSelectedItem()));
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
            }
            this.loaded = true;
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_18__["CoreConstants"].ICON_SYNC;
        });
    }
    /**
     * Update data related to day being viewed.
     *
     * @param day Day viewed.
     */
    onDayViewed(day) {
        this.periodName = _services_utils_time__WEBPACK_IMPORTED_MODULE_6__["CoreTimeUtils"].userDate(day.moment.unix() * 1000, 'core.strftimedaydate');
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @return Promise resolved when done.
     */
    doRefresh(refresher, done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.loaded) {
                return;
            }
            yield this.refreshData(true).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                done && done();
            });
        });
    }
    /**
     * Refresh the data.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param afterChange Whether the refresh is done after an event has changed or has been synced.
     * @return Promise resolved when done.
     */
    refreshData(sync, afterChange) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_18__["CoreConstants"].ICON_LOADING;
            const selectedDay = ((_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSelectedItem()) || null;
            // Don't invalidate day events after a change, it has already been handled.
            yield ((_b = this.manager) === null || _b === void 0 ? void 0 : _b.getSource().invalidateContent(selectedDay, !afterChange));
            yield this.fetchData(sync);
        });
    }
    /**
     * Try to synchronize offline events.
     *
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    sync(showErrors) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield _services_calendar_sync__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarSync"].syncEvents();
                if (result.warnings && result.warnings.length) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                }
                if (result.updated) {
                    // Trigger a manual sync event.
                    const selectedDay = (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSelectedItem();
                    result.source = 'day';
                    result.moment = selectedDay === null || selectedDay === void 0 ? void 0 : selectedDay.moment;
                    (_b = this.manager) === null || _b === void 0 ? void 0 : _b.getSource().markAllItemsUnloaded();
                    _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarSyncProvider"].MANUAL_SYNCED, result, this.currentSiteId);
                }
            }
            catch (error) {
                if (showErrors) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                }
            }
        });
    }
    /**
     * Check whether selected day is current day.
     */
    selectedDayIsCurrent() {
        var _a, _b;
        return !!((_b = (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSelectedItem()) === null || _b === void 0 ? void 0 : _b.isCurrentDay);
    }
    /**
     * Navigate to a particular event.
     *
     * @param eventId Event to load.
     * @param day Day.
     */
    gotoEvent(eventId, day) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].navigateToSitePath(`/calendar/event/${eventId}`, { params: { date: day.moment.format('MMDDY') } });
    }
    /**
     * Show the filter menu.
     */
    openFilter() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].openSideModal({
                component: _components_filter_filter__WEBPACK_IMPORTED_MODULE_13__["AddonCalendarFilterComponent"],
                componentProps: {
                    courses: (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().courses,
                    filter: this.filter,
                },
            });
        });
    }
    /**
     * Open page to create/edit an event.
     *
     * @param eventId Event ID to edit.
     */
    openEdit(eventId) {
        var _a;
        const params = {};
        if (!eventId) {
            // It's a new event, set the time.
            eventId = 0;
            const selectedDay = (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSelectedItem();
            if (selectedDay) {
                // Use current time but in the specified day.
                const now = moment_timezone__WEBPACK_IMPORTED_MODULE_14___default()();
                params.timestamp = selectedDay.moment.clone().set({ hour: now.hour(), minute: now.minute() }).unix() * 1000;
            }
        }
        if (this.filter.courseId) {
            params.courseId = this.filter.courseId;
        }
        _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].navigateToSitePath(`/calendar/edit/${eventId}`, { params });
    }
    /**
     * Check whether selected day has offline data.
     *
     * @return Whether selected day has offline data.
     */
    selectedDayHasOffline() {
        var _a;
        const selectedDay = (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSelectedItem();
        return !!(selectedDay === null || selectedDay === void 0 ? void 0 : selectedDay.hasOffline);
    }
    /**
     * Go to current day.
     */
    goToCurrentDay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const manager = this.manager;
            const slides = this.slides;
            if (!manager || !slides) {
                return;
            }
            const currentDay = {
                moment: moment_timezone__WEBPACK_IMPORTED_MODULE_14___default()(),
            };
            this.loaded = false;
            try {
                // Make sure the day is loaded.
                yield manager.getSource().loadItem(currentDay);
                slides.slideToItem(currentDay);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Load next day.
     */
    loadNext() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (_a = this.slides) === null || _a === void 0 ? void 0 : _a.slideNext();
        });
    }
    /**
     * Load previous day.
     */
    loadPrevious() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (_a = this.slides) === null || _a === void 0 ? void 0 : _a.slidePrev();
        });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        (_a = this.newEventObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.discardedObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.editEventObserver) === null || _c === void 0 ? void 0 : _c.off();
        (_d = this.deleteEventObserver) === null || _d === void 0 ? void 0 : _d.off();
        (_e = this.undeleteEventObserver) === null || _e === void 0 ? void 0 : _e.off();
        (_f = this.syncObserver) === null || _f === void 0 ? void 0 : _f.off();
        (_g = this.manualSyncObserver) === null || _g === void 0 ? void 0 : _g.off();
        (_h = this.onlineObserver) === null || _h === void 0 ? void 0 : _h.unsubscribe();
        (_j = this.filterChangedObserver) === null || _j === void 0 ? void 0 : _j.off();
        (_k = this.manager) === null || _k === void 0 ? void 0 : _k.getSource().forgetRelatedSources();
        (_l = this.manager) === null || _l === void 0 ? void 0 : _l.destroy();
        this.managerUnsubscribe && this.managerUnsubscribe();
    }
};
AddonCalendarDayPage.ctorParameters = () => [];
AddonCalendarDayPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_swipe_slides_swipe_slides__WEBPACK_IMPORTED_MODULE_20__["CoreSwipeSlidesComponent"],] }]
};
AddonCalendarDayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-calendar-day',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./day.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/day/day.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../calendar-common.scss */ "./src/addons/calendar/calendar-common.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./day.scss */ "./src/addons/calendar/pages/day/day.scss")).default]
    })
], AddonCalendarDayPage);

/**
 * Helper to manage swiping within days.
 */
class AddonCalendarDaySlidesItemsManagerSource extends _classes_items_management_swipe_slides_dynamic_items_manager_source__WEBPACK_IMPORTED_MODULE_21__["CoreSwipeSlidesDynamicItemsManagerSource"] {
    constructor(page, initialMoment) {
        super({ moment: initialMoment });
        this.courses = [];
        this.eventsSources = new Set();
        // Offline events classified in month & day.
        this.offlineEvents = {};
        this.offlineEditedEventsIds = []; // IDs of events edited in offline.
        this.canCreate = false;
        this.dayPage = page;
    }
    /**
     * Fetch data.
     *
     * @param courseId Current selected course id (if any).
     * @return Promise resolved when done.
     */
    fetchData(courseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Promise.all([
                this.loadCourses(courseId),
                this.loadCanCreate(courseId),
                this.loadCategories(),
                this.loadOfflineEvents(),
                this.loadOfflineDeletedEvents(),
                this.loadTimeFormat(),
            ]);
        });
    }
    /**
     * Filter all loaded days events based on the filter popover.
     *
     * @param filter Filter to apply.
     */
    filterAllDayEvents(filter) {
        var _a;
        (_a = this.getItems()) === null || _a === void 0 ? void 0 : _a.forEach(day => this.filterEvents(day, filter));
    }
    /**
     * Filter events of a certain day based on the filter popover.
     *
     * @param day Day with the events.
     * @param filter Filter to apply.
     */
    filterEvents(day, filter) {
        day.filteredEvents = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarHelper"].getFilteredEvents(day.events || [], filter, this.categories || {});
        this.rememberEventsList(day);
    }
    /**
     * Load courses.
     *
     * @param courseId Current selected course id (if any).
     * @return Promise resolved when done.
     */
    loadCourses(courseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield _features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_12__["CoreCoursesHelper"].getCoursesForPopover(courseId);
            this.courses = data.courses;
        });
    }
    /**
     * Load whether user can create events.
     *
     * @param courseId Current selected course id (if any).
     * @return Promise resolved when done.
     */
    loadCanCreate(courseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.canCreate = yield _services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarHelper"].canEditEvents(courseId);
        });
    }
    /**
     * Load categories to be able to filter events.
     *
     * @return Promise resolved when done.
     */
    loadCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.categories) {
                // Already retrieved, stop.
                return;
            }
            try {
                const categories = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_11__["CoreCourses"].getCategories(0, true);
                // Index categories by ID.
                this.categories = _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].arrayToObject(categories, 'id');
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * Load events created or edited in offline.
     *
     * @return Promise resolved when done.
     */
    loadOfflineEvents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get offline events.
            const events = yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarOffline"].getAllEditedEvents();
            // Classify them by month & day.
            this.offlineEvents = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarHelper"].classifyIntoMonths(events);
            // Get the IDs of events edited in offline.
            this.offlineEditedEventsIds = events.filter((event) => event.id > 0).map((event) => event.id);
        });
    }
    /**
     * Load events deleted in offline.
     *
     * @return Promise resolved when done.
     */
    loadOfflineDeletedEvents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const deletedEventsIds = yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarOffline"].getAllDeletedEventsIds();
            this.deletedEvents = new Set(deletedEventsIds);
        });
    }
    /**
     * Load time format.
     *
     * @return Promise resolved when done.
     */
    loadTimeFormat() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.timeFormat = yield _services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendar"].getCalendarTimeFormat();
        });
    }
    /**
     * @inheritdoc
     */
    getItemId(item) {
        return _services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarHelper"].getDayId(item.moment);
    }
    /**
     * @inheritdoc
     */
    getPreviousItem(item) {
        return {
            moment: item.moment.clone().subtract(1, 'day'),
        };
    }
    /**
     * @inheritdoc
     */
    getNextItem(item) {
        return {
            moment: item.moment.clone().add(1, 'day'),
        };
    }
    /**
     * @inheritdoc
     */
    loadItemData(day, preload = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const preloadedDay = Object.assign(Object.assign({}, day), { hasOffline: false, events: [], onlineEvents: [], filteredEvents: [], isCurrentDay: day.moment.isSame(moment_timezone__WEBPACK_IMPORTED_MODULE_14___default()(), 'day'), isPastDay: day.moment.isBefore(moment_timezone__WEBPACK_IMPORTED_MODULE_14___default()(), 'day') });
            if (preload) {
                return preloadedDay;
            }
            let result;
            try {
                // Don't pass courseId and categoryId, we'll filter them locally.
                result = yield _services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendar"].getDayEvents(day.moment.year(), day.moment.month() + 1, day.moment.date());
                preloadedDay.onlineEvents = result.events.map((event) => _services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarHelper"].formatEventData(event));
            }
            catch (error) {
                // Allow navigating to non-cached days in offline (behave as if using emergency cache).
                if (_services_network__WEBPACK_IMPORTED_MODULE_2__["CoreNetwork"].isOnline()) {
                    throw error;
                }
            }
            // Merge the online events with offline data.
            preloadedDay.events = this.mergeEvents(preloadedDay);
            // Filter events by course.
            this.filterEvents(preloadedDay, this.dayPage.filter);
            // Re-calculate the formatted time so it uses the device date.
            const dayTime = day.moment.unix() * 1000;
            const currentTime = _services_utils_time__WEBPACK_IMPORTED_MODULE_6__["CoreTimeUtils"].timestamp();
            const promises = preloadedDay.events.map((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                event.ispast = preloadedDay.isPastDay || (preloadedDay.isCurrentDay && this.isEventPast(event, currentTime));
                event.formattedtime = yield _services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendar"].formatEventTime(event, this.dayPage.timeFormat, true, dayTime);
            }));
            yield Promise.all(promises);
            return preloadedDay;
        });
    }
    /**
     * Returns if the event is in the past or not.
     *
     * @param event Event object.
     * @param currentTime Current time.
     * @return True if it's in the past.
     */
    isEventPast(event, currentTime) {
        return (event.timestart + event.timeduration) < currentTime;
    }
    /**
     * Merge online events with the offline events of that period.
     *
     * @param day Day with the events.
     * @return Merged events.
     */
    mergeEvents(day) {
        var _a, _b, _c;
        day.hasOffline = false;
        if (!Object.keys(this.offlineEvents).length && !((_a = this.deletedEvents) === null || _a === void 0 ? void 0 : _a.size)) {
            // No offline events, nothing to merge.
            return day.onlineEvents || [];
        }
        const monthOfflineEvents = this.offlineEvents[_services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarHelper"].getMonthId(day.moment)];
        const dayOfflineEvents = monthOfflineEvents && monthOfflineEvents[day.moment.date()];
        let result = day.onlineEvents || [];
        if ((_b = this.deletedEvents) === null || _b === void 0 ? void 0 : _b.size) {
            // Mark as deleted the events that were deleted in offline.
            result.forEach((event) => {
                var _a;
                event.deleted = (_a = this.deletedEvents) === null || _a === void 0 ? void 0 : _a.has(event.id);
                if (event.deleted) {
                    day.hasOffline = true;
                }
            });
        }
        if (this.offlineEditedEventsIds.length) {
            // Remove the online events that were modified in offline.
            result = result.filter((event) => this.offlineEditedEventsIds.indexOf(event.id) == -1);
            if (result.length != ((_c = day.onlineEvents) === null || _c === void 0 ? void 0 : _c.length)) {
                day.hasOffline = true;
            }
        }
        if (dayOfflineEvents && dayOfflineEvents.length) {
            // Add the offline events (either new or edited).
            day.hasOffline = true;
            result = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarHelper"].sortEvents(result.concat(dayOfflineEvents));
        }
        return result;
    }
    /**
     * Invalidate content.
     *
     * @param selectedDay The current selected day.
     * @param invalidateDayEvents Whether to invalidate selected day events.
     * @return Promise resolved when done.
     */
    invalidateContent(selectedDay, invalidateDayEvents) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            if (invalidateDayEvents && selectedDay) {
                promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendar"].invalidateDayEvents(selectedDay.moment.year(), selectedDay.moment.month() + 1, selectedDay.moment.date()));
            }
            promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendar"].invalidateAllowedEventTypes());
            promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_11__["CoreCourses"].invalidateCategories(0, true));
            promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendar"].invalidateTimeFormat());
            this.categories = undefined; // Get categories again.
            if (selectedDay) {
                selectedDay.dirty = true;
            }
            yield Promise.all(promises);
        });
    }
    /**
     * Find an event and mark it as deleted.
     *
     * @param eventId Event ID.
     * @param deleted Whether to mark it as deleted or not.
     */
    markAsDeleted(eventId, deleted) {
        var _a, _b, _c;
        // Mark the event as deleted or not.
        (_a = this.getItems()) === null || _a === void 0 ? void 0 : _a.some(day => {
            var _a, _b, _c, _d;
            const event = (_a = day.onlineEvents) === null || _a === void 0 ? void 0 : _a.find((event) => event.id == eventId);
            if (!event) {
                return false;
            }
            event.deleted = deleted;
            if (deleted) {
                day.hasOffline = true;
            }
            else {
                // Re-calculate "hasOffline".
                day.hasOffline = ((_b = day.events) === null || _b === void 0 ? void 0 : _b.length) != ((_c = day.onlineEvents) === null || _c === void 0 ? void 0 : _c.length) || ((_d = day.events) === null || _d === void 0 ? void 0 : _d.some((event) => event.deleted || event.offline));
            }
            return true;
        });
        // Add it or remove it from the list of deleted events.
        if (deleted) {
            (_b = this.deletedEvents) === null || _b === void 0 ? void 0 : _b.add(eventId);
        }
        else {
            (_c = this.deletedEvents) === null || _c === void 0 ? void 0 : _c.delete(eventId);
        }
    }
    /**
     * Forget other sources that where created whilst using this one.
     */
    forgetRelatedSources() {
        for (const source of this.eventsSources) {
            _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_22__["CoreRoutedItemsManagerSourcesTracker"].removeReference(source, this);
        }
    }
    /**
     * Remember the list of events in a day to be used in a different context.
     *
     * @param day Day containing the events list.
     */
    rememberEventsList(day) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_22__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_addons_calendar_classes_events_source__WEBPACK_IMPORTED_MODULE_23__["AddonCalendarEventsSource"], [
                day.moment.format('MMDDY'),
            ]);
            if (!this.eventsSources.has(source)) {
                this.eventsSources.add(source);
                _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_22__["CoreRoutedItemsManagerSourcesTracker"].addReference(source, this);
            }
            source.setEvents((_a = day.filteredEvents) !== null && _a !== void 0 ? _a : []);
            yield source.reload();
        });
    }
}


/***/ }),

/***/ "./src/addons/calendar/pages/day/day.scss":
/*!************************************************!*\
  !*** ./src/addons/calendar/pages/day/day.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .core-swipe-slides-container ion-grid {\n  flex: none;\n  width: 100%;\n}\n:host .addon-calendar-period {\n  flex-grow: 3;\n}\n:host .addon-calendar-period h3 {\n  margin-top: 10px;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvY2FsZW5kYXIvcGFnZXMvZGF5L2RheS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFBUjtBQUdJO0VBQ0ksWUFBQTtBQURSO0FBRVE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQVoiLCJmaWxlIjoic3JjL2FkZG9ucy9jYWxlbmRhci9wYWdlcy9kYXkvZGF5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAuY29yZS1zd2lwZS1zbGlkZXMtY29udGFpbmVyIGlvbi1ncmlkIHtcclxuICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGRvbi1jYWxlbmRhci1wZXJpb2Qge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMztcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=addons-calendar-pages-day-day-module.js.map