"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[slug]/page",{

/***/ "(app-pages-browser)/./app/components/PopupCarousel.tsx":
/*!******************************************!*\
  !*** ./app/components/PopupCarousel.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PopupCarousel: function() { return /* binding */ PopupCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/scrollbar */ \"(app-pages-browser)/./node_modules/swiper/modules/scrollbar.css\");\n/* __next_internal_client_entry_do_not_use__ PopupCarousel auto */ \n\n\n\n\n\n\nfunction PopupCarousel(props) {\n    console.log(images);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"popup-carousel\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                modules: [\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation,\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination,\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Scrollbar,\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_1__.A11y,\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay\n                ],\n                spaceBetween: 50,\n                slidesPerView: 1,\n                autoplay: {\n                    delay: 3000\n                },\n                navigation: true,\n                pagination: {\n                    clickable: true\n                },\n                children: props.images.map((e, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/2.jpeg\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/PopupCarousel.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 29\n                        }, this)\n                    }, i, false, {\n                        fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/PopupCarousel.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 25\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/PopupCarousel.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"close-button\",\n                onClick: onClose,\n                children: \"Close\"\n            }, void 0, false, {\n                fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/PopupCarousel.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/PopupCarousel.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_c = PopupCarousel;\nvar _c;\n$RefreshReg$(_c, \"PopupCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1BvcHVwQ2Fyb3VzZWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVtRjtBQUVoQztBQUUvQjtBQUNXO0FBQ0E7QUFDRDtBQUV2QixTQUFTTyxjQUFjQyxLQUFTO0lBQ25DQyxRQUFRQyxHQUFHLENBQUNDO0lBRVoscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDUixnREFBTUE7Z0JBQ0hTLFNBQVM7b0JBQUNkLHNEQUFVQTtvQkFBRUMsc0RBQVVBO29CQUFFQyxxREFBU0E7b0JBQUVDLGdEQUFJQTtvQkFBRUMsb0RBQVFBO2lCQUFDO2dCQUM1RFcsY0FBYztnQkFDZEMsZUFBZTtnQkFDZkMsVUFBVTtvQkFBRUMsT0FBTztnQkFBSztnQkFDeEJDLFVBQVU7Z0JBQ1ZDLFlBQVk7b0JBQUVDLFdBQVc7Z0JBQUs7MEJBRzFCYixNQUFNRyxNQUFNLENBQUNXLEdBQUcsQ0FBQyxDQUFDQyxHQUFPQyxrQkFDckIsOERBQUNsQixxREFBV0E7a0NBQ1IsNEVBQUNtQjs0QkFBSUMsS0FBSTs0QkFBVUMsS0FBSTs7Ozs7O3VCQURUSDs7Ozs7Ozs7OzswQkFNOUIsOERBQUNJO2dCQUFPZixXQUFVO2dCQUFlZ0IsU0FBU0M7MEJBQVM7Ozs7Ozs7Ozs7OztBQU0vRDtLQTNCZ0J2QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Qb3B1cENhcm91c2VsLnRzeD84YzI5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24sIFNjcm9sbGJhciwgQTExeSwgQXV0b3BsYXkgfSBmcm9tICdzd2lwZXIvbW9kdWxlcyc7XG5cbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xuXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0ICdzd2lwZXIvY3NzL25hdmlnYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3Njcm9sbGJhcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBQb3B1cENhcm91c2VsKHByb3BzOmFueSkge1xuICAgIGNvbnNvbGUubG9nKGltYWdlcyk7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jYXJvdXNlbFwiPlxuICAgICAgICAgICAgPFN3aXBlclxuICAgICAgICAgICAgICAgIG1vZHVsZXM9e1tOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBTY3JvbGxiYXIsIEExMXksIEF1dG9wbGF5XX1cbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezUwfVxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XG4gICAgICAgICAgICAgICAgYXV0b3BsYXk9e3sgZGVsYXk6IDMwMDAgfX1cbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmltYWdlcy5tYXAoKGU6YW55LCBpOmFueSk9PihcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLzIuanBlZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvU3dpcGVyPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS1idXR0b25cIiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiU2Nyb2xsYmFyIiwiQTExeSIsIkF1dG9wbGF5IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJQb3B1cENhcm91c2VsIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwibW9kdWxlcyIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJhdXRvcGxheSIsImRlbGF5IiwibmF2aWdhdGlvbiIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJtYXAiLCJlIiwiaSIsImltZyIsInNyYyIsImFsdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/PopupCarousel.tsx\n"));

/***/ })

});