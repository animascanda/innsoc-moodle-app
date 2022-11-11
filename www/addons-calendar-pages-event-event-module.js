(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-calendar-pages-event-event-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/event/event.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/event/event.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header collapsible>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1 *ngIf=\"event\">\r\n                <core-format-text [text]=\"event.name\" [contextLevel]=\"event.contextLevel\" [contextInstanceId]=\"event.contextInstanceId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <core-context-menu>\r\n                <core-context-menu-item [hidden]=\"!eventLoaded || (!hasOffline && event && !event.deleted) || !isOnline\" [priority]=\"400\"\r\n                    [content]=\"'core.settings.synchronizenow' | translate\" (action)=\"doRefresh(undefined, $event, true)\"\r\n                    [iconAction]=\"syncIcon\" [closeOnClick]=\"false\">\r\n                </core-context-menu-item>\r\n                <core-context-menu-item [hidden]=\"!event || !event.canedit || event.deleted || (!canEdit && event.id > 0)\" [priority]=\"300\"\r\n                    [content]=\"'core.edit' | translate\" (action)=\"openEdit()\" iconAction=\"fas-edit\">\r\n                </core-context-menu-item>\r\n                <core-context-menu-item [hidden]=\"!event || !event.candelete || event.deleted\" [priority]=\"200\"\r\n                    [content]=\"'core.delete' | translate\" (action)=\"deleteEvent()\" iconAction=\"fas-trash\"></core-context-menu-item>\r\n                <core-context-menu-item [hidden]=\"!event || !event.deleted\" [priority]=\"200\" [content]=\"'core.restore' | translate\"\r\n                    (action)=\"undoDelete()\" iconAction=\"fas-undo-alt\"></core-context-menu-item>\r\n            </core-context-menu>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content [core-swipe-navigation]=\"events\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!eventLoaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"eventLoaded\">\r\n        <!-- There is data to be synchronized -->\r\n        <ion-card class=\"core-warning-card\" *ngIf=\"hasOffline || (event && event.deleted)\">\r\n            <ion-item>\r\n                <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>{{ 'core.hasdatatosync' | translate:{$a: 'addon.calendar.calendarevent' | translate} }}</ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-list *ngIf=\"event\">\r\n            <ion-item class=\"ion-text-wrap addon-calendar-event\" collapsible [ngClass]=\"['addon-calendar-eventtype-'+event.eventtype]\">\r\n                <core-mod-icon *ngIf=\"event.moduleIcon\" [modicon]=\"event.moduleIcon\" [showAlt]=\"false\" [modname]=\"event.modulename\"\r\n                    [componentId]=\"event.instance\" slot=\"start\" [purpose]=\"event.purpose\"></core-mod-icon>\r\n                <ion-icon *ngIf=\" event.eventIcon && !event.moduleIcon\" [name]=\"event.eventIcon\" aria-hidden=\"true\" slot=\"start\">\r\n                </ion-icon>\r\n                <ion-label>\r\n                    <!-- Add the icon title so accessibility tools read it. -->\r\n                    <span class=\"sr-only\">\r\n                        {{ 'addon.calendar.type' + event.formattedType | translate }}\r\n                        <span class=\"sr-only\" *ngIf=\"event.moduleIcon && event.iconTitle\">{{ event.iconTitle }}</span>\r\n                    </span>\r\n                    <h1>\r\n                        <core-format-text [text]=\"event.name\" [contextLevel]=\"event.contextLevel\"\r\n                            [contextInstanceId]=\"event.contextInstanceId\">\r\n                        </core-format-text>\r\n                    </h1>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>{{ 'addon.calendar.when' | translate }}</h2>\r\n                    <core-format-text [text]=\"event.formattedtime\" [contextLevel]=\"event.contextLevel\"\r\n                        [contextInstanceId]=\"event.contextInstanceId\"></core-format-text>\r\n                </ion-label>\r\n                <ion-note slot=\"end\" *ngIf=\"event.deleted\">\r\n                    <ion-icon name=\"fas-trash\" aria-hidden=\"true\"></ion-icon> {{ 'core.deletedoffline' | translate }}\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>{{ 'addon.calendar.eventtype' | translate }}</h2>\r\n                    <p>{{ 'addon.calendar.type' + event.formattedType | translate }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"courseName\" [href]=\"courseUrl\" core-link capture=\"true\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.course' | translate}}</h2>\r\n                    <p>\r\n                        <core-format-text [text]=\"courseName\" contextLevel=\"course\" [contextInstanceId]=\"courseId\">\r\n                        </core-format-text>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap core-groupname\" *ngIf=\"groupName\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.group' | translate}}</h2>\r\n                    <p>{{ groupName }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"categoryPath\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.category' | translate}}</h2>\r\n                    <p>\r\n                        <core-format-text [text]=\"categoryPath\" contextLevel=\"coursecat\" [contextInstanceId]=\"event.categoryid\">\r\n                        </core-format-text>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"event.description\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.description' | translate}}</h2>\r\n                    <p>\r\n                        <core-format-text [text]=\"event.description\" [contextLevel]=\"event.contextLevel\"\r\n                            [contextInstanceId]=\"event.contextInstanceId\"></core-format-text>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"event.location\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.location' | translate}}</h2>\r\n                    <p>\r\n                        <a [href]=\"event.encodedLocation\" core-link auto-login=\"no\">\r\n                            <core-format-text [text]=\"event.location\" [contextLevel]=\"event.contextLevel\"\r\n                                [contextInstanceId]=\"event.contextInstanceId\"></core-format-text>\r\n                        </a>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"moduleUrl\">\r\n                <ion-label>\r\n                    <ion-button expand=\"block\" [href]=\"moduleUrl\" core-link capture=\"true\">\r\n                        {{ 'addon.calendar.gotoactivity' | translate }}\r\n                    </ion-button>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n\r\n        <ion-card *ngIf=\"notificationsEnabled && event\">\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>{{ 'addon.calendar.reminders' | translate }}</h2>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let reminder of reminders\">\r\n                <ion-item *ngIf=\"reminder.timestamp > 0\" class=\"ion-text-wrap\" [class.item-dimmed]=\"reminder.timestamp <= currentTime\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ reminder.label }}</p>\r\n                        <p *ngIf=\"reminder.sublabel\">{{ reminder.sublabel }}</p>\r\n                    </ion-label>\r\n                    <ion-button fill=\"clear\" (click)=\"cancelNotification(reminder.id, $event)\" [attr.aria-label]=\"'core.delete' | translate\"\r\n                        slot=\"end\">\r\n                        <ion-icon name=\"fas-trash\" color=\"danger\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-item>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"event.timestart > currentTime\">\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <ion-button expand=\"block\" (click)=\"addReminder()\">\r\n                            {{ 'addon.calendar.setnewreminder' | translate }}\r\n                        </ion-button>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ng-container>\r\n        </ion-card>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/calendar/pages/event/event.module.ts":
/*!*********************************************************!*\
  !*** ./src/addons/calendar/pages/event/event.module.ts ***!
  \*********************************************************/
/*! exports provided: AddonCalendarEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEventPageModule", function() { return AddonCalendarEventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/addons/calendar/components/components.module.ts");
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event.page */ "./src/addons/calendar/pages/event/event.page.ts");
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
        component: _event_page__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarEventPage"],
    },
];
let AddonCalendarEventPageModule = class AddonCalendarEventPageModule {
};
AddonCalendarEventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarComponentsModule"],
        ],
        declarations: [
            _event_page__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarEventPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonCalendarEventPageModule);



/***/ }),

/***/ "./src/addons/calendar/pages/event/event.page.ts":
/*!*******************************************************!*\
  !*** ./src/addons/calendar/pages/event/event.page.ts ***!
  \*******************************************************/
/*! exports provided: AddonCalendarEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEventPage", function() { return AddonCalendarEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/calendar */ "./src/addons/calendar/services/calendar.ts");
/* harmony import */ var _services_calendar_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/calendar-helper */ "./src/addons/calendar/services/calendar-helper.ts");
/* harmony import */ var _services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/calendar-offline */ "./src/addons/calendar/services/calendar-offline.ts");
/* harmony import */ var _services_calendar_sync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/calendar-sync */ "./src/addons/calendar/services/calendar-sync.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_local_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/local-notifications */ "./src/core/services/local-notifications.ts");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _addons_calendar_components_reminder_time_modal_reminder_time_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @addons/calendar/components/reminder-time-modal/reminder-time-modal */ "./src/addons/calendar/components/reminder-time-modal/reminder-time-modal.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _addons_calendar_classes_events_source__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @addons/calendar/classes/events-source */ "./src/addons/calendar/classes/events-source.ts");
/* harmony import */ var _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @classes/items-management/swipe-navigation-items-manager */ "./src/core/classes/items-management/swipe-navigation-items-manager.ts");
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
 * Page that displays a single calendar event.
 */
let AddonCalendarEventPage = class AddonCalendarEventPage {
    constructor(route) {
        this.route = route;
        this.eventLoaded = false;
        this.courseName = '';
        this.courseUrl = '';
        this.notificationsEnabled = false;
        this.moduleUrl = '';
        this.categoryPath = '';
        this.currentTime = -1;
        this.reminders = [];
        this.canEdit = false;
        this.hasOffline = false;
        this.isOnline = false;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_19__["CoreConstants"].ICON_LOADING; // Sync icon.
        this.notificationsEnabled = _services_local_notifications__WEBPACK_IMPORTED_MODULE_11__["CoreLocalNotifications"].isAvailable();
        this.siteHomeId = _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteHomeId();
        this.currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteId();
        // Check if site supports editing. No need to check allowed types, event.canedit already does it.
        this.canEdit = _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].canEditEventsInSite();
        // Listen for event edited. If current event is edited, reload the data.
        this.editEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarProvider"].EDIT_EVENT_EVENT, (data) => {
            if (data && data.eventId === this.eventId) {
                this.eventLoaded = false;
                this.refreshEvent(true, false);
            }
        }, this.currentSiteId);
        // Listen for event created. If user edits the data of a new offline event or it's sent to server, this event is triggered.
        this.newEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarProvider"].NEW_EVENT_EVENT, (data) => {
            if (this.eventId < 0 && data && (data.eventId === this.eventId || data.oldEventId === this.eventId)) {
                this.eventId = data.eventId;
                this.eventLoaded = false;
                this.refreshEvent(true, false);
            }
        }, this.currentSiteId);
        // Refresh data if this calendar event is synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarSyncProvider"].AUTO_SYNCED, (data) => this.checkSyncResult(false, data), this.currentSiteId);
        // Refresh data if calendar events are synchronized manually but not by this page.
        this.manualSyncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarSyncProvider"].MANUAL_SYNCED, (data) => this.checkSyncResult(true, data), this.currentSiteId);
        // Refresh online status when changes.
        this.onlineObserver = _services_network__WEBPACK_IMPORTED_MODULE_6__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_15__["NgZone"].run(() => {
                this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_6__["CoreNetwork"].isOnline();
            });
        });
        // Reload reminders if default notification time changes.
        this.defaultTimeChangedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarProvider"].DEFAULT_NOTIFICATION_TIME_CHANGED, () => {
            this.loadReminders();
        }, this.currentSiteId);
        // Set and update current time. Use a 5 seconds error margin.
        this.currentTime = _services_utils_time__WEBPACK_IMPORTED_MODULE_13__["CoreTimeUtils"].timestamp();
        this.updateCurrentTime = window.setInterval(() => {
            this.currentTime = _services_utils_time__WEBPACK_IMPORTED_MODULE_13__["CoreTimeUtils"].timestamp();
        }, 5000);
    }
    /**
     * Load reminders.
     *
     * @return Promise resolved when done.
     */
    loadReminders() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.notificationsEnabled || !this.event) {
                return;
            }
            const reminders = yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].getEventReminders(this.eventId, this.currentSiteId);
            this.reminders = yield _services_calendar_helper__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarHelper"].formatReminders(reminders, this.event.timestart, this.currentSiteId);
        });
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.eventId = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRequiredRouteNumberParam('id');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].back();
                return;
            }
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_19__["CoreConstants"].ICON_LOADING;
            yield this.initializeSwipeManager();
            yield this.fetchEvent();
        });
    }
    /**
     * Fetches the event and updates the view.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    fetchEvent(sync = false, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_6__["CoreNetwork"].isOnline();
            if (sync) {
                const deleted = yield this.syncEvents(showErrors);
                if (deleted) {
                    return;
                }
            }
            try {
                // Get the event data.
                if (this.eventId >= 0) {
                    const event = yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].getEventById(this.eventId);
                    this.event = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarHelper"].formatEventData(event);
                }
                try {
                    const offlineEvent = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarHelper"].formatOfflineEventData(yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarOffline"].getEvent(this.eventId));
                    // There is offline data, apply it.
                    this.hasOffline = true;
                    this.event = Object.assign(this.event || {}, offlineEvent);
                }
                catch (_a) {
                    // No offline data.
                    this.hasOffline = false;
                    if (this.eventId < 0) {
                        // It's an offline event, but it wasn't found. Shouldn't happen.
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal('Event not found.');
                        _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].back();
                        return;
                    }
                }
                if (!this.event) {
                    return; // At this point we should always have the event, adding this check to avoid TS errors.
                }
                // Load reminders.
                this.loadReminders();
                // Reset some of the calculated data.
                this.categoryPath = '';
                this.courseName = '';
                this.courseUrl = '';
                this.moduleUrl = '';
                if (this.event.moduleIcon) {
                    // It's a module event, translate the module name to the current language.
                    const name = _features_course_services_course__WEBPACK_IMPORTED_MODULE_12__["CoreCourse"].translateModuleName(this.event.modulename || '');
                    if (name.indexOf('core.mod_') === -1) {
                        this.event.modulename = name;
                    }
                    // Get the module URL.
                    this.moduleUrl = this.event.url || '';
                }
                const promises = [];
                const event = this.event;
                const courseId = this.event.courseid;
                if (courseId != this.siteHomeId) {
                    // If the event belongs to a course, get the course name and the URL to view it.
                    if (this.event.course) {
                        this.courseId = this.event.course.id;
                        this.courseName = this.event.course.fullname;
                        this.courseUrl = this.event.course.viewurl;
                    }
                }
                // If it's a group event, get the name of the group.
                if (courseId && this.event.groupid) {
                    promises.push(this.loadGroupName(this.event, courseId));
                }
                if (this.event.iscategoryevent && this.event.category) {
                    this.categoryPath = this.event.category.nestedname;
                }
                if (this.event.location) {
                    // Build a link to open the address in maps.
                    this.event.location = _services_utils_text__WEBPACK_IMPORTED_MODULE_9__["CoreTextUtils"].decodeHTML(this.event.location);
                    this.event.encodedLocation = _services_utils_text__WEBPACK_IMPORTED_MODULE_9__["CoreTextUtils"].buildAddressURL(this.event.location);
                }
                // Check if event was deleted in offine.
                promises.push(_services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarOffline"].isEventDeleted(this.eventId).then((deleted) => {
                    event.deleted = deleted;
                    return;
                }));
                // Re-calculate the formatted time so it uses the device date.
                promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].getCalendarTimeFormat().then((timeFormat) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    event.formattedtime = yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].formatEventTime(event, timeFormat);
                    return;
                })));
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.calendar.errorloadevent', true);
            }
            this.eventLoaded = true;
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_19__["CoreConstants"].ICON_SYNC;
        });
    }
    /**
     * Initialize swipe manager if enabled.
     */
    initializeSwipeManager() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const date = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteParam('date');
            const source = date && _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_21__["CoreRoutedItemsManagerSourcesTracker"].getSource(_addons_calendar_classes_events_source__WEBPACK_IMPORTED_MODULE_22__["AddonCalendarEventsSource"], [date]);
            if (!source) {
                return;
            }
            this.events = new AddonCalendarEventsSwipeItemsManager(source);
            yield this.events.start();
        });
    }
    /**
     * Sync offline events.
     *
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved with boolean: whether event was deleted on sync.
     */
    syncEvents(showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let deleted = false;
            // Try to synchronize offline events.
            try {
                const result = yield _services_calendar_sync__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarSync"].syncEvents();
                if (result.warnings && result.warnings.length) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                }
                if (result.deleted && result.deleted.indexOf(this.eventId) != -1) {
                    // This event was deleted during the sync.
                    deleted = true;
                }
                else if (this.eventId < 0 && result.offlineIdMap[this.eventId]) {
                    // Event was created, use the online ID.
                    this.eventId = result.offlineIdMap[this.eventId];
                }
                if (result.updated) {
                    // Trigger a manual sync event.
                    result.source = 'event';
                    _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].trigger(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarSyncProvider"].MANUAL_SYNCED, result, this.currentSiteId);
                }
            }
            catch (error) {
                if (showErrors) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                }
            }
            return deleted;
        });
    }
    /**
     * Load group name.
     *
     * @param event Event.
     * @param courseId Course ID.
     * @return Promise resolved when done.
     */
    loadGroupName(event, courseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const groups = yield _services_groups__WEBPACK_IMPORTED_MODULE_14__["CoreGroups"].getUserGroupsInCourse(courseId);
                const group = groups.find((group) => group.id == event.groupid);
                this.groupName = group ? group.name : '';
            }
            catch (_a) {
                // Error getting groups, just don't show the group name.
                this.groupName = '';
            }
        });
    }
    /**
     * Add a reminder for this event.
     */
    addReminder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.event || !this.event.id) {
                return;
            }
            const reminderTime = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openModal({
                component: _addons_calendar_components_reminder_time_modal_reminder_time_modal__WEBPACK_IMPORTED_MODULE_20__["AddonCalendarReminderTimeModalComponent"],
            });
            if (reminderTime === undefined) {
                // User canceled.
                return;
            }
            yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].addEventReminder(this.event, reminderTime, this.currentSiteId);
            yield this.loadReminders();
        });
    }
    /**
     * Cancel the selected notification.
     *
     * @param id Reminder ID.
     * @param e Click event.
     */
    cancelNotification(id, e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showDeleteConfirm();
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.deleting', true);
                try {
                    yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].deleteEventReminder(id);
                    yield this.loadReminders();
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error deleting reminder');
                }
                finally {
                    modal.dismiss();
                }
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    doRefresh(refresher, done, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.eventLoaded) {
                return;
            }
            yield this.refreshEvent(true, showErrors).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                done && done();
            });
        });
    }
    /**
     * Refresh the event.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @return Promise resolved when done.
     */
    refreshEvent(sync = false, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_19__["CoreConstants"].ICON_LOADING;
            const promises = [];
            if (this.eventId > 0) {
                promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].invalidateEvent(this.eventId));
            }
            promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].invalidateTimeFormat());
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].allPromisesIgnoringErrors(promises);
            yield this.fetchEvent(sync, showErrors);
        });
    }
    /**
     * Open the page to edit the event.
     */
    openEdit() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].navigateToSitePath(`/calendar/edit/${this.eventId}`);
    }
    /**
     * Delete the event.
     */
    deleteEvent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.event) {
                return;
            }
            const title = _singletons__WEBPACK_IMPORTED_MODULE_15__["Translate"].instant('addon.calendar.deleteevent');
            const options = {};
            let message;
            if (this.event.eventcount > 1) {
                // It's a repeated event.
                message = _singletons__WEBPACK_IMPORTED_MODULE_15__["Translate"].instant('addon.calendar.confirmeventseriesdelete', { $a: { name: this.event.name, count: this.event.eventcount } });
                options.inputs = [
                    {
                        type: 'radio',
                        name: 'deleteall',
                        checked: true,
                        value: false,
                        label: _singletons__WEBPACK_IMPORTED_MODULE_15__["Translate"].instant('addon.calendar.deleteoneevent'),
                    },
                    {
                        type: 'radio',
                        name: 'deleteall',
                        checked: false,
                        value: true,
                        label: _singletons__WEBPACK_IMPORTED_MODULE_15__["Translate"].instant('addon.calendar.deleteallevents'),
                    },
                ];
            }
            else {
                // Not repeated, display a simple confirm.
                message = _singletons__WEBPACK_IMPORTED_MODULE_15__["Translate"].instant('addon.calendar.confirmeventdelete', { $a: this.event.name });
            }
            let deleteAll = false;
            try {
                deleteAll = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(message, title, undefined, undefined, options);
            }
            catch (_a) {
                // User canceled.
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                let onlineEventDeleted = false;
                if (this.event.id < 0) {
                    yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarOffline"].deleteEvent(this.event.id);
                }
                else {
                    onlineEventDeleted = yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].deleteEvent(this.event.id, this.event.name, deleteAll);
                }
                if (onlineEventDeleted) {
                    // Event deleted, invalidate right days & months.
                    try {
                        yield _services_calendar_helper__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarHelper"].refreshAfterChangeEvent(this.event, deleteAll ? this.event.eventcount : 1);
                    }
                    catch (_b) {
                        // Ignore errors.
                    }
                }
                // Trigger an event.
                if (this.event.id < 0) {
                    _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].trigger(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarProvider"].NEW_EVENT_DISCARDED_EVENT, {}, _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteId());
                }
                else {
                    _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].trigger(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarProvider"].DELETED_EVENT_EVENT, {
                        eventId: this.eventId,
                        sent: onlineEventDeleted,
                    }, _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteId());
                }
                if (onlineEventDeleted || this.event.id < 0) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showToast('addon.calendar.eventcalendareventdeleted', true, _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["ToastDuration"].LONG);
                    // Event deleted, close the view.
                    _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].back();
                }
                else {
                    // Event deleted in offline, just mark it as deleted.
                    this.event.deleted = true;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error deleting event.');
            }
            modal.dismiss();
        });
    }
    /**
     * Undo delete the event.
     */
    undoDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.event) {
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarOffline"].unmarkDeleted(this.event.id);
                // Trigger an event.
                _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].trigger(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarProvider"].UNDELETED_EVENT_EVENT, {
                    eventId: this.eventId,
                }, _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteId());
                this.event.deleted = false;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error undeleting event.');
            }
            modal.dismiss();
        });
    }
    /**
     * Check the result of an automatic sync or a manual sync not done by this page.
     *
     * @param isManual Whether it's a manual sync.
     * @param data Sync result.
     */
    checkSyncResult(isManual, data) {
        if (!data) {
            return;
        }
        if (data.deleted && data.deleted.indexOf(this.eventId) != -1) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showToast('addon.calendar.eventcalendareventdeleted', true, _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["ToastDuration"].LONG);
            // Event was deleted, close the view.
            _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].back();
        }
        else if (data.events && (!isManual || data.source != 'event')) {
            if (this.eventId < 0) {
                if (data.offlineIdMap[this.eventId]) {
                    // Event was created, use the online ID.
                    this.eventId = data.offlineIdMap[this.eventId];
                    this.eventLoaded = false;
                    this.refreshEvent();
                }
            }
            else {
                const event = data.events.find((ev) => ev.id == this.eventId);
                if (event) {
                    this.eventLoaded = false;
                    this.refreshEvent();
                }
            }
        }
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        this.editEventObserver.off();
        this.syncObserver.off();
        this.manualSyncObserver.off();
        this.onlineObserver.unsubscribe();
        this.newEventObserver.off();
        (_a = this.events) === null || _a === void 0 ? void 0 : _a.destroy();
        clearInterval(this.updateCurrentTime);
    }
};
AddonCalendarEventPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"] }
];
AddonCalendarEventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-calendar-event',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./event.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/event/event.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../calendar-common.scss */ "./src/addons/calendar/calendar-common.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./event.scss */ "./src/addons/calendar/pages/event/event.scss")).default]
    })
], AddonCalendarEventPage);

/**
 * Helper to manage swiping within a collection of events.
 */
class AddonCalendarEventsSwipeItemsManager extends _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_23__["CoreSwipeNavigationItemsManager"] {
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        return route.params.id;
    }
}


/***/ }),

/***/ "./src/addons/calendar/pages/event/event.scss":
/*!****************************************************!*\
  !*** ./src/addons/calendar/pages/event/event.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-card ion-note {\n  font-size: 1.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvY2FsZW5kYXIvcGFnZXMvZXZlbnQvZXZlbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FkZG9ucy9jYWxlbmRhci9wYWdlcy9ldmVudC9ldmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaW9uLWNhcmQgaW9uLW5vdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

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
//# sourceMappingURL=addons-calendar-pages-event-event-module.js.map