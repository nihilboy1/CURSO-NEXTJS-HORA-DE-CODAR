"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./src/pages/users/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/users/index.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Users = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: props.users.map(function(user) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/profile/[id]\",\n                as: \"/profile/\".concat(user.id),\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: user.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\NEXT-JS\\\\fundamentosmais\\\\src\\\\pages\\\\users\\\\index.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 95\n                }, _this1)\n            }, user.id, false, {\n                fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\NEXT-JS\\\\fundamentosmais\\\\src\\\\pages\\\\users\\\\index.jsx\",\n                lineNumber: 11,\n                columnNumber: 16\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\NEXT-JS\\\\fundamentosmais\\\\src\\\\pages\\\\users\\\\index.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = Users;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdXNlcnMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBa0Q7QUFFdEI7QUFHNUIsSUFBTUksS0FBSyxHQUFHLFNBQUNDLEtBQUssRUFBSzs7SUFDdkIscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0RELEtBQUssQ0FBQ0UsS0FBSyxDQUFDQyxHQUFHLENBQUNDLFNBQUFBLElBQUksRUFBSTtZQUV2QixxQkFBTyw4REFBQ04sa0RBQUk7Z0JBQUNPLElBQUksRUFBRSxlQUFlO2dCQUFFQyxFQUFFLEVBQUUsV0FBVSxDQUFVLE9BQVJGLElBQUksQ0FBQ0csRUFBRSxDQUFFO2dCQUFFQyxRQUFROzBCQUFlLDRFQUFDQyxHQUFDOzhCQUFHTCxJQUFJLENBQUNNLElBQUk7Ozs7OzBCQUFLO2VBQTVCTixJQUFJLENBQUNHLEVBQUU7Ozs7c0JBQTRCO1NBQ2pILENBQUM7Ozs7O2FBQ0UsQ0FDUDtDQUNGO0FBVEtSLEtBQUFBLEtBQUs7O0FBbUJYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy91c2Vycy9pbmRleC5qc3g/M2E0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcblxyXG5jb25zdCBVc2VycyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7cHJvcHMudXNlcnMubWFwKHVzZXIgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiA8TGluayBocmVmPXtcIi9wcm9maWxlL1tpZF1cIn0gYXM9e2AvcHJvZmlsZS8ke3VzZXIuaWR9YH0gcGFzc0hyZWYga2V5PXt1c2VyLmlkfT48cCA+e3VzZXIubmFtZX08L3A+PC9MaW5rPlxyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC5kYXRhXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7dXNlcnM6IGRhdGF9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIlVzZXJzIiwicHJvcHMiLCJkaXYiLCJ1c2VycyIsIm1hcCIsInVzZXIiLCJocmVmIiwiYXMiLCJpZCIsInBhc3NIcmVmIiwicCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/users/index.jsx\n");

/***/ })

});