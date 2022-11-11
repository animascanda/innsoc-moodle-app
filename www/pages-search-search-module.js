(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/search/search.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/search/search.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.messages.searchcombined' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <core-search-box (onSubmit)=\"search($event)\" (onClear)=\"clearSearch()\" [disabled]=\"disableSearch\" autocorrect=\"off\"\r\n            [spellcheck]=\"false\" [autoFocus]=\"true\" [lengthCheck]=\"1\" searchArea=\"AddonMessagesSearch\"></core-search-box>\r\n\r\n        <core-loading [hideUntil]=\"!displaySearching\" [message]=\"'core.searching' | translate\">\r\n            <ion-list *ngIf=\"displayResults\">\r\n                <ng-container *ngTemplateOutlet=\"resultsTemplate; context: {item: contacts}\"></ng-container>\r\n                <ng-container *ngTemplateOutlet=\"resultsTemplate; context: {item: nonContacts}\"></ng-container>\r\n                <ng-container *ngTemplateOutlet=\"resultsTemplate; context: {item: messages}\"></ng-container>\r\n                <!-- The infinite loading cannot be inside the ng-template, it fails because it doesn't find ion-content. -->\r\n                <core-infinite-loading [enabled]=\"messages.canLoadMore\" (action)=\"search(query, 'messages', $event)\"\r\n                    [error]=\"messages.loadMoreError\"></core-infinite-loading>\r\n            </ion-list>\r\n\r\n            <core-empty-box *ngIf=\"displayResults && !contacts.results.length && !nonContacts.results.length && !messages.results.length\"\r\n                icon=\"fas-search\" [message]=\"'core.noresults' | translate\">\r\n            </core-empty-box>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n\r\n<!-- Template to render a list of results -->\r\n<ng-template #resultsTemplate let-item=\"item\">\r\n    <ng-container *ngIf=\"item.results.length > 0\">\r\n        <ion-item-divider class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <h2>{{ item.titleString | translate }}</h2>\r\n            </ion-label>\r\n        </ion-item-divider>\r\n\r\n        <!-- List of results -->\r\n        <ion-item class=\"addon-message-discussion ion-text-wrap\" *ngFor=\"let result of item.results\" [attr.aria-label]=\"result.fullname\"\r\n            (click)=\"openConversation(result)\" [attr.aria-current]=\"result == selectedResult ? 'page' : 'false'\" detail=\"true\" button>\r\n            <core-user-avatar slot=\"start\" [user]=\"result\" [checkOnline]=\"true\" [linkProfile]=\"false\"></core-user-avatar>\r\n            <ion-label>\r\n                <p class=\"item-heading\">\r\n                    <core-format-text [text]=\"result.fullname\" [highlight]=\"result.highlightName\" [filter]=\"false\">\r\n                    </core-format-text>\r\n                    <ion-icon name=\"fas-ban\" *ngIf=\"result.isblocked\" [attr.aria-label]=\"'addon.messages.contactblocked' | translate\">\r\n                    </ion-icon>\r\n                </p>\r\n                <ion-note *ngIf=\"result.lastmessagedate > 0\">\r\n                    {{result.lastmessagedate | coreDateDayOrTime}}\r\n                </ion-note>\r\n                <p class=\"addon-message-last-message\">\r\n                    <span *ngIf=\"result.sentfromcurrentuser\" class=\"addon-message-last-message-user\">\r\n                        {{ 'addon.messages.you' | translate }}\r\n                    </span>\r\n                    <core-format-text clean=\"true\" singleLine=\"true\" [text]=\"result.lastmessage\" [highlight]=\"result.highlightMessage\"\r\n                        contextLevel=\"system\" [contextInstanceId]=\"0\" class=\"addon-message-last-message-text\"></core-format-text>\r\n                </p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n        <!-- Load more button for contacts and non-contacts -->\r\n        <ng-container *ngIf=\"item.type != 'messages'\">\r\n            <div class=\"ion-padding-horizontal\" *ngIf=\"item.canLoadMore && !item.loadingMore\">\r\n                <ion-button expand=\"block\" fill=\"outline\" (click)=\"search(query, item.type)\">\r\n                    {{ 'core.loadmore' | translate }}\r\n                </ion-button>\r\n            </div>\r\n            <div *ngIf=\"item.loadingMore\" class=\"ion-padding ion-text-center\">\r\n                <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n            </div>\r\n        </ng-container>\r\n    </ng-container>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./src/addons/messages/pages/search/search.module.ts":
/*!***********************************************************!*\
  !*** ./src/addons/messages/pages/search/search.module.ts ***!
  \***********************************************************/
/*! exports provided: AddonMessagesSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesSearchPageModule", function() { return AddonMessagesSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @addons/messages/messages-lazy.module */ "./src/addons/messages/messages-lazy.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/search/components/components.module */ "./src/core/features/search/components/components.module.ts");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search.page */ "./src/addons/messages/pages/search/search.page.ts");
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
        component: _search_page__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesSearchPage"],
    },
    ..._addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_5__["DISCUSSION_ROUTES"],
];
const tabletRoutes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesSearchPage"],
        children: _addons_messages_messages_lazy_module__WEBPACK_IMPORTED_MODULE_5__["DISCUSSION_ROUTES"],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_3__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_3__["CoreScreen"].isTablet),
];
let AddonMessagesSearchPageModule = class AddonMessagesSearchPageModule {
};
AddonMessagesSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_6__["CoreSharedModule"],
            _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_7__["CoreSearchComponentsModule"],
        ],
        declarations: [
            _search_page__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesSearchPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonMessagesSearchPageModule);



/***/ }),

/***/ "./src/addons/messages/pages/search/search.page.ts":
/*!*********************************************************!*\
  !*** ./src/addons/messages/pages/search/search.page.ts ***!
  \*********************************************************/
/*! exports provided: AddonMessagesSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesSearchPage", function() { return AddonMessagesSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
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
 * Page for searching users.
 */
let AddonMessagesSearchPage = class AddonMessagesSearchPage {
    constructor() {
        this.disableSearch = false;
        this.displaySearching = false;
        this.displayResults = false;
        this.query = '';
        this.contacts = {
            type: 'contacts',
            titleString: 'addon.messages.contacts',
            results: [],
            canLoadMore: false,
            loadingMore: false,
        };
        this.nonContacts = {
            type: 'noncontacts',
            titleString: 'addon.messages.noncontacts',
            results: [],
            canLoadMore: false,
            loadingMore: false,
        };
        this.messages = {
            type: 'messages',
            titleString: 'addon.messages.messages',
            results: [],
            canLoadMore: false,
            loadingMore: false,
            loadMoreError: false,
        };
        // Update block status of a user.
        this.memberInfoObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].MEMBER_INFO_CHANGED_EVENT, (data) => {
            if (!data.userBlocked && !data.userUnblocked) {
                // The block status has not changed, ignore.
                return;
            }
            const contact = this.contacts.results.find((user) => user.id == data.userId);
            if (contact) {
                contact.isblocked = !!data.userBlocked;
            }
            else {
                const nonContact = this.nonContacts.results.find((user) => user.id == data.userId);
                if (nonContact) {
                    nonContact.isblocked = !!data.userBlocked;
                }
            }
            this.messages.results.forEach((message) => {
                if (message.userid == data.userId) {
                    message.isblocked = !!data.userBlocked;
                }
            });
        }, _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteId());
    }
    /**
     * Clear search.
     */
    clearSearch() {
        this.query = '';
        this.displayResults = false;
        // Empty details.
        const path = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRelativePathToParent('/messages/search');
        if (path) {
            _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigate(path);
        }
    }
    /**
     * Start a new search or load more results.
     *
     * @param query Text to search for.
     * @param loadMore Load more contacts, noncontacts or messages. If undefined, start a new search.
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    search(query, loadMore, infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_app__WEBPACK_IMPORTED_MODULE_6__["CoreApp"].closeKeyboard();
            this.query = query;
            this.disableSearch = true;
            this.displaySearching = !loadMore;
            const promises = [];
            let newContacts = [];
            let newNonContacts = [];
            let newMessages = [];
            let canLoadMoreContacts = false;
            let canLoadMoreNonContacts = false;
            let canLoadMoreMessages = false;
            if (!loadMore || loadMore == 'contacts' || loadMore == 'noncontacts') {
                const limitNum = loadMore ? _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].LIMIT_SEARCH : _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].LIMIT_INITIAL_USER_SEARCH;
                let limitFrom = 0;
                if (loadMore == 'contacts') {
                    limitFrom = this.contacts.results.length;
                    this.contacts.loadingMore = true;
                }
                else if (loadMore == 'noncontacts') {
                    limitFrom = this.nonContacts.results.length;
                    this.nonContacts.loadingMore = true;
                }
                promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].searchUsers(query, limitFrom, limitNum).then((result) => {
                    if (!loadMore || loadMore == 'contacts') {
                        newContacts = result.contacts;
                        canLoadMoreContacts = result.canLoadMoreContacts;
                    }
                    if (!loadMore || loadMore == 'noncontacts') {
                        newNonContacts = result.nonContacts;
                        canLoadMoreNonContacts = result.canLoadMoreNonContacts;
                    }
                    return;
                }));
            }
            if (!loadMore || loadMore == 'messages') {
                let limitFrom = 0;
                if (loadMore == 'messages') {
                    limitFrom = this.messages.results.length;
                    this.messages.loadingMore = true;
                }
                promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].searchMessages(query, undefined, limitFrom).then((result) => {
                    newMessages = result.messages;
                    canLoadMoreMessages = result.canLoadMore;
                    return;
                }));
            }
            try {
                yield Promise.all(promises);
                if (!loadMore) {
                    this.contacts.results = [];
                    this.nonContacts.results = [];
                    this.messages.results = [];
                }
                this.displayResults = true;
                if (!loadMore || loadMore == 'contacts') {
                    this.contacts.results.push(...newContacts);
                    this.contacts.canLoadMore = canLoadMoreContacts;
                    this.setHighlight(newContacts, true);
                }
                if (!loadMore || loadMore == 'noncontacts') {
                    this.nonContacts.results.push(...newNonContacts);
                    this.nonContacts.canLoadMore = canLoadMoreNonContacts;
                    this.setHighlight(newNonContacts, true);
                }
                if (!loadMore || loadMore == 'messages') {
                    this.messages.results.push(...newMessages);
                    this.messages.canLoadMore = canLoadMoreMessages;
                    this.messages.loadMoreError = false;
                    this.setHighlight(newMessages, false);
                }
                if (!loadMore) {
                    if (this.contacts.results.length > 0) {
                        this.openConversation(this.contacts.results[0], true);
                    }
                    else if (this.nonContacts.results.length > 0) {
                        this.openConversation(this.nonContacts.results[0], true);
                    }
                    else if (this.messages.results.length > 0) {
                        this.openConversation(this.messages.results[0], true);
                    }
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingusers', true);
                if (loadMore == 'messages') {
                    this.messages.loadMoreError = true;
                }
            }
            finally {
                this.disableSearch = false;
                this.displaySearching = false;
                if (loadMore == 'contacts') {
                    this.contacts.loadingMore = false;
                }
                else if (loadMore == 'noncontacts') {
                    this.nonContacts.loadingMore = false;
                }
                else if (loadMore == 'messages') {
                    this.messages.loadingMore = false;
                }
                infiniteComplete && infiniteComplete();
            }
        });
    }
    /**
     * Open a conversation in the split view.
     *
     * @param result User or message.
     * @param onInit Whether the tser was selected on initial load.
     */
    openConversation(result, onInit = false) {
        if (!onInit || _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isTablet) {
            this.selectedResult = result;
            let conversationId;
            let userId;
            if ('conversationid' in result) {
                conversationId = result.conversationid;
            }
            else {
                userId = result.id;
            }
            const path = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRelativePathToParent('/messages/search') + 'discussion/' +
                (conversationId ? conversationId : `user/${userId}`);
            _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigate(path);
        }
    }
    /**
     * Set the highlight values for each entry.
     *
     * @param results Results to highlight.
     * @param isUser Whether the results are from a user search or from a message search.
     */
    setHighlight(results, isUser = false) {
        results.forEach((result) => {
            result.highlightName = isUser ? this.query : undefined;
            result.highlightMessage = !isUser ? this.query : undefined;
        });
    }
    /**
     * Component destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.memberInfoObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
AddonMessagesSearchPage.ctorParameters = () => [];
AddonMessagesSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/search/search.html")).default,
    })
], AddonMessagesSearchPage);



/***/ })

}]);
//# sourceMappingURL=pages-search-search-module.js.map