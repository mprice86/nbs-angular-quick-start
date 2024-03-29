/* istanbul ignore file */
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
* BROWSER POLYFILLS
*/

/** IE9, IE10 and IE11 requires all of the following polyfills. */
import 'core-js/es7/array';
import 'core-js/es7/string';
import 'core-js/es7/object';

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.

/** Evergreen browsers require these. */
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

/** IE10 and IE11 requires the following to support `@angular/animation`. */
/** ALL Firefox browsers require the following to support `@angular/animation`. */
import 'web-animations-js';  // Run `npm install --save web-animations-js`.


/** IE11 needs the IntersectionObserver polyfill */
import 'intersection-observer'; // Run `npm install --save intersection-observer`

/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.



/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';

// Required for ALL IE versions when using URL() https://developer.mozilla.org/en-US/docs/Web/API/URL
import 'url-polyfill';


// TEMPORARY - ES5 only polyfills
// But there is currently no way of specifying ES5 only polyfills
// https://github.com/angular/angular-cli/issues/14168

import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/weak-map';
import 'core-js/es6/set';

/***************************************************************************************************
 * NBS POLYFILLS
 */

import 'isomorphic-fetch';

// IE 11 doesn't support Element.closest()
// Polyfill taken from here: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
if (!Element.prototype.matches) {
  Element.prototype.matches = (Element as any).prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this; // eslint-disable-line
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
