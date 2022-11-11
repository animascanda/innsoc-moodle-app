(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-general-general-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/general/general.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/general/general.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.settings.general' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-list class=\"list-item-limited-width\">\r\n        <ion-item class=\"ion-text-wrap\" lines=\"none\">\r\n            <ion-label>\r\n                <h2>{{ 'core.settings.language' | translate }}</h2>\r\n            </ion-label>\r\n            <ion-select [(ngModel)]=\"selectedLanguage\" (ionChange)=\"languageChanged()\" interface=\"action-sheet\"\r\n                [interfaceOptions]=\"{header: 'core.settings.language' | translate}\">\r\n                <ion-select-option *ngFor=\"let entry of languages\" [value]=\"entry.code\">{{ entry.name }}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap core-settings-general-font-size item-interactive\" lines=\"none\">\r\n            <ion-label>\r\n                <h2>{{ 'core.settings.fontsize' | translate }}</h2>\r\n            </ion-label>\r\n            <ion-segment [(ngModel)]=\"selectedZoomLevel\" (ionChange)=\"zoomLevelChanged()\" color=\"primary\">\r\n                <ion-segment-button *ngFor=\"let zoomLevel of zoomLevels\" [value]=\"zoomLevel.value\"\r\n                    [ngStyle]=\"{'font-size.px': zoomLevel.style}\">\r\n                    <ion-label>\r\n                        {{ 'core.settings.fontsizecharacter' | translate }}\r\n                        <!-- Empty element styled with the largest font size, so all buttons share a common baseline. -->\r\n                        <span [ngStyle]=\"{'font-size.px': zoomLevels[zoomLevels.length - 1].style}\"></span>\r\n                    </ion-label>\r\n                </ion-segment-button>\r\n            </ion-segment>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap core-settings-general-color-scheme\" *ngIf=\"colorSchemes.length > 0\" lines=\"none\">\r\n            <ion-label>\r\n                <h2>{{ 'core.settings.colorscheme' | translate }}</h2>\r\n                <p *ngIf=\"colorSchemeDisabled\" class=\"text-danger\">{{ 'core.settings.forcedsetting' | translate }}</p>\r\n            </ion-label>\r\n            <ion-select [(ngModel)]=\"selectedScheme\" (ionChange)=\"colorSchemeChanged()\" interface=\"action-sheet\"\r\n                [disabled]=\"colorSchemeDisabled\" [interfaceOptions]=\"{header: 'core.settings.colorscheme' | translate}\">\r\n                <ion-select-option *ngFor=\"let scheme of colorSchemes\" [value]=\"scheme\">\r\n                    {{ 'core.settings.colorscheme-' + scheme | translate }}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item text-wrap *ngIf=\"colorSchemes.length > 0 && selectedScheme=='system' && isAndroid\" lines=\"none\">\r\n            <ion-label>\r\n                <p>{{ 'core.settings.colorscheme-system-notice' | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <h2>{{ 'core.settings.enablerichtexteditor' | translate }}</h2>\r\n                <p>{{ 'core.settings.enablerichtexteditordescription' | translate }}</p>\r\n            </ion-label>\r\n            <ion-toggle [(ngModel)]=\"richTextEditor\" (ionChange)=\"richTextEditorChanged()\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap\" *ngIf=\"displayIframeHelp\">\r\n            <ion-label>\r\n                <h2>{{ 'core.settings.ioscookies' | translate }}</h2>\r\n                <p>{{ 'core.settings.ioscookiesdescription' | translate }}</p>\r\n                <ion-button expand=\"block\" (click)=\"openNativeSettings()\">\r\n                    {{ 'core.opensettings' | translate }}\r\n                </ion-button>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <h2>{{ 'core.settings.debugdisplay' | translate }}</h2>\r\n                <p>{{ 'core.settings.debugdisplaydescription' | translate }}</p>\r\n            </ion-label>\r\n            <ion-toggle [(ngModel)]=\"debugDisplay\" (ionChange)=\"debugDisplayChanged()\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap\" *ngIf=\"analyticsSupported\">\r\n            <ion-label>\r\n                <h2>{{ 'core.settings.enablefirebaseanalytics' | translate }}</h2>\r\n                <p>{{ 'core.settings.enablefirebaseanalyticsdescription' | translate }}</p>\r\n            </ion-label>\r\n            <ion-toggle [(ngModel)]=\"analyticsEnabled\" (ionChange)=\"analyticsEnabledChanged()\"></ion-toggle>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/settings/pages/general/general.module.ts":
/*!********************************************************************!*\
  !*** ./src/core/features/settings/pages/general/general.module.ts ***!
  \********************************************************************/
/*! exports provided: CoreSettingsGeneralPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsGeneralPageModule", function() { return CoreSettingsGeneralPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general */ "./src/core/features/settings/pages/general/general.ts");
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
        component: _general__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsGeneralPage"],
    },
];
let CoreSettingsGeneralPageModule = class CoreSettingsGeneralPageModule {
};
CoreSettingsGeneralPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _general__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsGeneralPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSettingsGeneralPageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/general/general.scss":
/*!***************************************************************!*\
  !*** ./src/core/features/settings/pages/general/general.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .core-settings-general-font-size ion-segment {\n  max-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL3NldHRpbmdzL3BhZ2VzL2dlbmVyYWwvZ2VuZXJhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUFBUiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9zZXR0aW5ncy9wYWdlcy9nZW5lcmFsL2dlbmVyYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC5jb3JlLXNldHRpbmdzLWdlbmVyYWwtZm9udC1zaXplIGlvbi1zZWdtZW50IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/core/features/settings/pages/general/general.ts":
/*!*************************************************************!*\
  !*** ./src/core/features/settings/pages/general/general.ts ***!
  \*************************************************************/
/*! exports provided: CoreSettingsGeneralPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsGeneralPage", function() { return CoreSettingsGeneralPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_lang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/lang */ "./src/core/services/lang.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/pushnotifications/services/pushnotifications */ "./src/core/features/pushnotifications/services/pushnotifications.ts");
/* harmony import */ var _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_utils_iframe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/iframe */ "./src/core/services/utils/iframe.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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
 * Page that displays the general settings.
 */
let CoreSettingsGeneralPage = class CoreSettingsGeneralPage {
    constructor() {
        this.languages = [];
        this.selectedLanguage = '';
        this.zoomLevels = [];
        this.selectedZoomLevel = "none" /* NONE */;
        this.richTextEditor = true;
        this.debugDisplay = false;
        this.analyticsSupported = false;
        this.analyticsEnabled = false;
        this.colorSchemes = [];
        this.selectedScheme = "light" /* LIGHT */;
        this.colorSchemeDisabled = false;
        this.isAndroid = false;
        this.displayIframeHelp = false;
        this.asyncInit();
    }
    /**
     * Async part of the constructor.
     */
    asyncInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the supported languages.
            const languages = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.languages;
            for (const code in languages) {
                this.languages.push({
                    code: code,
                    name: languages[code],
                });
            }
            // Sort them by name.
            this.languages.sort((a, b) => a.name.localeCompare(b.name));
            this.selectedLanguage = yield _services_lang__WEBPACK_IMPORTED_MODULE_5__["CoreLang"].getCurrentLanguage();
            // Configure color schemes.
            if (!_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.forceColorScheme) {
                this.colorSchemeDisabled = _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].isColorSchemeDisabledInSite();
                if (this.colorSchemeDisabled) {
                    this.colorSchemes.push("light" /* LIGHT */);
                    this.selectedScheme = this.colorSchemes[0];
                }
                else {
                    this.isAndroid = _services_app__WEBPACK_IMPORTED_MODULE_9__["CoreApp"].isAndroid();
                    this.colorSchemes = _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].getAllowedColorSchemes();
                    this.selectedScheme = yield _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_COLOR_SCHEME, "light" /* LIGHT */);
                }
            }
            this.selectedZoomLevel = yield _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].getZoomLevel();
            this.zoomLevels = Object.keys(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.zoomlevels).map((value) => ({
                value,
                // Absolute pixel size based on 1.4rem body text when this size is selected.
                style: Math.round(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.zoomlevels[value] * 16 / 100),
                selected: value === this.selectedZoomLevel,
            }));
            this.richTextEditor = yield _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_RICH_TEXT_EDITOR, true);
            this.debugDisplay = yield _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_DEBUG_DISPLAY, false);
            this.analyticsSupported = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.enableanalytics;
            if (this.analyticsSupported) {
                this.analyticsEnabled = yield _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_ANALYTICS_ENABLED, true);
            }
            this.displayIframeHelp = _services_utils_iframe__WEBPACK_IMPORTED_MODULE_10__["CoreIframeUtils"].shouldDisplayHelp();
        });
    }
    /**
     * Called when a new language is selected.
     */
    languageChanged() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const previousLanguage = yield _services_lang__WEBPACK_IMPORTED_MODULE_5__["CoreLang"].getCurrentLanguage();
            if (this.selectedLanguage === previousLanguage) {
                // Prevent opening again.
                return;
            }
            const previousLanguageCancel = _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.cancel');
            try {
                yield _services_lang__WEBPACK_IMPORTED_MODULE_5__["CoreLang"].changeCurrentLanguage(this.selectedLanguage);
            }
            finally {
                const langName = (_a = this.languages.find((lang) => lang.code == this.selectedLanguage)) === null || _a === void 0 ? void 0 : _a.name;
                const buttons = [
                    {
                        text: previousLanguageCancel,
                        role: 'cancel',
                        handler: () => {
                            clearTimeout(timeout);
                            this.selectedLanguage = previousLanguage;
                            _services_lang__WEBPACK_IMPORTED_MODULE_5__["CoreLang"].changeCurrentLanguage(this.selectedLanguage);
                        },
                    },
                    {
                        text: _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.settings.changelanguage', { $a: langName }),
                        cssClass: 'timed-button',
                        handler: () => {
                            clearTimeout(timeout);
                            this.applyLanguageAndRestart();
                        },
                    },
                ];
                const alert = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showAlertWithOptions({
                    message: _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.settings.changelanguagealert'),
                    buttons,
                });
                const timeout = window.setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield alert.dismiss();
                    this.applyLanguageAndRestart();
                }), 10000);
            }
        });
    }
    /**
     * Apply language changes and restart the app.
     */
    applyLanguageAndRestart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Invalidate cache for all sites to get the content in the right language.
            const sites = yield _services_sites__WEBPACK_IMPORTED_MODULE_12__["CoreSites"].getSitesInstances();
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_13__["CoreUtils"].ignoreErrors(Promise.all(sites.map((site) => site.invalidateWsCache())));
            _singletons_events__WEBPACK_IMPORTED_MODULE_4__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_4__["CoreEvents"].LANGUAGE_CHANGED, this.selectedLanguage);
            _services_navigator__WEBPACK_IMPORTED_MODULE_14__["CoreNavigator"].navigate('/reload', {
                reset: true,
            });
        });
    }
    /**
     * Called when a new zoom level is selected.
     */
    zoomLevelChanged() {
        this.zoomLevels = this.zoomLevels.map((fontSize) => {
            fontSize.selected = fontSize.value === this.selectedZoomLevel;
            return fontSize;
        });
        _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].applyZoomLevel(this.selectedZoomLevel);
        _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_ZOOM_LEVEL, this.selectedZoomLevel);
    }
    /**
     * Called when a new color scheme is selected.
     */
    colorSchemeChanged() {
        _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].setColorScheme(this.selectedScheme);
        _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_COLOR_SCHEME, this.selectedScheme);
    }
    /**
     * Called when the rich text editor is enabled or disabled.
     */
    richTextEditorChanged() {
        _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_RICH_TEXT_EDITOR, this.richTextEditor ? 1 : 0);
    }
    /**
     * Called when the debug display setting is enabled or disabled.
     */
    debugDisplayChanged() {
        _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_DEBUG_DISPLAY, this.debugDisplay ? 1 : 0);
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].setDebugDisplay(this.debugDisplay);
    }
    /**
     * Called when the analytics setting is enabled or disabled.
     */
    analyticsEnabledChanged() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_7__["CorePushNotifications"].enableAnalytics(this.analyticsEnabled);
            _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_ANALYTICS_ENABLED, this.analyticsEnabled ? 1 : 0);
        });
    }
    /**
     * Open native settings.
     */
    openNativeSettings() {
        _singletons__WEBPACK_IMPORTED_MODULE_11__["Diagnostic"].switchToSettings();
    }
};
CoreSettingsGeneralPage.ctorParameters = () => [];
CoreSettingsGeneralPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-general',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./general.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/general/general.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./general.scss */ "./src/core/features/settings/pages/general/general.scss")).default]
    })
], CoreSettingsGeneralPage);



/***/ })

}]);
//# sourceMappingURL=pages-general-general-module.js.map