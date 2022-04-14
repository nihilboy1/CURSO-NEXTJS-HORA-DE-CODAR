"use strict";
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
exports.id = "pages/profile/[id]";
exports.ids = ["pages/profile/[id]"];
exports.modules = {

/***/ "./src/pages/profile/[id].js":
/*!***********************************!*\
  !*** ./src/pages/profile/[id].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Profile = (props)=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    if (router.isFallback) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\NEXT-JS\\\\fundamentosmais\\\\src\\\\pages\\\\profile\\\\[id].js\",\n            lineNumber: 8,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: props.user.id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\NEXT-JS\\\\fundamentosmais\\\\src\\\\pages\\\\profile\\\\[id].js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: props.user.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\NEXT-JS\\\\fundamentosmais\\\\src\\\\pages\\\\profile\\\\[id].js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: props.user.username\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\NEXT-JS\\\\fundamentosmais\\\\src\\\\pages\\\\profile\\\\[id].js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\samue\\\\Documents\\\\CODE\\\\NEXT-JS\\\\fundamentosmais\\\\src\\\\pages\\\\profile\\\\[id].js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\nasync function getStaticProps(context) {\n    const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/users\", {\n        params: {\n            id: context.params.id\n        }\n    });\n    const user = await resp.data[0];\n    await new Promise((res)=>setTimeout(res, 4000)\n    );\n    return {\n        props: {\n            user\n        } // will be passed to the page component as props\n    };\n}\nasync function getStaticPaths() {\n    const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/users\");\n    const users = await resp.data.slice(0, 5);\n    const paths = users.map((user)=>{\n        return {\n            params: {\n                id: String(user.id)\n            }\n        };\n    });\n    return {\n        paths: paths,\n        fallback: true // false or 'blocking'\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDQTtBQUNjO0FBQ3ZDLE1BQU1HLE9BQU8sR0FBR0MsQ0FBQUEsS0FBSyxHQUFJO0lBQ3ZCLE1BQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUUxQixJQUFJRyxNQUFNLENBQUNDLFVBQVUsRUFBQztRQUNwQixxQkFBTyw4REFBQ0MsSUFBRTtzQkFBQyxZQUFVOzs7OztxQkFBSztLQUMzQjtJQUNELHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsR0FBQzswQkFBRUwsS0FBSyxDQUFDTSxJQUFJLENBQUNDLEVBQUU7Ozs7O3lCQUFLOzBCQUN0Qiw4REFBQ0YsR0FBQzswQkFBRUwsS0FBSyxDQUFDTSxJQUFJLENBQUNFLElBQUk7Ozs7O3lCQUFLOzBCQUN4Qiw4REFBQ0gsR0FBQzswQkFBRUwsS0FBSyxDQUFDTSxJQUFJLENBQUNHLFFBQVE7Ozs7O3lCQUFLOzs7Ozs7aUJBQ3hCLENBQ1A7Q0FDRjtBQUVNLGVBQWVDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFO0lBQzVDLE1BQU1DLElBQUksR0FBRyxNQUFNZixnREFBUyxDQUFDLDRDQUE0QyxFQUFFO1FBQ3pFaUIsTUFBTSxFQUFFO1lBQUVQLEVBQUUsRUFBRUksT0FBTyxDQUFDRyxNQUFNLENBQUNQLEVBQUU7U0FBRTtLQUNsQyxDQUFDO0lBQ0YsTUFBTUQsSUFBSSxHQUFHLE1BQU1NLElBQUksQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQztJQUUvQixNQUFNLElBQUlDLE9BQU8sQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFJQyxVQUFVLENBQUNELEdBQUcsRUFBRSxJQUFJLENBQUM7SUFBQSxDQUFDO0lBQy9DLE9BQU87UUFDTGpCLEtBQUssRUFBRTtZQUFFTSxJQUFJO1NBQUUsQ0FBQyxnREFBZ0Q7S0FDakU7Q0FDRjtBQUVNLGVBQWVhLGNBQWMsR0FBRztJQUNyQyxNQUFNUCxJQUFJLEdBQUcsTUFBTWYsZ0RBQVMsQ0FBQyw0Q0FBNEMsQ0FBQztJQUMxRSxNQUFNdUIsS0FBSyxHQUFHLE1BQU1SLElBQUksQ0FBQ0csSUFBSSxDQUFDTSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QyxNQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csR0FBRyxDQUFDakIsQ0FBQUEsSUFBSSxHQUFJO1FBQzlCLE9BQU87WUFBRVEsTUFBTSxFQUFFO2dCQUFFUCxFQUFFLEVBQUVpQixNQUFNLENBQUNsQixJQUFJLENBQUNDLEVBQUUsQ0FBQzthQUFFO1NBQUU7S0FDM0MsQ0FBQztJQUVGLE9BQU87UUFDTGUsS0FBSyxFQUFFQSxLQUFLO1FBQ1pHLFFBQVEsRUFBRSxJQUFJLENBQUMsc0JBQXNCO0tBQ3RDO0NBQ0Y7QUFFRCxpRUFBZTFCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5kYW1lbnRvc21haXMvLi9zcmMvcGFnZXMvcHJvZmlsZS9baWRdLmpzPzZhMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5jb25zdCBQcm9maWxlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGlmIChyb3V0ZXIuaXNGYWxsYmFjayl7XHJcbiAgICByZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPlxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+e3Byb3BzLnVzZXIuaWR9PC9wPlxyXG4gICAgICA8cD57cHJvcHMudXNlci5uYW1lfTwvcD5cclxuICAgICAgPHA+e3Byb3BzLnVzZXIudXNlcm5hbWV9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycsIHtcclxuICAgIHBhcmFtczogeyBpZDogY29udGV4dC5wYXJhbXMuaWQgfVxyXG4gIH0pXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHJlc3AuZGF0YVswXVxyXG5cclxuICBhd2FpdCBuZXcgUHJvbWlzZShyZXMgPT4gc2V0VGltZW91dChyZXMsIDQwMDApKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyB1c2VyIH0gLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcclxuICBjb25zdCB1c2VycyA9IGF3YWl0IHJlc3AuZGF0YS5zbGljZSgwLCA1KVxyXG4gIGNvbnN0IHBhdGhzID0gdXNlcnMubWFwKHVzZXIgPT4ge1xyXG4gICAgcmV0dXJuIHsgcGFyYW1zOiB7IGlkOiBTdHJpbmcodXNlci5pZCkgfSB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBwYXRocyxcclxuICAgIGZhbGxiYWNrOiB0cnVlIC8vIGZhbHNlIG9yICdibG9ja2luZydcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJQcm9maWxlIiwicHJvcHMiLCJyb3V0ZXIiLCJpc0ZhbGxiYWNrIiwiaDEiLCJkaXYiLCJwIiwidXNlciIsImlkIiwibmFtZSIsInVzZXJuYW1lIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicmVzcCIsImdldCIsInBhcmFtcyIsImRhdGEiLCJQcm9taXNlIiwicmVzIiwic2V0VGltZW91dCIsImdldFN0YXRpY1BhdGhzIiwidXNlcnMiLCJzbGljZSIsInBhdGhzIiwibWFwIiwiU3RyaW5nIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/profile/[id].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/profile/[id].js"));
module.exports = __webpack_exports__;

})();