(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacts-contacts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/contacts/contacts.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/contacts/contacts.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.messages.contacts' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"gotoSearch()\" [attr.aria-label]=\"'addon.messages.searchcombined' | translate\">\r\n                <ion-icon name=\"fas-search\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <core-tabs [hideUntil]=\"true\">\r\n\r\n            <!-- Contacts tab. -->\r\n            <core-tab [title]=\"'addon.messages.contacts' | translate\" (ionSelect)=\"selectTab('confirmed')\">\r\n                <ng-template>\r\n                    <ion-refresher slot=\"fixed\" [disabled]=\"!confirmedLoaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n                        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n                    </ion-refresher>\r\n                    <core-loading [hideUntil]=\"confirmedLoaded\">\r\n                        <ion-list class=\"ion-no-margin\" *ngIf=\"confirmedContacts.length\">\r\n                            <ion-item class=\"ion-text-wrap addon-messages-conversation-item\" (click)=\"selectUser(contact.id)\" button\r\n                                *ngFor=\"let contact of confirmedContacts\" [attr.aria-label]=\"contact.fullname\" detail=\"true\"\r\n                                [attr.aria-current]=\"contact.id == selectedUserId ? 'page' : 'false'\">\r\n                                <core-user-avatar slot=\"start\" [user]=\"contact\" [checkOnline]=\"contact.showonlinestatus\"\r\n                                    [linkProfile]=\"false\">\r\n                                </core-user-avatar>\r\n                                <ion-label>\r\n                                    <p class=\"item-heading\">\r\n                                        <core-format-text [text]=\"contact.fullname\" contextLevel=\"system\" [contextInstanceId]=\"0\">\r\n                                        </core-format-text>\r\n                                        <ion-icon *ngIf=\"contact.isblocked\" name=\"fas-user-slash\" slot=\"end\"\r\n                                            [attr.aria-label]=\"'addon.messages.contactblocked' | translate\">\r\n                                        </ion-icon>\r\n                                    </p>\r\n                                </ion-label>\r\n                            </ion-item>\r\n                        </ion-list>\r\n\r\n                        <core-empty-box *ngIf=\"!confirmedContacts.length\" icon=\"far-address-book\"\r\n                            [message]=\"'addon.messages.nocontactsgetstarted' | translate\">\r\n                        </core-empty-box>\r\n\r\n                        <core-infinite-loading [enabled]=\"confirmedCanLoadMore\" (action)=\"loadMore($event)\" [error]=\"confirmedLoadMoreError\"\r\n                            position=\"bottom\">\r\n                        </core-infinite-loading>\r\n                    </core-loading>\r\n                </ng-template>\r\n            </core-tab>\r\n\r\n            <!-- Requests tab. -->\r\n            <core-tab [title]=\"'addon.messages.requests' | translate\" (ionSelect)=\"selectTab('requests')\" [badge]=\"requestsBadge\"\r\n                badgeA11yText=\"addon.messages.pendingcontactrequests\">\r\n                <ng-template>\r\n                    <ion-refresher slot=\"fixed\" [disabled]=\"!requestsLoaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n                        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n                    </ion-refresher>\r\n                    <core-loading [hideUntil]=\"requestsLoaded\">\r\n                        <ion-list class=\"ion-no-margin\" *ngIf=\"requests.length\">\r\n                            <ion-item class=\"ion-text-wrap addon-messages-conversation-item\" *ngFor=\"let request of requests\"\r\n                                [attr.aria-label]=\"request.fullname\" (click)=\"selectUser(request.id)\" button\r\n                                [attr.aria-current]=\"request.id == selectedUserId ? 'page' : 'false'\" detail=\"true\">\r\n                                <core-user-avatar slot=\"start\" [user]=\"request\" [linkProfile]=\"false\"></core-user-avatar>\r\n                                <ion-label>\r\n                                    <core-format-text [text]=\"request.fullname\" contextLevel=\"system\" [contextInstanceId]=\"0\">\r\n                                    </core-format-text>\r\n                                    <p *ngIf=\"!request.iscontact\">\r\n                                        {{ 'addon.messages.wouldliketocontactyou' | translate }}\r\n                                    </p>\r\n                                </ion-label>\r\n                            </ion-item>\r\n                        </ion-list>\r\n                        <core-empty-box *ngIf=\"!requests.length\" icon=\"far-address-book\"\r\n                            [message]=\"'addon.messages.nocontactrequests' | translate\">\r\n                        </core-empty-box>\r\n                        <core-infinite-loading [enabled]=\"requestsCanLoadMore\" (action)=\"loadMore($event)\" [error]=\"requestsLoadMoreError\"\r\n                            position=\"bottom\">\r\n                        </core-infinite-loading>\r\n                    </core-loading>\r\n                </ng-template>\r\n            </core-tab>\r\n        </core-tabs>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/messages/pages/contacts/contacts.module.ts":
/*!***************************************************************!*\
  !*** ./src/addons/messages/pages/contacts/contacts.module.ts ***!
  \***************************************************************/
/*! exports provided: AddonMessagesContactsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesContactsPageModule", function() { return AddonMessagesContactsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @addons/messages/messages-lazy.module */ "./src/addons/messages/messages-lazy.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contacts.page */ "./src/addons/messages/pages/contacts/contacts.page.ts");
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
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesContactsPage"],
    },
    ..._addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_4__["DISCUSSION_ROUTES"],
];
const tabletRoutes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesContactsPage"],
        children: _addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_4__["DISCUSSION_ROUTES"],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isTablet),
];
let AddonMessagesContactsPageModule = class AddonMessagesContactsPageModule {
};
AddonMessagesContactsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_6__["CoreSharedModule"],
        ],
        declarations: [
            _contacts_page__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesContactsPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonMessagesContactsPageModule);



/***/ }),

/***/ "./src/addons/messages/pages/contacts/contacts.page.ts":
/*!*************************************************************!*\
  !*** ./src/addons/messages/pages/contacts/contacts.page.ts ***!
  \*************************************************************/
/*! exports provided: AddonMessagesContactsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesContactsPage", function() { return AddonMessagesContactsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
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
 * Page that displays contacts and contact requests.
 */
let AddonMessagesContactsPage = class AddonMessagesContactsPage {
    constructor() {
        this.selected = 'confirmed';
        this.requestsBadge = '';
        this.confirmedLoaded = false;
        this.confirmedInitialising = false;
        this.confirmedCanLoadMore = false;
        this.confirmedLoadMoreError = false;
        this.confirmedContacts = [];
        this.requestsLoaded = false;
        this.requestsInitialising = false;
        this.requestsCanLoadMore = false;
        this.requestsLoadMoreError = false;
        this.requests = [];
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteId();
        // Update the contact requests badge.
        this.contactRequestsCountObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].CONTACT_REQUESTS_COUNT_EVENT, (data) => {
            this.requestsBadge = data.count > 0 ? String(data.count) : '';
        }, this.siteId);
        // Update block status of a user.
        this.memberInfoObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].MEMBER_INFO_CHANGED_EVENT, (data) => {
            if (data.userBlocked || data.userUnblocked) {
                const user = this.confirmedContacts.find((user) => user.id == data.userId);
                if (user) {
                    user.isblocked = !!data.userBlocked;
                }
            }
            else if (data.contactRemoved) {
                const index = this.confirmedContacts.findIndex((contact) => contact.id == data.userId);
                if (index >= 0) {
                    this.confirmedContacts.splice(index, 1);
                }
            }
            else if (data.contactRequestConfirmed) {
                this.confirmedFetchData(true);
            }
            if (data.contactRequestConfirmed || data.contactRequestDeclined) {
                const index = this.requests.findIndex((request) => request.id == data.userId);
                if (index >= 0) {
                    this.requests.splice(index, 1);
                }
            }
        }, _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteId());
    }
    /**
     * Page being initialized.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].getContactRequestsCount(this.siteId); // Badge already updated by the observer.
            this.selected === 'confirmed'
                ? yield this.initConfirmed()
                : yield this.initRequests();
        });
    }
    /**
     * Initialise confirmed contacts.
     */
    initConfirmed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.confirmedInitialising) {
                return;
            }
            try {
                this.confirmedInitialising = true;
                yield this.confirmedFetchData();
                if (this.confirmedContacts.length && _services_screen__WEBPACK_IMPORTED_MODULE_6__["CoreScreen"].isTablet) {
                    this.selectUser(this.confirmedContacts[0].id, true);
                }
            }
            finally {
                this.confirmedInitialising = false;
                this.confirmedLoaded = true;
            }
        });
    }
    /**
     * Initialise contact requests.
     */
    initRequests() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.requestsInitialising) {
                return;
            }
            try {
                this.requestsInitialising = true;
                yield this.requestsFetchData();
                if (this.requests.length && _services_screen__WEBPACK_IMPORTED_MODULE_6__["CoreScreen"].isTablet) {
                    this.selectUser(this.requests[0].id, true);
                }
            }
            finally {
                this.requestsInitialising = false;
                this.requestsLoaded = true;
            }
        });
    }
    /**
     * Fetch contacts.
     *
     * @param refresh True if we are refreshing contacts, false if we are loading more.
     * @return Promise resolved when done.
     */
    confirmedFetchData(refresh = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.confirmedLoadMoreError = false;
            const limitFrom = refresh ? 0 : this.confirmedContacts.length;
            if (limitFrom === 0) {
                // Always try to get latest data from server.
                yield _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].invalidateUserContacts();
            }
            try {
                const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].getUserContacts(limitFrom);
                this.confirmedContacts = refresh ? result.contacts : this.confirmedContacts.concat(result.contacts);
                this.confirmedCanLoadMore = result.canLoadMore;
            }
            catch (error) {
                this.confirmedLoadMoreError = true;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
            }
        });
    }
    /**
     * Fetch contact requests.
     *
     * @param refresh True if we are refreshing contact requests, false if we are loading more.
     * @return Promise resolved when done.
     */
    requestsFetchData(refresh = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.requestsLoadMoreError = false;
            const limitFrom = refresh ? 0 : this.requests.length;
            if (limitFrom === 0) {
                // Always try to get latest data from server.
                yield _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].invalidateContactRequestsCache();
            }
            try {
                const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].getContactRequests(limitFrom);
                this.requests = refresh ? result.requests : this.requests.concat(result.requests);
                this.requestsCanLoadMore = result.canLoadMore;
            }
            catch (error) {
                this.requestsLoadMoreError = true;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
            }
        });
    }
    /**
     * Refresh contacts or requests.
     *
     * @param refresher Refresher.
     * @return Promise resolved when done.
     */
    refreshData(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.selected == 'confirmed') {
                    // No need to invalidate contacts, we always try to get the latest.
                    yield this.confirmedFetchData(true);
                }
                else {
                    // Refresh the number of contacts requests to update badges.
                    _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].refreshContactRequestsCount();
                    // No need to invalidate contact requests, we always try to get the latest.
                    yield this.requestsFetchData(true);
                }
            }
            finally {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            }
        });
    }
    /**
     * Load more contacts or requests.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    loadMore(infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.selected == 'confirmed') {
                    // No need to invalidate contacts, we always try to get the latest.
                    yield this.confirmedFetchData();
                }
                else {
                    yield this.requestsFetchData();
                }
            }
            finally {
                infiniteComplete && infiniteComplete();
            }
        });
    }
    /**
     * Navigate to the search page.
     */
    gotoSearch() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].navigateToSitePath('search');
    }
    selectTab(selected) {
        if (selected !== 'confirmed' && selected !== 'requests') {
            return;
        }
        this.selected = selected;
        if (this.selected == 'confirmed' && !this.confirmedLoaded) {
            this.initConfirmed();
        }
        if (this.selected == 'requests' && !this.requestsLoaded) {
            this.initRequests();
        }
    }
    /**
     * Set the selected user and open the conversation in the split view if needed.
     *
     * @param userId Id of the selected user, undefined to use the last selected user in the tab.
     * @param onInit Whether the contact was selected on initial load.
     */
    selectUser(userId, onInit = false) {
        if (userId == this.selectedUserId && _services_screen__WEBPACK_IMPORTED_MODULE_6__["CoreScreen"].isTablet) {
            // No user conversation to open or it is already opened.
            return;
        }
        if (onInit && _services_screen__WEBPACK_IMPORTED_MODULE_6__["CoreScreen"].isMobile) {
            // Do not open a conversation by default when split view is not visible.
            return;
        }
        this.selectedUserId = userId;
        const path = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRelativePathToParent('/messages/contacts') + `discussion/user/${userId}`;
        _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].navigate(path);
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.contactRequestsCountObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
AddonMessagesContactsPage.ctorParameters = () => [];
AddonMessagesContactsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-contacts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contacts.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/contacts/contacts.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../messages-common.scss */ "./src/addons/messages/messages-common.scss")).default]
    })
], AddonMessagesContactsPage);



/***/ })

}]);
//# sourceMappingURL=pages-contacts-contacts-module.js.map