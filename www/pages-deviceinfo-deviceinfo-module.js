(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-deviceinfo-deviceinfo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/dev/dev.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/dev/dev.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.settings.developeroptions' | translate }}</h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\" *ngIf=\"siteId\">\r\n            <ion-button fill=\"clear\" (click)=\"copyInfo()\" [attr.aria-label]=\"'core.settings.copyinfo' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-clipboard\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-list class=\"list-item-limited-width\">\r\n        <ion-item class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <h2>Text direction</h2>\r\n                <p>{{ direction }}</p>\r\n            </ion-label>\r\n            <ion-toggle [(ngModel)]=\"rtl\" (ionChange)=\"RTLChanged()\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <h2>Force safe area margins</h2>\r\n            </ion-label>\r\n            <ion-toggle [(ngModel)]=\"forceSafeAreaMargins\" (ionChange)=\"safeAreaChanged()\"></ion-toggle>\r\n        </ion-item>\r\n        <ng-container *ngIf=\"siteId\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <h2>Enable remote styles <ion-badge>{{remoteStylesCount}}</ion-badge>\r\n                    </h2>\r\n                </ion-label>\r\n                <ion-toggle [(ngModel)]=\"remoteStyles\" (ionChange)=\"remoteStylesChanged()\"></ion-toggle>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <h2>Enable site plugin styles <ion-badge>{{pluginStylesCount}}</ion-badge>\r\n                    </h2>\r\n                </ion-label>\r\n                <ion-toggle [(ngModel)]=\"pluginStyles\" (ionChange)=\"pluginStylesChanged()\"></ion-toggle>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"userToursEnabled\">\r\n                <ion-label>\r\n                    <h2>Reset user tours</h2>\r\n                </ion-label>\r\n                <ion-button (click)=\"resetUserTours()\" aria-label=\"Reset user tours\" fill=\"clear\" slot=\"end\">\r\n                    <ion-icon slot=\"icon-only\" aria-hidden=\"true\" name=\"fas-broom\"></ion-icon>\r\n                </ion-button>\r\n            </ion-item>\r\n\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    <h2>Disabled features</h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item class=\"ion-text-wrap\" *ngFor=\"let feature of disabledFeatures\">\r\n                <ion-label>\r\n                    <h2>{{ feature }}</h2>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    <h2>Site plugins</h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item class=\"ion-text-wrap\" *ngFor=\"let plugin of sitePlugins\">\r\n                <ion-label>\r\n                    <h2>{{ plugin.addon }} ({{plugin.component}})</h2>\r\n                    <p>{{plugin.version}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ng-container>\r\n    </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/deviceinfo/deviceinfo.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/deviceinfo/deviceinfo.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                {{ 'core.settings.deviceinfo' | translate }}\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"copyInfo()\" [attr.aria-label]=\"'core.settings.copyinfo' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-clipboard\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list class=\"list-item-limited-width\">\r\n        <ion-item *ngIf=\"showDevOptions\" detail=\"true\" (click)=\"gotoDevOptions()\">\r\n            <ion-icon name=\"fas-terminal\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n            <ion-label class=\"ion-text-wrap\">\r\n                {{ 'core.settings.developeroptions' | translate }}\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.appversion' | translate}}</h2>\r\n                <p>{{ deviceInfo.versionName }} ({{ deviceInfo.versionCode }})</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item (longPress)=\"copyItemInfo($event)\" (click)=\"enableDevOptions()\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.compilationinfo' | translate }}</h2>\r\n                <p *ngIf=\"deviceInfo.compilationTime\">{{ deviceInfo.compilationTime | coreFormatDate: \"LLL Z\": false }}</p>\r\n                <p *ngIf=\"deviceInfo.lastCommit\">{{ deviceInfo.lastCommit }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.siteUrl\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.siteinfo' | translate }}<ng-container *ngIf=\"deviceInfo.isPrefixedUrl\"> *</ng-container>\r\n                </h2>\r\n                <p><a [href]=\"deviceInfo.siteUrl\" core-link auto-login=\"yes\">{{ deviceInfo.siteUrl }}</a></p>\r\n                <p *ngIf=\"deviceInfo.siteVersion\">{{ deviceInfo.siteVersion }}</p>\r\n                <p *ngIf=\"deviceInfo.siteId\">{{ deviceInfo.siteId }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.fileSystemRoot\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.filesystemroot' | translate }}</h2>\r\n                <p>\r\n                    <a *ngIf=\"fsClickable\" [href]=\"deviceInfo.fileSystemRoot\" core-link auto-login=\"no\">\r\n                        {{ deviceInfo.fileSystemRoot }}\r\n                    </a>\r\n                </p>\r\n                <p *ngIf=\"!fsClickable\">{{ deviceInfo.fileSystemRoot }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.userAgent\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.navigatoruseragent' | translate }}</h2>\r\n                <p>{{ deviceInfo.userAgent }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.browserLanguage\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.navigatorlanguage' | translate }}</h2>\r\n                <p>{{ deviceInfo.browserLanguage }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.currentLanguage\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.currentlanguage' | translate }}</h2>\r\n                <p>{{ currentLangName }} ({{ deviceInfo.currentLanguage }})</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.locationHref\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.locationhref' | translate }}</h2>\r\n                <p>{{ deviceInfo.locationHref }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.deviceType\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.displayformat' | translate }}</h2>\r\n                <p>{{ 'core.' + deviceInfo.deviceType | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.deviceOs && deviceOsTranslated\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.deviceos' | translate}}</h2>\r\n                <p>{{ deviceOsTranslated }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.screen\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.screen' | translate }}</h2>\r\n                <p>{{ deviceInfo.screen }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.networkstatus' | translate}}</h2>\r\n                <p>{{ 'core.' + deviceInfo.networkStatus | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.wificonnection' | translate}}</h2>\r\n                <p>{{ 'core.' + deviceInfo.wifiConnection | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.cordovaVersion\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.cordovaversion' | translate }}</h2>\r\n                <p>{{ deviceInfo.cordovaVersion }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.platform\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.cordovadeviceplatform' | translate }}</h2>\r\n                <p>{{ deviceInfo.platform }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.osVersion\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.cordovadeviceosversion' | translate }}</h2>\r\n                <p>{{ deviceInfo.osVersion }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.model\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.cordovadevicemodel' | translate}}</h2>\r\n                <p>{{ deviceInfo.model }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.uuid\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.cordovadeviceuuid' | translate}}</h2>\r\n                <p>{{ deviceInfo.uuid }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.pushId\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.pushid' | translate }}</h2>\r\n                <p>{{ deviceInfo.pushId }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h2>{{ 'core.settings.localnotifavailable' | translate }}</h2>\r\n                <p>{{ 'core.' + deviceInfo.localNotifAvailable | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/settings/pages/dev/dev.ts":
/*!*****************************************************!*\
  !*** ./src/core/features/settings/pages/dev/dev.ts ***!
  \*****************************************************/
/*! exports provided: CoreSettingsDevPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsDevPage", function() { return CoreSettingsDevPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_siteplugins_services_siteplugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/siteplugins/services/siteplugins */ "./src/core/features/siteplugins/services/siteplugins.ts");
/* harmony import */ var _features_usertours_services_user_tours__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/usertours/services/user-tours */ "./src/core/features/usertours/services/user-tours.ts");
/* harmony import */ var _services_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/platform */ "./src/core/services/platform.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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
 * Page that displays the developer options.
 */
let CoreSettingsDevPage = class CoreSettingsDevPage {
    constructor() {
        this.rtl = false;
        this.forceSafeAreaMargins = false;
        this.direction = 'ltr';
        this.remoteStyles = true;
        this.remoteStylesCount = 0;
        this.pluginStyles = true;
        this.pluginStylesCount = 0;
        this.sitePlugins = [];
        this.userToursEnabled = true;
        this.disabledFeatures = [];
    }
    ngOnInit() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.rtl = _services_platform__WEBPACK_IMPORTED_MODULE_4__["CorePlatform"].isRTL;
            this.RTLChanged();
            this.forceSafeAreaMargins = document.documentElement.classList.contains('force-safe-area-margins');
            this.safeAreaChanged();
            this.siteId = (_a = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSite()) === null || _a === void 0 ? void 0 : _a.getId();
            if (!this.siteId) {
                return;
            }
            this.remoteStyles = false;
            this.remoteStylesCount = 0;
            this.pluginStyles = false;
            this.pluginStylesCount = 0;
            this.userToursEnabled = !_features_usertours_services_user_tours__WEBPACK_IMPORTED_MODULE_3__["CoreUserTours"].isDisabled();
            document.head.querySelectorAll('style').forEach((style) => {
                if (this.siteId && style.id.endsWith(this.siteId)) {
                    if (style.innerHTML.length > 0) {
                        this.remoteStylesCount++;
                    }
                    this.remoteStyles = this.remoteStyles || style.getAttribute('media') != 'disabled';
                }
                if (style.id.startsWith('siteplugin-')) {
                    if (style.innerHTML.length > 0) {
                        this.pluginStylesCount++;
                    }
                    this.pluginStyles = this.pluginStyles || style.getAttribute('media') != 'disabled';
                }
            });
            this.sitePlugins = _features_siteplugins_services_siteplugins__WEBPACK_IMPORTED_MODULE_2__["CoreSitePlugins"].getCurrentSitePluginList().map((plugin) => ({
                addon: plugin.addon,
                component: plugin.component,
                version: plugin.version,
            }));
            const disabledFeatures = (_c = (yield ((_b = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSite()) === null || _b === void 0 ? void 0 : _b.getPublicConfig()))) === null || _c === void 0 ? void 0 : _c.tool_mobile_disabledfeatures;
            this.disabledFeatures = (disabledFeatures === null || disabledFeatures === void 0 ? void 0 : disabledFeatures.split(',')) || [];
        });
    }
    /**
     * Called when the rtl is enabled or disabled.
     */
    RTLChanged() {
        this.direction = this.rtl ? 'rtl' : 'ltr';
        document.dir = this.direction;
    }
    /**
     * Called when safe area margins is enabled or disabled.
     */
    safeAreaChanged() {
        document.documentElement.classList.toggle('force-safe-area-margins', this.forceSafeAreaMargins);
    }
    /**
     * Called when remote styles is enabled or disabled.
     */
    remoteStylesChanged() {
        document.head.querySelectorAll('style').forEach((style) => {
            if (this.siteId && style.id.endsWith(this.siteId)) {
                if (this.remoteStyles) {
                    style.removeAttribute('media');
                }
                else {
                    style.setAttribute('media', 'disabled');
                }
            }
        });
    }
    /**
     * Called when remote styles is enabled or disabled.
     */
    pluginStylesChanged() {
        document.head.querySelectorAll('style').forEach((style) => {
            if (style.id.startsWith('siteplugin-')) {
                if (this.pluginStyles) {
                    style.removeAttribute('media');
                }
                else {
                    style.setAttribute('media', 'disabled');
                }
            }
        });
    }
    /**
     * Copies site info.
     */
    copyInfo() {
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].copyToClipboard(JSON.stringify({ disabledFeatures: this.disabledFeatures, sitePlugins: this.sitePlugins }));
    }
    /**
     * Reset all user tours.
     */
    resetUserTours() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _features_usertours_services_user_tours__WEBPACK_IMPORTED_MODULE_3__["CoreUserTours"].resetTours();
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showToast('User tours have been reseted');
        });
    }
};
CoreSettingsDevPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-dev',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dev.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/dev/dev.html")).default,
    })
], CoreSettingsDevPage);



/***/ }),

/***/ "./src/core/features/settings/pages/deviceinfo/deviceinfo.module.ts":
/*!**************************************************************************!*\
  !*** ./src/core/features/settings/pages/deviceinfo/deviceinfo.module.ts ***!
  \**************************************************************************/
/*! exports provided: CoreSettingsDeviceInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsDeviceInfoPageModule", function() { return CoreSettingsDeviceInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _deviceinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deviceinfo */ "./src/core/features/settings/pages/deviceinfo/deviceinfo.ts");
/* harmony import */ var _dev_dev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dev/dev */ "./src/core/features/settings/pages/dev/dev.ts");
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
        component: _deviceinfo__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsDeviceInfoPage"],
    },
    {
        path: 'dev',
        component: _dev_dev__WEBPACK_IMPORTED_MODULE_5__["CoreSettingsDevPage"],
    },
];
let CoreSettingsDeviceInfoPageModule = class CoreSettingsDeviceInfoPageModule {
};
CoreSettingsDeviceInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _deviceinfo__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsDeviceInfoPage"],
            _dev_dev__WEBPACK_IMPORTED_MODULE_5__["CoreSettingsDevPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSettingsDeviceInfoPageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/deviceinfo/deviceinfo.scss":
/*!*********************************************************************!*\
  !*** ./src/core/features/settings/pages/deviceinfo/deviceinfo.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item {\n  -webkit-user-select: text;\n          user-select: text;\n  cursor: text;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL3NldHRpbmdzL3BhZ2VzL2RldmljZWluZm8vZGV2aWNlaW5mby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9zZXR0aW5ncy9wYWdlcy9kZXZpY2VpbmZvL2RldmljZWluZm8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcclxuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/core/features/settings/pages/deviceinfo/deviceinfo.ts":
/*!*******************************************************************!*\
  !*** ./src/core/features/settings/pages/deviceinfo/deviceinfo.ts ***!
  \*******************************************************************/
/*! exports provided: CoreSettingsDeviceInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsDeviceInfoPage", function() { return CoreSettingsDeviceInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_local_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/local-notifications */ "./src/core/services/local-notifications.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_lang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/lang */ "./src/core/services/lang.ts");
/* harmony import */ var _services_file__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/file */ "./src/core/services/file.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/pushnotifications/services/pushnotifications */ "./src/core/features/pushnotifications/services/pushnotifications.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/platform */ "./src/core/services/platform.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
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
 * Page that displays the device information.
 */
let CoreSettingsDeviceInfoPage = class CoreSettingsDeviceInfoPage {
    constructor() {
        var _a;
        this.fsClickable = false;
        this.showDevOptions = false;
        this.devOptionsClickCounter = 0;
        this.devOptionsForced = false;
        const sitesProvider = _services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].instance;
        const device = _singletons__WEBPACK_IMPORTED_MODULE_5__["Device"].instance;
        const translate = _singletons__WEBPACK_IMPORTED_MODULE_5__["Translate"].instance;
        const navigator = window.navigator;
        this.deviceInfo = {
            versionName: _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].CONFIG.versionname,
            versionCode: _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].CONFIG.versioncode,
            compilationTime: _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].BUILD.compilationTime || 0,
            lastCommit: _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].BUILD.lastCommitHash || '',
            networkStatus: _services_network__WEBPACK_IMPORTED_MODULE_15__["CoreNetwork"].isOnline() ? 'online' : 'offline',
            wifiConnection: _services_network__WEBPACK_IMPORTED_MODULE_15__["CoreNetwork"].isWifi() ? 'yes' : 'no',
            localNotifAvailable: _services_local_notifications__WEBPACK_IMPORTED_MODULE_4__["CoreLocalNotifications"].isAvailable() ? 'yes' : 'no',
            pushId: _features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_10__["CorePushNotifications"].getPushId(),
            deviceType: '',
        };
        if (window.location && window.location.href) {
            const url = window.location.href;
            this.deviceInfo.locationHref = url.indexOf('#') > 0 ? url.substring(0, url.indexOf('#')) : url;
        }
        if (window.screen) {
            this.deviceInfo.screen = window.innerWidth + 'x' + window.innerHeight +
                ' (' + window.screen.width + 'x' + window.screen.height + ')';
        }
        if (_services_platform__WEBPACK_IMPORTED_MODULE_14__["CorePlatform"].isMobile()) {
            this.deviceInfo.deviceType = _services_platform__WEBPACK_IMPORTED_MODULE_14__["CorePlatform"].is('tablet') ? 'tablet' : 'phone';
            if (_services_app__WEBPACK_IMPORTED_MODULE_1__["CoreApp"].isAndroid()) {
                this.deviceInfo.deviceOs = 'android';
                this.deviceOsTranslated = 'Android';
            }
            else if (_services_app__WEBPACK_IMPORTED_MODULE_1__["CoreApp"].isIOS()) {
                this.deviceInfo.deviceOs = 'ios';
                this.deviceOsTranslated = 'iOS';
            }
            else {
                const matches = navigator.userAgent.match(/\(([^)]*)\)/);
                if (matches && matches.length > 1) {
                    this.deviceInfo.deviceOs = matches[1];
                    this.deviceOsTranslated = matches[1];
                }
                else {
                    this.deviceInfo.deviceOs = 'unknown';
                    this.deviceOsTranslated = translate.instant('core.unknown');
                }
            }
        }
        else {
            this.deviceInfo.deviceType = 'browser';
            const matches = navigator.userAgent.match(/\(([^)]*)\)/);
            if (matches && matches.length > 1) {
                this.deviceInfo.deviceOs = matches[1];
                this.deviceOsTranslated = matches[1];
            }
            else {
                this.deviceInfo.deviceOs = 'unknown';
                this.deviceOsTranslated = translate.instant('core.unknown');
            }
        }
        if (navigator) {
            if (navigator.userAgent) {
                this.deviceInfo.userAgent = navigator.userAgent;
            }
            if (navigator.language) {
                this.deviceInfo.browserLanguage = navigator.language;
            }
        }
        if (device) {
            if (device.cordova) {
                this.deviceInfo.cordovaVersion = device.cordova;
            }
            if (device.platform) {
                this.deviceInfo.platform = device.platform;
            }
            if (device.version) {
                this.deviceInfo.osVersion = device.version;
            }
            if (device.model) {
                this.deviceInfo.model = device.model;
            }
            if (device.uuid) {
                this.deviceInfo.uuid = device.uuid;
            }
        }
        const currentSite = sitesProvider.getCurrentSite();
        this.deviceInfo.siteUrl = (currentSite === null || currentSite === void 0 ? void 0 : currentSite.getURL()) ||
            (typeof _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].CONFIG.siteurl == 'string' && _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].CONFIG.siteurl) || undefined;
        this.deviceInfo.isPrefixedUrl = !!_core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].CONFIG.siteurl;
        this.deviceInfo.siteId = currentSite === null || currentSite === void 0 ? void 0 : currentSite.getId();
        this.deviceInfo.siteVersion = (_a = currentSite === null || currentSite === void 0 ? void 0 : currentSite.getInfo()) === null || _a === void 0 ? void 0 : _a.release;
        // Refresh online status when changes.
        this.onlineObserver = _services_network__WEBPACK_IMPORTED_MODULE_15__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_5__["NgZone"].run(() => {
                this.deviceInfo.networkStatus = _services_network__WEBPACK_IMPORTED_MODULE_15__["CoreNetwork"].isOnline() ? 'online' : 'offline';
            });
        });
        this.asyncInit();
    }
    /**
     * Async part of the constructor.
     */
    asyncInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fileProvider = _services_file__WEBPACK_IMPORTED_MODULE_7__["CoreFile"].instance;
            const lang = yield _services_lang__WEBPACK_IMPORTED_MODULE_6__["CoreLang"].getCurrentLanguage();
            this.deviceInfo.currentLanguage = lang;
            this.currentLangName = _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].CONFIG.languages[lang];
            if (fileProvider.isAvailable()) {
                const basepath = yield fileProvider.getBasePath();
                this.deviceInfo.fileSystemRoot = basepath;
                this.fsClickable = fileProvider.usesHTMLAPI();
            }
            const showDevOptionsOnConfig = yield _services_config__WEBPACK_IMPORTED_MODULE_11__["CoreConfig"].get('showDevOptions', 0);
            this.devOptionsForced = _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].BUILD.isDevelopment || _core_constants__WEBPACK_IMPORTED_MODULE_3__["CoreConstants"].BUILD.isTesting;
            this.showDevOptions = this.devOptionsForced || showDevOptionsOnConfig == 1;
        });
    }
    /**
     * Copies device info into the clipboard.
     */
    copyInfo() {
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].copyToClipboard(JSON.stringify(this.deviceInfo));
    }
    /**
     * Copies device info item into the clipboard.
     *
     * @param e Event.
     */
    copyItemInfo(e) {
        var _a, _b;
        const el = e.target;
        const text = (_b = (_a = el === null || el === void 0 ? void 0 : el.closest('ion-item')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim();
        text && _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].copyToClipboard(text);
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        this.onlineObserver && this.onlineObserver.unsubscribe();
    }
    /**
     * 5 clicks will enable dev options.
     */
    enableDevOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.devOptionsForced) {
                return;
            }
            clearTimeout(this.devOptionsClickTimeout);
            this.devOptionsClickCounter++;
            if (this.devOptionsClickCounter == 5) {
                if (!this.showDevOptions) {
                    this.showDevOptions = true;
                    yield _services_config__WEBPACK_IMPORTED_MODULE_11__["CoreConfig"].set('showDevOptions', 1);
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDomUtils"].showToast('core.settings.youradev', true);
                }
                else {
                    this.showDevOptions = false;
                    yield _services_config__WEBPACK_IMPORTED_MODULE_11__["CoreConfig"].delete('showDevOptions');
                }
                this.devOptionsClickCounter = 0;
                return;
            }
            this.devOptionsClickTimeout = window.setTimeout(() => {
                this.devOptionsClickTimeout = undefined;
                this.devOptionsClickCounter = 0;
            }, 500);
        });
    }
    /**
     * Navigate to dev options.
     */
    gotoDevOptions() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].navigate('dev');
    }
};
CoreSettingsDeviceInfoPage.ctorParameters = () => [];
CoreSettingsDeviceInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-core-app-settings-deviceinfo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./deviceinfo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/deviceinfo/deviceinfo.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./deviceinfo.scss */ "./src/core/features/settings/pages/deviceinfo/deviceinfo.scss")).default]
    })
], CoreSettingsDeviceInfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-deviceinfo-deviceinfo-module.js.map