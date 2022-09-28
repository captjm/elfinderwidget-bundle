/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/ELFinderWidget.js":
/*!*************************************!*\
  !*** ./assets/js/ELFinderWidget.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ELFinderWidget\": () => (/* binding */ ELFinderWidget),\n/* harmony export */   \"elFinderWidget\": () => (/* binding */ elFinderWidget)\n/* harmony export */ });\nclass ELFinderWidget {\n    constructor() {\n        window.setValue = function (value, element_id) {\n            document.querySelector(`[data-type=\"elfinder-input-field\"][id=\"${element_id}\"]`).value = value;\n            document.getElementById(`${element_id}thumbnail`).src = value;\n            document.querySelector(`#ea-lightbox-${element_id} img`).src = value;\n        }\n    }\n    init() {\n        document.querySelectorAll('.elfinder-widget').forEach((w)=>{\n            w.querySelector('.browse-btn').onclick = () => {\n                window.open(`${w.dataset.path}?id=${w.dataset.id}`, \"popupWindow\", \"height=450, width=900\");\n            }\n        });\n    }\n}\n\nconst elFinderWidget = new ELFinderWidget();\naddEventListener('DOMContentLoaded', (event) => {\n    elFinderWidget.init();\n});\n\n//# sourceURL=webpack://elfinderwidgetbundle/./assets/js/ELFinderWidget.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/ELFinderWidget.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;