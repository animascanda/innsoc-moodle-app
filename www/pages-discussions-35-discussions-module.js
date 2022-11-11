(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-discussions-35-discussions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussions-35/discussions.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussions-35/discussions.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.messages.messages' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <core-user-menu-button></core-user-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n\r\n        <core-search-box (onSubmit)=\"searchMessage($event)\" (onClear)=\"clearSearch()\" [placeholder]=\" 'addon.messages.message' | translate\"\r\n            autocorrect=\"off\" spellcheck=\"false\" lengthCheck=\"2\" [disabled]=\"!loaded\" searchArea=\"AddonMessagesDiscussions\"\r\n            [autoFocus]=\"false\"></core-search-box>\r\n\r\n        <core-loading [hideUntil]=\"loaded\" [message]=\"loadingMessage\">\r\n\r\n            <ion-list class=\"ion-no-margin\">\r\n\r\n                <ion-item class=\"ion-text-wrap addon-message-discussion\" (click)=\"gotoContacts()\"\r\n                    [attr.aria-label]=\"'addon.messages.contacts' | translate\" detail=\"true\" button>\r\n                    <ion-icon name=\"fas-address-book\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    <ion-label>\r\n                        <h2>{{ 'addon.messages.contacts' | translate }}</h2>\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n                <ng-container *ngIf=\"search.showResults\">\r\n                    <ion-item-divider>\r\n                        <ion-label>\r\n                            <h2>{{ 'core.searchresults' | translate }}</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\" class=\"ion-padding-end\">\r\n                            <ion-badge>{{ search.results.length }}</ion-badge>\r\n                        </ion-note>\r\n                    </ion-item-divider>\r\n                    <ion-item class=\"ion-text-wrap addon-message-discussion\" *ngFor=\"let result of search.results\" button\r\n                        [attr.aria-label]=\"result.fullname\" (click)=\"gotoDiscussion(result.userid, result.messageid)\"\r\n                        [attr.aria-current]=\"result.userid == discussionUserId ? 'page' : 'false'\" detail=\"false\">\r\n                        <core-user-avatar [user]=\"result\" slot=\"start\" [checkOnline]=\"result.showonlinestatus\"></core-user-avatar>\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ result.fullname }}</p>\r\n                            <p>\r\n                                <core-format-text clean=\"true\" singleLine=\"true\" [text]=\"result.lastmessage\" contextLevel=\"system\"\r\n                                    [contextInstanceId]=\"0\"></core-format-text>\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!search.showResults\">\r\n                    <ion-item class=\"ion-text-wrap addon-message-discussion\" *ngFor=\"let discussion of discussions\" button\r\n                        [attr.aria-label]=\"discussion.fullname\" (click)=\"gotoDiscussion(discussion.message!.user)\"\r\n                        [attr.aria-current]=\"discussion.message!.user == discussionUserId ? 'page' : 'false'\" detail=\"false\">\r\n                        <core-user-avatar [user]=\"discussion\" slot=\"start\" checkOnline=\"false\"></core-user-avatar>\r\n                        <ion-label>\r\n                            <div class=\"flex-row ion-justify-content-between\">\r\n                                <p class=\"item-heading\">{{ discussion.fullname }}</p>\r\n                                <ion-note *ngIf=\"discussion.message!.timecreated > 0 || discussion.unread\">\r\n                                    <span *ngIf=\"discussion.message!.timecreated > 0\" class=\"addon-message-last-message-date\">\r\n                                        {{discussion.message!.timecreated / 1000 | coreDateDayOrTime}}\r\n                                    </span>\r\n                                    <ion-icon *ngIf=\"discussion.unread\" name=\"fas-circle\" color=\"primary\" aria-hidden=\"true\">\r\n                                    </ion-icon>\r\n                                    <span *ngIf=\"discussion.unread\" class=\"sr-only\">\r\n                                        {{ 'addon.messages.unreadmessages' | translate }}\r\n                                    </span>\r\n                                </ion-note>\r\n                            </div>\r\n                            <p>\r\n                                <core-format-text clean=\"true\" singleLine=\"true\" [text]=\"discussion.message!.message\" contextLevel=\"system\"\r\n                                    [contextInstanceId]=\"0\">\r\n                                </core-format-text>\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ng-container>\r\n            </ion-list>\r\n\r\n            <core-empty-box *ngIf=\"(!discussions || discussions.length <= 0) && !search.showResults\" icon=\"far-comments\"\r\n                [message]=\"'addon.messages.nomessagesfound' | translate\"></core-empty-box>\r\n\r\n            <core-empty-box *ngIf=\"(!search.results || search.results.length <= 0) && search.showResults\" icon=\"fas-search\"\r\n                [message]=\"'core.noresults' | translate\"></core-empty-box>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/messages/pages/discussions-35/discussions.module.ts":
/*!************************************************************************!*\
  !*** ./src/addons/messages/pages/discussions-35/discussions.module.ts ***!
  \************************************************************************/
/*! exports provided: AddonMessagesDiscussions35PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussions35PageModule", function() { return AddonMessagesDiscussions35PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @addons/messages/messages-lazy.module */ "./src/addons/messages/messages-lazy.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/search/components/components.module */ "./src/core/features/search/components/components.module.ts");
/* harmony import */ var _discussions_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./discussions.page */ "./src/addons/messages/pages/discussions-35/discussions.page.ts");
/* harmony import */ var _addons_messages_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @addons/messages/services/handlers/mainmenu */ "./src/addons/messages/services/handlers/mainmenu.ts");
/* harmony import */ var _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/mainmenu/components/components.module */ "./src/core/features/mainmenu/components/components.module.ts");
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
        data: {
            mainMenuTabRoot: _addons_messages_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_9__["AddonMessagesMainMenuHandlerService"].PAGE_NAME,
        },
        component: _discussions_page__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesDiscussions35Page"],
    },
    ..._addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_5__["DISCUSSION_ROUTES"],
];
const tabletRoutes = [
    {
        path: '',
        data: {
            mainMenuTabRoot: _addons_messages_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_9__["AddonMessagesMainMenuHandlerService"].PAGE_NAME,
        },
        component: _discussions_page__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesDiscussions35Page"],
        children: _addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_5__["DISCUSSION_ROUTES"],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_3__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_3__["CoreScreen"].isTablet),
];
let AddonMessagesDiscussions35PageModule = class AddonMessagesDiscussions35PageModule {
};
AddonMessagesDiscussions35PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_6__["CoreSharedModule"],
            _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_7__["CoreSearchComponentsModule"],
            _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_10__["CoreMainMenuComponentsModule"],
        ],
        declarations: [
            _discussions_page__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesDiscussions35Page"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonMessagesDiscussions35PageModule);



/***/ }),

/***/ "./src/addons/messages/pages/discussions-35/discussions.page.ts":
/*!**********************************************************************!*\
  !*** ./src/addons/messages/pages/discussions-35/discussions.page.ts ***!
  \**********************************************************************/
/*! exports provided: AddonMessagesDiscussions35Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussions35Page", function() { return AddonMessagesDiscussions35Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_pushnotifications_services_push_delegate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/pushnotifications/services/push-delegate */ "./src/core/features/pushnotifications/services/push-delegate.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @features/mainmenu/classes/deep-link-manager */ "./src/core/features/mainmenu/classes/deep-link-manager.ts");
/* harmony import */ var _services_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/platform */ "./src/core/services/platform.ts");
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
 * Page that displays the list of discussions.
 */
let AddonMessagesDiscussions35Page = class AddonMessagesDiscussions35Page {
    constructor(route) {
        this.route = route;
        this.loaded = false;
        this.loadingMessage = '';
        this.discussions = [];
        this.search = {
            showResults: false,
            results: [],
            loading: '',
            text: '',
        };
        this.search.loading = _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.searching');
        this.loadingMessages = _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.loading');
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteId();
        // Update discussions when new message is received.
        this.newMessagesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].NEW_MESSAGE_EVENT, (data) => {
            if (data.userId && this.discussions) {
                const discussion = this.discussions.find((disc) => disc.message.user == data.userId);
                if (discussion === undefined) {
                    this.loaded = false;
                    this.refreshData().finally(() => {
                        this.loaded = true;
                    });
                }
                else {
                    // An existing discussion has a new message, update the last message.
                    discussion.message.message = data.message;
                    discussion.message.timecreated = data.timecreated;
                }
            }
        }, this.siteId);
        // Update discussions when a message is read.
        this.readChangedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].READ_CHANGED_EVENT, (data) => {
            if (data.userId && this.discussions) {
                const discussion = this.discussions.find((disc) => disc.message.user == data.userId);
                if (discussion !== undefined) {
                    // A discussion has been read reset counter.
                    discussion.unread = false;
                    // Conversations changed, invalidate them and refresh unread counts.
                    _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].invalidateConversations(this.siteId);
                    _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].refreshUnreadConversationCounts(this.siteId);
                }
            }
        }, this.siteId);
        // Refresh the view when the app is resumed.
        this.appResumeSubscription = _services_platform__WEBPACK_IMPORTED_MODULE_14__["CorePlatform"].resume.subscribe(() => {
            if (!this.loaded) {
                return;
            }
            this.loaded = false;
            this.refreshData();
        });
        // If a message push notification is received, refresh the view.
        this.pushObserver = _features_pushnotifications_services_push_delegate__WEBPACK_IMPORTED_MODULE_9__["CorePushNotificationsDelegate"].on('receive')
            .subscribe((notification) => {
            // New message received. If it's from current site, refresh the data.
            if (_services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].isFalseOrZero(notification.notif) && notification.site == this.siteId) {
                // Don't refresh unread counts, it's refreshed from the main menu handler in this case.
                this.refreshData(undefined, false);
            }
        });
    }
    /**
     * Component loaded.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.queryParams.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var _a;
                // When a child page loads this callback is triggered too.
                this.discussionUserId = (_a = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('userId', { params })) !== null && _a !== void 0 ? _a : this.discussionUserId;
            }));
            const deepLinkManager = new _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_13__["CoreMainMenuDeepLinkManager"]();
            yield this.fetchData();
            if (!this.discussionUserId && this.discussions.length > 0 && _services_screen__WEBPACK_IMPORTED_MODULE_12__["CoreScreen"].isTablet) {
                // Take first and load it.
                yield this.gotoDiscussion(this.discussions[0].message.user);
            }
            // Treat deep link now that the conversation route has been loaded if needed.
            deepLinkManager.treatLink();
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param refreshUnreadCounts Whteher to refresh unread counts.
     * @return Promise resolved when done.
     */
    refreshData(refresher, refreshUnreadCounts = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].invalidateDiscussionsCache(this.siteId));
            if (refreshUnreadCounts) {
                promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].invalidateUnreadConversationCounts(this.siteId));
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].allPromises(promises).finally(() => this.fetchData().finally(() => {
                if (refresher) {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                }
            }));
        });
    }
    /**
     * Fetch discussions.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingMessage = this.loadingMessages;
            const promises = [];
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].getDiscussions(this.siteId).then((discussions) => {
                // Convert to an array for sorting.
                const discussionsSorted = [];
                for (const userId in discussions) {
                    discussions[userId].unread = !!discussions[userId].unread;
                    discussionsSorted.push(discussions[userId]);
                }
                this.discussions = discussionsSorted.sort((a, b) => { var _a, _b; return (((_a = b.message) === null || _a === void 0 ? void 0 : _a.timecreated) || 0) - (((_b = a.message) === null || _b === void 0 ? void 0 : _b.timecreated) || 0); });
                return;
            }));
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].getUnreadConversationCounts(this.siteId));
            try {
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
            }
            this.loaded = true;
        });
    }
    /**
     * Clear search and show discussions again.
     */
    clearSearch() {
        this.loaded = false;
        this.search.showResults = false;
        this.search.text = ''; // Reset searched string.
        this.fetchData().finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Search messages cotaining text.
     *
     * @param query Text to search for.
     * @return Resolved when done.
     */
    searchMessage(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_app__WEBPACK_IMPORTED_MODULE_7__["CoreApp"].closeKeyboard();
            this.loaded = false;
            this.loadingMessage = this.search.loading;
            try {
                const searchResults = yield _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].searchMessages(query, undefined, undefined, undefined, this.siteId);
                this.search.showResults = true;
                this.search.results = searchResults.messages;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
            }
            this.loaded = true;
        });
    }
    /**
     * Navigate to a particular discussion.
     *
     * @param discussionUserId Discussion Id to load.
     * @param messageId Message to scroll after loading the discussion. Used when searching.
     * @param onlyWithSplitView Only go to Discussion if split view is on.
     */
    gotoDiscussion(discussionUserId, messageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.discussionUserId = discussionUserId;
            const params = {};
            if (messageId) {
                params.message = messageId;
            }
            const path = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRelativePathToParent('/messages/index') + `discussion/user/${discussionUserId}`;
            yield _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigate(path, { params });
        });
    }
    /**
     * Navigate to contacts view.
     */
    gotoContacts() {
        const params = {};
        if (_services_screen__WEBPACK_IMPORTED_MODULE_12__["CoreScreen"].isTablet && this.discussionUserId) {
            params.discussionUserId = this.discussionUserId;
        }
        _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigateToSitePath('contacts-35', { params });
    }
    /**
     * Component destroyed.
     */
    ngOnDestroy() {
        var _a, _b, _c, _d;
        (_a = this.newMessagesObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.readChangedObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.appResumeSubscription) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        (_d = this.pushObserver) === null || _d === void 0 ? void 0 : _d.unsubscribe();
    }
};
AddonMessagesDiscussions35Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
AddonMessagesDiscussions35Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'addon-messages-discussions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discussions.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussions-35/discussions.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../messages-common.scss */ "./src/addons/messages/messages-common.scss")).default]
    })
], AddonMessagesDiscussions35Page);



/***/ })

}]);
//# sourceMappingURL=pages-discussions-35-discussions-module.js.map