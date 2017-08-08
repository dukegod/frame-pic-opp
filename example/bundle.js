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

/**
 * Created by hui on 2017/8/8.
 */
const detector = __webpack_require__(1);

console.log(detector);

let html = '';

html += `<p>是否是node环境：${detector.node}</p>`;
html += `<p>是否是window环境：${detector.node}</p>`;
html += `<p>是否是火狐环境：${detector.version.gecko}</p>`;
html += `<p>是否是IE环境：${detector.version.ie}</p>`;
html += `<p>是否是opera环境：${detector.version.opera}</p>`;
html += `<p>是否是android环境：${detector.version.android}</p>`;
html += `<p>是否是ios环境：${detector.version.ios}</p>`;
html += `<p>是否是mobile环境：${detector.version.mobile}</p>`;
html += `<p>是否是iPhone环境：${detector.version.iPhone}</p>`;
html += `<p>是否是aiPad环境：${detector.version.iPad}</p>`;
html += `<p>是否是safari环境：${detector.version.safari}</p>`;
html += `<p>是否是微信环境：${detector.version.wx}</p>`;
html += `<p>是否是jdapp环境：${detector.version.jdapp}</p>`;
html += `<p>是否是chrome环境：${detector.version.chrome}</p>`;

document.body.innerHTML = html;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Created by hui on 2017/8/8.
 * check client 返回都是通过true判断
 */

const node = typeof module !== 'undefined';
const win = typeof window !== 'undefined';

const version = (()=> {
  if (win) {
    let ua = navigator.userAgent.toLocaleLowerCase();
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
      iPhone: ua.indexOf('iphone') > -1 ,
      // 是否iPad
      iPad: ua.indexOf('ipad') > -1,
      // 是否web应该程序，没有头部与底部
      safari: ua.indexOf('safari') > -1,
      // 是否web应该程序，没有头部与底部
      chrome: ua.indexOf('chrome') > -1,
      // 是否是微信内核
      wx: ua.indexOf('micromessenger') > -1,
      // 是否为jdapp
      jdapp: ua.indexOf('jdapp') > -1,
    };
  } else {
    return false;
  }
})();

module.exports = {
  node, win, version
};


/***/ })
/******/ ]);