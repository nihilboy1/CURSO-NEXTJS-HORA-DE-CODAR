"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todo",{

/***/ "./src/pages/todo/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/todo/index.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Todo.module.css */ \"./src/styles/Todo.module.css\");\n/* harmony import */ var _styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Todos = function(param) {\n    var data = param.data;\n    var _this1 = _this;\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_2___default().todo_box),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                    children: \"TAREFAS\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\CURSO-NEXTJS-HORA-DE-CODAR\\\\aula6 - fetch api\\\\src\\\\pages\\\\todo\\\\index.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: data.map(function(item) {\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\CURSO-NEXTJS-HORA-DE-CODAR\\\\aula6 - fetch api\\\\src\\\\pages\\\\todo\\\\index.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\CURSO-NEXTJS-HORA-DE-CODAR\\\\aula6 - fetch api\\\\src\\\\pages\\\\todo\\\\index.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\CURSO-NEXTJS-HORA-DE-CODAR\\\\aula6 - fetch api\\\\src\\\\pages\\\\todo\\\\index.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = Todos;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9kby9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUF5QjtBQUN1QjtBQVVoRCxJQUFNRSxLQUFLLEdBQUcsZ0JBQVk7UUFBVkMsSUFBSSxTQUFKQSxJQUFJOztJQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztJQUNqQixxQkFDRTtrQkFDRSw0RUFBQ0csS0FBRztZQUFDQyxTQUFTLEVBQUVOLHlFQUFjOzs4QkFDNUIsOERBQUNRLElBQUU7b0JBQUNGLFNBQVMsRUFBRU4sc0VBQVc7OEJBQUUsU0FBTzs7Ozs7eUJBQUs7OEJBQ3hDLDhEQUFDVSxJQUFFOzhCQUNBUixJQUFJLENBQUNTLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUs7c0NBQ2xCLDhEQUFDQyxJQUFFOzs7O2tDQUFNO3FCQUVWLENBQUM7Ozs7O3lCQUVDOzs7Ozs7aUJBQ0Q7cUJBQ0wsQ0FDSjtDQUNGO0FBaEJLWixLQUFBQSxLQUFLOztBQWtCWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdG9kby9pbmRleC5qc3g/NGUzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvVG9kby5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiKVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7ZGF0YX0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVG9kb3MgPSAoe2RhdGF9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coZGF0YSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRvZG9fYm94fT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZS50aXRsZX0+VEFSRUZBUzwvaDE+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG5cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9zXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlIiwiVG9kb3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRvZG9fYm94IiwiaDEiLCJ0aXRsZSIsInVsIiwibWFwIiwiaXRlbSIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/todo/index.jsx\n");

/***/ })

});