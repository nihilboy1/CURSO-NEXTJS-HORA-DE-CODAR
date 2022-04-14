/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/todo";
exports.ids = ["pages/todo"];
exports.modules = {

/***/ "./src/styles/Todo.module.css":
/*!************************************!*\
  !*** ./src/styles/Todo.module.css ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"todo_box\": \"Todo_todo_box__kLh83\",\n\t\"list_item\": \"Todo_list_item__a65sV\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL1RvZG8ubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXVsYXMvLi9zcmMvc3R5bGVzL1RvZG8ubW9kdWxlLmNzcz8xYWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRvZG9fYm94XCI6IFwiVG9kb190b2RvX2JveF9fa0xoODNcIixcblx0XCJsaXN0X2l0ZW1cIjogXCJUb2RvX2xpc3RfaXRlbV9fYTY1c1ZcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/Todo.module.css\n");

/***/ }),

/***/ "./src/pages/todo/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/todo/index.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Todo.module.css */ \"./src/styles/Todo.module.css\");\n/* harmony import */ var _styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function getStaticProps(context) {\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/todos\");\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\nconst Todos = ({ data  })=>{\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_2___default().todo_box),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                    children: \"TAREFAS\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\CURSO-NEXTJS-HORA-DE-CODAR\\\\aula6 - fetch api\\\\src\\\\pages\\\\todo\\\\index.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: data.map((item)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_2___default().list_item),\n                            children: item.title\n                        }, item.id, false, {\n                            fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\CURSO-NEXTJS-HORA-DE-CODAR\\\\aula6 - fetch api\\\\src\\\\pages\\\\todo\\\\index.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 20\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\CURSO-NEXTJS-HORA-DE-CODAR\\\\aula6 - fetch api\\\\src\\\\pages\\\\todo\\\\index.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\CURSO-NEXTJS-HORA-DE-CODAR\\\\aula6 - fetch api\\\\src\\\\pages\\\\todo\\\\index.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todos);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9kby9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUN1QjtBQUV6QyxlQUFlRSxjQUFjLENBQUNDLE9BQU8sRUFBRTtJQUM1QyxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDO0lBQ3JFLE1BQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUM3QixPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUFDRixJQUFJO1NBQUM7S0FDZDtDQUNGO0FBRUQsTUFBTUcsS0FBSyxHQUFHLENBQUMsRUFBQ0gsSUFBSSxHQUFDLEdBQUs7SUFDeEJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxJQUFJLENBQUM7SUFDakIscUJBQ0U7a0JBQ0UsNEVBQUNNLEtBQUc7WUFBQ0MsU0FBUyxFQUFFWix5RUFBYzs7OEJBQzVCLDhEQUFDYyxJQUFFO29CQUFDRixTQUFTLEVBQUVaLHNFQUFXOzhCQUFFLFNBQU87Ozs7OzZCQUFLOzhCQUN4Qyw4REFBQ2dCLElBQUU7OEJBQ0FYLElBQUksQ0FBQ1ksR0FBRyxDQUFDLENBQUNDLElBQUksR0FBSzt3QkFDbEIscUJBQU8sOERBQUNDLElBQUU7NEJBQWVQLFNBQVMsRUFBRVosMEVBQWU7c0NBQUdrQixJQUFJLENBQUNILEtBQUs7MkJBQWhERyxJQUFJLENBQUNHLEVBQUU7Ozs7cUNBQStDO3FCQUV2RSxDQUFDOzs7Ozs2QkFFQzs7Ozs7O3FCQUNEO3FCQUNMLENBQ0o7Q0FDRjtBQUVELGlFQUFlYixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXVsYXMvLi9zcmMvcGFnZXMvdG9kby9pbmRleC5qc3g/NGUzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvVG9kby5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvc1wiKVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7ZGF0YX0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVG9kb3MgPSAoe2RhdGF9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coZGF0YSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRvZG9fYm94fT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZS50aXRsZX0+VEFSRUZBUzwvaDE+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9e3N0eWxlLmxpc3RfaXRlbX0+e2l0ZW0udGl0bGV9PC9saT5cclxuXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2Rvc1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZSIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyIsIlRvZG9zIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRvZG9fYm94IiwiaDEiLCJ0aXRsZSIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwibGlzdF9pdGVtIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/todo/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/todo/index.jsx"));
module.exports = __webpack_exports__;

})();