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

/***/ "./src/draw/draw.ts":
/*!**************************!*\
  !*** ./src/draw/draw.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector2\": () => (/* reexport safe */ _mathematics_vector2__WEBPACK_IMPORTED_MODULE_0__.Vector2),\n/* harmony export */   \"Random\": () => (/* reexport safe */ _mathematics_random__WEBPACK_IMPORTED_MODULE_1__.Random),\n/* harmony export */   \"Circle\": () => (/* reexport safe */ _geometry_circle__WEBPACK_IMPORTED_MODULE_2__.Circle),\n/* harmony export */   \"Rectangle\": () => (/* reexport safe */ _geometry_rectangle__WEBPACK_IMPORTED_MODULE_3__.Rectangle)\n/* harmony export */ });\n/* harmony import */ var _mathematics_vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathematics/vector2 */ \"./src/draw/mathematics/vector2.ts\");\n/* harmony import */ var _mathematics_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathematics/random */ \"./src/draw/mathematics/random.ts\");\n/* harmony import */ var _geometry_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geometry/circle */ \"./src/draw/geometry/circle.ts\");\n/* harmony import */ var _geometry_rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geometry/rectangle */ \"./src/draw/geometry/rectangle.ts\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://radial_gradient4/./src/draw/draw.ts?");

/***/ }),

/***/ "./src/draw/geometry/circle.ts":
/*!*************************************!*\
  !*** ./src/draw/geometry/circle.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Circle\": () => (/* binding */ Circle)\n/* harmony export */ });\n/* harmony import */ var _mathematics_vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mathematics/vector2 */ \"./src/draw/mathematics/vector2.ts\");\n\r\n/**\r\n * @class\r\n * Circle\r\n * @description\r\n * @author Shingo Hosoda\r\n * @copyright Shingo Hosoda\r\n */\r\nclass Circle {\r\n    /**\r\n     *\r\n     * @param gl\r\n     * @param init_position\r\n     * @param init_circle_radius\r\n     */\r\n    constructor(gl, init_position, init_circle_radius) {\r\n        this.position = new _mathematics_vector2__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0);\r\n        this.radius = 0;\r\n        /**\r\n         * @method draw\r\n         * @param fill\r\n         * @param stroke\r\n         * @param stroke_weight\r\n         * @param alpha\r\n         */\r\n        this.draw = (fill, stroke, stroke_weight = 1.0, alpha = 1.0) => {\r\n            this.gl.globalAlpha = alpha;\r\n            this.gl.fillStyle = fill;\r\n            this.gl.strokeStyle = stroke;\r\n            this.gl.lineWidth = stroke_weight;\r\n            this.gl.beginPath();\r\n            this.gl.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);\r\n            this.gl.closePath();\r\n            this.gl.fill();\r\n            this.gl.stroke();\r\n        };\r\n        /**\r\n         * fillのみ描画\r\n         * @method draw_fill\r\n         * @param fill\r\n         * @param alpha\r\n         */\r\n        this.draw_fill = (fill, alpha = 1.0) => {\r\n            this.gl.globalAlpha = alpha;\r\n            this.gl.fillStyle = fill;\r\n            this.gl.beginPath();\r\n            this.gl.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);\r\n            this.gl.closePath();\r\n            this.gl.fill();\r\n        };\r\n        /**\r\n         * strokeのみ描画\r\n         * @method draw_stroke\r\n         * @param stroke\r\n         * @param stroke_weight\r\n         * @param alpha\r\n         */\r\n        this.draw_stroke = (stroke, stroke_weight = 1.0, alpha = 1.0) => {\r\n            this.gl.globalAlpha = alpha;\r\n            this.gl.strokeStyle = stroke;\r\n            this.gl.lineWidth = stroke_weight;\r\n            this.gl.beginPath();\r\n            this.gl.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);\r\n            this.gl.closePath();\r\n            this.gl.stroke();\r\n        };\r\n        this.gl = gl;\r\n        this.position = init_position;\r\n        this.radius = init_circle_radius;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://radial_gradient4/./src/draw/geometry/circle.ts?");

/***/ }),

/***/ "./src/draw/geometry/rectangle.ts":
/*!****************************************!*\
  !*** ./src/draw/geometry/rectangle.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Rectangle\": () => (/* binding */ Rectangle)\n/* harmony export */ });\n/* harmony import */ var _mathematics_vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mathematics/vector2 */ \"./src/draw/mathematics/vector2.ts\");\n\r\nclass Rectangle {\r\n    /**\r\n     *\r\n     * @param gl\r\n     * @param init_position\r\n     * @param init_rect_size\r\n     */\r\n    constructor(gl, init_position, init_rect_size) {\r\n        this.position = new _mathematics_vector2__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0);\r\n        this.rect_size = new _mathematics_vector2__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0);\r\n        /**\r\n         *\r\n         * @param fill\r\n         * @param stroke\r\n         * @param stroke_weight\r\n         * @param alpha\r\n         */\r\n        this.draw = (fill, stroke, stroke_weight = 1.0, alpha = 1.0) => {\r\n            this.gl.globalAlpha = alpha;\r\n            this.gl.fillStyle = fill;\r\n            this.gl.strokeStyle = stroke;\r\n            this.gl.lineWidth = stroke_weight;\r\n            this.gl.rect(this.position.x, this.position.y, this.rect_size.x, this.rect_size.y);\r\n            this.gl.fill();\r\n            this.gl.stroke();\r\n        };\r\n        /**\r\n         * fillのみ描画\r\n         * @param fill\r\n         * @param alpha\r\n         */\r\n        this.draw_fill = (fill, alpha = 1.0) => {\r\n            this.gl.globalAlpha = alpha;\r\n            this.gl.fillStyle = fill;\r\n            this.gl.rect(this.position.x, this.position.y, this.rect_size.x, this.rect_size.y);\r\n            this.gl.fill();\r\n        };\r\n        /**\r\n         * strokeのみ描画\r\n         * @param stroke\r\n         * @param stroke_weight\r\n         * @param alpha\r\n         */\r\n        this.draw_stroke = (stroke, stroke_weight = 1.0, alpha = 1.0) => {\r\n            this.gl.globalAlpha = alpha;\r\n            this.gl.strokeStyle = stroke;\r\n            this.gl.lineWidth = stroke_weight;\r\n            this.gl.rect(this.position.x, this.position.y, this.rect_size.x, this.rect_size.y);\r\n            this.gl.stroke();\r\n        };\r\n        this.gl = gl;\r\n        this.position = init_position;\r\n        this.rect_size = init_rect_size;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://radial_gradient4/./src/draw/geometry/rectangle.ts?");

/***/ }),

/***/ "./src/draw/mathematics/random.ts":
/*!****************************************!*\
  !*** ./src/draw/mathematics/random.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Random\": () => (/* binding */ Random)\n/* harmony export */ });\nclass Random {\r\n}\r\n/**\r\n *\r\n * @param min\r\n * @param max\r\n * @returns Math.random() * (max - min) + min\r\n */\r\nRandom.random = (min, max) => {\r\n    return Math.random() * (max - min) + min;\r\n};\r\n\n\n//# sourceURL=webpack://radial_gradient4/./src/draw/mathematics/random.ts?");

/***/ }),

/***/ "./src/draw/mathematics/vector2.ts":
/*!*****************************************!*\
  !*** ./src/draw/mathematics/vector2.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector2\": () => (/* binding */ Vector2)\n/* harmony export */ });\n/**\r\n * @class\r\n * Vector2\r\n * @description\r\n * @author Shingo Hosoda\r\n * @copyright Shingo Hosoda\r\n */\r\nclass Vector2 {\r\n    /**\r\n     *\r\n     * @param {number} x - x coordinate\r\n     * @param {number} y - y coordinate\r\n     */\r\n    constructor(x, y) {\r\n        this.x = 0;\r\n        this.y = 0;\r\n        /**\r\n         * @method add\r\n         * @param {Vector2} value - value the vector to add\r\n         */\r\n        this.add = (value) => {\r\n            this.x = this.x + value.x;\r\n            this.y = this.y + value.y;\r\n            return this;\r\n        };\r\n        /**\r\n         * @method sub\r\n         * @param {Vector2} value - value the vector to sub\r\n         */\r\n        this.sub = (value) => {\r\n            this.x = this.x - value.x;\r\n            this.y = this.y - value.y;\r\n            return this;\r\n        };\r\n        /**\r\n         * @method multi\r\n         * @param {number} value - value the vector to multi\r\n         */\r\n        this.multi = (value) => {\r\n            this.x = this.x * value;\r\n            this.y = this.y * value;\r\n            return this;\r\n        };\r\n        /**\r\n         * @method div\r\n         * @param {number} value - value the vector to div\r\n         */\r\n        this.div = (value) => {\r\n            this.x = this.x / value;\r\n            this.y = this.y / value;\r\n            return this;\r\n        };\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    /**\r\n     * get x coordinate\r\n     * @method get\r\n     * @example\r\n     *\r\n     */\r\n    get width() {\r\n        return this.x;\r\n    }\r\n    /**\r\n     * get y coordinate\r\n     * @method get\r\n     * @example\r\n     *\r\n     */\r\n    get height() {\r\n        return this.y;\r\n    }\r\n    /**\r\n     * setter\r\n     * @method set\r\n     * @param x\r\n     * @param y\r\n     */\r\n    set(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n}\r\n//static methods\r\n/**\r\n * @static\r\n * @method add\r\n * @param {Vector2} value1 - value1 the vector to add\r\n * @param {Vector2} value2 - value2 the vector to add\r\n */\r\nVector2.add = (value1, value2) => {\r\n    return new Vector2(value1.x + value2.x, value1.y + value2.y);\r\n};\r\n/**\r\n * @static\r\n * @method sub\r\n * @param {Vector2} value1 - value1 the vector to sub\r\n * @param {Vector2} value2 - value2 the vector to sub\r\n */\r\nVector2.sub = (value1, value2) => {\r\n    return new Vector2(value1.x - value2.x, value1.y - value2.y);\r\n};\r\n/**\r\n * @static\r\n * @method multi\r\n * @param {Vector2} value1 - value1 the vector to sub\r\n * @param {number} value2 - value2 the scalar to sub\r\n */\r\nVector2.multi = (value1, value2) => {\r\n    return new Vector2(value1.x * value2, value1.y * value2);\r\n};\r\n/**\r\n * @static\r\n * @method div\r\n * @param {Vector2} value1 - value1 the vector to sub\r\n * @param {number} value2 - value2 the scalar to sub\r\n */\r\nVector2.div = (value1, value2) => {\r\n    return new Vector2(value1.x / value2, value1.y / value2);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://radial_gradient4/./src/draw/mathematics/vector2.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _draw_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw/draw */ \"./src/draw/draw.ts\");\n\r\nconst canvas = document.querySelector(\"#canvas\");\r\n// canvasのサポートがない場合\r\nif (!(canvas instanceof HTMLCanvasElement)) {\r\n    throw new Error(\"not found canvas element\");\r\n}\r\nconst gl = canvas.getContext(\"2d\");\r\nif (!gl) {\r\n    throw new Error(\"canvasの初期化に失敗しました\");\r\n}\r\nlet width = 0;\r\nlet height = 0;\r\nconst initResize = () => {\r\n    width = canvas.width = window.innerWidth;\r\n    height = canvas.height = window.innerHeight;\r\n};\r\n/**\r\n * @description fキーを押したら全画面表示\r\n */\r\nconst keyEvent = (element) => {\r\n    window.addEventListener(\"keydown\", (event) => {\r\n        // console.log(event.key, event.code);\r\n        if (event.code == \"KeyF\") {\r\n            alert(\"fをクリックしましたね\");\r\n            /*\r\n              if (element.requestFullscreen()) {\r\n                element.requestFullscreen();\r\n              } else {\r\n                console.log(\"Hello\");\r\n              }*/\r\n        }\r\n    });\r\n};\r\nconst init = () => {\r\n    initResize();\r\n    window.addEventListener(\"resize\", initResize);\r\n    const element = document.body;\r\n    keyEvent(element);\r\n};\r\nconst background = (color = \"#000000\") => {\r\n    const startSize = new _draw_draw__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0);\r\n    const windowSize = new _draw_draw__WEBPACK_IMPORTED_MODULE_0__.Vector2(canvas.width, canvas.height);\r\n    const gradColor = gl.createLinearGradient(windowSize.x / 2.0, 0, windowSize.x / 2.0, windowSize.y);\r\n    gradColor.addColorStop(0.0, \"rgb(0, 250, 250)\");\r\n    gradColor.addColorStop(0.5, \"rgb(0, 150, 200)\");\r\n    gradColor.addColorStop(1.0, \"rgb(0, 50, 100)\");\r\n    const rect = new _draw_draw__WEBPACK_IMPORTED_MODULE_0__.Rectangle(gl, startSize, windowSize);\r\n    rect.draw_fill(gradColor);\r\n};\r\nconst main = () => {\r\n    const canvasSize = new _draw_draw__WEBPACK_IMPORTED_MODULE_0__.Vector2(width, height);\r\n    background();\r\n    [...Array(100).keys()].forEach((_count) => {\r\n        gl.save();\r\n        const position = new _draw_draw__WEBPACK_IMPORTED_MODULE_0__.Vector2(_draw_draw__WEBPACK_IMPORTED_MODULE_0__.Random.random(0 + 100, width - 100), _draw_draw__WEBPACK_IMPORTED_MODULE_0__.Random.random(0 + 100, height - 100));\r\n        const size = _draw_draw__WEBPACK_IMPORTED_MODULE_0__.Random.random(5, 20);\r\n        let gradient1 = gl.createRadialGradient(position.x, position.y, 0, position.x, position.y, size);\r\n        gradient1.addColorStop(0.0, \"rgba(250, 250, 250, 0.1)\");\r\n        gradient1.addColorStop(0.8, \"rgba(250, 250, 250, 0.2)\");\r\n        gradient1.addColorStop(1.0, \"rgba(250, 250, 250, 0.3)\");\r\n        const circle = new _draw_draw__WEBPACK_IMPORTED_MODULE_0__.Circle(gl, position, size);\r\n        circle.draw_fill(gradient1);\r\n        gl.restore();\r\n    });\r\n};\r\nconst render = () => {\r\n    init();\r\n    main();\r\n};\r\nwindow.onload = render;\r\n\n\n//# sourceURL=webpack://radial_gradient4/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;