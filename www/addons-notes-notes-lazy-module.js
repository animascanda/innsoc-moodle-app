(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-notes-notes-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/notes/pages/list/list.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/notes/pages/list/list.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'addon.notes.notes' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<core-navbar-buttons slot=\"end\">\r\n    <ion-button [hidden]=\"!canDeleteNotes\" slot=\"end\" fill=\"clear\" (click)=\"toggleDelete()\"\r\n        [attr.aria-label]=\"'core.toggledelete' | translate\">\r\n        <ion-icon name=\"fas-pen\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n    </ion-button>\r\n    <core-context-menu>\r\n        <core-context-menu-item [hidden]=\"!(notesLoaded && !hasOffline)\" [priority]=\"100\" [content]=\"'core.refresh' | translate\"\r\n            (action)=\"refreshNotes(false)\" [iconAction]=\"refreshIcon\" [closeOnClick]=\"true\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"!(notesLoaded && hasOffline)\" [priority]=\"100\"\r\n            [content]=\"'core.settings.synchronizenow' | translate\" (action)=\"refreshNotes(true)\" [iconAction]=\"syncIcon\"\r\n            [closeOnClick]=\"false\"></core-context-menu-item>\r\n    </core-context-menu>\r\n</core-navbar-buttons>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!notesLoaded\" (ionRefresh)=\"refreshNotes(false, $event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <core-loading [hideUntil]=\"notesLoaded\">\r\n        <ion-item class=\"ion-text-wrap\" *ngIf=\"user\">\r\n            <core-user-avatar [user]=\"user\" [courseId]=\"courseId\" slot=\"start\" [linkProfile]=\"false\"></core-user-avatar>\r\n            <ion-label>\r\n                <h2>{{user!.fullname}}</h2>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n        <core-combobox [selection]=\"type\" (onChange)=\"typeChanged($event)\">\r\n            <ion-select-option class=\"ion-text-wrap\" value=\"site\">\r\n                {{ 'addon.notes.sitenotes' | translate }}\r\n            </ion-select-option>\r\n            <ion-select-option class=\"ion-text-wrap\" value=\"course\">\r\n                {{ 'addon.notes.coursenotes' | translate }}\r\n            </ion-select-option>\r\n            <ion-select-option class=\"ion-text-wrap\" value=\"personal\">\r\n                {{ 'addon.notes.personalnotes' | translate }}\r\n            </ion-select-option>\r\n        </core-combobox>\r\n\r\n        <ion-card class=\"core-warning-card\" *ngIf=\"hasOffline\">\r\n            <ion-item>\r\n                <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>\r\n                    {{ 'core.thereisdatatosync' | translate:{$a: 'addon.notes.notes' | translate | lowercase } }}\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <core-empty-box *ngIf=\"notes && notes.length == 0\" icon=\"fas-receipt\" [message]=\"'addon.notes.nonotes' | translate\">\r\n        </core-empty-box>\r\n\r\n        <ng-container *ngIf=\"notes && notes.length > 0\">\r\n            <ion-card *ngFor=\"let note of notes\">\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <core-user-avatar [user]=\"note\" [courseId]=\"courseId\" slot=\"start\" *ngIf=\"!userId\"></core-user-avatar>\r\n                    <ion-label>\r\n                        <p class=\"item-heading\" *ngIf=\"!userId\">{{note.userfullname}}</p>\r\n                        <p *ngIf=\"!note.deleted && !note.offline\" slot=\"end\">\r\n                            <span class=\"ion-text-wrap\">{{note.lastmodified | coreDateDayOrTime}}</span>\r\n                        </p>\r\n                    </ion-label>\r\n                    <p *ngIf=\"note.offline\" slot=\"end\">\r\n                        <ion-icon name=\"fas-clock\" aria-hidden=\"true\"></ion-icon> <span class=\"ion-text-wrap\">\r\n                            {{ 'core.notsent' | translate }}\r\n                        </span>\r\n                    </p>\r\n                    <p *ngIf=\"note.deleted\" slot=\"end\">\r\n                        <ion-icon name=\"fas-trash\" aria-hidden=\"true\"></ion-icon> <span class=\"ion-text-wrap\">\r\n                            {{ 'core.deletedoffline' | translate }}\r\n                        </span>\r\n                    </p>\r\n                    <ion-button *ngIf=\"note.deleted\" slot=\"end\" fill=\"clear\" color=\"danger\" (click)=\"undoDeleteNote($event, note)\"\r\n                        [attr.aria-label]=\"'core.restore' | translate\">\r\n                        <ion-icon name=\"fas-undo-alt\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                    <ion-button *ngIf=\"showDelete && !note.deleted && (type != 'personal' || note.usermodified == currentUserId)\" slot=\"end\"\r\n                        fill=\"clear\" [@coreSlideInOut]=\"'fromRight'\" color=\"danger\" (click)=\"deleteNote($event, note)\"\r\n                        [attr.aria-label]=\"'core.delete' | translate\">\r\n                        <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <core-format-text [text]=\"note.content\" [filter]=\"false\"></core-format-text>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-card>\r\n        </ng-container>\r\n    </core-loading>\r\n\r\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"userId && notesLoaded\">\r\n        <ion-fab-button (click)=\"addNote($event)\" [attr.aria-label]=\"'addon.notes.addnewnote' |translate\">\r\n            <ion-icon name=\"fas-plus\" aria-hidden=\"true\"></ion-icon>\r\n            <span class=\"sr-only\">{{ 'addon.notes.addnewnote' | translate }}</span>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/notes/notes-lazy.module.ts":
/*!***********************************************!*\
  !*** ./src/addons/notes/notes-lazy.module.ts ***!
  \***********************************************/
/*! exports provided: AddonNotesLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotesLazyModule", function() { return AddonNotesLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_comments_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/comments/components/components.module */ "./src/core/features/comments/components/components.module.ts");
/* harmony import */ var _features_tag_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/tag/components/components.module */ "./src/core/features/tag/components/components.module.ts");
/* harmony import */ var _pages_list_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/list/list.page */ "./src/addons/notes/pages/list/list.page.ts");
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
        component: _pages_list_list_page__WEBPACK_IMPORTED_MODULE_6__["AddonNotesListPage"],
    },
];
let AddonNotesLazyModule = class AddonNotesLazyModule {
};
AddonNotesLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
            _features_comments_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreCommentsComponentsModule"],
            _features_tag_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreTagComponentsModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        declarations: [
            _pages_list_list_page__WEBPACK_IMPORTED_MODULE_6__["AddonNotesListPage"],
        ],
    })
], AddonNotesLazyModule);



/***/ }),

/***/ "./src/addons/notes/pages/list/list.page.ts":
/*!**************************************************!*\
  !*** ./src/addons/notes/pages/list/list.page.ts ***!
  \**************************************************/
/*! exports provided: AddonNotesListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotesListPage", function() { return AddonNotesListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _addons_notes_components_add_add_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addons/notes/components/add/add-modal */ "./src/addons/notes/components/add/add-modal.ts");
/* harmony import */ var _addons_notes_services_notes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addons/notes/services/notes */ "./src/addons/notes/services/notes.ts");
/* harmony import */ var _addons_notes_services_notes_offline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @addons/notes/services/notes-offline */ "./src/addons/notes/services/notes-offline.ts");
/* harmony import */ var _addons_notes_services_notes_sync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @addons/notes/services/notes-sync */ "./src/addons/notes/services/notes-sync.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/animations */ "./src/core/components/animations.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
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
 * Page that displays a list of notes.
 */
let AddonNotesListPage = class AddonNotesListPage {
    constructor() {
        this.type = 'course';
        this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.notes = [];
        this.hasOffline = false;
        this.notesLoaded = false;
        this.showDelete = false;
        this.canDeleteNotes = false;
        this.logAfterFetch = true;
        try {
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('userId');
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].back();
            return;
        }
        // Refresh data if notes are synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_15__["CoreEvents"].on(_addons_notes_services_notes_sync__WEBPACK_IMPORTED_MODULE_5__["AddonNotesSyncProvider"].AUTO_SYNCED, (data) => {
            var _a;
            if (data.courseId == this.courseId) {
                // Show the sync warnings.
                this.showSyncWarnings(data.warnings);
                // Refresh the data.
                this.notesLoaded = false;
                this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
                this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
                (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
                this.fetchNotes(false);
            }
        }, _services_sites__WEBPACK_IMPORTED_MODULE_11__["CoreSites"].getCurrentSiteId());
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_11__["CoreSites"].getCurrentSiteUserId();
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchNotes(true);
        });
    }
    /**
     * Fetch notes.
     *
     * @param sync When to resync notes.
     * @param showErrors When to display errors or not.
     * @return Promise with the notes.
     */
    fetchNotes(sync = false, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (sync) {
                yield this.syncNotes(showErrors);
            }
            try {
                const allNotes = yield _addons_notes_services_notes__WEBPACK_IMPORTED_MODULE_3__["AddonNotes"].getNotes(this.courseId, this.userId);
                const notesList = allNotes[this.type + 'notes'] || [];
                notesList.forEach((note) => {
                    note.content = _services_utils_text__WEBPACK_IMPORTED_MODULE_13__["CoreTextUtils"].decodeHTML(note.content);
                });
                yield _addons_notes_services_notes__WEBPACK_IMPORTED_MODULE_3__["AddonNotes"].setOfflineDeletedNotes(notesList, this.courseId);
                this.hasOffline = notesList.some((note) => note.offline || note.deleted);
                if (this.userId) {
                    this.notes = notesList;
                    // Get the user profile to retrieve the user image.
                    this.user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getProfile(this.userId, this.courseId, true);
                }
                else {
                    this.notes = yield _addons_notes_services_notes__WEBPACK_IMPORTED_MODULE_3__["AddonNotes"].getNotesUserData(notesList);
                }
                if (this.logAfterFetch) {
                    this.logAfterFetch = false;
                    _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(_addons_notes_services_notes__WEBPACK_IMPORTED_MODULE_3__["AddonNotes"].logView(this.courseId, this.userId));
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                let canDelete = this.notes && this.notes.length > 0;
                if (canDelete && this.type == 'personal') {
                    canDelete = !!this.notes.find((note) => note.usermodified == this.currentUserId);
                }
                this.canDeleteNotes = canDelete;
                this.notesLoaded = true;
                this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_REFRESH;
                this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_SYNC;
            }
        });
    }
    /**
     * Refresh notes on PTR.
     *
     * @param showErrors Whether to display errors or not.
     * @param refresher Refresher instance.
     */
    refreshNotes(showErrors, refresher) {
        this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        _addons_notes_services_notes__WEBPACK_IMPORTED_MODULE_3__["AddonNotes"].invalidateNotes(this.courseId, this.userId).finally(() => {
            this.fetchNotes(true, showErrors).finally(() => {
                if (refresher) {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                }
            });
        });
    }
    /**
     * Function called when the type has changed.
     *
     * @param type New type.
     */
    typeChanged(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.type = type;
            this.notesLoaded = false;
            this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
            this.logAfterFetch = true;
            yield this.fetchNotes(true);
        });
    }
    /**
     * Add a new Note to user and course.
     *
     * @param e Event.
     */
    addNote(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            const modalData = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDomUtils"].openModal({
                component: _addons_notes_components_add_add_modal__WEBPACK_IMPORTED_MODULE_2__["AddonNotesAddComponent"],
                componentProps: {
                    userId: this.userId,
                    courseId: this.courseId,
                    type: this.type,
                },
            });
            if (modalData !== undefined) {
                if (modalData.sent && modalData.type) {
                    if (modalData.type != this.type) {
                        this.type = modalData.type;
                        this.notesLoaded = false;
                    }
                    this.refreshNotes(false);
                }
                else if (modalData.type && modalData.type != this.type) {
                    this.typeChanged(modalData.type);
                }
            }
        });
    }
    /**
     * Delete a note.
     *
     * @param e Click event.
     * @param note Note to delete.
     */
    deleteNote(e, note) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDomUtils"].showDeleteConfirm('addon.notes.deleteconfirm');
                try {
                    yield _addons_notes_services_notes__WEBPACK_IMPORTED_MODULE_3__["AddonNotes"].deleteNote(note, this.courseId);
                    this.showDelete = false;
                    this.refreshNotes(false);
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDomUtils"].showToast('addon.notes.eventnotedeleted', true, _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__["ToastDuration"].LONG);
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDomUtils"].showErrorModalDefault(error, 'Delete note failed.');
                }
            }
            catch (_a) {
                // User cancelled, nothing to do.
            }
        });
    }
    /**
     * Restore a note.
     *
     * @param e Click event.
     * @param note Note to delete.
     */
    undoDeleteNote(e, note) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            yield _addons_notes_services_notes_offline__WEBPACK_IMPORTED_MODULE_4__["AddonNotesOffline"].undoDeleteNote(note.id);
            this.refreshNotes(true);
        });
    }
    /**
     * Toggle delete.
     */
    toggleDelete() {
        this.showDelete = !this.showDelete;
    }
    /**
     * Tries to synchronize course notes.
     *
     * @param showErrors Whether to display errors or not.
     * @return Promise resolved when done.
     */
    syncNotes(showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield _addons_notes_services_notes_sync__WEBPACK_IMPORTED_MODULE_5__["AddonNotesSync"].syncNotes(this.courseId);
                this.showSyncWarnings(result.warnings);
            }
            catch (error) {
                if (showErrors) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                }
            }
        });
    }
    /**
     * Show sync warnings if any.
     *
     * @param warnings the warnings
     */
    showSyncWarnings(warnings) {
        const message = _services_utils_text__WEBPACK_IMPORTED_MODULE_13__["CoreTextUtils"].buildMessage(warnings);
        if (message) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDomUtils"].showErrorModal(message);
        }
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        this.syncObserver && this.syncObserver.off();
    }
};
AddonNotesListPage.ctorParameters = () => [];
AddonNotesListPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"],] }]
};
AddonNotesListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'page-addon-notes-list-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/notes/pages/list/list.html")).default,
        animations: [_components_animations__WEBPACK_IMPORTED_MODULE_7__["CoreAnimations"].SLIDE_IN_OUT],
    })
], AddonNotesListPage);



/***/ })

}]);
//# sourceMappingURL=addons-notes-notes-lazy-module.js.map