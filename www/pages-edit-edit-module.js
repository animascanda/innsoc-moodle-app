(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/edit/edit.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/edit/edit.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1 *ngIf=\"glossary\">\r\n                <core-format-text [text]=\"glossary.name\" contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content [core-swipe-navigation]=\"entries\">\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <form #editFormEl *ngIf=\"glossary\">\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">{{ 'addon.mod_glossary.concept' | translate }}</ion-label>\r\n                <ion-input type=\"text\" [placeholder]=\"'addon.mod_glossary.concept' | translate\" [(ngModel)]=\"entry.concept\" name=\"concept\">\r\n                </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">{{ 'addon.mod_glossary.definition' | translate }}</ion-label>\r\n                <core-rich-text-editor [control]=\"definitionControl\" (contentChanged)=\"onDefinitionChange($event)\"\r\n                    [placeholder]=\"'addon.mod_glossary.definition' | translate\" name=\"addon_mod_glossary_edit\" [component]=\"component\"\r\n                    [componentId]=\"cmId\" [autoSave]=\"true\" contextLevel=\"module\" [contextInstanceId]=\"cmId\" elementId=\"definition_editor\"\r\n                    [draftExtraParams]=\"editorExtraParams\">\r\n                </core-rich-text-editor>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"categories.length > 0\">\r\n                <ion-label position=\"stacked\" id=\"addon-mod-glossary-categories-label\">\r\n                    {{ 'addon.mod_glossary.categories' | translate }}\r\n                </ion-label>\r\n                <ion-select [(ngModel)]=\"options.categories\" multiple=\"true\" aria-labelledby=\"addon-mod-glossary-categories-label\"\r\n                    interface=\"action-sheet\" [placeholder]=\"'addon.mod_glossary.categories' | translate\" name=\"categories\"\r\n                    [interfaceOptions]=\"{header: 'addon.mod_glossary.categories' | translate}\">\r\n                    <ion-select-option *ngFor=\"let category of categories\" [value]=\"category.id\">\r\n                        {{ category.name }}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\" id=\"addon-mod-glossary-aliases-label\">\r\n                    {{ 'addon.mod_glossary.aliases' | translate }}\r\n                </ion-label>\r\n                <ion-textarea [(ngModel)]=\"options.aliases\" rows=\"1\" [core-auto-rows]=\"options.aliases\"\r\n                    aria-labelledby=\"addon-mod-glossary-aliases-label\" name=\"aliases\">\r\n                </ion-textarea>\r\n            </ion-item>\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    <h2>{{ 'addon.mod_glossary.attachment' | translate }}</h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <core-attachments [files]=\"attachments\" [component]=\"component\" [componentId]=\"glossary.coursemodule\" [allowOffline]=\"true\"\r\n                [courseId]=\"courseId\">\r\n            </core-attachments>\r\n            <ng-container *ngIf=\"glossary.usedynalink\">\r\n                <ion-item-divider>\r\n                    <ion-label>\r\n                        <h2>{{ 'addon.mod_glossary.linking' | translate }}</h2>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>{{ 'addon.mod_glossary.entryusedynalink' | translate }}</ion-label>\r\n                    <ion-toggle [(ngModel)]=\"options.usedynalink\" name=\"usedynalink\"></ion-toggle>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>{{ 'addon.mod_glossary.casesensitive' | translate }}</ion-label>\r\n                    <ion-toggle [disabled]=\"!options.usedynalink\" [(ngModel)]=\"options.casesensitive\" name=\"casesensitive\">\r\n                    </ion-toggle>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>{{ 'addon.mod_glossary.fullmatch' | translate }}</ion-label>\r\n                    <ion-toggle [disabled]=\"!options.usedynalink\" [(ngModel)]=\"options.fullmatch\" name=\"fullmatch\"></ion-toggle>\r\n                </ion-item>\r\n            </ng-container>\r\n            <ion-button class=\"ion-margin\" expand=\"block\" [disabled]=\"!entry.concept || !entry.definition\" (click)=\"save()\">\r\n                {{ 'core.save' | translate }}\r\n            </ion-button>\r\n        </form>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/glossary/pages/edit/edit.module.ts":
/*!***********************************************************!*\
  !*** ./src/addons/mod/glossary/pages/edit/edit.module.ts ***!
  \***********************************************************/
/*! exports provided: AddonModGlossaryEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryEditPageModule", function() { return AddonModGlossaryEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/addons/mod/glossary/pages/edit/edit.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/editor/components/components.module */ "./src/core/features/editor/components/components.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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







const routes = [{
        path: '',
        component: _edit__WEBPACK_IMPORTED_MODULE_2__["AddonModGlossaryEditPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_6__["CanLeaveGuard"]],
    }];
let AddonModGlossaryEditPageModule = class AddonModGlossaryEditPageModule {
};
AddonModGlossaryEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _edit__WEBPACK_IMPORTED_MODULE_2__["AddonModGlossaryEditPage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreEditorComponentsModule"],
        ],
    })
], AddonModGlossaryEditPageModule);



/***/ }),

/***/ "./src/addons/mod/glossary/pages/edit/edit.ts":
/*!****************************************************!*\
  !*** ./src/addons/mod/glossary/pages/edit/edit.ts ***!
  \****************************************************/
/*! exports provided: AddonModGlossaryEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryEditPage", function() { return AddonModGlossaryEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader */ "./src/core/features/fileuploader/services/fileuploader.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _classes_glossary_entries_source__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../classes/glossary-entries-source */ "./src/addons/mod/glossary/classes/glossary-entries-source.ts");
/* harmony import */ var _classes_glossary_entries_swipe_manager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../classes/glossary-entries-swipe-manager */ "./src/addons/mod/glossary/classes/glossary-entries-swipe-manager.ts");
/* harmony import */ var _services_glossary__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/glossary */ "./src/addons/mod/glossary/services/glossary.ts");
/* harmony import */ var _services_glossary_helper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/glossary-helper */ "./src/addons/mod/glossary/services/glossary-helper.ts");
/* harmony import */ var _services_glossary_offline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/glossary-offline */ "./src/addons/mod/glossary/services/glossary-offline.ts");
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
 * Page that displays the edit form.
 */
let AddonModGlossaryEditPage = class AddonModGlossaryEditPage {
    constructor(route, splitView) {
        this.route = route;
        this.splitView = splitView;
        this.component = _services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossaryProvider"].COMPONENT;
        this.loaded = false;
        this.attachments = [];
        this.definitionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.categories = [];
        this.editorExtraParams = {};
        this.entry = {
            concept: '',
            definition: '',
            timecreated: 0,
        };
        this.options = {
            categories: [],
            aliases: '',
            usedynalink: false,
            casesensitive: false,
            fullmatch: false,
        };
        this.concept = '';
        this.isDestroyed = false;
        this.saved = false;
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const routeData = this.route.snapshot.data;
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.timecreated = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRequiredRouteNumberParam('timecreated');
                this.concept = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRouteParam('concept') || '';
                this.editorExtraParams.timecreated = this.timecreated;
                if (this.timecreated !== 0 && ((_a = routeData.swipeEnabled) !== null && _a !== void 0 ? _a : true)) {
                    const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_5__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_classes_glossary_entries_source__WEBPACK_IMPORTED_MODULE_16__["AddonModGlossaryEntriesSource"], [this.courseId, this.cmId, (_b = routeData.glossaryPathPrefix) !== null && _b !== void 0 ? _b : '']);
                    this.entries = new AddonModGlossaryEditEntriesSwipeManager(source);
                    yield this.entries.start();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModal(error);
                this.goBack();
                return;
            }
            this.fetchData();
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a;
        (_a = this.entries) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    /**
     * Fetch required data.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.glossary = yield _services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].getGlossary(this.courseId, this.cmId);
                if (this.timecreated > 0) {
                    yield this.loadOfflineData();
                }
                this.categories = yield _services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].getAllCategories(this.glossary.id, {
                    cmId: this.cmId,
                });
                this.loaded = true;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_glossary.errorloadingglossary', true);
                this.goBack();
            }
        });
    }
    /**
     * Load offline data when editing an offline entry.
     *
     * @return Promise resolved when done.
     */
    loadOfflineData() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.glossary) {
                return;
            }
            const entry = yield _services_glossary_offline__WEBPACK_IMPORTED_MODULE_20__["AddonModGlossaryOffline"].getNewEntry(this.glossary.id, this.concept, this.timecreated);
            this.entry.concept = entry.concept || '';
            this.entry.definition = entry.definition || '';
            this.entry.timecreated = entry.timecreated;
            this.originalData = {
                concept: this.entry.concept,
                definition: this.entry.definition,
                files: [],
                timecreated: entry.timecreated,
            };
            if (entry.options) {
                this.options.categories = (entry.options.categories && entry.options.categories.split(',')) || [];
                this.options.aliases = entry.options.aliases || '';
                this.options.usedynalink = !!entry.options.usedynalink;
                if (this.options.usedynalink) {
                    this.options.casesensitive = !!entry.options.casesensitive;
                    this.options.fullmatch = !!entry.options.fullmatch;
                }
            }
            // Treat offline attachments if any.
            if ((_a = entry.attachments) === null || _a === void 0 ? void 0 : _a.offline) {
                this.attachments = yield _services_glossary_helper__WEBPACK_IMPORTED_MODULE_19__["AddonModGlossaryHelper"].getStoredFiles(this.glossary.id, entry.concept, entry.timecreated);
                this.originalData.files = this.attachments.slice();
            }
            this.definitionControl.setValue(this.entry.definition);
        });
    }
    /**
     * Reset the form data.
     */
    resetForm() {
        this.entry.concept = '';
        this.entry.definition = '';
        this.entry.timecreated = 0;
        this.originalData = undefined;
        this.options.categories = [];
        this.options.aliases = '';
        this.options.usedynalink = false;
        this.options.casesensitive = false;
        this.options.fullmatch = false;
        this.attachments.length = 0; // Empty the array.
        this.definitionControl.setValue('');
    }
    /**
     * Definition changed.
     *
     * @param text The new text.
     */
    onDefinitionChange(text) {
        this.entry.definition = text;
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.saved) {
                return true;
            }
            if (_services_glossary_helper__WEBPACK_IMPORTED_MODULE_19__["AddonModGlossaryHelper"].hasEntryDataChanged(this.entry, this.attachments, this.originalData)) {
                // Show confirmation if some data has been modified.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('core.confirmcanceledit'));
            }
            // Delete the local files from the tmp folder.
            _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_7__["CoreFileUploader"].clearTmpFiles(this.attachments);
            _singletons_form__WEBPACK_IMPORTED_MODULE_15__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteId());
            return true;
        });
    }
    /**
     * Save the entry.
     */
    save() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let definition = this.entry.definition;
            let entryId;
            const timecreated = this.entry.timecreated || Date.now();
            if (!this.entry.concept || !definition) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModal('addon.mod_glossary.fillfields', true);
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showModalLoading('core.sending', true);
            definition = _services_utils_text__WEBPACK_IMPORTED_MODULE_11__["CoreTextUtils"].formatHtmlLines(definition);
            try {
                if (!this.glossary) {
                    return;
                }
                // Upload attachments first if any.
                const { saveOffline, attachmentsResult } = yield this.uploadAttachments(timecreated);
                const options = {
                    aliases: this.options.aliases,
                    categories: this.options.categories.join(','),
                };
                if (this.glossary.usedynalink) {
                    options.usedynalink = this.options.usedynalink ? 1 : 0;
                    if (this.options.usedynalink) {
                        options.casesensitive = this.options.casesensitive ? 1 : 0;
                        options.fullmatch = this.options.fullmatch ? 1 : 0;
                    }
                }
                if (saveOffline) {
                    if (this.entry && !this.glossary.allowduplicatedentries) {
                        // Check if the entry is duplicated in online or offline mode.
                        const isUsed = yield _services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].isConceptUsed(this.glossary.id, this.entry.concept, {
                            timeCreated: this.entry.timecreated,
                            cmId: this.cmId,
                        });
                        if (isUsed) {
                            // There's a entry with same name, reject with error message.
                            throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('addon.mod_glossary.errconceptalreadyexists'));
                        }
                    }
                    // Save entry in offline.
                    yield _services_glossary_offline__WEBPACK_IMPORTED_MODULE_20__["AddonModGlossaryOffline"].addNewEntry(this.glossary.id, this.entry.concept, definition, this.courseId, options, attachmentsResult, timecreated, undefined, undefined, this.entry);
                }
                else {
                    // Try to send it to server.
                    // Don't allow offline if there are attachments since they were uploaded fine.
                    yield _services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].addEntry(this.glossary.id, this.entry.concept, definition, this.courseId, options, attachmentsResult, {
                        timeCreated: timecreated,
                        discardEntry: this.entry,
                        allowOffline: !this.attachments.length,
                        checkDuplicates: !this.glossary.allowduplicatedentries,
                    });
                }
                // Delete the local files from the tmp folder.
                _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_7__["CoreFileUploader"].clearTmpFiles(this.attachments);
                if (entryId) {
                    // Data sent to server, delete stored files (if any).
                    _services_glossary_helper__WEBPACK_IMPORTED_MODULE_19__["AddonModGlossaryHelper"].deleteStoredFiles(this.glossary.id, this.entry.concept, timecreated);
                    _singletons_events__WEBPACK_IMPORTED_MODULE_14__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_14__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'glossary' });
                }
                _singletons_events__WEBPACK_IMPORTED_MODULE_14__["CoreEvents"].trigger(_services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossaryProvider"].ADD_ENTRY_EVENT, {
                    glossaryId: this.glossary.id,
                    entryId: entryId,
                }, _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteId());
                _singletons_form__WEBPACK_IMPORTED_MODULE_15__["CoreForms"].triggerFormSubmittedEvent(this.formElement, !!entryId, _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteId());
                if ((_a = this.splitView) === null || _a === void 0 ? void 0 : _a.outletActivated) {
                    if (this.timecreated > 0) {
                        // Reload the data.
                        yield this.loadOfflineData();
                    }
                    else {
                        // Empty form.
                        this.resetForm();
                    }
                }
                else {
                    this.saved = true;
                    _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].back();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_glossary.cannoteditentry', true);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Upload entry attachments if any.
     *
     * @param timecreated Entry's timecreated.
     * @return Promise resolved when done.
     */
    uploadAttachments(timecreated) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.attachments.length || !this.glossary) {
                return {
                    saveOffline: false,
                };
            }
            try {
                const attachmentsResult = yield _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_7__["CoreFileUploader"].uploadOrReuploadFiles(this.attachments, _services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossaryProvider"].COMPONENT, this.glossary.id);
                return {
                    saveOffline: false,
                    attachmentsResult,
                };
            }
            catch (error) {
                if (_services_utils_utils__WEBPACK_IMPORTED_MODULE_12__["CoreUtils"].isWebServiceError(error)) {
                    throw error;
                }
                // Cannot upload them in online, save them in offline.
                const attachmentsResult = yield _services_glossary_helper__WEBPACK_IMPORTED_MODULE_19__["AddonModGlossaryHelper"].storeFiles(this.glossary.id, this.entry.concept, timecreated, this.attachments);
                return {
                    saveOffline: true,
                    attachmentsResult,
                };
            }
        });
    }
    /**
     * Helper function to go back.
     */
    goBack() {
        var _a;
        if ((_a = this.splitView) === null || _a === void 0 ? void 0 : _a.outletActivated) {
            _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].navigate('../../');
        }
        else {
            _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].back();
        }
    }
};
AddonModGlossaryEditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_6__["CoreSplitViewComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
AddonModGlossaryEditPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['editFormEl',] }]
};
AddonModGlossaryEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-glossary-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/edit/edit.html")).default,
    })
], AddonModGlossaryEditPage);

/**
 * Helper to manage swiping within a collection of glossary entries.
 */
class AddonModGlossaryEditEntriesSwipeManager extends _classes_glossary_entries_swipe_manager__WEBPACK_IMPORTED_MODULE_17__["AddonModGlossaryEntriesSwipeManager"] {
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        return `${this.getSource().GLOSSARY_PATH_PREFIX}edit/${route.params.timecreated}`;
    }
}


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
//# sourceMappingURL=pages-edit-edit-module.js.map