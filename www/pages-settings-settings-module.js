(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/settings/settings.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/settings/settings.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.messages.messages' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!preferencesLoaded\" (ionRefresh)=\"refreshPreferences($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"preferencesLoaded\">\r\n        <!-- Contactable privacy. -->\r\n        <ion-card>\r\n            <ion-item *ngIf=\"!advancedContactable\">\r\n                <ion-label>{{ 'addon.messages.blocknoncontacts' | translate }}</ion-label>\r\n                <ion-toggle [(ngModel)]=\"contactablePrivacy\" (ngModelChange)=\"saveContactablePrivacy(contactablePrivacy)\">\r\n                </ion-toggle>\r\n            </ion-item>\r\n\r\n            <ion-list *ngIf=\"advancedContactable\" class=\"ion-text-wrap\">\r\n                <ion-radio-group [(ngModel)]=\"contactablePrivacy\" (ionChange)=\"saveContactablePrivacy(contactablePrivacy)\">\r\n                    <ion-item-divider>\r\n                        <ion-label>\r\n                            <h2>{{ 'addon.messages.contactableprivacy' | translate }}</h2>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item>\r\n                        <ion-label>{{ 'addon.messages.contactableprivacy_onlycontacts' | translate }}</ion-label>\r\n                        <ion-radio slot=\"start\" [value]=\"onlyContactsValue\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>{{ 'addon.messages.contactableprivacy_coursemember' | translate }}</ion-label>\r\n                        <ion-radio slot=\"start\" [value]=\"courseMemberValue\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"allowSiteMessaging\">\r\n                        <ion-label>{{ 'addon.messages.contactableprivacy_site' | translate }}</ion-label>\r\n                        <ion-radio slot=\"start\" [value]=\"siteValue\"></ion-radio>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </ion-list>\r\n        </ion-card>\r\n\r\n        <!-- Notifications. -->\r\n        <ng-container *ngIf=\"preferences\">\r\n            <ng-container *ngIf=\"!groupMessagingEnabled\">\r\n                <ng-container *ngTemplateOutlet=\"legacySettings; context: {preferences: preferences}\"></ng-container>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"groupMessagingEnabled\">\r\n                <ng-container *ngTemplateOutlet=\"settings; context: {preferences: preferences}\"></ng-container>\r\n            </ng-container>\r\n        </ng-container>\r\n\r\n        <!-- General settings. -->\r\n        <ion-card>\r\n            <ion-list class=\"ion-text-wrap\">\r\n                <ion-item-divider>\r\n                    <ion-label>\r\n                        <h2>{{ 'core.settings.general' | translate }}</h2>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.messages.useentertosend' | translate }}</p>\r\n                    </ion-label>\r\n                    <ion-toggle [(ngModel)]=\"sendOnEnter\" (ngModelChange)=\"sendOnEnterChanged()\" slot=\"end\"></ion-toggle>\r\n                </ion-item>\r\n            </ion-list>\r\n        </ion-card>\r\n    </core-loading>\r\n</ion-content>\r\n\r\n<!-- Only 3.5 version -->\r\n<ng-template #legacySettings let-preferences=\"preferences\">\r\n    <ng-container *ngFor=\"let component of preferences.components\">\r\n        <ion-card *ngFor=\"let notification of component.notifications\">\r\n            <ion-card-header class=\"ion-no-padding\">\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <h2>{{ notification.displayname }}</h2>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-card-header>\r\n            <ion-card-content class=\"ion-no-padding\">\r\n                <ng-container *ngFor=\"let processor of notification.processors\">\r\n                    <ion-item-divider class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ processor.displayname }}</p>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n                    <!-- If notifications not disabled, show toggles.\r\n                        If notifications are disabled, show \"Disabled\" instead of toggle. -->\r\n                    <ion-item *ngFor=\"let state of ['loggedin', 'loggedoff']\" class=\"ion-text-wrap\">\r\n                        <ion-label>{{ 'core.settings.' + state | translate }}</ion-label>\r\n                        <ng-container *ngIf=\"!preferences.disableall\">\r\n                            <!-- If notifications enabled, show toggle. -->\r\n                            <core-button-with-spinner *ngIf=\"!processor.locked\" [loading]=\"notification['updating'+state]\">\r\n                                <ion-toggle [(ngModel)]=\"processor[state].checked\"\r\n                                    (ngModelChange)=\"changePreferenceLegacy(notification, processor, state)\">\r\n                                </ion-toggle>\r\n                            </core-button-with-spinner>\r\n                            <span *ngIf=\"processor.locked && processor[state].checked\" class=\"text-gray\">\r\n                                {{'core.settings.forced' | translate }}\r\n                            </span>\r\n                            <span *ngIf=\"processor.locked && !processor[state].checked\" class=\"text-gray\">\r\n                                {{'core.settings.disallowed' | translate }}\r\n                            </span>\r\n                        </ng-container>\r\n                        <span *ngIf=\"preferences.disableall\">{{ 'core.settings.disabled' | translate }}</span>\r\n                    </ion-item>\r\n                </ng-container>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </ng-container>\r\n</ng-template>\r\n\r\n\r\n<ng-template #settings let-preferences=\"preferences\">\r\n    <ng-container *ngFor=\"let component of preferences.components\">\r\n        <ion-card *ngFor=\"let notification of component.notifications\">\r\n            <ion-item-divider class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <h2>{{ 'addon.notifications.notificationpreferences' | translate }}</h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ng-container *ngFor=\"let processor of notification.processors\">\r\n                <!-- If group messaging is enabled, display a simplified view. -->\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>{{ processor.displayname }}</ion-label>\r\n                    <ng-container *ngIf=\"!preferences.disableall\">\r\n                        <!-- If notifications enabled, show toggle. -->\r\n                        <core-button-with-spinner *ngIf=\"!processor.locked\" [loading]=\"notification.updating\">\r\n                            <ion-toggle [(ngModel)]=\"processor.enabled\" (ngModelChange)=\"changePreference(notification, processor)\">\r\n                            </ion-toggle>\r\n                        </core-button-with-spinner>\r\n                        <span class=\"text-gray\" *ngIf=\"processor.locked\">\r\n                            {{ processor.lockedmessage }}\r\n                        </span>\r\n                    </ng-container>\r\n                    <span *ngIf=\"preferences.disableall\" class=\"text-gray\">{{ 'core.settings.disabled' | translate }}</span>\r\n                </ion-item>\r\n            </ng-container>\r\n        </ion-card>\r\n    </ng-container>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/notifications/pages/settings/settings.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/notifications/pages/settings/settings.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.notifications.notifications' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<core-navbar-buttons slot=\"end\">\r\n    <core-context-menu>\r\n        <core-context-menu-item *ngFor=\"let handler of processorHandlers\" [priority]=\"handler.priority\"\r\n            [content]=\"handler.label | translate\" (action)=\"openExtraPreferences(handler)\" [iconAction]=\"handler.icon\">\r\n        </core-context-menu-item>\r\n    </core-context-menu>\r\n</core-navbar-buttons>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!preferencesLoaded\" (ionRefresh)=\"refreshPreferences($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"preferencesLoaded\">\r\n        <ion-card>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"preferences\">\r\n                <ion-label>{{ 'addon.notifications.notifications' | translate }}</ion-label>\r\n                <ion-toggle [(ngModel)]=\"preferences.enableall\" (ngModelChange)=\"enableAll(preferences.enableall)\"></ion-toggle>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"canChangeSound\">\r\n                <ion-label>{{ 'addon.notifications.playsound' | translate }}</ion-label>\r\n                <ion-toggle [(ngModel)]=\"notificationSound\" (ngModelChange)=\"changeNotificationSound(notificationSound)\">\r\n                </ion-toggle>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <!-- Show processor selector. -->\r\n        <core-combobox *ngIf=\"preferences && preferences.processors && preferences.processors.length > 0\" [selection]=\"currentProcessorName\"\r\n            (onChange)=\"changeProcessor($event)\">\r\n            <ion-select-option class=\"ion-text-wrap\" *ngFor=\"let processor of preferences.processors\" [value]=\"processor.name\">\r\n                {{ processor.displayname }}\r\n            </ion-select-option>\r\n        </core-combobox>\r\n\r\n        <ng-container *ngIf=\"loggedInOffLegacyMode\">\r\n            <ng-container *ngTemplateOutlet=\"legacySettings; context: {preferences: preferences}\"></ng-container>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"!loggedInOffLegacyMode\">\r\n            <ng-container *ngTemplateOutlet=\"settings; context: {preferences: preferences}\"></ng-container>\r\n        </ng-container>\r\n    </core-loading>\r\n</ion-content>\r\n\r\n\r\n<!-- 3.11 or downwards version -->\r\n<ng-template #legacySettings let-preferences=\"preferences\">\r\n    <ion-card *ngFor=\"let component of components\" class=\"ion-margin-top\">\r\n        <ion-card-header class=\"ion-no-padding\">\r\n            <ion-item class=\"ion-text-wrap divider\">\r\n                <ion-label class=\"ion-text-wrap\">\r\n                    <ion-row class=\"ion-no-padding\">\r\n                        <ion-col class=\"ion-no-padding\">\r\n                            <p class=\"item-heading\">{{ component.displayname }}</p>\r\n                        </ion-col>\r\n                        <ion-col size=\"2\" class=\"ion-text-center ion-no-padding ion-hide-md-down\">\r\n                            <p>{{ 'core.settings.loggedin' | translate }}</p>\r\n                        </ion-col>\r\n                        <ion-col size=\"2\" class=\"ion-text-center ion-no-padding ion-hide-md-down\">\r\n                            <p>{{ 'core.settings.loggedoff' | translate }}</p>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card-header>\r\n        <ng-container *ngFor=\"let notification of component.notifications\">\r\n            <!-- Tablet view -->\r\n            <ion-item class=\"ion-text-wrap ion-hide-md-down addon-notifications-table-content only-links\">\r\n                <ion-label>\r\n                    <ion-row class=\"ion-no-padding ion-align-items-center\">\r\n                        <ion-col class=\"ion-margin-horizontal ion-no-padding\">\r\n                            <p class=\"item-heading\">{{ notification.displayname }}</p>\r\n                        </ion-col>\r\n                        <ion-col size=\"2\" class=\"ion-text-center ion-no-padding\" *ngFor=\"let state of ['loggedin', 'loggedoff']\">\r\n                            <ng-container *ngIf=\"preferences!.enableall && notification.processorsByName[currentProcessorName][state]\">\r\n                                <!-- If notifications enabled, show toggle. -->\r\n                                <core-button-with-spinner *ngIf=\"!notification.processorsByName[currentProcessorName].locked\"\r\n                                    [loading]=\"notification.processorsByName[currentProcessorName][state].updating\">\r\n                                    <ion-toggle [(ngModel)]=\"notification.processorsByName[currentProcessorName][state].checked\"\r\n                                        (ngModelChange)=\"changePreferenceLegacy(notification, state)\">\r\n                                    </ion-toggle>\r\n                                </core-button-with-spinner>\r\n                                <span class=\"text-gray\" *ngIf=\"notification.processorsByName[currentProcessorName].locked &&\r\n                                    notification.processorsByName[currentProcessorName][state].checked\">\r\n                                    {{'core.settings.forced' | translate }}\r\n                                </span>\r\n                                <span class=\"text-gray\" *ngIf=\"notification.processorsByName[currentProcessorName].locked &&\r\n                                    !notification.processorsByName[currentProcessorName][state].checked\">\r\n                                    {{'core.settings.disallowed' | translate }}\r\n                                </span>\r\n                            </ng-container>\r\n                            <!-- If notifications are disabled, show \"Disabled\" instead of toggle. -->\r\n                            <span *ngIf=\"!preferences!.enableall\" class=\"text-gray\">{{ 'core.settings.disabled' | translate }}</span>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Phone view -->\r\n            <ion-item class=\"ion-text-wrap ion-no-margin ion-hide-md-up\">\r\n                <p class=\"item-heading\">{{ notification.displayname }}</p>\r\n            </ion-item>\r\n            <!-- If notifications enabled, show toggles. If disabled, show \"Disabled\" instead of toggle. -->\r\n            <ion-item *ngFor=\"let state of ['loggedin', 'loggedoff']\" class=\"ion-text-wrap ion-hide-md-up\">\r\n                <ion-label class=\"ion-margin-horizontal\">\r\n                    <p>{{ 'core.settings.' + state | translate }}</p>\r\n                </ion-label>\r\n                <div slot=\"end\" *ngIf=\"preferences!.enableall && notification.processorsByName[currentProcessorName][state]\">\r\n                    <core-button-with-spinner *ngIf=\"!notification.processorsByName[currentProcessorName].locked\"\r\n                        [loading]=\"notification.processorsByName[currentProcessorName][state].updating\">\r\n                        <ion-toggle *ngIf=\"!notification.processorsByName[currentProcessorName].locked\"\r\n                            [(ngModel)]=\"notification.processorsByName[currentProcessorName][state].checked\"\r\n                            (ngModelChange)=\"changePreferenceLegacy(notification, state)\">\r\n                        </ion-toggle>\r\n                    </core-button-with-spinner>\r\n                    <span class=\"text-gray\" *ngIf=\"notification.processorsByName[currentProcessorName].locked &&\r\n                        notification.processorsByName[currentProcessorName][state].checked\">\r\n                        {{'core.settings.forced' | translate }}\r\n                    </span>\r\n                    <span class=\"text-gray\" *ngIf=\"notification.processorsByName[currentProcessorName].locked &&\r\n                        !notification.processorsByName[currentProcessorName][state].checked\">\r\n                        {{'core.settings.disallowed' | translate }}\r\n                    </span>\r\n                </div>\r\n                <span class=\"text-gray\" slot=\"end\" *ngIf=\"!preferences!.enableall\">{{ 'core.settings.disabled' | translate }}</span>\r\n            </ion-item>\r\n        </ng-container>\r\n    </ion-card>\r\n</ng-template>\r\n\r\n<!-- 4.0 or downwards version -->\r\n<ng-template #settings let-preferences=\"preferences\">\r\n    <ion-card *ngFor=\"let component of components\" class=\"ion-margin-top\">\r\n        <ion-item-divider class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <p class=\"item-heading\">{{ component.displayname }}</p>\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ng-container *ngFor=\"let notification of component.notifications\">\r\n            <!-- If notifications enabled, show toggles. If disabled, show \"Disabled\" instead of toggle. -->\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p>{{ notification.displayname }}</p>\r\n                </ion-label>\r\n\r\n                <div slot=\"end\" *ngIf=\"preferences!.enableall\">\r\n                    <core-button-with-spinner *ngIf=\"!notification.processorsByName[currentProcessorName].locked\"\r\n                        [loading]=\"notification.processorsByName[currentProcessorName].updating\">\r\n                        <ion-toggle *ngIf=\"!notification.processorsByName[currentProcessorName].locked\"\r\n                            [(ngModel)]=\"notification.processorsByName[currentProcessorName].enabled\"\r\n                            (ngModelChange)=\"changePreference(notification)\">\r\n                        </ion-toggle>\r\n                    </core-button-with-spinner>\r\n                    <span class=\"text-gray\" *ngIf=\" notification.processorsByName[currentProcessorName].locked &&\r\n                        notification.processorsByName[currentProcessorName].enabled\">\r\n                        {{'core.settings.forced' | translate }}\r\n                    </span>\r\n                    <span class=\"text-gray\" *ngIf=\" notification.processorsByName[currentProcessorName].locked &&\r\n                        !notification.processorsByName[currentProcessorName].enabled\">\r\n                        {{'core.settings.disallowed' | translate }}\r\n                    </span>\r\n                </div>\r\n                <span class=\"text-gray\" slot=\"end\" *ngIf=\"!preferences!.enableall\">{{ 'core.settings.disabled' | translate }}</span>\r\n            </ion-item>\r\n        </ng-container>\r\n    </ion-card>\r\n\r\n</ng-template>\r\n");

/***/ }),

/***/ "./src/addons/messages/pages/settings/settings.module.ts":
/*!***************************************************************!*\
  !*** ./src/addons/messages/pages/settings/settings.module.ts ***!
  \***************************************************************/
/*! exports provided: AddonMessagesSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesSettingsPageModule", function() { return AddonMessagesSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.page */ "./src/addons/messages/pages/settings/settings.page.ts");
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
        component: _settings_page__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesSettingsPage"],
    },
];
let AddonMessagesSettingsPageModule = class AddonMessagesSettingsPageModule {
};
AddonMessagesSettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _settings_page__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesSettingsPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonMessagesSettingsPageModule);



/***/ }),

/***/ "./src/addons/messages/pages/settings/settings.page.ts":
/*!*************************************************************!*\
  !*** ./src/addons/messages/pages/settings/settings.page.ts ***!
  \*************************************************************/
/*! exports provided: AddonMessagesSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesSettingsPage", function() { return AddonMessagesSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/platform */ "./src/core/services/platform.ts");
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
 * Page that displays the messages settings page.
 */
let AddonMessagesSettingsPage = class AddonMessagesSettingsPage {
    constructor() {
        this.preferencesLoaded = false;
        this.advancedContactable = false; // Whether the site supports "advanced" contactable privacy.
        this.allowSiteMessaging = false;
        this.onlyContactsValue = _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessagesProvider"].MESSAGE_PRIVACY_ONLYCONTACTS;
        this.courseMemberValue = _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessagesProvider"].MESSAGE_PRIVACY_COURSEMEMBER;
        this.siteValue = _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessagesProvider"].MESSAGE_PRIVACY_SITE;
        this.groupMessagingEnabled = false;
        this.sendOnEnter = false;
        this.loggedInOffLegacyMode = false;
        const currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getRequiredCurrentSite();
        this.advancedContactable = !!currentSite.isVersionGreaterEqualThan('3.6');
        this.allowSiteMessaging = !!currentSite.canUseAdvancedFeature('messagingallusers');
        this.groupMessagingEnabled = _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].isGroupMessagingEnabled();
        this.loggedInOffLegacyMode = !currentSite.isVersionGreaterEqualThan('4.0');
        this.asyncInit();
    }
    asyncInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sendOnEnter = !!(yield _services_config__WEBPACK_IMPORTED_MODULE_4__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_8__["CoreConstants"].SETTINGS_SEND_ON_ENTER, !_services_platform__WEBPACK_IMPORTED_MODULE_9__["CorePlatform"].isMobile()));
        });
    }
    /**
     * Runs when the page has loaded. This event only happens once per page being created.
     * If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
     * Setup code for the page.
     */
    ngOnInit() {
        this.fetchPreferences();
    }
    /**
     * Fetches preference data.
     *
     * @return Promise resolved when done.
     */
    fetchPreferences() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const preferences = yield _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].getMessagePreferences();
                if (this.groupMessagingEnabled) {
                    // Simplify the preferences.
                    for (const component of preferences.components) {
                        // Only display get the notification preferences.
                        component.notifications = component.notifications.filter((notification) => notification.preferencekey == _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessagesProvider"].NOTIFICATION_PREFERENCES_KEY);
                        if (this.loggedInOffLegacyMode) {
                            // Load enabled from loggedin / loggedoff values.
                            component.notifications.forEach((notification) => {
                                notification.processors.forEach((processor) => {
                                    processor.enabled = processor.loggedin.checked || processor.loggedoff.checked;
                                });
                            });
                        }
                    }
                }
                this.preferences = preferences;
                this.contactablePrivacy = preferences.blocknoncontacts;
                this.previousContactableValue = this.contactablePrivacy;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                this.preferencesLoaded = true;
            }
        });
    }
    /**
     * Update preferences. The purpose is to store the updated data, it won't be reflected in the view.
     */
    updatePreferences() {
        _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].invalidateMessagePreferences().finally(() => {
            this.fetchPreferences();
        });
    }
    /**
     * Update preferences after a certain time. The purpose is to store the updated data, it won't be reflected in the view.
     */
    updatePreferencesAfterDelay() {
        // Cancel pending updates.
        clearTimeout(this.updateTimeout);
        this.updateTimeout = window.setTimeout(() => {
            this.updateTimeout = undefined;
            this.updatePreferences();
        }, 5000);
    }
    /**
     * Save the contactable privacy setting..
     *
     * @param value The value to set.
     */
    saveContactablePrivacy(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.contactablePrivacy == this.previousContactableValue) {
                // Value hasn't changed from previous, it probably means that we just fetched the value from the server.
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showModalLoading('core.sending', true);
            if (!this.advancedContactable) {
                // Convert from boolean to number.
                value = value ? 1 : 0;
            }
            try {
                yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_3__["CoreUser"].updateUserPreference('message_blocknoncontacts', String(value));
                // Update the preferences since they were modified.
                this.updatePreferencesAfterDelay();
                this.previousContactableValue = this.contactablePrivacy;
            }
            catch (message) {
                // Show error and revert change.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal(message);
                this.contactablePrivacy = this.previousContactableValue;
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Change the value of a certain preference. Versions 3.6 onwards.
     *
     * @param notification Notification object.
     * @param processor Notification processor.
     */
    changePreference(notification, processor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Update both states at the same time.
            let value = notification.processors
                .filter((processor) => processor.enabled)
                .map((processor) => processor.name)
                .join(',');
            if (value == '') {
                value = 'none';
            }
            notification.updating = true;
            const promises = [];
            if (this.loggedInOffLegacyMode) {
                promises.push(_features_user_services_user__WEBPACK_IMPORTED_MODULE_3__["CoreUser"].updateUserPreference(notification.preferencekey + '_loggedin', value));
                promises.push(_features_user_services_user__WEBPACK_IMPORTED_MODULE_3__["CoreUser"].updateUserPreference(notification.preferencekey + '_loggedoff', value));
            }
            else {
                promises.push(_features_user_services_user__WEBPACK_IMPORTED_MODULE_3__["CoreUser"].updateUserPreference(notification.preferencekey + '_enabled', value));
            }
            try {
                yield Promise.all(promises);
                // Update the preferences since they were modified.
                this.updatePreferencesAfterDelay();
            }
            catch (error) {
                // Show error and revert change.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal(error);
                processor.enabled = !processor.enabled;
            }
            finally {
                notification.updating = false;
            }
        });
    }
    /**
     * Change the value of a certain preference. Only on version 3.5.
     *
     * @param notification Notification object.
     * @param processor Notification processor.
     * @param state State name, ['loggedin', 'loggedoff'].
     */
    changePreferenceLegacy(notification, processor, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Update only the specified state.
            const processorState = processor[state];
            const preferenceName = notification.preferencekey + '_' + processorState.name;
            const value = notification.processors
                .filter((processor) => processor[state].checked)
                .map((processor) => processor.name)
                .join(',');
            notification['updating' + state] = true;
            try {
                yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_3__["CoreUser"].updateUserPreference(preferenceName, value);
                // Update the preferences since they were modified.
                this.updatePreferencesAfterDelay();
            }
            catch (error) {
                // Show error and revert change.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal(error);
                processorState.checked = !processorState.checked;
            }
            finally {
                notification['updating' + state] = false;
            }
        });
    }
    /**
     * Refresh the list of preferences.
     *
     * @param refresher Refresher.
     */
    refreshPreferences(refresher) {
        _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].invalidateMessagePreferences().finally(() => {
            this.fetchPreferences().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    sendOnEnterChanged() {
        // Save the value.
        _services_config__WEBPACK_IMPORTED_MODULE_4__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_8__["CoreConstants"].SETTINGS_SEND_ON_ENTER, this.sendOnEnter ? 1 : 0);
        // Notify the app.
        _singletons_events__WEBPACK_IMPORTED_MODULE_5__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_5__["CoreEvents"].SEND_ON_ENTER_CHANGED, { sendOnEnter: !!this.sendOnEnter }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        // If there is a pending action to update preferences, execute it right now.
        if (this.updateTimeout) {
            clearTimeout(this.updateTimeout);
            this.updatePreferences();
        }
    }
};
AddonMessagesSettingsPage.ctorParameters = () => [];
AddonMessagesSettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/settings/settings.html")).default,
    })
], AddonMessagesSettingsPage);



/***/ }),

/***/ "./src/addons/notifications/pages/settings/settings.module.ts":
/*!********************************************************************!*\
  !*** ./src/addons/notifications/pages/settings/settings.module.ts ***!
  \********************************************************************/
/*! exports provided: AddonNotificationsSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotificationsSettingsPageModule", function() { return AddonNotificationsSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ "./src/addons/notifications/pages/settings/settings.ts");
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
        component: _settings__WEBPACK_IMPORTED_MODULE_4__["AddonNotificationsSettingsPage"],
    },
];
let AddonNotificationsSettingsPageModule = class AddonNotificationsSettingsPageModule {
};
AddonNotificationsSettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _settings__WEBPACK_IMPORTED_MODULE_4__["AddonNotificationsSettingsPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonNotificationsSettingsPageModule);



/***/ }),

/***/ "./src/addons/notifications/pages/settings/settings.scss":
/*!***************************************************************!*\
  !*** ./src/addons/notifications/pages/settings/settings.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addon-notifications-table-content ion-row {\n  min-height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbm90aWZpY2F0aW9ucy9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYWRkb25zL25vdGlmaWNhdGlvbnMvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRvbi1ub3RpZmljYXRpb25zLXRhYmxlLWNvbnRlbnQgaW9uLXJvdyB7XHJcbiAgICBtaW4taGVpZ2h0OiAzNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/addons/notifications/pages/settings/settings.ts":
/*!*************************************************************!*\
  !*** ./src/addons/notifications/pages/settings/settings.ts ***!
  \*************************************************************/
/*! exports provided: AddonNotificationsSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotificationsSettingsPage", function() { return AddonNotificationsSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _services_local_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/local-notifications */ "./src/core/services/local-notifications.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _addons_messageoutput_services_messageoutput_delegate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @addons/messageoutput/services/messageoutput-delegate */ "./src/addons/messageoutput/services/messageoutput-delegate.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/notifications */ "./src/addons/notifications/services/notifications.ts");
/* harmony import */ var _addons_notifications_services_notifications_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @addons/notifications/services/notifications-helper */ "./src/addons/notifications/services/notifications-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays notifications settings.
 */
let AddonNotificationsSettingsPage = class AddonNotificationsSettingsPage {
    constructor() {
        this.currentProcessorName = 'airnotifier';
        this.preferencesLoaded = false;
        this.notificationSound = false;
        this.processorHandlers = [];
        this.loggedInOffLegacyMode = false;
        this.canChangeSound = _services_local_notifications__WEBPACK_IMPORTED_MODULE_3__["CoreLocalNotifications"].canDisableSound();
        const currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getRequiredCurrentSite();
        this.loggedInOffLegacyMode = !currentSite.isVersionGreaterEqualThan('4.0');
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.canChangeSound) {
                this.notificationSound = yield _services_config__WEBPACK_IMPORTED_MODULE_2__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].SETTINGS_NOTIFICATION_SOUND, true);
            }
            this.fetchPreferences();
        });
    }
    /**
     * Fetches preferences data.
     *
     * @return Resolved when done.
     */
    fetchPreferences() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const preferences = yield _services_notifications__WEBPACK_IMPORTED_MODULE_12__["AddonNotifications"].getNotificationPreferences();
                // Initialize current processor. Load "Mobile" (airnotifier) if available.
                let currentProcessor = preferences.processors.find((processor) => processor.name == this.currentProcessorName);
                if (!currentProcessor) {
                    currentProcessor = preferences.processors[0];
                }
                if (!currentProcessor) {
                    // Shouldn't happen.
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_10__["CoreError"]('No processor found');
                }
                preferences.enableall = !preferences.disableall;
                this.preferences = _addons_notifications_services_notifications_helper__WEBPACK_IMPORTED_MODULE_13__["AddonNotificationsHelper"].formatPreferences(preferences);
                this.loadProcessor(currentProcessor);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                this.preferencesLoaded = true;
            }
        });
    }
    /**
     * Load a processor.
     *
     * @param processor Processor object.
     */
    loadProcessor(processor) {
        var _a;
        if (!processor) {
            return;
        }
        this.currentProcessorName = processor.name;
        this.processorHandlers = [];
        this.components = _addons_notifications_services_notifications_helper__WEBPACK_IMPORTED_MODULE_13__["AddonNotificationsHelper"].getProcessorComponents(processor.name, ((_a = this.preferences) === null || _a === void 0 ? void 0 : _a.components) || []);
        if (!processor.hassettings || !processor.supported) {
            return;
        }
        const handlerData = _addons_messageoutput_services_messageoutput_delegate__WEBPACK_IMPORTED_MODULE_8__["AddonMessageOutputDelegate"].getDisplayData(processor);
        if (handlerData) {
            this.processorHandlers.push(handlerData);
        }
    }
    /**
     * Update preferences after a certain time. The purpose is to store the updated data, it won't be reflected in the view.
     */
    updatePreferencesAfterDelay() {
        // Cancel pending updates.
        clearTimeout(this.updateTimeout);
        this.updateTimeout = window.setTimeout(() => {
            this.updateTimeout = undefined;
            this.updatePreferences();
        }, 5000);
    }
    /**
     * Update preferences. The purpose is to store the updated data, it won't be reflected in the view.
     *
     * @return Promise resolved when done.
     */
    updatePreferences() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_notifications__WEBPACK_IMPORTED_MODULE_12__["AddonNotifications"].invalidateNotificationPreferences());
            yield _services_notifications__WEBPACK_IMPORTED_MODULE_12__["AddonNotifications"].getNotificationPreferences();
        });
    }
    /**
     * The selected processor was changed.
     *
     * @param name Name of the selected processor.
     */
    changeProcessor(name) {
        var _a;
        const processor = (_a = this.preferences) === null || _a === void 0 ? void 0 : _a.processors.find((processor) => processor.name == name);
        if (processor) {
            this.loadProcessor(processor);
        }
    }
    /**
     * Refresh the list of preferences.
     *
     * @param refresher Refresher.
     */
    refreshPreferences(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_notifications__WEBPACK_IMPORTED_MODULE_12__["AddonNotifications"].invalidateNotificationPreferences());
                yield this.fetchPreferences();
            }
            finally {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            }
        });
    }
    /**
     * Open extra preferences.
     *
     * @param handlerData
     */
    openExtraPreferences(handlerData) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_14__["CoreNavigator"].navigateToSitePath(handlerData.page, { params: handlerData.pageParams });
    }
    /**
     * Change the value of a certain preference.
     *
     * @param notification Notification object.
     * @param state State name, ['loggedin', 'loggedoff'].
     * @return Promise resolved when done.
     */
    changePreferenceLegacy(notification, state) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const processor = (_a = notification.processorsByName) === null || _a === void 0 ? void 0 : _a[this.currentProcessorName];
            if (!processor) {
                return;
            }
            const processorState = processor[state];
            const preferenceName = notification.preferencekey + '_' + processorState.name;
            let value = notification.processors
                .filter((processor) => processor[state].checked)
                .map((processor) => processor.name)
                .join(',');
            if (value == '') {
                value = 'none';
            }
            processorState.updating = true;
            try {
                yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].updateUserPreference(preferenceName, value);
                // Update the preferences since they were modified.
                this.updatePreferencesAfterDelay();
            }
            catch (error) {
                // Show error and revert change.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
                processor[state].checked = !processor[state].checked;
            }
            finally {
                processorState.updating = false;
            }
        });
    }
    /**
     * Change the value of a certain preference.
     *
     * @param notification Notification object.
     * @return Promise resolved when done.
     */
    changePreference(notification) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const processor = (_a = notification.processorsByName) === null || _a === void 0 ? void 0 : _a[this.currentProcessorName];
            if (!processor) {
                return;
            }
            const preferenceName = notification.preferencekey + '_enabled';
            let value = notification.processors
                .filter((processor) => processor.enabled)
                .map((processor) => processor.name)
                .join(',');
            if (value == '') {
                value = 'none';
            }
            processor.updating = true;
            try {
                yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].updateUserPreference(preferenceName, value);
                // Update the preferences since they were modified.
                this.updatePreferencesAfterDelay();
            }
            catch (error) {
                // Show error and revert change.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
                processor.enabled = !processor.enabled;
            }
            finally {
                processor.updating = false;
            }
        });
    }
    /**
     * Enable all notifications changed.
     *
     * @param enable Whether to enable or disable.
     * @return Promise resolved when done.
     */
    enableAll(enable) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.preferences) {
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].updateUserPreferences([], !enable);
                // Update the preferences since they were modified.
                this.updatePreferencesAfterDelay();
            }
            catch (error) {
                // Show error and revert change.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
                this.preferences.enableall = !this.preferences.enableall;
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Change the notification sound setting.
     *
     * @param enabled True to enable the notification sound, false to disable it.
     */
    changeNotificationSound(enabled) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_config__WEBPACK_IMPORTED_MODULE_2__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].SETTINGS_NOTIFICATION_SOUND, enabled ? 1 : 0));
            const siteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
            _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].NOTIFICATION_SOUND_CHANGED, { enabled }, siteId);
            _services_local_notifications__WEBPACK_IMPORTED_MODULE_3__["CoreLocalNotifications"].rescheduleAll();
        });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        // If there is a pending action to update preferences, execute it right now.
        if (this.updateTimeout) {
            clearTimeout(this.updateTimeout);
            this.updatePreferences();
        }
    }
};
AddonNotificationsSettingsPage.ctorParameters = () => [];
AddonNotificationsSettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-notifications-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/notifications/pages/settings/settings.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.scss */ "./src/addons/notifications/pages/settings/settings.scss")).default]
    })
], AddonNotificationsSettingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module.js.map