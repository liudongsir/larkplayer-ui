(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("larkplayer"));
	else if(typeof define === 'function' && define.amd)
		define(["larkplayer"], factory);
	else if(typeof exports === 'object')
		exports["larkplayer-ui"] = factory(require("larkplayer"));
	else
		root["larkplayer-ui"] = factory(root["larkplayer"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_larkplayer__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/larkplayer-ui.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../usr/local/lib/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/css/larkplayer-ui.less":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/css/larkplayer-ui.less ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @file variables.less 定义一些全局变量\n * @author yuhui<yuhui06@baidu.com>\n * @date 2017/11/23\n */\n.placeholder-1511407549745 {\n  display: none;\n}\n/**\n * @file 定义一些常用的 mixins\n * @author yuhui<yuhui06@baidu.com>\n * @date 2017/11/9\n * @desc\n *    1) .file-placeholder 是因为 otp 不允许空文件上传\n */\n.file-placeholder-1510232955822 {\n  display: none;\n}\n.lark-play-button--mobile {\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  font-size: 18px;\n  color: #fff;\n  border-radius: 50%;\n  box-sizing: border-box;\n  width: 48px;\n  height: 48px;\n  line-height: 48px;\n}\n.lark-play-button--mobile .lark-play-button__play {\n  display: block;\n  background: url(" + escape(__webpack_require__(/*! ./resource/images/play.png */ "./src/css/resource/images/play.png")) + ") center no-repeat;\n}\n.lark-play-button--mobile .lark-play-button__pause {\n  display: none;\n  background: url(" + escape(__webpack_require__(/*! ./resource/images/pause.png */ "./src/css/resource/images/pause.png")) + ") center no-repeat;\n}\n.lark-play-button--mobile .lark-play-button__play,\n.lark-play-button--mobile .lark-play-button__pause {\n  background-size: contain;\n  width: 100%;\n  height: 100%;\n}\n.lark-play-button {\n  cursor: pointer;\n}\n.lark-play-button-pc {\n  opacity: 0.9;\n  margin-right: 14px;\n  transition: opacity 0.1s ease-out;\n  -ms-transition: opacity 0.1s ease-out;\n  -moz-transition: opacity 0.1s ease-out;\n  -webkit-transition: opacity 0.1s ease-out;\n  -o-transition: opacity 0.1s ease-out;\n}\n.lark-play-button-pc:hover {\n  opacity: 1;\n}\n.lark-play-button-pc .lark-play-button__play,\n.lark-play-button-pc .lark-play-button__pause {\n  padding: 0 14px;\n}\n@font-face {\n  font-family: 'larkplayericon';\n  src: url(" + escape(__webpack_require__(/*! ./resource/font/layout.eot */ "./src/css/resource/font/layout.eot")) + ");\n  src: url(" + escape(__webpack_require__(/*! ./resource/font/layout.eot */ "./src/css/resource/font/layout.eot")) + "#iefix) format('embedded-opentype'), url(" + escape(__webpack_require__(/*! ./resource/font/layout.woff2 */ "./src/css/resource/font/layout.woff2")) + ") format('woff2'), url(" + escape(__webpack_require__(/*! ./resource/font/layout.woff */ "./src/css/resource/font/layout.woff")) + ") format('woff'), url(" + escape(__webpack_require__(/*! ./resource/font/layout.ttf */ "./src/css/resource/font/layout.ttf")) + ") format('truetype'), url(" + escape(__webpack_require__(/*! ./resource/font/layout.svg */ "./src/css/resource/font/layout.svg")) + "#larkplayericon) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n[class^='lark-icon-']:before,\n[class*=' lark-icon-']:before {\n  font-family: 'larkplayericon';\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n  display: inline-block;\n  text-align: center;\n  /* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n  /* fix buttons height, for twitter bootstrap */\n  /* you can be more comfortable with increased icons size */\n  /* font-size: 120%; */\n  /* Font smoothing. That was taken from TWBS */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.lark-icon-sound-small:before {\n  content: '\\E600';\n}\n.lark-icon-sound-large:before {\n  content: '\\E601';\n}\n.lark-icon-sound-middle:before {\n  content: '\\E602';\n}\n.lark-icon-exit-fullscreen:before {\n  content: '\\E603';\n}\n.lark-icon-request-fullscreen:before {\n  content: '\\E604';\n}\n.lark-icon-pause:before {\n  content: '\\E606';\n}\n.lark-icon-play:before {\n  content: '\\E607';\n}\n.lark-icon-loading-circle:before {\n  content: '\\E608';\n}\n.lark-icon-replay:before {\n  content: '\\E609';\n}\n/**\n * @file 控制播放器各种状态下各元素的显隐\n * @author yuhui<yuhui06@baidu.com>\n * @date 2017/11/10\n * @date 2018/5/8 重新整理，使整体更加清晰\n * @desc\n *     * status 共 5 种：[playing, paused, ended, loading, error]\n *     * loading 细分为 loadstart seeking waiting 3 种\n *     * status 的 className 由 js 控制切换\n *     * status 下各组件的显示与隐藏由 css 控制，pc 和 mobile 分开处理\n */\n.lark-control-bar-pc {\n  opacity: 0;\n  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);\n  -ms-transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);\n  -moz-transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);\n  -o-transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);\n}\n.lark-status-user-active .lark-control-bar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.lark-status-user-active .lark-play-button--mobile {\n  display: block;\n}\n.lark-status-user-active .lark-progress-bar--simple {\n  display: none;\n}\n.lark-status-user-active .lark-control-bar-pc {\n  opacity: 1;\n}\n.lark-status-playing .lark-play-button__play {\n  display: none;\n}\n.lark-status-playing .lark-play-button__pause {\n  display: block;\n}\n.lark-status-loadstart .lark-custom-controls--mobile .lark-loading--mobile,\n.lark-status-seeking .lark-custom-controls--mobile .lark-loading--mobile,\n.lark-status-waiting .lark-custom-controls--mobile .lark-loading--mobile {\n  display: block;\n}\n.lark-status-loadstart .lark-custom-controls--mobile .lark-play-button,\n.lark-status-seeking .lark-custom-controls--mobile .lark-play-button,\n.lark-status-waiting .lark-custom-controls--mobile .lark-play-button {\n  display: none;\n}\n.lark-status-loadstart .lark-custom-controls--pc .lark-loading--pc,\n.lark-status-seeking .lark-custom-controls--pc .lark-loading--pc,\n.lark-status-waiting .lark-custom-controls--pc .lark-loading--pc {\n  display: block;\n}\n.lark-status-paused .lark-control-bar-pc {\n  opacity: 1;\n}\n.lark-status-paused .lark-control-bar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.lark-status-paused .lark-play-button--mobile {\n  display: block;\n}\n.lark-status-paused .lark-progress-bar--simple {\n  display: none;\n}\n.lark-status-paused .lark-custom-controls--mobile .lark-play-button {\n  display: block;\n}\n.lark-status-paused .lark-custom-controls--mobile .lark-play-button__play {\n  display: block;\n}\n.lark-status-paused .lark-custom-controls--mobile .lark-play-button__pause {\n  display: none;\n}\n.lark-status-paused .lark-custom-controls--mobile .lark-loading--mobile {\n  display: none;\n}\n.lark-status-paused .lark-custom-controls--mobile .lark-controls-bar {\n  display: block;\n}\n.lark-status-paused .lark-custom-controls--pc .lark-play-button__play {\n  display: block;\n}\n.lark-status-paused .lark-custom-controls--pc .lark-play-button__pause {\n  display: none;\n}\n.lark-status-ended .lark-control-bar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.lark-status-ended .lark-play-button--mobile {\n  display: block;\n}\n.lark-status-ended .lark-progress-bar--simple {\n  display: none;\n}\n.lark-status-ended .lark-control-bar-pc {\n  opacity: 1;\n}\n.lark-status-ended .lark-custom-controls--mobile .lark-play-button__play {\n  display: block;\n}\n.lark-status-ended .lark-custom-controls--mobile .lark-play-button__pause {\n  display: none;\n}\n.lark-status-ended .lark-custom-controls--mobile .lark-controls-bar {\n  display: block;\n}\n.lark-status-ended .lark-custom-controls--pc .lark-complete {\n  display: block;\n}\n.lark-status-error .lark-custom-controls--mobile .lark-error--mobile {\n  display: block;\n}\n.lark-status-error .lark-custom-controls--mobile .lark-play-button {\n  display: none;\n}\n.lark-status-error .lark-custom-controls--pc .lark-error--pc {\n  display: block;\n}\n.lark-fullscreen {\n  width: 100% !important;\n  height: 100% !important;\n  padding-top: 0 !important;\n}\n.lark-fullscreen .lark-exit-fullscreen,\n.lark-full-window .lark-exit-fullscreen {\n  display: block;\n}\n.lark-fullscreen .lark-request-fullscreen,\n.lark-full-window .lark-request-fullscreen {\n  display: none;\n}\n@media screen and (orientation: landscape) {\n  .lark-all-screen.lark-fullscreen .lark-control-bar {\n    padding: 0 30px;\n    box-sizing: border-box;\n  }\n}\n@media screen and (orientation: portrait) {\n  .lark-fullscreen .lark-control-bar {\n    bottom: 50px;\n  }\n}\n.lark-custom-controls-hide .lark-custom-controls .lark-control-bar,\n.lark-custom-controls-hide .lark-custom-controls .lark-control-bar-pc,\n.lark-custom-controls-hide .lark-custom-controls .lark-play-button--mobile,\n.lark-custom-controls-hide .lark-custom-controls .lark-progress-bar--simple {\n  display: none;\n}\n.lark-live-play .lark-time {\n  display: none;\n}\n.lark-live-play .lark-progress-bar {\n  display: none;\n}\n.lark-live-play .lark-current-time {\n  display: none;\n}\n.lark-live-play .lark-duration {\n  display: none;\n}\n.lark-live-play .lark-fullscreen-button {\n  position: absolute;\n  right: 0;\n}\n.lark-live-play .lark-progress-bar--simple {\n  display: none;\n}\n.lark-progress-bar {\n  position: relative;\n  height: 100%;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  flex: 1;\n  -webkit-flex: 1;\n}\n.lark-progress-bar-pc {\n  margin: 0 10px;\n  height: 3px;\n}\n.lark-progress-bar-pc .lark-progress-bar-hover-light {\n  background: rgba(231, 231, 231, 0.7);\n}\n.lark-progress-bar-pc .lark-progress-bar-except-fill,\n.lark-progress-bar-pc .lark-progress-bar-hover-light {\n  cursor: pointer;\n  position: absolute;\n  height: 3px;\n  transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -ms-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -moz-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -o-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n}\n.lark-progress-bar-pc .lark-buffer-bar {\n  height: 3px;\n  transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -ms-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -moz-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -o-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n}\n.lark-progress-bar-pc .lark-progress-bar-padding {\n  position: absolute;\n  width: 100%;\n  height: 16px;\n  bottom: 0;\n  cursor: pointer;\n}\n.lark-progress-bar-pc .lark-progress-bar__line__handle {\n  top: 1.5px;\n}\n.lark-progress-bar-pc .lark-progress-bar__line__handle-except-fill {\n  width: 0;\n  height: 0;\n}\n.lark-progress-bar-pc:hover .lark-progress-bar__line__handle-except-fill {\n  width: 12px;\n  height: 12px;\n}\n.lark-progress-bar-pc:hover .lark-progress-bar-except-fill,\n.lark-progress-bar-pc:hover .lark-buffer-bar,\n.lark-progress-bar-pc:hover .lark-progress-bar-hover-light {\n  height: 5px;\n}\n.lark-progress-bar-pc.lark-sliding .lark-progress-bar__line__handle-except-fill {\n  width: 12px;\n  height: 12px;\n}\n.lark-progress-bar-pc.lark-sliding .lark-progress-bar-except-fill,\n.lark-progress-bar-pc.lark-sliding .lark-buffer-bar,\n.lark-progress-bar-pc.lark-sliding .lark-progress-bar-hover-light {\n  height: 5px;\n}\n.lark-progress-bar-except-fill {\n  cursor: pointer;\n  position: relative;\n  width: 100%;\n  height: 1px;\n  transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -ms-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -moz-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -o-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n}\n.lark-progress-bar__background {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(231, 231, 231, 0.5);\n}\n.lark-progress-bar__line {\n  position: absolute;\n  height: 100%;\n  width: 0;\n  z-index: 2;\n  background: #459DF5;\n}\n.lark-progress-bar__line__handle {\n  border-radius: 50%;\n  position: absolute;\n  padding: 10px;\n  right: -16px;\n  top: 0.5px;\n  transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n}\n.lark-progress-bar__line__handle-except-fill {\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  background: #fff;\n  transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -ms-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -moz-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n  -o-transition: all 0.1s cubic-bezier(0, 0, 0.2, 1);\n}\n.lark-fullscreen .lark-progress-bar__line__handle {\n  right: -17.5px;\n  top: 0.5px;\n}\n.lark-fullscreen .lark-progress-bar-pc .lark-progress-bar__line__handle {\n  top: 1.5px;\n}\n.lark-fullscreen .lark-progress-bar-pc .lark-progress-bar__line__handle-except-fill {\n  width: 0;\n  height: 0;\n}\n.lark-fullscreen .lark-progress-bar-pc:hover .lark-progress-bar__line__handle-except-fill {\n  width: 12px;\n  height: 12px;\n}\n.lark-fullscreen .lark-progress-bar-pc:hover .lark-progress-bar-except-fill {\n  height: 5px;\n}\n.lark-fullscreen .lark-progress-bar-pc:hover .lark-buffer-bar {\n  height: 5px;\n}\n.lark-fullscreen .lark-progress-bar-pc.lark-sliding .lark-progress-bar__line__handle-except-fill {\n  width: 12px;\n  height: 12px;\n}\n.lark-fullscreen .lark-progress-bar-pc.lark-sliding .lark-progress-bar-except-fill {\n  height: 5px;\n}\n.lark-fullscreen .lark-progress-bar-pc.lark-sliding .lark-buffer-bar {\n  height: 5px;\n}\n.lark-fullscreen .lark-progress-bar__line__handle-except-fill {\n  width: 15px;\n  height: 15px;\n}\n.lark-buffer-bar {\n  position: absolute;\n  height: 1px;\n  width: 100%;\n  z-index: 1;\n}\n.lark-progress-bar--simple .lark-buffer-bar {\n  height: 3px;\n}\n.lark-buffer-bar__line {\n  position: absolute;\n  height: 100%;\n  width: 0;\n  left: 0;\n  background: #e7e7e7;\n}\n.lark-exit-fullscreen {\n  display: none;\n  background: url(" + escape(__webpack_require__(/*! ./resource/images/exit-fullscreen.png */ "./src/css/resource/images/exit-fullscreen.png")) + ") center no-repeat;\n}\n.lark-request-fullscreen {\n  display: block;\n  background: url(" + escape(__webpack_require__(/*! ./resource/images/request-fullscreen.png */ "./src/css/resource/images/request-fullscreen.png")) + ") center no-repeat;\n}\n.lark-exit-fullscreen,\n.lark-request-fullscreen {\n  background-size: contain;\n  width: 20px;\n  height: 20px;\n}\n.lark-fullscreen-button {\n  cursor: pointer;\n  padding: 0 14px;\n  width: 20px;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n}\n.lark-loading--mobile {\n  position: absolute;\n  display: none;\n  text-align: center;\n  top: 50%;\n  transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  font-size: 13px;\n  color: #fff;\n  box-sizing: border-box;\n  width: 100%;\n  height: 28px;\n  line-height: 28px;\n}\n.lark-loading-cnt {\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 0 15px;\n  border-radius: 15px;\n}\n.lark-loading-cnt__spinner {\n  display: inline-block;\n  vertical-align: sub;\n}\n.lark-loading-cnt__text {\n  display: inline-block;\n  margin-left: 4px;\n}\n.lark-icon-loading {\n  width: 14px;\n  height: 14px;\n  background: url(" + escape(__webpack_require__(/*! ./resource/images/loading.png */ "./src/css/resource/images/loading.png")) + ") center no-repeat;\n  background-size: contain;\n  -webkit-animation-name: spin;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  -webkit-animation-play-state: running;\n  animation-name: spin;\n  animation-duration: 1s;\n  animation-timing-function: linear;\n  animation-delay: 0s;\n  animation-iteration-count: infinite;\n  animation-direction: normal;\n  animation-fill-mode: none;\n  animation-play-state: running;\n}\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0);\n    -ms-transform: rotate(0);\n    -moz-transform: rotate(0);\n    -webkit-transform: rotate(0);\n    -o-transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0);\n    -ms-transform: rotate(0);\n    -moz-transform: rotate(0);\n    -webkit-transform: rotate(0);\n    -o-transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n  }\n}\n.lark-loading-spinner {\n  display: inline-block;\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  -webkit-box-sizing: border-box;\n  border: solid 6px #ddd;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  -webkit-animation-name: spinner;\n  -webkit-animation-duration: 0.8s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  -webkit-animation-play-state: running;\n  animation-name: spinner;\n  animation-duration: 0.8s;\n  animation-timing-function: linear;\n  animation-delay: 0s;\n  animation-iteration-count: infinite;\n  animation-direction: normal;\n  animation-fill-mode: none;\n  animation-play-state: running;\n}\n@-webkit-keyframes spinner {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n.lark-loading--pc {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 65px;\n  height: 28px;\n  margin-left: -32.5px;\n  margin-top: -14px;\n  z-index: 3;\n}\n.lark-control-bar {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n}\n.lark-control-bar {\n  display: none;\n  color: #fff;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -moz-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));\n  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));\n  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));\n  background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));\n  height: 38px;\n  font-size: 13px;\n}\n.lark-current-time {\n  margin: 0 14px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n}\n.lark-duration {\n  margin-left: 14px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n}\n.lark-progress-bar--simple {\n  height: 3px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n.lark-error--mobile {\n  cursor: pointer;\n  position: absolute;\n  display: none;\n  text-align: center;\n  top: 50%;\n  transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  font-size: 13px;\n  color: #fff;\n  box-sizing: border-box;\n  width: 100%;\n  height: 28px;\n  line-height: 28px;\n}\n.lark-error--mobile .lark-error-cnt {\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 0 15px;\n  border-radius: 15px;\n}\n.lark-error-cnt__spinner {\n  display: inline-block;\n  vertical-align: sub;\n}\n.lark-error-cnt__text {\n  display: inline-block;\n  margin-left: 4px;\n}\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0);\n    -ms-transform: rotate(0);\n    -moz-transform: rotate(0);\n    -webkit-transform: rotate(0);\n    -o-transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0);\n    -ms-transform: rotate(0);\n    -moz-transform: rotate(0);\n    -webkit-transform: rotate(0);\n    -o-transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n  }\n}\n.lark-error--pc {\n  display: none;\n}\n.lark-error--pc .lark-error-cnt {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  font-size: 14px;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 2;\n  transform: none;\n}\n.lark-error--pc .lark-error-text {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  color: #fff;\n  text-align: center;\n}\n.lark-complete {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n}\n.lark-complete__replay {\n  position: absolute;\n  color: #fff;\n  font-size: 48px;\n  top: 50%;\n  left: 50%;\n  width: 48px;\n  height: 54px;\n  margin-left: -24px;\n  margin-top: -27px;\n}\n.lark-volume-mobile {\n  display: inline-block;\n  width: 20px;\n  height: 100%;\n  margin: 0 3px 0 17px;\n}\n.lark-volume-mobile--normal {\n  background: url(" + escape(__webpack_require__(/*! ./resource/images/volume.png */ "./src/css/resource/images/volume.png")) + ") center no-repeat;\n  background-size: contain;\n}\n.lark-volume-mobile--muted {\n  background: url(" + escape(__webpack_require__(/*! ./resource/images/muted.png */ "./src/css/resource/images/muted.png")) + ") center no-repeat;\n  background-size: contain;\n}\n.lark-time {\n  *zoom: 1;\n  font-size: 13px;\n  float: left;\n  margin-right: 14px;\n}\n.lark-time:after {\n  content: ' ';\n  display: block;\n  height: 0;\n  font-size: 0;\n  clear: both;\n  overflow: hidden;\n  visibility: hidden;\n}\n.lark-time .lark-current-time,\n.lark-time .lark-duration {\n  margin: 0;\n  float: left;\n}\n.lark-time .lark-time-separator {\n  float: left;\n  margin: 0 2px;\n}\n.lark-control-bar-pc {\n  *zoom: 1;\n  font-size: 16px;\n  line-height: 39px;\n  height: 39px;\n  position: absolute;\n  bottom: 0px;\n  color: #fff;\n  width: 100%;\n  cursor: default;\n}\n.lark-control-bar-pc:after {\n  content: ' ';\n  display: block;\n  height: 0;\n  font-size: 0;\n  clear: both;\n  overflow: hidden;\n  visibility: hidden;\n}\n.lark-control-bar-pc .lark-control__left {\n  *zoom: 1;\n  float: left;\n  height: 100%;\n  position: relative;\n}\n.lark-control-bar-pc .lark-control__left:after {\n  content: ' ';\n  display: block;\n  height: 0;\n  font-size: 0;\n  clear: both;\n  overflow: hidden;\n  visibility: hidden;\n}\n.lark-control-bar-pc .lark-control__right {\n  *zoom: 1;\n  float: right;\n  height: 100%;\n  position: relative;\n}\n.lark-control-bar-pc .lark-control__right:after {\n  content: ' ';\n  display: block;\n  height: 0;\n  font-size: 0;\n  clear: both;\n  overflow: hidden;\n  visibility: hidden;\n}\n.lark-control-bar-pc .lark-play-button-pc {\n  float: left;\n}\n.lark-gradient-bottom {\n  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));\n  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));\n  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));\n  background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  height: 49px;\n  padding-top: 49px;\n  pointer-events: none;\n}\n.lark-volume {\n  float: left;\n  *zoom: 1;\n  height: 100%;\n  width: 80px;\n  cursor: pointer;\n  margin-right: 14px;\n}\n.lark-volume:after {\n  content: ' ';\n  display: block;\n  height: 0;\n  font-size: 0;\n  clear: both;\n  overflow: hidden;\n  visibility: hidden;\n}\n.lark-volume-icon {\n  margin-right: 4px;\n  float: left;\n}\n.lark-volume-line {\n  float: left;\n  position: relative;\n  height: 100%;\n}\n.lark-volume-line__line {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  width: 50px;\n  height: 2px;\n  background-color: #fff;\n}\n.lark-volume-line__line-padding {\n  position: absolute;\n  bottom: -10px;\n  left: 0;\n  padding: 10px 0;\n  width: 100%;\n}\n.lark-volume-line__ball {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  left: 50px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #fff;\n}\n.lark-tooltip {\n  position: absolute;\n  display: none;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  border-radius: 2px;\n  padding: 4px 8px;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.lark-not-support-notice {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  color: #fff;\n  z-index: 4;\n}\n.lark-not-support-notice__text {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -12px;\n  width: 100%;\n  text-align: center;\n}\n.lark-full-window {\n  position: fixed !important;\n  top: 0 !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  left: 0 !important;\n  margin: 0 !important;\n  box-sizing: border-box !important;\n  min-width: 0 !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  max-height: none !important;\n  width: 100% !important;\n  height: 100% !important;\n  transform: none !important;\n  object-fit: contain;\n  z-index: 999999;\n}\n.lark-fullscreen-adjust {\n  top: 0 !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  left: 0 !important;\n  margin: 0 !important;\n}\n.larkplayer {\n  position: relative;\n  cursor: pointer;\n  background: #000;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.larkplayer video {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.larkplayer video:focus {\n  outline: 0;\n}\n.larkplayer video::-webkit-media-controls {\n  display: none;\n}\n.larkplayer video::-webkit-media-controls-panel-container,\n.larkplayer video::-webkit-media-controls-start-playback-button {\n  display: none !important;\n  -webkit-appearance: none;\n}\n.larkplayer:focus {\n  outline: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/global/document.js":
/*!*****************************************!*\
  !*** ./node_modules/global/document.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = __webpack_require__(/*! min-document */ 0);

var doccy;

if (typeof document !== 'undefined') {
    doccy = document;
} else {
    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }
}

module.exports = doccy;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../usr/local/lib/node_modules/webpack/buildin/global.js */ "../../../../usr/local/lib/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash.assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = assign;


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/css/larkplayer-ui.less":
/*!************************************!*\
  !*** ./src/css/larkplayer-ui.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/less-loader/dist/cjs.js!./larkplayer-ui.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/css/larkplayer-ui.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/resource/font/layout.eot":
/*!******************************************!*\
  !*** ./src/css/resource/font/layout.eot ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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Dg4BzwJ1WFh1AgJ1WEBkGS0ffE9tkAMDkG1tkAMOFQ4AAgAAAAABTAIAAA8AHwAAETQ2OwEyFhURFAYrASImNQE0NjsBMhYVERQGKwEiJjULCBMICwsIEwgLARMLCBMICwsIEwgLAe0ICwsI/iYICwsIAdoICwsI/iYICwsIAAAAAQAA//0BegIDAAkAAAEWFAcFBicRNhcBaRAQ/p8HAQEHARoLHgvlBAkB9AkEAAAAAQAAAAAA4QHfAAsAABMuASIGBzM+ATIWF+EBNlE2ARQBKkAqAQF/KTY2KSAqKiAAAQAAAAAB9wH+ACoAACUmBgcOAQcuASc+ATceARcWNzEyNj0BNCYiBgcVLgEjDgEHHgEXMjY3NiYB6wcMAxpuRl5+AgJ+XkNsHAYMBwoKDgkBJGo+bJEDA5FsUH8eAwW3AgUHP0oBAn1dXnwDAUY8CwEKB1gHCQkHIDA1ApBsa5ACVUoHDAAAAAAAEADGAAEAAAAAAAEABgAAAAEAAAAAAAIABwAGAAEAAAAAAAMABgANAAEAAAAAAAQABgATAAEAAAAAAAUACwAZAAEAAAAAAAYABgAkAAEAAAAAAAoAKwAqAAEAAAAAAAsAEwBVAAMAAQQJAAEADABoAAMAAQQJAAIADgB0AAMAAQQJAAMADACCAAMAAQQJAAQADACOAAMAAQQJAAUAFgCaAAMAAQQJAAYADACwAAMAAQQJAAoAVgC8AAMAAQQJAAsAJgESbGF5b3V0UmVndWxhcmxheW91dGxheW91dFZlcnNpb24gMS4wbGF5b3V0R2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20AbABhAHkAbwB1AHQAUgBlAGcAdQBsAGEAcgBsAGEAeQBvAHUAdABsAGEAeQBvAHUAdABWAGUAcgBzAGkAbwBuACAAMQAuADAAbABhAHkAbwB1AHQARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAgAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAABAgEDAQQBBQEGAQcBCAEJAQoBCw4wMDEtbmV3LXNvdW5kMA4wMDItbmV3LXNvdW5kMQ4wMDMtbmV3LXNvdW5kMhMwMDQtZXhpdC1mdWxsc2NyZWVuDjAwNS1mdWxsc2NyZWVuCzAwNi1sb2FkaW5nCTAwNy1wYXVzZQgwMDgtcGxheRIwMDktbG9hZGluZy1jaXJjbGUKMDEwLXJlcGxheQAAAA=="

/***/ }),

/***/ "./src/css/resource/font/layout.svg":
/*!******************************************!*\
  !*** ./src/css/resource/font/layout.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "54b1c765831fe87badca73622abbe704.svg";

/***/ }),

/***/ "./src/css/resource/font/layout.ttf":
/*!******************************************!*\
  !*** ./src/css/resource/font/layout.ttf ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,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"

/***/ }),

/***/ "./src/css/resource/font/layout.woff":
/*!*******************************************!*\
  !*** ./src/css/resource/font/layout.woff ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),

/***/ "./src/css/resource/font/layout.woff2":
/*!********************************************!*\
  !*** ./src/css/resource/font/layout.woff2 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,d09GMgABAAAAAAT4AAoAAAAACpgAAAStAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlYAgkoKiUCHTwE2AiQDLAsYAAQgBYN+B4FHG9kIUVRLKrIfktSGgQYSM0KEQAqoAsAEHAAAoABAPATH3nf3KykWwKMBVoJFA5X7QJorvOLn3/M9NynS3CfwC0L7YG7p5nRzMAl/QvtmfonXlsmnVmHQmYEr6a+S7qu9wi3XaAPLFx+jonR0pMvYmtq/luULV0BZ4d7aIpCsI9cqMgrIwYA4noSfsbOTs2rD2KVlXkHE/VikhBITjYhp59tfDfkmSQugXn5l57khdw/wUCMAGEs90AMCUBaQcjQBJuSI5lzjhSiTaAlNvf//46CYh0P6B4oyqPIG3LqHGEZiH4kTgB0vThKk/ZXtlIVGNJdJLA2rhUSmwgRh/PM6GBnRer76rIWSZnfYoJU7PbFK1Gy3JrhttbiILKTTz9zACiss906qdQHCSnGz+WktcyeSU7IWGaSVa9VrbKCtY96+n9lnxbXRuqbyLSsNJQZNWMMD1GI4mi6hWQGhGqQWMW4sUs/UBDyvERFSCzTNcgxvXkJztgHjlEKWM2vEolhgBWCqJSwJJAghXoW91YJF2Z07hVpt0eSkaoMuPdDjRmGdThnT8AxH9uPT8ED0zaWbNuFn8IxZNWdBiuZla26xN+zwyrOa09Z1Ame2r40yrTaYt0STCcAZHd0fpPkNiUKYyaPVw0kmzWghajJKWTfrilM4OmRYp38wb8tUfiNbCLl/oVsK6pKz6qJ9QZmD8qXK+IOxMsKtrs2l1qZJWSiPnxGc8uZ28KvXxUE0qaKCk52+t+qD0HnWoVoewNhKXTHjc4HRSaMCsnOf3bWvk4xkXCePHy8rM+4IWu1iaofJCcVWqk16TFpmUhq7fOdiZofJTsUWxUkw5AmTHdROm4TCtoaAh3YuYeD/NRXq70cqTdvfb/KDXQ3j65ojExzyxyA72xcubIcSguJCPl5BPzJ/BJ+oHZSpobzvtDO5F/tysDf0y+FX9cs66ktVwNMpVFFeEWVmuDx2uSG8HKk55LGmIy0JKmJiHJWjiomxCiIe2iZPlu4D+XJ5sXyZwRyZU0xLWHQbWrSQaCNarce1odwphfZpHhkmibsC/P+PsgRAriYv/4wDf2M038311/EE4j3+CXdTsHXcE1kcRv5XcbPQ5ffM5Vjz/4vG7aZAD0BVnjPAC1veiPy/zSpGpMYa6pECsYFAjPm6oyi/IbUhxSZPkda1EPgH1dn1170zyCrDpFIWSAueUh+CItaUXoJZS8ua0g3S63ydHd1g6tMqVFQAoqcZ0AkG+ukkPdOABLuALmXhhy6jZx+dpvR7CcwjTFS1tBHfoI2q8pTA2uwLfOitoRlPY+/xCgZ8hdDQeknDrM0RJZXeavpiDYJSljpvBxDIO0Q3TRKZdWEurCZKZcmK0BvQikqjl2qC6i/AC3ppsUFluLQQvMpNBWsFsbSBq2tLVDDTyml2JFEy39Kol454FaVKlFpR7rKlA8oXENc1iDpTidZMVrVzohPBdRuQ0l/0FpGIRBIkRTIkRxRSIBphg6A0YwbmLNhomjSMyEGGOCfkp3tfMFj0yGRUKggPYPLrLyG0e9orpmzV9KbdDkqvmatigK2g9MbjHlnoJE1v8/ZhovdCwU5QljIPREcI"

/***/ }),

/***/ "./src/css/resource/images/exit-fullscreen.png":
/*!*****************************************************!*\
  !*** ./src/css/resource/images/exit-fullscreen.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABCBJREFUaAXtmrtPFUEUxrlIIT4qjBUF1hqjCQkWNDRWFsZGEqmksLBTQsd/oHYWhoTCQKKFxobaVhMLYrQ0UmgjWIlAwcPfJ3fI3L1z9nHZua/sSU5m5sx5zDeP3ZnZHRioqOqBqgeqHuihHqi1q62Hh4cTxNqq1Wpfi8bEdhSba/CgYbuL/Bf8Gf8Hhk62mECT8AI8nq1ta2C/CDuaszWbazCagneccUb6k/rpZi85JBgK7EE9wF6rjrAbhvfrfpR8zxH+WAX9l55t3qwJ2poiCjgFuyl/ivwy0UxHMjDoDHI/znlDzxJ/sSpS5E9pqx/zWNUBOha4DAaaxh9ggXW0T2aGdfLKCbJS/Iygs+np/cb+gldOzWI/hMIj+Abst8W3k44GaNgTXifOmlfOzhJsGtZ09knlu9nWRxrojvjG5H3wed1k6uF3NRHnZsgoOOxOsT6SM5Q1so7Uyys4zw3aGUZO9xL+TyfK/4upgKXRY6BDGBtkmYA90PfI98JINwBMFnIBroN+TdrzoHMD7hfQhQD3A+jCgLsYtP98UTNb31PLOkR6NcGp72nq2/UenieWI+29deAon3CcCpr6dgEeIpZAa++tXVc8IoAJmrq2AI6HzvCcAnqWOp+ibC2NZsUVg8oa6f4ErO40QPuAN+J2e7p383hYb7yOWzrPFqXbGLyAQ8e5dfbnl4o6LEtf58ggMSSLVNyHW3pXB50eCddT6jpTBdgJfw6WnJ/tDKqjqNbo/Y3UqLf4XYrkO5dbcw0zqrpdfAgXvYPyAx9S2ILX4WV4ifUrWUVVD0TqAXNKR4rX5JalozbobaC7szH4HHySdv3B/jlL5wlpd5HAwm/gGHQ5hNZ6Sod0Y8g0sndiOManZkoTmRuPJs04Ak3jskkHf70NPoYcdxrwWKhRyHR78QB+Z9SnibcBu5Om0LE6Fu5GyuIt9IWjYyCKBAbsZgJw6nVREd9dqRsArMuC/gUdAKzrIOsSIe63LALry7suxHQxFuXhht/klNanVesSId6apiGj8A7saD7GmsB5EHDbQdOQWw5pPdWxrnRKA6xg1Jc+va2dVlIeuqopvQOSDnmflv4BLwksGbPj5bJBdz1g9XiZoHsCcJmgewZwWaB7CnAZoC3Au3LuUZSNh+e/UPYka9oCoh81fdKuaxVB8tcgp6PjnH5ie0ZjLB2nW0oq0LRJvlZg99pUql+qvlH/SZW5CINBWD9qFqVCOzKcmzutXA1FCR+hzcmCZR+c0vSObg0eW0Yp8ispdaEqXbg5UsxtV8ibaqTR9f8u0rC/z2vfoEfv6dfDvCOtvfdUg4OMAvpzsCN9y2qZcDIO61fnyTQnmdehONAsuApfhIO/8yHX6KzR2z9ICxH+NSvOYhu8gyrkrFKueqDqgaoH+q0H/gFQgJGXTJjF7QAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/css/resource/images/loading.png":
/*!*********************************************!*\
  !*** ./src/css/resource/images/loading.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAABOBJREFUWAnNmNuLVVUcxzteahxTqaBMnfISXRSmi/QQ0UsPYSQEAxH0KKKiL8EQQX+BD0UEEYEg9NBDENFTRdjFEpJ6SIJCRxjMCkexpLw0NY7T57Nn/XZr9jln7nO2P/ie39p7rfVbn/1ba6+9z27cMAcbGxvbTPdn0H1oTdJa/EW0t9FofIKfF2vMNApwD9DnBfQ0Wo8WtdBizp0BdD2+yYhBVWOsqWKSE0smqZtQRXAz9RJ6Dgki4GxtMfFG7Txd4ClBCXgj8frRDtSFNLNRVVGRfn7D781PRJl4XcAN44uZwFs1OhXwpKAEuY0gb6FHkYGrcJc5dxgdQqfQEHLKL+HbGnFdciHjmuER+l1r18nGLY2O91PxNlqHbFdkIPmf8G+gz80OflomIIYbzyad8piOMUx9sSSqAVuCJsh3aXwzyiHPcPwq+tAB8bMygenobOaglj1/hdhX8ROsCZQgt9LiPeTNE5D6I+hFgvyFn7MlWNe/wDGOsNrFamajoqil81IKr6PVyPVi1vQH0c75giRWcbcT7x+KZi8yK7A7yop0IRTHbQIop/ahB5FwoYME3I88nndLsCMEjqzqTZjLrrQSlCswi8+jADSbX6HX0IIasH8zQJ5ZuZbDVO5KJSgVe5AVggrpXvjyQmWS2FVzq3NcmUKrolEBCvk9nNiGbKiEfRNIn9kdsZQQYQNS3w2bN1xxUr8dBaCQx9HHqKPWZgkUa7XIKDSPo1ibbrgH6CR4HeZTLc/qSrLaWMLPJiruQIJqbhlHi1I9P95YmrDuAKrLgzybwh4lm8LWYmkmfSznWV3mQQ+Kadd/g+o2ExWvkjJ2ux35yIxpN81uS3WboALKo93UCvT8eF2tv27+ZjRsqaC3oMioFb/7U7O585jRsAI01mecvB68U55n9JrUTnXAeiWu2brNlxLZQqM5qJACXw+gPjYDUn81B42suvnXbV0AOPWxRRWgv3Aisinsw6hu809lntFhD75FkU2Be+ONhXLHjbFlcvlFNj2+sIhH1s8UzqKAdct6CNVlZjO/mfwbfVla7TsUoPpnfWOxopOWxtzImHKF/pAhQL+gnK/THo4fs0GH7U7GW4kCUj8kQwFKak9T/hrlWe3jCrtt1AljLKfbr4I55FnYiq8uBWgCeR//LwpYH627CJC3SU3n16Upf4SoJiZAHWTQH62EgNxn/KcoQPWbUR9aaNvCAO7fAak/DVO8RP8Pmkg+wJ9E+f+nJ7lil0F5UantnJ2ZRH5HuBflkH9yLEdpTXc2HVdQ+wqKt6qA/pFz7+RXWUaZRYFxfEx6w96OYgxn8Qo6zDi+k5bWBGoNQdbh+pHB8qXg8vgIfU8gg8/YiO2YG1AvWoby+L6HfklsMzrBWoLagoBrcbuRHwHyKzbwr+gzNEDQEfyURjwfJCbAqTZmDmh87+4jrSA5X77qW24ygrsMdqC7URXWgfwTNpDkxuwHi/iIu5yycl+8C61BrkP75Xu2cc8hIY3X0tpmNFqnTPgV5Qlk+zwT1UEDoJ2v9nWq/Sj8A5D2aWtTgkZPgL25nkJOXTW7ARYgcRw+zucX5l19DMCYAQ7b27RBIwTAqylvRT5FnNYcIgfJzwewN8kpdAJAl8q0bcageeQE7R7oG49PFdekXkjXa0ioQeDcNWZl/wEvOtYXm75OxAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/css/resource/images/muted.png":
/*!*******************************************!*\
  !*** ./src/css/resource/images/muted.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABFlJREFUaAXtm8tvTUEcx3uRUK2dDbGxqCjRiipqQeqxqdhpSDReQbpRjbJDiz9AK40Qz0ZESezEwsZjY+lRjyCUnRChaBsLrc+vzlxzf5ke556G3jn3/pJvZuY3v5nz+8w55/a8WlRUsMIKFFbA5xVIjUfyw8PDs9huAxpGV1Op1FvKZBqwDeg7MvaNysLE0QJVjM4ZSlVeSxQwcOXoiYK0mw8TAwzVVtRv0znqj7wHBmoquuiAE9cH5fcbGJj56KmCMs0uKstNIyj9BQZgB3IdwuLbLocuZQWyzT9gsi9Bl2wKqy57e545T6n7DQzAAvQcuewCzqkG1vs9DMwuNIC0ycXFFhvU1PH7t4dJuhRdRi7rwTnXAOqSPr+ASbgSvUAuO4uzWEPabfr9ASbZRjSItMk18WYbbLQ6ceMGPMlOikRm0p5s+6y6xB5DGy2fqT6mUs9dz0vjyOkS0BXoHYpjpxg0JRtA4sdtD8tFgPz9/Iiyta8M2JQNqIll3LgBTyCJSjTdJBOxlLubKg7h7ojxYwpjgeS6fD0qjzNRsMD1lKVyXpaoSQZpv1c+u3mTRguwP2znv6qTpPym3EcV6CftZrbdGXV7xO8hth3Jzu2RQ3otsu1W1MnixrGxyIc0scvs5IJ6U5RtE9ukxwp1rtsrEuxTSXYAslf5Mpr0N+PoyHAyT84Dc/h+Iul6JKeabe0BlO0bqePfR+W46pDxG3L+kDZJA7EGua7ZBS5txLQgbTJu9UgQlZw+h9MkVCRp5ILeL3H0HUDa5D58VXoeGt4AB1C15CwQ2m5oB22Jq03DUsn5c9hOVuqc07cp1qEBaVsmPtv6adQF8Wm/d8CSORB3KOqQQLnMwN7VnV4CCwTQAnNFAwXty/Tfc/V5C8y5eQignS4ofLvpP+jq8xIYmMPAHFVA8mLOtmPBotg+/360gGiD4EgGRVHRN9qNSErbjhLfaju8ufCQpEleALT14agJ+muoS1vbnwWix4u/w+Qph6g2gVtq70HacrPhgv59CtCpgeVK5k2IOumTW7bYxvjId0uyEeLbkLYvOJa4ksC/FEm/tlaZTL/n0UGu9gOcZa6NRfExNjIwsfKqdQjZ9plGddi26F+CNPSQAMsjHv02D9df7b884iGLapWJwC4OgzV9wViJT9tIH62VKO5DvNOM/acP8Zj/JJK93IsWGaAoJfFV6DWSpyUnMsbgmIlmj6Iy/N3IZY9wzsmYLKRBbORD2kzDmGko9nUDY+P97jDQ6wfxZgGzKoGuRKO9ajlDX3JetZiVASp/XqYZaCkB34VcTyGS9bpUQYe9ED/PgiTnhbgBByp/Pnkw0FICHvZRy7YgJus/SzIuZw3o+egZclkXTrmrsc2/r3j06kOTPx+m2fCAb0Xyix1m/u9hBZ0/H5cacHZv2OfD101c4krA9Qfi8nQiqzugsSxKaiyD444FcAZj5V8AJiL5F4DeuHMVxhVWoLAC+bUCvwAlfPCPZ1UriQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/css/resource/images/pause.png":
/*!*******************************************!*\
  !*** ./src/css/resource/images/pause.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/css/resource/images/play.png":
/*!******************************************!*\
  !*** ./src/css/resource/images/play.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/css/resource/images/request-fullscreen.png":
/*!********************************************************!*\
  !*** ./src/css/resource/images/request-fullscreen.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA+dJREFUaAXtmrtrFUEUxu/1gViKFiks7CIBQRGEWFgoPkCLKKig6UTUwr9GJYVol0KjaJMiKSxSRBBUbERrm4CvUtTo9fvizmWYu+fMzL7ubNgDJ3dn5syZ85vHZnZ2e71Ouh7oeqDrga4H0u2Bvi+0wWCwAzbnoIegu6BboEXlDyqu9Pv9x6EO0P40bC9Cdwp16PMr9BV0Cb7XBTt/NhrbD/0ArVpm/a33emh0EvorovG3sN2n+RZHCxU5ss+hk5qDgmUctRA5DKPtIYaZzUH8PkPs26Q6IjAqcBrXAcsp+FQKyMl/gfQXJ8+XJPRpyUjsCVTgms2Tv8h8AH2dV+jJI+wq1tl7j91GMezWMFoHkDgFldYwB+089CTUyBFcLJpE0C8augeVZB0Fl4McNWCEWG45gd6VmtWmtFvGkTWyFRfzCUHbsTFGxpcrLlSuUZbJacwpaSQ1aBOX+hsDzDV7Fdpq6BjgHm4ij9oOHQXMudJ26GjgtkMXAk4Q+gdjssRND4sKA9NDQtN7GeGYHdlvXC8wvijB/9g555/5DckB/x9DuRmxpdHNCRqegF6BFtsOo2IwMDsC9mOHlgbEzi81pW1HCU1vO6yR68qA6dkDPTPS+hgyKgX2QN8ZA99Ik5UDK9AjjY8jQ3seLhUPpzduZD/hxIzs9VIOK6qsAdsPCWzOTXtDADSPiKjJiDalV6woCbtqpTfnJabkLJQnHyc2J2GLqTgo2eAEHQG3GHVjlzcFWHtre0kC0tawVCfF/KMIyj7HOiYFmQQwRucM9FOmRXZkNixZ3fSQPwlgRHMfujfTJwCv7Qg4FeDhCOCCo1PbEXAqwLcBaW9saoNOAjjbkTVyBJwEMOez59GysjWtAuPmwfezPDaZYFB1Swlo74t9b+yAnIaal9Gfm4JmYGgr6rgI9jehtsxJgNoI8zMD8zJ6D675yrIRKTHS3vg0YPd9rJv2Oi9jEAk9CG1LAw71UZtdJHRQHEkDk6BqaO3EI6jHmjAiNO5IbGoeavbJZnMSFULyI2xotJGGDb/2CZLWAJNGgb4WRAsjDdje29KfZhvaXmk7AdqNzf3mY9iutoa/Da3+X8xk60hyxleUywhozaknJuFvCoXuw7to7xQ8RJoj68LS7Dv/RAmCOQuNleAdGRzzDMo+loltS7O/IMHm9Y6xXcLFO5MI/OWO7HigLYMyd9zAKkFmH2ElfpQmAmNq8qtUfuEWA82X0aFf6L2EbdVC2BnEzjceueJ9ysC84Trnt4v8nG83VBoVruEFNBYMAt88XeSBm+QTRV7hPYVr9g10UYP1euoMuh7oeqDrga4HxtwD/wBjEyk1u1TOJwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/css/resource/images/volume.png":
/*!********************************************!*\
  !*** ./src/css/resource/images/volume.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABPxJREFUaAXtm0uMVEUUhqcRgRnQaAQRlKAhEHHiewUBCb4IUTfiwoRRlIiBFTEuTNSNC124kRgXGkWZGBMhUVe6cKXE+I4yAhI1giYmMIAJD3kI4vid5lbP4af62t1zu2eq05X8qXNOnTrn/Pfe6Vtd1dPV1WmdK9C5AilfgdJoFD80NHQVefvAENhcKpV+o2/PBtk+8BcI7SjCTW3HFlLdYGNgKf2WtiIMuflgh5D06ra2IQyrVeCYZxeRB5InDKkesClCzkz7xZ42Ycj0gp1CKqj9CAuDkvXpEobAahB7hM32qD269DcA39IjTPWTwduehZPtbl8X/k6RCyVMvNvBJ2ALsHd8cxtJrge7QKy9hbHHV4BeGGFiTQKHQWg/IEz2+QqVCb4GHA/ZXG+Li4djybAXSfgylzOIm2N5R2Qj8hTwTsgg/Xb0a6slYKwwwpaDeK9LflOfqpa/bjvBbgQ/WdRIewNbd15QxosmbI/1t1LLGfTFeXXUNEaQteCEBDfV1sQrawmCX6GELScxZwF9v3+RWw8TZoJrqmAu9ndBrA1gnJcb3A3i2xBh5k0DD4FeF64iYl8K/gW+3VtxCAKjt4HfvVcd8qv4Tgqxaunxr5swc6aCvcDaabAslgu7vZp824Yy/DUYxd6fB7xHjfIR/B6MJf0/G/MaIbxC6rIbNEVzYbMvKv+I7wMVPwZ0mSe+UfV7rHMrQeoUmNsI4auZd0qqeSmWGp9+8Xuv4sfAXTJo79TdOXiFsYmVAA0IzK+bsKVh3vPAt5Mo07QEbBrfnsYJZT8EJfyxBihajxRU01qaefb6+RX49nSsPhz0M+lO8xsXcx6rNva+TlLbBqnvcdGD+mEQsr78aZ0U4azwfvpjjsxs7uYcpwdRCS+xgeQIc5ePUPdngVXWl8mI7SvRrzQ9OcIZiU+FzK2im/onOO3s9h4fnyrhnx0REy8XvYsnwfa8B53dFh/TUyV80BEx8bxXUza+T/xmpEr4byFSbV1wQvy6UyU8VYjoHQ/D04OQ9YOpEp4pRKoRvkL89qZKeIEQ+UV0W4baPtrFzn6cD7KjqRJe6oiYuFV0U3UxUv4AS44wd+4OyMx2BO2D6WunB3F5ELJ+u/XJEabm9RmB0H3Ao3oqKK6/x8kmlpea48Vo6iKu4u6IPZg+QniSJPpqCONN66nrboLfJwleFt3+fi/BtlDsZ9fWDKayATDRbgTw7XMhVVZxWOedkL+r+KHYFo/u9ol/VG31Fs/9UoVt49xcIZIJ2Ow78x/i+9w5fgwuAfqFWeZUVV9jpBWbeIulghfPITFM+AnxsxOQ89baZXcGxvo27Xpq/AZsAGe3bBxrbBeBQeDbC86lfpFIY3UjvkRt73umyIfApfWzlBkEyTtqsXOelh61WHnkfAZoe1ZKb1wl8lg6TFtOPWeE7Zfo1b5FjYj4GgKP5nHpheTXv9t92MpbOo0zy5lJ8LwD8TcZb+aBuJ4P22b9opxyixkiib3PR+snD3ZRrdmZ02PFMKoxCgnzftTyiIXBR08GatqIzyshizkrz6dpYyTvBT+CWLNznwUyMGLCTSNTa2AI9YBNQiyoupRNn3C4MDBcBWx5l9fah7ARh+l8sCOHcfv8uNTd6W4Ib6xCevj8Nkxolx7CfcA/4vajsltaxc+OH1reIDiDpPYvABcA+xeAPS0vopOwcwU6VyDJK/AfpWRhoEq4i1sAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/js/class-name-manager.js":
/*!**************************************!*\
  !*** ./src/js/class-name-manager.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 播放器各状态 className 管理
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui06
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2018/5/4
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see https://www.w3.org/TR/html5/semantics-embedded-content.html#media-elements-event-summary
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    * status 分为以下几种：
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *        * play: PLAYING
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *        * pause: PAUSED
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *        * loading: LOADSTART, SEEKING, WAITING
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *        * end: ENDED
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *        * error: ERROR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var toTitleCase = _larkplayer.util.toTitleCase,
    featureDetector = _larkplayer.util.featureDetector;

var ClassNameManager = function (_Plugin) {
    _inherits(ClassNameManager, _Plugin);

    function ClassNameManager(player, options) {
        _classCallCheck(this, ClassNameManager);

        var _this = _possibleConstructorReturn(this, (ClassNameManager.__proto__ || Object.getPrototypeOf(ClassNameManager)).call(this, player, options));

        _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
        _this.handleMouseMove = _this.handleMouseMove.bind(_this);
        _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.handleFirstplay = _this.handleFirstplay.bind(_this);

        _this.activeTimeoutHandler = null;
        _this.activeTimeout = _constants.ACTIVE_DURATION;
        _this.events = ['loadstart', 'loadedmetadata', 'canplay', 'canplaythrough', 'error', 'playing', 'waiting', 'seeking', 'seeked', 'ended', 'play', 'pause'];

        _this.events.forEach(function (event) {
            var callbackName = 'handle' + toTitleCase(event);
            _this[callbackName] = _this[callbackName].bind(_this);
            _this.player.on(event, _this[callbackName]);
        });

        if (featureDetector.touch) {
            _this.player.on('touchstart', _this.handleTouchStart);
            _this.player.on('touchend', _this.handleTouchEnd);
        } else {
            _this.player.on('mouseenter', _this.handleMouseEnter);
            _this.player.on('mousemove', _this.handleMouseMove);
            _this.player.on('mouseleave', _this.handleMouseLeave);
        }
        _this.player.on('firstplay', _this.handleFirstplay);

        _this.player.addClass(_constants.ClassNames.PAUSED);

        // 全面屏适配
        var isAllScreen = window.screen.height / window.screen.width > _constants.NORMAL_SCREEN_RATIO;
        if (isAllScreen) {
            _this.player.addClass(_constants.ClassNames.ALL_SCREEN);
        }

        // 直播适配
        var isLive = isFinite(_this.player.duration());
        if (isLive) {
            _this.player.addClass(_constants.ClassNames.LIVE_PLAY);
        }
        return _this;
    }

    _createClass(ClassNameManager, [{
        key: 'dispose',
        value: function dispose() {
            var _this2 = this;

            clearTimeout(this.activeTimeoutHandler);
            if (featureDetector.touch) {
                this.player.off('touchstart', this.handleTouchStart);
                this.player.off('touchend', this.handleTouchEnd);
            } else {
                this.player.off('mouseenter', this.handleMouseEnter);
                this.player.off('mousemove', this.handleMouseMove);
                this.player.off('mouseleave', this.handleMouseLeave);
            }
            this.events.forEach(function (event) {
                _this2.player.off(event, _this2['handle' + toTitleCase(event)]);
            });

            this.player.off('firstplay', this.handleFirstplay);

            _get(ClassNameManager.prototype.__proto__ || Object.getPrototypeOf(ClassNameManager.prototype), 'dispose', this).call(this);
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(event) {
            // 当控制条显示并且手指放在控制条上时
            if (this.player.hasClass(_constants.ClassNames.ACTIVE)) {
                if (_larkplayer.DOM.parent(event.target, 'lark-play-button') || _larkplayer.DOM.parent(event.target, 'lark-control-bar')) {

                    clearTimeout(this.activeTimeoutHandler);
                }
            }
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(event) {
            var _this3 = this;

            clearTimeout(this.activeTimeoutHandler);

            // 点在播放按钮或者控制条上，（继续）展现控制条
            var clickOnControls = false;
            // @todo 处理得不够优雅
            if (_larkplayer.DOM.parent(event.target, 'lark-play-button') || _larkplayer.DOM.parent(event.target, 'lark-control-bar')) {

                clickOnControls = true;
            }

            if (!clickOnControls) {
                this.player.toggleClass(_constants.ClassNames.ACTIVE);
            }

            if (this.player.hasClass(_constants.ClassNames.ACTIVE)) {
                this.activeTimeoutHandler = setTimeout(function () {
                    _this3.player.removeClass(_constants.ClassNames.ACTIVE);
                }, this.activeTimeout);
            }
        }
    }, {
        key: 'handleMouseEnter',
        value: function handleMouseEnter(event) {
            var _this4 = this;

            clearTimeout(this.activeTimeoutHandler);

            if (!this.player.hasClass(_constants.ClassNames.ACTIVE)) {
                this.player.addClass(_constants.ClassNames.ACTIVE);
            }

            this.activeTimeoutHandler = setTimeout(function () {
                _this4.player.removeClass(_constants.ClassNames.ACTIVE);
            }, this.activeTimeout);
        }
    }, {
        key: 'handleMouseMove',
        value: function handleMouseMove(event) {
            this.handleMouseEnter(event);
        }
    }, {
        key: 'handleMouseLeave',
        value: function handleMouseLeave(event) {
            clearTimeout(this.activeTimeoutHandler);
            this.player.removeClass(_constants.ClassNames.ACTIVE);
        }

        /**
         * 处理 loadstart 事件
         *
         * @private
         * @fires Player#loadstart
         * @listens Html5#loadstart
         * @see https://html.spec.whatwg.org/#mediaevents
         */

    }, {
        key: 'handleLoadstart',
        value: function handleLoadstart() {
            this.player.addClass(_constants.ClassNames.LOADSTART);
        }
    }, {
        key: 'handleLoadedmetadata',
        value: function handleLoadedmetadata() {
            this.player.removeClass(_constants.ClassNames.LOADSTART);
        }

        /**
         * 处理 play 事件
         *
         * @private
         * @fires Player#play
         * @see https://html.spec.whatwg.org/#mediaevents
         */

    }, {
        key: 'handlePlay',
        value: function handlePlay() {
            var _this5 = this;

            // @todo player.removeClass 支持一次 remove 多个 class
            this.player.removeClass(_constants.ClassNames.LOADSTART);
            this.player.removeClass(_constants.ClassNames.SEEKING);
            this.player.removeClass(_constants.ClassNames.WAITING);
            this.player.removeClass(_constants.ClassNames.PAUSED);
            this.player.removeClass(_constants.ClassNames.ENDED);
            this.player.removeClass(_constants.ClassNames.ERROR);
            this.player.addClass(_constants.ClassNames.PLAYING);

            clearTimeout(this.activeTimeoutHandler);
            this.player.addClass(_constants.ClassNames.ACTIVE);
            this.activeTimeoutHandler = setTimeout(function () {
                _this5.player.removeClass(_constants.ClassNames.ACTIVE);
            }, this.activeTimeout);
        }

        /**
         * 处理 waiting 事件
         *
         * @private
         * @fires Player#waiting
         * @see https://html.spec.whatwg.org/#mediaevents
         */

    }, {
        key: 'handleWaiting',
        value: function handleWaiting() {
            this.player.addClass(_constants.ClassNames.WAITING);
        }

        /**
         * 处理 canplay 事件
         *
         * @private
         * @fires Player#canplay
         */

    }, {
        key: 'handleCanplay',
        value: function handleCanplay() {
            this.player.removeClass(_constants.ClassNames.WAITING);
            this.player.removeClass(_constants.ClassNames.LOADSTART);

            if (this.player.paused()) {
                this.player.removeClass(_constants.ClassNames.PLAYING);
                this.player.addClass(_constants.ClassNames.PAUSED);
            }
        }

        /**
         * 处理 canplaythrough 事件
         *
         * @private
         * @fires Player#canplaythrough
         */

    }, {
        key: 'handleCanplaythrough',
        value: function handleCanplaythrough() {
            this.player.removeClass(_constants.ClassNames.WAITING);
        }

        /**
         * 处理 playing 事件
         *
         * @private
         * @fires Player#playing
         */

    }, {
        key: 'handlePlaying',
        value: function handlePlaying() {
            this.player.removeClass(_constants.ClassNames.WAITING);
            this.player.removeClass(_constants.ClassNames.LOADSTART);
            this.player.removeClass(_constants.ClassNames.SEEKING);
            this.player.removeClass(_constants.ClassNames.PAUSED);
            this.player.removeClass(_constants.ClassNames.ERROR);
            this.player.removeClass(_constants.ClassNames.ENDED);
        }

        /**
         * 处理 seeking 事件
         *
         * @private
         * @fires Player#seeking
         */

    }, {
        key: 'handleSeeking',
        value: function handleSeeking() {
            this.player.addClass(_constants.ClassNames.SEEKING);
        }

        /**
         * 处理 seeked 事件
         *
         * @private
         * @fires Player#seeked
         */

    }, {
        key: 'handleSeeked',
        value: function handleSeeked() {
            this.player.removeClass(_constants.ClassNames.SEEKING);
            this.player.removeClass(_constants.ClassNames.WAITING);
            this.player.removeClass(_constants.ClassNames.LOADSTART);
        }

        /**
         * 处理自定义的 firstplay 事件
         * 该事件与 play 事件的不同之处在于 firstplay 只会在第一次播放时触发一次
         *
         * @private
         * @fires Player#firstplay
         */

    }, {
        key: 'handleFirstplay',
        value: function handleFirstplay() {
            var _this6 = this;

            // @todo 不清楚有什么用
            this.player.addClass(_constants.ClassNames.HAS_START);

            clearTimeout(this.activeTimeoutHandler);
            this.player.addClass(_constants.ClassNames.ACTIVE);
            this.activeTimeoutHandler = setTimeout(function () {
                _this6.player.removeClass(_constants.ClassNames.ACTIVE);
            }, this.activeTimeout);
        }

        /**
         * 处理 pause 事件
         *
         * @private
         * @fires Player#pause
         */

    }, {
        key: 'handlePause',
        value: function handlePause() {
            this.player.removeClass(_constants.ClassNames.PLAYING);
            this.player.addClass(_constants.ClassNames.PAUSED);
        }

        /**
         * 处理 ended 事件
         *
         * @private
         * @fires Player#ended
         */

    }, {
        key: 'handleEnded',
        value: function handleEnded() {
            this.player.removeClass(_constants.ClassNames.PLAYING);
            this.player.removeClass(_constants.ClassNames.ERROR);
            this.player.addClass(_constants.ClassNames.ENDED);
        }

        /**
         * 处理 error 事件
         *
         * @fires Player#error
         * @private
         */

    }, {
        key: 'handleError',
        value: function handleError() {
            this.player.removeClass(_constants.ClassNames.PLAYING);
            this.player.removeClass(_constants.ClassNames.ENDED);
            this.player.removeClass(_constants.ClassNames.PAUSED);
            this.player.removeClass(_constants.ClassNames.LOADSTART);
            this.player.removeClass(_constants.ClassNames.SEEKING);
            this.player.removeClass(_constants.ClassNames.WAITING);
            this.player.addClass(_constants.ClassNames.ERROR);
        }
    }]);

    return ClassNameManager;
}(_larkplayer.Plugin);

exports.default = ClassNameManager;

/***/ }),

/***/ "./src/js/component/buffer-bar.js":
/*!****************************************!*\
  !*** ./src/js/component/buffer-bar.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 显示视频已加载的量
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui<yuhui06@baidu.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/11/13
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see https://developer.mozilla.org/en-US/Apps/Fundamentals/Audio_and_video_delivery/buffering_seeking_time_ranges
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    1) 在视频没开始播放之前，提前下载的视频资源由 preload 属性的值决定
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           - none 什么都没有，所以我们连视频总时长都没法获取到
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           - metadata 可以获取到视频时长、高宽等信息
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           - auto 视浏览器而定，一般 >= metadata
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BufferBar = function (_Component) {
    _inherits(BufferBar, _Component);

    function BufferBar(player, options) {
        _classCallCheck(this, BufferBar);

        var _this = _possibleConstructorReturn(this, (BufferBar.__proto__ || Object.getPrototypeOf(BufferBar)).call(this, player, options));

        _this.line = _larkplayer.DOM.$('.lark-buffer-bar__line', _this.el);
        _this.handleProgress = _this.handleProgress.bind(_this);

        _this.player.on('progress', _this.handleProgress);
        // 对于已经 video 已经初始化完成后才调用 larkplayer 的情况，此时可能已经没有 progress 事件
        // 不过我们会在 player.handleLateInit 中重新触发 canplay 等事件（canplay 时，播放器应该已经有一定的 buffer）
        _this.player.on('canplay', _this.handleProgress);
        _this.handleProgress();
        return _this;
    }

    _createClass(BufferBar, [{
        key: 'handleProgress',
        value: function handleProgress() {
            // TimeRanges 对象
            var buffered = this.player.buffered();
            var duration = this.player.duration();
            var currentTime = this.player.currentTime();

            if (duration > 0) {
                for (var i = 0; i < buffered.length; i++) {
                    if (buffered.start(i) <= currentTime && buffered.end(i) >= currentTime) {
                        var width = buffered.end(i) / duration * 100 + '%';
                        this.render(width);
                        break;
                    }
                }
            }
        }
    }, {
        key: 'render',
        value: function render(width) {
            this.line.style.width = width;
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.render(0);
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            this.player.off('progress', this.handleProgress);
            this.player.off('canplay', this.handleProgress);

            this.line = null;

            _get(BufferBar.prototype.__proto__ || Object.getPrototypeOf(BufferBar.prototype), 'dispose', this).call(this);
        }
    }, {
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-buffer-bar', this.options.className) },
                _larkplayer.Component.createElement('div', { className: 'lark-buffer-bar__line' })
            );
        }
    }]);

    return BufferBar;
}(_larkplayer.Component);

exports.default = BufferBar;

/***/ }),

/***/ "./src/js/component/complete.js":
/*!**************************************!*\
  !*** ./src/js/component/complete.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 播放完成样式
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui06
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2018/4/17
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Complete = function (_Component) {
    _inherits(Complete, _Component);

    function Complete(player, options) {
        _classCallCheck(this, Complete);

        var _this = _possibleConstructorReturn(this, (Complete.__proto__ || Object.getPrototypeOf(Complete)).call(this, player, options));

        _this.handleClick = _this.handleClick.bind(_this);
        _this.on('click', _this.handleClick);
        return _this;
    }

    _createClass(Complete, [{
        key: 'handleClick',
        value: function handleClick() {
            this.player.play();
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            this.off('click', this.handleClick);
            _get(Complete.prototype.__proto__ || Object.getPrototypeOf(Complete.prototype), 'dispose', this).call(this);
        }
    }, {
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-complete', this.options.className) },
                _larkplayer.Component.createElement('div', { className: 'lark-complete__replay lark-icon-replay' })
            );
        }
    }]);

    return Complete;
}(_larkplayer.Component);

exports.default = Complete;

/***/ }),

/***/ "./src/js/component/current-time.js":
/*!******************************************!*\
  !*** ./src/js/component/current-time.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _timeFormat = __webpack_require__(/*! ../util/time-format */ "./src/js/util/time-format.js");

var _timeFormat2 = _interopRequireDefault(_timeFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file current-time.js 当前时间 UI
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui<yuhui06@baidu.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/11/4
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var CurrentTime = function (_Component) {
    _inherits(CurrentTime, _Component);

    function CurrentTime(player, options) {
        _classCallCheck(this, CurrentTime);

        var _this = _possibleConstructorReturn(this, (CurrentTime.__proto__ || Object.getPrototypeOf(CurrentTime)).call(this, player, options));

        _this.handleTimeupdate = _this.handleTimeupdate.bind(_this);

        _this.player.on('timeupdate', _this.handleTimeupdate);
        return _this;
    }

    _createClass(CurrentTime, [{
        key: 'handleTimeupdate',
        value: function handleTimeupdate(event) {
            this.render(this.player.currentTime());
        }
    }, {
        key: 'render',
        value: function render(time) {
            _larkplayer.DOM.textContent(this.el, (0, _timeFormat2.default)(Math.floor(time)));
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.render(0);
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            this.player.off('timeupdate', this.handleTimeupdate);

            _get(CurrentTime.prototype.__proto__ || Object.getPrototypeOf(CurrentTime.prototype), 'dispose', this).call(this);
        }
    }, {
        key: 'createEl',
        value: function createEl() {
            var currentTime = this.player.currentTime();

            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-current-time', this.options.className) },
                (0, _timeFormat2.default)(Math.floor(currentTime))
            );
        }
    }]);

    return CurrentTime;
}(_larkplayer.Component);

exports.default = CurrentTime;

/***/ }),

/***/ "./src/js/component/duration.js":
/*!**************************************!*\
  !*** ./src/js/component/duration.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _timeFormat = __webpack_require__(/*! ../util/time-format */ "./src/js/util/time-format.js");

var _timeFormat2 = _interopRequireDefault(_timeFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file duration.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui<yuhui06@baidu.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/11/10
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Duration = function (_Component) {
    _inherits(Duration, _Component);

    function Duration(player, options) {
        _classCallCheck(this, Duration);

        var _this = _possibleConstructorReturn(this, (Duration.__proto__ || Object.getPrototypeOf(Duration)).call(this, player, options));

        _this.handleLoadedMetaData = _this.handleLoadedMetaData.bind(_this);

        _this.player.on('durationchange', _this.handleLoadedMetaData);
        _this.player.on('loadedmetadata', _this.handleLoadedMetaData);
        return _this;
    }

    _createClass(Duration, [{
        key: 'handleLoadedMetaData',
        value: function handleLoadedMetaData(event) {
            _larkplayer.DOM.textContent(this.el, (0, _timeFormat2.default)(Math.floor(this.player.duration())));
        }
    }, {
        key: 'reset',
        value: function reset() {
            _larkplayer.DOM.textContent(this.el, '');
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            this.player.off('durationchange', this.handleLoadedMetaData);
            this.player.off('loadedmetadata', this.handleLoadedMetaData);

            _get(Duration.prototype.__proto__ || Object.getPrototypeOf(Duration.prototype), 'dispose', this).call(this);
        }
    }, {
        key: 'createEl',
        value: function createEl() {
            // @todo 暂时将 duration 的值写在这，后面需要处理下对于已经发生的事件怎么办
            var durationContent = (0, _timeFormat2.default)(Math.floor(this.player.duration()));

            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-duration', this.options.className) },
                durationContent
            );
        }
    }]);

    return Duration;
}(_larkplayer.Component);

exports.default = Duration;

/***/ }),

/***/ "./src/js/component/error-pc.js":
/*!**************************************!*\
  !*** ./src/js/component/error-pc.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file error.js 播放器出错时显示 pc 版
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhuiyuhui06
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2018/3/8
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ErrorPc = function (_Component) {
    _inherits(ErrorPc, _Component);

    function ErrorPc(player, options) {
        _classCallCheck(this, ErrorPc);

        var _this = _possibleConstructorReturn(this, (ErrorPc.__proto__ || Object.getPrototypeOf(ErrorPc)).call(this, player, options));

        _this.handleError = _this.handleError.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);

        _this.player.on('error', _this.handleError);
        _this.on('click', _this.handleClick);

        _this.textEl = _larkplayer.DOM.$('.lark-error-text', _this.el);
        return _this;
    }

    _createClass(ErrorPc, [{
        key: 'handleClick',
        value: function handleClick() {
            var _this2 = this;

            var src = this.player.src();
            this.player.reset();
            setTimeout(function () {
                _this2.player.src(src);
                _this2.player.play();
            }, 0);
        }
    }, {
        key: 'handleError',
        value: function handleError(event) {
            var error = this.player.tech.el.error;
            var text = void 0;
            switch (parseInt(error.code, 10)) {
                // MEDIA_ERR_ABORTED
                case 1:
                    text = '加载失败，点击重试(MEDIA_ERR_ABORTED)';
                    break;
                // MEDIA_ERR_NETWORK
                case 2:
                    text = '加载失败，请检查您的网络(MEDIA_ERR_NETWORK)';
                    break;
                // MEDIA_ERR_DECODE
                case 3:
                    text = '视频解码失败(MEDIA_ERR_DECODE)';
                    break;
                // MEDIA_ERR_SRC_NOT_SUPPORTED
                case 4:
                    text = '加载失败，该资源无法访问或者浏览器不支持该视频类型(MEDIA_ERR_SRC_NOT_SUPPORTED)';
                    break;
                default:
                    text = '加载失败，点击重试';
            }

            _larkplayer.DOM.replaceContent(this.textEl, text);
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            this.player.off('error', this.handleError);
            this.off('click', this.handleClick);

            this.textEl = null;
            _get(ErrorPc.prototype.__proto__ || Object.getPrototypeOf(ErrorPc.prototype), 'dispose', this).call(this);
        }
    }, {
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-error', 'lark-error--pc', this.options.className)
                },
                _larkplayer.Component.createElement(
                    'div',
                    { className: 'lark-error-cnt' },
                    _larkplayer.Component.createElement(
                        'div',
                        { className: 'lark-error-text' },
                        '\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5'
                    )
                )
            );
        }
    }]);

    return ErrorPc;
}(_larkplayer.Component);

exports.default = ErrorPc;

/***/ }),

/***/ "./src/js/component/error.js":
/*!***********************************!*\
  !*** ./src/js/component/error.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file error.js 播放器出错时显示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui<yuhui06@baidu.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/11/16
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Error = function (_Component) {
    _inherits(Error, _Component);

    function Error(player, options) {
        _classCallCheck(this, Error);

        var _this = _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).call(this, player, options));

        _this.handleError = _this.handleError.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        _this.textEl = _larkplayer.DOM.$('.lark-error-cnt__text', _this.el);

        _this.player.on('error', _this.handleError);
        _this.on('click', _this.handleClick);
        return _this;
    }

    _createClass(Error, [{
        key: 'handleError',
        value: function handleError(event) {
            /* eslint-disable no-console */
            console.log(event, event.detail);
            /* eslint-enable no-console */

            var error = this.player.tech.el.error;
            var defaultText = '加载失败，点击重试';
            var text = void 0;
            switch (parseInt(error.code, 10)) {
                // MEDIA_ERR_ABORTED
                case 1:
                    text = defaultText + '(ERR_ABORTED)';
                    break;
                // MEDIA_ERR_NETWORK
                case 2:
                    text = defaultText + '(ERR_NETWORK)';
                    break;
                // MEDIA_ERR_DECODE
                case 3:
                    text = defaultText + '(ERR_DECODE)';
                    break;
                // MEDIA_ERR_SRC_NOT_SUPPORTED
                case 4:
                    text = defaultText + '(ERR_SRC)';
                    break;
                default:
                    text = defaultText;
            }

            _larkplayer.DOM.replaceContent(this.textEl, text);
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            var _this2 = this;

            var src = this.player.src();
            this.player.reset();
            setTimeout(function () {
                _this2.player.src(src);
                _this2.player.play();
            }, 0);
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            this.player.off('error', this.handleError);
            this.off('click', this.handleClick);
            this.textEl = null;

            _get(Error.prototype.__proto__ || Object.getPrototypeOf(Error.prototype), 'dispose', this).call(this);
        }
    }, {
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-error', 'lark-error--mobile', this.options.className)
                },
                _larkplayer.Component.createElement(
                    'div',
                    { className: 'lark-error-cnt' },
                    _larkplayer.Component.createElement('span', { className: 'lark-error-cnt__spinner lark-icon-loading' }),
                    _larkplayer.Component.createElement(
                        'span',
                        { className: 'lark-error-cnt__text' },
                        '\u52A0\u8F7D\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u8BD5'
                    )
                )
            );
        }
    }]);

    return Error;
}(_larkplayer.Component);

exports.default = Error;

/***/ }),

/***/ "./src/js/component/fullscreen-button.js":
/*!***********************************************!*\
  !*** ./src/js/component/fullscreen-button.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _document = __webpack_require__(/*! global/document */ "./node_modules/global/document.js");

var _document2 = _interopRequireDefault(_document);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _tooltip = __webpack_require__(/*! ./tooltip */ "./src/js/component/tooltip.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file fullscreen-button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui<yuhui06@baidu.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/11/5
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var featureDetector = _larkplayer.util.featureDetector;

var FullscreenButton = function (_Component) {
    _inherits(FullscreenButton, _Component);

    function FullscreenButton(player, options) {
        _classCallCheck(this, FullscreenButton);

        var _this = _possibleConstructorReturn(this, (FullscreenButton.__proto__ || Object.getPrototypeOf(FullscreenButton)).call(this, player, options));

        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleMouseOver = _this.handleMouseOver.bind(_this);
        _this.handleMouseOut = _this.handleMouseOut.bind(_this);

        _this.on('click', _this.handleClick);

        if (!featureDetector.touch) {
            _this.fullscreenButton = _larkplayer.DOM.$('.lark-request-fullscreen', _this.el);
            _this.exitFullscreenButton = _larkplayer.DOM.$('.lark-exit-fullscreen', _this.el);

            _larkplayer.Events.on(_this.fullscreenButton, 'mouseover', _this.handleMouseOver);
            _larkplayer.Events.on(_this.exitFullscreenButton, 'mouseover', _this.handleMouseOver);

            _this.on('mouseout', _this.handleMouseOut);
        }
        return _this;
    }

    _createClass(FullscreenButton, [{
        key: 'handleClick',
        value: function handleClick() {
            if (!this.player.isFullscreen()) {
                this.player.requestFullscreen();
            } else {
                this.player.exitFullscreen();
            }

            _tooltip2.default.hide();
        }
    }, {
        key: 'handleMouseOver',
        value: function handleMouseOver(event) {
            _tooltip2.default.show({
                hostEl: event.target,
                placement: 'top',
                margin: 16,
                content: event.target.title
            });
        }
    }, {
        key: 'handleMouseOut',
        value: function handleMouseOut(event) {
            _tooltip2.default.hide();
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            this.off('click', this.handleClick);

            if (!featureDetector.touch) {
                _larkplayer.Events.off(this.fullscreenButton, 'mouseover', this.handleMouseOver);
                _larkplayer.Events.off(this.exitFullscreenButton, 'mouseover', this.handleMouseOver);
                this.fullscreenButton = null;
                this.exitFullscreenButton = null;

                this.off('mouseout', this.handleMouseOut);
            }

            _get(FullscreenButton.prototype.__proto__ || Object.getPrototypeOf(FullscreenButton.prototype), 'dispose', this).call(this);
        }
    }, {
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-fullscreen-button', this.options.className) },
                _larkplayer.Component.createElement('div', { className: 'lark-request-fullscreen', title: '\u5168\u5C4F' }),
                _larkplayer.Component.createElement('div', { className: 'lark-exit-fullscreen', title: '\u9000\u51FA\u5168\u5C4F' })
            );
        }
    }]);

    return FullscreenButton;
}(_larkplayer.Component);

exports.default = FullscreenButton;

/***/ }),

/***/ "./src/js/component/gradient-bottom.js":
/*!*********************************************!*\
  !*** ./src/js/component/gradient-bottom.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 播放器 UI loading
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui<yuhui06@baidu.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/11/9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var GradientBottom = function (_Component) {
    _inherits(GradientBottom, _Component);

    function GradientBottom() {
        _classCallCheck(this, GradientBottom);

        return _possibleConstructorReturn(this, (GradientBottom.__proto__ || Object.getPrototypeOf(GradientBottom)).apply(this, arguments));
    }

    _createClass(GradientBottom, [{
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement('div', { className: (0, _classnames2.default)('lark-gradient-bottom', this.options.className) });
        }
    }]);

    return GradientBottom;
}(_larkplayer.Component);

exports.default = GradientBottom;

/***/ }),

/***/ "./src/js/component/loading-pc.js":
/*!****************************************!*\
  !*** ./src/js/component/loading-pc.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 播放器 UI loading pc 版
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui06
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2018/3/8
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var LoadingPc = function (_Component) {
    _inherits(LoadingPc, _Component);

    function LoadingPc() {
        _classCallCheck(this, LoadingPc);

        return _possibleConstructorReturn(this, (LoadingPc.__proto__ || Object.getPrototypeOf(LoadingPc)).apply(this, arguments));
    }

    _createClass(LoadingPc, [{
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-loading', 'lark-loading--pc', this.options.className)
                },
                _larkplayer.Component.createElement('div', { className: 'lark-loading-spinner' })
            );
        }
    }]);

    return LoadingPc;
}(_larkplayer.Component);

exports.default = LoadingPc;

/***/ }),

/***/ "./src/js/component/loading.js":
/*!*************************************!*\
  !*** ./src/js/component/loading.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 播放器 UI loading
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui<yuhui06@baidu.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/11/9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Loading = function (_Component) {
    _inherits(Loading, _Component);

    function Loading() {
        _classCallCheck(this, Loading);

        return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
    }

    _createClass(Loading, [{
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-loading', 'lark-loading--mobile', this.options.className)
                },
                _larkplayer.Component.createElement(
                    'div',
                    { className: 'lark-loading-cnt' },
                    _larkplayer.Component.createElement('span', { className: 'lark-loading-cnt__spinner lark-icon-loading' }),
                    _larkplayer.Component.createElement(
                        'span',
                        { className: 'lark-loading-cnt__text' },
                        '\u6B63\u5728\u52A0\u8F7D'
                    )
                )
            );
        }
    }]);

    return Loading;
}(_larkplayer.Component);

exports.default = Loading;

/***/ }),

/***/ "./src/js/component/not-support.js":
/*!*****************************************!*\
  !*** ./src/js/component/not-support.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file not-support.js 不支持 html5 video 标签时提示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui06
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2018/3/29
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var NotSupport = function (_Component) {
    _inherits(NotSupport, _Component);

    function NotSupport() {
        _classCallCheck(this, NotSupport);

        return _possibleConstructorReturn(this, (NotSupport.__proto__ || Object.getPrototypeOf(NotSupport)).apply(this, arguments));
    }

    _createClass(NotSupport, [{
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-not-support-notice', this.options.className) },
                _larkplayer.Component.createElement(
                    'div',
                    { className: 'lark-not-support-notice__text' },
                    '\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 html5 \u89C6\u9891\u64AD\u653E\uFF0C\u8BF7\u5347\u7EA7\u6D4F\u89C8\u5668\u7248\u672C\u6216\u66F4\u6362\u4E3A chrome \u6D4F\u89C8\u5668'
                )
            );
        }
    }]);

    return NotSupport;
}(_larkplayer.Component);

exports.default = NotSupport;

/***/ }),

/***/ "./src/js/component/play-button.js":
/*!*****************************************!*\
  !*** ./src/js/component/play-button.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file playButton.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui<yuhui06@baidu.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/11/7
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var featureDetector = _larkplayer.util.featureDetector;

var PlayButton = function (_Component) {
    _inherits(PlayButton, _Component);

    function PlayButton(player, options) {
        _classCallCheck(this, PlayButton);

        var _this = _possibleConstructorReturn(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).call(this, player, options));

        _this.togglePlay = _this.togglePlay.bind(_this);

        // 注意 这里需要将 context（第二个参数） 设置为 this.el，因为这时 DOM 元素还没有插入到 document 里，所以在 document 里是查不到这个元素的
        _this.playBtn = _larkplayer.DOM.$('.lark-play-button__play', _this.el);
        _this.pauseBtn = _larkplayer.DOM.$('.lark-play-button__pause', _this.el);

        _larkplayer.Events.on(_this.playBtn, 'click', _this.togglePlay);
        _larkplayer.Events.on(_this.pauseBtn, 'click', _this.togglePlay);
        return _this;
    }

    _createClass(PlayButton, [{
        key: 'togglePlay',
        value: function togglePlay(event, isPlay) {
            if (this.player.paused()) {
                this.player.play();
            } else {
                this.player.pause();
            }
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            _larkplayer.Events.off(this.playBtn, 'click', this.togglePlay);
            _larkplayer.Events.off(this.pauseBtn, 'click', this.togglePlay);
            this.playBtn = null;
            this.pauseBtn = null;

            _get(PlayButton.prototype.__proto__ || Object.getPrototypeOf(PlayButton.prototype), 'dispose', this).call(this);
        }
    }, {
        key: 'createEl',
        value: function createEl() {
            var mobileClassMap = {
                container: 'lark-play-button--mobile',
                btnPlay: 'lark-play-button__play',
                btnPause: 'lark-play-button__pause'
            };
            var pcClassMap = {
                container: 'lark-play-button-pc',
                btnPlay: 'lark-icon-play lark-play-button__play',
                btnPause: 'lark-icon-pause lark-play-button__pause'
            };
            var classMap = featureDetector.touch ? mobileClassMap : pcClassMap;
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-play-button', classMap.container) },
                _larkplayer.Component.createElement('div', { className: classMap.btnPlay }),
                _larkplayer.Component.createElement('div', { className: classMap.btnPause })
            );
        }
    }]);

    return PlayButton;
}(_larkplayer.Component);

exports.default = PlayButton;

/***/ }),

/***/ "./src/js/component/slider.js":
/*!************************************!*\
  !*** ./src/js/component/slider.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file slide.js 所有需要拖动的元素的父类
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui06
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2018/3/15
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Slider = function (_Component) {
    _inherits(Slider, _Component);

    function Slider(player, options) {
        _classCallCheck(this, Slider);

        var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, player, options));

        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleSlideStart = _this.handleSlideStart.bind(_this);
        _this.handleSlideMove = _this.handleSlideMove.bind(_this);
        _this.handleSlideEnd = _this.handleSlideEnd.bind(_this);
        _this.onClick = _this.onClick.bind(_this);
        _this.onSlideStart = _this.onSlideStart.bind(_this);
        _this.onSlideMove = _this.onSlideMove.bind(_this);
        _this.onSlideEnd = _this.onSlideEnd.bind(_this);
        return _this;
    }

    _createClass(Slider, [{
        key: 'onClick',
        value: function onClick(event) {}
    }, {
        key: 'onSlideStart',
        value: function onSlideStart(event) {}
    }, {
        key: 'onSlideMove',
        value: function onSlideMove(event) {}
    }, {
        key: 'onSlideEnd',
        value: function onSlideEnd(event) {}
    }, {
        key: 'handleClick',
        value: function handleClick(event) {
            this.onClick(event);
        }
    }, {
        key: 'handleSlideStart',
        value: function handleSlideStart(event) {
            this.onSlideStart(event);

            _larkplayer.DOM.addClass(this.el, 'lark-sliding');

            _larkplayer.Events.on(document, 'touchmove', this.handleSlideMove);
            _larkplayer.Events.on(document, 'touchend', this.handleSlideEnd);
            _larkplayer.Events.on(document, 'mousemove', this.handleSlideMove);
            _larkplayer.Events.on(document, 'mouseup', this.handleSlideEnd);
        }
    }, {
        key: 'handleSlideMove',
        value: function handleSlideMove(event) {
            this.onSlideMove(event);
        }
    }, {
        key: 'handleSlideEnd',
        value: function handleSlideEnd(event) {
            this.onSlideEnd(event);

            _larkplayer.DOM.removeClass(this.el, 'lark-sliding');

            _larkplayer.Events.off(document, 'touchmove', this.handleSlideMove);
            _larkplayer.Events.off(document, 'touchend', this.handleSlideEnd);
            _larkplayer.Events.off(document, 'mousemove', this.handleSlideMove);
            _larkplayer.Events.off(document, 'mouseup', this.handleSlideEnd);
        }
    }]);

    return Slider;
}(_larkplayer.Component);

exports.default = Slider;

/***/ }),

/***/ "./src/js/component/tooltip.js":
/*!*************************************!*\
  !*** ./src/js/component/tooltip.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = __webpack_require__(/*! lodash.assign */ "./node_modules/lodash.assign/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file tooltip.js 用于展示提示性文字
 * @author yuhui06
 * @date 2018/3/22
 * @todo 多个播放器实例并存时有点鸡肋
 */

exports.default = {
    id: 'lark-tooltip',
    el: null,
    timeoutHandler: null,
    initial: function initial(container) {
        // if (this.el) {
        //     return;
        // }

        if (!_larkplayer.DOM.isEl(container)) {
            return;
        }

        var el = _larkplayer.DOM.createElement('div', {
            className: this.id
        });
        _larkplayer.DOM.appendContent(container, el);

        this.el = el;
        this.container = container;
    },
    normalize: function normalize(options) {
        return (0, _lodash2.default)({
            timeout: 0,
            content: '',
            top: 0,
            left: 0,
            margin: 0,
            hostEl: null,
            placement: 'top',
            isFollowMouse: false,
            // 这个 event 有点鸡肋，但要获取鼠标位置的时候（即 isFollowMouse: true），必须得从 event 参数里获取
            event: null
        }, options);
    },
    getCoordinate: function getCoordinate(options) {
        var coordinate = void 0;

        switch (options.placement) {
            case 'top':
                // @todo 可以 cache
                var hostElRect = _larkplayer.DOM.getBoundingClientRect(options.hostEl);
                var containerRect = _larkplayer.DOM.getBoundingClientRect(this.container);

                var left = void 0;
                if (options.isFollowMouse) {
                    var pointerPos = _larkplayer.DOM.getPointerPosition(options.hostEl, options.event);
                    left = hostElRect.left - containerRect.left + hostElRect.width * pointerPos.x - this.el.offsetWidth / 2;
                } else {
                    left = hostElRect.left - containerRect.left + (hostElRect.width - this.el.offsetWidth) / 2;
                }

                var outOfBounds = left + this.el.offsetWidth - this.container.offsetWidth;
                if (outOfBounds > 0) {
                    left = left - outOfBounds;
                }

                var top = hostElRect.top - containerRect.top - this.el.offsetHeight - options.margin;
                coordinate = { left: left, top: top };
                break;
        }

        return coordinate;
    },
    show: function show(options) {
        var _this = this;

        clearTimeout(this.timeoutHandler);

        options = this.normalize(options);

        if (!_larkplayer.DOM.isEl(options.hostEl)) {
            return;
        }

        var container = _larkplayer.DOM.parent(options.hostEl, 'larkplayer');
        var el = _larkplayer.DOM.$('.lark-tooltip', container);

        // 多个播放器实例并存时需要不断切换 this.el 和 this.container
        if (el) {
            this.el = el;
            this.container = container;
        } else {
            this.initial(container);
        }

        // if (!this.el) {
        //     const container = DOM.parent(options.hostEl, 'larkplayer');
        //     this.initial(container);
        // }

        _larkplayer.DOM.replaceContent(this.el, options.content);

        setTimeout(function () {
            // 元素 display none 时获取到的 offsetHeight 和 offsetWidth 是 0
            // 所以先以 visibility: hidden 的方式“显示”元素，以获取正确的高宽
            _this.el.style.visibility = 'hidden';
            _this.el.style.display = 'block';
            var coordinate = _this.getCoordinate(options);
            _this.el.style.top = coordinate.top + 'px';
            _this.el.style.left = coordinate.left + 'px';
            _this.el.style.visibility = 'visible';
        }, 0);
    },
    hide: function hide() {
        var _this2 = this;

        if (!this.el) {
            return;
        }

        this.timeoutHandler = setTimeout(function () {
            _this2.el.style.display = 'none';
        });
    }
};

/***/ }),

/***/ "./src/js/component/volume-mobile.js":
/*!*******************************************!*\
  !*** ./src/js/component/volume-mobile.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file larkplayer 移动端声音按钮
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui06@baidu.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2019/6/16
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MUTED_CLASS_NAME = 'lark-volume-mobile--muted';
var NORMAL_CLASS_NAME = 'lark-volume-mobile--normal';

var Volume = function (_Component) {
    _inherits(Volume, _Component);

    function Volume(player, options) {
        _classCallCheck(this, Volume);

        var _this = _possibleConstructorReturn(this, (Volume.__proto__ || Object.getPrototypeOf(Volume)).call(this, player, options));

        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleVolumeChange = _this.handleVolumeChange.bind(_this);

        _this.on('click', _this.handleClick);
        _this.player.on('volumechange', _this.handleVolumeChange);
        _this.player.on('ready', _this.handleVolumeChange);
        return _this;
    }

    _createClass(Volume, [{
        key: 'handleVolumeChange',
        value: function handleVolumeChange() {
            _larkplayer.DOM.removeClass(this.el, MUTED_CLASS_NAME);
            _larkplayer.DOM.removeClass(this.el, NORMAL_CLASS_NAME);

            var isMuted = this.player.muted();
            var className = isMuted ? MUTED_CLASS_NAME : NORMAL_CLASS_NAME;
            _larkplayer.DOM.addClass(this.el, className);
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            var isMuted = this.player.muted();
            this.player.muted(!isMuted);
        }
    }, {
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement('div', { className: 'lark-volume-mobile' });
        }
    }]);

    return Volume;
}(_larkplayer.Component);

exports.default = Volume;

/***/ }),

/***/ "./src/js/component/volume.js":
/*!************************************!*\
  !*** ./src/js/component/volume.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _slider = __webpack_require__(/*! ./slider */ "./src/js/component/slider.js");

var _slider2 = _interopRequireDefault(_slider);

var _tooltip = __webpack_require__(/*! ./tooltip */ "./src/js/component/tooltip.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 音量 UI 组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui06
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2018/3/9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2018/4/25 现在通过 js 修改音量也会触发 UI 改变（yuhui06）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

var Volume = function (_Slider) {
    _inherits(Volume, _Slider);

    function Volume(player, options) {
        _classCallCheck(this, Volume);

        var _this = _possibleConstructorReturn(this, (Volume.__proto__ || Object.getPrototypeOf(Volume)).call(this, player, options));

        _this.volumeRecord = {
            last: _this.player.volume(),
            current: _this.player.volume()
        };

        _this.onSlideStart = _this.onSlideStart.bind(_this);
        _this.onSlideMove = _this.onSlideMove.bind(_this);
        _this.onSlideEnd = _this.onSlideEnd.bind(_this);
        _this.onClick = _this.onClick.bind(_this);
        _this.update = _this.update.bind(_this);
        _this.iconClick = _this.iconClick.bind(_this);
        _this.handleIconMouseOver = _this.handleIconMouseOver.bind(_this);
        _this.handleIconMouseOut = _this.handleIconMouseOut.bind(_this);
        _this.switchStatus = _this.switchStatus.bind(_this);
        _this.clearStatus = _this.clearStatus.bind(_this);
        _this.handleVolumeChange = _this.handleVolumeChange.bind(_this);

        _this.line = _larkplayer.DOM.$('.lark-volume-line__line', _this.el);
        _this.ball = _larkplayer.DOM.$('.lark-volume-line__ball', _this.el);
        _this.icon = _larkplayer.DOM.$('.lark-volume-icon', _this.el);

        _larkplayer.Events.on(_this.icon, 'click', _this.iconClick);
        _larkplayer.Events.on(_this.icon, 'mouseover', _this.handleIconMouseOver);
        _larkplayer.Events.on(_this.icon, 'mouseout', _this.handleIconMouseOut);
        _larkplayer.Events.on(_this.line, 'click', _this.handleClick);
        _larkplayer.Events.on(_this.ball, 'mousedown', _this.handleSlideStart);
        _larkplayer.Events.on(_this.ball, 'touchstart', _this.handleSlideStart);

        _this.player.on('volumechange', _this.handleVolumeChange);
        return _this;
    }

    _createClass(Volume, [{
        key: 'onSlideStart',
        value: function onSlideStart(event) {
            this.isSliding = true;
        }
    }, {
        key: 'onSlideMove',
        value: function onSlideMove(event) {
            event.preventDefault();
            var pos = _larkplayer.DOM.getPointerPosition(this.line, event);
            // this.update(pos.x);
            this.player.volume(pos.x);

            if (this.player.volume() !== 0) {
                this.player.muted(false);
            }
        }
    }, {
        key: 'onSlideEnd',
        value: function onSlideEnd(event) {
            this.isSliding = false;
            this.updateVolumeRecord();
        }
    }, {
        key: 'updateVolumeRecord',
        value: function updateVolumeRecord() {
            this.volumeRecord = {
                last: this.volumeRecord.current,
                current: this.player.volume()
            };
        }
    }, {
        key: 'handleVolumeChange',
        value: function handleVolumeChange() {
            if (this.player.muted()) {
                this.update(0);
            } else {
                this.update(this.player.volume());
            }

            if (!this.isSliding) {
                this.updateVolumeRecord();
            }
        }
    }, {
        key: 'onClick',
        value: function onClick(event) {
            var pos = _larkplayer.DOM.getPointerPosition(this.line, event);
            this.player.volume(pos.x);

            if (this.player.volume() !== 0) {
                this.player.muted(false);
            }
        }
    }, {
        key: 'update',
        value: function update(percent) {
            var lineWidth = this.line.offsetWidth;

            this.ball.style.left = percent * lineWidth + 'px';
            this.switchStatus(percent);
        }
    }, {
        key: 'iconClick',
        value: function iconClick(event) {
            if (this.player.volume() && !this.player.muted()) {
                this.player.volume(0);
            } else {
                this.player.volume(this.volumeRecord.last);
                this.player.muted(false);
            }

            this.showTooltip();
        }
    }, {
        key: 'showTooltip',
        value: function showTooltip() {
            _tooltip2.default.show({
                hostEl: this.icon,
                margin: 16,
                content: this.player.volume() && !this.player.muted() ? '静音' : '取消静音'
            });
        }
    }, {
        key: 'handleIconMouseOver',
        value: function handleIconMouseOver() {
            this.showTooltip();
        }
    }, {
        key: 'handleIconMouseOut',
        value: function handleIconMouseOut(event) {
            _tooltip2.default.hide();
        }
    }, {
        key: 'switchStatus',
        value: function switchStatus(volume) {
            this.clearStatus();

            var status = void 0;
            if (volume === 0) {
                status = 'small';
            } else if (volume <= 0.6 && volume > 0) {
                status = 'middle';
            } else if (volume > 0.6) {
                status = 'large';
            }

            _larkplayer.DOM.addClass(this.icon, 'lark-icon-sound-' + status);
        }
    }, {
        key: 'clearStatus',
        value: function clearStatus() {
            var _this2 = this;

            var statusClass = ['lark-icon-sound-small', 'lark-icon-sound-middle', 'lark-icon-sound-large'];
            statusClass.forEach(function (className) {
                _larkplayer.DOM.removeClass(_this2.icon, className);
            });
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            _larkplayer.Events.off(this.icon, 'click', this.iconClick);
            _larkplayer.Events.off(this.icon, 'mouseover', this.handleIconMouseOver);
            _larkplayer.Events.off(this.icon, 'mouseout', this.handleIconMouseOut);
            _larkplayer.Events.off(this.line, 'click', this.handleClick);
            _larkplayer.Events.off(this.ball, 'mousedown', this.handleSlideStart);
            _larkplayer.Events.off(this.ball, 'touchstart', this.handleSlideStart);

            this.icon = null;
            this.line = null;
            this.ball = null;

            this.player.off('volumechange', this.handleVolumeChange);

            _get(Volume.prototype.__proto__ || Object.getPrototypeOf(Volume.prototype), 'dispose', this).call(this);
        }
    }, {
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-volume', this.options.className) },
                _larkplayer.Component.createElement('div', { className: 'lark-volume-icon lark-icon-sound-large' }),
                _larkplayer.Component.createElement(
                    'div',
                    { className: 'lark-volume-line' },
                    _larkplayer.Component.createElement(
                        'div',
                        { className: 'lark-volume-line__line' },
                        _larkplayer.Component.createElement('div', { className: 'lark-volume-line__line-padding' })
                    ),
                    _larkplayer.Component.createElement('div', { className: 'lark-volume-line__ball' })
                )
            );
        }
    }]);

    return Volume;
}(_slider2.default);

exports.default = Volume;

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @file 常量
 * @author yuhui06
 * @date 2019/3/15
 */

var ClassNames = exports.ClassNames = {
    LOADSTART: 'lark-status-loadstart',
    ENDED: 'lark-status-ended',
    PAUSED: 'lark-status-paused',
    ERROR: 'lark-status-error',
    SEEKING: 'lark-status-seeking',
    WAITING: 'lark-status-waiting',
    PLAYING: 'lark-status-playing',
    ACTIVE: 'lark-status-user-active',
    HAS_START: 'lark-status-has-start',
    CONTROLS_HIDE: 'lark-custom-controls-hide',
    ALL_SCREEN: 'lark-all-screen',
    LIVE_PLAY: 'lark-live-play'
};

var Events = exports.Events = {
    CONTROLS_SHOW: 'controlsshow',
    CONTROLS_HIDE: 'controlshide'
};

var ACTIVE_DURATION = exports.ACTIVE_DURATION = 3000;

var NORMAL_SCREEN_RATIO = exports.NORMAL_SCREEN_RATIO = 16 / 9;

/***/ }),

/***/ "./src/js/container/control-bar-pc.js":
/*!********************************************!*\
  !*** ./src/js/container/control-bar-pc.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _progressBar = __webpack_require__(/*! ./progress-bar */ "./src/js/container/progress-bar.js");

var _progressBar2 = _interopRequireDefault(_progressBar);

var _currentTime = __webpack_require__(/*! ../component/current-time */ "./src/js/component/current-time.js");

var _currentTime2 = _interopRequireDefault(_currentTime);

var _duration = __webpack_require__(/*! ../component/duration */ "./src/js/component/duration.js");

var _duration2 = _interopRequireDefault(_duration);

var _playButton = __webpack_require__(/*! ../component/play-button */ "./src/js/component/play-button.js");

var _playButton2 = _interopRequireDefault(_playButton);

var _fullscreenButton = __webpack_require__(/*! ../component/fullscreen-button */ "./src/js/component/fullscreen-button.js");

var _fullscreenButton2 = _interopRequireDefault(_fullscreenButton);

var _gradientBottom = __webpack_require__(/*! ../component/gradient-bottom */ "./src/js/component/gradient-bottom.js");

var _gradientBottom2 = _interopRequireDefault(_gradientBottom);

var _volume = __webpack_require__(/*! ../component/volume */ "./src/js/component/volume.js");

var _volume2 = _interopRequireDefault(_volume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file ControlBarPc 播放器操作按钮
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui<yuhui06@baidu.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/11/9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ControlBarPc = function (_Component) {
    _inherits(ControlBarPc, _Component);

    function ControlBarPc() {
        _classCallCheck(this, ControlBarPc);

        return _possibleConstructorReturn(this, (ControlBarPc.__proto__ || Object.getPrototypeOf(ControlBarPc)).apply(this, arguments));
    }

    _createClass(ControlBarPc, [{
        key: 'reset',
        value: function reset() {
            this.children.forEach(function (child) {
                child && child.reset && child.reset();
            });
        }
    }, {
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-control-bar-pc', this.options.className) },
                _larkplayer.Component.createElement(_gradientBottom2.default, null),
                _larkplayer.Component.createElement(_progressBar2.default, { className: 'lark-progress-bar-pc' }),
                _larkplayer.Component.createElement(
                    'div',
                    { className: 'lark-control__left' },
                    _larkplayer.Component.createElement(_playButton2.default, { className: 'lark-play-button-pc' }),
                    _larkplayer.Component.createElement(_volume2.default, null),
                    _larkplayer.Component.createElement(
                        'div',
                        { className: 'lark-time' },
                        _larkplayer.Component.createElement(_currentTime2.default, null),
                        _larkplayer.Component.createElement(
                            'span',
                            { className: 'lark-time-separator' },
                            '/'
                        ),
                        _larkplayer.Component.createElement(_duration2.default, null)
                    )
                ),
                _larkplayer.Component.createElement(
                    'div',
                    { className: 'lark-control__right' },
                    _larkplayer.Component.createElement(_fullscreenButton2.default, null)
                )
            );
        }
    }]);

    return ControlBarPc;
}(_larkplayer.Component);

exports.default = ControlBarPc;

/***/ }),

/***/ "./src/js/container/control-bar.js":
/*!*****************************************!*\
  !*** ./src/js/container/control-bar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _currentTime = __webpack_require__(/*! ../component/current-time */ "./src/js/component/current-time.js");

var _currentTime2 = _interopRequireDefault(_currentTime);

var _duration = __webpack_require__(/*! ../component/duration */ "./src/js/component/duration.js");

var _duration2 = _interopRequireDefault(_duration);

var _fullscreenButton = __webpack_require__(/*! ../component/fullscreen-button */ "./src/js/component/fullscreen-button.js");

var _fullscreenButton2 = _interopRequireDefault(_fullscreenButton);

var _volumeMobile = __webpack_require__(/*! ../component/volume-mobile */ "./src/js/component/volume-mobile.js");

var _volumeMobile2 = _interopRequireDefault(_volumeMobile);

var _progressBar = __webpack_require__(/*! ./progress-bar */ "./src/js/container/progress-bar.js");

var _progressBar2 = _interopRequireDefault(_progressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file ControlsBar 播放器控制条
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui<yuhui06@baidu.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/11/9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ControlBar = function (_Component) {
    _inherits(ControlBar, _Component);

    function ControlBar() {
        _classCallCheck(this, ControlBar);

        return _possibleConstructorReturn(this, (ControlBar.__proto__ || Object.getPrototypeOf(ControlBar)).apply(this, arguments));
    }

    _createClass(ControlBar, [{
        key: 'reset',
        value: function reset() {
            this.children.forEach(function (child) {
                child && child.reset && child.reset();
            });
        }
    }, {
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-control-bar', this.options.className) },
                _larkplayer.Component.createElement(_volumeMobile2.default, null),
                _larkplayer.Component.createElement(_currentTime2.default, null),
                _larkplayer.Component.createElement(_progressBar2.default, null),
                _larkplayer.Component.createElement(_duration2.default, null),
                _larkplayer.Component.createElement(_fullscreenButton2.default, null)
            );
        }
    }]);

    return ControlBar;
}(_larkplayer.Component);

exports.default = ControlBar;

/***/ }),

/***/ "./src/js/container/controls-mobile.js":
/*!*********************************************!*\
  !*** ./src/js/container/controls-mobile.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _controlBar = __webpack_require__(/*! ./control-bar */ "./src/js/container/control-bar.js");

var _controlBar2 = _interopRequireDefault(_controlBar);

var _progressBarSimple = __webpack_require__(/*! ./progress-bar-simple */ "./src/js/container/progress-bar-simple.js");

var _progressBarSimple2 = _interopRequireDefault(_progressBarSimple);

var _loading = __webpack_require__(/*! ../component/loading */ "./src/js/component/loading.js");

var _loading2 = _interopRequireDefault(_loading);

var _playButton = __webpack_require__(/*! ../component/play-button */ "./src/js/component/play-button.js");

var _playButton2 = _interopRequireDefault(_playButton);

var _notSupport = __webpack_require__(/*! ../component/not-support */ "./src/js/component/not-support.js");

var _notSupport2 = _interopRequireDefault(_notSupport);

var _error = __webpack_require__(/*! ../component/error */ "./src/js/component/error.js");

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlsMobile = function (_Component) {
    _inherits(ControlsMobile, _Component);

    function ControlsMobile() {
        _classCallCheck(this, ControlsMobile);

        return _possibleConstructorReturn(this, (ControlsMobile.__proto__ || Object.getPrototypeOf(ControlsMobile)).apply(this, arguments));
    }

    _createClass(ControlsMobile, [{
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-custom-controls', 'lark-custom-controls--mobile', this.options.className)
                },
                _larkplayer.Component.createElement(_controlBar2.default, null),
                _larkplayer.Component.createElement(_playButton2.default, null),
                _larkplayer.Component.createElement(_loading2.default, null),
                _larkplayer.Component.createElement(_error2.default, null),
                _larkplayer.Component.createElement(_progressBarSimple2.default, null),
                _larkplayer.Component.createElement(_notSupport2.default, null)
            );
        }
    }]);

    return ControlsMobile;
}(_larkplayer.Component);

exports.default = ControlsMobile;

/***/ }),

/***/ "./src/js/container/controls-pc.js":
/*!*****************************************!*\
  !*** ./src/js/container/controls-pc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _controlBarPc = __webpack_require__(/*! ./control-bar-pc */ "./src/js/container/control-bar-pc.js");

var _controlBarPc2 = _interopRequireDefault(_controlBarPc);

var _complete = __webpack_require__(/*! ../component/complete */ "./src/js/component/complete.js");

var _complete2 = _interopRequireDefault(_complete);

var _loadingPc = __webpack_require__(/*! ../component/loading-pc */ "./src/js/component/loading-pc.js");

var _loadingPc2 = _interopRequireDefault(_loadingPc);

var _notSupport = __webpack_require__(/*! ../component/not-support */ "./src/js/component/not-support.js");

var _notSupport2 = _interopRequireDefault(_notSupport);

var _errorPc = __webpack_require__(/*! ../component/error-pc */ "./src/js/component/error-pc.js");

var _errorPc2 = _interopRequireDefault(_errorPc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlsPc = function (_Component) {
    _inherits(ControlsPc, _Component);

    function ControlsPc() {
        _classCallCheck(this, ControlsPc);

        return _possibleConstructorReturn(this, (ControlsPc.__proto__ || Object.getPrototypeOf(ControlsPc)).apply(this, arguments));
    }

    _createClass(ControlsPc, [{
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-custom-controls', 'lark-custom-controls--pc', this.options.className)
                },
                _larkplayer.Component.createElement(_controlBarPc2.default, null),
                _larkplayer.Component.createElement(_loadingPc2.default, null),
                _larkplayer.Component.createElement(_errorPc2.default, null),
                _larkplayer.Component.createElement(_complete2.default, null),
                _larkplayer.Component.createElement(_notSupport2.default, null)
            );
        }
    }]);

    return ControlsPc;
}(_larkplayer.Component);

exports.default = ControlsPc;

/***/ }),

/***/ "./src/js/container/progress-bar-except-fill.js":
/*!******************************************************!*\
  !*** ./src/js/container/progress-bar-except-fill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _bufferBar = __webpack_require__(/*! ../component/buffer-bar */ "./src/js/component/buffer-bar.js");

var _bufferBar2 = _interopRequireDefault(_bufferBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file progress-bar.js 视频进度条
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui<yuhui06@baidu.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/11/6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    1) 写这个类主要是为了 DOM 结构，把 bufferBar 放到 progressBarExceptFill，这样才能方便地使用 flex 布局
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           => progressBar 的高度等于整个 controlBar 的高度，方便用户点击
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           => progressBar 中包含 progressBarExceptFill，这是 progressBar 的主体，使用 relative，方便子元素相对于他定位
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           => progressBarExceptFill 中包含 bufferBar。之所以把 bufferBar 放到里面，是因为定位方便。我之前试过将 bufferBar 放到跟 progressBarExceptFill
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *              同级然后通过 position: absolute 定位。但在 ios 和 安卓下是有问题的（奇怪的是 chrome 模拟器没问题）。绝对定位的元素被排挤到了父元素之外的空间
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *              可以自己做下实验外带参考下 https://www.w3.org/TR/css-flexbox-1/#abspos-items
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ProgressBarExceptFill = function (_Component) {
    _inherits(ProgressBarExceptFill, _Component);

    function ProgressBarExceptFill() {
        _classCallCheck(this, ProgressBarExceptFill);

        return _possibleConstructorReturn(this, (ProgressBarExceptFill.__proto__ || Object.getPrototypeOf(ProgressBarExceptFill)).apply(this, arguments));
    }

    _createClass(ProgressBarExceptFill, [{
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-progress-bar-except-fill', this.options.className) },
                _larkplayer.Component.createElement('div', { className: 'lark-progress-bar__background' }),
                _larkplayer.Component.createElement(
                    'div',
                    { className: 'lark-progress-bar__line' },
                    _larkplayer.Component.createElement(
                        'div',
                        { className: 'lark-progress-bar__line__handle' },
                        _larkplayer.Component.createElement('div', { className: 'lark-progress-bar__line__handle-except-fill' })
                    )
                ),
                _larkplayer.Component.createElement(_bufferBar2.default, null)
            );
        }
    }]);

    return ProgressBarExceptFill;
}(_larkplayer.Component);

exports.default = ProgressBarExceptFill;

/***/ }),

/***/ "./src/js/container/progress-bar-simple.js":
/*!*************************************************!*\
  !*** ./src/js/container/progress-bar-simple.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _bufferBar = __webpack_require__(/*! ../component/buffer-bar */ "./src/js/component/buffer-bar.js");

var _bufferBar2 = _interopRequireDefault(_bufferBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file progress-bar-simple.js 简易版的进度条，当控制条消失时在视频底部显示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui<yuhui06@baidu.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/11/10
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ProgressBarSimple = function (_Component) {
    _inherits(ProgressBarSimple, _Component);

    function ProgressBarSimple(player, options) {
        _classCallCheck(this, ProgressBarSimple);

        var _this = _possibleConstructorReturn(this, (ProgressBarSimple.__proto__ || Object.getPrototypeOf(ProgressBarSimple)).call(this, player, options));

        _this.handleTimeUpdate = _this.handleTimeUpdate.bind(_this);
        _this.line = _larkplayer.DOM.$('.lark-progress-bar__line', _this.el);
        player.on('timeupdate', _this.handleTimeUpdate);
        return _this;
    }

    _createClass(ProgressBarSimple, [{
        key: 'handleTimeUpdate',
        value: function handleTimeUpdate() {
            // 进度条
            var percent = 0;
            var duration = this.player.duration();
            var currentTime = this.player.currentTime();
            if (duration && currentTime) {
                // 保留两位小数四舍五入
                percent = Math.round(currentTime / duration * 100) / 100;
                // 转换为百分数
                percent = percent * 100 + '%';
            }

            this.line.style.width = percent;
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.line.style.width = 0;
            this.children.forEach(function (child) {
                child && child.reset && child.reset();
            });
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            this.player.off('timeupdate', this.handleTimeUpdate);
            this.line = null;
            _get(ProgressBarSimple.prototype.__proto__ || Object.getPrototypeOf(ProgressBarSimple.prototype), 'dispose', this).call(this);
        }
    }, {
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-progress-bar--simple', this.options.className) },
                _larkplayer.Component.createElement('div', { className: 'lark-progress-bar__background' }),
                _larkplayer.Component.createElement('div', { className: 'lark-progress-bar__line' }),
                _larkplayer.Component.createElement(_bufferBar2.default, null)
            );
        }
    }]);

    return ProgressBarSimple;
}(_larkplayer.Component);

exports.default = ProgressBarSimple;

/***/ }),

/***/ "./src/js/container/progress-bar.js":
/*!******************************************!*\
  !*** ./src/js/container/progress-bar.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _slider = __webpack_require__(/*! ../component/slider */ "./src/js/component/slider.js");

var _slider2 = _interopRequireDefault(_slider);

var _tooltip = __webpack_require__(/*! ../component/tooltip */ "./src/js/component/tooltip.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _progressBarExceptFill = __webpack_require__(/*! ./progress-bar-except-fill */ "./src/js/container/progress-bar-except-fill.js");

var _progressBarExceptFill2 = _interopRequireDefault(_progressBarExceptFill);

var _timeFormat = __webpack_require__(/*! ../util/time-format */ "./src/js/util/time-format.js");

var _timeFormat2 = _interopRequireDefault(_timeFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file progress-bar.js 视频进度条
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui<yuhui06@baidu.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/11/6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2018/3/15 支持 pc 端拖拽和 tooltip
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

var featureDetector = _larkplayer.util.featureDetector;

var ProgressBar = function (_Slider) {
    _inherits(ProgressBar, _Slider);

    function ProgressBar(player, options) {
        _classCallCheck(this, ProgressBar);

        var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, player, options));

        _this.handleTimeUpdate = _this.handleTimeUpdate.bind(_this);
        _this.onClick = _this.onClick.bind(_this);
        _this.onSlideStart = _this.onSlideStart.bind(_this);
        _this.onSlideMove = _this.onSlideMove.bind(_this);
        _this.onSlideEnd = _this.onSlideEnd.bind(_this);
        _this.update = _this.update.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.handleMouseOver = _this.handleMouseOver.bind(_this);
        _this.handleMouseMove = _this.handleMouseMove.bind(_this);
        _this.handleMouseOut = _this.handleMouseOut.bind(_this);

        _this.line = _larkplayer.DOM.$('.lark-progress-bar__line', _this.el);
        _this.lineHandle = _larkplayer.DOM.$('.lark-progress-bar__line__handle', _this.el);
        _this.hoverLight = _larkplayer.DOM.$('.lark-progress-bar-hover-light', _this.el);
        _this.paddingEl = _larkplayer.DOM.$('.lark-progress-bar-padding', _this.el);

        _this.player.on('timeupdate', _this.handleTimeUpdate);
        _this.on('click', _this.handleClick);
        _this.on('touchstart', _this.handleSlideStart);
        _this.player.on('ready', function () {
            _this.currentTimeEl = _larkplayer.DOM.$('.lark-current-time', _this.player.el);
        });

        if (!featureDetector.touch) {
            _this.on('mousedown', _this.handleSlideStart);
            _this.on('mouseover', _this.handleMouseOver);
            _this.on('mousemove', _this.handleMouseMove);
            _this.on('mouseout', _this.handleMouseOut);
        }
        return _this;
    }

    _createClass(ProgressBar, [{
        key: 'handleTimeUpdate',
        value: function handleTimeUpdate() {
            // 进度条
            var percent = 0;
            var duration = this.player.duration();
            var currentTime = this.player.currentTime();
            if (duration && currentTime) {
                percent = currentTime / duration * 100 + '%';
            }

            this.line.style.width = percent;
        }
    }, {
        key: 'onClick',
        value: function onClick(event) {
            this.update(event);
        }
    }, {
        key: 'onSlideStart',
        value: function onSlideStart(event) {
            event.preventDefault();
            this.originalPaused = this.player.paused();
            this.player.pause();
        }
    }, {
        key: 'onSlideMove',
        value: function onSlideMove(event) {
            event.preventDefault();

            if (!this.player.paused()) {
                this.player.pause();
            }

            this.update(event);
        }
    }, {
        key: 'onSlideEnd',
        value: function onSlideEnd(event) {
            var _this2 = this;

            var pos = _larkplayer.DOM.getPointerPosition(this.el, event);
            var currentTime = this.player.duration() * pos.x;
            this.player.currentTime(currentTime);

            // 如果播放器在拖动进度条前不是处于暂停状态，那么拖动完了之后继续播放
            var isOriginalPlay = !this.originalPaused && this.originalPaused !== undefined;
            var isEnded = Math.ceil(this.player.currentTime()) >= this.player.duration();
            var isPaused = this.player.paused();

            if (isPaused && isOriginalPlay && !isEnded) {
                // setTimeout 避免进度条闪动
                setTimeout(function () {
                    _this2.player.play();
                }, 0);
            }
        }
    }, {
        key: 'update',
        value: function update(event) {
            var pos = _larkplayer.DOM.getPointerPosition(this.el, event);
            var percent = pos.x * 100 + '%';
            var currentTime = this.player.duration() * pos.x;

            this.line.style.width = percent;
            if (this.currentTimeEl) {
                _larkplayer.DOM.textContent(this.currentTimeEl, (0, _timeFormat2.default)(Math.floor(currentTime)));
            }
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.line.style.width = 0;
            this.children.forEach(function (child) {
                child && child.reset && child.reset();
            });
        }
    }, {
        key: 'showToolTip',
        value: function showToolTip(event) {
            var duration = this.player.duration();
            if (duration) {
                var pointerPos = _larkplayer.DOM.getPointerPosition(this.el, event);
                var currentTime = parseInt(duration * pointerPos.x, 10);

                if (!isNaN(currentTime)) {
                    _tooltip2.default.show({
                        hostEl: this.el,
                        margin: 13,
                        placement: 'top',
                        isFollowMouse: true,
                        event: event,
                        content: (0, _timeFormat2.default)(Math.floor(currentTime))
                    });
                }
            }
        }
    }, {
        key: 'showHoverLine',
        value: function showHoverLine(event) {
            var pointerPos = _larkplayer.DOM.getPointerPosition(this.el, event);
            var left = this.el.offsetWidth * pointerPos.x;

            this.hoverLight.style.width = left + 'px';
        }
    }, {
        key: 'hideHoverLine',
        value: function hideHoverLine(event) {
            this.hoverLight.style.width = 0;
        }
    }, {
        key: 'handleMouseOver',
        value: function handleMouseOver(event) {
            this.showToolTip(event);
            this.showHoverLine(event);
        }
    }, {
        key: 'handleMouseMove',
        value: function handleMouseMove(event) {
            this.showToolTip(event);
            this.showHoverLine(event);
        }
    }, {
        key: 'handleMouseOut',
        value: function handleMouseOut(event) {
            _tooltip2.default.hide();
            this.hideHoverLine(event);
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            this.player.off('timeupdate', this.handleTimeUpdate);
            this.off('click', this.handleClick);
            this.off('touchstart', this.handleSlideStart);
            if (!featureDetector.touch) {
                this.off('mousedown', this.handleSlideStart);
                this.off('mouseover', this.handleMouseOver);
                this.off('mousemove', this.handleMouseMove);
                this.off('mouseout', this.handleMouseOut);
            }

            this.line = null;
            this.lineHandle = null;
            this.hoverLight = null;
            this.paddingEl = null;

            _get(ProgressBar.prototype.__proto__ || Object.getPrototypeOf(ProgressBar.prototype), 'dispose', this).call(this);
        }
    }, {
        key: 'createEl',
        value: function createEl() {
            return _larkplayer.Component.createElement(
                'div',
                { className: (0, _classnames2.default)('lark-progress-bar', this.options.className) },
                _larkplayer.Component.createElement('div', { className: 'lark-progress-bar-padding' }),
                _larkplayer.Component.createElement('div', { className: 'lark-progress-bar-hover-light' }),
                _larkplayer.Component.createElement(_progressBarExceptFill2.default, null)
            );
        }
    }]);

    return ProgressBar;
}(_slider2.default);

exports.default = ProgressBar;

/***/ }),

/***/ "./src/js/controls-event.js":
/*!**********************************!*\
  !*** ./src/js/controls-event.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 触发自定义 CONTROLS_SHOW CONTROLS_HIDE 事件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui06
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2019/3/15
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var toTitleCase = _larkplayer.util.toTitleCase,
    featureDetector = _larkplayer.util.featureDetector,
    includes = _larkplayer.util.includes;

var ControlsEvent = function (_Plugin) {
    _inherits(ControlsEvent, _Plugin);

    function ControlsEvent(player, options) {
        _classCallCheck(this, ControlsEvent);

        var _this = _possibleConstructorReturn(this, (ControlsEvent.__proto__ || Object.getPrototypeOf(ControlsEvent)).call(this, player, options));

        _this.handleAllEvents('on');
        return _this;
    }

    _createClass(ControlsEvent, [{
        key: 'handleAllEvents',
        value: function handleAllEvents(method) {
            var _this2 = this;

            var eventsOnlyMobile = ['touchstart', 'touchend'];
            var eventsOnlyPc = ['mouseenter', 'mousemove', 'mouseleave'];
            var allEvents = ['play', 'pause', 'ended'].concat(eventsOnlyMobile, eventsOnlyPc);
            allEvents.forEach(function (eventName) {
                var callbackName = 'handle' + toTitleCase(eventName);
                _this2[callbackName] = _this2[callbackName].bind(_this2);
                if (includes(eventsOnlyMobile, eventName)) {
                    if (featureDetector.touch) {
                        _this2.player[method](eventName, _this2[callbackName]);
                    }
                } else if (includes(eventsOnlyPc, eventName)) {
                    if (!featureDetector.touch) {
                        _this2.player[method](eventName, _this2[callbackName]);
                    }
                } else {
                    _this2.player[method](eventName, _this2[callbackName]);
                }
            });
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            clearTimeout(this.timeoutHandler);
            this.handleAllEvents('off');
            _get(ControlsEvent.prototype.__proto__ || Object.getPrototypeOf(ControlsEvent.prototype), 'dispose', this).call(this);
        }
    }, {
        key: 'setTimeoutTriggerControlsHide',
        value: function setTimeoutTriggerControlsHide() {
            var _this3 = this;

            this.timeoutHandler = setTimeout(function () {
                _this3.player.trigger(_constants.Events.CONTROLS_HIDE);
            }, _constants.ACTIVE_DURATION);
        }
    }, {
        key: 'handlePlay',
        value: function handlePlay() {
            clearTimeout(this.timeoutHandler);
            this.player.trigger(_constants.Events.CONTROLS_SHOW);
            this.setTimeoutTriggerControlsHide();
        }
    }, {
        key: 'handleTouchstart',
        value: function handleTouchstart() {
            clearTimeout(this.timeoutHandler);
        }
    }, {
        key: 'handleTouchend',
        value: function handleTouchend() {
            clearTimeout(this.timeoutHandler);

            if (this.player.hasClass(_constants.ClassNames.ACTIVE)) {
                this.player.trigger(_constants.Events.CONTROLS_SHOW);
                this.setTimeoutTriggerControlsHide();
            } else if (!this.player.paused()) {
                this.player.trigger(_constants.Events.CONTROLS_HIDE);
            }
        }
    }, {
        key: 'handleMouseenter',
        value: function handleMouseenter() {
            clearTimeout(this.timeoutHandler);

            this.player.trigger(_constants.Events.CONTROLS_SHOW);
            this.setTimeoutTriggerControlsHide();
        }
    }, {
        key: 'handleMousemove',
        value: function handleMousemove() {
            this.handleMouseenter();
        }
    }, {
        key: 'handleMouseleave',
        value: function handleMouseleave() {
            clearTimeout(this.timeoutHandler);
            if (!this.player.paused()) {
                this.player.trigger(_constants.Events.CONTROLS_HIDE);
            }
        }
    }, {
        key: 'handlePause',
        value: function handlePause() {
            clearTimeout(this.timeoutHandler);
            this.player.trigger(_constants.Events.CONTROLS_SHOW);
        }
    }, {
        key: 'handleEnded',
        value: function handleEnded() {
            clearTimeout(this.timeoutHandler);
            this.player.trigger(_constants.Events.CONTROLS_SHOW);
        }
    }]);

    return ControlsEvent;
}(_larkplayer.Plugin);

exports.default = ControlsEvent;

/***/ }),

/***/ "./src/js/controls-proxy.js":
/*!**********************************!*\
  !*** ./src/js/controls-proxy.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 代理 player.controls 方法
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui06
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2018/5/6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ControlsProxy = function (_Plugin) {
    _inherits(ControlsProxy, _Plugin);

    function ControlsProxy(player, options) {
        _classCallCheck(this, ControlsProxy);

        var _this = _possibleConstructorReturn(this, (ControlsProxy.__proto__ || Object.getPrototypeOf(ControlsProxy)).call(this, player, options));

        _this.controls = _this.controls.bind(_this);
        _this.player.tech.el.removeAttribute('controls');
        _this.player.controls = _this.controls;
        return _this;
    }

    _createClass(ControlsProxy, [{
        key: 'controls',
        value: function controls(showControls) {
            if (showControls !== undefined) {
                if (showControls) {
                    this.player.removeClass(_constants.ClassNames.CONTROLS_HIDE);
                } else {
                    this.player.addClass(_constants.ClassNames.CONTROLS_HIDE);
                }
            }

            return !this.player.hasClass(_constants.ClassNames.CONTROLS_HIDE);
        }
    }]);

    return ControlsProxy;
}(_larkplayer.Plugin);

exports.default = ControlsProxy;

/***/ }),

/***/ "./src/js/larkplayer-ui.js":
/*!*********************************!*\
  !*** ./src/js/larkplayer-ui.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../css/larkplayer-ui.less */ "./src/css/larkplayer-ui.less");

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _classNameManager = __webpack_require__(/*! ./class-name-manager */ "./src/js/class-name-manager.js");

var _classNameManager2 = _interopRequireDefault(_classNameManager);

var _controlsProxy = __webpack_require__(/*! ./controls-proxy */ "./src/js/controls-proxy.js");

var _controlsProxy2 = _interopRequireDefault(_controlsProxy);

var _controlsEvent = __webpack_require__(/*! ./controls-event */ "./src/js/controls-event.js");

var _controlsEvent2 = _interopRequireDefault(_controlsEvent);

var _controlsMobile = __webpack_require__(/*! ./container/controls-mobile */ "./src/js/container/controls-mobile.js");

var _controlsMobile2 = _interopRequireDefault(_controlsMobile);

var _controlsPc = __webpack_require__(/*! ./container/controls-pc */ "./src/js/container/controls-pc.js");

var _controlsPc2 = _interopRequireDefault(_controlsPc);

var _resetApi = __webpack_require__(/*! ./reset-api.js */ "./src/js/reset-api.js");

var _resetApi2 = _interopRequireDefault(_resetApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file larkplayer custom style
 * @author yuhui06
 * @date 2018/5/4
 */

_larkplayer.Plugin.register(_classNameManager2.default, { name: 'classNameManager' });
_larkplayer.Plugin.register(_controlsProxy2.default, { name: 'controlsProxy' });
_larkplayer.Plugin.register(_controlsEvent2.default, { name: 'controlsEvent' });
_larkplayer.Plugin.register(_resetApi2.default, { name: 'resetApi' });

_larkplayer.util.featureDetector.touch ? _larkplayer.Component.register(_controlsMobile2.default, { name: 'controlsMobile' }) : _larkplayer.Component.register(_controlsPc2.default, { name: 'controlsPc' });

/***/ }),

/***/ "./src/js/reset-api.js":
/*!*****************************!*\
  !*** ./src/js/reset-api.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _larkplayer = __webpack_require__(/*! larkplayer */ "larkplayer");

var _timeFormat = __webpack_require__(/*! ./util/time-format */ "./src/js/util/time-format.js");

var _timeFormat2 = _interopRequireDefault(_timeFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 增加 player.reset 方法，重置 UI
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yuhui06
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2019/5/9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ControlsProxy = function (_Plugin) {
    _inherits(ControlsProxy, _Plugin);

    function ControlsProxy(player, options) {
        _classCallCheck(this, ControlsProxy);

        var _this = _possibleConstructorReturn(this, (ControlsProxy.__proto__ || Object.getPrototypeOf(ControlsProxy)).call(this, player, options));

        _this.reset = _this.reset.bind(_this);
        _this.player.reset = _this.reset;
        return _this;
    }

    _createClass(ControlsProxy, [{
        key: 'reset',
        value: function reset() {
            this.resetBufferBar();
            this.resetCurrentTime();
            this.resetDuration();
            this.resetProgressBar();
            this.resetProgressBarSimple();
        }
    }, {
        key: 'resetBufferBar',
        value: function resetBufferBar() {
            var lineEl = _larkplayer.DOM.$('.lark-buffer-bar__line', this.player.el);
            if (lineEl) {
                lineEl.style.width = 0;
            }
        }
    }, {
        key: 'resetCurrentTime',
        value: function resetCurrentTime() {
            var timeEl = _larkplayer.DOM.$('.lark-current-time', this.player.el);
            if (timeEl) {
                _larkplayer.DOM.textContent(timeEl, (0, _timeFormat2.default)(0));
            }
        }
    }, {
        key: 'resetDuration',
        value: function resetDuration() {
            var durationEl = _larkplayer.DOM.$('.lark-duration', this.player.el);
            if (durationEl) {
                _larkplayer.DOM.textContent(durationEl, '');
            }
        }
    }, {
        key: 'resetProgressBar',
        value: function resetProgressBar() {
            var lineEl = _larkplayer.DOM.$('.lark-progress-bar .lark-progress-bar__line', this.player.el);
            if (lineEl) {
                lineEl.style.width = 0;
            }
        }
    }, {
        key: 'resetProgressBarSimple',
        value: function resetProgressBarSimple() {
            var lineEl = _larkplayer.DOM.$('.lark-progress-bar--simple .lark-progress-bar__line', this.player.el);
            if (lineEl) {
                lineEl.style.width = 0;
            }
        }
    }]);

    return ControlsProxy;
}(_larkplayer.Plugin);

exports.default = ControlsProxy;

/***/ }),

/***/ "./src/js/util/time-format.js":
/*!************************************!*\
  !*** ./src/js/util/time-format.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = timeFormat;
/**
 * @file time-format.js 将秒数格式化为指定的时间字符串形式
 * @author yuhui<yuhui06@baidu.com>
 * @date 2017/11/3
 */

/**
 * 将秒数格式化为 hh:mm:ss 的形式
 *
 * @param {number} seconds 要转化的秒数
 * @return {string} 格式化后的表示时间的字符串
 */

/**
 * 不足两位的时间，前面补零
 *
 * @inner
 *
 * @param {string|number} val 该段位的时间（如 1h 12h 23m 1s）
 * @return {string} 进行过不足两位前面补零操作的时间串
 */
function pad(val) {
    val = '' + val;
    if (val.length < 2) {
        val = '0' + val;
    }

    return val;
}

/**
 * 将传入的秒数格式化为 hh:mm:ss 的形式，如果不足一小时，则为 mm:ss 的形式
 *
 * @param {number} seconds 总秒数
 * @return {string} 格式化后的时间串
 */
function timeFormat(seconds) {
    seconds = parseInt(seconds, 10);
    if (!isNaN(seconds)) {
        var hour = Math.floor(seconds / 3600);
        var minute = Math.floor((seconds - hour * 3600) / 60);
        var second = seconds % 60;

        var result = [pad(minute), pad(second)];
        if (hour > 0) {
            result.unshift(pad(hour));
        }

        return result.join(':');
    } else {
        return '- -';
    }
}

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "larkplayer":
/*!**********************************************************************************************************!*\
  !*** external {"commonjs":"larkplayer","commonjs2":"larkplayer","amd":"larkplayer","root":"larkplayer"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_larkplayer__;

/***/ })

/******/ });
});
//# sourceMappingURL=larkplayer-ui.js.map