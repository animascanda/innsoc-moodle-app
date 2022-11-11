(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-lazy-module"],{

/***/ "./src/addons/messages/guards/index.ts":
/*!*********************************************!*\
  !*** ./src/addons/messages/guards/index.ts ***!
  \*********************************************/
/*! exports provided: AddonMessagesIndexGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesIndexGuard", function() { return AddonMessagesIndexGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/handlers/mainmenu */ "./src/addons/messages/services/handlers/mainmenu.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/messages */ "./src/addons/messages/services/messages.ts");
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
 * Guard to redirect to the right page based on the current Moodle site version.
 */
let AddonMessagesIndexGuard = class AddonMessagesIndexGuard {
    /**
     * @inheritdoc
     */
    canActivate(route) {
        return this.guard(route);
    }
    /**
     * Check if there is a pending redirect and trigger it.
     */
    guard(route) {
        const enabled = _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].isGroupMessagingEnabled();
        const path = `/main/${_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_3__["AddonMessagesMainMenuHandlerService"].PAGE_NAME}/` + (enabled ? 'group-conversations' : 'index');
        const newRoute = _singletons__WEBPACK_IMPORTED_MODULE_2__["Router"].parseUrl(path);
        newRoute.queryParams = route.queryParams;
        return newRoute;
    }
};
AddonMessagesIndexGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AddonMessagesIndexGuard);



/***/ }),

/***/ "./src/addons/messages/messages-lazy.module.ts":
/*!*****************************************************!*\
  !*** ./src/addons/messages/messages-lazy.module.ts ***!
  \*****************************************************/
/*! exports provided: DISCUSSION_ROUTES, AddonMessagesLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCUSSION_ROUTES", function() { return DISCUSSION_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesLazyModule", function() { return AddonMessagesLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards */ "./src/addons/messages/guards/index.ts");
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





const DISCUSSION_ROUTES = [
    {
        path: 'discussion/user/:userId',
        loadChildren: () => Promise.all(/*! import() | pages-discussion-discussion-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-discussion-discussion-module")]).then(__webpack_require__.bind(null, /*! ./pages/discussion/discussion.module */ "./src/addons/messages/pages/discussion/discussion.module.ts"))
            .then(m => m.AddonMessagesDiscussionPageModule),
    },
    {
        path: 'discussion/:conversationId',
        loadChildren: () => Promise.all(/*! import() | pages-discussion-discussion-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-discussion-discussion-module")]).then(__webpack_require__.bind(null, /*! ./pages/discussion/discussion.module */ "./src/addons/messages/pages/discussion/discussion.module.ts"))
            .then(m => m.AddonMessagesDiscussionPageModule),
    },
];
function buildRoutes(injector) {
    return [
        {
            path: 'index',
            loadChildren: () => Promise.all(/*! import() | pages-discussions-35-discussions-module */[__webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-login-pages-c~d66fb4f8"), __webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-login-pages-r~b60f3355"), __webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-login-pages-r~353fa808"), __webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-tag-pages-sea~fc222c92"), __webpack_require__.e("default~pages-contacts-35-contacts-module~pages-contacts-contacts-module~pages-discussions-35-discus~af3981aa"), __webpack_require__.e("common"), __webpack_require__.e("pages-discussions-35-discussions-module")]).then(__webpack_require__.bind(null, /*! ./pages/discussions-35/discussions.module */ "./src/addons/messages/pages/discussions-35/discussions.module.ts")).then(m => m.AddonMessagesDiscussions35PageModule),
        },
        {
            path: 'contacts-35',
            loadChildren: () => Promise.all(/*! import() | pages-contacts-35-contacts-module */[__webpack_require__.e("default~pages-contacts-35-contacts-module~pages-contacts-contacts-module~pages-discussions-35-discus~af3981aa"), __webpack_require__.e("pages-contacts-35-contacts-module")]).then(__webpack_require__.bind(null, /*! ./pages/contacts-35/contacts.module */ "./src/addons/messages/pages/contacts-35/contacts.module.ts")).then(m => m.AddonMessagesContacts35PageModule),
        },
        {
            path: 'group-conversations',
            loadChildren: () => Promise.all(/*! import() | pages-group-conversations-group-conversations-module */[__webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-login-pages-c~d66fb4f8"), __webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-login-pages-r~b60f3355"), __webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-login-pages-r~353fa808"), __webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-tag-pages-sea~fc222c92"), __webpack_require__.e("default~pages-contacts-35-contacts-module~pages-contacts-contacts-module~pages-discussions-35-discus~af3981aa"), __webpack_require__.e("common"), __webpack_require__.e("pages-group-conversations-group-conversations-module")]).then(__webpack_require__.bind(null, /*! ./pages/group-conversations/group-conversations.module */ "./src/addons/messages/pages/group-conversations/group-conversations.module.ts"))
                .then(m => m.AddonMessagesGroupConversationsPageModule),
        },
        ...DISCUSSION_ROUTES,
        {
            path: 'search',
            loadChildren: () => __webpack_require__.e(/*! import() | pages-search-search-module */ "pages-search-search-module").then(__webpack_require__.bind(null, /*! ./pages/search/search.module */ "./src/addons/messages/pages/search/search.module.ts"))
                .then(m => m.AddonMessagesSearchPageModule),
        },
        {
            path: 'contacts',
            loadChildren: () => Promise.all(/*! import() | pages-contacts-contacts-module */[__webpack_require__.e("default~pages-contacts-35-contacts-module~pages-contacts-contacts-module~pages-discussions-35-discus~af3981aa"), __webpack_require__.e("pages-contacts-contacts-module")]).then(__webpack_require__.bind(null, /*! ./pages/contacts/contacts.module */ "./src/addons/messages/pages/contacts/contacts.module.ts"))
                .then(m => m.AddonMessagesContactsPageModule),
        },
        {
            path: 'message-settings',
            loadChildren: () => __webpack_require__.e(/*! import() | pages-settings-settings-module */ "pages-settings-settings-module").then(__webpack_require__.bind(null, /*! ./pages/settings/settings.module */ "./src/addons/messages/pages/settings/settings.module.ts")).then(m => m.AddonMessagesSettingsPageModule),
        },
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_3__["buildTabMainRoutes"])(injector, {
            canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesIndexGuard"]],
        }),
    ];
}
let AddonMessagesLazyModule = class AddonMessagesLazyModule {
};
AddonMessagesLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]],
                useFactory: buildRoutes,
            },
        ],
    })
], AddonMessagesLazyModule);



/***/ })

}]);
//# sourceMappingURL=messages-lazy-module.js.map