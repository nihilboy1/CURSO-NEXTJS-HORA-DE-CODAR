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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_samue_Documents_CODE_NEXT_JS_fundamentosmais_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_samue_Documents_CODE_NEXT_JS_fundamentosmais_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_samue_Documents_CODE_NEXT_JS_fundamentosmais_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Users = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), users = ref[0], setUsers = ref[1];\n    var fetchUsers = function() {\n        var _ref = _asyncToGenerator(C_Users_samue_Documents_CODE_NEXT_JS_fundamentosmais_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var resp, respjson;\n            return C_Users_samue_Documents_CODE_NEXT_JS_fundamentosmais_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"https://jsonplaceholder.typicode.com/users\");\n                    case 2:\n                        resp = _ctx.sent;\n                        _ctx.next = 5;\n                        return resp.data;\n                    case 5:\n                        respjson = _ctx.sent;\n                        setUsers(respjson);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchUsers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    console.log(users);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchUsers();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: users.map(function() {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: user\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\NEXT-JS\\\\fundamentosmais\\\\src\\\\pages\\\\users\\\\index.jsx\",\n                lineNumber: 22,\n                columnNumber: 14\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\NEXT-JS\\\\fundamentosmais\\\\src\\\\pages\\\\users\\\\index.jsx\",\n        lineNumber: 20,\n        columnNumber: 12\n    }, _this);\n};\n_s(Users, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdXNlcnMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN6Qjs7QUFHMUIsSUFBTUksS0FBSyxHQUFHLFdBQU07OztJQUNsQixJQUEwQkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUx4QyxLQUtjLEdBQWNBLEdBQVksR0FBMUIsRUFMZCxRQUt3QixHQUFJQSxHQUFZLEdBQWhCO0lBRXRCLElBQU1LLFVBQVU7bUJBQUcscU1BQVk7Z0JBQ3ZCQyxJQUFJLEVBQ0pDLFFBQVE7Ozs7OytCQURLTixnREFBUyxDQUFDLDRDQUE0QyxDQUFDOzt3QkFBcEVLLElBQUksWUFBZ0U7OytCQUNuREEsSUFBSSxDQUFDRyxJQUFJOzt3QkFBMUJGLFFBQVEsWUFBa0I7d0JBR2hDSCxRQUFRLENBQUNHLFFBQVEsQ0FBQzs7Ozs7O1NBQ25CO3dCQU5LRixVQUFVOzs7T0FNZjtJQUNESyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsS0FBSyxDQUFDO0lBQ2xCSixnREFBUyxDQUFDLFdBQU07UUFDZE0sVUFBVSxFQUFFO0tBQ2IsRUFBQyxFQUFFLENBQUM7SUFFTCxxQkFBUyw4REFBQ08sS0FBRztrQkFDVlQsS0FBSyxDQUFDVSxHQUFHLENBQUMsV0FBTTtZQUNmLHFCQUFPLDhEQUFDRCxLQUFHOzBCQUFFRSxJQUFJOzs7OztzQkFBTztTQUN6QixDQUFDOzs7OzthQUNFLENBQUc7Q0FDVjtHQXBCS1osS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBc0JYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VzZXJzL2luZGV4LmpzeD8zYTQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IFVzZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIpXHJcbiAgICBjb25zdCByZXNwanNvbiA9IGF3YWl0IHJlc3AuZGF0YVxyXG5cclxuXHJcbiAgICBzZXRVc2VycyhyZXNwanNvbilcclxuICB9XHJcbiAgY29uc29sZS5sb2codXNlcnMpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoVXNlcnMoKVxyXG4gIH0sW10pXHJcblxyXG4gIHJldHVybiAoIDxkaXY+XHJcbiAgICB7dXNlcnMubWFwKCgpID0+IHtcclxuICAgICAgcmV0dXJuIDxkaXY+e3VzZXJ9PC9kaXY+XHJcbiAgICB9KX1cclxuICA8L2Rpdj4gKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJVc2VycyIsInVzZXJzIiwic2V0VXNlcnMiLCJmZXRjaFVzZXJzIiwicmVzcCIsInJlc3Bqc29uIiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYXAiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/users/index.jsx\n");

/***/ })

});