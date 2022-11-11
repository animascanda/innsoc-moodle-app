(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-licenses-licenses-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/licenses/licenses.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/licenses/licenses.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.settings.opensourcelicenses' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-searchbar [(ngModel)]=\"textFilter\" (ionInput)=\"filterChanged($event.target)\" (ionCancel)=\"filterChanged($event.target)\"\r\n            [placeholder]=\"'core.filter' | translate\">\r\n        </ion-searchbar>\r\n        <ion-list>\r\n            <ion-item button *ngIf=\"error\" class=\"ion-text-wrap\" [href]=\"licensesUrl\" core-link auto-login=\"no\">\r\n                <ion-label>\r\n                    {{ 'core.settings.opensourcelicenses' | translate }}\r\n                </ion-label>\r\n                <ion-button [href]=\"licensesUrl\" target=\"_blank\" fill=\"clear\" slot=\"end\" core-link auto-login=\"no\">\r\n                    {{ 'core.view' | translate }}</ion-button>\r\n            </ion-item>\r\n            <ng-container *ngIf=\"!error\">\r\n                <ion-item *ngFor=\"let license of licenses\" class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">\r\n                            <a *ngIf=\"license.repository\" [href]=\"license.repository\" core-link auto-login=\"no\">{{ license.name }}</a>\r\n                            <ng-container *ngIf=\"!license.repository\">{{ license.name }}</ng-container> - {{ license.version }}\r\n                        </p>\r\n                        <p class=\"item-heading\" *ngIf=\"license.publisher\">\r\n                            {{ 'core.settings.publisher' | translate }}{{ 'core.labelsep' | translate }} {{ license.publisher }}\r\n                        </p>\r\n                        <p>{{ 'core.settings.license' | translate }}{{ 'core.labelsep' | translate }} {{ license.licenses }}</p>\r\n                        <p><a *ngIf=\"license.url\" [href]=\"license.url\" core-link auto-login=\"no\">{{ license.url }}</a></p>\r\n                        <p><a *ngIf=\"license.email\" [href]=\"'mailto:' + license.email\" core-link auto-login=\"no\"\r\n                                [showBrowserWarning]=\"false\">{{ license.email }}</a></p>\r\n                    </ion-label>\r\n                    <ion-button *ngIf=\"license.licenseUrl\" [href]=\"license.licenseUrl\" target=\"_blank\" fill=\"clear\" slot=\"end\" core-link\r\n                        auto-login=\"no\">{{ 'core.view' | translate }}</ion-button>\r\n                </ion-item>\r\n            </ng-container>\r\n        </ion-list>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/settings/pages/licenses/licenses.module.ts":
/*!**********************************************************************!*\
  !*** ./src/core/features/settings/pages/licenses/licenses.module.ts ***!
  \**********************************************************************/
/*! exports provided: CoreSettingsLicensesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsLicensesPageModule", function() { return CoreSettingsLicensesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _licenses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./licenses */ "./src/core/features/settings/pages/licenses/licenses.ts");
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
        component: _licenses__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsLicensesPage"],
    },
];
let CoreSettingsLicensesPageModule = class CoreSettingsLicensesPageModule {
};
CoreSettingsLicensesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _licenses__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsLicensesPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSettingsLicensesPageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/licenses/licenses.ts":
/*!***************************************************************!*\
  !*** ./src/core/features/settings/pages/licenses/licenses.ts ***!
  \***************************************************************/
/*! exports provided: CoreSettingsLicensesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsLicensesPage", function() { return CoreSettingsLicensesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Page that displays the open source licenses information.
 */
let CoreSettingsLicensesPage = class CoreSettingsLicensesPage {
    constructor() {
        this.loaded = false;
        this.licenses = [];
        this.error = false;
        this.textFilter = '';
        this.allLicenses = [];
        this.appLicenseVersion = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.versionname.indexOf('-') > 0
            ? 'integration'
            : 'v' + _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.versionname;
        this.licensesUrl = 'https://raw.githubusercontent.com/moodlehq/moodleapp/' + this.appLicenseVersion + '/licenses.json';
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const licenses = yield _singletons__WEBPACK_IMPORTED_MODULE_3__["Http"].get(this.licensesUrl).toPromise();
                this.allLicenses = Object.keys(licenses).map((name) => {
                    const license = licenses[name];
                    const nameSplit = name.lastIndexOf('@');
                    license.name = name.substring(0, nameSplit);
                    license.version = name.substring(nameSplit + 1);
                    if (Array.isArray(license.licenses)) {
                        license.licenses = license.licenses.join(', ');
                    }
                    if (license.repository) {
                        license.repository = license.repository.replace('git://', 'https://');
                        if (license.repository.indexOf('github.com') > 0) {
                            const version = license.name == 'moodlemobile' ? this.appLicenseVersion : license.version;
                            license.licenseUrl = license.repository + '/blob/' + version + '/' + license.licenseFile;
                        }
                    }
                    return license;
                });
                this.filterLicenses();
                this.error = false;
            }
            catch (_a) {
                this.error = true;
            }
            this.loaded = true;
        });
    }
    /**
     * Filter licenses using filter text.
     */
    filterLicenses() {
        const filter = this.textFilter.trim().toLowerCase();
        if (filter == '') {
            this.licenses = this.allLicenses;
            return;
        }
        this.licenses = this.allLicenses.filter((license) => license.name.toLowerCase().indexOf(filter) >= 0 ||
            license.version.toLowerCase().indexOf(filter) >= 0 ||
            typeof license.licenses == 'string' && license.licenses.toLowerCase().indexOf(filter) >= 0 ||
            license.repository && license.repository.toLowerCase().indexOf(filter) >= 0 ||
            license.publisher && license.publisher.toLowerCase().indexOf(filter) >= 0 ||
            license.url && license.url.toLowerCase().indexOf(filter) >= 0 ||
            license.email && license.email.toLowerCase().indexOf(filter) >= 0);
    }
    /**
     * Text filter changed.
     *
     * @param target Searchbar element.
     */
    filterChanged(target) {
        this.textFilter = target.value || '';
        this.filterLicenses();
    }
};
CoreSettingsLicensesPage.ctorParameters = () => [];
CoreSettingsLicensesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-licenses',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./licenses.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/licenses/licenses.html")).default,
    })
], CoreSettingsLicensesPage);



/***/ })

}]);
//# sourceMappingURL=pages-licenses-licenses-module.js.map