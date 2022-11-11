(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "./node_modules/@ionic/core/dist/esm/index-34cb2743.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./src/addons/calendar/classes/events-source.ts":
/*!******************************************************!*\
  !*** ./src/addons/calendar/classes/events-source.ts ***!
  \******************************************************/
/*! exports provided: AddonCalendarEventsSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEventsSource", function() { return AddonCalendarEventsSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
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
 * Provides a collection of calendar events.
 */
class AddonCalendarEventsSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    constructor(date) {
        super();
        this.events = [];
        this.DATE = date;
    }
    /**
     * Set events.
     *
     * @param events Events.
     */
    setEvents(events) {
        this.events = events;
    }
    /**
     * @inheritdoc
     */
    loadPageItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return { items: this.events.slice(0) };
        });
    }
    /**
     * @inheritdoc
     */
    getItemPath(event) {
        return event.id.toString();
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams() {
        return { date: this.DATE };
    }
}


/***/ }),

/***/ "./src/addons/mod/feedback/classes/feedback-attempts-source.ts":
/*!*********************************************************************!*\
  !*** ./src/addons/mod/feedback/classes/feedback-attempts-source.ts ***!
  \*********************************************************************/
/*! exports provided: AddonModFeedbackAttemptsSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackAttemptsSource", function() { return AddonModFeedbackAttemptsSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _services_feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/feedback */ "./src/addons/mod/feedback/services/feedback.ts");
/* harmony import */ var _services_feedback_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/feedback-helper */ "./src/addons/mod/feedback/services/feedback-helper.ts");
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
 * Feedback attempts.
 */
class AddonModFeedbackAttemptsSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    constructor(courseId, cmId) {
        super();
        this.COURSE_ID = courseId;
        this.CM_ID = cmId;
    }
    /**
     * @inheritdoc
     */
    getItemPath(attempt) {
        return attempt.id.toString();
    }
    /**
     * @inheritdoc
     */
    getPagesLoaded() {
        if (!this.identifiable || !this.anonymous) {
            return 0;
        }
        const pageLength = this.getPageLength();
        return Math.ceil(Math.max(this.anonymous.length, this.identifiable.length) / pageLength);
    }
    /**
     * Type guard to infer AddonModFeedbackWSAttempt objects.
     *
     * @param discussion Item to check.
     * @return Whether the item is an identifieable attempt.
     */
    isIdentifiableAttempt(attempt) {
        return 'fullname' in attempt;
    }
    /**
     * Type guard to infer AddonModFeedbackWSAnonAttempt objects.
     *
     * @param discussion Item to check.
     * @return Whether the item is an anonymous attempt.
     */
    isAnonymousAttempt(attempt) {
        return 'number' in attempt;
    }
    /**
     * Invalidate feedback cache.
     */
    invalidateCache() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Promise.all([
                _services_groups__WEBPACK_IMPORTED_MODULE_2__["CoreGroups"].invalidateActivityGroupInfo(this.CM_ID),
                this.feedback && _services_feedback__WEBPACK_IMPORTED_MODULE_3__["AddonModFeedback"].invalidateResponsesAnalysisData(this.feedback.id),
            ]);
        });
    }
    /**
     * Load feedback.
     */
    loadFeedback() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.feedback = yield _services_feedback__WEBPACK_IMPORTED_MODULE_3__["AddonModFeedback"].getFeedback(this.COURSE_ID, this.CM_ID);
            this.groupInfo = yield _services_groups__WEBPACK_IMPORTED_MODULE_2__["CoreGroups"].getActivityGroupInfo(this.CM_ID);
            this.selectedGroup = _services_groups__WEBPACK_IMPORTED_MODULE_2__["CoreGroups"].validateGroupId(this.selectedGroup, this.groupInfo);
        });
    }
    /**
     * @inheritdoc
     */
    getPageLength() {
        return _services_feedback__WEBPACK_IMPORTED_MODULE_3__["AddonModFeedbackProvider"].PER_PAGE;
    }
    /**
     * @inheritdoc
     */
    loadPageItems(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.feedback) {
                throw new Error('Can\'t load attempts without feeback');
            }
            const result = yield _services_feedback_helper__WEBPACK_IMPORTED_MODULE_4__["AddonModFeedbackHelper"].getResponsesAnalysis(this.feedback.id, {
                page,
                groupId: this.selectedGroup,
                cmId: this.CM_ID,
            });
            if (page === 0) {
                this.identifiableTotal = result.totalattempts;
                this.anonymousTotal = result.totalanonattempts;
            }
            const totalItemsLoaded = this.getPageLength() * (page + 1);
            const pageAttempts = [
                // The page argument is ignored in the webservice when there is only one page,
                // so we should ignore the responses of pages beyond the first if that's the case.
                ...(page === 0 || result.totalattempts > _services_feedback__WEBPACK_IMPORTED_MODULE_3__["AddonModFeedbackProvider"].PER_PAGE)
                    ? result.attempts
                    : [],
                ...(page === 0 || result.totalanonattempts > _services_feedback__WEBPACK_IMPORTED_MODULE_3__["AddonModFeedbackProvider"].PER_PAGE)
                    ? result.anonattempts
                    : [],
            ];
            return {
                items: pageAttempts,
                hasMoreItems: result.totalattempts > totalItemsLoaded || result.totalanonattempts > totalItemsLoaded,
            };
        });
    }
    /**
     * @inheritdoc
     */
    setItems(attempts, hasMoreItems) {
        this.identifiable = attempts.filter(this.isIdentifiableAttempt);
        this.anonymous = attempts.filter(this.isAnonymousAttempt);
        super.setItems(this.identifiable.concat(this.anonymous), hasMoreItems);
    }
}


/***/ }),

/***/ "./src/addons/mod/forum/classes/forum-discussions-swipe-manager.ts":
/*!*************************************************************************!*\
  !*** ./src/addons/mod/forum/classes/forum-discussions-swipe-manager.ts ***!
  \*************************************************************************/
/*! exports provided: AddonModForumDiscussionsSwipeManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumDiscussionsSwipeManager", function() { return AddonModForumDiscussionsSwipeManager; });
/* harmony import */ var _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @classes/items-management/swipe-navigation-items-manager */ "./src/core/classes/items-management/swipe-navigation-items-manager.ts");
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
 * Helper to manage swiping within a collection of discussions.
 */
class AddonModForumDiscussionsSwipeManager extends _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_0__["CoreSwipeNavigationItemsManager"] {
    /**
     * @inheritdoc
     */
    skipItemInSwipe(item) {
        return this.getSource().isNewDiscussionForm(item);
    }
}


/***/ }),

/***/ "./src/addons/mod/glossary/classes/glossary-entries-swipe-manager.ts":
/*!***************************************************************************!*\
  !*** ./src/addons/mod/glossary/classes/glossary-entries-swipe-manager.ts ***!
  \***************************************************************************/
/*! exports provided: AddonModGlossaryEntriesSwipeManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryEntriesSwipeManager", function() { return AddonModGlossaryEntriesSwipeManager; });
/* harmony import */ var _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @classes/items-management/swipe-navigation-items-manager */ "./src/core/classes/items-management/swipe-navigation-items-manager.ts");
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
 * Helper to manage swiping within a collection of glossary entries.
 */
class AddonModGlossaryEntriesSwipeManager extends _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_0__["CoreSwipeNavigationItemsManager"] {
    /**
     * @inheritdoc
     */
    skipItemInSwipe(item) {
        return this.getSource().isNewEntryForm(item);
    }
}


/***/ }),

/***/ "./src/core/features/course/pages/course-summary/course-summary.module.ts":
/*!********************************************************************************!*\
  !*** ./src/core/features/course/pages/course-summary/course-summary.module.ts ***!
  \********************************************************************************/
/*! exports provided: CoreCoursePreviewPageComponentModule, CoreCourseSummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursePreviewPageComponentModule", function() { return CoreCoursePreviewPageComponentModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseSummaryPageModule", function() { return CoreCourseSummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _course_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-summary */ "./src/core/features/course/pages/course-summary/course-summary.ts");
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
        component: _course_summary__WEBPACK_IMPORTED_MODULE_4__["CoreCourseSummaryPage"],
    },
];
let CoreCoursePreviewPageComponentModule = class CoreCoursePreviewPageComponentModule {
};
CoreCoursePreviewPageComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _course_summary__WEBPACK_IMPORTED_MODULE_4__["CoreCourseSummaryPage"],
        ],
    })
], CoreCoursePreviewPageComponentModule);

let CoreCourseSummaryPageModule = class CoreCourseSummaryPageModule {
};
CoreCourseSummaryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            CoreCoursePreviewPageComponentModule,
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCourseSummaryPageModule);



/***/ }),

/***/ "./src/core/features/mainmenu/classes/deep-link-manager.ts":
/*!*****************************************************************!*\
  !*** ./src/core/features/mainmenu/classes/deep-link-manager.ts ***!
  \*****************************************************************/
/*! exports provided: CoreMainMenuDeepLinkManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuDeepLinkManager", function() { return CoreMainMenuDeepLinkManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @features/contentlinks/services/contentlinks-helper */ "./src/core/features/contentlinks/services/contentlinks-helper.ts");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/course/services/course-helper */ "./src/core/features/course/services/course-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * A class to handle opening deep links in a main menu page. There are 2 type of deep links:
 *   -A Moodle URL to treat.
 *   -A combination of path + options.
 */
class CoreMainMenuDeepLinkManager {
    constructor() {
        const urlToOpen = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteParam('urlToOpen');
        const redirectPath = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteParam('redirectPath');
        if (urlToOpen || redirectPath) {
            this.pendingRedirect = {
                redirectPath,
                redirectOptions: _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteParam('redirectOptions'),
                urlToOpen,
            };
        }
    }
    /**
     * Whether there is a deep link to be treated.
     *
     * @return Whether there is a deep link to be treated.
     */
    hasDeepLinkToTreat() {
        var _a, _b;
        return !!((_a = this.pendingRedirect) === null || _a === void 0 ? void 0 : _a.urlToOpen) || !!((_b = this.pendingRedirect) === null || _b === void 0 ? void 0 : _b.redirectPath);
    }
    /**
     * Treat a deep link if there's any to treat.
     */
    treatLink() {
        if (!this.pendingRedirect) {
            return;
        }
        if (this.pendingRedirect.redirectPath) {
            this.treatPath(this.pendingRedirect.redirectPath, this.pendingRedirect.redirectOptions);
        }
        else if (this.pendingRedirect.urlToOpen) {
            this.treatUrlToOpen(this.pendingRedirect.urlToOpen);
        }
        delete this.pendingRedirect;
    }
    /**
     * Open a path.
     *
     * @param path Path.
     * @param navOptions Navigation options.
     */
    treatPath(path, navOptions = {}) {
        const params = navOptions.params;
        const coursePathMatches = path.match(/^course\/(\d+)\/?$/);
        if (coursePathMatches) {
            if (!(params === null || params === void 0 ? void 0 : params.course)) {
                _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_3__["CoreCourseHelper"].getAndOpenCourse(Number(coursePathMatches[1]), params);
            }
            else {
                _features_course_services_course__WEBPACK_IMPORTED_MODULE_2__["CoreCourse"].openCourse(params.course, navOptions);
            }
        }
        else {
            _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].navigateToSitePath(path, Object.assign(Object.assign({}, navOptions), { preferCurrentTab: false }));
        }
    }
    /**
     * Treat a URL to open.
     *
     * @param url URL to open.
     */
    treatUrlToOpen(url) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const action = yield _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_1__["CoreContentLinksHelper"].getFirstValidActionFor(url);
            if ((_a = action === null || action === void 0 ? void 0 : action.sites) === null || _a === void 0 ? void 0 : _a[0]) {
                action.action(action.sites[0]);
            }
        });
    }
}


/***/ }),

/***/ "./src/core/features/user/classes/participants-source.ts":
/*!***************************************************************!*\
  !*** ./src/core/features/user/classes/participants-source.ts ***!
  \***************************************************************/
/*! exports provided: CoreUserParticipantsSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserParticipantsSource", function() { return CoreUserParticipantsSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user */ "./src/core/features/user/services/user.ts");
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
 * Provides a collection of course participants.
 */
class CoreUserParticipantsSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    constructor(courseId, searchQuery = null) {
        super();
        this.COURSE_ID = courseId;
        this.SEARCH_QUERY = searchQuery;
    }
    /**
     * @inheritdoc
     */
    static getSourceId(courseId, searchQuery = null) {
        searchQuery = searchQuery !== null && searchQuery !== void 0 ? searchQuery : '__empty__';
        return `participants-${courseId}-${searchQuery}`;
    }
    /**
     * @inheritdoc
     */
    getItemPath(user) {
        return user.id.toString();
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams() {
        return { search: this.SEARCH_QUERY };
    }
    /**
     * @inheritdoc
     */
    loadPageItems(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.SEARCH_QUERY) {
                const { participants, canLoadMore } = yield _services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUser"].searchParticipants(this.COURSE_ID, this.SEARCH_QUERY, true, page, _services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUserProvider"].PARTICIPANTS_LIST_LIMIT);
                return {
                    items: participants,
                    hasMoreItems: canLoadMore,
                };
            }
            const { participants, canLoadMore } = yield _services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUser"].getParticipants(this.COURSE_ID, page * _services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUserProvider"].PARTICIPANTS_LIST_LIMIT, _services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUserProvider"].PARTICIPANTS_LIST_LIMIT);
            return {
                items: participants,
                hasMoreItems: canLoadMore,
            };
        });
    }
    /**
     * @inheritdoc
     */
    getPageLength() {
        return _services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUserProvider"].PARTICIPANTS_LIST_LIMIT;
    }
}


/***/ }),

/***/ "./src/core/guards/can-leave.ts":
/*!**************************************!*\
  !*** ./src/core/guards/can-leave.ts ***!
  \**************************************/
/*! exports provided: CanLeaveGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanLeaveGuard", function() { return CanLeaveGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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



let CanLeaveGuard = class CanLeaveGuard {
    canDeactivate(component) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isCanLeave(component)) {
                return true;
            }
            return _services_utils_utils__WEBPACK_IMPORTED_MODULE_2__["CoreUtils"].ignoreErrors(component.canLeave(), false);
        });
    }
    isCanLeave(component) {
        return component !== null && 'canLeave' in component;
    }
};
CanLeaveGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CanLeaveGuard);



/***/ })

}]);
//# sourceMappingURL=common.js.map