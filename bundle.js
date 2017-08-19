/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by hui on 2017/8/8.
 */
var detector = __webpack_require__(1);

console.log(detector);

var html = '';

html += '<p>\u662F\u5426\u662Fnode\u73AF\u5883\uFF1A' + detector.node + '</p>';
html += '<p>\u662F\u5426\u662Fwindow\u73AF\u5883\uFF1A' + detector.win + '</p>';
html += '<p>\u662F\u5426\u662F\u706B\u72D0\u73AF\u5883\uFF1A' + detector.gecko + '</p>';
html += '<p>\u662F\u5426\u662FIE\u73AF\u5883\uFF1A' + detector.ie + '</p>';
html += '<p>\u662F\u5426\u662Fopera\u73AF\u5883\uFF1A' + detector.opera + '</p>';
html += '<p>\u662F\u5426\u662Fandroid\u73AF\u5883\uFF1A' + detector.android + '</p>';
html += '<p>\u662F\u5426\u662Fios\u73AF\u5883\uFF1A' + detector.ios + '</p>';
html += '<p>\u662F\u5426\u662Fmobile\u73AF\u5883\uFF1A' + detector.mobile + '</p>';
html += '<p>\u662F\u5426\u662FiPhone\u73AF\u5883\uFF1A' + detector.iPhone + '</p>';
html += '<p>\u662F\u5426\u662FaiPad\u73AF\u5883\uFF1A' + detector.iPad + '</p>';
html += '<p>\u662F\u5426\u662Fsafari\u73AF\u5883\uFF1A' + detector.safari + '</p>';
html += '<p>\u662F\u5426\u662F\u5FAE\u4FE1\u73AF\u5883\uFF1A' + detector.wx + '</p>';
html += '<p>\u662F\u5426\u662Fjdapp\u73AF\u5883\uFF1A' + detector.jdapp + '</p>';
html += '<p>\u662F\u5426\u662Fchrome\u73AF\u5883\uFF1A' + detector.chrome + '</p>';

document.body.innerHTML = html;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var a = factory();
    for (var i in a) {
      ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' ? exports : root)[i] = a[i];
    }
  }
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * Created by hui on 2017/8/8.
       * check client 返回都是通过true判断
       */

      var nd = typeof module !== 'undefined';
      var win = typeof window !== 'undefined';

      var version = function version() {
        var ua = navigator.userAgent.toLocaleLowerCase();
        return {
          // webkit 内核
          webkit: ua.indexOf('applewebkit') > -1,
          // IE
          ie: ua.indexOf('trident') > -1,
          // opera内核
          opera: ua.indexOf('presto') > -1,
          // 火狐内核
          gecko: ua.indexOf('gecko') > -1 && ua.indexOf('khtml') == -1,
          // 是否为移动终端
          mobile: !!ua.match(/applewebkit.*mobile.*/),
          // ios终端
          ios: !!ua.match(/\(i[^;]+;( ua;)? cpu.+mac os x/),
          // android终端或者uc浏览器
          android: ua.indexOf('android') > -1 || ua.indexOf('linux') > -1,
          // 是否为iPhone或者QQHD浏览器
          iPhone: ua.indexOf('iphone') > -1,
          // 是否iPad
          iPad: ua.indexOf('ipad') > -1,
          // 是否web应该程序，没有头部与底部
          safari: ua.indexOf('safari') > -1,
          // 是否web应该程序，没有头部与底部
          chrome: ua.indexOf('chrome') > -1,
          // 是否是微信内核
          wx: ua.indexOf('micromessenger') > -1,
          // 是否为jdapp
          jdapp: ua.indexOf('jdapp') > -1
        };
      };

      var obj = void 0;
      if (win) {
        obj = Object.assign({}, version(), { node: false, win: true });
      } else {
        obj = Object.assign({}, { node: nd, win: false });
      }

      module.exports = obj;

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);