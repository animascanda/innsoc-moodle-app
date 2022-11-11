(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-player-player-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/player/player.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/player/player.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" *ngIf=\"displayMenu || mediaFile\" [attr.aria-label]=\"'addon.mod_lesson.lessonmenu' | translate\"\r\n                (click)=\"showMenu()\">\r\n                <ion-icon name=\"fas-bookmark\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <!-- Info messages. Only show the first one. -->\r\n        <ion-card class=\"core-info-card\" *ngIf=\"lesson && messages?.length\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-icon name=\"fas-info-circle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>{{ messages[0].message }}</ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <div *ngIf=\"lesson\" [ngClass]='{\"addon-mod_lesson-slideshow\": lesson.slideshow}'\r\n            [ngStyle]=\"{'width': lessonWidth, 'height': lessonHeight}\">\r\n\r\n            <core-timer *ngIf=\"endTime\" [endTime]=\"endTime\" (finished)=\"timeUp()\" [timeLeftClassThreshold]=\"-1\"\r\n                [timerText]=\"'addon.mod_lesson.timeremaining' | translate\">\r\n            </core-timer>\r\n\r\n            <!-- Retake and ongoing score. -->\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"showRetake && !eolData && !processData\">\r\n                <ion-label>\r\n                    <p>{{ 'addon.mod_lesson.attempt' | translate:{$a: retake} }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"pageData && pageData.ongoingscore && !eolData && !processData\"\r\n                class=\"addon-mod_lesson-ongoingscore ion-text-wrap\">\r\n                <ion-label>{{ pageData.ongoingscore }}</ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Page content. -->\r\n            <ion-card *ngIf=\"!eolData && !processData\">\r\n                <!-- Content page. -->\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"!question && pageContent\">\r\n                    <ion-label>\r\n                        <core-format-text [component]=\"component\" [componentId]=\"lesson.coursemodule\" [text]=\"pageContent\"\r\n                            contextLevel=\"module\" [contextInstanceId]=\"lesson.coursemodule\" [courseId]=\"courseId\">\r\n                        </core-format-text>\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n                <!-- Question page. -->\r\n                <!-- We need to set ngIf loaded to make formGroup directive restart every time a page changes, see MOBILE-2540. -->\r\n                <form *ngIf=\"question && loaded\" [formGroup]=\"questionForm\" #questionFormEl (ngSubmit)=\"submitQuestion($event)\">\r\n\r\n                    <ion-item-divider class=\"ion-text-wrap\" *ngIf=\"pageContent\">\r\n                        <ion-label>\r\n                            <h2>\r\n                                <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\" [text]=\"pageContent\"\r\n                                    contextLevel=\"module\" [contextInstanceId]=\"lesson.coursemodule\" [courseId]=\"courseId\">\r\n                                </core-format-text>\r\n                            </h2>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n\r\n                    <!-- Render a different input depending on the type of the question. -->\r\n                    <ng-container [ngSwitch]=\"question.template\">\r\n\r\n                        <!-- Short answer. -->\r\n                        <ion-item class=\"ion-text-wrap\" *ngSwitchCase=\"'shortanswer'\">\r\n                            <ion-label class=\"sr-only\" stacked></ion-label>\r\n                            <ion-input [type]=\"question.input!.type\" placeholder=\"{{ 'addon.mod_lesson.youranswer' | translate }}\"\r\n                                [id]=\"question.input!.id\" [formControlName]=\"question.input!.name\" autocorrect=\"off\"\r\n                                [maxlength]=\"question.input!.maxlength\">\r\n                            </ion-input>\r\n                        </ion-item>\r\n\r\n                        <!-- Essay. -->\r\n                        <ng-container *ngSwitchCase=\"'essay'\">\r\n                            <ion-item *ngIf=\"question.textarea\">\r\n                                <ion-label class=\"sr-only\">{{ 'core.content' | translate }}</ion-label>\r\n                                <core-rich-text-editor placeholder=\"{{ 'addon.mod_lesson.youranswer' | translate }}\"\r\n                                    [control]=\"question.control\" [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\r\n                                    [autoSave]=\"true\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\r\n                                    elementId=\"answer_editor\">\r\n                                </core-rich-text-editor>\r\n                            </ion-item>\r\n                            <ion-item class=\"ion-text-wrap\" *ngIf=\"!question.textarea && question.useranswer\">\r\n                                <ion-label>\r\n                                    <h3 class=\"item-heading\">{{ 'addon.mod_lesson.youranswer' | translate }}</h3>\r\n                                    <p>\r\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\r\n                                            [text]=\"question.useranswer\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\r\n                                            [courseId]=\"courseId\">\r\n                                        </core-format-text>\r\n                                    </p>\r\n                                </ion-label>\r\n                            </ion-item>\r\n                        </ng-container>\r\n\r\n                        <!-- Multichoice. -->\r\n                        <ng-container *ngSwitchCase=\"'multichoice'\">\r\n                            <!-- Single choice. -->\r\n                            <ion-radio-group *ngIf=\"!question.multi\" [formControlName]=\"question.controlName\">\r\n                                <ion-item class=\"ion-text-wrap\" *ngFor=\"let option of question.options\">\r\n                                    <ion-label>\r\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson.coursemodule\" [text]=\"option.text\"\r\n                                            contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\r\n                                        </core-format-text>\r\n                                    </ion-label>\r\n                                    <ion-radio slot=\"end\" [id]=\"option.id\" [value]=\"option.value\" [disabled]=\"option.disabled\">\r\n                                    </ion-radio>\r\n                                </ion-item>\r\n                            </ion-radio-group>\r\n\r\n                            <!-- Multiple choice. -->\r\n                            <ng-container *ngIf=\"question.multi\">\r\n                                <ion-item class=\"ion-text-wrap\" *ngFor=\"let option of question.options\">\r\n                                    <ion-label>\r\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\" [text]=\"option.text\"\r\n                                            contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\r\n                                        </core-format-text>\r\n                                    </ion-label>\r\n                                    <ion-checkbox [id]=\"option.id\" [formControlName]=\"option.name\" slot=\"end\"></ion-checkbox>\r\n                                </ion-item>\r\n                            </ng-container>\r\n                        </ng-container>\r\n\r\n                        <!-- Matching. -->\r\n                        <ng-container *ngSwitchCase=\"'matching'\">\r\n                            <ion-item class=\"ion-text-wrap\" *ngFor=\"let row of question.rows\">\r\n                                <ion-label>\r\n                                    <p>\r\n                                        <core-format-text id=\"addon-mod_lesson-matching-{{row.id}}\" [component]=\"component\"\r\n                                            [componentId]=\"lesson?.coursemodule\" [text]=\"row.text\" contextLevel=\"module\"\r\n                                            [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\r\n                                        </core-format-text>\r\n                                    </p>\r\n                                </ion-label>\r\n                                <ion-select [id]=\"row.id\" [formControlName]=\"row.name\" interface=\"action-sheet\"\r\n                                    [attr.aria-labelledby]=\"'addon-mod_lesson-matching-' + row.id\">\r\n                                    <ion-select-option *ngFor=\"let option of row.options\" [value]=\"option.value\">\r\n                                        {{option.label}}\r\n                                    </ion-select-option>\r\n                                </ion-select>\r\n                            </ion-item>\r\n                        </ng-container>\r\n                    </ng-container>\r\n\r\n                    <ion-button expand=\"block\" type=\"submit\" class=\"ion-text-wrap ion-margin button-no-uppercase\">\r\n                        {{ question.submitLabel }}\r\n                    </ion-button>\r\n                    <!-- Remove this once Ionic fixes this bug: https://github.com/ionic-team/ionic-framework/issues/19368 -->\r\n                    <input type=\"submit\" class=\"core-submit-hidden-enter\" />\r\n                </form>\r\n            </ion-card>\r\n\r\n            <!-- Page buttons and progress. -->\r\n            <ion-list *ngIf=\"!eolData && !processData\">\r\n                <ion-grid *ngIf=\"pageButtons?.length\" class=\"ion-text-wrap addon-mod_lesson-pagebuttons\">\r\n                    <ion-row class=\"ion-align-items-center\">\r\n                        <ion-col *ngFor=\"let button of pageButtons\" size=\"12\" size-md=\"6\" size-lg=\"3\" col-xl>\r\n                            <ion-button expand=\"block\" fill=\"outline\" [id]=\"button.id\" (click)=\"buttonClicked(button.data)\"\r\n                                class=\"ion-text-wrap button-no-uppercase\">\r\n                                {{ button.content }}\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"lesson?.progressbar && !canManage && pageData\">\r\n                    <ion-label>\r\n                        <span id=\"addon-mod_lesson-{{cmId}}-progress\">\r\n                            {{ 'addon.mod_lesson.progresscompleted' | translate:{$a: pageData.progress} }}\r\n                        </span>\r\n                        <core-progress-bar [progress]=\"pageData.progress\" ariaDescribedBy=\"addon-mod_lesson-{{cmId}}-progress\">\r\n                        </core-progress-bar>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-card class=\"core-info-card\" *ngIf=\"lesson?.progressbar && canManage\">\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-icon name=\"fas-info-circle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                        <ion-label>{{ 'addon.mod_lesson.progressbarteacherwarning2' | translate }}</ion-label>\r\n                    </ion-item>\r\n                </ion-card>\r\n            </ion-list>\r\n\r\n            <!-- End of lesson reached. -->\r\n            <ion-card class=\"core-warning-card\" *ngIf=\"eolData && !processData && eolData.offline?.value\">\r\n                <ion-item>\r\n                    <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    <ion-label>{{ 'addon.mod_lesson.finishretakeoffline' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-card>\r\n\r\n            <ion-card *ngIf=\"eolData && !processData\">\r\n\r\n                <ion-card-header class=\"ion-text-wrap\" *ngIf=\"eolData.gradelesson\">\r\n                    <ion-card-title>{{ 'addon.mod_lesson.congratulations' | translate }}</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.notenoughtimespent\">\r\n                    <ion-label>{{ eolData.notenoughtimespent.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.numberofpagesviewed\">\r\n                    <ion-label>{{ eolData.numberofpagesviewed.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.youshouldview\">\r\n                    <ion-label>{{ eolData.youshouldview.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.numberofcorrectanswers\">\r\n                    <ion-label>{{ eolData.numberofcorrectanswers.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.displayscorewithessays\">\r\n                    <ion-label [innerHTML]=\"eolData.displayscorewithessays.message\"></ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"!eolData.displayscorewithessays && eolData.displayscorewithoutessays\">\r\n                    <ion-label>{{ eolData.displayscorewithoutessays.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.yourcurrentgradeisoutof\">\r\n                    <ion-label>{{ eolData.yourcurrentgradeisoutof.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.eolstudentoutoftimenoanswers\">\r\n                    <ion-label>{{ eolData.eolstudentoutoftimenoanswers.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.welldone\">\r\n                    <ion-label>{{ eolData.welldone.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"lesson.progressbar && eolData.progresscompleted\">\r\n                    <ion-label>\r\n                        <span id=\"addon-mod_lesson-{{cmId}}-progress-end\">\r\n                            {{ 'addon.mod_lesson.progresscompleted' | translate:{$a: eolData.progresscompleted.value} }}\r\n                        </span>\r\n                        <core-progress-bar [progress]=\"eolData.progresscompleted.value\"\r\n                            ariaDescribedBy=\"addon-mod_lesson-{{cmId}}-progress-end\">\r\n                        </core-progress-bar>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.displayofgrade\">\r\n                    <ion-label>{{ eolData.displayofgrade.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-button *ngIf=\"eolData.reviewlesson\" expand=\"block\" class=\"ion-text-wrap ion-margin button-no-uppercase\"\r\n                    (click)=\"reviewLesson(reviewPageId!)\">\r\n                    {{ 'addon.mod_lesson.reviewlesson' | translate }}\r\n                </ion-button>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.modattemptsnoteacher\">\r\n                    <ion-label>{{ eolData.modattemptsnoteacher.message }}</ion-label>\r\n                </ion-item>\r\n                <!-- If activity link was successfully formatted, render the button. -->\r\n                <ion-button *ngIf=\"activityLink && activityLink.formatted\" expand=\"block\" fill=\"outline\" [href]=\"activityLink.href\"\r\n                    core-link [capture]=\"true\" class=\"ion-text-wrap ion-margin button-no-uppercase\">\r\n                    <core-format-text [text]=\"activityLink.label\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\r\n                        [courseId]=\"courseId\">\r\n                    </core-format-text>\r\n                </ion-button>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"activityLink && !activityLink.formatted\">\r\n                    <!-- Activity link wasn't formatted, render the original link. -->\r\n                    <ion-label>\r\n                        <core-format-text [text]=\"activityLink.label\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\r\n                            [courseId]=\"courseId\">\r\n                        </core-format-text>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-card>\r\n\r\n            <!-- Feedback returned when processing an action. -->\r\n            <ion-list *ngIf=\"processData\">\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"processData.ongoingscore && !processData.reviewmode\">\r\n                    <ion-label>{{ processData.ongoingscore }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"!processData.reviewmode || review\">\r\n                    <ion-label>\r\n                        <div *ngIf=\"!processData.reviewmode\">\r\n                            <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\" [text]=\"processData.feedback\"\r\n                                contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\r\n                            </core-format-text>\r\n                        </div>\r\n                        <div *ngIf=\"review\">\r\n                            <p>{{ 'addon.mod_lesson.gotoendoflesson' | translate }}</p>\r\n                            <p>{{ 'addon.mod_lesson.or' | translate }}</p>\r\n                            <p>{{ 'addon.mod_lesson.continuetonextpage' | translate }}</p>\r\n                        </div>\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n                <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin\" *ngIf=\"review\" (click)=\"changePage(LESSON_EOL)\">\r\n                    {{ 'addon.mod_lesson.finish' | translate }}\r\n                </ion-button>\r\n                <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin\" fill=\"outline\" *ngFor=\"let button of processDataButtons\"\r\n                    (click)=\"changePage(button.pageId, true)\">\r\n                    {{ button.label | translate }}\r\n                </ion-button>\r\n            </ion-list>\r\n        </div>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/player/player.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/player/player.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text *ngIf=\"quiz\" [text]=\"quiz.name\" contextLevel=\"module\" [contextInstanceId]=\"quiz.coursemodule\"\r\n                    [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" id=\"addon-mod_quiz-connection-error-button\" [hidden]=\"!autoSaveError\"\r\n                (click)=\"showConnectionError($event)\" [attr.aria-label]=\"'addon.mod_quiz.connectionerror' | translate\"\r\n                aria-haspopup=\"dialog\">\r\n                <ion-icon name=\"fas-exclamation-circle\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button *ngIf=\"navigation.length\" [attr.aria-label]=\"'addon.mod_quiz.opentoc' | translate\" (click)=\"openNavigation()\">\r\n                <ion-icon name=\"fas-bookmark\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n    <!-- Navigation arrows and time left. -->\r\n    <ion-toolbar *ngIf=\"loaded && endTime && questions.length && !quizAborted && !showSummary\" color=\"light\">\r\n        <ion-title>\r\n            <core-timer [endTime]=\"endTime\" (finished)=\"timeUp()\" [timerText]=\"'addon.mod_quiz.timeleft' | translate\" [align]=\"'center'\">\r\n            </core-timer>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <core-loading [hideUntil]=\"loaded\" class=\"has-spacer\">\r\n        <!-- Button to start attempting. -->\r\n        <ion-button *ngIf=\"!attempt\" expand=\"block\" class=\"ion-margin\" (click)=\"start()\">\r\n            {{ 'addon.mod_quiz.startattempt' | translate }}\r\n        </ion-button>\r\n\r\n        <!-- Questions -->\r\n        <form name=\"addon-mod_quiz-player-form\" *ngIf=\"questions.length && !quizAborted && !showSummary\" #quizForm>\r\n            <div *ngFor=\"let question of questions\">\r\n                <ion-card id=\"addon-mod_quiz-question-{{question.slot}}\">\r\n                    <!-- \"Header\" of the question. -->\r\n                    <ion-item-divider>\r\n                        <ion-label>\r\n                            <h2 *ngIf=\"question.number\" class=\"inline\">\r\n                                {{ 'core.question.questionno' | translate:{$a: question.number} }}\r\n                            </h2>\r\n                            <h2 *ngIf=\"!question.number\" class=\"inline\">{{ 'core.question.information' | translate }}</h2>\r\n                        </ion-label>\r\n                        <div *ngIf=\"question.status || question.readableMark\" slot=\"end\"\r\n                            class=\"ion-text-wrap ion-margin-horizontal addon-mod_quiz-question-note\">\r\n                            <p *ngIf=\"question.status\" class=\"block\">{{question.status}}</p>\r\n                            <p *ngIf=\"question.readableMark\">{{ question.readableMark }}</p>\r\n                        </div>\r\n                    </ion-item-divider>\r\n\r\n                    <!-- Body of the question. -->\r\n                    <core-question class=\"ion-text-wrap\" [question]=\"question\" [component]=\"component\" [componentId]=\"cmId\"\r\n                        [attemptId]=\"attempt!.id\" [usageId]=\"attempt!.uniqueid\" [offlineEnabled]=\"offline\" contextLevel=\"module\"\r\n                        [contextInstanceId]=\"cmId\" [courseId]=\"courseId\" [preferredBehaviour]=\"quiz!.preferredbehaviour\" [review]=\"false\"\r\n                        (onAbort)=\"abortQuiz()\" (buttonClicked)=\"behaviourButtonClicked($event)\">\r\n                    </core-question>\r\n                </ion-card>\r\n            </div>\r\n        </form>\r\n\r\n        <!-- Go to next or previous page. -->\r\n        <ion-row *ngIf=\"questions.length && !quizAborted && !showSummary\" class=\"spacer-top\">\r\n            <ion-col *ngIf=\"previousPage >= 0\">\r\n                <ion-button expand=\"block\" fill=\"outline\" (click)=\"changePage(previousPage)\" class=\"ion-text-wrap\">\r\n                    <ion-icon name=\"fas-chevron-left\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    {{ 'core.previous' | translate }}\r\n                </ion-button>\r\n            </ion-col>\r\n            <ion-col *ngIf=\"nextPage >= -1\">\r\n                <ion-button expand=\"block\" (click)=\"changePage(nextPage)\" class=\"ion-text-wrap\" *ngIf=\"nextPage > 0\">\r\n                    {{ 'core.next' | translate }}\r\n                    <ion-icon name=\"fas-chevron-right\" slot=\"end\" aria-hidden=\"true\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button expand=\"block\" (click)=\"changePage(nextPage)\" class=\"ion-text-wrap\" *ngIf=\"nextPage == -1\">\r\n                    {{ 'core.submit' | translate }}\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- Summary -->\r\n        <ion-card *ngIf=\"!quizAborted && showSummary && summaryQuestions.length\" class=\"addon-mod_quiz-table\">\r\n            <ion-card-header class=\"ion-text-wrap\">\r\n                <ion-card-title>{{ 'addon.mod_quiz.summaryofattempt' | translate }}</ion-card-title>\r\n            </ion-card-header>\r\n\r\n            <!-- \"Header\" of the summary table. -->\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <ion-row class=\"ion-align-items-center\">\r\n                        <ion-col size=\"3\" class=\"ion-text-center ion-hide-md-down\">\r\n                            <strong>{{ 'addon.mod_quiz.question' | translate }}</strong>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\" class=\"ion-text-center ion-hide-md-up\"><strong>#</strong></ion-col>\r\n                        <ion-col size=\"9\" class=\"ion-text-center\">\r\n                            <strong>{{ 'addon.mod_quiz.status' | translate }}</strong>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <!-- List of questions of the summary table. -->\r\n            <ng-container *ngFor=\"let question of summaryQuestions\">\r\n                <ion-item *ngIf=\"question.number\" (click)=\"changePage(question.page, false, question.slot)\"\r\n                    [attr.aria-label]=\"'core.question.questionno' | translate:{$a: question.number}\" [detail]=\"!isSequential && canReturn\"\r\n                    [button]=\"!isSequential && canReturn\">\r\n                    <ion-label>\r\n                        <ion-row class=\"ion-align-items-center\">\r\n                            <ion-col size=\"3\" class=\"ion-text-center\">{{ question.number }}</ion-col>\r\n                            <ion-col size=\"9\" class=\"ion-text-center ion-text-wrap\">{{ question.status }}</ion-col>\r\n                        </ion-row>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ng-container>\r\n\r\n            <!-- Due date warning. -->\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"dueDateWarning\">\r\n                <ion-label>{{ dueDateWarning }}</ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Time left (if quiz is timed). -->\r\n            <core-timer *ngIf=\"endTime\" [endTime]=\"endTime\" (finished)=\"timeUp()\" [timerText]=\"'addon.mod_quiz.timeleft' | translate\">\r\n            </core-timer>\r\n\r\n            <!-- List of messages explaining why the quiz cannot be submitted. -->\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"preventSubmitMessages.length\">\r\n                <ion-label>\r\n                    <h3 class=\"item-heading\">{{ 'addon.mod_quiz.cannotsubmitquizdueto' | translate }}</h3>\r\n                    <p *ngFor=\"let message of preventSubmitMessages\">{{message}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <!-- Quiz aborted -->\r\n        <ion-card *ngIf=\"attempt && ((!questions.length && !showSummary) || quizAborted)\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>{{ 'addon.mod_quiz.errorparsequestions' | translate }}</ion-label>\r\n            </ion-item>\r\n            <ion-button *ngIf=\"canReturn\" expand=\"block\" class=\"ion-margin ion-text-wrap\" fill=\"outline\"\r\n                (click)=\"changePage(attempt!.currentpage!)\">\r\n                {{ 'addon.mod_quiz.returnattempt' | translate }}\r\n            </ion-button>\r\n        </ion-card>\r\n\r\n        <div collapsible-footer appearOnBottom *ngIf=\"!quizAborted && showSummary && summaryQuestions.length && loaded\" slot=\"fixed\"\r\n            class=\"list-item-limited-width\">\r\n            <ion-button *ngIf=\"preventSubmitMessages.length\" expand=\"block\" class=\"ion-margin ion-text-wrap\" [href]=\"moduleUrl\" core-link\r\n                [showBrowserWarning]=\"false\">\r\n                {{ 'core.openinbrowser' | translate }}\r\n                <ion-icon name=\"fas-external-link-alt\" slot=\"end\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n\r\n            <!-- Button to submit the quiz. -->\r\n            <ion-button *ngIf=\"!attempt!.finishedOffline && !preventSubmitMessages.length\" expand=\"block\" class=\"ion-margin ion-text-wrap\"\r\n                (click)=\"finishAttempt(true)\">\r\n                {{ 'addon.mod_quiz.submitallandfinish' | translate }}\r\n            </ion-button>\r\n        </div>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/lesson/pages/player/player.module.ts":
/*!*************************************************************!*\
  !*** ./src/addons/mod/lesson/pages/player/player.module.ts ***!
  \*************************************************************/
/*! exports provided: AddonModLessonPlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonPlayerPageModule", function() { return AddonModLessonPlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _player_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player.page */ "./src/addons/mod/lesson/pages/player/player.page.ts");
/* harmony import */ var _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/editor/components/components.module */ "./src/core/features/editor/components/components.module.ts");
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







const routes = [
    {
        path: '',
        component: _player_page__WEBPACK_IMPORTED_MODULE_4__["AddonModLessonPlayerPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_6__["CanLeaveGuard"]],
    },
];
let AddonModLessonPlayerPageModule = class AddonModLessonPlayerPageModule {
};
AddonModLessonPlayerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreEditorComponentsModule"],
        ],
        declarations: [
            _player_page__WEBPACK_IMPORTED_MODULE_4__["AddonModLessonPlayerPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonModLessonPlayerPageModule);



/***/ }),

/***/ "./src/addons/mod/lesson/pages/player/player.page.ts":
/*!***********************************************************!*\
  !*** ./src/addons/mod/lesson/pages/player/player.page.ts ***!
  \***********************************************************/
/*! exports provided: AddonModLessonPlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonPlayerPage", function() { return AddonModLessonPlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/url */ "./src/core/services/utils/url.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _components_menu_modal_menu_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/menu-modal/menu-modal */ "./src/addons/mod/lesson/components/menu-modal/menu-modal.ts");
/* harmony import */ var _services_lesson__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/lesson */ "./src/addons/mod/lesson/services/lesson.ts");
/* harmony import */ var _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/lesson-helper */ "./src/addons/mod/lesson/services/lesson-helper.ts");
/* harmony import */ var _services_lesson_offline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/lesson-offline */ "./src/addons/mod/lesson/services/lesson-offline.ts");
/* harmony import */ var _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/lesson-sync */ "./src/addons/mod/lesson/services/lesson-sync.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
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
 * Page that allows attempting and reviewing a lesson.
 */
let AddonModLessonPlayerPage = class AddonModLessonPlayerPage {
    constructor(changeDetector, formBuilder) {
        this.changeDetector = changeDetector;
        this.formBuilder = formBuilder;
        this.component = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].COMPONENT;
        this.LESSON_EOL = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL;
        this.messages = []; // Messages to display to the user.
        this.processDataButtons = []; // Buttons to display after processing a page.
        this.forceLeave = false; // If true, don't perform any check when leaving the view.
        this.menuShown = false; // Whether menu is shown.
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.password = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('password');
                this.review = !!_services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteBooleanParam('review');
                this.currentPage = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('pageId');
                this.retakeToReview = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('retake');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return;
            }
            try {
                // Fetch the Lesson data.
                const success = yield this.fetchLessonData();
                if (success) {
                    // Review data loaded or new retake started, remove any retake being finished in sync.
                    _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].deleteRetakeFinishedInSync(this.lesson.id);
                }
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        if (this.lesson) {
            // Unblock the lesson so it can be synced.
            _services_sync__WEBPACK_IMPORTED_MODULE_8__["CoreSync"].unblockOperation(this.component, this.lesson.id);
        }
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave || !this.questionForm) {
                return true;
            }
            if (this.question && !this.eolData && !this.processData && this.originalData) {
                // Question shown. Check if there is any change.
                if (!_services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].basicLeftCompare(this.questionForm.getRawValue(), this.originalData, 3)) {
                    yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.confirmcanceledit'));
                }
            }
            _singletons_form__WEBPACK_IMPORTED_MODULE_19__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteId());
            return true;
        });
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        if (this.menuShown) {
            _singletons__WEBPACK_IMPORTED_MODULE_12__["ModalController"].dismiss();
        }
    }
    /**
     * A button was clicked.
     *
     * @param data Button data.
     */
    buttonClicked(data) {
        this.processPage(data);
    }
    /**
     * Call a function and go offline if allowed and the call fails.
     *
     * @param func Function to call.
     * @param options Options passed to the function.
     * @return Promise resolved in success, rejected otherwise.
     */
    callFunction(func, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield func();
            }
            catch (error) {
                if (this.offline || this.review || !_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isLessonOffline(this.lesson)) {
                    // Already offline or not allowed.
                    throw error;
                }
                if (_services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].isWebServiceError(error)) {
                    // WebService returned an error, cannot perform the action.
                    throw error;
                }
                // Go offline and retry.
                this.offline = true;
                // Get the possible jumps now.
                this.jumps = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPagesPossibleJumps(this.lesson.id, {
                    cmId: this.cmId,
                    readingStrategy: 1 /* PREFER_CACHE */,
                });
                // Call the function again with offline mode and the new jumps.
                options.readingStrategy = 1 /* PREFER_CACHE */;
                options.jumps = this.jumps;
                options.offline = true;
                return func();
            }
        });
    }
    /**
     * Change the page from menu or when continuing from a feedback page.
     *
     * @param pageId Page to load.
     * @param ignoreCurrent If true, allow loading current page.
     * @return Promise resolved when done.
     */
    changePage(pageId, ignoreCurrent) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!ignoreCurrent && !this.eolData && this.currentPage == pageId) {
                // Page already loaded, stop.
                return;
            }
            this.loaded = true;
            this.messages = [];
            try {
                yield this.loadPage(pageId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading page');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Get the lesson data and load the page.
     *
     * @return Promise resolved with true if success, resolved with false otherwise.
     */
    fetchLessonData() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.lesson = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getLesson(this.courseId, this.cmId);
                this.title = this.lesson.name; // Temporary title.
                // Block the lesson so it cannot be synced.
                _services_sync__WEBPACK_IMPORTED_MODULE_8__["CoreSync"].blockOperation(this.component, this.lesson.id);
                // Wait for any ongoing sync to finish. We won't sync a lesson while it's being played.
                yield _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].waitForSync(this.lesson.id);
                // If lesson has offline data already, use offline mode.
                this.offline = yield _services_lesson_offline__WEBPACK_IMPORTED_MODULE_17__["AddonModLessonOffline"].hasOfflineData(this.lesson.id);
                if (!this.offline && !_services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].isOnline() && _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isLessonOffline(this.lesson) && !this.review) {
                    // Lesson doesn't have offline data, but it allows offline and the device is offline. Use offline mode.
                    this.offline = true;
                }
                const lessonId = this.lesson.id;
                const options = {
                    cmId: this.cmId,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                };
                this.accessInfo = yield this.callFunction(() => _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getAccessInformation(lessonId, options), options);
                const promises = [];
                this.canManage = this.accessInfo.canmanage;
                this.retake = this.accessInfo.attemptscount;
                this.showRetake = !this.currentPage && this.retake > 0; // Only show it in first page if it isn't the first retake.
                if (this.accessInfo.preventaccessreasons.length) {
                    // If it's a password protected lesson and we have the password, allow playing it.
                    const preventReason = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPreventAccessReason(this.accessInfo, !!this.password, this.review);
                    if (preventReason) {
                        // Lesson cannot be played, show message and go back.
                        throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__["CoreError"](preventReason.message);
                    }
                }
                if (this.review && this.retakeToReview != this.accessInfo.attemptscount - 1) {
                    // Reviewing a retake that isn't the last one. Error.
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('addon.mod_lesson.errorreviewretakenotlast'));
                }
                if (this.password) {
                    // Lesson uses password, get the whole lesson object.
                    const options = {
                        password: this.password,
                        cmId: this.cmId,
                        readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                    };
                    promises.push(this.callFunction(() => _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getLessonWithPassword(lessonId, options), options).then((lesson) => {
                        this.lesson = lesson;
                        return;
                    }));
                }
                if (this.offline) {
                    // Offline mode, get the list of possible jumps to allow navigation.
                    promises.push(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPagesPossibleJumps(this.lesson.id, {
                        cmId: this.cmId,
                        readingStrategy: 1 /* PREFER_CACHE */,
                    }).then((jumpList) => {
                        this.jumps = jumpList;
                        return;
                    }));
                }
                yield Promise.all(promises);
                this.mediaFile = (_a = this.lesson.mediafiles) === null || _a === void 0 ? void 0 : _a[0];
                this.lessonWidth = this.lesson.slideshow ? _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].formatPixelsSize(this.lesson.mediawidth) : '';
                this.lessonHeight = this.lesson.slideshow ? _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].formatPixelsSize(this.lesson.mediaheight) : '';
                yield this.launchRetake(this.currentPage);
                return true;
            }
            catch (error) {
                if (this.review && this.retakeToReview && _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].isWebServiceError(error)) {
                    // The user cannot review the retake. Unmark the retake as being finished in sync.
                    yield _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].deleteRetakeFinishedInSync(this.lesson.id);
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
                this.forceLeave = true;
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return false;
            }
        });
    }
    /**
     * Finish the retake.
     *
     * @param outOfTime Whether the retake is finished because the user ran out of time.
     * @return Promise resolved when done.
     */
    finishRetake(outOfTime) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.lesson) {
                return;
            }
            const lesson = this.lesson;
            this.messages = [];
            if (this.offline && _services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].isOnline()) {
                // Offline mode but the app is online. Try to sync the data.
                const result = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].ignoreErrors(_services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].syncLesson(lesson.id, true, true));
                if ((_a = result === null || result === void 0 ? void 0 : result.warnings) === null || _a === void 0 ? void 0 : _a.length) {
                    // Some data was deleted. Check if the retake has changed.
                    const info = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getAccessInformation(lesson.id, {
                        cmId: this.cmId,
                    });
                    if (info.attemptscount != this.accessInfo.attemptscount) {
                        // The retake has changed. Leave the view and show the error.
                        this.forceLeave = true;
                        _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                        throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__["CoreError"](result.warnings[0]);
                    }
                    // Retake hasn't changed, show the warning and finish the retake in offline.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                }
                this.offline = false;
            }
            // Now finish the retake.
            const options = {
                password: this.password,
                outOfTime,
                review: this.review,
                offline: this.offline,
                accessInfo: this.accessInfo,
            };
            const data = yield this.callFunction(() => _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].finishRetake(lesson, this.courseId, options), options);
            this.title = lesson.name;
            this.eolData = data.data;
            this.messages = this.messages.concat(data.messages);
            this.processData = undefined;
            _singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'lesson' });
            // Format activity link if present.
            if (this.eolData.activitylink) {
                this.activityLink = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].formatActivityLink(this.eolData.activitylink.value);
            }
            else {
                this.activityLink = undefined;
            }
            // Format review lesson if present.
            if (this.eolData.reviewlesson) {
                const params = _services_utils_url__WEBPACK_IMPORTED_MODULE_10__["CoreUrlUtils"].extractUrlParams(this.eolData.reviewlesson.value);
                if (!params || !params.pageid) {
                    // No pageid in the URL, the user cannot review (probably didn't answer any question).
                    delete this.eolData.reviewlesson;
                }
                else {
                    this.reviewPageId = Number(params.pageid);
                }
            }
        });
    }
    /**
     * Jump to a certain page after performing an action.
     *
     * @param pageId The page to load.
     * @return Promise resolved when done.
     */
    jumpToPage(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (pageId === 0) {
                // Not a valid page, return to entry view.
                // This happens, for example, when the user clicks to go to previous page and there is no previous page.
                this.forceLeave = true;
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return;
            }
            else if (pageId == _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL) {
                // End of lesson reached.
                return this.finishRetake();
            }
            // Load new page.
            this.messages = [];
            return this.loadPage(pageId);
        });
    }
    /**
     * Start or continue a retake.
     *
     * @param pageId The page to load.
     * @return Promise resolved when done.
     */
    launchRetake(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data;
            if (this.review) {
                // Review mode, no need to launch the retake.
            }
            else if (!this.offline) {
                // Not in offline mode, launch the retake.
                data = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].launchRetake(this.lesson.id, this.password, pageId);
            }
            else {
                // Check if there is a finished offline retake.
                const finished = yield _services_lesson_offline__WEBPACK_IMPORTED_MODULE_17__["AddonModLessonOffline"].hasFinishedRetake(this.lesson.id);
                if (finished) {
                    // Always show EOL page.
                    pageId = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL;
                }
            }
            this.currentPage = pageId || this.accessInfo.firstpageid;
            this.messages = (data === null || data === void 0 ? void 0 : data.messages) || [];
            if (this.lesson.timelimit && !this.accessInfo.canmanage) {
                // Get the last lesson timer.
                const timers = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getTimers(this.lesson.id, {
                    cmId: this.cmId,
                    readingStrategy: 2 /* ONLY_NETWORK */,
                });
                this.endTime = timers[timers.length - 1].starttime + this.lesson.timelimit;
            }
            return this.loadPage(this.currentPage);
        });
    }
    /**
     * Load the lesson menu.
     *
     * @return Promise resolved when done.
     */
    loadMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.loadingMenu || !this.lesson) {
                // Already loading.
                return;
            }
            try {
                this.loadingMenu = true;
                const lessonId = this.lesson.id;
                const options = {
                    password: this.password,
                    cmId: this.cmId,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                };
                const pages = yield this.callFunction(() => _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPages(lessonId, options), options);
                this.lessonPages = pages.map((entry) => entry.page);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading menu.');
            }
            finally {
                this.loadingMenu = false;
            }
        });
    }
    /**
     * Load a certain page.
     *
     * @param pageId The page to load.
     * @return Promise resolved when done.
     */
    loadPage(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (pageId == _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL) {
                // End of lesson reached.
                return this.finishRetake();
            }
            else if (!this.lesson) {
                return;
            }
            const lesson = this.lesson;
            const options = {
                password: this.password,
                review: this.review,
                includeContents: true,
                cmId: this.cmId,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                accessInfo: this.accessInfo,
                jumps: this.jumps,
                includeOfflineData: true,
            };
            const data = yield this.callFunction(() => _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPageData(lesson, pageId, options), options);
            if (data.newpageid == _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL) {
                // End of lesson reached.
                return this.finishRetake();
            }
            this.pageData = data;
            this.title = data.page.title;
            this.pageContent = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].getPageContentsFromPageData(data);
            this.loaded = true;
            this.currentPage = pageId;
            this.messages = this.messages.concat(data.messages);
            // Page loaded, hide EOL and feedback data if shown.
            this.eolData = this.processData = undefined;
            if (_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isQuestionPage(data.page.type)) {
                // Create an empty FormGroup without controls, they will be added in getQuestionFromPageData.
                this.questionForm = this.formBuilder.group({});
                this.pageButtons = [];
                this.question = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].getQuestionFromPageData(this.questionForm, data);
                this.originalData = this.questionForm.getRawValue(); // Use getRawValue to include disabled values.
            }
            else {
                this.pageButtons = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].getPageButtonsFromHtml(data.pagecontent || '');
                this.question = undefined;
                this.originalData = undefined;
            }
            // Don't display the navigation menu in review mode, using them displays errors.
            if (data.displaymenu && !this.displayMenu && !this.review) {
                // Load the menu.
                this.loadMenu();
            }
            this.displayMenu = !this.review && !!data.displaymenu;
            if (!this.firstPageLoaded) {
                this.firstPageLoaded = true;
            }
            else {
                this.showRetake = false;
            }
        });
    }
    /**
     * Process a page, sending some data.
     *
     * @param data The data to send.
     * @param formSubmitted Whether a form was submitted.
     * @return Promise resolved when done.
     */
    processPage(data, formSubmitted) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.lesson || !this.pageData) {
                return;
            }
            this.loaded = false;
            const lesson = this.lesson;
            const pageData = this.pageData;
            const options = {
                password: this.password,
                review: this.review,
                offline: this.offline,
                accessInfo: this.accessInfo,
                jumps: this.jumps,
            };
            try {
                const result = yield this.callFunction(() => _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].processPage(lesson, this.courseId, pageData, data, options), options);
                if (formSubmitted) {
                    _singletons_form__WEBPACK_IMPORTED_MODULE_19__["CoreForms"].triggerFormSubmittedEvent(this.formElement, result.sent, _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteId());
                }
                if (!this.offline && !this.review && _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isLessonOffline(lesson)) {
                    // Lesson allows offline and the user changed some data in server. Update cached data.
                    const retake = this.accessInfo.attemptscount;
                    const options = {
                        cmId: this.cmId,
                        readingStrategy: 2 /* ONLY_NETWORK */,
                    };
                    // Update in background the list of content pages viewed or question attempts.
                    if (_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isQuestionPage(((_b = (_a = this.pageData) === null || _a === void 0 ? void 0 : _a.page) === null || _b === void 0 ? void 0 : _b.type) || -1)) {
                        _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getQuestionsAttemptsOnline(lesson.id, retake, options);
                    }
                    else {
                        _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getContentPagesViewedOnline(lesson.id, retake, options);
                    }
                }
                if (result.nodefaultresponse || result.inmediatejump) {
                    // Don't display feedback or force a redirect to a new page. Load the new page.
                    return yield this.jumpToPage(result.newpageid);
                }
                // Not inmediate jump, show the feedback.
                result.feedback = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].removeQuestionFromFeedback(result.feedback);
                this.messages = result.messages;
                this.processData = result;
                this.processDataButtons = [];
                if (lesson.review && !result.correctanswer && !result.noanswer && !result.isessayquestion &&
                    !result.maxattemptsreached && !result.reviewmode) {
                    // User can try again, show button to do so.
                    this.processDataButtons.push({
                        label: 'addon.mod_lesson.reviewquestionback',
                        pageId: this.currentPage,
                    });
                }
                // Button to continue.
                if (lesson.review && !result.correctanswer && !result.noanswer && !result.isessayquestion &&
                    !result.maxattemptsreached) {
                    /* If both the "Yes, I'd like to try again" and "No, I just want to go on to the next question" point to the
                        same page then don't show the "No, I just want to go on to the next question" button. It's confusing. */
                    if (((_c = pageData.page) === null || _c === void 0 ? void 0 : _c.id) != result.newpageid) {
                        // Button to continue the lesson (the page to go is configured by the teacher).
                        this.processDataButtons.push({
                            label: 'addon.mod_lesson.reviewquestioncontinue',
                            pageId: result.newpageid,
                        });
                    }
                }
                else {
                    this.processDataButtons.push({
                        label: 'addon.mod_lesson.continue',
                        pageId: result.newpageid,
                    });
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error processing page');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Review the lesson.
     *
     * @param pageId Page to load.
     */
    reviewLesson(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loaded = false;
            this.review = true;
            this.offline = false; // Don't allow offline mode in review.
            try {
                yield this.loadPage(pageId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading page');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Submit a question.
     *
     * @param e Event.
     */
    submitQuestion(e) {
        e.preventDefault();
        e.stopPropagation();
        this.loaded = false;
        // Use getRawValue to include disabled values.
        const data = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].prepareQuestionData(this.question, this.questionForm.getRawValue());
        this.processPage(data, true).finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Time up.
     */
    timeUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Time up called, hide the timer.
            this.endTime = undefined;
            this.loaded = false;
            try {
                yield this.finishRetake(true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error finishing attempt');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Show the navigation modal.
     *
     * @return Promise resolved when done.
     */
    showMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.menuShown = true;
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].openSideModal({
                component: _components_menu_modal_menu_modal__WEBPACK_IMPORTED_MODULE_14__["AddonModLessonMenuModalPage"],
                componentProps: {
                    pageInstance: this,
                },
            });
            this.menuShown = false;
        });
    }
};
AddonModLessonPlayerPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddonModLessonPlayerPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"],] }],
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['questionFormEl',] }]
};
AddonModLessonPlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-lesson-player',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/player/player.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player.scss */ "./src/addons/mod/lesson/pages/player/player.scss")).default]
    })
], AddonModLessonPlayerPage);



/***/ }),

/***/ "./src/addons/mod/lesson/pages/player/player.scss":
/*!********************************************************!*\
  !*** ./src/addons/mod/lesson/pages/player/player.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --background-odd: var(--light);\n}\n\n:host-context(html.dark) {\n  --background-odd: var(--medium);\n}\n\n:host ::ng-deep .addon-mod_lesson-slideshow {\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n\n:host ::ng-deep .studentanswer {\n  -webkit-padding-start: 8px;\n          padding-inline-start: 8px;\n}\n\n:host ::ng-deep table {\n  width: 100%;\n  margin-top: 1.5rem;\n}\n\n:host ::ng-deep table tr:nth-child(odd) {\n  background-color: var(--background-odd);\n}\n\n:host ::ng-deep table tr:last-child td {\n  border-bottom: 0;\n}\n\n:host ::ng-deep table td {\n  padding: 5px;\n  line-height: 1.5;\n  border-bottom: 1px solid var(--stroke);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2xlc3Nvbi9wYWdlcy9wbGF5ZXIvcGxheWVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyw4QkFBQTtBQUNIOztBQUVBO0VBQ0csK0JBQUE7QUFDSDs7QUFHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBUjs7QUFHSTtFQUNJLDBCQUFBO1VBQUEseUJBQUE7QUFEUjs7QUFJSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUZSOztBQUlRO0VBQ0ksdUNBQUE7QUFGWjs7QUFLUTtFQUNJLGdCQUFBO0FBSFo7O0FBTVE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQUpaIiwiZmlsZSI6InNyYy9hZGRvbnMvbW9kL2xlc3Nvbi9wYWdlcy9wbGF5ZXIvcGxheWVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgIC0tYmFja2dyb3VuZC1vZGQ6IHZhcigtLWxpZ2h0KTtcclxufVxyXG5cclxuOmhvc3QtY29udGV4dChodG1sLmRhcmspIHtcclxuICAgLS1iYWNrZ3JvdW5kLW9kZDogdmFyKC0tbWVkaXVtKTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgIC5hZGRvbi1tb2RfbGVzc29uLXNsaWRlc2hvdyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnN0dWRlbnRhbnN3ZXIge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuXHJcbiAgICAgICAgdHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLW9kZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cjpsYXN0LWNoaWxkIHRkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3Ryb2tlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/addons/mod/quiz/classes/auto-save.ts":
/*!**************************************************!*\
  !*** ./src/addons/mod/quiz/classes/auto-save.ts ***!
  \**************************************************/
/*! exports provided: AddonModQuizAutoSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizAutoSave", function() { return AddonModQuizAutoSave; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/question/services/question-helper */ "./src/core/features/question/services/question-helper.ts");
/* harmony import */ var _singletons_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/logger */ "./src/core/singletons/logger.ts");
/* harmony import */ var _components_connection_error_connection_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/connection-error/connection-error */ "./src/addons/mod/quiz/components/connection-error/connection-error.ts");
/* harmony import */ var _services_quiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/quiz */ "./src/addons/mod/quiz/services/quiz.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
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
 * Class to support auto-save in quiz. Every certain seconds, it will check if there are changes in the current page answers
 * and, if so, it will save them automatically.
 */
class AddonModQuizAutoSave {
    /**
     * Constructor.
     *
     * @param formName Name of the form where the answers are stored.
     * @param buttonSelector Selector to find the button to show the connection error.
     */
    constructor(formName, buttonSelector) {
        this.formName = formName;
        this.buttonSelector = buttonSelector;
        this.CHECK_CHANGES_INTERVAL = 5000;
        this.popoverShown = false; // Whether the popover is shown.
        this.logger = _singletons_logger__WEBPACK_IMPORTED_MODULE_3__["CoreLogger"].getInstance('AddonModQuizAutoSave');
        // Create the observable to notify if an error happened.
        this.errorObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    /**
     * Cancel a pending auto save.
     */
    cancelAutoSave() {
        clearTimeout(this.autoSaveTimeout);
        this.autoSaveTimeout = undefined;
    }
    /**
     * Check if the answers have changed in a page.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    checkChanges(quiz, attempt, preflightData, offline) {
        if (this.autoSaveTimeout) {
            // We already have an auto save pending, no need to check changes.
            return;
        }
        const answers = this.getAnswers();
        if (!this.previousAnswers) {
            // Previous answers isn't set, set it now.
            this.previousAnswers = answers;
            return;
        }
        // Check if answers have changed.
        let equal = true;
        for (const name in answers) {
            if (this.previousAnswers[name] != answers[name]) {
                equal = false;
                break;
            }
        }
        if (!equal) {
            this.setAutoSaveTimer(quiz, attempt, preflightData, offline);
        }
        this.previousAnswers = answers;
    }
    /**
     * Get answers from a form.
     *
     * @return Answers.
     */
    getAnswers() {
        return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_2__["CoreQuestionHelper"].getAnswersFromForm(document.forms[this.formName]);
    }
    /**
     * Hide the auto save error.
     */
    hideAutoSaveError() {
        var _a;
        this.errorObservable.next(false);
        (_a = this.popover) === null || _a === void 0 ? void 0 : _a.dismiss();
    }
    /**
     * Returns an observable that will notify when an error happens or stops.
     * It will send true when there's an error, and false when the error has been ammended.
     *
     * @return Observable.
     */
    onError() {
        return this.errorObservable;
    }
    /**
     * Schedule an auto save process if it's not scheduled already.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    setAutoSaveTimer(quiz, attempt, preflightData, offline) {
        // Don't schedule if already shceduled or quiz is almost closed.
        if (!quiz.autosaveperiod || this.autoSaveTimeout || _services_quiz__WEBPACK_IMPORTED_MODULE_5__["AddonModQuiz"].isAttemptTimeNearlyOver(quiz, attempt)) {
            return;
        }
        // Schedule save.
        this.autoSaveTimeout = window.setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const answers = this.getAnswers();
            this.cancelAutoSave();
            this.previousAnswers = answers; // Update previous answers to match what we're sending to the server.
            try {
                yield _services_quiz__WEBPACK_IMPORTED_MODULE_5__["AddonModQuiz"].saveAttempt(quiz, attempt, answers, preflightData, offline);
                // Save successful, we can hide the connection error if it was shown.
                this.hideAutoSaveError();
            }
            catch (error) {
                // Error auto-saving. Show error and set timer again.
                this.logger.warn('Error auto-saving data.', error);
                // If there was no error already, show the error message.
                if (!this.errorObservable.getValue()) {
                    this.errorObservable.next(true);
                    this.showAutoSaveError();
                }
                // Try again.
                this.setAutoSaveTimer(quiz, attempt, preflightData, offline);
            }
        }), quiz.autosaveperiod * 1000);
    }
    /**
     * Show an error popover due to an auto save error.
     */
    showAutoSaveError(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Don't show popover if it was already shown.
            if (this.popoverShown) {
                return;
            }
            const event = ev || {
                // Cannot use new Event() because event's target property is readonly
                target: document.querySelector(this.buttonSelector),
                stopPropagation: () => { },
                preventDefault: () => { },
            };
            this.popoverShown = true;
            this.popover = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].openPopover({
                component: _components_connection_error_connection_error__WEBPACK_IMPORTED_MODULE_4__["AddonModQuizConnectionErrorComponent"],
                event: event,
            });
            this.popoverShown = false;
        });
    }
    /**
     * Start a process to periodically check changes in answers.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    startCheckChangesProcess(quiz, attempt, preflightData, offline) {
        if (this.checkChangesInterval || !quiz.autosaveperiod) {
            // We already have the interval in place or the quiz has autosave disabled.
            return;
        }
        this.previousAnswers = undefined;
        // Load initial answers in 2.5 seconds so the first check interval finds them already loaded.
        this.loadPreviousAnswersTimeout = window.setTimeout(() => {
            this.checkChanges(quiz, attempt, preflightData, offline);
        }, 2500);
        // Check changes every certain time.
        this.checkChangesInterval = window.setInterval(() => {
            this.checkChanges(quiz, attempt, preflightData, offline);
        }, this.CHECK_CHANGES_INTERVAL);
    }
    /**
     * Stops the periodical check for changes.
     */
    stopCheckChangesProcess() {
        clearTimeout(this.loadPreviousAnswersTimeout);
        clearInterval(this.checkChangesInterval);
        this.loadPreviousAnswersTimeout = undefined;
        this.checkChangesInterval = undefined;
    }
}


/***/ }),

/***/ "./src/addons/mod/quiz/pages/player/player.module.ts":
/*!***********************************************************!*\
  !*** ./src/addons/mod/quiz/pages/player/player.module.ts ***!
  \***********************************************************/
/*! exports provided: AddonModQuizPlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizPlayerPageModule", function() { return AddonModQuizPlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_question_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/question/components/components.module */ "./src/core/features/question/components/components.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _player_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player.page */ "./src/addons/mod/quiz/pages/player/player.page.ts");
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
        component: _player_page__WEBPACK_IMPORTED_MODULE_6__["AddonModQuizPlayerPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_5__["CanLeaveGuard"]],
    },
];
let AddonModQuizPlayerPageModule = class AddonModQuizPlayerPageModule {
};
AddonModQuizPlayerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
            _features_question_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionComponentsModule"],
        ],
        declarations: [
            _player_page__WEBPACK_IMPORTED_MODULE_6__["AddonModQuizPlayerPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], AddonModQuizPlayerPageModule);



/***/ }),

/***/ "./src/addons/mod/quiz/pages/player/player.page.ts":
/*!*********************************************************!*\
  !*** ./src/addons/mod/quiz/pages/player/player.page.ts ***!
  \*********************************************************/
/*! exports provided: AddonModQuizPlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizPlayerPage", function() { return AddonModQuizPlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _features_question_components_question_question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/question/components/question/question */ "./src/core/features/question/components/question/question.ts");
/* harmony import */ var _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/question/services/question-helper */ "./src/core/features/question/services/question-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _classes_auto_save__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../classes/auto-save */ "./src/addons/mod/quiz/classes/auto-save.ts");
/* harmony import */ var _components_navigation_modal_navigation_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/navigation-modal/navigation-modal */ "./src/addons/mod/quiz/components/navigation-modal/navigation-modal.ts");
/* harmony import */ var _services_quiz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/quiz */ "./src/addons/mod/quiz/services/quiz.ts");
/* harmony import */ var _services_quiz_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/quiz-helper */ "./src/addons/mod/quiz/services/quiz-helper.ts");
/* harmony import */ var _services_quiz_sync__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/quiz-sync */ "./src/addons/mod/quiz/services/quiz-sync.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _singletons_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @singletons/dom */ "./src/core/singletons/dom.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
/* harmony import */ var _singletons_components_registry__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @singletons/components-registry */ "./src/core/singletons/components-registry.ts");
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
 * Page that allows attempting a quiz.
 */
let AddonModQuizPlayerPage = class AddonModQuizPlayerPage {
    constructor(changeDetector, elementRef) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.component = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].COMPONENT; // Component to link the files to.
        this.loaded = false; // Whether data has been loaded.
        this.quizAborted = false; // Whether the quiz was aborted due to an error.
        this.offline = false; // Whether the quiz is being attempted in offline mode.
        this.navigation = []; // List of questions to navigate them.
        this.questions = []; // Questions of the current page.
        this.nextPage = -2; // Next page.
        this.previousPage = -1; // Previous page.
        this.showSummary = false; // Whether the attempt summary should be displayed.
        this.summaryQuestions = []; // The questions to display in the summary.
        this.canReturn = false; // Whether the user can return to a page after seeing the summary.
        this.preventSubmitMessages = []; // List of messages explaining why the quiz cannot be submitted.
        this.autoSaveError = false; // Whether there's been an error in auto-save.
        this.isSequential = false; // Whether quiz navigation is sequential.
        this.preflightData = {}; // Preflight data to attempt the quiz.
        this.newAttempt = false; // Whether the user is starting a new attempt.
        this.quizDataLoaded = false; // Whether the quiz data has been loaded.
        this.timeUpCalled = false; // Whether the time up function has been called.
        this.forceLeave = false; // If true, don't perform any check when leaving the view.
        this.reloadNavigation = false; // Whether navigation needs to be reloaded because some data was sent to server.
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        try {
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.moduleUrl = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteParam('moduleUrl');
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
            return;
        }
        // Create the auto save instance.
        this.autoSave = new _classes_auto_save__WEBPACK_IMPORTED_MODULE_12__["AddonModQuizAutoSave"]('addon-mod_quiz-player-form', '#addon-mod_quiz-connection-error-button');
        // Start the player when the page is loaded.
        this.start();
        // Listen for errors on auto-save.
        this.autoSaveErrorSubscription = this.autoSave.onError().subscribe((error) => {
            this.autoSaveError = error;
            this.changeDetector.detectChanges();
        });
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        var _a;
        // Stop auto save.
        this.autoSave.cancelAutoSave();
        this.autoSave.stopCheckChangesProcess();
        (_a = this.autoSaveErrorSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        if (this.quiz) {
            // Unblock the quiz so it can be synced.
            _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].unblockOperation(_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].COMPONENT, this.quiz.id);
        }
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave || this.quizAborted || !this.questions.length || this.showSummary) {
                return true;
            }
            // Save answers.
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield this.processAttempt(false, false);
            }
            catch (error) {
                // Save attempt failed. Show confirmation.
                modal.dismiss();
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_quiz.confirmleavequizonerror'));
                _singletons_form__WEBPACK_IMPORTED_MODULE_17__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
            }
            finally {
                modal.dismiss();
            }
            return true;
        });
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Close any modal if present.
            const modal = yield _singletons__WEBPACK_IMPORTED_MODULE_10__["ModalController"].getTop();
            modal === null || modal === void 0 ? void 0 : modal.dismiss();
        });
    }
    /**
     * Abort the quiz.
     */
    abortQuiz() {
        this.quizAborted = true;
    }
    /**
     * A behaviour button in a question was clicked (Check, Redo, ...).
     *
     * @param button Clicked button.
     */
    behaviourButtonClicked(button) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal;
            try {
                // Confirm that the user really wants to do it.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.areyousure'));
                modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
                // Get the answers.
                const answers = yield this.prepareAnswers();
                // Add the clicked button data.
                answers[button.name] = button.value;
                // Behaviour checks are always in online.
                yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].processAttempt(this.quiz, this.attempt, answers, this.preflightData);
                this.reloadNavigation = true; // Data sent to server, navigation should be reloaded.
                // Reload the current page.
                const scrollElement = yield ((_a = this.content) === null || _a === void 0 ? void 0 : _a.getScrollElement());
                const scrollTop = (scrollElement === null || scrollElement === void 0 ? void 0 : scrollElement.scrollTop) || -1;
                this.loaded = false;
                (_b = this.content) === null || _b === void 0 ? void 0 : _b.scrollToTop(); // Scroll top so the spinner is seen.
                try {
                    yield this.loadPage(this.attempt.currentpage);
                }
                finally {
                    this.loaded = true;
                    if (scrollTop != -1) {
                        // Wait for content to be rendered.
                        setTimeout(() => {
                            var _a;
                            (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToPoint(0, scrollTop);
                        }, 50);
                    }
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error performing action.');
            }
            finally {
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
            }
        });
    }
    /**
     * Change the current page. If slot is supplied, try to scroll to that question.
     *
     * @param page Page to load. -1 means summary.
     * @param fromModal Whether the page was selected using the navigation modal.
     * @param slot Slot of the question to scroll to.
     * @return Promise resolved when done.
     */
    changePage(page, fromModal, slot) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.attempt) {
                return;
            }
            if (page != -1 && (this.attempt.state == _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].ATTEMPT_OVERDUE || this.attempt.finishedOffline)) {
                // We can't load a page if overdue or the local attempt is finished.
                return;
            }
            else if (page == this.attempt.currentpage && !this.showSummary && slot !== undefined) {
                // Navigating to a question in the current page.
                yield this.scrollToQuestion(slot);
                return;
            }
            else if ((page == this.attempt.currentpage && !this.showSummary) || (fromModal && this.isSequential && page != -1)) {
                // If the user is navigating to the current page we do nothing.
                // Also, in sequential quizzes we don't allow navigating using the modal except for finishing the quiz (summary).
                return;
            }
            else if (page === -1 && this.showSummary) {
                // Summary already shown.
                return;
            }
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
            // First try to save the attempt data. We only save it if we're not seeing the summary.
            if (!this.showSummary) {
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
                try {
                    yield this.processAttempt(false, false);
                    modal.dismiss();
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorsaveattempt', true);
                    modal.dismiss();
                    return;
                }
                this.reloadNavigation = true; // Data sent to server, navigation should be reloaded.
            }
            this.loaded = false;
            try {
                // Attempt data successfully saved, load the page or summary.
                // Stop checking for changes during page change.
                this.autoSave.stopCheckChangesProcess();
                if (page === -1) {
                    yield this.loadSummary();
                }
                else {
                    yield this.loadPage(page);
                }
            }
            catch (error) {
                // If the user isn't seeing the summary, start the check again.
                if (!this.showSummary) {
                    this.autoSave.startCheckChangesProcess(this.quiz, this.attempt, this.preflightData, this.offline);
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
            }
            finally {
                this.loaded = true;
                if (slot !== undefined) {
                    // Scroll to the question.
                    yield this.scrollToQuestion(slot);
                }
            }
        });
    }
    /**
     * Convenience function to get the quiz data.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.quiz = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getQuiz(this.courseId, this.cmId);
                // Block the quiz so it cannot be synced.
                _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].blockOperation(_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].COMPONENT, this.quiz.id);
                // Wait for any ongoing sync to finish. We won't sync a quiz while it's being played.
                yield _services_quiz_sync__WEBPACK_IMPORTED_MODULE_16__["AddonModQuizSync"].waitForSync(this.quiz.id);
                this.isSequential = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].isNavigationSequential(this.quiz);
                if (_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].isQuizOffline(this.quiz)) {
                    // Quiz supports offline.
                    this.offline = true;
                }
                else {
                    // Quiz doesn't support offline right now, but maybe it did and then the setting was changed.
                    // If we have an unfinished offline attempt then we'll use offline mode.
                    this.offline = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].isLastAttemptOfflineUnfinished(this.quiz);
                }
                if (this.quiz.timelimit && this.quiz.timelimit > 0) {
                    this.readableTimeLimit = _singletons_time__WEBPACK_IMPORTED_MODULE_19__["CoreTime"].formatTime(this.quiz.timelimit);
                }
                // Get access information for the quiz.
                this.quizAccessInfo = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getQuizAccessInformation(this.quiz.id, {
                    cmId: this.quiz.coursemodule,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                });
                // Get user attempts to determine last attempt.
                const attempts = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getUserAttempts(this.quiz.id, {
                    cmId: this.quiz.coursemodule,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                });
                if (!attempts.length) {
                    // There are no attempts, start a new one.
                    this.newAttempt = true;
                    return;
                }
                // Get the last attempt. If it's finished, start a new one.
                this.lastAttempt = yield _services_quiz_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizHelper"].setAttemptCalculatedData(this.quiz, attempts[attempts.length - 1], false, undefined, true);
                this.newAttempt = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].isAttemptFinished(this.lastAttempt.state);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquiz', true);
            }
        });
    }
    /**
     * Finish an attempt, either by timeup or because the user clicked to finish it.
     *
     * @param userFinish Whether the user clicked to finish the attempt.
     * @param timeUp Whether the quiz time is up.
     * @return Promise resolved when done.
     */
    finishAttempt(userFinish, timeUp) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal;
            try {
                // Show confirm if the user clicked the finish button and the quiz is in progress.
                if (!timeUp && this.attempt.state == _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].ATTEMPT_IN_PROGRESS) {
                    yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_quiz.confirmclose'));
                }
                modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
                yield this.processAttempt(userFinish, timeUp);
                // Trigger an event to notify the attempt was finished.
                _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].ATTEMPT_FINISHED_EVENT, {
                    quizId: this.quiz.id,
                    attemptId: this.attempt.id,
                    synced: !this.offline,
                }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
                _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'quiz' });
                // Leave the player.
                this.forceLeave = true;
                _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorsaveattempt', true);
            }
            finally {
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
            }
        });
    }
    /**
     * Fix sequence checks of current page.
     *
     * @return Promise resolved when done.
     */
    fixSequenceChecks() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get current page data again to get the latest sequencechecks.
            const data = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptData(this.attempt.id, this.attempt.currentpage, this.preflightData, {
                cmId: this.quiz.coursemodule,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            const newSequenceChecks = {};
            data.questions.forEach((question) => {
                const sequenceCheck = _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].getQuestionSequenceCheckFromHtml(question.html);
                if (sequenceCheck) {
                    newSequenceChecks[question.slot] = sequenceCheck;
                }
            });
            // Notify the new sequence checks to the components.
            (_a = this.questionComponents) === null || _a === void 0 ? void 0 : _a.forEach((component) => {
                component.updateSequenceCheck(newSequenceChecks);
            });
        });
    }
    /**
     * Get the input answers.
     *
     * @return Object with the answers.
     */
    getAnswers() {
        return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].getAnswersFromForm(document.forms['addon-mod_quiz-player-form']);
    }
    /**
     * Initializes the timer if enabled.
     */
    initTimer() {
        var _a;
        if (!((_a = this.attemptAccessInfo) === null || _a === void 0 ? void 0 : _a.endtime) || this.attemptAccessInfo.endtime < 0) {
            return;
        }
        // Quiz has an end time. Check if time left should be shown.
        const shouldShowTime = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].shouldShowTimeLeft(this.quizAccessInfo.activerulenames, this.attempt, this.attemptAccessInfo.endtime);
        if (shouldShowTime) {
            this.endTime = this.attemptAccessInfo.endtime;
        }
        else {
            delete this.endTime;
        }
    }
    /**
     * Load a page questions.
     *
     * @param page The page to load.
     * @return Promise resolved when done.
     */
    loadPage(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptData(this.attempt.id, page, this.preflightData, {
                cmId: this.quiz.coursemodule,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            // Update attempt, status could change during the execution.
            this.attempt = data.attempt;
            this.attempt.currentpage = page;
            this.questions = data.questions;
            this.nextPage = data.nextpage;
            this.previousPage = this.isSequential ? -1 : page - 1;
            this.showSummary = false;
            this.questions.forEach((question) => {
                // Get the readable mark for each question.
                question.readableMark = _services_quiz_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizHelper"].getQuestionMarkFromHtml(question.html);
                // Extract the question info box.
                _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].extractQuestionInfoBox(question, '.info');
                // Check if the question is blocked. If it is, treat it as a description question.
                if (_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].isQuestionBlocked(question)) {
                    question.type = 'description';
                }
            });
            // Mark the page as viewed.
            _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].logViewAttempt(this.attempt.id, page, this.preflightData, this.offline, this.quiz));
            // Start looking for changes.
            this.autoSave.startCheckChangesProcess(this.quiz, this.attempt, this.preflightData, this.offline);
        });
    }
    /**
     * Load attempt summary.
     *
     * @return Promise resolved when done.
     */
    loadSummary() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.summaryQuestions = [];
            this.summaryQuestions = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptSummary(this.attempt.id, this.preflightData, {
                cmId: this.quiz.coursemodule,
                loadLocal: this.offline,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            this.showSummary = true;
            this.canReturn = this.attempt.state == _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].ATTEMPT_IN_PROGRESS && !this.attempt.finishedOffline;
            this.preventSubmitMessages = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getPreventSubmitMessages(this.summaryQuestions);
            this.dueDateWarning = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptDueDateWarning(this.quiz, this.attempt);
            // Log summary as viewed.
            _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].logViewAttemptSummary(this.attempt.id, this.preflightData, this.quiz.id, this.quiz.name));
        });
    }
    /**
     * Load data to navigate the questions using the navigation modal.
     *
     * @return Promise resolved when done.
     */
    loadNavigation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // We use the attempt summary to build the navigation because it contains all the questions.
            this.navigation = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptSummary(this.attempt.id, this.preflightData, {
                cmId: this.quiz.coursemodule,
                loadLocal: this.offline,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            this.navigation.forEach((question) => {
                question.stateClass = _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].getQuestionStateClass(question.state || '');
            });
        });
    }
    /**
     * Open the navigation modal.
     *
     * @return Promise resolved when done.
     */
    openNavigation() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.reloadNavigation) {
                // Some data has changed, reload the navigation.
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(this.loadNavigation());
                modal.dismiss();
                this.reloadNavigation = false;
            }
            // Create the navigation modal.
            const modalData = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openSideModal({
                component: _components_navigation_modal_navigation_modal__WEBPACK_IMPORTED_MODULE_13__["AddonModQuizNavigationModalComponent"],
                componentProps: {
                    navigation: this.navigation,
                    summaryShown: this.showSummary,
                    currentPage: (_a = this.attempt) === null || _a === void 0 ? void 0 : _a.currentpage,
                    isReview: false,
                },
            });
            if (!modalData) {
                return;
            }
            this.changePage(modalData.page, true, modalData.slot);
        });
    }
    /**
     * Prepare the answers to be sent for the attempt.
     *
     * @return Promise resolved with the answers.
     */
    prepareAnswers() {
        return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].prepareAnswers(this.questions, this.getAnswers(), this.offline, this.component, this.quiz.coursemodule);
    }
    /**
     * Process attempt.
     *
     * @param userFinish Whether the user clicked to finish the attempt.
     * @param timeUp Whether the quiz time is up.
     * @param retrying Whether we're retrying the change.
     * @return Promise resolved when done.
     */
    processAttempt(userFinish, timeUp, retrying) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the answers to send.
            let answers = {};
            if (!this.showSummary) {
                answers = yield this.prepareAnswers();
            }
            try {
                // Send the answers.
                yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].processAttempt(this.quiz, this.attempt, answers, this.preflightData, userFinish, timeUp, this.offline);
            }
            catch (error) {
                if (!error || error.errorcode != 'submissionoutofsequencefriendlymessage') {
                    throw error;
                }
                try {
                    // There was an error with the sequence check. Try to ammend it.
                    yield this.fixSequenceChecks();
                }
                catch (_a) {
                    throw error;
                }
                if (retrying) {
                    // We're already retrying, don't send the data again because it could cause an infinite loop.
                    throw error;
                }
                // Sequence checks updated, try to send the data again.
                return this.processAttempt(userFinish, timeUp, true);
            }
            // Answers saved, cancel auto save.
            this.autoSave.cancelAutoSave();
            this.autoSave.hideAutoSaveError();
            if (this.formElement) {
                _singletons_form__WEBPACK_IMPORTED_MODULE_17__["CoreForms"].triggerFormSubmittedEvent(this.formElement, !this.offline, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
            }
            return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].clearTmpData(this.questions, this.component, this.quiz.coursemodule);
        });
    }
    /**
     * Scroll to a certain question.
     *
     * @param slot Slot of the question to scroll to.
     */
    scrollToQuestion(slot) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].nextTick();
            yield _singletons_components_registry__WEBPACK_IMPORTED_MODULE_20__["CoreComponentsRegistry"].waitComponentsReady(this.elementRef.nativeElement, 'core-question');
            yield _singletons_dom__WEBPACK_IMPORTED_MODULE_18__["CoreDom"].scrollToElement(this.elementRef.nativeElement, '#addon-mod_quiz-question-' + slot);
        });
    }
    /**
     * Show connection error.
     *
     * @param ev Click event.
     */
    showConnectionError(ev) {
        this.autoSave.showAutoSaveError(ev);
    }
    /**
     * Convenience function to start the player.
     */
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.loaded = false;
                if (!this.quizDataLoaded) {
                    // Fetch data.
                    yield this.fetchData();
                    this.quizDataLoaded = true;
                }
                // Quiz data has been loaded, try to start or continue.
                yield this.startOrContinueAttempt();
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Start or continue an attempt.
     *
     * @return Promise resolved when done.
     */
    startOrContinueAttempt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let attempt = this.newAttempt ? undefined : this.lastAttempt;
                // Get the preflight data and start attempt if needed.
                attempt = yield _services_quiz_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizHelper"].getAndCheckPreflightData(this.quiz, this.quizAccessInfo, this.preflightData, attempt, this.offline, false, 'addon.mod_quiz.startattempt');
                // Re-fetch attempt access information with the right attempt (might have changed because a new attempt was created).
                this.attemptAccessInfo = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptAccessInformation(this.quiz.id, attempt.id, {
                    cmId: this.quiz.coursemodule,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                });
                this.attempt = attempt;
                yield this.loadNavigation();
                if (this.attempt.state != _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].ATTEMPT_OVERDUE && !this.attempt.finishedOffline) {
                    // Attempt not overdue and not finished in offline, load page.
                    yield this.loadPage(this.attempt.currentpage);
                    this.initTimer();
                }
                else {
                    // Attempt is overdue or finished in offline, we can only load the summary.
                    yield this.loadSummary();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
            }
        });
    }
    /**
     * Quiz time has finished.
     */
    timeUp() {
        if (this.timeUpCalled) {
            return;
        }
        this.timeUpCalled = true;
        this.finishAttempt(false, true);
    }
};
AddonModQuizPlayerPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AddonModQuizPlayerPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"],] }],
    questionComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [_features_question_components_question_question__WEBPACK_IMPORTED_MODULE_3__["CoreQuestionComponent"],] }],
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['quizForm',] }]
};
AddonModQuizPlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-quiz-player',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/player/player.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player.scss */ "./src/addons/mod/quiz/pages/player/player.scss")).default]
    })
], AddonModQuizPlayerPage);



/***/ }),

/***/ "./src/addons/mod/quiz/pages/player/player.scss":
/*!******************************************************!*\
  !*** ./src/addons/mod/quiz/pages/player/player.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host .addon-mod_quiz-question-note p {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n:host ion-content ion-toolbar {\n  border-bottom: 1px solid var(--stroke);\n}\n:host core-timer .core-timer.core-timer-timeleft-0 {\n  background-color: #ca3120 !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-0 label, :host core-timer .core-timer.core-timer-timeleft-0 span, :host core-timer .core-timer.core-timer-timeleft-0 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-1 {\n  background-color: rgba(202, 49, 32, 0.9333333333) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-1 label, :host core-timer .core-timer.core-timer-timeleft-1 span, :host core-timer .core-timer.core-timer-timeleft-1 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-2 {\n  background-color: rgba(202, 49, 32, 0.8666666667) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-2 label, :host core-timer .core-timer.core-timer-timeleft-2 span, :host core-timer .core-timer.core-timer-timeleft-2 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-3 {\n  background-color: rgba(202, 49, 32, 0.8) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-3 label, :host core-timer .core-timer.core-timer-timeleft-3 span, :host core-timer .core-timer.core-timer-timeleft-3 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-4 {\n  background-color: rgba(202, 49, 32, 0.7333333333) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-4 label, :host core-timer .core-timer.core-timer-timeleft-4 span, :host core-timer .core-timer.core-timer-timeleft-4 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-5 {\n  background-color: rgba(202, 49, 32, 0.6666666667) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-5 label, :host core-timer .core-timer.core-timer-timeleft-5 span, :host core-timer .core-timer.core-timer-timeleft-5 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-6 {\n  background-color: rgba(202, 49, 32, 0.6) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-6 label, :host core-timer .core-timer.core-timer-timeleft-6 span, :host core-timer .core-timer.core-timer-timeleft-6 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-7 {\n  background-color: rgba(202, 49, 32, 0.5333333333) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-7 label, :host core-timer .core-timer.core-timer-timeleft-7 span, :host core-timer .core-timer.core-timer-timeleft-7 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-8 {\n  background-color: rgba(202, 49, 32, 0.4666666667) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-9 {\n  background-color: rgba(202, 49, 32, 0.4) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-10 {\n  background-color: rgba(202, 49, 32, 0.3333333333) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-11 {\n  background-color: rgba(202, 49, 32, 0.2666666667) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-12 {\n  background-color: rgba(202, 49, 32, 0.2) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-13 {\n  background-color: rgba(202, 49, 32, 0.1333333333) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-14 {\n  background-color: rgba(202, 49, 32, 0.0666666667) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-15 {\n  background-color: rgba(202, 49, 32, 0) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvYWRkb25zL21vZC9xdWl6L3BhZ2VzL3BsYXllci9wbGF5ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7OztFQUFBO0FDRUE7Ozs7RUFBQTtBQWdHQTs7RUFBQTtBQ2xHQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQStEQTs7OztFQUFBO0FDekRJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBZ0RSO0FBN0NJO0VBQ0ksc0NBQUE7QUErQ1I7QUF6Q1k7RUFDSSxvQ0FBQTtBQTJDaEI7QUF4Q29CO0VBQ0ksbUJBQUE7QUEwQ3hCO0FBL0NZO0VBQ0ksNERBQUE7QUFpRGhCO0FBOUNvQjtFQUNJLG1CQUFBO0FBZ0R4QjtBQXJEWTtFQUNJLDREQUFBO0FBdURoQjtBQXBEb0I7RUFDSSxtQkFBQTtBQXNEeEI7QUEzRFk7RUFDSSxtREFBQTtBQTZEaEI7QUExRG9CO0VBQ0ksbUJBQUE7QUE0RHhCO0FBakVZO0VBQ0ksNERBQUE7QUFtRWhCO0FBaEVvQjtFQUNJLG1CQUFBO0FBa0V4QjtBQXZFWTtFQUNJLDREQUFBO0FBeUVoQjtBQXRFb0I7RUFDSSxtQkFBQTtBQXdFeEI7QUE3RVk7RUFDSSxtREFBQTtBQStFaEI7QUE1RW9CO0VBQ0ksbUJBQUE7QUE4RXhCO0FBbkZZO0VBQ0ksNERBQUE7QUFxRmhCO0FBbEZvQjtFQUNJLG1CQUFBO0FBb0Z4QjtBQXpGWTtFQUNJLDREQUFBO0FBMkZoQjtBQTVGWTtFQUNJLG1EQUFBO0FBOEZoQjtBQS9GWTtFQUNJLDREQUFBO0FBaUdoQjtBQWxHWTtFQUNJLDREQUFBO0FBb0doQjtBQXJHWTtFQUNJLG1EQUFBO0FBdUdoQjtBQXhHWTtFQUNJLDREQUFBO0FBMEdoQjtBQTNHWTtFQUNJLDREQUFBO0FBNkdoQjtBQTlHWTtFQUNJLGlEQUFBO0FBZ0hoQiIsImZpbGUiOiJzcmMvYWRkb25zL21vZC9xdWl6L3BhZ2VzL3BsYXllci9wbGF5ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxyXG4gKi9cclxuXHJcbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XHJcbiRhc3NldHMtcGF0aDogXCIuLi9hc3NldHNcIjtcclxuXHJcbkBpbXBvcnQgXCIuL2hlbHBlcnMvaGVscGVycy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuL2dsb2JhbHMuY3VzdG9tLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vZ2xvYmFscy52YXJpYWJsZXMuc2Nzc1wiO1xyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgc3RyaW5nIGZ1bmN0aW9ucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLnN0cmluZy5zY3NzXHJcbiAqL1xyXG5cclxuXHJcbi8vIFN0cmluZyBVdGlsaXR5IEZ1bmN0aW9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gU3RyaW5nIFJlcGxhY2UgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBzdHItcmVwbGFjZSgkc3RyaW5nLCAkc2VhcmNoLCAkcmVwbGFjZTogXCJcIikge1xyXG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xyXG5cclxuICBAaWYgJGluZGV4IHtcclxuICAgIEByZXR1cm4gc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpICsgJHJlcGxhY2UgKyBzdHItcmVwbGFjZShzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgc3RyLWxlbmd0aCgkc2VhcmNoKSksICRzZWFyY2gsICRyZXBsYWNlKTtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gJHN0cmluZztcclxufVxyXG5cclxuLy8gU3RyaW5nIFNwbGl0IEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuQGZ1bmN0aW9uIHN0ci1zcGxpdCgkc3RyaW5nLCAkc2VwYXJhdG9yKSB7XHJcbiAgLy8gZW1wdHkgYXJyYXkvbGlzdFxyXG4gICRzcGxpdC1hcnI6ICgpO1xyXG4gIC8vIGZpcnN0IGluZGV4IG9mIHNlcGFyYXRvciBpbiBzdHJpbmdcclxuICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcclxuICAvLyBsb29wIHRocm91Z2ggc3RyaW5nXHJcbiAgQHdoaWxlICRpbmRleCAhPSBudWxsIHtcclxuICAgIC8vIGdldCB0aGUgc3Vic3RyaW5nIGZyb20gdGhlIGZpcnN0IGNoYXJhY3RlciB0byB0aGUgc2VwYXJhdG9yXHJcbiAgICAkaXRlbTogc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpO1xyXG4gICAgLy8gcHVzaCBpdGVtIHRvIGFycmF5XHJcbiAgICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJGl0ZW0pO1xyXG4gICAgLy8gcmVtb3ZlIGl0ZW0gYW5kIHNlcGFyYXRvciBmcm9tIHN0cmluZ1xyXG4gICAgJHN0cmluZzogc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIDEpO1xyXG4gICAgLy8gZmluZCBuZXcgaW5kZXggb2Ygc2VwYXJhdG9yXHJcbiAgICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcclxuICB9XHJcbiAgLy8gYWRkIHRoZSByZW1haW5pbmcgc3RyaW5nIHRvIGxpc3QgKHRoZSBsYXN0IGl0ZW0pXHJcbiAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRzdHJpbmcpO1xyXG5cclxuICBAcmV0dXJuICRzcGxpdC1hcnI7XHJcbn1cclxuXHJcblxyXG4vLyBTdHJpbmcgRXh0cmFjdCBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1leHRyYWN0KCRzdHJpbmcsICRzdGFydCwgJGVuZCkge1xyXG4gICRzdGFydC1pbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzdGFydCk7XHJcblxyXG4gIEBpZiAkc3RhcnQtaW5kZXgge1xyXG4gICAgJHBvc3Q6IHN0ci1zbGljZSgkc3RyaW5nLCAkc3RhcnQtaW5kZXggKyBzdHItbGVuZ3RoKCRzdGFydCkpO1xyXG4gICAgJGVuZC1pbmRleDogc3RyLWluZGV4KCRwb3N0LCAkZW5kKTtcclxuXHJcbiAgICBAaWYgJGVuZC1pbmRleCB7XHJcbiAgICAgIEByZXR1cm4gc3RyLXNsaWNlKCRwb3N0LCAxLCAkZW5kLWluZGV4IC0gMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG4vLyBTdHJpbmcgQ29udGFpbnMgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBzdHItY29udGFpbnMoJHN0cmluZywgJG5lZWRsZSkge1xyXG4gIEBpZiAodHlwZS1vZigkc3RyaW5nKSA9PSBzdHJpbmcpIHtcclxuICAgIEByZXR1cm4gc3RyLWluZGV4KCRzdHJpbmcsICRuZWVkbGUpICE9IG51bGw7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5cclxuLy8gVVJMIEVuY29kZSBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHVybC1lbmNvZGUoJHZhbCkge1xyXG4gICRzcGFjZXM6IHN0ci1yZXBsYWNlKCR2YWwsIFwiIFwiLCBcIiUyMFwiKTtcclxuICAkZW5jb2RlZDogc3RyLXJlcGxhY2UoJHNwYWNlcywgXCIjXCIsIFwiJTIzXCIpO1xyXG4gIEByZXR1cm4gJGVuY29kZWQ7XHJcbn1cclxuXHJcblxyXG4vLyBBZGQgUm9vdCBTZWxlY3RvclxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBZGRzIGEgcm9vdCBzZWxlY3RvciB1c2luZyBob3N0LWNvbnRleHQgYmFzZWQgb24gdGhlIHNlbGVjdG9yIHBhc3NlZFxyXG4vL1xyXG4vLyBFeGFtcGxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0XCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSlcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCguZml4ZWQpXCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCguZml4ZWQpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZml4ZWRcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24tYmFkZ2UpXCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWhpZGUgOjpzbG90dGVkKGlvbi1iYWRnZSlcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCIuc2hhZG93XCIpXHJcbi8vIC0tPiBbZGlyPXJ0bF0gLnNoYWRvd1xyXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5zaGFkb3dcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBhZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgJGFkZEhvc3RTZWxlY3Rvcikge1xyXG4gICRzZWxlY3RvcnM6IHN0ci1zcGxpdCgkcm9vdCwgXCIsXCIpO1xyXG5cclxuICAkbGlzdDogKCk7XHJcblxyXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkc2VsZWN0b3JzIHtcclxuICAgIC8vIElmIHRoZSBzZWxlY3RvciBjb250YWlucyA6aG9zdCggaXQgbWVhbnMgaXQgaXMgdGFyZ2V0aW5nIGEgY2xhc3Mgb24gdGhlIGhvc3RcclxuICAgIC8vIGVsZW1lbnQgc28gd2UgbmVlZCB0byBjaGFuZ2UgaG93IHdlIHRhcmdldCBpdFxyXG4gICAgQGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3QoXCIpIHtcclxuICAgICAgJHNoYWRvdy1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2VsZWN0b3IsIFwiOmhvc3QoXCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KTpob3N0KFwiKTtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJHNoYWRvdy1lbGVtZW50LCBjb21tYSk7XHJcblxyXG4gICAgICAkbmV3LWVsZW1lbnQ6ICgpO1xyXG4gICAgICAkZWxlbWVudHM6IHN0ci1zcGxpdCgkc2VsZWN0b3IsIFwiIFwiKTtcclxuXHJcbiAgICAgIEBlYWNoICRlbGVtZW50IGluICRlbGVtZW50cyB7XHJcbiAgICAgICAgQGlmIHN0ci1jb250YWlucygkZWxlbWVudCwgXCI6aG9zdChcIikge1xyXG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiAkZWxlbWVudDtcclxuXHJcbiAgICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIikpXCIpIHtcclxuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKSlcIiwgXCIpXCIpO1xyXG4gICAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIilcIiwgXCJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzY29wZWQtZWxlbWVudCwgXCI6aG9zdChcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pXCIpO1xyXG5cclxuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJHNjb3BlZC1lbGVtZW50LCBzcGFjZSk7XHJcbiAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRlbGVtZW50LCBzcGFjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkbmV3LWVsZW1lbnQsIGNvbW1hKTtcclxuICAgIC8vIElmIHRoZSBzZWxlY3RvciBjb250YWlucyA6aG9zdCBpdCBtZWFucyBpdCBpcyB0YXJnZXRpbmcganVzdCB0aGUgaG9zdFxyXG4gICAgLy8gZWxlbWVudCBzbyB3ZSBjYW4gY2hhbmdlIGl0IHRvIGxvb2sgZm9yIGhvc3QtY29udGV4dFxyXG4gICAgfSBAZWxzZSBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0XCIpIHtcclxuICAgICAgJHNoYWRvdy1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2VsZWN0b3IsIFwiOmhvc3RcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pXCIpO1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcclxuICAgICAgLy8gSWYgdGhlIHNlbGVjdG9yIGRvZXMgbm90IGNvbnRhaW4gaG9zdCBhdCBhbGwgaXQgaXMgZWl0aGVyIGEgc2hhZG93XHJcbiAgICAgIC8vIG9yIG5vcm1hbCBlbGVtZW50IHNvIGFwcGVuZCBib3RoIHRoZSBkaXIgY2hlY2sgYW5kIGhvc3QtY29udGV4dFxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiI3skYWRkSG9zdFNlbGVjdG9yfSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSkgI3skc2VsZWN0b3J9XCIsIGNvbW1hKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEByZXR1cm4gJGxpc3Q7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIGNvbG9yIGZ1bmN0aW9ucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLmNvbG9yLnNjc3NcclxuICovXHJcblxyXG4vLyBHZXRzIHRoZSBhY3RpdmUgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSBhIHZhcmlhdGlvbi4gQWxwaGEgaXMgb3B0aW9uYWwuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEV4YW1wbGUgdXNhZ2U6XHJcbi8vIGN1cnJlbnQtY29sb3IoYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLWJhc2UpXHJcbi8vIGN1cnJlbnQtY29sb3IoY29udHJhc3QsIDAuMSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC4xKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gY3VycmVudC1jb2xvcigkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwpIHtcclxuICBAaWYgJGFscGhhID09IG51bGwge1xyXG4gICAgQHJldHVybiB2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufSk7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuIHJnYmEodmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0tcmdiKSwgI3skYWxwaGF9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEdldHMgdGhlIHNwZWNpZmljIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gdGhlIG5hbWUgYW5kIHZhcmlhdGlvbi4gQWxwaGEvcmdiIGFyZSBvcHRpb25hbC5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRXhhbXBsZSB1c2FnZTpcclxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKVxyXG4vLyBpb24tY29sb3Ioc2Vjb25kYXJ5LCBjb250cmFzdCkgPT4gdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdClcclxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UsIDAuNSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSksIDAuNSlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGlvbi1jb2xvcigkbmFtZSwgJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsLCAkcmdiOiBudWxsKSB7XHJcbiAgJHZhbHVlczogbWFwLWdldCgkY29sb3JzLCAkbmFtZSk7XHJcbiAgJHZhbHVlOiBtYXAtZ2V0KCR2YWx1ZXMsICR2YXJpYXRpb24pO1xyXG4gICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX0tI3skdmFyaWF0aW9ufTtcclxuXHJcbiAgQGlmICgkdmFyaWF0aW9uID09IGJhc2UpIHtcclxuICAgICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX07XHJcbiAgfVxyXG5cclxuICBAaWYgKCRhbHBoYSkge1xyXG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xyXG4gICAgQHJldHVybiByZ2JhKHZhcigjeyR2YXJpYWJsZX0tcmdiLCAkdmFsdWUpLCAkYWxwaGEpO1xyXG4gIH1cclxuICBAaWYgKCRyZ2IpIHtcclxuICAgICR2YWx1ZTogY29sb3ItdG8tcmdiLWxpc3QoJHZhbHVlKTtcclxuICAgICR2YXJpYWJsZTogI3skdmFyaWFibGV9LXJnYjtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gdmFyKCN7JHZhcmlhYmxlfSwgJHZhbHVlKTtcclxufVxyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUoJGNvbG9yKSB7XHJcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAxMiUpO1xyXG59XHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQoJGNvbG9yKSB7XHJcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAxMCUpO1xyXG59XHJcblxyXG4vLyBDb252ZXJ0cyBhIGNvbG9yIHRvIGEgY29tbWEgc2VwYXJhdGVkIHJnYi5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGNvbG9yLXRvLXJnYi1saXN0KCRjb2xvcikge1xyXG4gIEByZXR1cm4gI3tyZWQoJGNvbG9yKX0sI3tncmVlbigkY29sb3IpfSwje2JsdWUoJGNvbG9yKX07XHJcbn1cclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3NcclxuICovXHJcblxyXG5AbWl4aW4gaW5wdXQtY292ZXIoKSB7XHJcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XHJcbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB2aXN1YWxseS1oaWRkZW4oKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XHJcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcclxuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xyXG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xyXG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi8vIEZvbnQgc21vb3RoaW5nXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcclxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcclxuICAka2V5czogbWFwLWtleXMoJG1hcCk7XHJcblxyXG4gIEByZXR1cm4gbnRoKCRrZXlzLCAkaW5kZXgpO1xyXG59XHJcblxyXG5cclxuLy8gQnJlYWtwb2ludCBNaXhpbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxyXG4vL1xyXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XHJcbi8vXHJcbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcclxuLy9cclxuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJHNjcmVlbi1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIDU3NnB4XHJcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuXHJcbiAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cclxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxyXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICBcIi1zbVwiXHJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXHJcbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcclxuICBAaWYgJG1pbiB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXHJcbi8vICAgIG1kXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgbWRcclxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcclxuLy8gICAgbWRcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xyXG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xyXG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xyXG59XHJcblxyXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXHJcbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxyXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXHJcbi8vXHJcbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcclxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlx0Ly8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxyXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVx0Ly8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIDc2Ny45OHB4XHJcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cclxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cclxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XHJcbiAgQGlmICRtYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBUZXh0IERpcmVjdGlvbiAtIGx0ciAvIHJ0bFxyXG4vL1xyXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXHJcbi8vIHRvIG92ZXJyaWRlIGx0ciBkZWZhdWx0cy5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIG11bHRpLWRpcigpIHtcclxuICBAY29udGVudDtcclxuXHJcbiAgLy8gJHJvb3Q6ICN7Jn07XHJcbiAgLy8gQGF0LXJvb3QgW2Rpcl0ge1xyXG4gIC8vICAgI3skcm9vdH0ge1xyXG4gIC8vICAgICBAY29udGVudDtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbn1cclxuXHJcbkBtaXhpbiBydGwoKSB7XHJcbiAgJHJvb3Q6ICN7Jn07XHJcblxyXG4gIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiW2Rpcj1ydGxdXCIpfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsdHIoKSB7XHJcbiAgQGNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XHJcbiAgJHVybDogdXJsLWVuY29kZSgkc3ZnKTtcclxuICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xyXG5cclxuICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICAkdHJhbnNmb3JtOiBcInRyYW5zZm9ybT0ndHJhbnNsYXRlKCN7bnRoKCR2aWV3Qm94LCAzKX0sIDApIHNjYWxlKC0xLCAxKSdcIjtcclxuICAgICRmbGlwcGVkLXVybDogJHN2ZztcclxuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxsaW5lXCIsIFwiPGxpbmUgI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xyXG5cclxuICAgIEBpbmNsdWRlIGx0ciAoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBwcm9wZXJ0eSBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XHJcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XHJcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcclxuXHJcbiAgfSBAZWxzZSB7XHJcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XHJcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcclxuXHJcbiAgICBAYXQtcm9vdCB7XHJcbiAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcclxuICAgICAgICAmIHtcclxuICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XHJcbiAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XHJcbiAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LXN0YXJ0OiAkc3RhcnQ7XHJcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcclxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xyXG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLWVuZDogJGVuZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBwcm9wZXJ0eSBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtib29sZWFufSAkY29udGVudCBpbmNsdWRlIGNvbnRlbnQgb3IgdXNlIGRlZmF1bHRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XHJcbiAgI3skcHJvcH0tdG9wOiAkdG9wO1xyXG4gICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcclxufVxyXG5cclxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eShwYWRkaW5nLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xyXG59XHJcblxyXG4vLyBBZGQgbWFyZ2luIGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XHJcbiAgQGlmICRzdGFydCA9PSAkZW5kIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgbGVmdDogJHN0YXJ0O1xyXG4gICAgICByaWdodDogJGVuZDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgbGVmdDogJHN0YXJ0O1xyXG4gICAgICByaWdodDogJGVuZDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICAgIHJpZ2h0OiB1bnNldDtcclxuXHJcbiAgICAgIGxlZnQ6ICRlbmQ7XHJcbiAgICAgIHJpZ2h0OiAkc3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XHJcbiAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xyXG4gIHRvcDogJHRvcDtcclxuICBib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcclxufVxyXG5cclxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLXN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLWVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XHJcbiAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1lbmQ7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgZGlyZWN0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRpciAtIERpcmVjdGlvbiBvbiBMVFJcclxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XHJcbiAgJG90aGVyLWRpcjogbnVsbDtcclxuXHJcbiAgQGlmICRkaXIgPT0gbHRyIHtcclxuICAgICRvdGhlci1kaXI6IHJ0bDtcclxuICB9IEBlbHNlIHtcclxuICAgICRvdGhlci1kaXI6IGx0cjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGx0cigpIHtcclxuICAgIGRpcmVjdGlvbjogJGRpcjtcclxuICB9XHJcbiAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgZGlyZWN0aW9uOiAkb3RoZXItZGlyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIGZsb2F0IGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XHJcbkBtaXhpbiBmbG9hdCgkc2lkZSwgJGRlY29yYXRvcjogbnVsbCkge1xyXG4gIEBpZiAkc2lkZSA9PSBzdGFydCB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XHJcbiAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XHJcbiAgICAkaG9yaXpvbnRhbC1sdHI6IG51bGw7XHJcbiAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XHJcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xyXG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XHJcbiAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgJGhvcml6b250YWwtbHRyOiByaWdodDtcclxuICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtcnRsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xyXG4gIEBpZiAkeC1heGlzID09IHN0YXJ0IHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGxlZnQgb3IgJHgtYXhpcyA9PSByaWdodCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xyXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XHJcbiAgJGV4dHJhOiBudWxsO1xyXG5cclxuICAkeDogbnVsbDtcclxuICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcclxuICAkcnRsLXRyYW5zbGF0ZTogbnVsbDtcclxuXHJcbiAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XHJcbiAgICBAaWYgKHN0ci1pbmRleCgkdHJhbnNmb3JtLCB0cmFuc2xhdGUzZCkpIHtcclxuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJ3RyYW5zbGF0ZTNkKCcpO1xyXG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xyXG5cclxuICAgICAgJGNvb3JkaW5hdGVzOiBzdHItc3BsaXQoJHRyYW5zZm9ybSwgJywnKTtcclxuXHJcbiAgICAgICR4OiBudGgoJGNvb3JkaW5hdGVzLCAxKTtcclxuICAgICAgJHk6IG50aCgkY29vcmRpbmF0ZXMsIDIpO1xyXG4gICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XHJcblxyXG4gICAgICAkbHRyLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XHJcbiAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XHJcbiAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xyXG4gICAgICB9IEBlbHNlIHtcclxuICAgICAgICAkZXh0cmE6ICRleHRyYSAkdHJhbnNmb3JtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm06ICRydGwtdHJhbnNsYXRlICRleHRyYTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTUyBmcm9tIGRpZmZlcmVudCBjb21wb25lbnRzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvZ3JpZC9ncmlkLm1peGlucy5zY3NzXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2l0ZW0vaXRlbS5taXhpbnMuc2Nzc1xyXG4gKi9cclxuXHJcbi8vIFJlc3BvbnNpdmUgTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhIGZpeGVkIHdpZHRoIGZvciB0aGUgZ3JpZCBiYXNlZCBvbiB0aGUgc2NyZWVuIHNpemVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gbWFrZS1ncmlkLXdpZHRocygkd2lkdGhzOiAkZ3JpZC13aWR0aHMsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gIEBlYWNoICRicmVha3BvaW50LCAkd2lkdGggaW4gJHdpZHRocyB7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpIHtcclxuICAgICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8vIEFkZHMgcGFkZGluZyB0byB0aGUgZWxlbWVudCBiYXNlZCBvbiBicmVha3BvaW50c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBtYWtlLWJyZWFrcG9pbnQtcGFkZGluZygkcGFkZGluZ3MpIHtcclxuICBAZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkcGFkZGluZ3MpIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcclxuICAgICAgJHBhZGRpbmc6IG1hcC1nZXQoJHBhZGRpbmdzLCAkYnJlYWtwb2ludCk7XHJcblxyXG4gICAgICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBJdGVtIE1peGluc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIGl0ZW0tcHVzaC1zdmctdXJsKCRmaWxsKSB7XHJcbiAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XHJcblxyXG4gIEBpbmNsdWRlIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRpdGVtLWRldGFpbC1wdXNoLXN2ZywgdHJ1ZSk7XHJcbn1cclxuIiwiQHVzZSBcInNhc3M6bWF0aFwiIGFzIG1hdGg7XHJcblxyXG4vKipcclxuICogQXBwIGN1c3RvbSBtaXhpbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxyXG4gKi9cclxuXHJcbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxyXG4vLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCA2LlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlLXBlcmNlbnQoJGNvbG9yLCAkcGVyY2VudDogNDglKSB7XHJcbiAgICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsICRwZXJjZW50KTtcclxuICB9XHJcblxyXG4gIC8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXHJcbiAgLy8gRGVmYXVsdCB0byBib290c3RyYXAgbGV2ZWwgLTEwLlxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgQGZ1bmN0aW9uIGdldC1jb2xvci10aW50LXBlcmNlbnQoJGNvbG9yLCAkcGVyY2VudDogODAlKSB7XHJcbiAgICBAcmV0dXJuIG1peCgjZmZmLCAkY29sb3IsICRwZXJjZW50KTtcclxuICB9XHJcblxyXG4gIC8vIElvbmljIENvbG9yc1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gR2VuZXJhdGVzIHRoZSBjb2xvciBjbGFzc2VzIGFuZCB2YXJpYWJsZXMgYmFzZWQgb24gdGhlXHJcbiAgLy8gY29sb3JzIG1hcFxyXG5cclxuICBAbWl4aW4gZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvcnMsICR0aGVtZSkge1xyXG4gICAgICAkY29sb3ItdGhlbWVzOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxuICAgICAgJGJhc2U6IG1hcC1nZXQoJGNvbG9yLXRoZW1lcywgJHRoZW1lKTtcclxuXHJcbiAgICAgIEBpZiAkdGhlbWUgPT0gJ2RhcmsnIHtcclxuICAgICAgICAgICRiYXNlOiBtaXgobWFwLWdldCgkY29sb3ItdGhlbWVzLCAnbGlnaHQnKSwgd2hpdGUsIDgwJSkgIWRlZmF1bHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkYmFzZSk7XHJcbiAgfVxyXG5cclxuICBAbWl4aW4gZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRiYXNlKSB7XHJcbiAgICAgICRjb250cmFzdDogZ2V0X2NvbnRyYXN0X2NvbG9yKCRiYXNlKTtcclxuICAgICAgJHNoYWRlOiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkYmFzZSk7XHJcbiAgICAgICR0aW50OiBnZXQtY29sb3ItdGludC1wZXJjZW50KCRiYXNlKTtcclxuXHJcbiAgICAgIC0tI3skY29sb3ItbmFtZX06ICN7JGJhc2V9O1xyXG4gICAgICAtLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XHJcbiAgICAgIC0tI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XHJcbiAgICAgIC0tI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcclxuXHJcbiAgICAgIC8vIEludGVybmFsIGlvbmljIHVzZSBvbmx5LlxyXG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfTogdmFyKC0tI3skY29sb3ItbmFtZX0pO1xyXG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xyXG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGJhc2UpfTtcclxuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcclxuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiOiAje2NvbG9yLXRvLXJnYi1saXN0KCRjb250cmFzdCl9O1xyXG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xyXG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcclxuXHJcbiAgICAgIC5pb24tY29sb3ItI3skY29sb3ItbmFtZX0ge1xyXG4gICAgICAgICAgLS1pb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XHJcbiAgICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZSk7XHJcbiAgICAgICAgICAtLWlvbi1jb2xvci1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2IpO1xyXG4gICAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdCk7XHJcbiAgICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2IpO1xyXG4gICAgICAgICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZSk7XHJcbiAgICAgICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludCk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG5cclxuIEBtaXhpbiBjb3JlLWZvY3VzKCkge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgQGluY2x1ZGUgY29yZS1mb2N1cy1zdHlsZSgpO1xyXG4gICAgfVxyXG4gfVxyXG5cclxuIEBtaXhpbiBjb3JlLWZvY3VzLXN0eWxlKCkge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIHZhcigtLWExMXktZm9jdXMtd2lkdGgpIDFweCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcclxuICAgIC8vIFRoaWNrZXIgb3B0aW9uOlxyXG4gICAgLy8gYm9yZGVyOiB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSBzb2xpZCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIGNvcmUtdHJhbnNpdGlvbigkcHJvcGVydGllczogYWxsLCAkZHVyYXRpb246IDUwMG1zLCAkdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCkge1xyXG4gICAgJHRyYW5zaXRpb25zOiAoKTtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICR0cmFuc2l0aW9uczogYXBwZW5kKCR0cmFuc2l0aW9ucywgJHByb3BlcnR5ICRkdXJhdGlvbiAkdGltaW5nLWZ1bmN0aW9uLCBjb21tYSk7XHJcbiAgICB9XHJcblxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XHJcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTYW1lIGFzIGl0ZW0tcHVzaC1zdmctdXJsIGJ1dCBhZG1pdHMgZmxpcC1ydGxcclxuICovXHJcbkBtaXhpbiBwdXNoLWFycm93LWNvbG9yKCRmaWxsOiA2MjYyNjIsICRmbGlwLXJ0bDogZmFsc2UpIHtcclxuICAgICRpdGVtLWRldGFpbC1wdXNoLXN2ZzogXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDIwJz48cGF0aCBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyBmaWxsPScjeyRmaWxsfScvPjwvc3ZnPlwiO1xyXG5cclxuICAgIEBpbmNsdWRlIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRpdGVtLWRldGFpbC1wdXNoLXN2ZywgJGZsaXAtcnRsKTtcclxufVxyXG5cclxuQG1peGluIGJvcmRlci1zdGFydCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcclxuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoYm9yZGVyLCAkcHggJHR5cGUgJGNvbG9yLCBudWxsKTtcclxufVxyXG5cclxuQG1peGluIGJvcmRlci1lbmQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XHJcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKGJvcmRlciwgbnVsbCwgJHB4ICR0eXBlICRjb2xvcik7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcikge1xyXG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skcHh9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBib3JkZXItc3RhcnQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLWVuZCgkcHgsICR0eXBlLCAkY29sb3IpIHtcclxuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRweH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogbnVsbDtcclxuXHJcbiAgICBAaWYgKCRlbmQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xyXG4gICAgfVxyXG4gICAgQGlmICgkc3RhcnQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4tc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1lbmQoJHN0YXJ0LCAkZW5kKSB7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xyXG5cclxuICAgIEBpZiAoJGVuZCkge1xyXG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcbiAgICB9XHJcbiAgICBAaWYgKCRzdGFydCkge1xyXG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1lbmQoJHN0YXJ0LCAkZW5kKSB7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIHBvc2l0aW9uKCR0b3AsICRzYWZlLWFyZWEtZW5kLCAkYm90dG9tLCAkc2FmZS1hcmVhLXN0YXJ0KTtcclxufVxyXG5cclxuQG1peGluIGNvcmUtaGVhZGluZ3MoKSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgfVxyXG4gICAgaDIsIC5pdGVtLWhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIGg2IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkYXJrbW9kZSgpIHtcclxuICAgICRyb290OiAjeyZ9O1xyXG5cclxuICAgIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiaHRtbC5kYXJrXCIpfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBob3Jpem9udGFsX3Njcm9sbF9pdGVtKCR3aWR0aCwgJG1pbi13aWR0aCwgJG1heC13aWR0aCkge1xyXG4gICAgZmxleDogMCAwICR3aWR0aDtcclxuICAgIG1pbi13aWR0aDogJG1pbi13aWR0aDtcclxuICAgIG1heC13aWR0aDogJG1heC13aWR0aDtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgLS12ZXJ0aWNhbC1tYXJnaW46IDEwcHg7XHJcbiAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogMTBweDtcclxuXHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWhvcml6b250YWwtbWFyZ2luKSAtIHZhcigtLWhvcml6b250YWwtbWFyZ2luKSk7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSk7XHJcbiAgICAgICAgbWFyZ2luOiB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIHZhcigtLWhvcml6b250YWwtbWFyZ2luKTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAgICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIENvbG9yIG1peGlucy5cclxuQGZ1bmN0aW9uIGdldF9icmlnaHRuZXNzKCRjb2xvcikge1xyXG4gICAgQHJldHVybiAocmVkKCRjb2xvcikgKyBncmVlbigkY29sb3IpICsgYmx1ZSgkY29sb3IpKSAvIDM7XHJcbn1cclxuXHJcbi8vIEdldCB0aGUgYmV0dGVyIGNvbG9yIGNvbnRyYXN0IHVzaW5nIFdDQUcgYWxnb3J5dGhtLlxyXG5AZnVuY3Rpb24gZ2V0X2NvbnRyYXN0X2NvbG9yKCRjb2xvcikge1xyXG4gICAgJGx1bWlhbmNlOiBsdW1pbmFuY2UoJGNvbG9yKTtcclxuXHJcbiAgICAvLyBXaGl0ZSBsdW1pYW5jZSBpcyAxLlxyXG4gICAgJHdoaXRlQ29udHJhc3Q6ICgkbHVtaWFuY2UgKyAwLjA1KSAvICgxICsgMC4wNSk7XHJcbiAgICAvLyBXaGl0ZSBsdW1pYW5jZSBpcyAwLlxyXG4gICAgJGJsYWNrQ29udHJhc3Q6ICgwLjA1KSAvICgkbHVtaWFuY2UgKyAwLjA1KTtcclxuXHJcbiAgICBAcmV0dXJuIGlmKCR3aGl0ZUNvbnRyYXN0IDwgJGJsYWNrQ29udHJhc3QsIHdoaXRlLCBibGFjayk7XHJcbn1cclxuXHJcbi8vIENvbG9yIGNvbnRyYXN0IHVzaW5nIHlpcSBhcHJveGltYXRpb24gd2l0aCAxNTAgdGhyZXNob2xkLlxyXG5AZnVuY3Rpb24gZ2V0X2NvbnRyYXN0X2NvbG9yX3lpcSgkY29sb3IsICRkYXJrOiBibGFjaywgJGxpZ2h0OiB3aGl0ZSkge1xyXG4gICAgJHI6IHJlZCgkY29sb3IpO1xyXG4gICAgJGc6IGdyZWVuKCRjb2xvcik7XHJcbiAgICAkYjogYmx1ZSgkY29sb3IpO1xyXG5cclxuICAgICR5aXE6ICgoJHIgKiAyOTkpICsgKCRnICogNTg3KSArICgkYiAqIDExNCkpIC8gMTAwMDtcclxuXHJcbiAgICBAcmV0dXJuIGlmKCR5aXEgPj0gMTI4LCAkZGFyaywgJGxpZ2h0KTtcclxufVxyXG5cclxuLy8gV0NBRyBjb250cmFzdCBhbGdvcnl0aG1cclxuQGZ1bmN0aW9uIGNoZWNrLWNvbnRyYXN0KCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xyXG4gICAgJGZvcmVncm91bmRMdW1pYW5jZTogbHVtaW5hbmNlKCRmb3JlZ3JvdW5kKTtcclxuICAgICRiYWNrZ3JvdW5kTHVtaW5hbmNlOiBsdW1pbmFuY2UoJGJhY2tncm91bmQpO1xyXG5cclxuICAgIEBpZiAoJGJhY2tncm91bmRMdW1pbmFuY2UgPCAkZm9yZWdyb3VuZEx1bWlhbmNlKSB7XHJcbiAgICAgICAgQHJldHVybiAoJGJhY2tncm91bmRMdW1pbmFuY2UgKyAwLjA1KSAvICgkZm9yZWdyb3VuZEx1bWlhbmNlICsgMC4wNSk7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBAcmV0dXJuICgkZm9yZWdyb3VuZEx1bWlhbmNlICsgMC4wNSkgLyAoJGJhY2tncm91bmRMdW1pbmFuY2UgKyAwLjA1KTtcclxuICAgIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIGx1bWluYW5jZSgkY29sb3IpIHtcclxuICAgICRyOiByZWQoJGNvbG9yKTtcclxuICAgICRnOiBncmVlbigkY29sb3IpO1xyXG4gICAgJGI6IGJsdWUoJGNvbG9yKTtcclxuXHJcbiAgICAkcjogY29tcG9uZW50LWx1bWluYW5jZSgkcik7XHJcbiAgICAkZzogY29tcG9uZW50LWx1bWluYW5jZSgkZyk7XHJcbiAgICAkYjogY29tcG9uZW50LWx1bWluYW5jZSgkYik7XHJcblxyXG4gICAgQHJldHVybiAkciAqIDAuMjEyNiArICRnICogMC43MTUyICsgJGIgKiAwLjA3MjI7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBjb21wb25lbnQtbHVtaW5hbmNlKCR2YWx1ZSkge1xyXG4gICAgJHZhbHVlOiAkdmFsdWUgLyAyNTU7XHJcblxyXG4gICAgQGlmICgkdmFsdWUgPD0gMC4wMzkyOCkge1xyXG4gICAgICAgIEByZXR1cm4gJHZhbHVlIC8gMTIuOTI7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBAcmV0dXJuIG1hdGgucG93KCgkdmFsdWUgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBBcHAgQ3VzdG9tIEFwcCB2YXJpYWJsZXMgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBsYWNlIGhlcmUgYWxsIGN1c3RvbSBhcHAgdmFyaWFibGVzLlxyXG4gKi9cclxuIiwiLypcclxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBsYWNlIGhlcmUgYWxsIGdsb2JhbCB2YXJpYWJsZXMuXHJcbiAqL1xyXG5cclxuJHdoaXRlOiAgICAgICAjZmZmZmZmICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICAgICNmOGY5ZmEgIWRlZmF1bHQ7XHJcbiRncmF5LTIwMDogICAgI2U5ZWNlZiAhZGVmYXVsdDtcclxuJGdyYXktMzAwOiAgICAjZGVlMmU2ICFkZWZhdWx0OyAvLyBTdHJva2VcclxuJGdyYXktNDAwOiAgICAjY2VkNGRhICFkZWZhdWx0O1xyXG4kZ3JheS01MDA6ICAgICM4Zjk1OWUgIWRlZmF1bHQ7IC8vIFN0cm9rZSBvbiBpbnB1dHNcclxuJGdyYXktNjAwOiAgICAjNmE3MzdiICFkZWZhdWx0O1xyXG4kZ3JheS03MDA6ICAgICM0OTUwNTcgIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogICAgIzM0M2E0MCAhZGVmYXVsdDtcclxuJGdyYXktOTAwOiAgICAjMWQyMTI1ICFkZWZhdWx0OyAvLyBDb3B5IHRleHRcclxuJGJsYWNrOiAgICAgICAjMDAwMDAwICFkZWZhdWx0OyAvLyBBdm9pZCB1c2FnZVxyXG5cclxuJGJsdWU6ICAgICAgICAjMGY2Y2JmICFkZWZhdWx0O1xyXG4kY3lhbjogICAgICAgICMwMDgxOTYgIWRlZmF1bHQ7IC8vIE5vdCB1c2VkLlxyXG4kZ3JlZW46ICAgICAgICMzNTdhMzIgIWRlZmF1bHQ7XHJcbiRyZWQ6ICAgICAgICAgI2NhMzEyMCAhZGVmYXVsdDtcclxuJHllbGxvdzogICAgICAjZjBhZDRlICFkZWZhdWx0O1xyXG5cclxuJGJyYW5kLWNvbG9yOiAjZmY3NTE4ICFkZWZhdWx0O1xyXG5cclxuJHRleHQtY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xyXG4kdGV4dC1jb2xvci1yZ2I6ICAgICAgICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvcikgIWRlZmF1bHQ7XHJcbiR0ZXh0LWNvbG9yLWRhcms6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJHRleHQtY29sb3ItZGFyay1yZ2I6ICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kYmFja2dyb3VuZC1jb2xvci1yZ2I6ICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3IpICFkZWZhdWx0O1xyXG4kYmFja2dyb3VuZC1jb2xvci1kYXJrOiAgICAgJGdyYXktOTAwICFkZWZhdWx0OyAvLyAjMWExYTFhXHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcclxuXHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJGlvbi1pdGVtLWJhY2tncm91bmQtcmdiOiAgY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQpICFkZWZhdWx0O1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrOiAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrKSAhZGVmYXVsdDtcclxuXHJcbiRwcmltYXJ5OiAgICAkYnJhbmQtY29sb3IgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbiRkYW5nZXI6ICAgICAkcmVkICFkZWZhdWx0O1xyXG4kd2FybmluZzogICAgJHllbGxvdyAhZGVmYXVsdDtcclxuJHN1Y2Nlc3M6ICAgICRncmVlbiAhZGVmYXVsdDtcclxuJGluZm86ICAgICAgICRibHVlICFkZWZhdWx0O1xyXG4kbGlnaHQ6ICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xyXG4kbWVkaXVtOiAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG4kZGFyazogICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xyXG5cclxuJGNvbG9yczogIChcclxuICAgIHByaW1hcnk6IChsaWdodDogJHByaW1hcnksIGRhcms6ICRwcmltYXJ5KSxcclxuICAgIHNlY29uZGFyeTogKGxpZ2h0OiAkc2Vjb25kYXJ5LCBkYXJrOiAkZ3JheS03MDApLFxyXG4gICAgc3VjY2VzczogKGxpZ2h0OiAkc3VjY2VzcyksXHJcbiAgICB3YXJuaW5nOiAobGlnaHQ6ICR3YXJuaW5nKSxcclxuICAgIGRhbmdlcjogIChsaWdodDogJGRhbmdlciksXHJcbiAgICBpbmZvOiAobGlnaHQ6ICRpbmZvKSxcclxuICAgIGxpZ2h0OiAobGlnaHQ6ICRsaWdodCwgZGFyazogJGRhcmspLFxyXG4gICAgbWVkaXVtOiAobGlnaHQ6ICRtZWRpdW0sIGRhcms6ICRncmF5LTIwMCksXHJcbiAgICBkYXJrOiAobGlnaHQ6ICRkYXJrLCBkYXJrOiAkbGlnaHQpLFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLyoqXHJcbiAqIExheW91dCBCcmVha3BvaW50c1xyXG4gKlxyXG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9ncmlkI2RlZmF1bHQtYnJlYWtwb2ludHNcclxuICovXHJcblxyXG4vLyBUaGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxyXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcclxuJHNjcmVlbi1icmVha3BvaW50czogKFxyXG4gICAgeHM6IDAsXHJcbiAgICBzbTogNTc2cHgsXHJcbiAgICBtZDogNzY4cHgsXHJcbiAgICBsZzogOTkycHgsXHJcbiAgICB0YWJsZXQ6IDk5MnB4LFxyXG4gICAgeGw6IDEyMDBweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtY291cnNlLWltYWdlLWJhY2tncm91bmQ6ICM4MWVjZWMsICM3NGI5ZmYsICNhMjliZmUsICNkZmU2ZTksICMwMGI4OTQsICMwOTg0ZTMsICNiMmJlYzMsICNmZGNiNmUsICNmZDc5YTgsICM2YzVjZTcgIWRlZmF1bHQ7XHJcbiRjb3JlLWRkLXF1ZXN0aW9uLWNvbG9yczogI0ZGRkZGRiwgI0IwQzRERSwgI0RDRENEQywgI0Q4QkZEOCwgIzg3Q0VGQSwgI0RBQTUyMCwgI0ZGRDcwMCwgI0YwRTY4QyAhZGVmYXVsdDtcclxuJGNvcmUtdGV4dC1oaWdodGxpZ2h0LWJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XHJcblxyXG4kY29yZS1maXhlZC11cmw6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1kYXNoYm9hcmQtbG9nbzogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWFsd2F5cy1zaG93LW1haW4tbWVudTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWZvcm1hdC10ZXh0LW5ldmVyLXNob3J0ZW46IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtaGlkZS1jb3Vyc2VpbWFnZS1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tc2VjdGlvbi1zZWxlY3RvcjogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4kY29yZS1jb3Vyc2UtaGlkZS10aHVtYi1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWNvdXJzZS10aHVtYi1vbi1jYXJkcy1iYWNrZ3JvdW5kOiBudWxsICFkZWZhdWx0O1xyXG4kY29yZS1jb3Vyc2UtaGlkZS1wcm9ncmVzcy1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGxvZ2luIHBhZ2UuXHJcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUtZGFyazogJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3I6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yLWRhcms6ICR0ZXh0LWNvbG9yLWRhcmsgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWhpZGUtZm9yZ290LXBhc3N3b3JkOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4taGlkZS1uZWVkLWhlbHA6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBtb3JlIHBhZ2UuIChkZXByZWNhdGVkIG9uIDQuMClcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmw6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB1c2VyIHBhZ2UuXHJcbiRjb3JlLXVzZXItaGlkZS1zaXRlaW5mbzogJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvICFkZWZhdWx0O1xyXG4kY29yZS11c2VyLWhpZGUtc2l0ZW5hbWU6ICRjb3JlLW1vcmUtaGlkZS1zaXRlbmFtZSAhZGVmYXVsdDtcclxuJGNvcmUtdXNlci1oaWRlLXNpdGV1cmw6ICRjb3JlLW1vcmUtaGlkZS1zaXRldXJsICFkZWZhdWx0O1xyXG5cclxuLy8gQWN0aXZpdHkgaWNvbiBiYWNrZ3JvdW5kIGNvbG9ycy5cclxuJGFjdGl2aXR5LWljb24tY29sb3JzOiAoXHJcbiAgICBhZG1pbmlzdHJhdGlvbjogIzVkNjNmNixcclxuICAgIGFzc2Vzc21lbnQ6ICNlYjY2YTIsXHJcbiAgICBjb2xsYWJvcmF0aW9uOiAjZjc2MzRkLFxyXG4gICAgY29tbXVuaWNhdGlvbjogIzExYTY3NixcclxuICAgIGNvbnRlbnQ6ICMzOTliZTIsXHJcbiAgICBpbnRlcmZhY2U6ICNhMzc4ZmZcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIENhbGVuZGFyIGV2ZW50IGNhdGVnb3J5IGJhY2tncm91bmQgY29sb3JzLlxyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY29sb3JzOiAoXHJcbiAgICBjYXRlZ29yeTogIzhlMjRhYSxcclxuICAgIGNvdXJzZTogJHJlZCxcclxuICAgIGdyb3VwOiAkeWVsbG93LFxyXG4gICAgdXNlcjogJGJsdWUsXHJcbiAgICBzaXRlOiAkZ3JlZW5cclxuKSAhZGVmYXVsdDtcclxuIiwiQGltcG9ydCBcIn50aGVtZS9nbG9iYWxzXCI7XHJcblxyXG4kcXVpei10aW1lci13YXJuLWNvbG9yOiAkcmVkICFkZWZhdWx0O1xyXG4kcXVpei10aW1lci1pdGVyYXRpb25zOiAxNSAhZGVmYXVsdDtcclxuXHJcbjpob3N0IHtcclxuICAgIC5hZGRvbi1tb2RfcXVpei1xdWVzdGlvbi1ub3RlIHAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdHJva2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcmUtdGltZXIgLmNvcmUtdGltZXIge1xyXG4gICAgICAgIC8vIE1ha2UgdGhlIHRpbWVyIGdvIHJlZCB3aGVuIGl0J3MgcmVhY2hpbmcgMC5cclxuICAgICAgICBAZm9yICRpIGZyb20gMCB0aHJvdWdoICRxdWl6LXRpbWVyLWl0ZXJhdGlvbnMge1xyXG4gICAgICAgICAgICAmLmNvcmUtdGltZXItdGltZWxlZnQtI3skaX0ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkcXVpei10aW1lci13YXJuLWNvbG9yLCAxIC0gKCRpIC8gJHF1aXotdGltZXItaXRlcmF0aW9ucykpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgQGlmICRpIDw9ICRxdWl6LXRpbWVyLWl0ZXJhdGlvbnMgLyAyIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCwgc3BhbiwgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-player-player-module.js.map