(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
if (1) {
  obj = Object.assign({}, version(), { node: false, win: true });
} else {
  obj = Object.assign({}, { node: nd, win: false });
}

module.exports = obj;

/***/ })
/******/ ]);
});