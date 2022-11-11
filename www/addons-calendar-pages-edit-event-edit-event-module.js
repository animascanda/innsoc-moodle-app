(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-calendar-pages-edit-event-edit-event-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/edit-event/edit-event.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/edit-event/edit-event.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ title | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <form [formGroup]=\"form\" *ngIf=\"!error\" #editEventForm>\r\n            <!-- Event name. -->\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label position=\"stacked\">\r\n                    <p class=\"item-heading\" [core-mark-required]=\"true\">{{ 'addon.calendar.eventname' | translate }}</p>\r\n                </ion-label>\r\n                <ion-input type=\"text\" name=\"name\" [placeholder]=\"'addon.calendar.eventname' | translate\" formControlName=\"name\">\r\n                </ion-input>\r\n                <core-input-errors [control]=\"form.controls.name\" [errorMessages]=\"errors\"></core-input-errors>\r\n            </ion-item>\r\n\r\n            <!-- Date. -->\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label position=\"stacked\">\r\n                    <p class=\"item-heading\" [core-mark-required]=\"true\">{{ 'core.date' | translate }}</p>\r\n                </ion-label>\r\n                <ion-datetime formControlName=\"timestart\" [placeholder]=\"'core.date' | translate\" [displayFormat]=\"dateFormat\"\r\n                    [max]=\"maxDate\" [min]=\"minDate\" display-timezone=\"utc\">\r\n                </ion-datetime>\r\n                <core-input-errors [control]=\"form.controls.timestart\" [errorMessages]=\"errors\"></core-input-errors>\r\n            </ion-item>\r\n\r\n            <!-- Type. -->\r\n            <ion-item class=\"ion-text-wrap addon-calendar-eventtype-container\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\" [core-mark-required]=\"true\">{{ 'addon.calendar.eventkind' | translate }}</p>\r\n                </ion-label>\r\n                <p *ngIf=\"eventTypes.length == 1\" slot=\"end\">{{eventTypes[0].name | translate }}</p>\r\n                <ion-select *ngIf=\"eventTypes.length > 1\" formControlName=\"eventtype\" interface=\"action-sheet\"\r\n                    [interfaceOptions]=\"{header: 'addon.calendar.eventkind' | translate}\">\r\n                    <ion-select-option *ngFor=\"let type of eventTypes\" [value]=\"type.value\">\r\n                        {{ type.name | translate }}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n\r\n            <!-- Category. -->\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"typeControl.value == 'category'\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\" [core-mark-required]=\"true\">{{ 'core.category' | translate }}</p>\r\n                </ion-label>\r\n                <ion-select formControlName=\"categoryid\" interface=\"action-sheet\" [placeholder]=\"'core.noselection' | translate\"\r\n                    [interfaceOptions]=\"{header: 'core.category' | translate}\">\r\n                    <ion-select-option *ngFor=\"let category of categories\" [value]=\"category.id\">\r\n                        {{ category.name }}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n\r\n            <!-- Course. -->\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"typeControl.value == 'course'\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\" [core-mark-required]=\"true\">{{ 'core.course' | translate }}</p>\r\n                </ion-label>\r\n                <ion-select formControlName=\"courseid\" interface=\"action-sheet\" [placeholder]=\"'core.noselection' | translate\"\r\n                    [interfaceOptions]=\"{header: 'core.course' | translate}\">\r\n                    <ion-select-option *ngFor=\"let course of courses\" [value]=\"course.id\">{{ course.fullname }}</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n\r\n            <!-- Group. -->\r\n            <ng-container *ngIf=\"typeControl.value == 'group'\">\r\n                <!-- Select the course. -->\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\" [core-mark-required]=\"true\">{{ 'core.course' | translate }}</p>\r\n                    </ion-label>\r\n                    <ion-select formControlName=\"groupcourseid\" interface=\"action-sheet\" [placeholder]=\"'core.noselection' | translate\"\r\n                        (ionChange)=\"groupCourseSelected()\" [interfaceOptions]=\"{header: 'core.course' | translate}\">\r\n                        <ion-select-option *ngFor=\"let course of courses\" [value]=\"course.id\">\r\n                            {{ course.fullname }}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </ion-item>\r\n                <!-- The course has no groups. -->\r\n                <ion-item class=\"ion-text-wrap core-danger-item\" *ngIf=\"!loadingGroups && courseGroupSet && !groups.length\">\r\n                    <ion-label>\r\n                        <p>{{ 'core.coursenogroups' | translate }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <!-- Select the group. -->\r\n                <ion-item class=\"ion-text-wrap core-edit-set-group\" *ngIf=\"!loadingGroups && groups.length > 0\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\" [core-mark-required]=\"true\">{{ 'core.group' | translate }}</p>\r\n                    </ion-label>\r\n                    <ion-select formControlName=\"groupid\" interface=\"action-sheet\" [placeholder]=\"'core.noselection' | translate\"\r\n                        [interfaceOptions]=\"{header: 'core.group' | translate}\">\r\n                        <ion-select-option *ngFor=\"let group of groups\" [value]=\"group.id\">{{ group.name }}</ion-select-option>\r\n                    </ion-select>\r\n                </ion-item>\r\n                <!-- Loading groups. -->\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"loadingGroups\">\r\n                    <ion-label>\r\n                        <ion-spinner *ngIf=\"loadingGroups\" [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ng-container>\r\n\r\n            <!-- Reminders. Right now, only allow adding them here for new events. -->\r\n            <ng-container *ngIf=\"notificationsEnabled && !eventId\">\r\n                <ion-item-divider class=\"addon-calendar-reminders-title\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.calendar.reminders' | translate }}</p>\r\n                    </ion-label>\r\n                    <ion-button fill=\"clear\" (click)=\"addReminder()\" slot=\"end\"\r\n                        [attr.aria-label]=\"'addon.calendar.setnewreminder' | translate\">\r\n                        <ion-icon name=\"fas-plus\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-item-divider>\r\n                <ion-item *ngFor=\"let reminder of reminders\" class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p>{{ reminder.label }}</p>\r\n                    </ion-label>\r\n                    <ion-button fill=\"clear\" (click)=\"removeReminder(reminder)\" [attr.aria-label]=\"'core.delete' | translate\" slot=\"end\">\r\n                        <ion-icon name=\"fas-trash\" color=\"danger\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-item>\r\n            </ng-container>\r\n\r\n            <!-- Duration. -->\r\n            <div class=\"ion-text-wrap addon-calendar-radio-container\">\r\n                <ion-radio-group formControlName=\"duration\">\r\n                    <ion-item-divider class=\"addon-calendar-radio-title\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'addon.calendar.eventduration' | translate }}</p>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <p>{{ 'addon.calendar.durationnone' | translate }}</p>\r\n                        </ion-label>\r\n                        <ion-radio slot=\"end\" [value]=\"0\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <p>{{ 'addon.calendar.durationuntil' | translate }}</p>\r\n                        </ion-label>\r\n                        <ion-radio slot=\"end\" [value]=\"1\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"form.controls.duration.value === 1\">\r\n                        <ion-label position=\"stacked\"></ion-label>\r\n                        <ion-datetime formControlName=\"timedurationuntil\" [max]=\"maxDate\" [min]=\"minDate\"\r\n                            [placeholder]=\"'addon.calendar.durationuntil' | translate\" [displayFormat]=\"dateFormat\" display-timezone=\"utc\">\r\n                        </ion-datetime>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <p>{{ 'addon.calendar.durationminutes' | translate }}</p>\r\n                        </ion-label>\r\n                        <ion-radio slot=\"end\" [value]=\"2\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"form.controls.duration.value === 2\">\r\n                        <ion-label class=\"sr-only\">{{ 'addon.calendar.durationminutes' | translate }}</ion-label>\r\n                        <ion-input type=\"number\" name=\"timedurationminutes\" slot=\"end\"\r\n                            [placeholder]=\"'addon.calendar.durationminutes' | translate\" formControlName=\"timedurationminutes\"></ion-input>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </div>\r\n\r\n            <!-- Repeat (for new events). -->\r\n            <ng-container *ngIf=\"!eventId || eventId < 0\">\r\n                <ion-item class=\"ion-text-wrap divider\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.calendar.repeatevent' | translate }}</p>\r\n                    </ion-label>\r\n                    <ion-checkbox slot=\"end\" formControlName=\"repeat\"></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label position=\"stacked\">\r\n                        <p class=\"item-heading\">{{ 'addon.calendar.repeatweeksl' | translate }}</p>\r\n                    </ion-label>\r\n                    <ion-input type=\"number\" name=\"repeats\" formControlName=\"repeats\" [disabled]=\"!form.controls.repeat.value\">\r\n                    </ion-input>\r\n                </ion-item>\r\n            </ng-container>\r\n\r\n            <!-- Apply to all events or just this one (editing repeated events). -->\r\n            <div *ngIf=\"eventRepeatId\" class=\"ion-text-wrap addon-calendar-radio-container\">\r\n                <ion-radio-group formControlName=\"repeateditall\">\r\n                    <ion-item-divider class=\"addon-calendar-radio-title\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'addon.calendar.repeatedevents' | translate }}</p>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <p>{{ 'addon.calendar.repeateditall' | translate:{$a: otherEventsCount} }}</p>\r\n                        </ion-label>\r\n                        <ion-radio slot=\"end\" value=\"1\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <p>{{ 'addon.calendar.repeateditthis' | translate }}</p>\r\n                        </ion-label>\r\n                        <ion-radio slot=\"end\" value=\"0\"></ion-radio>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </div>\r\n\r\n            <!-- Description. -->\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label position=\"stacked\">\r\n                    <p class=\"item-heading\">{{ 'core.description' | translate }}</p>\r\n                </ion-label>\r\n                <core-rich-text-editor [control]=\"descriptionControl\" [attr.aria-label]=\"'core.description' | translate\"\r\n                    [placeholder]=\"'core.description' | translate\" name=\"description\" [component]=\"component\" [componentId]=\"eventId\"\r\n                    [autoSave]=\"false\"></core-rich-text-editor>\r\n            </ion-item>\r\n\r\n            <!-- Location. -->\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label position=\"stacked\">\r\n                    <p class=\"item-heading\">{{ 'core.location' | translate }}</p>\r\n                </ion-label>\r\n                <ion-input type=\"text\" name=\"location\" [placeholder]=\"'core.location' | translate\" formControlName=\"location\">\r\n                </ion-input>\r\n            </ion-item>\r\n        </form>\r\n        <div collapsible-footer appearOnBottom *ngIf=\"loaded && !error\" slot=\"fixed\">\r\n            <div class=\"list-item-limited-width adaptable-buttons-row\">\r\n                <ion-button *ngIf=\"hasOffline && eventId && eventId < 0\" expand=\"block\" fill=\"outline\" (click)=\"discard()\"\r\n                    class=\"ion-margin ion-text-wrap\">\r\n                    {{ 'core.discard' | translate }}\r\n                </ion-button>\r\n                <ion-button expand=\"block\" (click)=\"submit()\" [disabled]=\"!form.valid\" type=\"submit\" class=\"ion-margin ion-text-wrap\">\r\n                    {{ 'core.save' | translate }}\r\n                </ion-button>\r\n            </div>\r\n        </div>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/calendar/pages/edit-event/edit-event.module.ts":
/*!*******************************************************************!*\
  !*** ./src/addons/calendar/pages/edit-event/edit-event.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddonCalendarEditEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEditEventPageModule", function() { return AddonCalendarEditEventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/editor/components/components.module */ "./src/core/features/editor/components/components.module.ts");
/* harmony import */ var _edit_event_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-event.page */ "./src/addons/calendar/pages/edit-event/edit-event.page.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
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
        component: _edit_event_page__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarEditEventPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_6__["CanLeaveGuard"]],
    },
];
let AddonCalendarEditEventPageModule = class AddonCalendarEditEventPageModule {
};
AddonCalendarEditEventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreEditorComponentsModule"],
        ],
        declarations: [
            _edit_event_page__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarEditEventPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonCalendarEditEventPageModule);



/***/ }),

/***/ "./src/addons/calendar/pages/edit-event/edit-event.page.ts":
/*!*****************************************************************!*\
  !*** ./src/addons/calendar/pages/edit-event/edit-event.page.ts ***!
  \*****************************************************************/
/*! exports provided: AddonCalendarEditEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEditEventPage", function() { return AddonCalendarEditEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _features_editor_components_rich_text_editor_rich_text_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @features/editor/components/rich-text-editor/rich-text-editor */ "./src/core/features/editor/components/rich-text-editor/rich-text-editor.ts");
/* harmony import */ var _services_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/calendar */ "./src/addons/calendar/services/calendar.ts");
/* harmony import */ var _services_calendar_offline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/calendar-offline */ "./src/addons/calendar/services/calendar-offline.ts");
/* harmony import */ var _services_calendar_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/calendar-helper */ "./src/addons/calendar/services/calendar-helper.ts");
/* harmony import */ var _services_calendar_sync__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/calendar-sync */ "./src/addons/calendar/services/calendar-sync.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _features_filter_services_filter_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @features/filter/services/filter-helper */ "./src/core/features/filter/services/filter-helper.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _services_local_notifications__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @services/local-notifications */ "./src/core/services/local-notifications.ts");
/* harmony import */ var _addons_calendar_components_reminder_time_modal_reminder_time_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @addons/calendar/components/reminder-time-modal/reminder-time-modal */ "./src/addons/calendar/components/reminder-time-modal/reminder-time-modal.ts");
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
 * Page that displays a form to create/edit an event.
 */
let AddonCalendarEditEventPage = class AddonCalendarEditEventPage {
    constructor(fb) {
        this.fb = fb;
        this.title = 'addon.calendar.newevent';
        this.component = _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarProvider"].COMPONENT;
        this.loaded = false;
        this.hasOffline = false;
        this.eventTypes = [];
        this.categories = [];
        this.courses = [];
        this.groups = [];
        this.loadingGroups = false;
        this.courseGroupSet = false;
        this.error = false;
        this.otherEventsCount = 0;
        // Reminders.
        this.notificationsEnabled = false;
        this.reminders = [];
        this.types = {}; // Object with the supported types.
        this.showAll = false;
        this.isDestroyed = false;
        this.gotEventData = false;
        this.currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getRequiredCurrentSite();
        this.notificationsEnabled = _services_local_notifications__WEBPACK_IMPORTED_MODULE_21__["CoreLocalNotifications"].isAvailable();
        this.errors = {
            required: _singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant('core.required'),
        };
        // Calculate format to use. ion-datetime doesn't support escaping characters ([]), so we remove them.
        this.dateFormat = _services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].convertPHPToMoment(_singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant('core.strftimedatetimeshort'))
            .replace(/[[\]]/g, '');
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        // Initialize form variables.
        this.typeControl = this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.groupControl = this.fb.control('');
        this.descriptionControl = this.fb.control('');
        this.form.addControl('name', this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
        this.form.addControl('eventtype', this.typeControl);
        this.form.addControl('categoryid', this.fb.control(''));
        this.form.addControl('groupcourseid', this.fb.control(''));
        this.form.addControl('groupid', this.groupControl);
        this.form.addControl('description', this.descriptionControl);
        this.form.addControl('location', this.fb.control(''));
        this.form.addControl('duration', this.fb.control(0));
        this.form.addControl('timedurationminutes', this.fb.control(''));
        this.form.addControl('repeat', this.fb.control(false));
        this.form.addControl('repeats', this.fb.control('1'));
        this.form.addControl('repeateditall', this.fb.control(1));
        this.maxDate = _services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].getDatetimeDefaultMax();
        this.minDate = _services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].getDatetimeDefaultMin();
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        this.eventId = _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].getRouteNumberParam('eventId') || undefined;
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].getRouteNumberParam('courseId') || 0;
        this.title = this.eventId ? 'addon.calendar.editevent' : 'addon.calendar.newevent';
        const timestamp = _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].getRouteNumberParam('timestamp');
        const currentDate = _services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].toDatetimeFormat(timestamp);
        this.form.addControl('timestart', this.fb.control(currentDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
        this.form.addControl('timedurationuntil', this.fb.control(currentDate));
        this.form.addControl('courseid', this.fb.control(this.courseId));
        this.initReminders();
        this.fetchData().finally(() => {
            this.originalData = _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].clone(this.form.value);
            this.loaded = true;
        });
    }
    /**
     * Fetch the data needed to render the form.
     *
     * @param refresh Whether it's refreshing data.
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.error = false;
            // Get access info.
            try {
                const [types, accessInfo] = yield Promise.all([
                    _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendar"].getAllowedEventTypes(this.courseId),
                    _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(_services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendar"].getAccessInformation(this.courseId), {
                        canmanageentries: false,
                        canmanageownentries: false,
                        canmanagegroupentries: false,
                    }),
                ]);
                this.types = types;
                const promises = [];
                const eventTypes = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_14__["AddonCalendarHelper"].getEventTypeOptions(this.types);
                if (!eventTypes.length) {
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant('addon.calendar.nopermissiontoupdatecalendar'));
                }
                if (this.eventId && !this.gotEventData) {
                    // Editing an event, get the event data. Wait for sync first.
                    const eventId = this.eventId;
                    promises.push(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_15__["AddonCalendarSync"].waitForSync(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_15__["AddonCalendarSyncProvider"].SYNC_ID).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        // Do not block if the scope is already destroyed.
                        if (!this.isDestroyed && this.eventId) {
                            _services_sync__WEBPACK_IMPORTED_MODULE_6__["CoreSync"].blockOperation(_services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarProvider"].COMPONENT, eventId);
                        }
                        let eventForm;
                        // Get the event offline data if there's any.
                        try {
                            eventForm = yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_13__["AddonCalendarOffline"].getEvent(eventId);
                            this.hasOffline = true;
                        }
                        catch (_a) {
                            // No offline data.
                            this.hasOffline = false;
                        }
                        if (eventId > 0) {
                            // It's an online event. get its data from server.
                            const event = yield _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendar"].getEventById(eventId);
                            if (!eventForm) {
                                eventForm = event; // Use offline data first.
                            }
                            this.eventRepeatId = event === null || event === void 0 ? void 0 : event.repeatid;
                            if (this.eventRepeatId) {
                                this.otherEventsCount = event.eventcount ? event.eventcount - 1 : 0;
                            }
                        }
                        this.gotEventData = true;
                        if (eventForm) {
                            // Load the data in the form.
                            return this.loadEventData(eventForm, this.hasOffline);
                        }
                        return;
                    })));
                }
                if (this.types.category) {
                    // Get the categories.
                    promises.push(this.fetchCategories());
                }
                this.showAll = _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].isTrueOrOne(this.currentSite.getStoredConfig('calendar_adminseesall')) &&
                    accessInfo.canmanageentries;
                if (this.types.course || this.types.groups) {
                    promises.push(this.fetchCourses());
                }
                yield Promise.all(promises);
                if (!this.typeControl.value) {
                    // Initialize event type value. If course is allowed, select it first.
                    if (this.types.course) {
                        this.typeControl.setValue(_services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].COURSE);
                    }
                    else {
                        this.typeControl.setValue(eventTypes[0].value);
                    }
                }
                this.eventTypes = eventTypes;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting data.');
                this.error = true;
            }
        });
    }
    fetchCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.categories = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_10__["CoreCourses"].getCategories(0, true);
        });
    }
    fetchCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the courses.
            let courses = yield (this.showAll ? _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_10__["CoreCourses"].getCoursesByField() : _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_10__["CoreCourses"].getUserCourses());
            if (courses.length < 0) {
                this.courses = [];
                return;
            }
            const courseFillterFullname = (course) => _features_filter_services_filter_helper__WEBPACK_IMPORTED_MODULE_17__["CoreFilterHelper"].getFiltersAndFormatText(course.fullname, 'course', course.id)
                .then((result) => {
                course.fullname = result.text;
                return;
            }).catch(() => {
                // Ignore errors.
            });
            if (this.showAll) {
                // Remove site home from the list of courses.
                const siteHomeId = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteHomeId();
                if ('contacts' in courses[0]) {
                    courses = courses.filter((course) => course.id != siteHomeId);
                }
                else {
                    courses = courses.filter((course) => course.id != siteHomeId);
                }
            }
            // Format the name of the courses.
            if ('contacts' in courses[0]) {
                yield Promise.all(courses.map(courseFillterFullname));
            }
            else {
                yield Promise.all(courses.map(courseFillterFullname));
            }
            // Sort courses by name.
            this.courses = courses.sort((a, b) => {
                const compareA = a.fullname.toLowerCase();
                const compareB = b.fullname.toLowerCase();
                return compareA.localeCompare(compareB);
            });
        });
    }
    /**
     * Load an event data into the form.
     *
     * @param event Event data.
     * @param isOffline Whether the data is from offline or not.
     * @return Promise resolved when done.
     */
    loadEventData(event, isOffline) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!event) {
                return;
            }
            const offlineEvent = event;
            const onlineEvent = event;
            const courseId = isOffline ? offlineEvent.courseid : (_a = onlineEvent.course) === null || _a === void 0 ? void 0 : _a.id;
            this.form.controls.name.setValue(event.name);
            this.form.controls.timestart.setValue(_services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].toDatetimeFormat(event.timestart * 1000));
            this.form.controls.eventtype.setValue(event.eventtype);
            this.form.controls.categoryid.setValue(event.categoryid || '');
            this.form.controls.courseid.setValue(courseId || '');
            this.form.controls.groupcourseid.setValue(courseId || '');
            this.form.controls.groupid.setValue(event.groupid || '');
            this.form.controls.description.setValue(event.description);
            this.form.controls.location.setValue(event.location);
            if (isOffline) {
                // It's an offline event, use the data as it is.
                this.form.controls.duration.setValue(offlineEvent.duration);
                this.form.controls.timedurationuntil.setValue(_services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].toDatetimeFormat(((offlineEvent.timedurationuntil || 0) * 1000) || Date.now()));
                this.form.controls.timedurationminutes.setValue(offlineEvent.timedurationminutes || '');
                this.form.controls.repeat.setValue(!!offlineEvent.repeat);
                this.form.controls.repeats.setValue(offlineEvent.repeats || '1');
                this.form.controls.repeateditall.setValue(offlineEvent.repeateditall || 1);
            }
            else {
                // Online event, we'll have to calculate the data.
                if (onlineEvent.timeduration > 0) {
                    this.form.controls.duration.setValue(1);
                    this.form.controls.timedurationuntil.setValue(_services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].toDatetimeFormat((onlineEvent.timestart + onlineEvent.timeduration) * 1000));
                }
                else {
                    // No duration.
                    this.form.controls.duration.setValue(0);
                    this.form.controls.timedurationuntil.setValue(_services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].toDatetimeFormat());
                }
                this.form.controls.timedurationminutes.setValue('');
                this.form.controls.repeat.setValue(!!onlineEvent.repeatid);
                this.form.controls.repeats.setValue(onlineEvent.eventcount || '1');
                this.form.controls.repeateditall.setValue(1);
            }
            if (event.eventtype == _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].GROUP && courseId) {
                yield this.loadGroups(courseId);
            }
        });
    }
    /**
     * Pull to refresh.
     *
     * @param refresher Refresher.
     */
    refreshData(refresher) {
        const promises = [
            _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendar"].invalidateAccessInformation(this.courseId),
            _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendar"].invalidateAllowedEventTypes(this.courseId),
        ];
        if (this.types) {
            if (this.types.category) {
                promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_10__["CoreCourses"].invalidateCategories(0, true));
            }
            if (this.types.course || this.types.groups) {
                if (this.showAll) {
                    promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_10__["CoreCourses"].invalidateCoursesByField());
                }
                else {
                    promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_10__["CoreCourses"].invalidateUserCourses());
                }
            }
        }
        Promise.all(promises).finally(() => {
            this.fetchData().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * A course was selected, get its groups.
     */
    groupCourseSelected() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const courseId = this.form.controls.groupcourseid.value;
            if (!courseId) {
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showModalLoading();
            try {
                yield this.loadGroups(courseId);
                this.groupControl.setValue('');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting data.');
            }
            modal.dismiss();
        });
    }
    /**
     * Load groups of a certain course.
     *
     * @param courseId Course ID.
     * @return Promise resolved when done.
     */
    loadGroups(courseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingGroups = true;
            try {
                this.groups = yield _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroups"].getUserGroupsInCourse(courseId);
                this.courseGroupSet = true;
            }
            finally {
                this.loadingGroups = false;
            }
        });
    }
    selectDuration(duration) {
        this.form.controls.duration.setValue(duration);
    }
    /**
     * Create the event.
     */
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Validate data.
            const formData = this.form.value;
            const timeStartDate = _services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].convertToTimestamp(formData.timestart, true);
            const timeUntilDate = _services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].convertToTimestamp(formData.timedurationuntil, true);
            const timeDurationMinutes = parseInt(formData.timedurationminutes || '', 10);
            let error;
            if (formData.eventtype == _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].COURSE && !formData.courseid) {
                error = 'core.selectacourse';
            }
            else if (formData.eventtype == _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].GROUP && !formData.groupcourseid) {
                error = 'core.selectacourse';
            }
            else if (formData.eventtype == _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].GROUP && !formData.groupid) {
                error = 'core.selectagroup';
            }
            else if (formData.eventtype == _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].CATEGORY && !formData.categoryid) {
                error = 'core.selectacategory';
            }
            else if (formData.duration == 1 && timeStartDate > timeUntilDate) {
                error = 'addon.calendar.invalidtimedurationuntil';
            }
            else if (formData.duration == 2 && (isNaN(timeDurationMinutes) || timeDurationMinutes < 1)) {
                error = 'addon.calendar.invalidtimedurationminutes';
            }
            if (error) {
                // Show error and stop.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal(_singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant(error));
                return;
            }
            // Format the data to send.
            const data = {
                name: formData.name,
                eventtype: formData.eventtype,
                timestart: timeStartDate,
                description: {
                    text: formData.description || '',
                    format: 1,
                },
                location: formData.location,
                duration: formData.duration,
                repeat: formData.repeat,
            };
            if (formData.eventtype == _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].COURSE) {
                data.courseid = formData.courseid;
            }
            else if (formData.eventtype == _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].GROUP) {
                data.groupcourseid = formData.groupcourseid;
                data.groupid = formData.groupid;
            }
            else if (formData.eventtype == _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].CATEGORY) {
                data.categoryid = formData.categoryid;
            }
            if (formData.duration == 1) {
                data.timedurationuntil = timeUntilDate;
            }
            else if (formData.duration == 2) {
                data.timedurationminutes = formData.timedurationminutes;
            }
            if (formData.repeat) {
                data.repeats = Number(formData.repeats);
            }
            if (this.eventRepeatId) {
                data.repeatid = this.eventRepeatId;
                data.repeateditall = formData.repeateditall;
            }
            // Send the data.
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showModalLoading('core.sending', true);
            let event;
            try {
                const result = yield _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendar"].submitEvent(this.eventId, data, {
                    reminders: this.eventId ? [] : this.reminders,
                });
                event = result.event;
                _singletons_form__WEBPACK_IMPORTED_MODULE_20__["CoreForms"].triggerFormSubmittedEvent(this.formElement, result.sent, this.currentSite.getId());
                if (result.sent) {
                    // Event created or edited, invalidate right days & months.
                    const numberOfRepetitions = formData.repeat ? formData.repeats :
                        (data.repeateditall && this.otherEventsCount ? this.otherEventsCount + 1 : 1);
                    try {
                        yield _services_calendar_helper__WEBPACK_IMPORTED_MODULE_14__["AddonCalendarHelper"].refreshAfterChangeEvent(result.event, numberOfRepetitions);
                    }
                    catch (_a) {
                        // Ignore errors.
                    }
                }
                this.returnToList(event);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'Error sending data.');
            }
            modal.dismiss();
        });
    }
    /**
     * Convenience function to update or return to event list depending on device.
     *
     * @param event Event.
     */
    returnToList(event) {
        // Unblock the sync because the view will be destroyed and the sync process could be triggered before ngOnDestroy.
        this.unblockSync();
        if (this.eventId && this.eventId > 0) {
            // Editing an event.
            _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarProvider"].EDIT_EVENT_EVENT, { eventId: this.eventId }, this.currentSite.getId());
        }
        else {
            if (event) {
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarProvider"].NEW_EVENT_EVENT, {
                    eventId: event.id,
                    oldEventId: this.eventId,
                }, this.currentSite.getId());
            }
            else {
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarProvider"].NEW_EVENT_DISCARDED_EVENT, {}, this.currentSite.getId());
            }
        }
        this.originalData = undefined; // Avoid asking for confirmation.
        _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].back();
    }
    /**
     * Discard an offline saved discussion.
     */
    discard() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.eventId) {
                return;
            }
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant('core.areyousure'));
                try {
                    yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_13__["AddonCalendarOffline"].deleteEvent(this.eventId);
                    _singletons_form__WEBPACK_IMPORTED_MODULE_20__["CoreForms"].triggerFormCancelledEvent(this.formElement, this.currentSite.getId());
                    this.returnToList();
                }
                catch (_a) {
                    // Shouldn't happen.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal('Error discarding event.');
                }
            }
            catch (_b) {
                // Ignore errors
            }
        });
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved with true if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (_services_calendar_helper__WEBPACK_IMPORTED_MODULE_14__["AddonCalendarHelper"].hasEventDataChanged(this.form.value, this.originalData)) {
                // Show confirmation if some data has been modified.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant('core.confirmcanceledit'));
            }
            _singletons_form__WEBPACK_IMPORTED_MODULE_20__["CoreForms"].triggerFormCancelledEvent(this.formElement, this.currentSite.getId());
            return true;
        });
    }
    /**
     * Unblock sync.
     */
    unblockSync() {
        if (this.eventId) {
            _services_sync__WEBPACK_IMPORTED_MODULE_6__["CoreSync"].unblockOperation(_services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarProvider"].COMPONENT, this.eventId);
        }
    }
    /**
     * Init reminders.
     *
     * @return Promise resolved when done.
     */
    initReminders() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Don't init reminders when editing an event. Right now, only allow adding reminders for new events.
            if (!this.notificationsEnabled || this.eventId) {
                return;
            }
            // Check if default reminders are enabled.
            const defaultTime = yield _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendar"].getDefaultNotificationTime(this.currentSite.getId());
            if (defaultTime === 0) {
                return;
            }
            const data = _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarProvider"].convertSecondsToValueAndUnit(defaultTime);
            // Add default reminder.
            this.reminders.push({
                time: null,
                value: data.value,
                unit: data.unit,
                label: _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendar"].getUnitValueLabel(data.value, data.unit, true),
            });
        });
    }
    /**
     * Add a reminder.
     */
    addReminder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const reminderTime = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].openModal({
                component: _addons_calendar_components_reminder_time_modal_reminder_time_modal__WEBPACK_IMPORTED_MODULE_22__["AddonCalendarReminderTimeModalComponent"],
            });
            if (reminderTime === undefined) {
                // User canceled.
                return;
            }
            const data = _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarProvider"].convertSecondsToValueAndUnit(reminderTime);
            // Add reminder.
            this.reminders.push({
                time: reminderTime,
                value: data.value,
                unit: data.unit,
                label: _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendar"].getUnitValueLabel(data.value, data.unit),
            });
        });
    }
    /**
     * Remove a reminder.
     *
     * @param reminder The reminder to remove.
     */
    removeReminder(reminder) {
        const index = this.reminders.indexOf(reminder);
        if (index != -1) {
            this.reminders.splice(index, 1);
        }
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        this.unblockSync();
        this.isDestroyed = true;
    }
};
AddonCalendarEditEventPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddonCalendarEditEventPage.propDecorators = {
    descriptionEditor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_features_editor_components_rich_text_editor_rich_text_editor__WEBPACK_IMPORTED_MODULE_11__["CoreEditorRichTextEditorComponent"],] }],
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['editEventForm',] }]
};
AddonCalendarEditEventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-calendar-edit-event',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-event.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/edit-event/edit-event.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-event.scss */ "./src/addons/calendar/pages/edit-event/edit-event.scss")).default]
    })
], AddonCalendarEditEventPage);



/***/ }),

/***/ "./src/addons/calendar/pages/edit-event/edit-event.scss":
/*!**************************************************************!*\
  !*** ./src/addons/calendar/pages/edit-event/edit-event.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-calendar-eventtype-container.item-select-disabled ion-label, :host .addon-calendar-eventtype-container.item-select-disabled ion-select {\n  opacity: 1;\n}\n:host .addon-calendar-eventtype-container.item-select-disabled ion-select::part(icon) {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvY2FsZW5kYXIvcGFnZXMvZWRpdC1ldmVudC9lZGl0LWV2ZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxVQUFBO0FBRFo7QUFJUTtFQUNJLGFBQUE7QUFGWiIsImZpbGUiOiJzcmMvYWRkb25zL2NhbGVuZGFyL3BhZ2VzL2VkaXQtZXZlbnQvZWRpdC1ldmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLmFkZG9uLWNhbGVuZGFyLWV2ZW50dHlwZS1jb250YWluZXIuaXRlbS1zZWxlY3QtZGlzYWJsZWQge1xyXG4gICAgICAgIGlvbi1sYWJlbCwgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=addons-calendar-pages-edit-event-edit-event-module.js.map